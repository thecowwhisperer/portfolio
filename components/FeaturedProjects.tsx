import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { FEATURED } from "@/lib/projects";
import { SectionHeader } from "./SectionHeader";
import { StatusPill } from "./StatusPill";
import { GitHubMark } from "./icons";

export function FeaturedProjects() {
  return (
    <section id="featured" className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
      <SectionHeader
        eyebrow="01 — Featured"
        title="Four projects that show end-to-end product engineering"
        description="From iOS-native consumer apps to multi-tenant B2B SaaS and AI media pipelines — picked for the breadth of stack, not just the line counts."
      />

      <div className="space-y-6">
        {FEATURED.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] hover:border-[color:var(--accent)] transition-colors p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-[color:var(--subtle)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <StatusPill status={project.status} />
                  <span className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 text-[color:var(--muted)] text-base sm:text-lg">
                  {project.tagline}
                </p>
                <p className="mt-4 text-sm text-[color:var(--muted)] leading-relaxed max-w-3xl">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 8).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-[color:var(--line)] text-[color:var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 8 ? (
                    <span className="text-[11px] font-mono px-2 py-0.5 text-[color:var(--subtle)]">
                      +{project.tech.length - 8} more
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[color:var(--subtle)]">
                  {project.commits ? (
                    <span className="inline-flex items-center gap-1.5">
                      <GitBranch className="w-3 h-3" />
                      {project.commits} commits
                    </span>
                  ) : null}
                  {project.period ? <span>{project.period}</span> : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 hover:text-[color:var(--accent)]"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {project.liveUrl.replace(/^https?:\/\//, "")}
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 hover:text-[color:var(--accent)]"
                    >
                      <GitHubMark className="w-3 h-3" />
                      source
                    </a>
                  ) : null}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0 text-[color:var(--subtle)] group-hover:text-[color:var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
