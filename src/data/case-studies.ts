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
    slug: "project-1",
    title: "JPH Engineers Website",
    tagline: "Modern digital presence for a multi-domain engineering firm.",
    year: "2026",
    role: "Design & Front-end",
    timeline: "6 weeks",
    stack: ["React", "Figma"],
    hero: {
      src: caseHeroJPH,
      alt: "JPH Engineers main interface screenshot",
    },
    introduction: [
      "JPH Engineers has been in constant operation for over fifteen years, successfully delivering complex engineering and civil projects across the region. Their portfolio is vast and impressive, reflecting over a decade of technical expertise and reliable execution.",
      "However, their digital presence had remained untouched since 2012. The website was severely outdated, failing to reflect the scale and quality of their modern operations, and was long overdue for a comprehensive redesign.",
    ],
    problem: {
      statement:
        "An archaic digital footprint was costing the firm credibility and actively hindering potential sales from web-based channels.",
      points: [
        "The outdated interface created a poor first impression, alienating prospective new clients.",
        "The existing architecture made it impossible for customers to easily view the company's extensive project portfolio.",
        "Critical contact pathways were buried, creating unnecessary friction for incoming leads.",
      ],
    },
    designStudy: {
      intro:
        "The goal was to build an evergreen digital presence that balanced technical authority with modern, accessible web design principles.",
      steps: [
        {
          label: "01",
          title: "Research",
          body: "Conducted stakeholder interviews and analyzed competitor domains to discover that clients prioritize visual proof of past projects over dense technical specifications.",
        },
        {
          label: "02",
          title: "Structure",
          body: "Streamlined the site architecture, moving from a deeply nested 15-page legacy structure to a clean, flat hierarchy focused on Portfolio, Services, and Contact.",
        },
        {
          label: "03",
          title: "Visual language",
          body: "Adopted a structured, utilitarian visual language—using a high-contrast palette and sharp typography to evoke the precision of engineering and blueprints.",
        },
        {
          label: "04",
          title: "Iteration",
          body: "Early prototypes were too text-heavy. After user testing, we pivoted to a photography-first layout for the portfolio section, letting the scale of their civil projects speak for itself.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotJPH,
        alt: "JPH Engineers new landing page",
        caption: "The new homepage—putting decades of engineering expertise front and center.",
      },
      {
        src: caseColoursJPH,
        alt: "JPH Engineers project portfolio",
        caption: "Streamlined and high contrast brand colours.",
      },
    ],
    result: {
      body: "The redesigned website launched as a robust, evergreen platform that accurately reflects the firm's legacy. Within the first quarter, the streamlined user experience drove a significant increase in inbound inquiries.",
      metrics: [
        { value: "300%", label: "Increase in portfolio views" },
        { value: "45%", label: "More inbound contact submissions" },
        { value: "2.4s", label: "Average page load time" },
      ],
    },
    conclusion: [
      "This project reinforced the importance of letting the work speak for itself; in B2B engineering, high-quality project imagery is far more persuasive than paragraphs of marketing copy.",
      "The site is now built on a scalable architecture, empowering the JPH team to easily upload new case studies as their portfolio continues to grow.",
    ],
    link: { label: "Visit live site", href: "https://www.jphengineers.com/" },
  },
  {
    slug: "project-2",
    title: "CenCOPS Dashboard",
    tagline: "Internal dashboard for communication and record management.",
    year: "2026",
    role: "Product Design",
    timeline: "6 weeks",
    stack: ["React", "Figma", "Tailwind"],
    hero: {
      src: caseHeroCCP,
      alt: "CenCOPS dashboard interface",
    },
    introduction: [
      "The Centre of Cyber Operations (CenCOPS) under the Chandigarh Police plays a pivotal role in managing digital threats and inter-departmental communications.",
      "As the scope of their operations expanded, their internal tools struggled to keep pace. They required a secure, centralized dashboard to track cases, assign tasks, and securely communicate across different units.",
    ],
    problem: {
      statement:
        "Highly sensitive communications and task assignments were scattered across disparate legacy systems, leading to administrative bottlenecks and potential security oversights.",
      points: [
        "Officers spent excessive time navigating complex, bureaucratic UI layers to find basic case information.",
        "Task hand-offs between departments were difficult to track and lacked clear audit trails.",
        "The legacy system's visual density caused cognitive overload during high-pressure situations.",
      ],
    },
    designStudy: {
      intro:
        "The objective was to cut through the red tape and design an interface that prioritized speed, clarity, and uncompromising security.",
      steps: [
        {
          label: "01",
          title: "Observation",
          body: "Shadowed officers during shift changes to map out the exact sequence of actions taken when a new case was logged.",
        },
        {
          label: "02",
          title: "Information Architecture",
          body: "Flattened the navigation structure. We prioritized global search and unified inbox views to minimize clicks for critical tasks.",
        },
        {
          label: "03",
          title: "Visual System",
          body: "Developed a 'dark mode by default' interface to reduce eye strain in low-light operations rooms, utilizing amber accents to highlight urgent alerts without inducing panic.",
        },
        {
          label: "04",
          title: "Prototyping",
          body: "Tested high-fidelity mockups with shift supervisors. We refined the data density, ultimately increasing row height to improve legibility on varied display resolutions.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotCCP,
        alt: "CenCOPS dashboard overview",
        caption: "The unified case view—bringing critical information to the surface.",
      },
      {
        src: caseColoursCCP,
        alt: "CenCOPS task assignment flow",
        caption: "Streamlined task assignments with built-in audit trails.",
      },
    ],
    result: {
      body: "The new dashboard dramatically accelerated response times and reduced administrative overhead. By removing bureaucratic friction from the interface, officers could focus entirely on case resolution.",
      metrics: [
        { value: "40%", label: "Reduction in task assignment time" },
        { value: "100%", label: "Compliance with new audit protocols" },
        { value: "Zero", label: "Reported data navigation errors" },
      ],
    },
    conclusion: [
      "Designing for government and law enforcement requires balancing strict security protocols with the human need for intuitive, frictionless software.",
      "The system is currently being scaled to accommodate additional regional departments in the coming year.",
    ],
  },
  {
    slug: "project-3",
    title: "Accobiz Sales Invoice UI",
    tagline: "Slightly prettier industry software. All other ERPs look like dogshit.",
    year: "2026",
    role: "UI/UX Design",
    timeline: "2 weeks",
    stack: ["Framer", "Figma"],
    hero: {
      src: caseHeroACB,
      alt: "Accobiz Sales Invoice interface",
    },
    introduction: [
      "Enterprise Resource Planning (ERP) software is notoriously utilitarian, often sacrificing user experience for raw functionality. Accobiz wanted to challenge this paradigm.",
      "They needed a sales management and invoicing dashboard that felt as fluid and modern as consumer software, without losing the data density required for complex B2B sales cycles.",
    ],
    problem: {
      statement:
        "Sales teams were actively avoiding the existing ERP system because the interface was overly complex, leading to inaccurate data entry and delayed invoicing.",
      points: [
        "Invoices took too many clicks to generate, causing frustration at the end of the sales pipeline.",
        "The interface was cluttered with irrelevant fields, confusing new hires.",
        "Data visualization for monthly targets was non-existent, requiring external spreadsheet tracking.",
      ],
    },
    designStudy: {
      intro:
        "The challenge was translating complex enterprise data into a visually distinct, easy-to-understand dashboard that sales reps actually wanted to use.",
      steps: [
        {
          label: "01",
          title: "Deconstruction",
          body: "Audited the existing 40-field invoice creation form, identifying that 60% of the inputs could be automated or conditionally hidden.",
        },
        {
          label: "02",
          title: "Wireframing",
          body: "Designed a modular layout that separated active tasks (invoice drafting) from passive data (monthly sales targets).",
        },
        {
          label: "03",
          title: "Aesthetics",
          body: "Introduced an 'electric' brand accent against a stark, high-contrast background to give the software a premium, aggressive feel that stood out in a sea of boring ERPs.",
        },
        {
          label: "04",
          title: "Validation",
          body: "Ran click-tests on the new invoice generation flow, proving that the simplified UI significantly reduced time-on-task.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotACB,
        alt: "Accobiz dashboard view",
        caption: "Sales targets and recent invoices at a glance.",
      },
      {
        src: caseColoursACB,
        alt: "Invoice generation modal",
        caption: "A streamlined, frictionless invoice generation flow.",
      },
    ],
    result: {
      body: "The redesigned UI transformed a tedious administrative chore into a frictionless process. The sales team adopted the new system enthusiastically, completely abandoning their shadow spreadsheets.",
      metrics: [
        { value: "65%", label: "Faster invoice generation" },
        { value: "2 weeks", label: "Reduction in onboarding time" },
        { value: "98%", label: "User adoption rate" },
      ],
    },
    conclusion: [
      "B2B software doesn't have to be ugly to be functional. Bringing consumer-grade aesthetics to enterprise tools is a massive competitive advantage.",
      "The UI language developed here is now being rolled out across the rest of the Accobiz software suite.",
    ],
  },
  {
    slug: "project-4",
    title: "Ninja Deliveries Application",
    tagline: "Modern application that matches the modern startup.",
    year: "2025",
    role: "Product Design",
    timeline: "6 weeks",
    stack: ["React Native", "Figma"],
    hero: {
      src: caseHeroNDL,
      alt: "Ninja Deliveries mobile application",
    },
    introduction: [
      "Ninja Deliveries entered the fiercely competitive quick-commerce space with a promise of unparalleled speed and reliability.",
      "To back up their bold operational claims, they needed a mobile application that felt equally fast, distinct, and memorable—an app that didn't just work, but left a lasting brand impression.",
    ],
    problem: {
      statement:
        "The MVP app was functional but entirely generic, failing to differentiate the brand in a saturated market and suffering from a clunky checkout flow.",
      points: [
        "Users were dropping off at the checkout stage due to confusing payment and address selection steps.",
        "The visual identity blended in with every other delivery app on the market.",
        "Order tracking lacked clarity, leading to an influx of customer support queries.",
      ],
    },
    designStudy: {
      intro:
        "The redesign focused on injecting a distinct, high-contrast brand identity while ruthlessly optimizing the e-commerce conversion funnel.",
      steps: [
        {
          label: "01",
          title: "Funnel Analysis",
          body: "Identified the checkout drop-off points, realizing that a multi-page checkout was causing unnecessary friction for repeat customers.",
        },
        {
          label: "02",
          title: "Interaction Design",
          body: "Consolidated the cart, address, and payment selection into a single, seamless bottom-sheet interaction to speed up the purchase loop.",
        },
        {
          label: "03",
          title: "Visual Identity",
          body: "Pushed a bold 'magenta' accent color paired with brutalist typography, giving the app an edgy, unmistakably modern feel.",
        },
        {
          label: "04",
          title: "Micro-interactions",
          body: "Added subtle haptic feedback and fluid animations to the order tracking screen, transforming a waiting period into an engaging brand moment.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotNDL,
        alt: "Ninja Deliveries home screen",
        caption: "High-contrast browsing designed for rapid selection.",
      },
      {
        src: caseColoursNDL,
        alt: "Ninja Deliveries checkout flow",
        caption: "A single-screen checkout flow that converts.",
      },
    ],
    result: {
      body: "The bold redesign helped Ninja Deliveries stand out in a crowded market. The optimized checkout flow directly translated to higher conversion rates, while the clear tracking interface significantly reduced support burden.",
      metrics: [
        { value: "22%", label: "Increase in checkout conversions" },
        { value: "35%", label: "Drop in order-status queries" },
        { value: "4.9", label: "App Store rating" },
      ],
    },
    conclusion: [
      "Distinct visual design is a powerful tool for customer retention in commoditized markets. When the core service (delivery) is identical, the interface becomes the brand.",
      "We are currently working on a dark-mode implementation tailored for late-night ordering behavior.",
    ],
  }
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
