import { createFileRoute } from "@tanstack/react-router";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export const Route = createFileRoute("/about/")({
  component: AboutRoute,
  head: () => ({
    meta: [
      { title: "About — Ramandeep Singh" },
      { name: "description", content: "About Ramandeep Singh and his hobbies." },
    ],
  }),
});

function AboutRoute() {
  const scrollProgress = useScrollProgress();

  // We want the gradient to appear as we scroll down
  // Starts at 0 opacity, reaches full opacity at 0.5 scroll progress
  const gradientOpacity = Math.min(1, scrollProgress * 2);

  return (
    <main className="relative bg-background text-foreground pt-32 pb-24 overflow-hidden">
      {/* Background that slowly gains color on scroll */}
      <div 
        aria-hidden 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 ease-out z-0 bg-rad"
        style={{ opacity: gradientOpacity * 0.7 }}
      />
      <div className="grain z-10" />

      <div className="relative z-20 mx-auto max-w-6xl px-5 md:px-8">
        
        {/* Intro Section - Minimal Black & White */}
        <section className="min-h-[80vh] flex flex-col justify-center reveal">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            ../about
          </p>
          <h1
            className="mt-5 font-display font-semibold leading-[0.85] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            beyond <em className="not-italic text-primary">pixels</em> <br/>
            & interfaces.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            When I'm not designing automotive HMIs or product interfaces, I'm usually 
            sketching cars, creating posters, or capturing moments through my lens. 
            Scroll down to see the other sides of my creative journey.
          </p>
        </section>

        {/* Section 1: Car & Moto Designs */}
        <section className="py-16 relative">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-12">
            01 / Automotive & Moto Designs
          </h2>
          {/* Marquee Carousel */}
          <div className="w-[150vw] -ml-[25vw] overflow-hidden flex whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity tilt-up">
            <div className="animate-marquee flex gap-8 py-4 items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`car-${i}`} className="w-[400px] h-[300px] bg-card/40 border border-border rounded-xl flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent z-10 transition-opacity group-hover:opacity-0" />
                  <img src={`/about/sketches/${i}.jpg`} alt={`Sketch ${i}`} className="absolute inset-0 w-full h-full object-cover z-0" />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`car-dup-${i}`} className="w-[400px] h-[300px] bg-card/40 border border-border rounded-xl flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent z-10 transition-opacity group-hover:opacity-0" />
                  <img src={`/about/sketches/${i}.jpg`} alt={`Sketch ${i}`} className="absolute inset-0 w-full h-full object-cover z-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Graphic Design & Posters */}
        <section className="py-16 relative">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-12 text-right">
            02 / Graphic Design & Posters
          </h2>
          {/* Reverse Marquee Carousel */}
          <div className="w-[150vw] -ml-[25vw] overflow-hidden flex whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity tilt-down">
            <div className="animate-marquee-reverse flex gap-8 py-4 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={`poster-${i}`} className="w-[300px] h-[400px] bg-card/40 border border-border rounded-xl flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden relative shadow-soft group">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 transition-opacity group-hover:opacity-0" />
                  <img src={`/about/posters/${i}.jpg`} alt={`Poster ${i}`} className="absolute inset-0 w-full h-full object-cover z-0" />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={`poster-dup-${i}`} className="w-[300px] h-[400px] bg-card/40 border border-border rounded-xl flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden relative shadow-soft group">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 transition-opacity group-hover:opacity-0" />
                  <img src={`/about/posters/${i}.jpg`} alt={`Poster ${i}`} className="absolute inset-0 w-full h-full object-cover z-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Photographs (Drying on a wire) */}
        <section className="py-24 relative min-h-[80vh] flex flex-col justify-center">
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-24 text-center">
            03 / Through the lens
          </h2>
          
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* The Wire */}
            <div className="absolute top-1/2 left-[-10vw] right-[-10vw] h-[1px] bg-border/60 -translate-y-1/2 rotate-1" />
            
            {/* The Photos */}
            <div className="relative w-full max-w-5xl mx-auto flex justify-around items-center z-10 px-4">
              
              <div className="relative -mt-12 -rotate-3 group hover:z-20 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img src="/assets/clip-hmi.png" alt="Clip" className="absolute -top-6 left-1/2 w-10 h-10 -translate-x-1/2 z-20" />
                <div className="w-[220px] h-[293px] md:w-[320px] md:h-[426px] bg-[#e5e5e5] p-4 shadow-frame rounded-none">
                  <div className="w-full h-[85%] bg-zinc-300 overflow-hidden flex items-center justify-center">
                    <img src="/about/photos/1.jpg" alt="Photo 1" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="relative mt-20 rotate-2 group hover:z-20 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img src="/assets/clip-hmi.png" alt="Clip" className="absolute -top-6 left-1/2 w-10 h-10 -translate-x-1/2 z-20" />
                <div className="w-[220px] h-[293px] md:w-[320px] md:h-[426px] bg-[#e5e5e5] p-4 shadow-frame rounded-none">
                  <div className="w-full h-[85%] bg-zinc-300 overflow-hidden flex items-center justify-center">
                    <img src="/about/photos/2.jpg" alt="Photo 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="relative -mt-8 -rotate-1 group hover:z-20 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img src="/assets/clip-hmi.png" alt="Clip" className="absolute -top-6 left-1/2 w-10 h-10 -translate-x-1/2 z-20" />
                <div className="w-[220px] h-[293px] md:w-[320px] md:h-[426px] bg-[#e5e5e5] p-4 shadow-frame rounded-none">
                  <div className="w-full h-[85%] bg-zinc-300 overflow-hidden flex items-center justify-center">
                    <img src="/about/photos/3.jpg" alt="Photo 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
