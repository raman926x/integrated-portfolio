import { useScrollY } from "@/hooks/use-scroll-progress";
import marqueeImg from "@/assets/marquee-board.png";

export function Hero() {
  const y = useScrollY();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Gradient wash */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-rad" />
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Status bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Status — Open for new work · 2026
          </div>
          <div className="hidden md:block">
            30.7333° N / 76.7794° E — Chandigarh, IN
          </div>
        </div>

        {/* Massive type */}
        <h1
          className="reveal font-display font-semibold leading-[0.85] tracking-tighter text-foreground"
          style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)" }}
        >
          <span className="block">designer</span>
          <span className="block pl-[10%]">
            <span className="text-stroke">of</span>{" "}
            <em className="not-italic text-primary">things</em>
          </span>
          <span className="block pl-[4%]">
            that <em className="font-display italic text-foreground/80">move</em>.
          </span>
        </h1>

        {/* Lower section */}
        <div className="mt-14 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              className="reveal text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "0.15s" }}
            >
              I'm <span className="text-foreground">Ramandeep Singh</span> — a
              UI/UX & product designer in Chandigarh building loud, opinionated
              interfaces dashboards, software and the occasional weird
              little side quest.
            </p>
            <div
              className="reveal mt-7 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.25s" }}
            >
              <a
                href="#work"
                className="neon-button inline-flex items-center gap-2"
              >
                See the work
                <span>↗</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
              >
                Read about me
              </a>
            </div>
          </div>

          {/* Floating "info card" instead of portrait */}
          <div className="md:col-span-7">
            <div
              className="relative ml-auto w-full max-w-md"
              style={{ transform: `translateY(${y * -0.05}px)` }}
            >
              <div className="relative grain overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-frame">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>// system.log</span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                    live
                  </span>
                </div>
                <div className="mt-5 space-y-2 font-mono text-[13px] leading-relaxed text-foreground/85">
                  <Line k="role">UI / UX · product designer</Line>
                  <Line k="based">Chandigarh, India</Line>
                  <Line k="years">03 / arranging pixels</Line>
                  <Line k="loves">cars · games · grids</Line>
                  <Line k="rate">accepting q3 — q4</Line>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>v3.0 · 2026</span>
                  <span>↳ scroll</span>
                </div>
              </div>
              {/* Static tilted marquee image */}
              <div
                className="absolute -left-6 -top-12 hidden md:block w-36 drop-shadow-2xl z-10"
                style={{ transform: `rotate(-6deg)` }}
              >
                <img src={marqueeImg} alt="Marquee Board" className="w-full h-auto object-contain" />
              </div>
              <div
                className="absolute -right-4 -bottom-4 rotate-6 rounded-lg bg-amber px-3 py-2 font-mono text-[11px] font-semibold uppercase text-amber-foreground shadow-soft"
                style={{ transform: `rotate(${6 - y * 0.03}deg)` }}
              >
                est. 2023
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Double marquee */}
      <div className="relative mt-24 space-y-1 border-y border-border/60 bg-card/30 py-2">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            <Row />
            <Row />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-reverse gap-10 whitespace-nowrap font-display text-4xl font-semibold italic tracking-tight text-stroke md:text-6xl">
            <RowAlt />
            <RowAlt />
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="w-16 shrink-0 text-muted-foreground">{k}</span>
      <span className="text-foreground/90">{children}</span>
    </div>
  );
}

function Row() {
  const items = [
    "Product Design",
    "Motorcycle Design",
    "Game UI",
    "Brand Systems",
    "Dashboards",
    "Prototyping",
  ];
  return (
    <div className="flex items-center gap-10">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-10">
          {it}
          <span className="text-primary">✶</span>
        </span>
      ))}
    </div>
  );
}
function RowAlt() {
  const items = [
    "available 2026",
    "based in chandigarh",
    "no AI slop",
    "yes weird ideas",
    "make it loud",
    "ship it twice",
  ];
  return (
    <div className="flex items-center gap-10">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-10">
          {it}
          <span>/</span>
        </span>
      ))}
    </div>
  );
}
