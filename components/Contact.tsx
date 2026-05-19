import { ArrowUpRight, Mail } from "lucide-react";
import { PROFILE } from "@/lib/profile";
import { GitHubMark } from "./icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[color:var(--line)] bg-[color:var(--surface-muted)]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-24">
        <div className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-3">
          05 — Get in touch
        </div>
        <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[color:var(--foreground)] max-w-3xl">
          Building something I'd be useful on?
        </h2>
        <p className="mt-6 text-lg text-[color:var(--muted)] max-w-2xl">
          I'm based in {PROFILE.location} and open to full-time, contract, or founding-engineer
          roles. Easiest path is email — I read everything.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--accent)] text-white text-sm hover:bg-[color:var(--accent-hover)] transition-colors"
          >
            <Mail className="w-4 h-4" />
            {PROFILE.email}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[color:var(--line-strong)] text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
          >
            <GitHubMark className="w-4 h-4" />
            github.com/{PROFILE.githubHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
