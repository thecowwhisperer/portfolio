import { PROFILE } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--background)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[color:var(--subtle)]">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>
          Built with Next.js 16 · Tailwind v4 · deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
