import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const root = resolve(process.cwd());
const distDir = join(root, "dist");
const dataDir = join(root, "data");
const dbPath = join(dataDir, "nexora-db.json");
const preferredPort = Number(process.env.PORT || 5173);
const databaseUrl = process.env.DATABASE_URL || "";
const adminPassword = process.env.ADMIN_PASSWORD || "change-this-before-launch";
let postgresPool = null;
let postgresReady = null;
const userSessions = new Map();
const adminSessions = new Map();

const defaultDb = {
  version: 1,
  content: {},
  requests: [],
  orders: [],
  users: [],
  notifications: [],
  visits: { total: 0, log: [] },
  updatedAt: new Date().toISOString()
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

async function ensureDb() {
  await mkdir(dataDir, { recursive: true });
  if (!existsSync(dbPath)) {
    await writeFile(dbPath, JSON.stringify(defaultDb, null, 2));
  }
}

async function getPostgresPool() {
  if (!databaseUrl) return null;
  if (postgresPool) return postgresPool;
  if (!postgresReady) {
    postgresReady = (async () => {
      const { Pool } = await import("pg");
      const pool = new Pool({
        connectionString: databaseUrl,
        ssl: databaseUrl.includes("localhost") ? false : { rejectUnauthorized: false }
      });
      await pool.query(`
        CREATE TABLE IF NOT EXISTS nexora_state (
          id TEXT PRIMARY KEY,
          data JSONB NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `);
      await pool.query(
        "INSERT INTO nexora_state (id, data) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING",
        ["main", defaultDb]
      );
      postgresPool = pool;
      return postgresPool;
    })();
  }
  return postgresReady;
}

async function readDb() {
  const pool = await getPostgresPool();
  if (pool) {
    const result = await pool.query("SELECT data FROM nexora_state WHERE id = $1", ["main"]);
    return normalizeDb(result.rows[0]?.data || defaultDb);
  }

  await ensureDb();
  try {
    const text = await readFile(dbPath, "utf8");
    return normalizeDb(JSON.parse(text));
  } catch {
    return { ...defaultDb, updatedAt: new Date().toISOString() };
  }
}

async function writeDb(db) {
  const pool = await getPostgresPool();
  if (pool) {
    const next = normalizeDb(db);
    next.updatedAt = new Date().toISOString();
    await pool.query(
      "INSERT INTO nexora_state (id, data, updated_at) VALUES ($1, $2, NOW()) ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()",
      ["main", next]
    );
    return next;
  }

  await ensureDb();
  const next = normalizeDb(db);
  next.updatedAt = new Date().toISOString();
  await writeFile(dbPath, JSON.stringify(next, null, 2));
  return next;
}

function normalizeDb(db) {
  return {
    ...defaultDb,
    ...db,
    content: db?.content || {},
    requests: Array.isArray(db?.requests) ? db.requests : [],
    orders: Array.isArray(db?.orders) ? db.orders : [],
    users: Array.isArray(db?.users) ? db.users : [],
    notifications: Array.isArray(db?.notifications) ? db.notifications : [],
    visits: {
      total: Number(db?.visits?.total || 0),
      log: Array.isArray(db?.visits?.log) ? db.visits.log : []
    }
  };
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Cache-Control": "no-store",
    ...securityHeaders()
  });
  res.end(body);
}

function securityHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "SAMEORIGIN",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' https://js.paystack.co; connect-src 'self' https://api.paystack.co https://*.paystack.co; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; frame-src https://checkout.paystack.com https://*.paystack.co; base-uri 'self'; form-action 'self'"
  };
}

function readBody(req) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 30_000_000) {
        rejectBody(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolveBody(body ? JSON.parse(body) : {}));
    req.on("error", rejectBody);
  });
}

function publicState(db) {
  return {
    version: db.version || 1,
    content: sanitizeContent(db.content || {}),
    requests: [],
    orders: [],
    users: [],
    notifications: [],
    visits: {
      total: Number(db.visits?.total || 0),
      log: []
    },
    updatedAt: db.updatedAt || new Date().toISOString()
  };
}

function adminState(db) {
  const normalized = normalizeDb(db);
  return {
    ...normalized,
    content: sanitizeContent(normalized.content || {}),
    users: (db.users || []).map(safeUser)
  };
}

function sanitizeContent(content) {
  return {
    ...content,
    settings: {
      ...(content.settings || {}),
      adminPassword: undefined
    }
  };
}

function safeUser(user = {}) {
  return {
    id: user.id,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    phone: user.phone,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

function userContact(user = {}) {
  return {
    id: user.id,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    phone: user.phone
  };
}

function bearerToken(req) {
  const header = req.headers.authorization || "";
  return header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : "";
}

function createToken(prefix) {
  return `${prefix}_${randomBytes(32).toString("hex")}`;
}

function cleanUsername(value) {
  return String(value || "").trim().replace(/\s+/g, "").toLowerCase();
}

function sha256(value) {
  return createHash("sha256").update(String(value || "")).digest("hex");
}

function createPasswordDigest(value) {
  const salt = randomBytes(16).toString("hex");
  const digest = scryptSync(String(value || ""), salt, 64).toString("hex");
  return `scrypt:${salt}:${digest}`;
}

function verifyPassword(value, user = {}) {
  if (user.passwordDigest?.startsWith("scrypt:")) {
    const [, salt, digest] = user.passwordDigest.split(":");
    const attempt = scryptSync(String(value || ""), salt, 64);
    const expected = Buffer.from(digest, "hex");
    return expected.length === attempt.length && timingSafeEqual(expected, attempt);
  }
  return user.passwordHash && user.passwordHash === sha256(value);
}

function sessionUser(req, db) {
  const token = bearerToken(req);
  const userId = userSessions.get(token);
  if (!userId) return null;
  return (db.users || []).find((user) => user.id === userId) || null;
}

function isAdminSession(req) {
  const token = bearerToken(req);
  return Boolean(token && adminSessions.has(token));
}

function requestDetails(details) {
  if (!details || typeof details !== "object" || Array.isArray(details)) return {};
  return Object.fromEntries(
    Object.entries(details)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, typeof value === "string" ? value.trim() : value])
  );
}

async function saveRegistrationRequest(db, user) {
  db.requests.unshift({
    id: createToken("req"),
    type: "New Registration",
    user: userContact(user),
    details: {
      name: user.fullName,
      username: user.username,
      email: user.email,
      phone: user.phone
    },
    status: "pending",
    createdAt: new Date().toISOString()
  });
}

function mergeAdminPayload(current, payload) {
  const next = normalizeDb({
    ...current,
    content: payload.content || current.content,
    requests: Array.isArray(payload.requests) ? payload.requests : current.requests,
    orders: Array.isArray(payload.orders) ? payload.orders : current.orders,
    notifications: Array.isArray(payload.notifications) ? payload.notifications : current.notifications,
    visits: payload.visits || current.visits
  });
  next.users = current.users || [];
  return next;
}

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  const filePath = resolve(distDir, `.${pathname}`);
  const relativePath = relative(distDir, filePath);
  const safePath =
    relativePath.startsWith("..") || relativePath.startsWith("/") || relativePath.startsWith("\\") ? join(distDir, "index.html") : filePath;
  const target = existsSync(safePath) ? safePath : join(distDir, "index.html");

  if (!existsSync(target)) {
    sendJson(res, 404, {
      error: "Build output not found. Run npm run build first."
    });
    return;
  }

  const ext = extname(target);
  const assetDir = join(distDir, "assets");
  const cacheControl = ext === ".html" ? "no-cache" : target.startsWith(assetDir) ? "public, max-age=31536000, immutable" : "public, max-age=3600";
  res.writeHead(200, {
    "Content-Type": mimeTypes[ext] || "application/octet-stream",
    "Cache-Control": cacheControl,
    ...securityHeaders()
  });
  createReadStream(target).pipe(res);
}

const server = createServer(async (req, res) => {
  try {
    if (req.method === "OPTIONS") {
      sendJson(res, 204, {});
      return;
    }

    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname === "/api/health" && req.method === "GET") {
      const db = await readDb();
      sendJson(res, 200, {
        ok: true,
        storage: databaseUrl ? "postgres" : "json",
        users: db.users.length,
        requests: db.requests.length,
        updatedAt: db.updatedAt
      });
      return;
    }

    if ((url.pathname === "/api/state" || url.pathname === "/api/public-state") && req.method === "GET") {
      sendJson(res, 200, publicState(await readDb()));
      return;
    }

    if (url.pathname === "/api/state" && (req.method === "POST" || req.method === "PUT")) {
      if (!isAdminSession(req)) {
        sendJson(res, 401, { error: "Admin login required." });
        return;
      }
      const db = await readDb();
      const payload = await readBody(req);
      sendJson(res, 200, adminState(await writeDb(mergeAdminPayload(db, payload))));
      return;
    }

    if (url.pathname === "/api/visit" && req.method === "POST") {
      const db = await readDb();
      const payload = await readBody(req);
      db.visits ||= { total: 0, log: [] };
      db.visits.total = Number(db.visits.total || 0) + 1;
      db.visits.log.unshift({ page: String(payload.page || "home"), createdAt: new Date().toISOString() });
      db.visits.log = db.visits.log.slice(0, 200);
      sendJson(res, 200, publicState(await writeDb(db)));
      return;
    }

    if (url.pathname === "/api/auth/register" && req.method === "POST") {
      const db = await readDb();
      const payload = await readBody(req);
      const username = cleanUsername(payload.username);
      const email = String(payload.email || "").trim().toLowerCase();
      const password = String(payload.password || "");
      if (!payload.fullName || !username || !email || !payload.phone || password.length < 4) {
        sendJson(res, 400, { error: "Complete all registration fields." });
        return;
      }
      if (password !== String(payload.confirmPassword || "")) {
        sendJson(res, 400, { error: "Passwords do not match." });
        return;
      }
      if (db.users.some((user) => String(user.username).toLowerCase() === username)) {
        sendJson(res, 409, { error: "That username is already registered." });
        return;
      }
      if (db.users.some((user) => String(user.email).toLowerCase() === email)) {
        sendJson(res, 409, { error: "That email is already registered." });
        return;
      }
      const now = new Date().toISOString();
      const user = {
        id: createToken("usr"),
        fullName: String(payload.fullName || "").trim(),
        username,
        email,
        phone: String(payload.phone || "").trim(),
        passwordDigest: createPasswordDigest(password),
        createdAt: now,
        updatedAt: now
      };
      db.users.unshift(user);
      await saveRegistrationRequest(db, user);
      await writeDb(db);
      const token = createToken("user");
      userSessions.set(token, user.id);
      sendJson(res, 200, { token, user: safeUser(user), notifications: [] });
      return;
    }

    if (url.pathname === "/api/auth/login" && req.method === "POST") {
      const db = await readDb();
      const payload = await readBody(req);
      const username = cleanUsername(payload.username);
      const user = db.users.find((item) => String(item.username).toLowerCase() === username);
      if (!user || !verifyPassword(payload.password, user)) {
        sendJson(res, 401, { error: "Invalid username or password." });
        return;
      }
      if (!user.passwordDigest) {
        user.passwordDigest = createPasswordDigest(payload.password);
        delete user.passwordHash;
        await writeDb(db);
      }
      const token = createToken("user");
      userSessions.set(token, user.id);
      sendJson(res, 200, {
        token,
        user: safeUser(user),
        notifications: db.notifications.filter((item) => item.userId === user.id)
      });
      return;
    }

    if (url.pathname === "/api/me" && req.method === "GET") {
      const db = await readDb();
      const user = sessionUser(req, db);
      if (!user) {
        sendJson(res, 401, { error: "Login required." });
        return;
      }
      sendJson(res, 200, {
        user: safeUser(user),
        notifications: db.notifications.filter((item) => item.userId === user.id)
      });
      return;
    }

    if (url.pathname === "/api/profile" && req.method === "POST") {
      const db = await readDb();
      const user = sessionUser(req, db);
      if (!user) {
        sendJson(res, 401, { error: "Login required." });
        return;
      }
      const payload = await readBody(req);
      const username = cleanUsername(payload.username);
      const email = String(payload.email || "").trim().toLowerCase();
      if (db.users.some((item) => item.id !== user.id && String(item.username).toLowerCase() === username)) {
        sendJson(res, 409, { error: "That username is already used." });
        return;
      }
      if (db.users.some((item) => item.id !== user.id && String(item.email).toLowerCase() === email)) {
        sendJson(res, 409, { error: "That email is already used." });
        return;
      }
      Object.assign(user, {
        fullName: String(payload.fullName || "").trim(),
        username,
        email,
        phone: String(payload.phone || "").trim(),
        updatedAt: new Date().toISOString()
      });
      if (payload.password) user.passwordDigest = createPasswordDigest(payload.password);
      await writeDb(db);
      sendJson(res, 200, { user: safeUser(user) });
      return;
    }

    if (url.pathname === "/api/requests" && req.method === "POST") {
      const db = await readDb();
      const user = sessionUser(req, db);
      if (!user) {
        sendJson(res, 401, { error: "Login required." });
        return;
      }
      const payload = await readBody(req);
      const request = {
        id: createToken("req"),
        type: String(payload.type || "Request"),
        user: userContact(user),
        details: requestDetails(payload.details),
        status: "pending",
        createdAt: new Date().toISOString()
      };
      db.requests.unshift(request);
      db.requests = db.requests.slice(0, 300);
      await writeDb(db);
      sendJson(res, 200, { request });
      return;
    }

    if (url.pathname === "/api/orders" && req.method === "POST") {
      const db = await readDb();
      const user = sessionUser(req, db);
      if (!user) {
        sendJson(res, 401, { error: "Login required." });
        return;
      }
      const payload = await readBody(req);
      const order = {
        ...requestDetails(payload.order),
        id: createToken("ord"),
        user: userContact(user),
        createdAt: new Date().toISOString()
      };
      db.orders.unshift(order);
      db.orders = db.orders.slice(0, 200);
      await writeDb(db);
      sendJson(res, 200, { order });
      return;
    }

    if (url.pathname === "/api/notifications" && req.method === "GET") {
      const db = await readDb();
      const user = sessionUser(req, db);
      if (!user) {
        sendJson(res, 401, { error: "Login required." });
        return;
      }
      sendJson(res, 200, { notifications: db.notifications.filter((item) => item.userId === user.id) });
      return;
    }

    if ((url.pathname === "/api/notifications/seen" || url.pathname === "/api/notifications/read") && req.method === "POST") {
      const db = await readDb();
      const user = sessionUser(req, db);
      if (!user) {
        sendJson(res, 401, { error: "Login required." });
        return;
      }
      db.notifications.forEach((item) => {
        if (item.userId === user.id) {
          item.alerted = true;
          if (url.pathname.endsWith("/read")) item.read = true;
        }
      });
      await writeDb(db);
      sendJson(res, 200, { notifications: db.notifications.filter((item) => item.userId === user.id) });
      return;
    }

    if (url.pathname === "/api/admin/login" && req.method === "POST") {
      const db = await readDb();
      const payload = await readBody(req);
      const storedPassword = db.content?.settings?.adminPassword;
      const password = process.env.ADMIN_PASSWORD || storedPassword || adminPassword;
      if (cleanUsername(payload.username) !== "admin" || String(payload.password || "") !== String(password) || password === "change-this-before-launch") {
        sendJson(res, 401, { error: "Invalid admin login." });
        return;
      }
      const token = createToken("admin");
      adminSessions.set(token, Date.now());
      sendJson(res, 200, { token, state: adminState(db) });
      return;
    }

    if (url.pathname === "/api/admin/state" && req.method === "GET") {
      if (!isAdminSession(req)) {
        sendJson(res, 401, { error: "Admin login required." });
        return;
      }
      sendJson(res, 200, adminState(await readDb()));
      return;
    }

    if (url.pathname === "/api/admin/state" && (req.method === "POST" || req.method === "PUT")) {
      if (!isAdminSession(req)) {
        sendJson(res, 401, { error: "Admin login required." });
        return;
      }
      const db = await readDb();
      const payload = await readBody(req);
      sendJson(res, 200, adminState(await writeDb(mergeAdminPayload(db, payload))));
      return;
    }

    await serveStatic(req, res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error" });
  }
});

function listen(port) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && port === preferredPort) {
      listen(5174);
      return;
    }
    throw error;
  });

  const host = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");
  server.listen(port, host, () => {
    console.log(`Nexora server listening on ${host}:${port}`);
    if (host === "0.0.0.0") console.log(`Local preview URL: http://127.0.0.1:${port}/`);
    console.log(databaseUrl ? "Shared database: PostgreSQL DATABASE_URL" : `Shared database: ${dbPath}`);
  });
}

listen(preferredPort);
