import { PROFILE } from "@/lib/profile";
import { SectionHeader } from "./SectionHeader";

const PRINCIPLES = [
  {
    title: "Ship the working v1 first.",
    body:
      "Lightweight cuts that work end-to-end beat polished plans that don't. Follow-ups get called out separately, not bundled in.",
  },
  {
    title: "AI is wiring, not the product.",
    body:
      "The wins are in the operational details: multi-key rate-limit rotation, agent-driven CSV mapping, feature-flag killswitches, ED25519 webhook verification.",
  },
  {
    title: "Honest about platform edges.",
    body:
      "Pooler vs direct Postgres hosts, Capacitor iOS quirks, Stripe webhook signatures, Telnyx ED25519 — the kind of details a team trusts in production.",
  },
  {
    title: "Cross-cutting before vertical.",
    body:
      "Org-scoped helpers, shared scrapers, one bind-params choke point — wire it once at the right layer so the same class of bug can't recur.",
  },
];

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
      <SectionHeader eyebrow="04 — About" title="How I work" />
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <p className="text-[color:var(--muted)] leading-relaxed">{PROFILE.longBlurb}</p>
        </div>
        <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {PRINCIPLES.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-medium text-[color:var(--foreground)]">{p.title}</h3>
              <p className="mt-1.5 text-sm text-[color:var(--muted)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
