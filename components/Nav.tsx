import Link from "next/link";
import { PROFILE } from "@/lib/profile";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--background)]/85 border-b border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-[color:var(--foreground)] hover:text-[color:var(--accent)] transition-colors"
        >
          {PROFILE.name.toLowerCase().replace(" ", "·")}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[color:var(--muted)]">
          <Link href="/#featured" className="hover:text-[color:var(--foreground)] transition-colors">
            Work
          </Link>
          <Link href="/#stack" className="hover:text-[color:var(--foreground)] transition-colors">
            Stack
          </Link>
          <Link href="/#about" className="hover:text-[color:var(--foreground)] transition-colors">
            About
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline px-3 py-1.5 border border-[color:var(--line-strong)] rounded-full hover:bg-[color:var(--accent-soft)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
