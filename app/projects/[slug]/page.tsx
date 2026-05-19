import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { findProject, PROJECTS } from "@/lib/projects";
import { PROFILE } from "@/lib/profile";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { StatusPill } from "@/components/StatusPill";
import { GitHubMark } from "@/components/icons";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: `Not found — ${PROFILE.name}` };
  return {
    title: `${project.name} — ${PROFILE.name}`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — ${PROFILE.name}`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-16 pb-16">
          <Link
            href="/#featured"
            className="inline-flex items-center gap-1.5 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all work
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <StatusPill status={project.status} />
            <span className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)]">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-[color:var(--foreground)]">
            {project.name}
          </h1>
          <p className="mt-3 text-xl text-[color:var(--muted)]">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[color:var(--muted)]">
            {project.commits ? (
              <span className="inline-flex items-center gap-1.5 font-mono">
                <GitBranch className="w-3.5 h-3.5" />
                {project.commits} commits
              </span>
            ) : null}
            {project.period ? <span className="font-mono text-xs">{project.period}</span> : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[color:var(--accent)]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {project.liveUrl.replace(/^https?:\/\//, "")}
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[color:var(--accent)]"
              >
                <GitHubMark className="w-3.5 h-3.5" />
                source
              </a>
            ) : null}
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-3">
              Overview
            </h2>
            <p className="text-[color:var(--foreground)] leading-relaxed text-lg">
              {project.summary}
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-4">
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-[color:var(--foreground)] leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm font-mono px-3 py-1 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--foreground)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        <section className="border-t border-[color:var(--line)] bg-[color:var(--surface-muted)]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-6">
              More projects
            </h2>
            <div className="grid sm:grid-cols-3 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-xl overflow-hidden">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group bg-[color:var(--surface)] p-5 flex flex-col gap-2 hover:bg-[color:var(--surface-muted)] transition-colors"
                >
                  <StatusPill status={p.status} />
                  <h3 className="mt-1 text-base font-medium text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[color:var(--muted)] leading-snug">{p.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs text-[color:var(--subtle)] group-hover:text-[color:var(--accent)]">
                    Read more <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
