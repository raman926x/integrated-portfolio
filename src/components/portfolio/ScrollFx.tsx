import { useScrollProgress, useScrollY } from "@/hooks/use-scroll-progress";

/**
 * Global scroll-driven decorations:
 *  - top progress bar
 *  - cycling hue accent on the page background
 *  - parallax floating glyphs
 */
export function ScrollFx() {
  const progress = useScrollProgress();
  const y = useScrollY();

  // Removed dynamic hue cycling to preserve static 80s Amber
  const cssVars = {} as React.CSSProperties;

  return (
    <div style={cssVars} className="contents">
      {/* Progress bar */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1">
        <div
          className="h-full bg-gradient-acid transition-[width] duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Scroll % badge */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5 font-mono text-[11px] text-muted-foreground backdrop-blur md:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
        scroll · {Math.round(progress * 100).toString().padStart(2, "0")}%
      </div>

      {/* Parallax floating decorative glyphs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-[8%] top-[20%] font-display text-[12rem] leading-none text-white/[0.04]"
          style={{ transform: `translateY(${y * -0.15}px) rotate(-8deg)` }}
        >
          ✶
        </div>
        <div
          className="absolute right-[6%] top-[55%] font-display text-[14rem] leading-none text-white/[0.035]"
          style={{ transform: `translateY(${y * -0.25}px) rotate(12deg)` }}
        >
          ◐
        </div>
        <div
          className="absolute left-[40%] bottom-[15%] font-mono text-[8rem] leading-none text-white/[0.04]"
          style={{ transform: `translateY(${y * -0.1}px)` }}
        >
          //
        </div>
      </div>
    </div>
  );
}
