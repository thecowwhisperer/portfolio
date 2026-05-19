export const PROFILE = {
  name: "Jackson Gilmore",
  title: "Full-stack engineer · AI product builder",
  location: "Grand Rapids, MI",
  blurb:
    "I build production software end-to-end — iOS + web consumer products, multi-tenant B2B SaaS, AI-driven media pipelines, and the scrapers and queues underneath them. Comfortable on the data layer, the wire, and the UI.",
  longBlurb:
    "Over the last six months I've shipped a consumer iOS + web app with Stripe subscriptions and a custom audio engine, a multi-tenant B2B platform on Next.js + Supabase + Telnyx, a public property-review database backed by a Python scraper pipeline, an AI video factory built on Google Veo and ffmpeg, and a handful of marketing sites, internal tools, and trading bots. I treat AI as part of the wiring, not the product — the wins are in the operational details: rate-limit-aware multi-key rotation, feature-flag killswitches, ED25519 webhook verification, async per-tenant Postgres rate limiting, and CI-driven scrapers.",
  email: "jgncompany@gmail.com",
  github: "https://github.com/thecowwhisperer",
  githubHandle: "thecowwhisperer",
  linkedin: "",
  twitter: "",
  resumeUrl: "",
};

export const STATS = [
  { label: "Projects shipped or in active dev", value: "20+" },
  { label: "Commits authored across owned repos", value: "530+" },
  { label: "Live production deployments", value: "4" },
  { label: "Stacks: iOS, web, data, agents", value: "5+" },
];

export const STACK = {
  frontend: [
    "React 19",
    "Next.js 16 (App Router)",
    "Vite",
    "TypeScript",
    "Tailwind v4",
    "Framer Motion",
    "Radix UI",
    "Electron",
    "Capacitor → iOS",
  ],
  backend: [
    "Node.js / tsx",
    "Python 3.10–3.11",
    "Postgres / Supabase",
    "Prisma",
    "BullMQ + Redis",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "Turborepo / pnpm",
  ],
  ai: [
    "OpenAI (GPT-4.1)",
    "Gemini (Pro + Veo)",
    "Anthropic",
    "ElevenLabs",
    "Cartesia TTS",
    "MCP (server + client)",
    "Playwright",
    "curl_cffi / TLS fingerprint rotation",
  ],
  comms: [
    "Stripe (subs + Checkout + webhooks)",
    "Telnyx (calls, voicemail, ED25519)",
    "Resend",
    "Twilio",
    "Web Push",
    "Telegram Bot API",
  ],
};
