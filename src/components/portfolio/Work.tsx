import { useScrollY } from "@/hooks/use-scroll-progress";
import { useInView } from "@/hooks/use-scroll-progress";
import { Link } from "@tanstack/react-router";
import projectJPH from "@/assets/project-JPH.png";
import projectCCP from "@/assets/project-CCP.png";
import projectACB from "@/assets/project-ACB.png";
import projectNDL from "@/assets/project-NDL.png";

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
    title: "[HMI Project 1 Title]",
    client: "Concept / Passion Project",
    tags: ["Automotive", "HMI", "Cluster"],
    year: "2026",
    image: projectJPH, // Replace this image import later
    frame: "browser",
    accent: "acid",
    description:
      "[Short paragraph describing the concept dashboard or interface. E.g., An exploration of dark-mode cluster interfaces for hypercars.]",
  },
  {
    slug: "hmi-project-2",
    num: "02",
    title: "[HMI Project 2 Title]",
    client: "Concept / Passion Project",
    tags: ["Infotainment", "EV", "Dashboard"],
    year: "2025",
    image: projectCCP,
    frame: "browser",
    accent: "amber",
    description:
      "[Short description of the second concept.]",
  },
  {
    slug: "hmi-project-3",
    num: "03",
    title: "[HMI Project 3 Title]",
    client: "Concept / Passion Project",
    tags: ["HUD", "Safety", "Prototyping"],
    year: "2025",
    image: projectACB,
    frame: "browser",
    accent: "electric",
    description:
      "[Short description of the third concept.]",
  },
  {
    slug: "hmi-project-4",
    num: "04",
    title: "[HMI Project 4 Title]",
    client: "Concept / Passion Project",
    tags: ["Mobile", "Companion App"],
    year: "2024",
    image: projectNDL,
    frame: "browser",
    accent: "magenta",
    description:
      "[Short description of the fourth concept.]",
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
            Four recent projects across editorial web and
            internal tools. Tap any tile to read the case study.
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
  return (
    <div className="group relative">
      {/* Accent shadow plate */}
      <div
        className={`absolute -inset-2 -z-10 translate-x-3 translate-y-3 rounded-2xl ${accentBg[project.accent]} opacity-90 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5`}
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-frame">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-background/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-destructive/80" />
          <span className="h-3 w-3 rounded-full bg-amber/80" />
          <span className="h-3 w-3 rounded-full bg-primary/80" />
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
          <img
            src={project.image}
            alt={`${project.title} — ${project.client}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  );
}

function TabletFrame({ project }: { project: Project }) {
  return (
    <div className="group relative">
      <div
        className={`absolute -inset-2 -z-10 -translate-x-3 translate-y-3 rounded-[2rem] ${accentBg[project.accent]} opacity-90 transition-transform duration-500 group-hover:-translate-x-5 group-hover:translate-y-5`}
      />
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
          <img
            src={project.image}
            alt={`${project.title} — ${project.client}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  );
}
