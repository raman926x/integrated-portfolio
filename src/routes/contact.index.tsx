import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: ContactRoute,
  head: () => ({
    meta: [
      { title: "Contact — Ramandeep Singh" },
      { name: "description", content: "Get in touch with Ramandeep Singh." },
    ],
  }),
});

function ContactRoute() {
  return (
    <main className="relative min-h-screen bg-background text-foreground pt-24 md:pt-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-rad opacity-60" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-12 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary reveal">
          ../contact
        </p>
        <h1
          className="mt-5 font-display font-semibold leading-[0.85] tracking-tighter text-foreground reveal"
          style={{ fontSize: "clamp(3rem, 12vw, 11rem)", animationDelay: "100ms" }}
        >
          got a <em className="not-italic text-primary">weird</em>
          <br />
          <span className="text-stroke">idea?</span> let's build.
        </h1>

        <div className="mt-12 grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-12 reveal" style={{ animationDelay: "200ms" }}>
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
      </div>
    </main>
  );
}
