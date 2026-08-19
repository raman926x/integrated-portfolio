import { useScrollY } from "@/hooks/use-scroll-progress";
import { useInView } from "@/hooks/use-scroll-progress";
import { Link } from "@tanstack/react-router";
import projectJPH from "@/assets/case-hero-GRID.png";
import projectCCP from "@/assets/case-hero-VINT.png";
import projectACB from "@/assets/case-hero-WIDE.png";
import projectNDL from "@/assets/case-hero-EINK.png";

type Frame = "browser" | "tablet" | "device";
type Accent = "acid" | "amber" | "electric" | "magenta";

type Project = {
  slug: string;
  num: string;
  title: string;
  client: string;
  tags: string[];
  year: string;
  image: string;
  frame: Frame;
  accent: Accent;
  description: string;
};

const projects: Project[] = [
  {
    slug: "hmi-project-1",
    num: "01",
    title: "GRID Cluster",
    client: "Concept / Passion Project",
    tags: ["Automotive", "HMI", "Cluster"],
    year: "2026",
    image: projectJPH,
    frame: "browser",
    accent: "acid",
    description:
      "A modern solution to the large screens problem. Eliminating the fundamental problem of moving core functionalities to screens by assigning separate screens for separate tasks.",
  },
  {
    slug: "hmi-project-2",
    num: "02",
    title: "Retro Motorcycle Navigation",
    client: "Concept / Passion Project",
    tags: ["Motorcycle", "Navigation", "Retro", "EL Display"],
    year: "2025",
    image: projectCCP,
    frame: "browser",
    accent: "amber",
    description:
      "Don't you just hate it when they slap a TFT-screen on an otherwise classic motorcycle? I do. A custom electroluminescent display for the Vintana Voyager.",
  },
  {
    slug: "hmi-project-3",
    num: "03",
    title: "Widescreen EV Cluster",
    client: "Concept / Passion Project",
    tags: ["EV", "Widescreen", "Widgets", "ADAS"],
    year: "2025",
    image: projectACB,
    frame: "browser",
    accent: "electric",
    description:
      "The correct way to do three screens. A modular, ultra-wide dashboard designed to let users fully personalize their layout, featuring integrated digital mirrors and blind-spot monitors.",
  },
  {
    slug: "hmi-project-4",
    num: "04",
    title: "E-ink Navigation System",
    client: "Concept / Passion Project",
    tags: ["E-ink", "Minimalism", "Retro", "Navigation"],
    year: "2024",
    image: projectNDL,
    frame: "browser",
    accent: "amber",
    description:
      "Because an OLED screen in a classic car interior is a crime. A distraction-free, low-refresh navigation panel tailored specifically for classic and minimalist car interiors.",
  },
];

const accentBg: Record<Accent, string> = {
  acid: "bg-primary text-primary-foreground",
  amber: "bg-amber text-amber-foreground",
  electric: "bg-electric text-electric-foreground",
  magenta: "bg-magenta text-magenta-foreground",
};

export function Work() {
  return (
    <section id="work" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              ../selected_work
            </p>
            <h2
              className="mt-4 font-display font-semibold leading-[0.9] tracking-tighter text-foreground"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              things i've <em className="not-italic text-primary">shipped</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground md:text-base">
            Four recent concepts exploring the future of automotive 
            interfaces and digital clusters. Tap any tile to read the case study.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-28 md:space-y-40">
          {projects.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const y = useScrollY();
  const [setRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const reverse = index % 2 === 1;

  return (
    <div
      ref={setRef}
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } transition-all duration-1000 ease-out`}
    >
      {/* Frame */}
      <div className={`md:col-span-8 ${reverse ? "md:order-2" : ""}`}>
        <div
          style={{ transform: `translateY(${(y - index * 600) * -0.03}px)` }}
        >
          <ProjectFrame project={project} />
        </div>
      </div>

      {/* Meta */}
      <div className={`md:col-span-4 ${reverse ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span
            className={`grid h-8 w-8 place-items-center rounded-md ${accentBg[project.accent]} font-display font-bold`}
          >
            {project.num}
          </span>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.client}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
        >
          Open case study
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:rotate-45">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

function ProjectFrame({ project }: { project: Project }) {
  if (project.frame === "browser") return <BrowserFrame project={project} />;
  return <TabletFrame project={project} />;
}

function BrowserFrame({ project }: { project: Project }) {
  const isVideo = project.image.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i);
  
  return (
    <div className="group relative transition-all duration-500 hover:scale-[1.02]">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-frame">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-background/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-destructive/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/100" />
          <span className="h-3 w-3 rounded-full bg-green-500/100" />
          <div className="ml-3 flex-1">
            <div className="mx-auto w-full max-w-md rounded-md border border-border/60 bg-background/60 px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
              ramandeep.design/work/{project.num}
            </div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {project.year}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          {isVideo ? (
            <video
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <img
              src={project.image}
              alt={`${project.title} — ${project.client}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function TabletFrame({ project }: { project: Project }) {
  const isVideo = project.image.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i);

  return (
    <div className="group relative transition-all duration-500 hover:scale-[1.02]">
      <div className="overflow-hidden rounded-[2rem] border-[10px] border-foreground/90 bg-foreground shadow-frame">
        <div className="flex items-center justify-between bg-background/30 px-5 py-2 font-mono text-[10px] uppercase tracking-widest text-bone/70">
          <span>09:06</span>
          <span className="flex items-center gap-1">
            <span>5G</span>
            <span className="ml-2 inline-block h-2 w-5 rounded-sm border border-bone/60">
              <span className="block h-full w-4/5 bg-primary" />
            </span>
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          {isVideo ? (
            <video
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <img
              src={project.image}
              alt={`${project.title} — ${project.client}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
