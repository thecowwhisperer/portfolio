export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: "Consumer" | "B2B SaaS" | "Public Data" | "AI Tools" | "Web" | "Infra" | "Experiments";
  status: "Live" | "In dev" | "Prototype";
  liveUrl?: string;
  repoUrl?: string;
  commits?: number;
  period?: string;
  tech: string[];
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "brnwsh",
    name: "BRNWSH",
    tagline: "Neural reprogramming & AI hypnosis — iOS + web",
    category: "Consumer",
    status: "Live",
    liveUrl: "https://app.brnwsh.io",
    repoUrl: "https://github.com/thecowwhisperer/brnwsh-app",
    commits: 102,
    period: "Dec 2025 → Feb 2026",
    tech: [
      "React 19",
      "Vite",
      "Capacitor → iOS",
      "Supabase",
      "Stripe (subs + webhooks)",
      "Resend",
      "Twilio",
      "Web Push",
      "ElevenLabs",
      "Three.js",
      "JWT + OAuth",
      "Vercel",
    ],
    summary:
      "Full consumer product: an AI-guided hypnosis and habit-rewiring app that ships as a web app at app.brnwsh.io and as a native iOS app via Capacitor → Xcode. Stripe subscriptions (including weekly pricing), Supabase backend, Resend transactional email, Twilio + web-push notifications, JWT auth with guest and email flows, ElevenLabs voice migration, brainwave-entrainment audio (binaural / isochronic) layered into sessions, Three.js visuals, a What's-New changelog system, i18n / locales, and a security-audited code-obfuscation pipeline for app distribution.",
    highlights: [
      "102 commits as sole engineer across iOS + web codebases",
      "App Store submission with privacy policy, ToS, and Apple compliance docs",
      "Stripe webhook signature verification with a permanent fix after multiple iterations",
      "ElevenLabs voice migration replacing a previous TTS provider",
      "Brainwave entrainment audio (binaural / isochronic) with smooth fade-out",
      "AudioContext lifecycle hardening to fix 'closed AudioContext' edge cases",
      "Sister repo BRNWSH-TASKS (44 commits): Electron + Supabase + Dexie internal planner with AI Plan Copilot and Apple Notes sync",
      "Sister repo brnwsh-video: Remotion pipeline rendering promo creatives",
    ],
    featured: true,
  },
  {
    slug: "ripdr",
    name: "ripdr",
    tagline: "AI ringless voicemail platform for outbound B2B",
    category: "B2B SaaS",
    status: "Live",
    liveUrl: "https://ripdr.com",
    repoUrl: "https://github.com/thecowwhisperer/lead-gen-app",
    commits: 69,
    period: "Feb → Apr 2026",
    tech: [
      "Next.js 16",
      "Supabase Postgres",
      "Telnyx",
      "Cartesia TTS",
      "Stripe",
      "OpenAI (GPT-4.1-mini)",
      "LeadMagic",
      "Vercel",
    ],
    summary:
      "Multi-tenant B2B outbound platform for Summit West (AI consulting in Grand Rapids, MI). Users upload contact lists, generate personalized voicemail scripts with GPT-4.1-mini, render audio with Cartesia TTS, and drop them via Telnyx dual-call ringless delivery — all on a campaign scheduler with sequences, follow-ups, and Stripe billing.",
    highlights: [
      "Multi-tenant org / RLS Postgres schema with org-scoped helpers and a single bind-params choke point",
      "Telnyx ED25519 webhook signature verification, exact-host CSRF, structured request-ID logging",
      "Feature-flagged route killswitches that short-circuit before any auth or DB work",
      "Async per-org Postgres rate limiting (rate_limit_windows) on hot paths",
      "Smart CSV import with GPT-driven column mapping",
      "Inbound callback log with last-10-digit contact matching",
      "Sequences engine with cool-down + max-drops suppression and a Vercel Cron tick",
      "Stripe Checkout with dynamic inline price_data (no predefined Stripe Products needed)",
    ],
    featured: true,
  },
  {
    slug: "olordy",
    name: "OLORDY",
    tagline: "Public landlord and tenant review database",
    category: "Public Data",
    status: "Live",
    repoUrl: "https://github.com/thecowwhisperer/OLORDY",
    commits: 98,
    period: "Jan → Apr 2026",
    tech: [
      "Vite + React 19",
      "Supabase",
      "Python workers",
      "RentCafe scraper",
      "Telegram Bot API",
      "GitHub Actions",
    ],
    summary:
      "Public property and landlord review site with explore map, city stats, programmatic SEO pages, and a separate Python data pipeline that scrapes multi-city housing data, generates daily blog posts, and posts Telegram notifications. Includes a Chrome extension and a grassroots submission flow.",
    highlights: [
      "city_stats materialized view powering the cities index",
      "Automated daily content pipeline (blog) driven by GitHub Actions",
      "Multi-city scraper migrated from a broken Apartments.com source to RentCafe",
      "Telegram notifications for new properties / events",
      "Resilient client-side property loading: narrowed selects, timeouts, fallbacks for huge address sets",
      "Pre-launch gating via LAUNCH_CONFIG.isPreLaunch with public grassroots submission at #/submit",
    ],
    featured: true,
  },
  {
    slug: "tiktok-ad-factory",
    name: "TikTok Ad Factory",
    tagline: "AI video generation pipeline (Veo + ffmpeg) for paid social",
    category: "AI Tools",
    status: "Live",
    repoUrl: "https://github.com/thecowwhisperer/content-generator",
    commits: 35,
    period: "Dec 2025 → Jan 2026",
    tech: [
      "React 19",
      "Gemini Veo",
      "FFmpeg (WASM + native)",
      "Electron",
      "TikTok Business API",
      "IMAP / mailparser",
    ],
    summary:
      "Video generation and editing platform built on Google Gemini Veo models. Generates ad creatives, stitches them with ffmpeg, manages a video library, and uploads directly to TikTok Business. Round-robins across up to 10 Gemini API keys to dodge rate limits, ships as both a Vercel web app and a packaged macOS Electron build.",
    highlights: [
      "Multi-key Gemini rotation (up to 10 keys) for rate-limit avoidance",
      "Batch generation pipeline with concurrency controls",
      "TikTok Business API direct upload",
      "Cross-platform packaging via electron-builder",
      "IMAP listener for email-driven workflows",
    ],
    featured: true,
  },
  {
    slug: "gilmore-furniture",
    name: "Gilmore Furniture",
    tagline: "OEM contract furniture site, defense subdomain, Grand Rapids",
    category: "Web",
    status: "Live",
    liveUrl: "https://gilmore-furniture.vercel.app",
    repoUrl: "https://github.com/thecowwhisperer/Gilmore-Furniture",
    tech: ["Next.js 16 (App Router, Turbopack)", "Tailwind", "Framer Motion", "Vercel"],
    summary:
      "Marketing + capabilities site for Gilmore Furniture Inc., an OEM contract furniture manufacturer in Grand Rapids, MI (founded 1983, 150K sq ft facility). Includes a separate defense.gilmorefurnitureinc.com subdomain with its own layout, nav, and Organization JSON-LD.",
    highlights: [
      "Centralized content architecture (src/content/solutions, capabilities, verticals)",
      "Defense subdomain with Organization JSON-LD for federal procurement signals",
      "Bento gallery layout, charcoal/brass/cream/linen palette",
      "Custom case-sensitive image folder convention for Linux deploys",
    ],
  },
  {
    slug: "leader-lights",
    name: "Leader Lights",
    tagline: "Commercial LED retrofit + EV charger installer — 30+ pages",
    category: "Web",
    status: "Live",
    repoUrl: "https://github.com/thecowwhisperer/Leader-Lights",
    tech: ["Vite + React 19", "TypeScript", "Tailwind", "lucide-react"],
    summary:
      "Marketing site for a commercial LED retrofit and EV charger installation business in Grand Rapids. Includes per-utility rebate landing pages (Consumers Energy, DTE, BWL, Lansing BWL, Holland BPW, Traverse City LP, Energy Smart, Indiana Michigan Power, Grand Haven BLP), case studies, gallery, FAQ, and installation process pages.",
    highlights: [
      "WCAG-AA contrast across the site",
      "JSON-LD structured data and SEO-tuned page hierarchy",
      "Space Grotesk + Inter typography, light theme with green brand accent",
      "Single-source COMPANY_INFO constants used across the whole app",
    ],
  },
  {
    slug: "gilmore-task-tracker",
    name: "Gilmore Task Tracker",
    tagline: "Internal task tracker with foreclosure-events feed and Telegram bot",
    category: "Web",
    status: "Live",
    liveUrl: "https://gilmore-task-tracker.vercel.app",
    repoUrl: "https://github.com/thecowwhisperer/gilmore-task-tracker",
    commits: 13,
    period: "Apr 2026",
    tech: ["Vite + React 19", "Supabase", "Telegram Bot API", "Vercel"],
    summary:
      "Internal task tracker with calendar view, foreclosure-events feed sourced from mipublicnotices.com (with RentCast AVM enrichment), Telegram bot integration, and Supabase sync. Tracks tasks across Gilmore real-estate projects.",
    highlights: [
      "mipublicnotices.com scraper with bearer + anon polling modes",
      "Address + dollar-amount extraction with sale-date heuristics",
      "RentCast AVM enrichment for ARV estimates",
      "Telegram morning digest + evening preview cron in America/Detroit",
      "GitHub Actions nightly ingest into Supabase",
    ],
  },
  {
    slug: "studio",
    name: "studio",
    tagline: "Turborepo monorepo wrapping task tracker + shared tenant package",
    category: "Infra",
    status: "Live",
    repoUrl: "https://github.com/thecowwhisperer/studio",
    commits: 10,
    period: "Apr 2026",
    tech: ["Turborepo", "pnpm", "Vite", "Supabase"],
    summary:
      "Monorepo housing the Gilmore Task Tracker, a second smoke-test app, and a shared @studio/tenant package. Configured for one-Vercel-project-per-app deploys with shared root pnpm install.",
    highlights: [
      "Per-app Vercel projects with shared monorepo root install",
      "Foreclosure-ingest CI pipeline",
      "Shared tenant package for multi-tenant scaffolding",
    ],
  },
  {
    slug: "perplexity-bridge",
    name: "Perplexity Bridge",
    tagline: "MCP server letting Perplexity orchestrate Cursor workspaces",
    category: "AI Tools",
    status: "In dev",
    tech: ["TypeScript", "@modelcontextprotocol/sdk", "Express", "cloudflared"],
    summary:
      "Local MCP server bridging Perplexity custom connectors and Cursor IDE workflows. Implements OAuth (authorization code + client credentials), Streamable HTTP transport, and 9 MCP tools for workspace registration, branch creation, structured task briefs, search, diff, and Cursor launching.",
    highlights: [
      "Streamable HTTP transport (required for Perplexity custom connectors)",
      "OAuth: authorization code flow + client credentials",
      "9 MCP tools including register_workspace, write_task_brief, git_diff_summary",
      "cloudflared HTTPS tunneling for ephemeral public URLs",
      "Workspace registry persisted at config/workspaces.json with friendly aliases",
    ],
  },
  {
    slug: "octo",
    name: "OCTO",
    tagline: "LinkedIn automation CRM with server-side browser worker",
    category: "B2B SaaS",
    status: "In dev",
    tech: ["Next.js 16", "Prisma 7", "BullMQ", "Playwright", "Redis", "Postgres", "Docker"],
    summary:
      "Professional LinkedIn automation platform: a Next.js dashboard plus a BullMQ + Playwright worker doing server-side browser automation. Uses Prisma 7 against Postgres with encrypted credentials.",
    highlights: [
      "BullMQ queue with Playwright worker for headless LinkedIn flows",
      "Prisma 7 schema with encrypted credential storage",
      "Docker Compose for local Postgres + Redis",
      "Shared package between web and worker for queue type safety",
    ],
  },
  {
    slug: "prediction-arb",
    name: "prediction-arb",
    tagline: "Polymarket × Kalshi cross-platform arbitrage bot",
    category: "Infra",
    status: "Prototype",
    tech: ["Python 3.11", "py-clob-client", "kalshi-python-sync", "rapidfuzz", "structlog"],
    summary:
      "Cross-platform prediction-market arbitrage bot. Watches Polymarket via WebSocket order book and Kalshi via polling, fuzzy-matches markets across the two venues, evaluates dual-leg spreads, and gates execution behind a portfolio-aware safety layer.",
    highlights: [
      "Polymarket WebSocket order-book feed with depth tracking",
      "Kalshi polling feed",
      "rapidfuzz market matching with persisted match table",
      "SafetyGate evaluating per-position and portfolio-level limits before any dual-leg execution",
      "structlog with ISO timestamps for trace-friendly logs",
    ],
  },
  {
    slug: "commiebot",
    name: "CommieBot",
    tagline: "Twitter scraper + LLM-driven posting bot",
    category: "AI Tools",
    status: "In dev",
    repoUrl: "https://github.com/thecowwhisperer/CommieBot",
    commits: 13,
    period: "Feb 2026",
    tech: ["pnpm monorepo", "Next.js", "twitter-api-v2", "@the-convocation/twitter-scraper", "OpenAI"],
    summary:
      "Monorepo containing a Next.js web app and a separate polling bot. Scrapes target accounts with @the-convocation/twitter-scraper, generates posts with OpenAI, and publishes via twitter-api-v2.",
    highlights: [
      "Separate poller and web app sharing a typed @commiebot/db workspace package",
      "Twitter scraping with rate-aware polling",
      "OpenAI-driven post generation",
    ],
  },
  {
    slug: "event-scraper",
    name: "Event Scraper",
    tagline: "Anthropic-driven event filter with Gmail digest delivery",
    category: "AI Tools",
    status: "Prototype",
    tech: ["Python", "Anthropic API", "smtplib", "dotenv"],
    summary:
      "Scrapes a list of target organizations, uses Claude to filter and rank events by relevance, and emails a daily digest via Gmail SMTP.",
    highlights: [
      "Pluggable organizations.json target list",
      "Claude-driven filter pass for relevance",
      "Gmail SMTP delivery with app-password auth",
      "Dry-run mode for development",
    ],
  },
  {
    slug: "kasaset",
    name: "Kasaset",
    tagline: "Home Kit Finder consumer app from Figma → React",
    category: "Consumer",
    status: "Prototype",
    repoUrl: "https://github.com/thecowwhisperer/Kasaset",
    tech: ["React", "Radix UI", "Supabase"],
    summary:
      "Figma-to-code consumer app with a full Radix UI primitive set and Supabase backend. Helps users compare home kits across a catalog.",
    highlights: [
      "Full Radix primitive set across accordion, dialog, dropdown, etc.",
      "Supabase backend for catalog data",
      "Figma-fidelity component implementation",
    ],
  },
  {
    slug: "original-republic",
    name: "Original Republic",
    tagline: "Gemini-powered web app + standalone macOS bundle",
    category: "Consumer",
    status: "Prototype",
    repoUrl: "https://github.com/thecowwhisperer/Original-Republic",
    commits: 16,
    period: "Jan 2026",
    tech: ["React 19", "Gemini", "Supabase", "Bash packaging scripts"],
    summary:
      "Gemini-powered web app packaged for distribution as a standalone macOS bundle. Includes Supabase storage setup, damaged-app recovery scripts, installation flows, and an end-user-friendly README.",
    highlights: [
      "Standalone macOS bundle with launch script",
      "Damaged-app recovery instructions",
      "Supabase storage configuration",
    ],
  },
  {
    slug: "vibeflow",
    name: "VibeFlow",
    tagline: "Electron desktop wrapper that feeds local projects to Gemini",
    category: "AI Tools",
    status: "Prototype",
    repoUrl: "https://github.com/thecowwhisperer/APP-FLOW",
    tech: ["Electron", "React 19", "Gemini", "chokidar", "glob"],
    summary:
      "Electron desktop app that introspects local projects via chokidar / glob and feeds them to Gemini for flow analysis. Ships as a packaged Electron build.",
    highlights: [
      "Local-FS introspection with chokidar watchers",
      "Gemini-driven flow analysis",
      "electron-builder packaging",
    ],
  },
  {
    slug: "judgement",
    name: "Judgement",
    tagline: "Server-rendered Gemini app with Firebase + Express",
    category: "AI Tools",
    status: "Prototype",
    repoUrl: "https://github.com/thecowwhisperer/Judgement",
    tech: ["Vite", "Express", "Firebase", "@google/genai", "@base-ui/react", "Motion"],
    summary:
      "Server-side rendered Gemini-powered app using Express + Vite. Ships with a Firebase applet config, Firestore rules, Base UI primitives, and Motion for animations.",
    highlights: [
      "Custom Express server entrypoint via tsx",
      "Firestore rules and applet config bundled",
      "Base UI primitives instead of Radix",
    ],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const MORE = PROJECTS.filter((p) => !p.featured);

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
