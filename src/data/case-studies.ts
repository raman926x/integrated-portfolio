import caseHeroJPH from "@/assets/case-hero-JPH.png";
import caseShotJPH from "@/assets/case-shot-JPH.png";
import caseColoursJPH from "@/assets/case-colours-JPH.png";
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
    title: "[HMI Project 1 Title]",
    tagline: "[A short, punchy tagline about this dashboard or interface]",
    year: "2026",
    role: "HMI Concept Design",
    timeline: "4 weeks",
    stack: ["Protopie", "Figma", "Blender"],
    hero: {
      src: caseHeroJPH, // Replace this image import at the top later
      alt: "HMI interface screenshot",
    },
    introduction: [
      "[Write a paragraph introducing the concept. What kind of vehicle is this for? An EV? A hypercar? A rugged off-roader?]",
      "[Write a second paragraph explaining the motivation behind this personal passion project.]",
    ],
    problem: {
      statement:
        "[What is the core problem with existing dashboards in this category? E.g., too many submenus, distracting touch targets, etc.]",
      points: [
        "[Point 1: e.g., Glare and low-light legibility issues.]",
        "[Point 2: e.g., Cognitive overload during high-speed driving.]",
        "[Point 3: e.g., Lack of physical tactile feedback.]",
      ],
    },
    designStudy: {
      intro:
        "[Briefly introduce your design approach. How did you solve the problems listed above?]",
      steps: [
        {
          label: "01",
          title: "Ergonomics & Safety",
          body: "[Explain how you sized the touch targets and positioned critical information close to the driver's line of sight.]",
        },
        {
          label: "02",
          title: "Visual System",
          body: "[Explain the color palette and typography. Why did you choose high-contrast or warm tones?]",
        },
        {
          label: "03",
          title: "Interaction Physics",
          body: "[Describe any prototyping you did for animations or transitions. How does the interface react to the driver?]",
        },
        {
          label: "04",
          title: "Edge Cases",
          body: "[How does the UI adapt to night mode or direct sunlight?]",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotJPH,
        alt: "HMI cluster view",
        caption: "[Describe this specific screen or feature.]",
      },
      {
        src: caseColoursJPH,
        alt: "HMI infotainment view",
        caption: "[Describe this specific screen or feature.]",
      },
    ],
    result: {
      body: "[Summarize the final outcome of this concept. What did you learn from designing it?]",
      metrics: [
        { value: "0.5s", label: "Target glance time" },
        { value: "60fps", label: "Prototyped animation framerate" },
        { value: "AAA", label: "Contrast ratio compliance" },
      ],
    },
    conclusion: [
      "[Final wrap up thought. E.g., This project solidified my belief that automotive UI must prioritize safety over screen real-estate.]",
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
