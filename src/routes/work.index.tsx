import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/case-studies";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Design Portfolio" },
      {
        name: "description",
        content:
          "Case studies of shipped product and interface work: problem, process, and outcome.",
      },
      { property: "og:title", content: "Selected Work — Design Portfolio" },
      {
        property: "og:description",
        content:
          "Case studies of shipped product and interface work: problem, process, and outcome.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 reveal">
      <header className="pb-24 pt-32 md:pt-48">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Case studies
        </p>
        <h1 className="mt-8 font-display text-6xl leading-[0.95] md:text-8xl">
          Selected work
        </h1>
      </header>

      <ul className="border-t border-border">
        {caseStudies.map((study, i) => (
          <li key={study.slug} className="border-b border-border">
            <Link
              to="/work/$slug"
              params={{ slug: study.slug }}
              className="group grid gap-4 py-12 md:grid-cols-[4rem_1fr_auto] md:items-baseline"
            >
              <span className="font-mono text-xs tracking-[0.24em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="font-display text-3xl transition-colors group-hover:text-acid md:text-4xl">
                  {study.title}
                </span>
                <span className="mt-3 block max-w-md text-sm text-muted-foreground">
                  {study.tagline}
                </span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {study.year} →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="py-24 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
        MORE COMING.
      </footer>
    </main>
  );
}
