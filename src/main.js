import "./styles.css";
import * as THREE from "three";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  BookOpen,
  Building2,
  CalendarCheck,
  Camera,
  Check,
  ClipboardList,
  Code2,
  DollarSign,
  Eye,
  EyeOff,
  ExternalLink,
  FileText,
  Filter,
  Globe2,
  GraduationCap,
  Home,
  Image,
  LayoutDashboard,
  Layers3,
  Link2,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Pencil,
  Phone,
  Plus,
  Rocket,
  Search,
  Send,
  Settings,
  ShoppingBag,
  Sparkles,
  Target,
  Trash2,
  Upload,
  Users,
  WandSparkles,
  X,
  createIcons
} from "lucide";

const iconMap = {
  ArrowRight,
  BadgeCheck,
  Bell,
  BookOpen,
  Building2,
  CalendarCheck,
  Camera,
  Check,
  ClipboardList,
  Code2,
  DollarSign,
  Eye,
  EyeOff,
  ExternalLink,
  FileText,
  Filter,
  Globe2,
  GraduationCap,
  Home,
  Image,
  LayoutDashboard,
  Layers3,
  Link2,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Pencil,
  Phone,
  Plus,
  Rocket,
  Search,
  Send,
  Settings,
  ShoppingBag,
  Sparkles,
  Target,
  Trash2,
  Upload,
  Users,
  WandSparkles,
  X
};

const CONTENT_KEY = "nexoraContentV3";
const REQUESTS_KEY = "nexoraRequestsV3";
const ORDERS_KEY = "nexoraOrdersV3";
const VISITS_KEY = "nexoraVisitsV3";
const USERS_KEY = "nexoraUsersV3";
const CURRENT_USER_KEY = "nexoraCurrentUserV3";
const CURRENT_USER_PROFILE_KEY = "nexoraCurrentUserProfileV3";
const USER_SESSION_KEY = "nexoraUserSessionV3";
const NOTIFICATIONS_KEY = "nexoraNotificationsV3";
const AUTH_KEY = "nexoraAdminAuthV3";
const ADMIN_TOKEN_KEY = "nexoraAdminTokenV3";
const ADMIN_SECTION_KEY = "nexoraAdminSectionV3";
const ADMIN_COLLAPSED_KEY = "nexoraAdminCollapsedV3";
const PAYSTACK_PUBLIC_KEY = "pk_live_c04e70a8d892831854321e76b0bd1f32fe0ed277";

const CONTACT_EMAIL = "nexoralabs07@gmail.com";
const CONTACT_PHONE_DISPLAY = "+234 906 020 1328";
const CONTACT_PHONE_TEL = "+2349060201328";
const WHATSAPP_NUMBER = "2349060201328";

const PUBLIC_PAGES = {
  home: { title: "Home", href: "index.html" },
  services: { title: "Services", href: "services.html" },
  portfolio: { title: "Portfolio", href: "portfolio.html" },
  offers: { title: "Offers", href: "offers.html" },
  contact: { title: "Contact", href: "contact.html" }
};

const serviceLinks = [
  {
    id: "web",
    icon: "monitor-smartphone",
    title: "Web Design/Development",
    tag: "Premium builds",
    href: "web-design-development.html",
    body: "Websites, dashboards, e-commerce systems, and custom digital products built for trust and conversion."
  },
  {
    id: "graphics",
    icon: "palette",
    title: "Graphics Design",
    tag: "Brand visuals",
    href: "graphics-design.html",
    body: "Logos, branding, social media visuals, flyers, posters, and campaign creatives with polished mockups."
  },
  {
    id: "ads",
    icon: "megaphone",
    title: "Ads Expert",
    tag: "Paid growth",
    href: "ads-expert.html",
    body: "Focused campaign strategy, setup, creatives, and optimization for Meta, Google, Instagram, and TikTok."
  },
  {
    id: "real-estate",
    icon: "building-2",
    title: "Real Estate Agent",
    tag: "Property deals",
    href: "real-estate.html",
    body: "Listings, property search, buyer and seller inquiries, and verified real estate presentation."
  },
  {
    id: "affiliate",
    icon: "link-2",
    title: "Affiliate Marketer",
    tag: "Offer hub",
    href: "affiliate-marketing.html",
    body: "Curated offers, product cards, transparent affiliate guidance, and beginner-friendly resources."
  },
  {
    id: "academy",
    icon: "graduation-cap",
    title: "Learn With Nexora",
    tag: "Digital academy",
    href: "ai-generation.html",
    body: "Structured high-demand digital skill courses focused on projects, tools, workflows, and lifetime access."
  }
];

const defaultContent = {
  settings: {
    siteName: "NEXORA LABS",
    adminName: "Nexora Admin",
    accentColor: "#f4c95d",
    purpose:
      "Nexora was built to combine web services, design, marketing, and learning into one system.",
    revenueOffset: "0"
  },
  web: {
    budgetOptions: ["₦50k - ₦100k", "₦100k - ₦300k", "₦300k - ₦500k", "₦1M+"],
    styleOptions: ["Minimal", "Corporate", "Futuristic (3D)", "Luxury"],
    timelineOptions: ["Urgent (3-5 days)", "Standard (1-2 weeks)", "Flexible"],
    services: [
      {
        id: "web-service-1",
        title: "Custom Web Design",
        body: "Modern, user-focused designs tailored to your brand",
        icon: "palette",
        active: true
      },
      {
        id: "web-service-2",
        title: "Frontend Development",
        body: "Fast, responsive interfaces using modern technologies",
        icon: "monitor-smartphone",
        active: true
      },
      {
        id: "web-service-3",
        title: "Backend Development",
        body: "Secure systems, databases, and server-side logic",
        icon: "code-2",
        active: true
      },
      {
        id: "web-service-4",
        title: "E-commerce Websites",
        body: "Online stores with payments, product management, and tracking",
        icon: "shopping-bag",
        active: true
      }
    ],
    marketplace: [
      {
        id: "web-market-1",
        title: "Real Estate Pro Template",
        category: "Property",
        price: "₦120,000",
        body: "Listings, property details, search filters, and WhatsApp-ready lead flow.",
        demoUrl: "real-estate.html",
        active: true
      },
      {
        id: "web-market-2",
        title: "Luxury Portfolio Template",
        category: "Creator",
        price: "₦90,000",
        body: "Premium sections for services, proof, visuals, pricing, and direct inquiries.",
        demoUrl: "portfolio.html",
        active: true
      },
      {
        id: "web-market-3",
        title: "E-commerce Starter Template",
        category: "Store",
        price: "₦180,000",
        body: "Product cards, cart-ready layout, payment cues, reviews, and store sections.",
        demoUrl: "offers.html",
        active: true
      }
    ],
    reviews: [
      { id: "web-review-1", quote: "Clean, fast, and exactly the premium look I wanted.", author: "Startup founder", active: true },
      { id: "web-review-2", quote: "The website made my brand feel serious immediately.", author: "Creative lead", active: true }
    ]
  },
  graphics: {
    styleOptions: ["Minimal", "Bold", "Luxury", "Playful"],
    purposeOptions: ["Business", "Personal brand", "Event", "Ads/Marketing"],
    budgetOptions: ["₦10k - ₦50k", "₦50k - ₦150k", "₦150k+"],
    services: [
      { id: "graphics-service-1", title: "Logo Design", body: "Unique and memorable brand identities", icon: "badge-check", active: true },
      { id: "graphics-service-2", title: "Brand Identity", body: "Complete visual systems for your business", icon: "layers-3", active: true },
      { id: "graphics-service-3", title: "Social Media Designs", body: "Scroll-stopping content for engagement", icon: "image", active: true },
      { id: "graphics-service-4", title: "Marketing Materials", body: "Flyers, posters, and ad creatives that convert", icon: "megaphone", active: true }
    ],
    portfolio: [
      { id: "graphics-port-1", title: "Logo on Building", category: "Brand mockup", body: "Premium wall-sign logo presentation.", active: true },
      { id: "graphics-port-2", title: "Flyer in Hand", category: "Print mockup", body: "Event flyer shown in a realistic campaign setting.", active: true },
      { id: "graphics-port-3", title: "Instagram UI Preview", category: "Social mockup", body: "Social posts inside a clean mobile feed preview.", active: true },
      { id: "graphics-port-4", title: "Brand Kit Scene", category: "Identity", body: "Logo, colors, fonts, and usage direction in one view.", active: true }
    ],
    marketplace: [
      { id: "graphics-market-1", title: "Luxury Logo Template", category: "Logo", price: "₦25,000", body: "Editable premium logo direction with mockup preview.", demoUrl: "graphics-design.html#graphicsPortfolio", active: true },
      { id: "graphics-market-2", title: "Social Media Pack", category: "Social", price: "₦45,000", body: "Post, story, banner, and ad creative templates.", demoUrl: "graphics-design.html#graphicsPortfolio", active: true },
      { id: "graphics-market-3", title: "Event Flyer Template", category: "Flyer", price: "₦18,000", body: "Clean event flyer layout with print and social sizes.", demoUrl: "graphics-design.html#graphicsPortfolio", active: true }
    ],
    reviews: [
      { id: "graphics-review-1", quote: "The mockups made my logo feel like a real brand.", author: "Brand owner", active: true },
      { id: "graphics-review-2", quote: "My ad creatives looked cleaner and more trustworthy.", author: "Campaign client", active: true }
    ]
  },
  ads: {
    platforms: ["Facebook Ads", "Instagram Ads", "Google Ads", "TikTok Ads"],
    goals: ["Sales", "Leads", "Website Traffic", "Brand Awareness"],
    budgetOptions: ["₦10k - ₦50k", "₦50k - ₦200k", "₦200k+"],
    businessTypes: ["Real Estate", "E-commerce", "Personal Brand", "Other"],
    audienceOptions: ["Local", "Nationwide", "International"],
    durationOptions: ["1 day", "7 days", "14 days", "30 days", "Custom"],
    services: [
      { id: "ads-service-1", title: "Ad Strategy", body: "Targeting the right audience for maximum ROI", icon: "target", active: true },
      { id: "ads-service-2", title: "Campaign Setup", body: "Full ad creation and launch", icon: "rocket", active: true },
      { id: "ads-service-3", title: "Ad Creatives", body: "High-converting visuals and copy", icon: "palette", active: true },
      { id: "ads-service-4", title: "Optimization", body: "Continuous improvement for better results", icon: "badge-check", active: true }
    ],
    results: [
      { id: "ads-result-1", title: "Test campaign", metric: "2.8% CTR", body: "Small audience test used to validate offer angle and creative direction.", active: true },
      { id: "ads-result-2", title: "Lead form test", metric: "18 leads", body: "Clearly labeled test run for a service offer with improved follow-up flow.", active: true },
      { id: "ads-result-3", title: "Before/after", metric: "+34% clicks", body: "Sharper headline and creative structure improved click intent.", active: true }
    ],
    packages: [
      { id: "ads-pack-1", title: "Starter Campaign Setup", price: "₦80,000", body: "Goal, audience, setup, and one ad creative direction.", includes: ["Campaign structure", "Targeting", "Launch support"], active: true },
      { id: "ads-pack-2", title: "Lead Generation Package", price: "₦150,000", body: "Lead campaign setup with creative angles and follow-up flow.", includes: ["Lead objective", "Form setup", "Optimization plan"], active: true },
      { id: "ads-pack-3", title: "E-commerce Sales Booster", price: "₦220,000", body: "Sales campaign structure for products, offers, and retargeting.", includes: ["Catalog angle", "Ad creatives", "Retargeting"], active: true }
    ]
  },
  realEstate: {
    listings: [
      { id: "estate-1", title: "Modern 3-Bedroom Apartment", price: "₦45,000,000", location: "Lekki, Lagos", type: "Apartment", mode: "Buy", body: "Bright rooms, fitted kitchen, secure estate, and easy road access.", status: "available", active: true },
      { id: "estate-2", title: "Luxury Duplex With BQ", price: "₦180,000,000", location: "Ajah, Lagos", type: "Duplex", mode: "Buy", body: "Spacious duplex with premium finish, parking, and family-friendly layout.", status: "available", active: true },
      { id: "estate-3", title: "Prime Commercial Shop", price: "₦2,500,000/year", location: "Ikeja, Lagos", type: "Shop", mode: "Rent", body: "High-footfall location for retail, service brands, or office use.", status: "available", active: true },
      { id: "estate-4", title: "Dry Land Plot", price: "₦30,000,000", location: "Ibeju-Lekki, Lagos", type: "Land", mode: "Buy", body: "Verified land option near developing commercial corridors.", status: "sold", active: true }
    ],
    services: [
      { id: "estate-service-1", title: "Property Sales", body: "Helping you find and secure the right property", icon: "home", active: true },
      { id: "estate-service-2", title: "Property Rentals", body: "Affordable and verified rental options", icon: "building-2", active: true },
      { id: "estate-service-3", title: "Property Listings", body: "List your property and reach real buyers", icon: "clipboard-list", active: true },
      { id: "estate-service-4", title: "Consultation", body: "Guidance on real estate decisions", icon: "message-circle", active: true }
    ],
    trust: ["Verified Listings", "Transparent Process", "Secure Transactions"],
    testimonials: [
      { id: "estate-test-1", quote: "Got my apartment in 3 days", author: "Rental client", active: true },
      { id: "estate-test-2", quote: "Smooth and reliable service", author: "Property buyer", active: true }
    ]
  },
  affiliate: {
    categories: ["Make Money Online", "Tools & Software", "Learning Platforms", "Business Resources"],
    offers: [
      { id: "aff-offer-1", title: "Affiliate Platform X", category: "Make Money Online", benefit: "Earn commissions by promoting digital products", audience: "Beginners who want a simple offer library", price: "Free signup", demoUrl: "affiliate-marketing.html#offers", active: true },
      { id: "aff-offer-2", title: "Creator Tool Suite", category: "Tools & Software", benefit: "Create content faster with practical digital tools", audience: "Creators and small business owners", price: "Partner offer", demoUrl: "affiliate-marketing.html#offers", active: true },
      { id: "aff-offer-3", title: "Business Skills Library", category: "Learning Platforms", benefit: "Learn practical digital skills at your own pace", audience: "Students and career switchers", price: "Discounted", demoUrl: "ai-generation.html", active: true },
      { id: "aff-offer-4", title: "Smart Business Resources", category: "Business Resources", benefit: "Use templates and systems that save setup time", audience: "Service providers and founders", price: "Partner offer", demoUrl: "offers.html", active: true }
    ],
    proof: ["Tested and verified offers", "Clear affiliate disclosure", "Beginner-friendly recommendations"],
    bonusTitle: "Free guide: How to start affiliate marketing",
    bonusBody: "A simple beginner checklist for choosing offers, creating content, and tracking links."
  },
  academy: {
    courses: [
      {
        id: "course-1",
        title: "Web Design & Development",
        body: "Learn how to design and build modern websites from scratch",
        outcomes: ["Create responsive layouts", "Use real development tools", "Build live projects", "Understand workflows"],
        originalPrice: "₦50,000",
        price: "₦15,000",
        imageUrl: "",
        accessUrl: "https://drive.google.com/",
        active: true
      },
      {
        id: "course-2",
        title: "Graphics Design",
        body: "Build clean brand visuals, social posts, flyers, and mockup presentations",
        outcomes: ["Design brand assets", "Create social templates", "Use Canva and Figma", "Present work professionally"],
        originalPrice: "₦50,000",
        price: "₦15,000",
        imageUrl: "",
        accessUrl: "https://drive.google.com/",
        active: true
      },
      {
        id: "course-3",
        title: "Affiliate Marketing",
        body: "Learn how to choose offers, create content, and build trust with buyers",
        outcomes: ["Pick credible offers", "Create bridge content", "Understand tracking", "Build offer pages"],
        originalPrice: "₦50,000",
        price: "₦15,000",
        imageUrl: "",
        accessUrl: "https://drive.google.com/",
        active: true
      },
      {
        id: "course-4",
        title: "Ads Management",
        body: "Understand campaign goals, targeting, creatives, and optimization",
        outcomes: ["Set campaign goals", "Build audiences", "Plan creatives", "Read ad metrics"],
        originalPrice: "₦50,000",
        price: "₦15,000",
        imageUrl: "",
        accessUrl: "https://drive.google.com/",
        active: true
      }
    ],
    paths: [
      { id: "path-1", title: "Web Development", body: "Design, structure, build, and publish modern websites.", active: true },
      { id: "path-2", title: "Graphics Design", body: "Create visual identities and marketing assets.", active: true },
      { id: "path-3", title: "Affiliate Marketing", body: "Promote trusted offers with clear content systems.", active: true },
      { id: "path-4", title: "Ads Management", body: "Launch focused campaigns and improve results.", active: true }
    ],
    modules: ["Module 1: Introduction", "Module 2: Tools & Setup", "Module 3: Practical Work", "Module 4: Real Projects"],
    benefits: ["Full lifetime access", "Practical, real-world skills", "Project-based learning", "Downloadable resources"],
    tools: ["Figma", "Canva", "VS Code", "Ad Platforms"],
    trust: ["Structured and beginner-friendly", "Focused on real skills, not theory"]
  }
};

let visitRecorded = false;
let adminSection = localStorage.getItem(ADMIN_SECTION_KEY) || "home";
let sharedState = null;
let apiBaseUrl = "";

const shell = document.querySelector("#siteShell");
const currentPage = shell?.dataset.page || "home";

initApp();

async function initApp() {
  sharedState = await loadSharedState();
  mount();
}

function mount() {
  if (!shell) return;

  const content = loadContent();
  applyTheme(content);

  if (currentPage !== "admin" && !getCurrentUser()) {
    shell.innerHTML = publicAuthPage(content);
    createIcons({ icons: iconMap });
    initAuthForms();
    initPasswordToggles();
    initLoader();
    return;
  }

  if (currentPage !== "admin" && !visitRecorded) {
    recordVisit(currentPage);
    visitRecorded = true;
  }

  shell.innerHTML =
    currentPage === "admin"
      ? adminPage(content)
      : `
        ${siteHeader(currentPage, content)}
        <main id="mainContent">
          ${renderPage(currentPage, content)}
        </main>
        ${siteFooter(content)}
        ${floatingStartButton()}
        ${floatingWhatsappButton()}
        ${globalModal()}
        ${profileModal()}
        ${notificationModal()}
        <div class="cursor-glow" aria-hidden="true"></div>
      `;

  createIcons({ icons: iconMap });
  initNavigation();
  initPasswordToggles();
  initPublicInteractions(content);
  initAdmin(content);
  initRevealAnimations();
  initCursorGlow();
  initLoader();

  const sceneCanvas = document.querySelector("[data-scene]");
  initLuxuryScene(sceneCanvas, sceneCanvas?.dataset.scene || currentPage);
}

function renderPage(page, content) {
  if (page === "services") return servicesPage(content);
  if (page === "portfolio") return portfolioPage(content);
  if (page === "offers") return offersPage(content);
  if (page === "contact") return contactPage(content);
  if (page === "web") return webPage(content);
  if (page === "graphics") return graphicsPage(content);
  if (page === "ads") return adsPage(content);
  if (page === "real-estate") return realEstatePage(content);
  if (page === "affiliate") return affiliatePage(content);
  if (page === "ai") return academyPage(content);
  if (page === "privacy") return legalPage("Privacy Policy", "How Nexora handles account, request, notification, and payment-related information.", privacySections());
  if (page === "terms") return legalPage("Terms of Service", "The usage terms for Nexora services, courses, payments, and account access.", termsSections());
  return homePage(content);
}

function siteHeader(activePage, content) {
  const user = getCurrentUser();
  const navItems = Object.entries(PUBLIC_PAGES)
    .map(([key, page]) => `<a href="${page.href}"${key === activePage ? ' aria-current="page"' : ""}>${page.title}</a>`)
    .join("");

  return `
    <div class="mini-loader" data-loader></div>
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="${esc(content.settings.siteName)} home">
        ${brandMarkup(content.settings.siteName)}
      </a>
      <nav class="site-nav" id="siteNav" aria-label="Primary navigation">
        ${navItems}
      </nav>
      <div class="user-actions">
        <a class="nav-cta" href="contact.html"><i data-lucide="calendar-check"></i> Start</a>
        <button class="icon-btn notification-btn" type="button" data-notification-open aria-label="Notifications">
          <i data-lucide="bell"></i>
          ${userUnreadCount(user?.id) ? `<em>${userUnreadCount(user?.id)}</em>` : ""}
        </button>
        <button class="profile-chip" type="button" data-profile-open><i data-lucide="users"></i>${esc(user?.fullName?.split(" ")[0] || user?.username || "Profile")}</button>
        <button class="icon-btn" type="button" data-user-logout aria-label="Log out"><i data-lucide="log-out"></i></button>
      </div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="siteNav" aria-label="Open navigation">
        <i data-lucide="menu"></i>
      </button>
    </header>
  `;
}

function siteFooter(content) {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <a class="brand" href="index.html">${brandMarkup(content.settings.siteName)}</a>
        <p>${esc(content.settings.purpose)}</p>
      </div>
      <div class="footer-column">
        <strong>Services</strong>
        ${serviceLinks.slice(0, 4).map((item) => `<a href="${item.href}">${item.title}</a>`).join("")}
      </div>
      <div class="footer-column">
        <strong>Growth</strong>
        ${serviceLinks.slice(4).map((item) => `<a href="${item.href}">${item.title}</a>`).join("")}
        <a href="offers.html">Offers</a>
      </div>
      <div class="footer-column footer-contact">
        <strong>Contact</strong>
        <a href="${whatsappHref("Hello NEXORA LABS, I want to start a project.")}" target="_blank" rel="noopener">${whatsappIcon()} WhatsApp</a>
        <a href="${emailHref("Project inquiry")}"><i data-lucide="mail"></i>${CONTACT_EMAIL}</a>
        <a href="tel:${CONTACT_PHONE_TEL}"><i data-lucide="phone"></i>${CONTACT_PHONE_DISPLAY}</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
      </div>
    </footer>
  `;
}

function brandMarkup(siteName = "NEXORA LABS") {
  const [first = "NEXORA", second = "LABS"] = siteName.split(" ");
  return `
    <span class="brand-mark"><span>N</span></span>
    <span class="brand-copy">
      <strong>${esc(first)}</strong>
      <span>${esc(second || "LABS")}</span>
    </span>
  `;
}

function hero({ scene, eyebrow, title, copy, primary, secondary, consoleTitle = "Nexora system" }) {
  return `
    <section class="scene-hero reveal">
      <canvas class="scene-canvas" data-scene="${scene}" aria-hidden="true"></canvas>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><i data-lucide="sparkles"></i>${esc(eyebrow)}</p>
          <h1>${esc(title)}</h1>
          <p class="hero-lede">${esc(copy)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${primary.href}"><i data-lucide="${primary.icon}"></i>${esc(primary.label)}</a>
            <a class="btn btn-ghost" href="${secondary.href}"><i data-lucide="${secondary.icon}"></i>${esc(secondary.label)}</a>
          </div>
        </div>
        <div class="hero-console tilt-card">
          <span>${esc(consoleTitle)}</span>
          ${serviceLinks
            .map(
              (item, index) => `
                <a href="${item.href}" style="--delay:${index}">
                  <i data-lucide="${item.icon}"></i>${esc(item.title)}
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function homePage(content) {
  const activeCourses = activeItems(content.academy.courses).length;
  const activeListings = activeItems(content.realEstate.listings).length;
  const users = getUsers().length;
  return `
    ${hero({
      scene: "home",
      eyebrow: "Digital growth studio",
      title: "Web services, design, marketing, property, offers, and learning in one premium system.",
      copy: "Nexora gives every service a sharp page, clear action path, and polished visual experience.",
      primary: { href: "contact.html", label: "Start a project", icon: "send" },
      secondary: { href: "services.html", label: "Explore services", icon: "external-link" },
      consoleTitle: "Service matrix"
    })}
    <section class="stats-band reveal" aria-label="Nexora highlights">
      ${[
        ["6", "service pages"],
        [String(activeCourses), "active courses"],
        [String(activeListings), "active listings"],
        [String(users), "registered users"]
      ]
        .map(([value, label]) => `<div class="stat-tile tilt-card"><strong>${value}</strong><span>${label}</span></div>`)
        .join("")}
    </section>
    <section class="purpose-band reveal">
      <p>${esc(content.settings.purpose)}</p>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("launch-grade trust", "Premium websites need trust signals before people pay, register, or send requests.", "contact.html", "Ask a question")}
      <div class="platform-grid">
        ${[
          ["lock", "Account Access", "Users register, log in, edit profiles, and keep request history connected to their account."],
          ["bell", "Website Notifications", "Admins can reply inside the website and users receive private notifications."],
          ["shopping-bag", "Paystack Payments", "Course payments open secure Paystack checkout before course access."],
          ["badge-check", "Admin Control", "Services, courses, listings, offers, messages, and marketplace items are controlled from one dashboard."]
        ]
          .map(([icon, title, body]) => `<article class="platform-card tilt-card"><i data-lucide="${icon}"></i><strong>${title}</strong><p>${body}</p></article>`)
          .join("")}
      </div>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("service ecosystem", "Choose the lane that fits what you want to build, sell, promote, or learn.", "services.html", "View all")}
      <div class="service-grid">
        ${serviceLinks.map((item) => publicServiceCard(item)).join("")}
      </div>
    </section>
    <section class="content-band split-band reveal">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="badge-check"></i> Reviews</p>
        <h2>Proof points that keep the brand feeling real.</h2>
      </div>
      <div class="review-grid">
        ${[...activeItems(content.web.reviews), ...activeItems(content.graphics.reviews)]
          .slice(0, 4)
          .map((item) => reviewCard(item))
          .join("")}
      </div>
    </section>
  `;
}

function servicesPage() {
  return `
    ${hero({
      scene: "services",
      eyebrow: "Nexora services",
      title: "A clean route into every high-value service and offer.",
      copy: "Each page is built around action: choose options, view proof, submit requests, and move fast.",
      primary: { href: "contact.html", label: "Request service", icon: "send" },
      secondary: { href: "offers.html", label: "View packages", icon: "shopping-bag" }
    })}
    <section class="content-band reveal">
      ${sectionHeader("service pages", "Every service has its own premium workflow.", "contact.html", "Start now")}
      <div class="service-grid">
        ${serviceLinks.map((item) => publicServiceCard(item)).join("")}
      </div>
    </section>
  `;
}

function portfolioPage(content) {
  const visuals = [
    ...activeItems(content.graphics.portfolio),
    ...activeItems(content.ads.results).map((item) => ({ ...item, category: item.metric })),
    ...activeItems(content.realEstate.listings).slice(0, 2)
  ];
  return `
    ${hero({
      scene: "portfolio",
      eyebrow: "Portfolio proof",
      title: "Mockups, campaign proof, and property visuals presented with polish.",
      copy: "Use this page as a premium proof wall for websites, graphics, ads, listings, and learning products.",
      primary: { href: "contact.html", label: "Build similar", icon: "send" },
      secondary: { href: "services.html", label: "Match service", icon: "arrow-right" }
    })}
    <section class="content-band reveal">
      ${sectionHeader("visual proof", "A few polished examples across the Nexora ecosystem.", "contact.html", "Request work")}
      <div class="project-grid">
        ${visuals.map((item, index) => portfolioCard(item, index)).join("")}
      </div>
    </section>
  `;
}

function offersPage(content) {
  const offerCards = [
    ...activeItems(content.web.marketplace).slice(0, 2),
    ...activeItems(content.graphics.marketplace).slice(0, 2),
    ...activeItems(content.ads.packages).slice(0, 2),
    ...activeItems(content.academy.courses).slice(0, 2)
  ];
  return `
    ${hero({
      scene: "offers",
      eyebrow: "Offer marketplace",
      title: "Packages, templates, campaigns, and courses in one clean store.",
      copy: "Every item has a clear benefit, price, preview direction, and action button.",
      primary: { href: "#offersGrid", label: "Explore offers", icon: "shopping-bag" },
      secondary: { href: "contact.html", label: "Request quote", icon: "send" }
    })}
    <section class="content-band reveal" id="offersGrid">
      ${sectionHeader("active offers", "Choose an offer or request customization.", "contact.html", "Ask first")}
      <div class="marketplace-grid">
        ${offerCards.map((item, index) => marketplaceCard(item, index, "Buy / Customize")).join("")}
      </div>
    </section>
  `;
}

function webPage(content) {
  const web = content.web;
  return `
    ${hero({
      scene: "web",
      eyebrow: "Web design and development",
      title: "Premium websites built to look expensive, load fast, and convert visitors.",
      copy: "Choose your budget, style, timeline, and build type so the project starts with clarity.",
      primary: { href: "#webRequest", label: "Start project", icon: "send" },
      secondary: { href: "#websiteMarketplace", label: "Live demos", icon: "external-link" },
      consoleTitle: "Website builder"
    })}
    <section class="content-band web-request-layout reveal" id="webRequest">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="monitor-smartphone"></i> Smart selector</p>
        <h2>Pick the website path that fits the job.</h2>
        <p>Short options, fast request flow, and a clear follow-up message.</p>
      </div>
      <form class="smart-form tilt-card" data-smart-request data-request-type="Web Design/Development" data-success-message="Request received. I'll get back to you within 1 hour.">
        ${contactFields()}
        <div class="choice-grid" role="radiogroup" aria-label="Pick a web service">
          ${choice("serviceTrack", "Design", "palette", true)}
          ${choice("serviceTrack", "Development", "code-2")}
          ${choice("serviceTrack", "Both", "layers-3")}
        </div>
        <div class="form-grid">
          ${selectField("budget", "Budget selector", web.budgetOptions)}
          ${selectField("style", "Style preference", web.styleOptions)}
          ${selectField("timeline", "Timeline", web.timelineOptions)}
          <label>Project details<textarea name="details" rows="4" placeholder="Describe the pages, features, or store you want." required></textarea></label>
        </div>
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Submit request</button>
      </form>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("service cards", "Clean web services with short premium descriptions.", "contact.html", "Discuss build")}
      <div class="service-grid web-capability-grid">
        ${activeItems(web.services).map((item) => compactServiceCard(item)).join("")}
      </div>
    </section>
    <section class="content-band marketplace-band reveal" id="websiteMarketplace">
      ${sectionHeader("website marketplace", "Ready website foundations with preview, demo, and customization path.", "contact.html", "Customize")}
      <div class="marketplace-grid">
        ${activeItems(web.marketplace).map((item, index) => marketplaceCard(item, index, "Buy / Customize")).join("")}
      </div>
    </section>
    <section class="content-band split-band reveal">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="sparkles"></i> Premium touches</p>
        <h2>Smooth scroll, cursor glow, floating CTA, hover effects, and a mini loader are built in.</h2>
      </div>
      <div class="review-grid">${activeItems(web.reviews).map((item) => reviewCard(item)).join("")}</div>
    </section>
  `;
}

function graphicsPage(content) {
  const graphics = content.graphics;
  return `
    ${hero({
      scene: "graphics",
      eyebrow: "Graphics design studio",
      title: "Designs That Capture Attention Instantly",
      copy: "Logos, branding, social media, and more",
      primary: { href: "#graphicsRequest", label: "Pick design service", icon: "send" },
      secondary: { href: "#graphicsPortfolio", label: "View portfolio", icon: "image" },
      consoleTitle: "Visual mockups"
    })}
    <section class="floating-mockups reveal" aria-label="Design mockups">
      ${["Logo on wall", "Billboard", "Phone screen"].map((title, index) => visualMockup({ title, category: "3D mockup" }, index, "graphics")).join("")}
    </section>
    <section class="content-band web-request-layout reveal" id="graphicsRequest">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="palette"></i> Pick a design service</p>
        <h2>I design clean, high-impact visuals that make your brand stand out.</h2>
      </div>
      <form class="smart-form tilt-card" data-smart-request data-dynamic-form data-request-type="Graphics Design" data-success-message="Request received. I'll get back to you within 1 hour.">
        ${contactFields()}
        <div class="choice-grid" role="radiogroup" aria-label="Pick a design service">
          ${["Logo Design", "Brand Identity", "Social Media Designs", "Flyers / Posters", "Ads Creatives"]
            .map((item, index) => choice("designService", item, ["badge-check", "layers-3", "image", "file-text", "megaphone"][index], index === 0))
            .join("")}
        </div>
        ${dynamicPanel("designService", "Logo Design", `
          ${selectField("logoType", "Logo type", ["Minimal Logo", "3D Logo", "Mascot Logo"])}
          <label>Custom option<input name="customLogo" type="text" placeholder="Type your custom logo idea"></label>
        `)}
        ${dynamicPanel("designService", "Brand Identity", selectField("brandKit", "Brand kit", ["Logo + Colors + Fonts", "Full Brand Kit"]))}
        ${dynamicPanel("designService", "Social Media Designs", selectField("socialType", "Social media type", ["Instagram Posts", "Banners", "Ads Creatives"]))}
        ${dynamicPanel("designService", "Flyers / Posters", `<label>Describe what you want<textarea name="flyerDetails" rows="4" placeholder="Event, product, audience, size, deadline"></textarea></label>`)}
        ${dynamicPanel("designService", "Ads Creatives", `<label>Describe what you want<textarea name="adsCreativeDetails" rows="4" placeholder="Product, offer, platform, target audience"></textarea></label>`)}
        <div class="form-grid">
          ${selectField("style", "Style selection", graphics.styleOptions)}
          ${selectField("purpose", "Purpose", graphics.purposeOptions)}
          ${selectField("budget", "Budget filter", graphics.budgetOptions)}
        </div>
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Submit request</button>
      </form>
    </section>
    <section class="content-band reveal" id="graphicsPortfolio">
      ${sectionHeader("portfolio", "Logo, flyer, social, and branding mockups with premium presentation.", "contact.html", "Request design")}
      <div class="project-grid">
        ${activeItems(graphics.portfolio).map((item, index) => portfolioCard(item, index, "graphics")).join("")}
      </div>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("graphics marketplace", "Logo templates, social packs, and flyer templates ready to customize.", "contact.html", "Customize")}
      <div class="marketplace-grid">
        ${activeItems(graphics.marketplace).map((item, index) => marketplaceCard(item, index, "Buy")).join("")}
      </div>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("service cards", "Short, clear design services.", "contact.html", "Start")}
      <div class="service-grid web-capability-grid">
        ${activeItems(graphics.services).map((item) => compactServiceCard(item)).join("")}
      </div>
    </section>
  `;
}

function adsPage(content) {
  const ads = content.ads;
  return `
    ${hero({
      scene: "ads",
      eyebrow: "Ads expert",
      title: "Turn Your Budget Into Real Customers",
      copy: "High-converting ad campaigns on Facebook, Instagram & Google",
      primary: { href: "#campaignSetup", label: "Start a Campaign", icon: "target" },
      secondary: { href: "#adPackages", label: "View packages", icon: "shopping-bag" },
      consoleTitle: "Campaign control"
    })}
    <section class="content-band reveal">
      ${sectionHeader("platforms", "Clean ad channels handled with focus.", "#campaignSetup", "Set goal")}
      <div class="platform-grid">
        ${ads.platforms.map((item) => `<div class="platform-card tilt-card"><i data-lucide="megaphone"></i><strong>${esc(item)}</strong></div>`).join("")}
      </div>
    </section>
    <section class="content-band web-request-layout reveal" id="campaignSetup">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="target"></i> Campaign setup</p>
        <h2>We run ads that turn clicks into customers.</h2>
      </div>
      <form class="smart-form tilt-card" data-smart-request data-request-type="Ads Campaign" data-success-message="Request received. I'll review your campaign and respond within 1 hour.">
        ${contactFields()}
        <div class="form-grid">
          ${selectField("goal", "Goal selection", ads.goals)}
          ${selectField("budget", "Budget range", ads.budgetOptions)}
          ${selectField("businessType", "Business type", ads.businessTypes)}
          <label>Other business type<input name="customBusinessType" type="text" placeholder="Type if other"></label>
          ${selectField("audience", "Audience targeting", ads.audienceOptions)}
          ${selectField("duration", "Campaign duration", ads.durationOptions)}
          <label>Custom duration<input name="customDuration" type="text" placeholder="Type custom duration"></label>
          <label class="full-field">Description<textarea name="details" rows="4" placeholder="Describe your product/service and target audience" required></textarea></label>
        </div>
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Submit campaign</button>
      </form>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("how it works", "Simple campaign flow from research to optimization.", "#adPackages", "Packages")}
      <div class="timeline-3d">
        ${["Research", "Setup", "Launch", "Optimize"].map((item, index) => `<div class="timeline-step tilt-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${item}</h3><p>${["Audience + strategy", "Ads + targeting", "Campaign goes live", "Improve results"][index]}</p></div>`).join("")}
      </div>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("results proof", "Campaign screenshots and metrics should be real or clearly labeled as tests.", "contact.html", "Discuss ads")}
      <div class="project-grid">
        ${activeItems(ads.results).map((item, index) => portfolioCard({ ...item, category: item.metric }, index, "ads")).join("")}
      </div>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("service breakdown", "Sharp ad services with no fluff.", "contact.html", "Plan campaign")}
      <div class="service-grid web-capability-grid">
        ${activeItems(ads.services).map((item) => compactServiceCard(item)).join("")}
      </div>
    </section>
    <section class="content-band reveal" id="adPackages">
      ${sectionHeader("prebuilt ad packages", "Campaign packages with included work and clear pricing.", "contact.html", "Get started")}
      <div class="marketplace-grid">
        ${activeItems(ads.packages).map((item, index) => packageCard(item, index)).join("")}
      </div>
    </section>
  `;
}

function realEstatePage(content) {
  const estate = content.realEstate;
  return `
    ${hero({
      scene: "realEstate",
      eyebrow: "Real estate agent",
      title: "Find Your Perfect Property",
      copy: "Trusted real estate services for buying, selling, and renting",
      primary: { href: "#propertySearch", label: "Browse Listings", icon: "search" },
      secondary: { href: "#propertyNeed", label: "List Your Property", icon: "upload" },
      consoleTitle: "Property hub"
    })}
    <section class="content-band reveal" id="propertySearch">
      ${sectionHeader("property search", "Filter by need, location, price, and property type.", "#featuredListings", "Listings")}
      <form class="property-search tilt-card" data-property-search>
        ${selectField("mode", "Buy / Rent", ["Any", "Buy", "Rent"])}
        <label>Location<input name="location" type="search" placeholder="Lekki, Ajah, Ikeja"></label>
        ${selectField("price", "Price range", ["Any", "Under ₦5M", "₦5M - ₦50M", "₦50M+"])}
        ${selectField("type", "Property type", ["Any", "Land", "Apartment", "Duplex", "Shop"])}
        <button class="btn btn-primary" type="submit"><i data-lucide="filter"></i> Apply</button>
      </form>
    </section>
    <section class="content-band reveal" id="featuredListings">
      ${sectionHeader("featured listings", "Clean cards with details, status, and premium hover effects.", "#propertyNeed", "Send inquiry")}
      <div class="property-grid" data-listing-grid>
        ${activeItems(estate.listings).map((item, index) => propertyCard(item, index)).join("")}
      </div>
    </section>
    <section class="content-band web-request-layout reveal" id="propertyNeed">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="building-2"></i> What do you need?</p>
        <h2>Helping you find, buy, sell, or rent the right property with ease.</h2>
      </div>
      <form class="smart-form tilt-card" data-smart-request data-dynamic-form data-request-type="Real Estate Inquiry" data-success-message="Request received. I'll get back to you shortly">
        ${contactFields()}
        <div class="choice-grid" role="radiogroup" aria-label="Property need">
          ${choice("propertyNeed", "Buy Property", "home", true)}
          ${choice("propertyNeed", "Rent Property", "building-2")}
          ${choice("propertyNeed", "Sell Property", "upload")}
        </div>
        ${dynamicPanel("propertyNeed", "Buy Property", propertyNeedFields("buy"))}
        ${dynamicPanel("propertyNeed", "Rent Property", propertyNeedFields("rent"))}
        ${dynamicPanel("propertyNeed", "Sell Property", `
          <div class="form-grid">
            ${selectField("sellPropertyType", "Property type", ["Land", "Apartment", "Duplex", "Shop"])}
            <label>Location<input name="sellLocation" type="text" placeholder="Property location"></label>
            <label>Price<input name="sellPrice" type="text" placeholder="Asking price"></label>
            <label>Upload images<input name="propertyImages" type="file" multiple accept="image/*"></label>
            <label class="full-field">Extra details<textarea name="sellDetails" rows="4" placeholder="Describe the property"></textarea></label>
          </div>
        `)}
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Submit request</button>
      </form>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("services", "Real estate support from listing to consultation.", "contact.html", "Contact")}
      <div class="service-grid web-capability-grid">
        ${activeItems(estate.services).map((item) => compactServiceCard(item)).join("")}
      </div>
    </section>
    <section class="content-band split-band reveal">
      <div class="trust-strip">
        ${estate.trust.map((item) => `<div class="trust-pill"><i data-lucide="badge-check"></i>${esc(item)}</div>`).join("")}
      </div>
      <div class="review-grid">${activeItems(estate.testimonials).map((item) => reviewCard(item)).join("")}</div>
    </section>
    <section class="content-band contact-strip reveal">
      <a class="btn btn-primary" href="${whatsappHref("Hello NEXORA, I want to ask about a property.")}" target="_blank" rel="noopener">${whatsappIcon()} WhatsApp</a>
      <a href="tel:${CONTACT_PHONE_TEL}"><i data-lucide="phone"></i>${CONTACT_PHONE_DISPLAY}</a>
      <a href="${emailHref("Real estate inquiry")}"><i data-lucide="mail"></i>${CONTACT_EMAIL}</a>
    </section>
  `;
}

function affiliatePage(content) {
  const affiliate = content.affiliate;
  return `
    ${hero({
      scene: "affiliate",
      eyebrow: "Affiliate marketer",
      title: "Discover Tools & Offers That Actually Work",
      copy: "Carefully selected platforms and products you can trust",
      primary: { href: "#offers", label: "Explore Offers", icon: "shopping-bag" },
      secondary: { href: "#bonus", label: "Free guide", icon: "book-open" },
      consoleTitle: "Offer finder"
    })}
    <section class="content-band reveal" id="offers">
      ${sectionHeader("offers and products", "Clean offer cards with benefit, audience, and next action.", "#offerFinder", "Find fit")}
      <div class="category-tabs" data-affiliate-categories>
        <button class="is-active" type="button" data-category="All">All</button>
        ${affiliate.categories.map((item) => `<button type="button" data-category="${esc(item)}">${esc(item)}</button>`).join("")}
      </div>
      <div class="marketplace-grid" data-affiliate-offers>
        ${activeItems(affiliate.offers).map((item, index) => affiliateOfferCard(item, index)).join("")}
      </div>
    </section>
    <section class="content-band web-request-layout reveal" id="offerFinder">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="search"></i> Find what you need</p>
        <h2>Choose your goal and see the most relevant offers first.</h2>
      </div>
      <form class="smart-form tilt-card" data-offer-finder>
        ${selectField("need", "What are you looking for?", ["Make money", "Grow business", "Learn skills"])}
        <button class="btn btn-primary" type="submit"><i data-lucide="filter"></i> Show offers</button>
      </form>
    </section>
    <section class="content-band split-band reveal">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="badge-check"></i> How it works</p>
        <h2>You choose an offer, sign up through my link, get value, and I earn a commission.</h2>
      </div>
      <div class="trust-strip">${affiliate.proof.map((item) => `<div class="trust-pill"><i data-lucide="check"></i>${esc(item)}</div>`).join("")}</div>
    </section>
    <section class="cta-band reveal" id="bonus">
      <div>
        <p class="eyebrow"><i data-lucide="book-open"></i> Bonus</p>
        <h2>${esc(affiliate.bonusTitle)}</h2>
        <p>${esc(affiliate.bonusBody)}</p>
      </div>
      <a class="btn btn-primary" href="#offers"><i data-lucide="rocket"></i> Start Exploring</a>
    </section>
  `;
}

function academyPage(content) {
  const academy = content.academy;
  return `
    ${hero({
      scene: "academy",
      eyebrow: "Learn a high demand skill with Nexora",
      title: "Learn High-Demand Digital Skills That Pay",
      copy: "Structured courses designed to help you build real, practical skills",
      primary: { href: "#courses", label: "Explore Courses", icon: "book-open" },
      secondary: { href: "#access", label: "Start Learning", icon: "graduation-cap" },
      consoleTitle: "Course dashboard"
    })}
    <section class="content-band reveal" id="courses">
      ${sectionHeader("featured courses", "Project-based courses with practical outcomes and clean pricing.", "#paths", "Skill paths")}
      <div class="course-grid">
        ${activeItems(academy.courses).map((course, index) => courseCard(course, index)).join("")}
      </div>
    </section>
    <section class="content-band reveal" id="paths">
      ${sectionHeader("skill paths", "Organized routes for learning the skills Nexora offers.", "#structure", "Structure")}
      <div class="service-grid web-capability-grid">
        ${activeItems(academy.paths).map((item) => compactServiceCard({ ...item, icon: "graduation-cap" }, "View Courses")).join("")}
      </div>
    </section>
    <section class="content-band split-band reveal" id="structure">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="layers-3"></i> Course structure</p>
        <h2>Clear modules prove this is a course system, not random videos.</h2>
      </div>
      <div class="timeline-3d">
        ${academy.modules.map((item, index) => `<div class="timeline-step tilt-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(item)}</h3></div>`).join("")}
      </div>
    </section>
    <section class="content-band reveal">
      ${sectionHeader("what students get", "Lifetime access, practical projects, and downloadable support.", "#access", "Access")}
      <div class="trust-strip">${academy.benefits.map((item) => `<div class="trust-pill"><i data-lucide="check"></i>${esc(item)}</div>`).join("")}</div>
      <div class="tool-row">${academy.tools.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
    </section>
    <section class="content-band split-band reveal" id="access">
      <div class="section-intro">
        <p class="eyebrow"><i data-lucide="lock"></i> How access works</p>
        <h2>After purchase, you receive access, click the course button, and keep lifetime access to the materials.</h2>
      </div>
      <div class="review-grid">${academy.trust.map((quote, index) => reviewCard({ quote, author: index ? "Real-skill focus" : "Beginner-friendly" })).join("")}</div>
    </section>
    <section class="cta-band reveal">
      <div>
        <p class="eyebrow"><i data-lucide="rocket"></i> Start now</p>
        <h2>Choose your course and start learning with a structured path.</h2>
      </div>
      <a class="btn btn-primary" href="#courses"><i data-lucide="graduation-cap"></i> Choose Your Course</a>
    </section>
  `;
}

function contactPage(content) {
  return `
    ${hero({
      scene: "contact",
      eyebrow: "Project inquiry",
      title: "Tell Nexora what you want to build, promote, sell, list, or learn.",
      copy: "Requests are saved into the admin dashboard so nothing gets lost.",
      primary: { href: "#leadForm", label: "Open inquiry", icon: "send" },
      secondary: { href: "offers.html", label: "Compare offers", icon: "shopping-bag" }
    })}
    <section class="content-band contact-layout reveal">
      <div class="contact-panel">
        <p class="eyebrow"><i data-lucide="mail"></i> Contact</p>
        <h2>Start the next premium asset.</h2>
        <p>Send an inquiry by email or WhatsApp and keep the lead stored in the local admin queue.</p>
        <div class="contact-methods">
          <a href="${emailHref("Project inquiry")}"><i data-lucide="mail"></i>${CONTACT_EMAIL}</a>
          <a href="tel:${CONTACT_PHONE_TEL}"><i data-lucide="phone"></i>${CONTACT_PHONE_DISPLAY}</a>
          <a href="${whatsappHref("Hello NEXORA LABS, I want to discuss a project.")}" target="_blank" rel="noopener">${whatsappIcon()} WhatsApp ${CONTACT_PHONE_DISPLAY}</a>
        </div>
      </div>
      <form class="lead-form tilt-card" id="leadForm" data-smart-request data-request-type="General Inquiry" data-success-message="Request received. I'll get back to you within 1 hour.">
        ${contactFields()}
        ${selectField("service", "Service interest", serviceLinks.map((item) => item.title))}
        ${selectField("budget", "Budget range", ["₦10k - ₦50k", "₦50k - ₦150k", "₦150k - ₦500k", "₦500k+"])}
        <label class="full-field">Project details<textarea name="details" rows="5" placeholder="Tell me what you want to build, sell, promote, list, or learn." required></textarea></label>
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Send inquiry</button>
      </form>
    </section>
  `;
}

function legalPage(title, copy, sections) {
  return `
    ${hero({
      scene: "contact",
      eyebrow: "Trust center",
      title,
      copy,
      primary: { href: "contact.html", label: "Contact Nexora", icon: "mail" },
      secondary: { href: "index.html", label: "Back home", icon: "arrow-right" },
      consoleTitle: "Policy controls"
    })}
    <section class="content-band legal-band reveal">
      ${sections
        .map(
          (section) => `
            <article class="admin-card">
              <h2>${esc(section.title)}</h2>
              <p>${esc(section.body)}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function privacySections() {
  return [
    {
      title: "Account Data",
      body: "Nexora stores registration details such as full name, username, email, phone number, and password hash so users can log in and receive website notifications."
    },
    {
      title: "Requests And Notifications",
      body: "Project requests, admin replies, notifications, and course actions are saved so users and the admin can continue conversations inside the website."
    },
    {
      title: "Payments",
      body: "Course payments are processed through Paystack. Nexora stores course title, payment reference, and account contact details for access and support records."
    },
    {
      title: "Contact",
      body: `For privacy questions, contact ${CONTACT_EMAIL} or ${CONTACT_PHONE_DISPLAY}.`
    }
  ];
}

function termsSections() {
  return [
    {
      title: "Use Of The Website",
      body: "Users must provide accurate account information and are responsible for keeping their login details safe."
    },
    {
      title: "Services And Requests",
      body: "Submitted requests help Nexora understand the service needed. Final scope, delivery time, and pricing may be confirmed before work begins."
    },
    {
      title: "Courses",
      body: "Course access links are provided after successful payment. Access links should not be resold or shared publicly."
    },
    {
      title: "Payments And Refunds",
      body: "Payments are handled by Paystack. Refund or access issues should be reported through the contact channels on the website."
    }
  ];
}

function adminPage(content) {
  const authenticated = localStorage.getItem(AUTH_KEY) === "true";
  if (!authenticated) return adminLogin(content);

  const requests = getRequests();
  const orders = getOrders();
  const pending = requests.filter((item) => item.status === "pending").length;
  const collapsed = localStorage.getItem(ADMIN_COLLAPSED_KEY) === "true";

  return `
    <div class="admin-shell ${collapsed ? "is-collapsed" : ""}">
      <aside class="admin-sidebar">
        <a class="brand admin-brand" href="index.html">${brandMarkup(content.settings.siteName)}</a>
        <button class="admin-collapse" type="button" data-admin-collapse><i data-lucide="menu"></i><span>Collapse</span></button>
        <nav class="admin-nav" aria-label="Admin navigation">
          ${adminNavButton("home", "Dashboard Home", "layout-dashboard")}
          ${adminNavButton("web", "Web Services Manager", "monitor-smartphone")}
          ${adminNavButton("graphics", "Graphics Manager", "palette")}
          ${adminNavButton("ads", "Ads Manager", "megaphone")}
          ${adminNavButton("realEstate", "Real Estate Manager", "building-2")}
          ${adminNavButton("affiliate", "Affiliate Courses", "link-2")}
          ${adminNavButton("academy", "Nexora Courses", "graduation-cap")}
          ${adminNavButton("marketplace", "Marketplace", "shopping-bag")}
          ${adminNavButton("requests", "Requests / Messages", "message-circle", pending)}
          ${adminNavButton("users", "Registered Users", "users", getUsers().length)}
          ${adminNavButton("settings", "Settings", "settings")}
          <button type="button" data-admin-logout><i data-lucide="log-out"></i><span>Logout</span></button>
        </nav>
      </aside>
      <section class="admin-main">
        <header class="admin-topbar">
          <div>
            <span>Admin</span>
            <strong>${esc(content.settings.adminName)}</strong>
          </div>
          <div class="admin-top-actions">
            <span class="notification-pill"><i data-lucide="bell"></i>${pending} pending</span>
            <button class="btn btn-ghost" type="button" data-admin-logout><i data-lucide="log-out"></i> Quick logout</button>
          </div>
        </header>
        ${renderAdminSection(adminSection, content, requests, orders)}
      </section>
    </div>
  `;
}

function adminLogin(content) {
  return `
    <main class="admin-login-shell">
      <form class="admin-login tilt-card" data-admin-login>
        <a class="brand" href="index.html">${brandMarkup(content.settings.siteName)}</a>
        <p class="eyebrow"><i data-lucide="lock"></i> Admin access</p>
        <h1>Login to control Nexora</h1>
        <label>Username<input name="username" type="text" value="admin" autocomplete="username" required></label>
        ${passwordField("password", "Password")}
        <button class="btn btn-primary" type="submit"><i data-lucide="lock"></i> Login</button>
        <p class="form-status" data-login-status role="status"></p>
      </form>
    </main>
  `;
}

function renderAdminSection(section, content, requests, orders) {
  if (section === "home") return adminHome(content, requests, orders);
  if (section === "requests") return adminRequests(requests);
  if (section === "users") return adminUsers();
  if (section === "settings") return adminSettings(content);
  if (section === "marketplace") return adminMarketplace(content);

  const configs = {
    web: [
      { title: "Web Service Cards", path: "web.services", fields: basicFields(["icon"]) },
      { title: "Website Marketplace", path: "web.marketplace", fields: marketplaceFields() },
      { title: "Web Reviews", path: "web.reviews", fields: reviewFields() }
    ],
    graphics: [
      { title: "Graphics Service Cards", path: "graphics.services", fields: basicFields(["icon"]) },
      { title: "Graphics Portfolio", path: "graphics.portfolio", fields: portfolioFields() },
      { title: "Graphics Marketplace", path: "graphics.marketplace", fields: marketplaceFields() },
      { title: "Graphics Reviews", path: "graphics.reviews", fields: reviewFields() }
    ],
    ads: [
      { title: "Ads Services", path: "ads.services", fields: basicFields(["icon"]) },
      { title: "Results / Proof", path: "ads.results", fields: resultFields() },
      { title: "Ad Packages", path: "ads.packages", fields: packageFields() }
    ],
    realEstate: [
      { title: "Property Listings", path: "realEstate.listings", fields: listingFields() },
      { title: "Real Estate Services", path: "realEstate.services", fields: basicFields(["icon"]) },
      { title: "Testimonials", path: "realEstate.testimonials", fields: reviewFields() }
    ],
    affiliate: [
      { title: "Affiliate Offers", path: "affiliate.offers", fields: affiliateFields() }
    ],
    academy: [
      { title: "Nexora Courses", path: "academy.courses", fields: courseFields() },
      { title: "Skill Paths", path: "academy.paths", fields: basicFields() }
    ]
  };

  const title = {
    web: "Web Services Manager",
    graphics: "Graphics Manager",
    ads: "Ads Manager",
    realEstate: "Real Estate Manager",
    affiliate: "Affiliate Courses",
    academy: "Nexora Courses"
  }[section];

  return `
    <section class="admin-panel">
      <div class="admin-section-head">
        <p class="eyebrow"><i data-lucide="settings"></i> Page controller</p>
        <h1>${title}</h1>
      </div>
      ${configs[section].map((config) => adminManagerBlock(config, content)).join("")}
    </section>
  `;
}

function adminHome(content, requests, orders) {
  const activeCourses = activeItems(content.academy.courses).length;
  const activeListings = activeItems(content.realEstate.listings).length;
  const users = getUsers();
  const visitors = Number(sharedState?.visits?.total || 0);
  const revenue = orders.reduce((sum, order) => sum + Number(order.amount || 0), Number(content.settings.revenueOffset || 0));
  return `
    <section class="admin-panel">
      <div class="admin-section-head">
        <p class="eyebrow"><i data-lucide="layout-dashboard"></i> Dashboard home</p>
        <h1>Live overview</h1>
      </div>
      <div class="admin-metrics">
        ${metricCard("Registered Users", users.length, "users")}
        ${metricCard("Total Visitors", visitors, "eye")}
        ${metricCard("Total Requests", requests.length, "message-circle")}
        ${metricCard("Active Courses", activeCourses, "graduation-cap")}
        ${metricCard("Active Listings", activeListings, "building-2")}
        ${metricCard("Revenue", money(revenue), "dollar-sign")}
      </div>
      <div class="admin-two-col">
        <div class="admin-card">
          <h2>Recent requests</h2>
          ${requests.slice(0, 5).map((item) => requestMini(item)).join("") || "<p>No requests yet.</p>"}
        </div>
        <div class="admin-card">
          <h2>Recent marketplace actions</h2>
          ${orders.slice(0, 5).map((item) => `<div class="request-mini"><strong>${esc(item.title)}</strong><span>${money(item.amount)} - ${new Date(item.createdAt).toLocaleString()}</span></div>`).join("") || "<p>No actions yet.</p>"}
        </div>
        <div class="admin-card">
          <h2>New registrations</h2>
          ${users.slice(0, 5).map((item) => `<div class="request-mini"><strong>${esc(item.fullName)}</strong><span>${esc(item.email)} - ${esc(item.phone)}</span></div>`).join("") || "<p>No users yet.</p>"}
        </div>
      </div>
    </section>
  `;
}

function adminUsers() {
  const users = getUsers();
  return `
    <section class="admin-panel">
      <div class="admin-section-head">
        <p class="eyebrow"><i data-lucide="users"></i> Registered Users</p>
        <h1>Every new registration appears here.</h1>
      </div>
      <div class="request-board">
        ${users
          .map(
            (user) => `
              <article class="admin-card request-card">
                <div class="request-card-head">
                  <span>${esc(user.username)}</span>
                  <strong>${new Date(user.createdAt).toLocaleDateString()}</strong>
                </div>
                <h3>${esc(user.fullName)}</h3>
                <p><i data-lucide="mail"></i> ${esc(user.email)}</p>
                <p><i data-lucide="phone"></i> ${esc(user.phone)}</p>
                <small>Last updated: ${new Date(user.updatedAt || user.createdAt).toLocaleString()}</small>
              </article>
            `
          )
          .join("") || '<div class="admin-card"><p>No registered users yet.</p></div>'}
      </div>
    </section>
  `;
}

function adminMarketplace(content) {
  const blocks = [
    { title: "Website Templates", path: "web.marketplace", fields: marketplaceFields() },
    { title: "Graphics Products", path: "graphics.marketplace", fields: marketplaceFields() },
    { title: "Ad Packages", path: "ads.packages", fields: packageFields() },
    { title: "Courses", path: "academy.courses", fields: courseFields() }
  ];
  return `
    <section class="admin-panel">
      <div class="admin-section-head">
        <p class="eyebrow"><i data-lucide="shopping-bag"></i> Marketplace manager</p>
        <h1>Products, pricing, demos, and availability</h1>
      </div>
      ${blocks.map((config) => adminManagerBlock(config, content)).join("")}
    </section>
  `;
}

function adminRequests(requests) {
  return `
    <section class="admin-panel">
      <div class="admin-section-head">
        <p class="eyebrow"><i data-lucide="message-circle"></i> Requests / Messages</p>
        <h1>Incoming website, design, ads, real estate, affiliate, and course requests</h1>
      </div>
      <form class="admin-card broadcast-form" data-reply-all-form>
        <label class="full-field">Reply to all registered users
          <textarea name="message" rows="3" placeholder="Write one message that will appear in every user's website notification." required></textarea>
        </label>
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Reply to all in website</button>
      </form>
      <div class="request-board">
        ${requests
          .map(
            (item) => `
              <article class="admin-card request-card" data-request-id="${item.id}">
                <div class="request-card-head">
                  <span>${esc(item.type)}</span>
                  <strong>${esc(item.status)}</strong>
                </div>
                ${requestUserBlock(item)}
                <p>${esc(formatRequestSummary(item.details))}</p>
                <small>${new Date(item.createdAt).toLocaleString()}</small>
                <label>Reply in website
                  <textarea data-website-reply rows="3" placeholder="Write a direct reply for this user"></textarea>
                </label>
                <label>Status
                  <select data-request-status>
                    ${["pending", "completed"].map((status) => `<option${item.status === status ? " selected" : ""}>${status}</option>`).join("")}
                  </select>
                </label>
                <div class="admin-actions">
                  <button class="btn btn-primary" type="button" data-save-request-status><i data-lucide="check"></i> Save status</button>
                  <button class="btn btn-ghost" type="button" data-send-website-reply><i data-lucide="message-circle"></i> Reply in website</button>
                  <a class="btn btn-ghost" href="${whatsappReplyHref(item)}" target="_blank" rel="noopener"><i data-lucide="send"></i> Reply in WhatsApp</a>
                </div>
              </article>
            `
          )
          .join("") || '<div class="admin-card"><p>No requests yet.</p></div>'}
      </div>
    </section>
  `;
}

function adminSettings(content) {
  return `
    <section class="admin-panel">
      <div class="admin-section-head">
        <p class="eyebrow"><i data-lucide="settings"></i> Settings</p>
        <h1>Site name, theme, and admin password</h1>
      </div>
      <form class="admin-card settings-form" data-settings-form>
        <label>Site name<input name="siteName" value="${attr(content.settings.siteName)}"></label>
        <label>Admin name<input name="adminName" value="${attr(content.settings.adminName)}"></label>
        <label>Accent color<input name="accentColor" type="color" value="${attr(content.settings.accentColor)}"></label>
        <label>Revenue adjustment<input name="revenueOffset" type="number" value="${attr(content.settings.revenueOffset)}"></label>
        <label class="full-field">Purpose statement<textarea name="purpose" rows="3">${esc(content.settings.purpose)}</textarea></label>
        <button class="btn btn-primary" type="submit"><i data-lucide="check"></i> Save settings</button>
      </form>
    </section>
  `;
}

function adminManagerBlock(config, content) {
  const collection = getPath(content, config.path) || [];
  return `
    <div class="admin-card manager-block" data-manager-path="${config.path}">
      <div class="manager-head">
        <h2>${esc(config.title)}</h2>
        <span>${collection.length} items</span>
      </div>
      <form class="manager-add" data-admin-add data-path="${config.path}">
        ${config.fields.map((field) => fieldInput(field, {}, "add")).join("")}
        <button class="btn btn-primary" type="submit"><i data-lucide="plus"></i> Add new</button>
      </form>
      <div class="manager-list">
        ${collection
          .map(
            (item) => `
              <form class="manager-item" data-admin-edit data-path="${config.path}" data-id="${item.id}">
                <div class="manager-item-top">
                  <strong>${esc(item.title || item.quote || item.id)}</strong>
                  <label class="switch-row"><input type="checkbox" data-field="active" data-type="boolean"${item.active !== false ? " checked" : ""}> Active</label>
                </div>
                ${config.fields.map((field) => fieldInput(field, item, "edit")).join("")}
                <div class="admin-actions">
                  <button class="btn btn-primary" type="submit"><i data-lucide="check"></i> Save</button>
                  <button class="btn btn-danger" type="button" data-admin-delete><i data-lucide="trash-2"></i> Delete</button>
                </div>
              </form>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function fieldInput(field, item, mode) {
  const value = Array.isArray(item[field.key]) ? item[field.key].join(" | ") : item[field.key] || "";
  const placeholder = field.placeholder || field.label;
  const common = `data-field="${field.key}" data-type="${field.type || "text"}" placeholder="${attr(placeholder)}"`;
  if (field.type === "textarea") {
    return `<label>${esc(field.label)}<textarea ${common} rows="3">${esc(value)}</textarea></label>`;
  }
  if (field.type === "array") {
    return `<label>${esc(field.label)}<input ${common} value="${attr(value)}"><small>Separate items with |</small></label>`;
  }
  if (field.type === "image") {
    return `
      <label>${esc(field.label)}
        ${value ? `<img class="admin-image-preview" src="${attr(value)}" alt="${attr(field.label)} preview">` : ""}
        <input ${common} value="${attr(value)}" placeholder="Paste image URL or upload below">
        <input type="file" accept="image/*" data-image-upload="${field.key}">
        <small>Paste an image URL or upload an image from this computer.</small>
      </label>
    `;
  }
  if (field.type === "select") {
    return `<label>${esc(field.label)}<select ${common}>${field.options.map((option) => `<option${value === option ? " selected" : ""}>${esc(option)}</option>`).join("")}</select></label>`;
  }
  return `<label>${esc(field.label)}<input ${common} value="${attr(value)}"></label>`;
}

function basicFields(extra = []) {
  return [
    { key: "title", label: "Name" },
    { key: "body", label: "Description", type: "textarea" },
    ...extra.map((key) => ({ key, label: titleCase(key) }))
  ];
}

function marketplaceFields() {
  return [
    { key: "title", label: "Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "body", label: "Description", type: "textarea" },
    { key: "demoUrl", label: "Live demo link" }
  ];
}

function packageFields() {
  return [
    { key: "title", label: "Package name" },
    { key: "price", label: "Price" },
    { key: "body", label: "Description", type: "textarea" },
    { key: "includes", label: "What's included", type: "array" }
  ];
}

function portfolioFields() {
  return [
    { key: "title", label: "Name" },
    { key: "category", label: "Category" },
    { key: "body", label: "Description", type: "textarea" }
  ];
}

function resultFields() {
  return [
    { key: "title", label: "Proof title" },
    { key: "metric", label: "Metric" },
    { key: "body", label: "Description", type: "textarea" }
  ];
}

function reviewFields() {
  return [
    { key: "quote", label: "Review text", type: "textarea" },
    { key: "author", label: "Author" }
  ];
}

function listingFields() {
  return [
    { key: "title", label: "Listing name" },
    { key: "price", label: "Price" },
    { key: "location", label: "Location" },
    { key: "type", label: "Property type", type: "select", options: ["Land", "Apartment", "Duplex", "Shop"] },
    { key: "mode", label: "Buy / Rent", type: "select", options: ["Buy", "Rent"] },
    { key: "status", label: "Status", type: "select", options: ["available", "sold"] },
    { key: "body", label: "Description", type: "textarea" }
  ];
}

function affiliateFields() {
  return [
    { key: "title", label: "Product name" },
    { key: "category", label: "Category" },
    { key: "benefit", label: "Short benefit", type: "textarea" },
    { key: "audience", label: "Who it's for" },
    { key: "price", label: "Price / note" },
    { key: "demoUrl", label: "Link" }
  ];
}

function courseFields() {
  return [
    { key: "title", label: "Course title" },
    { key: "body", label: "Short description", type: "textarea" },
    { key: "outcomes", label: "Course outcomes", type: "array" },
    { key: "originalPrice", label: "Original price" },
    { key: "price", label: "Discount price" },
    { key: "imageUrl", label: "Course image URL / Upload", type: "image" },
    { key: "accessUrl", label: "Redirect / Google Drive link" }
  ];
}

function publicServiceCard(item) {
  return `
    <article class="service-card tilt-card reveal" id="${slug(item.title)}">
      <div class="card-topline">
        <span class="icon-block"><i data-lucide="${item.icon}"></i></span>
        <small>${esc(item.tag)}</small>
      </div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
      <a class="card-link" href="${item.href}"><i data-lucide="arrow-right"></i> Open service</a>
    </article>
  `;
}

function compactServiceCard(item, linkLabel = "") {
  return `
    <article class="service-card glass-card tilt-card">
      <div class="card-topline">
        <span class="icon-block"><i data-lucide="${item.icon || "badge-check"}"></i></span>
        <small>Nexora</small>
      </div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
      ${linkLabel ? `<a class="card-link" href="#courses"><i data-lucide="arrow-right"></i>${esc(linkLabel)}</a>` : ""}
    </article>
  `;
}

function marketplaceCard(item, index, buttonLabel) {
  return `
    <article class="market-card tilt-card" data-market-card>
      ${visualMockup(item, index, "web")}
      <div class="marketplace-meta">
        <strong>${esc(item.price)}</strong>
        <span>${esc(item.category || "Template")}</span>
      </div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
      <div class="market-actions">
        <a class="btn btn-ghost" href="${attr(item.demoUrl || "#")}"><i data-lucide="eye"></i> Live Demo</a>
        <button class="btn btn-primary" type="button" data-buy-product data-title="${attr(item.title)}" data-price="${attr(item.price)}"><i data-lucide="shopping-bag"></i>${esc(buttonLabel)}</button>
      </div>
    </article>
  `;
}

function packageCard(item, index) {
  return `
    <article class="market-card tilt-card">
      ${visualMockup({ ...item, category: "Ad package" }, index, "ads")}
      <div class="marketplace-meta"><strong>${esc(item.price)}</strong><span>Campaign</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
      <div class="offer-items">${(item.includes || []).map((offer) => `<span>${esc(offer)}</span>`).join("")}</div>
      <button class="btn btn-primary" type="button" data-buy-product data-title="${attr(item.title)}" data-price="${attr(item.price)}"><i data-lucide="rocket"></i> Get Started</button>
    </article>
  `;
}

function affiliateOfferCard(item, index) {
  return `
    <article class="market-card tilt-card" data-offer-category="${attr(item.category)}">
      ${visualMockup({ title: item.title, category: item.category }, index, "affiliate")}
      <div class="marketplace-meta"><strong>${esc(item.price)}</strong><span>${esc(item.category)}</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.benefit)}</p>
      <small>For: ${esc(item.audience)}</small>
      <div class="market-actions">
        <a class="btn btn-ghost" href="${attr(item.demoUrl || "#")}"><i data-lucide="external-link"></i> Learn More</a>
        <button class="btn btn-primary" type="button" data-buy-product data-title="${attr(item.title)}" data-price="0"><i data-lucide="arrow-right"></i> Get Started</button>
      </div>
    </article>
  `;
}

function courseCard(course, index) {
  return `
    <article class="course-card tilt-card">
      ${visualMockup({ title: course.title, category: "Course" }, index, "academy")}
      <h3>${esc(course.title)}</h3>
      <p>${esc(course.body)}</p>
      <ul>${(course.outcomes || []).map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      <div class="price-line"><span>${esc(course.originalPrice)}</span><strong>${esc(course.price)}</strong></div>
      <button class="btn btn-primary" type="button" data-course-payment data-title="${attr(course.title)}" data-price="${attr(course.price)}" data-access-url="${attr(course.accessUrl || "https://drive.google.com/")}"><i data-lucide="book-open"></i> Pay & Get Access</button>
    </article>
  `;
}

function propertyCard(item, index) {
  return `
    <article class="property-card tilt-card" data-property-card data-mode="${attr(item.mode)}" data-location="${attr(item.location)}" data-type="${attr(item.type)}" data-price="${attr(item.price)}">
      ${visualMockup(item, index, "estate")}
      <div class="property-body">
        <span class="status ${item.status === "sold" ? "is-sold" : ""}">${esc(item.status)}</span>
        <h3>${esc(item.title)}</h3>
        <strong>${esc(item.price)}</strong>
        <p><i data-lucide="map-pin"></i>${esc(item.location)}</p>
        <p>${esc(item.body)}</p>
        <button class="btn btn-ghost" type="button" data-listing-details="${attr(item.id)}"><i data-lucide="eye"></i> View Details</button>
      </div>
    </article>
  `;
}

function portfolioCard(item, index, theme = "portfolio") {
  return `
    <article class="project-card tilt-card">
      ${visualMockup(item, index, theme)}
      <span>${esc(item.category || item.type || "Project")}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
    </article>
  `;
}

function reviewCard(item) {
  return `
    <article class="review-card tilt-card">
      <i data-lucide="badge-check"></i>
      <p>"${esc(item.quote)}"</p>
      <strong>${esc(item.author)}</strong>
    </article>
  `;
}

function visualMockup(item, index = 0, theme = "web") {
  return `
    <div class="mock-visual mock-${theme}" role="img" aria-label="${attr(item.title)} preview" style="--mock-index:${index}">
      ${item.imageUrl ? `<img class="mock-image" src="${attr(item.imageUrl)}" alt="${attr(item.title)} preview">` : ""}
      <div class="mock-window">
        <span></span><span></span><span></span>
      </div>
      <div class="mock-shape mock-shape-a"></div>
      <div class="mock-shape mock-shape-b"></div>
      <strong>${esc(item.title)}</strong>
      <small>${esc(item.category || item.location || "Preview")}</small>
    </div>
  `;
}

function propertyNeedFields(prefix) {
  return `
    <div class="form-grid">
      <label>Location<input name="${prefix}Location" type="text" placeholder="Preferred location"></label>
      <label>Budget<input name="${prefix}Budget" type="text" placeholder="Budget"></label>
      ${selectField(`${prefix}Type`, "Property type", ["Land", "Apartment", "Duplex", "Shop"])}
      <label class="full-field">Extra details<textarea name="${prefix}Details" rows="4" placeholder="Tell me what matters most"></textarea></label>
    </div>
  `;
}

function contactFields() {
  const user = getCurrentUser();
  return `
    <div class="form-grid">
      <label>Full name<input name="name" type="text" value="${attr(user?.fullName || "")}" placeholder="Your name" readonly required></label>
      <label>Email<input name="email" type="email" value="${attr(user?.email || "")}" placeholder="Email" readonly required></label>
      <label>Phone number<input name="phone" type="tel" value="${attr(user?.phone || "")}" placeholder="Phone number" readonly required></label>
    </div>
  `;
}

function passwordField(name, label, required = true, placeholder = "Enter password") {
  return `
    <label>${esc(label)}
      <span class="password-wrap">
        <input name="${attr(name)}" type="password" placeholder="${attr(placeholder)}"${required ? " required" : ""}>
        <button class="password-toggle" type="button" data-password-toggle aria-label="View password">
          <i data-lucide="eye"></i>
        </button>
      </span>
    </label>
  `;
}

function choice(name, value, icon, checked = false) {
  return `
    <label class="choice-card">
      <input type="radio" name="${name}" value="${attr(value)}"${checked ? " checked" : ""}>
      <span><i data-lucide="${icon}"></i>${esc(value)}</span>
    </label>
  `;
}

function selectField(name, label, options) {
  return `
    <label>${esc(label)}
      <select name="${attr(name)}" required>
        ${options.map((option) => `<option>${esc(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function dynamicPanel(name, value, html) {
  return `<div class="dynamic-panel" data-panel-name="${attr(name)}" data-panel-value="${attr(value)}">${html}</div>`;
}

function sectionHeader(eyebrow, title, href, label) {
  return `
    <div class="section-heading">
      <div>
        <p class="eyebrow"><i data-lucide="sparkles"></i>${esc(eyebrow)}</p>
        <h2>${esc(title)}</h2>
      </div>
      <a class="btn btn-ghost" href="${href}"><i data-lucide="arrow-right"></i>${esc(label)}</a>
    </div>
  `;
}

function floatingStartButton() {
  return `<a class="floating-start" href="contact.html"><i data-lucide="send"></i><span>Start Project</span></a>`;
}

function floatingWhatsappButton() {
  return `
    <a class="floating-whatsapp" href="${whatsappHref("Hello NEXORA LABS, I want to make an inquiry.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      ${whatsappIcon()}
    </a>
  `;
}

function globalModal() {
  return `
    <div class="request-modal" data-global-modal hidden>
      <div class="request-modal-backdrop" data-close-modal></div>
      <div class="request-modal-card" role="dialog" aria-modal="true">
        <span class="icon-block"><i data-lucide="badge-check"></i></span>
        <h2 data-modal-title>Request received.</h2>
        <div class="modal-message" data-modal-message>I'll get back to you within 1 hour.</div>
        <button class="btn btn-primary" type="button" data-close-modal><i data-lucide="check"></i> Done</button>
      </div>
    </div>
  `;
}

function publicAuthPage(content) {
  return `
    <div class="mini-loader" data-loader></div>
    <main class="auth-shell">
      <section class="auth-brand-panel">
        <a class="brand" href="index.html">${brandMarkup(content.settings.siteName)}</a>
        <p class="eyebrow"><i data-lucide="lock"></i> Members only</p>
        <h1>Create an account before using Nexora.</h1>
        <p>${esc(content.settings.purpose)}</p>
        <div class="trust-strip">
          <span class="trust-pill"><i data-lucide="badge-check"></i> Secure profile</span>
          <span class="trust-pill"><i data-lucide="message-circle"></i> Request tracking</span>
          <span class="trust-pill"><i data-lucide="graduation-cap"></i> Course access</span>
        </div>
      </section>
      <section class="auth-card tilt-card">
        <div class="auth-tabs">
          <button class="is-active" type="button" data-auth-tab="register">Register</button>
          <button type="button" data-auth-tab="login">Login</button>
        </div>
        <form data-auth-form="register">
          <label>Full name<input name="fullName" type="text" placeholder="Your full name" required></label>
          <label>Username<input name="username" type="text" placeholder="Choose a username" required></label>
          <label>Email<input name="email" type="email" placeholder="you@example.com" required></label>
          <label>Phone number<input name="phone" type="tel" placeholder="+234..." required></label>
          ${passwordField("password", "Password")}
          ${passwordField("confirmPassword", "Confirm password")}
          <button class="btn btn-primary" type="submit"><i data-lucide="users"></i> Create account</button>
          <p class="form-status" data-auth-status="register" role="status"></p>
        </form>
        <form data-auth-form="login" hidden>
          <label>Username<input name="username" type="text" placeholder="Your username" autocomplete="username" required></label>
          ${passwordField("password", "Password")}
          <button class="btn btn-primary" type="submit"><i data-lucide="lock"></i> Login</button>
          <p class="form-status" data-auth-status="login" role="status"></p>
        </form>
      </section>
    </main>
  `;
}

function profileModal() {
  const user = getCurrentUser();
  return `
    <div class="request-modal profile-modal" data-profile-modal hidden>
      <div class="request-modal-backdrop" data-profile-close></div>
      <form class="request-modal-card profile-card" data-profile-form>
        <span class="icon-block"><i data-lucide="users"></i></span>
        <h2>Your profile</h2>
        <div class="form-grid">
          <label>Full name<input name="fullName" type="text" value="${attr(user?.fullName || "")}" required></label>
          <label>Username<input name="username" type="text" value="${attr(user?.username || "")}" required></label>
          <label>Email<input name="email" type="email" value="${attr(user?.email || "")}" required></label>
          <label>Phone number<input name="phone" type="tel" value="${attr(user?.phone || "")}" required></label>
          ${passwordField("password", "New password", false, "Leave empty to keep current password")}
        </div>
        <p class="form-status" data-profile-status role="status"></p>
        <div class="hero-actions">
          <button class="btn btn-primary" type="submit"><i data-lucide="check"></i> Save profile</button>
          <button class="btn btn-ghost" type="button" data-profile-close>Close</button>
        </div>
      </form>
    </div>
  `;
}

function notificationModal() {
  const user = getCurrentUser();
  const notifications = getUserNotifications(user?.id);
  return `
    <div class="request-modal notification-modal" data-notification-modal hidden>
      <div class="request-modal-backdrop" data-notification-close></div>
      <div class="request-modal-card notification-card">
        <span class="icon-block"><i data-lucide="bell"></i></span>
        <h2>Notifications</h2>
        <div class="notification-list">
          ${notifications
            .map(
              (item) => `
                <article class="notification-item ${item.read ? "" : "is-unread"}" data-notification-id="${item.id}">
                  <div class="request-card-head">
                    <strong>${esc(item.title)}</strong>
                    <small>${new Date(item.createdAt).toLocaleString()}</small>
                  </div>
                  <p>${esc(item.message)}</p>
                </article>
              `
            )
            .join("") || '<p class="empty-note">No notifications yet.</p>'}
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-mark-notifications-read><i data-lucide="check"></i> Mark all read</button>
          <button class="btn btn-ghost" type="button" data-notification-close>Close</button>
        </div>
      </div>
    </div>
  `;
}

function initPublicInteractions(content) {
  initTiltCards();
  initGlobalModal();
  initSmartRequests();
  initDynamicForms();
  initProductButtons();
  initCoursePayments();
  initPropertySearch();
  initPropertyDetails(content);
  initAffiliateFilters();
  initProfileControls();
  initNotificationControls();
  alertNewNotifications();
  initUserLogout();
}

function initGlobalModal() {
  const modal = document.querySelector("[data-global-modal]");
  if (!modal) return;
  modal.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    });
  });
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    toggle.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
    createIcons({ icons: iconMap });
  });
}

function initAuthForms() {
  const tabs = document.querySelectorAll("[data-auth-tab]");
  const forms = document.querySelectorAll("[data-auth-form]");
  tabs.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      tabs.forEach((button) => button.classList.toggle("is-active", button === tabButton));
      forms.forEach((form) => {
        form.hidden = form.dataset.authForm !== tabButton.dataset.authTab;
      });
    });
  });

  const registerForm = document.querySelector('[data-auth-form="register"]');
  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = document.querySelector('[data-auth-status="register"]');
      const data = Object.fromEntries(new FormData(registerForm).entries());
      const username = cleanUsername(data.username);
      const email = String(data.email || "").trim().toLowerCase();
      if (data.password !== data.confirmPassword) {
        if (status) status.textContent = "Passwords do not match.";
        return;
      }
      try {
        const result = await apiRequest("/api/auth/register", {
          method: "POST",
          body: { ...data, username, email }
        });
        setCurrentUser(result.user, result.token);
        sharedState.notifications = result.notifications || [];
        mount();
      } catch (error) {
        if (status) status.textContent = error.message || "Registration failed.";
      }
    });
  }

  const loginForm = document.querySelector('[data-auth-form="login"]');
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = document.querySelector('[data-auth-status="login"]');
      const data = Object.fromEntries(new FormData(loginForm).entries());
      const username = cleanUsername(data.username);
      try {
        const result = await apiRequest("/api/auth/login", {
          method: "POST",
          body: { username, password: data.password }
        });
        setCurrentUser(result.user, result.token);
        sharedState.notifications = result.notifications || [];
        mount();
      } catch (error) {
        if (status) status.textContent = error.message || "Invalid username or password.";
      }
    });
  }

  initTiltCards();
}

function initPasswordToggles() {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.closest(".password-wrap")?.querySelector("input");
      if (!input) return;
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.setAttribute("aria-label", showing ? "View password" : "Hide password");
      button.innerHTML = `<i data-lucide="${showing ? "eye" : "eye-off"}"></i>`;
      createIcons({ icons: iconMap });
    });
  });
}

function initProfileControls() {
  const modal = document.querySelector("[data-profile-modal]");
  const form = document.querySelector("[data-profile-form]");
  if (!modal || !form) return;

  document.querySelectorAll("[data-profile-open]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.hidden = false;
      document.body.classList.add("modal-open");
    });
  });
  document.querySelectorAll("[data-profile-close]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-profile-status]");
    const current = getCurrentUser();
    if (!current) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const username = cleanUsername(data.username);
    const email = String(data.email || "").trim().toLowerCase();
    try {
      const result = await apiRequest("/api/profile", {
        method: "POST",
        auth: "user",
        body: {
          fullName: data.fullName,
          username,
          email,
          phone: data.phone,
          password: data.password
        }
      });
      setCurrentUser(result.user);
      if (status) status.textContent = "Profile updated.";
      window.setTimeout(() => mount(), 450);
    } catch (error) {
      if (status) status.textContent = error.message || "Profile update failed.";
    }
  });
}

function initUserLogout() {
  document.querySelectorAll("[data-user-logout]").forEach((button) => {
    button.addEventListener("click", () => {
      clearCurrentUser();
      mount();
    });
  });
}

function initNotificationControls() {
  const modal = document.querySelector("[data-notification-modal]");
  if (!modal) return;
  document.querySelectorAll("[data-notification-open]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.hidden = false;
      document.body.classList.add("modal-open");
      markUserNotificationsSeen();
      createIcons({ icons: iconMap });
    });
  });
  document.querySelectorAll("[data-notification-close]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    });
  });
  document.querySelectorAll("[data-mark-notifications-read]").forEach((button) => {
    button.addEventListener("click", () => {
      markUserNotificationsRead();
      mount();
    });
  });
}

function alertNewNotifications() {
  const user = getCurrentUser();
  if (!user) return;
  const unseen = getNotifications().filter((item) => item.userId === user.id && !item.alerted);
  if (!unseen.length) return;
  const latest = unseen[0];
  showModal("New notification", latest.message);
  const notifications = getNotifications();
  notifications.forEach((item) => {
    if (item.userId === user.id && !item.alerted) item.alerted = true;
  });
  saveNotifications(notifications);
}

function initSmartRequests() {
  document.querySelectorAll("[data-smart-request]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const details = Object.fromEntries(formData.entries());
      try {
        await saveRequest(form.dataset.requestType || "Request", details);
        form.reset();
        initDynamicForms();
        showModal("Request received.", form.dataset.successMessage || "I'll get back to you within 1 hour.");
      } catch (error) {
        showModal("Request not sent.", error.message || "Please log in and try again.");
      }
    });
  });
}

function initDynamicForms() {
  document.querySelectorAll("[data-dynamic-form]").forEach((form) => {
    const update = () => {
      form.querySelectorAll("[data-panel-name]").forEach((panel) => {
        const name = panel.dataset.panelName;
        const selected = form.querySelector(`input[name="${CSS.escape(name)}"]:checked`)?.value;
        const active = selected === panel.dataset.panelValue;
        panel.classList.toggle("is-active", active);
        panel.querySelectorAll("input, select, textarea").forEach((field) => {
          field.disabled = !active;
        });
      });
    };
    form.querySelectorAll("input[type='radio']").forEach((radio) => radio.addEventListener("change", update));
    update();
  });
}

function initProductButtons() {
  document.querySelectorAll("[data-buy-product]").forEach((button) => {
    button.addEventListener("click", async () => {
      const title = button.dataset.title || "Nexora product";
      const priceText = button.dataset.price || "0";
      const amount = priceToNumber(priceText);
      const order = { id: uid(), title, priceText, amount, createdAt: new Date().toISOString() };
      try {
        await saveOrder(order);
        await saveRequest("Marketplace / Course Action", { product: title, price: priceText });
        showModal("Request received.", "Your selection has been saved. I'll get back to you within 1 hour.");
      } catch (error) {
        showModal("Action not saved.", error.message || "Please log in and try again.");
      }
    });
  });
}

function initCoursePayments() {
  document.querySelectorAll("[data-course-payment]").forEach((button) => {
    button.addEventListener("click", async () => {
      const user = getCurrentUser();
      if (!user) {
        clearCurrentUser();
        mount();
        return;
      }

      const title = button.dataset.title || "Nexora course";
      const priceText = button.dataset.price || "0";
      const amount = priceToNumber(priceText);
      const accessUrl = button.dataset.accessUrl || "https://drive.google.com/";
      const reference = `NEXORA-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase();

      try {
        await loadPaystackInline();
        const paystack = new window.PaystackPop();
        paystack.newTransaction({
          key: PAYSTACK_PUBLIC_KEY,
          email: user.email,
          amount: amount * 100,
          currency: "NGN",
          ref: reference,
          metadata: {
            custom_fields: [
              { display_name: "Full Name", variable_name: "full_name", value: user.fullName },
              { display_name: "Phone Number", variable_name: "phone", value: user.phone },
              { display_name: "Course", variable_name: "course", value: title }
            ]
          },
          onSuccess: (transaction) => {
            const paymentReference = transaction.reference || transaction.trxref || reference;
            const order = {
              id: uid(),
              title,
              priceText,
              amount,
              reference: paymentReference,
              accessUrl,
              user: userContact(user),
              createdAt: new Date().toISOString()
            };
            saveOrder(order)
              .then(() => saveRequest("Course Payment", { course: title, price: priceText, reference: paymentReference }, user))
              .finally(() => {
                showModal("Payment successful.", "Your course access is opening now.");
                window.setTimeout(() => {
                  window.location.href = accessUrl;
                }, 1200);
              });
          },
          onCancel: () => {
            showModal("Payment not completed.", "The Paystack checkout was closed before payment was completed.");
          },
          onError: () => {
            showModal("Payment error.", "Paystack could not complete this checkout. Please try again.");
          }
        });
      } catch (error) {
        showModal("Payment could not start.", "Please check your internet connection or Paystack setup and try again.");
      }
    });
  });
}

function loadPaystackInline() {
  if (window.PaystackPop) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src="https://js.paystack.co/v2/inline.js"]');
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v2/inline.js";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initPropertySearch() {
  const form = document.querySelector("[data-property-search]");
  const cards = [...document.querySelectorAll("[data-property-card]")];
  if (!form || !cards.length) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    cards.forEach((card) => {
      const matchesMode = data.mode === "Any" || card.dataset.mode === data.mode;
      const matchesType = data.type === "Any" || card.dataset.type === data.type;
      const matchesLocation = !data.location || card.dataset.location.toLowerCase().includes(data.location.toLowerCase());
      card.hidden = !(matchesMode && matchesType && matchesLocation);
    });
  });
}

function initPropertyDetails(content) {
  document.querySelectorAll("[data-listing-details]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = activeItems(content.realEstate.listings).find((item) => item.id === button.dataset.listingDetails);
      if (!listing) return;
      const modal = document.querySelector("[data-global-modal]");
      if (!modal) return;
      modal.querySelector("[data-modal-title]").textContent = listing.title;
      modal.querySelector("[data-modal-message]").innerHTML = `
        <div class="listing-modal-body">
          <div class="listing-gallery">
            ${[0, 1, 2].map((item) => visualMockup({ ...listing, title: `${listing.title} ${item + 1}` }, item, "estate")).join("")}
          </div>
          <p><strong>${esc(listing.price)}</strong> - ${esc(listing.location)}</p>
          <p>${esc(listing.body)}</p>
          <a class="btn btn-primary" href="${whatsappHref(`Hello NEXORA, I want details about ${listing.title}.`)}" target="_blank" rel="noopener">${whatsappIcon()} Contact on WhatsApp</a>
        </div>
      `;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      createIcons({ icons: iconMap });
    });
  });
}

function initAffiliateFilters() {
  const tabs = document.querySelector("[data-affiliate-categories]");
  const offers = [...document.querySelectorAll("[data-offer-category]")];
  if (tabs) {
    tabs.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-category]");
      if (!button) return;
      tabs.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const category = button.dataset.category;
      offers.forEach((offer) => {
        offer.hidden = category !== "All" && offer.dataset.offerCategory !== category;
      });
    });
  }

  const finder = document.querySelector("[data-offer-finder]");
  if (finder) {
    finder.addEventListener("submit", (event) => {
      event.preventDefault();
      const need = new FormData(finder).get("need");
      const category = need === "Make money" ? "Make Money Online" : need === "Learn skills" ? "Learning Platforms" : "Business Resources";
      offers.forEach((offer) => {
        offer.hidden = offer.dataset.offerCategory !== category;
      });
      document.querySelectorAll("[data-affiliate-categories] button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.category === category);
      });
    });
  }
}

function showModal(title, message) {
  const modal = document.querySelector("[data-global-modal]");
  if (!modal) return;
  modal.querySelector("[data-modal-title]").textContent = title;
  modal.querySelector("[data-modal-message]").textContent = message;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.onclick = () => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    };
  });
}

function initAdmin(content) {
  const login = document.querySelector("[data-admin-login]");
  if (login) {
    login.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(login);
      const username = String(formData.get("username") || "").trim().toLowerCase();
      const password = formData.get("password");
      const status = login.querySelector("[data-login-status]");
      try {
        const result = await apiRequest("/api/admin/login", {
          method: "POST",
          body: { username, password }
        });
        localStorage.setItem(ADMIN_TOKEN_KEY, result.token);
        localStorage.setItem(AUTH_KEY, "true");
        sharedState = normalizeState(result.state);
        writeLocalBackup(sharedState);
        adminSection = "home";
        localStorage.setItem(ADMIN_SECTION_KEY, adminSection);
        mount();
      } catch (error) {
        if (status) status.textContent = error.message || "Incorrect admin login.";
      }
    });
  }

  document.querySelectorAll("[data-admin-section]").forEach((button) => {
    button.addEventListener("click", () => {
      adminSection = button.dataset.adminSection;
      localStorage.setItem(ADMIN_SECTION_KEY, adminSection);
      mount();
    });
  });

  document.querySelectorAll("[data-admin-logout]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(ADMIN_TOKEN_KEY);
      mount();
    });
  });

  const collapse = document.querySelector("[data-admin-collapse]");
  if (collapse) {
    collapse.addEventListener("click", () => {
      const next = localStorage.getItem(ADMIN_COLLAPSED_KEY) !== "true";
      localStorage.setItem(ADMIN_COLLAPSED_KEY, String(next));
      mount();
    });
  }

  document.querySelectorAll("[data-admin-add]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const latest = loadContent();
      const collection = getPath(latest, form.dataset.path);
      collection.unshift(await readManagerForm(form));
      saveContent(latest);
      mount();
    });
  });

  document.querySelectorAll("[data-admin-edit]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const latest = loadContent();
      const collection = getPath(latest, form.dataset.path);
      const item = collection.find((entry) => entry.id === form.dataset.id);
      if (item) Object.assign(item, await readManagerForm(form, item.id));
      saveContent(latest);
      mount();
    });
  });

  document.querySelectorAll("[data-admin-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest("[data-admin-edit]");
      if (!form || !window.confirm("Delete this admin item?")) return;
      const latest = loadContent();
      const collection = getPath(latest, form.dataset.path);
      const index = collection.findIndex((entry) => entry.id === form.dataset.id);
      if (index >= 0) collection.splice(index, 1);
      saveContent(latest);
      mount();
    });
  });

  const settingsForm = document.querySelector("[data-settings-form]");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const latest = loadContent();
      latest.settings = { ...latest.settings, ...Object.fromEntries(new FormData(settingsForm).entries()) };
      saveContent(latest);
      mount();
    });
  }

  document.querySelectorAll("[data-save-request-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-request-id]");
      const requests = getRequests();
      const request = requests.find((item) => item.id === card.dataset.requestId);
      if (request) request.status = card.querySelector("[data-request-status]").value;
      saveRequests(requests);
      mount();
    });
  });

  document.querySelectorAll("[data-send-website-reply]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-request-id]");
      const request = getRequests().find((item) => item.id === card.dataset.requestId);
      const message = card.querySelector("[data-website-reply]").value.trim();
      if (!request?.user?.id || !message) return;
      addNotification(request.user.id, `Reply: ${request.type}`, message, request.id);
      const requests = getRequests();
      const match = requests.find((item) => item.id === request.id);
      if (match) {
        match.status = "completed";
        match.adminReply = message;
        match.repliedAt = new Date().toISOString();
      }
      saveRequests(requests);
      mount();
    });
  });

  const replyAllForm = document.querySelector("[data-reply-all-form]");
  if (replyAllForm) {
    replyAllForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = new FormData(replyAllForm).get("message").trim();
      if (!message) return;
      getUsers().forEach((user) => addNotification(user.id, "Nexora update", message));
      mount();
    });
  }
}

async function readManagerForm(form, existingId = "") {
  const item = { id: existingId || uid(), active: true };
  form.querySelectorAll("[data-field]").forEach((field) => {
    const key = field.dataset.field;
    const type = field.dataset.type;
    if (type === "boolean") {
      item[key] = field.checked;
    } else if (type === "array") {
      item[key] = field.value.split("|").map((value) => value.trim()).filter(Boolean);
    } else {
      item[key] = field.value.trim();
    }
  });
  for (const fileInput of form.querySelectorAll("[data-image-upload]")) {
    const file = fileInput.files?.[0];
    if (file) item[fileInput.dataset.imageUpload] = await fileToDataUrl(file);
  }
  return item;
}

function initTiltCards() {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
      const rotateX = (0.5 - (event.clientY - bounds.top) / bounds.height) * 7;
      card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--rotate-x");
      card.style.removeProperty("--rotate-y");
    });
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal, .service-card, .market-card, .course-card, .property-card");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );
  elements.forEach((item) => observer.observe(item));
}

function initCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;
  window.addEventListener("pointermove", (event) => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
}

function initLoader() {
  const loader = document.querySelector("[data-loader]");
  if (!loader) return;
  window.setTimeout(() => loader.classList.add("is-complete"), 420);
}

function initLuxuryScene(canvas, sceneName) {
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.2, 9);

  const group = new THREE.Group();
  scene.add(group);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const key = new THREE.DirectionalLight(0xffd973, 2.2);
  key.position.set(4, 5, 5);
  const cool = new THREE.PointLight(0x45d9ff, 1.2, 16);
  cool.position.set(-4, 2, 4);
  scene.add(key, cool);

  const palette = {
    gold: new THREE.MeshStandardMaterial({ color: 0xf4c95d, metalness: 0.78, roughness: 0.24 }),
    cyan: new THREE.MeshStandardMaterial({ color: 0x5de1ff, metalness: 0.35, roughness: 0.18 }),
    black: new THREE.MeshStandardMaterial({ color: 0x050509, metalness: 0.7, roughness: 0.34 }),
    white: new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.25 }),
    wire: new THREE.LineBasicMaterial({ color: 0xf4c95d, transparent: true, opacity: 0.7 })
  };

  buildScene(sceneName, group, palette);
  addParticleField(scene, sceneName);

  const mouse = { x: 0, y: 0 };
  window.addEventListener("pointermove", (event) => {
    mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
  });

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    renderer.setSize(Math.max(rect.width, 1), Math.max(rect.height, 1), false);
    camera.aspect = Math.max(rect.width, 1) / Math.max(rect.height, 1);
    camera.updateProjectionMatrix();
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animate = () => {
    resize();
    const time = performance.now() * 0.001;
    group.rotation.y = time * 0.18 + mouse.x * 0.08;
    group.rotation.x = Math.sin(time * 0.5) * 0.06 - mouse.y * 0.04;
    group.children.forEach((child, index) => {
      child.rotation.z += 0.0015 + index * 0.0002;
      child.position.y += Math.sin(time + index) * 0.0007;
    });
    camera.position.x += (mouse.x * 0.38 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.22 + 0.2 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    if (!reducedMotion) requestAnimationFrame(animate);
  };
  window.addEventListener("resize", resize);
  animate();
}

function buildScene(sceneName, group, palette) {
  const base = sceneName === "realEstate" ? "estate" : sceneName;
  if (base === "graphics" || base === "portfolio") return buildPanelStack(group, palette);
  if (base === "ads" || base === "affiliate" || base === "offers") return buildCampaignOrbit(group, palette);
  if (base === "estate") return buildHouseScene(group, palette);
  if (base === "academy" || base === "ai") return buildCourseScene(group, palette);
  return buildCoreScene(group, palette);
}

function buildCoreScene(group, palette) {
  group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 1), palette.gold));
  group.add(wireframe(new THREE.IcosahedronGeometry(1.48, 1), palette.wire));
  for (let i = 0; i < 4; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.05 + i * 0.36, 0.025, 16, 120), i % 2 ? palette.cyan : palette.white);
    ring.rotation.set(Math.PI / 2 + i * 0.35, i * 0.44, 0);
    group.add(ring);
  }
  addFloatingBlocks(group, palette, 10, 3.2);
}

function buildPanelStack(group, palette) {
  for (let i = 0; i < 6; i += 1) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.55, 0.08), i % 2 ? palette.black : palette.gold);
    panel.position.set((i - 2.5) * 0.35, (i - 2.5) * 0.2, -i * 0.28);
    panel.rotation.set(-0.18, -0.55 + i * 0.06, -0.08);
    group.add(panel, wireframe(new THREE.BoxGeometry(2.95, 1.7, 0.1), palette.wire));
  }
  addFloatingBlocks(group, palette, 8, 3.6);
}

function buildCampaignOrbit(group, palette) {
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.55, 54), palette.gold);
  vault.rotation.x = Math.PI / 2;
  group.add(vault);
  for (let i = 0; i < 9; i += 1) {
    const angle = (i / 9) * Math.PI * 2;
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.06, 32), i % 2 ? palette.cyan : palette.white);
    coin.position.set(Math.cos(angle) * 2.7, Math.sin(angle * 2) * 0.72, Math.sin(angle) * 1.35);
    coin.rotation.set(Math.PI / 2, 0, angle);
    group.add(coin);
  }
  addOrbitLines(group, palette, 2.25, 4);
}

function buildHouseScene(group, palette) {
  const base = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.2, 1.5), palette.black);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.65, 1, 4), palette.gold);
  roof.position.y = 1.05;
  roof.rotation.y = Math.PI / 4;
  group.add(base, roof);
  addFloatingBlocks(group, palette, 7, 3.2);
}

function buildCourseScene(group, palette) {
  for (let i = 0; i < 5; i += 1) {
    const card = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.35, 0.08), i % 2 ? palette.cyan : palette.gold);
    card.position.set((i - 2) * 0.42, (i - 2) * 0.22, -i * 0.34);
    card.rotation.set(-0.12, 0.45 - i * 0.05, 0.08);
    group.add(card);
  }
  addOrbitLines(group, palette, 2.6, 3);
}

function addFloatingBlocks(group, palette, count, radius) {
  const materials = [palette.gold, palette.cyan, palette.white, palette.black];
  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2;
    const block = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.32), materials[i % materials.length]);
    block.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 1.2, Math.sin(angle) * 1.4);
    block.rotation.set(angle, angle * 0.6, angle * 0.3);
    group.add(block);
  }
}

function addOrbitLines(group, palette, radius, count) {
  for (let i = 0; i < count; i += 1) {
    const ring = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.TorusGeometry(radius + i * 0.28, 0.015, 10, 110)), palette.wire);
    ring.rotation.set(Math.PI / 2 + i * 0.34, i * 0.42, 0);
    group.add(ring);
  }
}

function wireframe(geometry, material) {
  return new THREE.LineSegments(new THREE.WireframeGeometry(geometry), material);
}

function addParticleField(scene, sceneName) {
  const count = sceneName === "ads" ? 160 : 120;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 14;
    positions[i + 1] = (Math.random() - 0.5) * 8;
    positions[i + 2] = (Math.random() - 0.5) * 7;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: 0xf4c95d, size: 0.035, transparent: true, opacity: 0.55 });
  scene.add(new THREE.Points(geometry, material));
}

function loadContent() {
  const saved = sharedState?.content || readJsonLocal(CONTENT_KEY, {});
  return mergeDeep(structuredClone(defaultContent), saved);
}

function saveContent(content) {
  sharedState.content = content;
  localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
  persistSharedState();
}

function mergeDeep(base, saved) {
  Object.entries(saved || {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      base[key] = value;
    } else if (value && typeof value === "object" && base[key] && typeof base[key] === "object" && !Array.isArray(base[key])) {
      mergeDeep(base[key], value);
    } else if (value !== undefined) {
      base[key] = value;
    }
  });
  return base;
}

function activeItems(items = []) {
  return items.filter((item) => item.active !== false);
}

function getPath(source, pathValue) {
  return pathValue.split(".").reduce((value, key) => value?.[key], source);
}

function recordVisit(page) {
  sharedState.visits ||= { total: 0, log: [] };
  sharedState.visits.total = Number(sharedState.visits.total || 0) + 1;
  sharedState.visits.log.unshift({ page, createdAt: new Date().toISOString() });
  sharedState.visits.log = sharedState.visits.log.slice(0, 200);
  writeLocalBackup(sharedState);
  apiRequest("/api/visit", { method: "POST", body: { page } }).catch(() => {});
}

async function saveRequest(type, details, userOverride = null) {
  const user = userOverride || getCurrentUser();
  if (!user || !localStorage.getItem(USER_SESSION_KEY)) {
    throw new Error("Please log in before sending a request.");
  }
  const result = await apiRequest("/api/requests", {
    method: "POST",
    auth: "user",
    body: { type, details }
  });
  const requests = getRequests();
  requests.unshift(result.request);
  saveRequests(requests.slice(0, 300));
  return result.request;
}

function getRequests() {
  return sharedState?.requests || readJsonLocal(REQUESTS_KEY, []);
}

function saveRequests(requests) {
  sharedState.requests = requests;
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  persistSharedState();
}

function getOrders() {
  return sharedState?.orders || readJsonLocal(ORDERS_KEY, []);
}

function saveOrders(orders) {
  sharedState.orders = orders.slice(0, 200);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(sharedState.orders));
  persistSharedState();
}

async function saveOrder(order) {
  const result = await apiRequest("/api/orders", {
    method: "POST",
    auth: "user",
    body: { order }
  });
  const orders = getOrders();
  orders.unshift(result.order);
  sharedState.orders = orders.slice(0, 200);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(sharedState.orders));
  return result.order;
}

function getNotifications() {
  return sharedState?.notifications || readJsonLocal(NOTIFICATIONS_KEY, []);
}

function saveNotifications(notifications) {
  sharedState.notifications = notifications.slice(0, 1000);
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(sharedState.notifications));
  persistSharedState();
}

function getUserNotifications(userId) {
  if (!userId) return [];
  return getNotifications().filter((item) => item.userId === userId);
}

function userUnreadCount(userId) {
  return getUserNotifications(userId).filter((item) => !item.read).length;
}

function addNotification(userId, title, message, requestId = "") {
  if (!userId || !message) return;
  const notifications = getNotifications();
  notifications.unshift({
    id: uid(),
    userId,
    requestId,
    title,
    message,
    read: false,
    alerted: false,
    createdAt: new Date().toISOString()
  });
  saveNotifications(notifications);
}

function markUserNotificationsSeen() {
  const user = getCurrentUser();
  if (!user) return;
  const notifications = getNotifications();
  notifications.forEach((item) => {
    if (item.userId === user.id) item.alerted = true;
  });
  saveNotifications(notifications);
  apiRequest("/api/notifications/seen", { method: "POST", auth: "user" }).catch(() => {});
}

function markUserNotificationsRead() {
  const user = getCurrentUser();
  if (!user) return;
  const notifications = getNotifications();
  notifications.forEach((item) => {
    if (item.userId === user.id) {
      item.read = true;
      item.alerted = true;
    }
  });
  saveNotifications(notifications);
  apiRequest("/api/notifications/read", { method: "POST", auth: "user" }).catch(() => {});
}

function getUsers() {
  return sharedState?.users || readJsonLocal(USERS_KEY, []);
}

function saveUsers(users) {
  sharedState.users = users;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  persistSharedState();
}

function getCurrentUser() {
  if (!localStorage.getItem(USER_SESSION_KEY)) return null;
  const profile = readJsonLocal(CURRENT_USER_PROFILE_KEY, null);
  if (profile?.id) return profile;
  const legacyId = localStorage.getItem(CURRENT_USER_KEY);
  return legacyId ? getUsers().find((item) => item.id === legacyId) || null : null;
}

function setCurrentUser(user, token = "") {
  if (!user?.id) return;
  if (token) localStorage.setItem(USER_SESSION_KEY, token);
  localStorage.setItem(CURRENT_USER_PROFILE_KEY, JSON.stringify(user));
  localStorage.setItem(CURRENT_USER_KEY, user.id);
}

function clearCurrentUser() {
  localStorage.removeItem(USER_SESSION_KEY);
  localStorage.removeItem(CURRENT_USER_PROFILE_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);
}

async function loadSharedState() {
  const fallback = localStateSnapshot();
  const adminToken = localStorage.getItem(ADMIN_TOKEN_KEY);
  const remote = currentPage === "admin" && adminToken ? await fetchAdminState() : await fetchSharedState();
  const next = normalizeState(remote || fallback);
  const legacy = localStateSnapshot();
  const migrated = localStorage.getItem("nexoraMigratedToSharedDbV1") === "true";
  const userSession = await fetchUserSession();

  if (userSession?.user) {
    setCurrentUser(userSession.user);
    next.notifications = userSession.notifications || [];
  } else if (localStorage.getItem(USER_SESSION_KEY)) {
    clearCurrentUser();
  }

  if (currentPage === "admin" && adminToken && !remote) {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  }

  if (currentPage === "admin" && adminToken && !migrated && hasLegacyData(legacy)) {
    next.content = mergeDeep(mergeDeep(structuredClone(defaultContent), next.content || {}), legacy.content || {});
    next.users = mergeById(next.users, legacy.users);
    next.requests = mergeById(next.requests, legacy.requests);
    next.orders = mergeById(next.orders, legacy.orders);
    next.notifications = mergeById(next.notifications, legacy.notifications);
    next.visits.total = Math.max(Number(next.visits.total || 0), Number(legacy.visits.total || 0));
    next.visits.log = mergeByCreatedAt(next.visits.log, legacy.visits.log).slice(0, 200);
    localStorage.setItem("nexoraMigratedToSharedDbV1", "true");
    await persistStateToApi(next);
  }

  writeLocalBackup(next);
  return next;
}

async function fetchSharedState() {
  return apiRequest("/api/public-state", { optional: true });
}

async function fetchAdminState() {
  return apiRequest("/api/admin/state", { auth: "admin", optional: true });
}

async function fetchUserSession() {
  if (!localStorage.getItem(USER_SESSION_KEY)) return null;
  return apiRequest("/api/me", { auth: "user", optional: true });
}

async function persistSharedState() {
  if (!sharedState) return;
  writeLocalBackup(sharedState);
  await persistStateToApi(sharedState);
}

async function persistStateToApi(state) {
  if (!localStorage.getItem(ADMIN_TOKEN_KEY)) return false;
  const saved = await apiRequest("/api/admin/state", {
    method: "POST",
    auth: "admin",
    body: normalizeState(state),
    optional: true
  });
  if (!saved) return false;
  sharedState = normalizeState(saved);
  writeLocalBackup(sharedState);
  return true;
}

async function apiRequest(path, options = {}) {
  const bases = [apiBaseUrl, "", "http://127.0.0.1:5174"].filter((value, index, array) => array.indexOf(value) === index);
  const method = options.method || "GET";
  const token = options.auth === "admin" ? localStorage.getItem(ADMIN_TOKEN_KEY) : options.auth === "user" ? localStorage.getItem(USER_SESSION_KEY) : "";

  for (const base of bases) {
    try {
      const headers = { ...(options.headers || {}) };
      if (options.body !== undefined) headers["Content-Type"] = "application/json";
      if (token) headers.Authorization = `Bearer ${token}`;
      const response = await fetch(`${base}${path}`, {
        method,
        headers,
        cache: "no-store",
        body: options.body !== undefined ? JSON.stringify(options.body) : undefined
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Request failed.");
      apiBaseUrl = base;
      return data;
    } catch (error) {
      if (base === bases[bases.length - 1]) {
        if (options.optional) return null;
        throw error;
      }
    }
  }
  return null;
}

function normalizeState(state = {}) {
  return {
    version: 1,
    content: state.content || readJsonLocal(CONTENT_KEY, {}),
    requests: Array.isArray(state.requests) ? state.requests : [],
    orders: Array.isArray(state.orders) ? state.orders : [],
    users: Array.isArray(state.users) ? state.users : [],
    notifications: Array.isArray(state.notifications) ? state.notifications : [],
    visits: {
      total: Number(state.visits?.total || 0),
      log: Array.isArray(state.visits?.log) ? state.visits.log : []
    }
  };
}

function localStateSnapshot() {
  return normalizeState({
    content: readJsonLocal(CONTENT_KEY, {}),
    requests: readJsonLocal(REQUESTS_KEY, []),
    orders: readJsonLocal(ORDERS_KEY, []),
    users: readJsonLocal(USERS_KEY, []),
    notifications: readJsonLocal(NOTIFICATIONS_KEY, []),
    visits: {
      total: Number(localStorage.getItem(VISITS_KEY) || 0),
      log: readJsonLocal(`${VISITS_KEY}:log`, [])
    }
  });
}

function writeLocalBackup(state) {
  localStorage.setItem(CONTENT_KEY, JSON.stringify(state.content || {}));
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(state.requests || []));
  localStorage.setItem(ORDERS_KEY, JSON.stringify(state.orders || []));
  localStorage.setItem(USERS_KEY, JSON.stringify(state.users || []));
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(state.notifications || []));
  localStorage.setItem(VISITS_KEY, String(state.visits?.total || 0));
  localStorage.setItem(`${VISITS_KEY}:log`, JSON.stringify(state.visits?.log || []));
}

function hasLegacyData(state) {
  return Boolean(
    Object.keys(state.content || {}).length ||
      state.users.length ||
      state.requests.length ||
      state.orders.length ||
      state.notifications.length
  );
}

function mergeById(primary = [], secondary = []) {
  const map = new Map();
  [...secondary, ...primary].forEach((item) => {
    if (item?.id) map.set(item.id, item);
  });
  return [...map.values()].sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function mergeByCreatedAt(primary = [], secondary = []) {
  const seen = new Set();
  return [...primary, ...secondary]
    .filter((item) => {
      const key = `${item.page || ""}:${item.createdAt || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function readJsonLocal(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function userContact(user) {
  return {
    id: user.id,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    phone: user.phone
  };
}

async function hashPassword(value) {
  const data = new TextEncoder().encode(String(value || ""));
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function cleanUsername(value) {
  return String(value || "").trim().replace(/\s+/g, "").toLowerCase();
}

function applyTheme(content) {
  document.documentElement.style.setProperty("--accent", content.settings.accentColor || "#f4c95d");
}

function emailHref(subject, body = "") {
  const params = new URLSearchParams({ subject: `NEXORA LABS: ${subject}`, body });
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`.replace(/&/g, "&amp;");
}

function whatsappHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function whatsappIcon() {
  return `
    <svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.02 3.5A12.25 12.25 0 0 0 5.54 22.1L4 28.5l6.55-1.49A12.25 12.25 0 1 0 16.02 3.5Z" fill="currentColor"/>
      <path d="M22.94 18.88c-.36-.18-2.1-1.03-2.43-1.15-.33-.12-.57-.18-.81.18-.24.36-.93 1.15-1.14 1.39-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.54 3.88 6.15 5.44.86.37 1.53.59 2.05.76.86.27 1.64.23 2.26.14.69-.1 2.1-.86 2.4-1.69.3-.83.3-1.54.21-1.69-.09-.15-.33-.24-.69-.42Z" fill="#030303"/>
    </svg>
  `;
}

function adminNavButton(section, label, icon, count = 0) {
  return `
    <button type="button" data-admin-section="${section}" class="${adminSection === section ? "is-active" : ""}">
      <i data-lucide="${icon}"></i>
      <span>${esc(label)}</span>
      ${count ? `<em>${count}</em>` : ""}
    </button>
  `;
}

function metricCard(label, value, icon) {
  return `<div class="metric-card tilt-card"><i data-lucide="${icon}"></i><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;
}

function requestMini(item) {
  const user = item.user || {};
  return `<div class="request-mini"><strong>${esc(item.type)}</strong><span>${esc(user.fullName || item.details?.name || "Unknown user")} - ${esc(item.status)} - ${new Date(item.createdAt).toLocaleString()}</span></div>`;
}

function requestUserBlock(item) {
  const user = item.user || {};
  const name = user.fullName || item.details?.name || "Unknown user";
  const email = user.email || item.details?.email || "";
  const phone = user.phone || item.details?.phone || "";
  return `
    <div class="request-user">
      <strong>${esc(name)}</strong>
      <span><i data-lucide="mail"></i>${esc(email || "No email")}</span>
      <span><i data-lucide="phone"></i>${esc(phone || "No phone")}</span>
    </div>
  `;
}

function formatRequestSummary(details = {}) {
  return Object.entries(details)
    .filter(([, value]) => value)
    .map(([key, value]) => `${titleCase(key)}: ${value}`)
    .join(" | ");
}

function replyHref(item) {
  const contact = item.user?.email || item.user?.phone || item.details?.email || item.details?.phone || item.details?.contact || "";
  const message = `Hello, I received your ${item.type} request and I am ready to help.`;
  if (String(contact).includes("@")) return `mailto:${contact}?subject=Nexora request&body=${encodeURIComponent(message)}`;
  const digits = String(contact).replace(/\D/g, "");
  if (digits.length >= 8) return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  return whatsappHref(message);
}

function whatsappReplyHref(item) {
  const phone = item.user?.phone || item.details?.phone || item.details?.contact || "";
  const digits = String(phone).replace(/\D/g, "");
  const message = `Hello ${item.user?.fullName || item.details?.name || ""}, I received your ${item.type} request and I am ready to help.`;
  if (digits.length >= 8) return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  return whatsappHref(message);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function priceToNumber(value) {
  const text = String(value || "").toLowerCase();
  const match = text.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  if (!match) return 0;
  let amount = Number(match[1]);
  if (text.includes("m")) amount *= 1000000;
  if (text.includes("k")) amount *= 1000;
  return amount;
}

function money(value) {
  return `₦${Number(value || 0).toLocaleString()}`;
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function attr(value) {
  return esc(value);
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function titleCase(value) {
  return String(value).replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}
