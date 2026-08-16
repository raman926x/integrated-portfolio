import caseHeroGRID from "@/assets/case-hero-GRID.png";
import caseShotGRID from "@/assets/case-shot-JPH.png";
import caseColoursGRID from "@/assets/case-colours-JPH.png";
import caseHeroCCP from "@/assets/case-hero-CCP.png";
import caseShotCCP from "@/assets/case-shot-CCP.png";
import caseColoursCCP from "@/assets/case-colours-CCP.png";
import caseHeroACB from "@/assets/case-hero-ACB.png";
import caseShotACB from "@/assets/case-shot-ACB.png";
import caseColoursACB from "@/assets/case-colours-ACB.png";
import caseHeroNDL from "@/assets/case-hero-NDL.png";
import caseShotNDL from "@/assets/case-shot-NDL.png";
import caseColoursNDL from "@/assets/case-colours-NDL.png";

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string | undefined;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  hero: Screenshot;
  introduction: string[];
  problem: {
    statement: string;
    points: string[];
  };
  designStudy: {
    intro: string;
    steps: { label: string; title: string; body: string }[];
  };
  screenshots: Screenshot[];
  result: {
    body: string;
    metrics: { value: string; label: string }[];
  };
  conclusion: string[];
  link?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hmi-project-1",
    title: "GRID Cluster",
    tagline: "A modern solution to the large screens problem.",
    year: "2026",
    role: "HMI Concept Design",
    timeline: "4 weeks",
    stack: ["Figma", "Blender"],
    hero: {
      src: caseHeroGRID,
      alt: "the 4-screen setup.",
    },
    introduction: [
      "The automotive industry has been obsessed recently with moving everything into screens. This concept uses that ideology but in a more human-centred way.",
      "The GRID Cluster eliminates the fundamental problem of moving core functionalities to screens by assigning separate screens for separate tasks.",
    ],
    problem: {
      statement:
        "The most significant problem I face with large touch-based screens is how distracting they are while driving. I have to actively take my eyes off the road to operate them which is fundamentally flawed UX, and yet the industry continues to abuse them because ✨money✨.",
      points: [
        "Lack of separation of tasks.",
        "Cognitive overload during high-speed driving.]",
        "Lack of physical tactile feedback.]",
      ],
    },
    designStudy: {
      intro:
        "Human brains are wired to associate certain places with certain tasks. If the controls for ADAS and HVAC are in the same physical space, the brain is going to fumble. My approach fixes that issue by dividing the functionality of one large screen into four small screens.",
      steps: [
        {
          label: "01",
          title: "Media",
          body: "The media screen shows the currently playing media by default, scrolling brings up the queue, and further the equalizer.",
        },
        {
          label: "02",
          title: "Navigation",
          body: "The default navigation screen is the full-size map, with the traffic data and saved places to follow.",
        },
        {
          label: "03",
          title: "HVAC",
          body: "The climate control system is the most commonly fucked-up UI in the industry. All it needs is one screen to show all the information a standard dual-zone system requires.",
        },
        {
          label: "04",
          title: "Vehicle",
          body: "All vehicle-related information such as the power-torque output, tyre pressures, and fuel economy are assigned to this screen.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotGRID,
        alt: "HMI cluster view",
        caption: "The functionality of a large screen compacted smartly.",
      },
      {
        src: caseColoursGRID,
        alt: "HMI infotainment view",
        caption: "Simply, easy-to-read colour palette. Nothing fancy.",
      },
    ],
    result: {
      body: "Infotainment systems built around human psychology can actually aid in safe driving, which should be the highest priority goal for any corporation large enough to produce cars.",
      metrics: [
        { value: "0.5s", label: "Target glance time" },
        { value: "60fps", label: "Prototyped animation framerate" },
        { value: "AAA", label: "Contrast ratio compliance" },
      ],
    },
    conclusion: [
      "This project solidified my belief that automotive UI must prioritize safety over screen real-estate, and monetary benefits.",
    ],
  },
  {
    slug: "hmi-project-2",
    title: "[HMI Project 2 Title]",
    tagline: "[A short, punchy tagline about this dashboard or interface]",
    year: "2025",
    role: "HMI Concept Design",
    timeline: "3 weeks",
    stack: ["Figma", "After Effects"],
    hero: {
      src: caseHeroCCP, 
      alt: "HMI interface screenshot",
    },
    introduction: [
      "[Introduce the second concept.]",
      "[Second paragraph.]",
    ],
    problem: {
      statement:
        "[Core problem statement.]",
      points: [
        "[Point 1]",
        "[Point 2]",
        "[Point 3]",
      ],
    },
    designStudy: {
      intro:
        "[Briefly introduce your design approach.]",
      steps: [
        {
          label: "01",
          title: "[Process Step 1]",
          body: "[Details about this step.]",
        },
        {
          label: "02",
          title: "[Process Step 2]",
          body: "[Details about this step.]",
        },
        {
          label: "03",
          title: "[Process Step 3]",
          body: "[Details about this step.]",
        },
        {
          label: "04",
          title: "[Process Step 4]",
          body: "[Details about this step.]",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotCCP,
        alt: "HMI view",
        caption: "[Caption]",
      },
      {
        src: caseColoursCCP,
        alt: "HMI view",
        caption: "[Caption]",
      },
    ],
    result: {
      body: "[Summarize outcome.]",
      metrics: [
        { value: "...", label: "[Metric 1]" },
        { value: "...", label: "[Metric 2]" },
        { value: "...", label: "[Metric 3]" },
      ],
    },
    conclusion: [
      "[Final wrap up thought.]",
    ],
  },
  {
    slug: "hmi-project-3",
    title: "[HMI Project 3 Title]",
    tagline: "[A short, punchy tagline about this dashboard or interface]",
    year: "2025",
    role: "HMI Concept Design",
    timeline: "5 weeks",
    stack: ["Figma", "Framer"],
    hero: {
      src: caseHeroACB, 
      alt: "HMI interface screenshot",
    },
    introduction: [
      "[Introduce the third concept.]",
      "[Second paragraph.]",
    ],
    problem: {
      statement:
        "[Core problem statement.]",
      points: [
        "[Point 1]",
        "[Point 2]",
        "[Point 3]",
      ],
    },
    designStudy: {
      intro:
        "[Briefly introduce your design approach.]",
      steps: [
        {
          label: "01",
          title: "[Process Step 1]",
          body: "[Details about this step.]",
        },
        {
          label: "02",
          title: "[Process Step 2]",
          body: "[Details about this step.]",
        },
        {
          label: "03",
          title: "[Process Step 3]",
          body: "[Details about this step.]",
        },
        {
          label: "04",
          title: "[Process Step 4]",
          body: "[Details about this step.]",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotACB,
        alt: "HMI view",
        caption: "[Caption]",
      },
      {
        src: caseColoursACB,
        alt: "HMI view",
        caption: "[Caption]",
      },
    ],
    result: {
      body: "[Summarize outcome.]",
      metrics: [
        { value: "...", label: "[Metric 1]" },
        { value: "...", label: "[Metric 2]" },
        { value: "...", label: "[Metric 3]" },
      ],
    },
    conclusion: [
      "[Final wrap up thought.]",
    ],
  },
  {
    slug: "hmi-project-4",
    title: "[HMI Project 4 Title]",
    tagline: "[A short, punchy tagline about this dashboard or interface]",
    year: "2024",
    role: "HMI Concept Design",
    timeline: "2 weeks",
    stack: ["Figma"],
    hero: {
      src: caseHeroNDL, 
      alt: "HMI interface screenshot",
    },
    introduction: [
      "[Introduce the fourth concept.]",
      "[Second paragraph.]",
    ],
    problem: {
      statement:
        "[Core problem statement.]",
      points: [
        "[Point 1]",
        "[Point 2]",
        "[Point 3]",
      ],
    },
    designStudy: {
      intro:
        "[Briefly introduce your design approach.]",
      steps: [
        {
          label: "01",
          title: "[Process Step 1]",
          body: "[Details about this step.]",
        },
        {
          label: "02",
          title: "[Process Step 2]",
          body: "[Details about this step.]",
        },
        {
          label: "03",
          title: "[Process Step 3]",
          body: "[Details about this step.]",
        },
        {
          label: "04",
          title: "[Process Step 4]",
          body: "[Details about this step.]",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotNDL,
        alt: "HMI view",
        caption: "[Caption]",
      },
      {
        src: caseColoursNDL,
        alt: "HMI view",
        caption: "[Caption]",
      },
    ],
    result: {
      body: "[Summarize outcome.]",
      metrics: [
        { value: "...", label: "[Metric 1]" },
        { value: "...", label: "[Metric 2]" },
        { value: "...", label: "[Metric 3]" },
      ],
    },
    conclusion: [
      "[Final wrap up thought.]",
    ],
  }
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
