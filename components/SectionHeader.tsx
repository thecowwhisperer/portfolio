export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="text-xs font-mono uppercase tracking-widest text-[color:var(--subtle)] mb-3">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[color:var(--foreground)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
