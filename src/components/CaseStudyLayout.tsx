import { Link } from "@tanstack/react-router";
import type { CaseStudy } from "@/data/case-studies";

function Section({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-24 md:py-36">
      <div className="mb-10 flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span className="text-acid">{index}</span>
        <span>{label}</span>
      </div>
      {children}
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  caption?: string | undefined;
  priority?: boolean | undefined;
}) {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-frame">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="block w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  return (
    <main className="relative min-h-screen">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 pt-32 pb-8 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground relative z-40">
        <Link to="/work" className="transition-colors hover:text-acid">
          ← Index
        </Link>
        <span>{study.year}</span>
      </nav>

      {/* Title */}
      <header className="mx-auto w-full max-w-5xl px-6 pb-16 pt-16 md:pb-24 md:pt-28">
        <h1 className="font-display text-5xl leading-[0.95] md:text-8xl">
          {study.title}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          {study.tagline}
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.18em] md:grid-cols-4">
          <div>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="mt-2">{study.role}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Timeline</dt>
            <dd className="mt-2">{study.timeline}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="mt-2">{study.year}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Stack</dt>
            <dd className="mt-2 leading-relaxed">{study.stack.join(" · ")}</dd>
          </div>
        </dl>
      </header>

      {/* Hero screenshot */}
      <div className="mx-auto w-full max-w-5xl px-6">
        <Figure
          src={study.hero.src}
          alt={study.hero.alt}
          caption={study.hero.caption}
          priority
        />
      </div>

      {/* Introduction */}
      <Section index="01" label="Introduction">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          {study.introduction.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Problem statement */}
      <Section index="02" label="Problem statement">
        <p className="font-display text-3xl leading-tight md:text-4xl">
          {study.problem.statement}
        </p>
        <ul className="mt-12 space-y-5 border-l border-border pl-6">
          {study.problem.points.map((point) => (
            <li key={point} className="text-base text-muted-foreground">
              {point}
            </li>
          ))}
        </ul>
      </Section>

      {/* Design study */}
      <Section index="03" label="Design study">
        <p className="text-lg leading-relaxed text-foreground/85">
          {study.designStudy.intro}
        </p>
        <div className="mt-16 space-y-14">
          {study.designStudy.steps.map((step) => (
            <div
              key={step.label}
              className="grid gap-3 border-t border-border pt-6 md:grid-cols-[6rem_1fr]"
            >
              <span className="font-mono text-xs tracking-[0.24em] text-acid">
                {step.label}
              </span>
              <div>
                <h3 className="font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* More screenshots */}
      <section className="mx-auto w-full max-w-5xl px-6 py-24 md:py-36">
        <div className="mb-12 flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-acid">04</span>
          <span>Screens</span>
        </div>
        <div className="space-y-24">
          {study.screenshots.map((shot) => (
            <Figure key={shot.src} {...shot} />
          ))}
        </div>
      </section>

      {/* Final result */}
      <Section index="05" label="Final result">
        <p className="text-lg leading-relaxed text-foreground/85">
          {study.result.body}
        </p>
        <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          {study.result.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-display text-5xl text-acid">
                {metric.value}
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Conclusion */}
      <Section index="06" label="Conclusion">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          {study.conclusion.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {study.link ? (
          <a
            href={study.link.href}
            className="mt-14 inline-flex items-center gap-3 border-b border-acid pb-1 font-mono text-xs uppercase tracking-[0.24em] text-acid transition-opacity hover:opacity-70"
          >
            {study.link.label} ↗
          </a>
        ) : null}
      </Section>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-24 pt-8">
        <Link
          to="/work"
          className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-acid"
        >
          ← Back to all work
        </Link>
      </footer>
    </main>
  );
}
