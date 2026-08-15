import { useScrollY } from "@/hooks/use-scroll-progress";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const y = useScrollY();
  const scrolled = y > 24;
  return (
    <header className="fixed top-0 z-50 w-full pt-3 md:pt-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 transition-all duration-500 md:px-6 ${
          scrolled
            ? "rounded-full border border-border/60 bg-background/70 shadow-soft backdrop-blur-xl"
            : "rounded-full border border-transparent bg-transparent"
        }`}
        style={{ width: scrolled ? "min(72rem, calc(100% - 1.5rem))" : "min(72rem, calc(100% - 1.5rem))" }}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-acid font-display text-lg font-bold text-acid-foreground">
            R
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            ramandeep<span className="text-primary">/</span>singh
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          <Link to="/work" className="transition-colors hover:text-foreground">
            01 · Work
          </Link>
          <Link to="/about" className="transition-colors hover:text-foreground">
            02 · About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-foreground">
            03 · Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 md:text-sm"
        >
          Let's talk
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </header>
  );
}
