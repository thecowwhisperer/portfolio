import { STACK } from "@/lib/profile";
import { SectionHeader } from "./SectionHeader";

const GROUPS = [
  { key: "frontend", label: "Frontend & client" },
  { key: "backend", label: "Backend & infra" },
  { key: "ai", label: "AI, data & automation" },
  { key: "comms", label: "Payments & comms" },
] as const;

export function Stack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
      <SectionHeader
        eyebrow="03 — Stack"
        title="What I reach for"
        description="The tools and platforms that actually show up across the work above — not a vanity list."
      />
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {GROUPS.map((group) => (
          <div key={group.key}>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-4">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {STACK[group.key].map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
