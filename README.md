# AuditFlow

> AI-powered UX audit tool. Paste a URL, get a senior-level UX teardown in minutes.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v3
- Supabase (auth + DB)
- Stripe (payments)
- OpenAI GPT-4o Vision (audit engine)
- ScreenshotOne API (page capture)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  app/              # Next.js App Router pages + API routes
  components/
    landing/        # Landing page sections
    layout/         # Navbar, Footer
  lib/              # Utils, Supabase client, Stripe helpers
  types/            # TypeScript type definitions
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your keys.

## Build Phases

| Phase | Status | Description |
|-------|--------|-------------|
| 1 | ✅ Done | Landing page + mock audit preview |
| 2 | 🔨 Next | Supabase auth + Stripe payments |
| 3 | ⏳ Queue | Real OpenAI audit engine + ScreenshotOne |
| 4 | ⏳ Queue | Dashboard + audit history |
| 5 | ⏳ Queue | PDF export + launch |
