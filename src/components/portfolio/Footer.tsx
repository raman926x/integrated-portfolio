export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border/60 bg-background"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-rad opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          ../contact
        </p>
        <h2
          className="mt-5 font-display font-semibold leading-[0.85] tracking-tighter text-foreground"
          style={{ fontSize: "clamp(3rem, 12vw, 11rem)" }}
        >
          got a <em className="not-italic text-primary">weird</em>
          <br />
          <span className="text-stroke">idea?</span> let's build.
        </h2>

        <div className="mt-12 grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <a
              href="mailto:ramandeep.design@gmail.com"
              className="group inline-flex items-center gap-4 font-display text-2xl font-semibold text-foreground md:text-4xl"
            >
              ramandeep.design@gmail.com
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:rotate-45 md:h-14 md:w-14">
                ↗
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Replies usually within 24 hours, IST. Open to product, software
              and identity work — collabs welcome.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Dribbble", href: "https://dribbble.com/raman926x" },
                { label: "Instagram", href: "https://www.instagram.com/ethos.ui/?utm_source=ig_web_button_share_sheet" },
                { label: "Behance", href: "https://www.behance.net/ramandeepsingh171" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card/40 px-4 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {s.label}
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Ramandeep Singh · Chandigarh, IN</p>
          <p>built with too much coffee · v3.0</p>
        </div>
      </div>
    </footer>
  );
}
