import { useInView, useScrollY } from "@/hooks/use-scroll-progress";

const hobbies = [
  {
    label: "Motorcycle & Car Design",
    note: "Sketching tanks, fairings and silhouettes that look fast standing still.",
  },
  {
    label: "Game Design",
    note: "Prototyping small worlds, mechanics and the feel of a good button press.",
  },
  {
    label: "Graphic Design",
    note: "Posters, type experiments and identity work — print still feels magical.",
  },
  {
    label: "Photography",
    note: "Mostly 35mm film around Chandigarh. Mostly happy accidents.",
  },
];

const tools = ["Figma", "Framer", "Canva", "Frame0", "Sketchbook"];

export function About() {
  const y = useScrollY();
  const [setRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border/60 bg-card/40 py-24 md:py-32"
    >
      {/* Drifting blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-electric/10 blur-3xl animate-blob"
      />

      <div ref={setRef} className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              ../about
            </p>
            <h2
              className="mt-4 font-display font-semibold leading-[0.9] tracking-tighter text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              the<br />
              <em className="not-italic text-primary">human.</em>
            </h2>
          </div>

          <div
            className={`md:col-span-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-1000`}
          >
            <p className="font-display text-2xl leading-snug text-foreground md:text-4xl">
              I design{" "}
              <span className="text-primary">dashboards & software</span>{" "}
              that don't apologise for taking up space — built on three years of
              designing products across India and beyond.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border/60 py-6 text-center md:gap-8">
              <Stat value="03" label="years designing" />
              <Stat value="15+" label="projects out" />
              <Stat value="∞" label="kept rebuilding" />
            </div>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Outside product work I'm usually sketching motorcycles, prototyping
              small games, redrawing a poster "one more time", or wandering
              Chandigarh with my trusty Nikon. The portfolio is a side effect of
              the obsession, not the point.
            </p>
          </div>
        </div>

        {/* Hobbies — staggered cards */}
        <div className="mt-20">
          <p className="mb-16 relative z-10 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ../obsessions
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {hobbies.map((h, i) => (
              <div
                key={h.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
                style={{
                  transform: `translateY(${(y - 1800 - i * 80) * -0.02}px)`,
                }}
              >
                <div
                  aria-hidden
                  className="absolute -right-6 -top-10 font-display text-[7rem] font-bold leading-none text-foreground/[0.04] transition-colors group-hover:text-primary/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  obsession_{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-foreground">
                  {h.label}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{h.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ../toolbelt
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background/60 px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-foreground md:text-5xl">
        {value}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
