# Nexora Labs Launch Guide

This app is a Node/Vite site with server APIs for accounts, requests, admin replies, payments, and shared content. Do not deploy it as a static-only site unless you remove registration, admin, and notification features.

## Required Free Stack

- Web hosting: Render free web service, which gives a public `https://<name>.onrender.com` subdomain.
- Database: Neon free Postgres or Supabase free Postgres. Render free Postgres is not recommended for public user data because free Render Postgres databases expire after 30 days.
- Payments: Paystack public key is already in browser code. Keep Paystack secret keys out of this repo.
- Nexora AI: add an OpenAI API key in Render if you want the chat assistant to answer live.

## Local Production Check

```bash
npm install
npm run build
npm start
```

Open:

- `http://127.0.0.1:5173/`
- `http://127.0.0.1:5173/api/health`
- `http://127.0.0.1:5173/admin.html`

The admin login will not work unless `ADMIN_PASSWORD` is set.

## Environment Variables

Set these in the hosting provider:

```text
ADMIN_PASSWORD=<strong private admin password>
DATABASE_URL=<postgres connection string>
HOST=0.0.0.0
NODE_VERSION=22.12.0
OPENAI_API_KEY=<private OpenAI API key for Nexora AI>
OPENAI_MODEL=gpt-5.2
PAYSTACK_SECRET_KEY=<private Paystack secret key for bank verification>
```

`DATABASE_URL` must be a server-side Postgres connection string. Do not paste it into browser code or public HTML.

## Render Deployment

1. Push this project to a GitHub repository.
2. Create or open a Neon/Supabase Postgres database and copy the pooled connection string.
3. In Render, create a new Blueprint instance from this repo. Render will read `render.yaml`.
4. When prompted, enter `ADMIN_PASSWORD`, `DATABASE_URL`, and any optional private keys you need: `OPENAI_API_KEY` for Nexora AI and `PAYSTACK_SECRET_KEY` for payout bank verification.
5. After deployment, open the Render URL and test:
   - Registration
   - Login
   - A service request form
   - Admin login at `/admin.html`
   - Admin reply to a registered user
   - Course checkout launch
6. Update `public/robots.txt` and `public/sitemap.xml` with the final Render URL or custom domain.

## Launch Caveats

- Free Render web services can spin down and wake slowly.
- Free databases have storage, bandwidth, and availability limits.
- Use a paid database before running real ad traffic or storing important customer records.
- Legal pages are starter copy, not legal advice.
