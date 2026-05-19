import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MORE } from "@/lib/projects";
import { SectionHeader } from "./SectionHeader";
import { StatusPill } from "./StatusPill";

export function MoreProjects() {
  return (
    <section id="more" className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
      <SectionHeader
        eyebrow="02 — Also built"
        title="Smaller projects, internal tools, and prototypes"
        description="A grab-bag of marketing sites, infra, trading bots, and AI experiments. Click through for tech and highlights."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-2xl overflow-hidden">
        {MORE.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group bg-[color:var(--surface)] p-6 flex flex-col gap-3 hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <StatusPill status={project.status} />
              <ArrowUpRight className="w-4 h-4 text-[color:var(--subtle)] group-hover:text-[color:var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tight text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-[color:var(--muted)] leading-snug">
                {project.tagline}
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-1">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono text-[color:var(--subtle)]"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 ? (
                <span className="text-[10px] font-mono text-[color:var(--subtle)]">
                  +{project.tech.length - 4}
                </span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
