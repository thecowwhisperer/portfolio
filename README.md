# jackson-gilmore / portfolio

A Next.js 16 portfolio site for showing off shipped work.

## Run locally

```bash
npm install   # already done by scaffold
npm run dev   # http://localhost:3000
```

## What's here

- `app/page.tsx` — long-scroll homepage (Hero → Featured → More → Stack → About → Contact)
- `app/projects/[slug]/page.tsx` — detail page per project, statically generated at build
- `lib/projects.ts` — single source of truth for every project. Edit this to add / reorder / rewrite.
- `lib/profile.ts` — your name, contact links, stats, tech stack.
- `components/` — section components (Nav, Hero, FeaturedProjects, MoreProjects, Stack, About, Contact, Footer, StatusPill, SectionHeader)
- `app/globals.css` — theme tokens (light, warm-off-white background, deep-green accent). Tailwind v4 inline-theme syntax.

## Personalize before sharing

These are intentionally minimal so you can edit one place:

1. **`lib/profile.ts`** — set `linkedin`, `twitter`, `resumeUrl` (currently empty strings, so they're hidden).
2. **`lib/projects.ts`** — re-order, drop, or rewrite. The first 4 with `featured: true` show up in the Featured section.
3. **`app/globals.css`** — `--accent` is `#1f3a2e` (deep green). Swap to whatever brand color you like.
4. **`public/`** — drop in a `og.png` (1200×630) and uncomment the `images` field in `app/layout.tsx`'s `openGraph` if you want a proper social card.

## Deploy

```bash
# Make sure you've personalized lib/profile.ts first
gh repo create thecowwhisperer/portfolio --public --source=. --push
vercel link
vercel deploy --prod
```

Or just push to GitHub and `vercel.com/new` → import.

## Known follow-ups

- Add a real OG image at `public/og.png`
- Add LinkedIn URL once you set one
- Optionally drop a resume PDF in `public/` and set `PROFILE.resumeUrl`
- Consider adding screenshots per project (currently text-only by design — fast to ship, easy to maintain)
