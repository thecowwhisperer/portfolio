import type { Project } from "@/lib/projects";

const STATUS_TONE: Record<Project["status"], string> = {
  Live: "bg-[color:var(--accent-soft)] text-[color:var(--accent)] border-[color:var(--accent)]/30",
  "In dev": "bg-[color:var(--surface-muted)] text-[color:var(--foreground)] border-[color:var(--line-strong)]",
  Prototype: "bg-[color:var(--surface-muted)] text-[color:var(--muted)] border-[color:var(--line-strong)]",
};

export function StatusPill({ status }: { status: Project["status"] }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${STATUS_TONE[status]}`}
    >
      {status === "Live" ? (
        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
      ) : null}
      {status}
    </span>
  );
}
