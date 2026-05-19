import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PROFILE, STATS } from "@/lib/profile";
import { GitHubMark } from "./icons";

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-20 sm:pt-28 sm:pb-24">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
        <span>Available for new work</span>
      </div>
      <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-[1.05] text-[color:var(--foreground)]">
        {PROFILE.name}
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-[color:var(--muted)] max-w-2xl leading-relaxed">
        {PROFILE.title}.
        <br />
        {PROFILE.blurb}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[color:var(--muted)]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> {PROFILE.location}
        </span>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-1.5 hover:text-[color:var(--accent)] transition-colors"
        >
          <Mail className="w-3.5 h-3.5" /> {PROFILE.email}
        </a>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-[color:var(--accent)] transition-colors"
        >
          <GitHubMark className="w-3.5 h-3.5" /> @{PROFILE.githubHandle}
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#featured"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[color:var(--accent)] text-white text-sm hover:bg-[color:var(--accent-hover)] transition-colors"
        >
          See the work <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[color:var(--line-strong)] text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
        >
          Get in touch
        </a>
      </div>

      <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-2xl overflow-hidden">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-[color:var(--surface)] px-5 py-6 flex flex-col gap-1"
          >
            <dt className="text-xs uppercase tracking-widest text-[color:var(--subtle)] font-mono">
              {stat.label}
            </dt>
            <dd className="text-2xl font-medium text-[color:var(--foreground)] tabular-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
