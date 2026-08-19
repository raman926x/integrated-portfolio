import caseHeroGRID from "@/assets/case-hero-GRID.png";
import caseShotGRID from "@/assets/case-shot-GRID.png";
import caseRenderGRID from "@/assets/case-render-GRID.png";
import caseHeroVINT from "@/assets/case-hero-VINT.mp4";
import caseShotVINT from "@/assets/case-shot-VINT.png";
import caseRenderVINT from "@/assets/case-render-VINT.png";
import caseHeroWIDE from "@/assets/case-hero-WIDE.png";
import caseShotWIDE from "@/assets/case-shot-WIDE.mp4";
import caseRenderWIDE from "@/assets/case-render-WIDE.png";
import caseHeroEINK from "@/assets/case-hero-EINK.png";
import caseShotEINK from "@/assets/case-shot-EINK.png";
import caseRenderEINK from "@/assets/case-render-EINK.png";

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string | undefined;
  loop?: boolean;
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
      "The automotive industry has recently become obsessed with moving everything onto screens. This concept embraces that shift, but in a more human-centred way.",
      "The GRID Cluster eliminates the fundamental problem of moving core functionalities to screens by assigning separate screens for separate tasks.",
    ],
    problem: {
      statement:
        "The most significant problem I face with large touch-based screens is how distracting they are while driving. I have to actively take my eyes off the road to operate them which is fundamentally flawed UX, and yet the industry continues to abuse them because ✨money✨.",
      points: [
        "• Lack of separation of tasks.",
        "• Cognitive overload during high-speed driving.",
        "• Lack of physical tactile feedback.",
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
        src: caseRenderGRID,
        alt: "HMI infotainment view",
        caption: "Looks futuristic in a good way!",
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
    title: "Retro Motorcycle Navigation",
    tagline: "Don't you just hate it when they slap a TFT-screen on an otherwise classic motorcycle? I do.",
    year: "2025",
    role: "Navigation Concept Design",
    timeline: "3 weeks",
    stack: ["Figma", "Sketchbook"],
    hero: {
      src: caseHeroVINT, 
      alt: "Electroluminescent display design.",
    },
    introduction: [
      "Back in 2024, I was designing a retro touring motorcycle and I figured it'd require a navigation screen at some point because it is a touring motorcycle first and retro second. The market was full of cheap LCDs from China with generic 2015-era graphics.",
      "That is when I stumbled upon electroluminescent displays featuring a warm amber glow, straight from the 80s. That was just perfect for the theme."
    ],
    problem: {
      statement:
        "All modern motorcycle navigation displays are too generic and standard for what is otherwise a very characterful industry.",
      points: [
        "Not all motorcycles need TFT screens.",
        "Visibility under direct sunlight is still a question.",
        "Severe lack of high-contrast, simple to operate systems.",
      ],
    },
    designStudy: {
      intro:
        "I always had one point clear in my head: Motorcycles are fun little toys. They do not need the same complexity that car HMIs have. Given the average motorcycle rider needs to be more aware and present at all times as compared to a car driver. A simple and minimal UI is the perfect baseline that I tried to follow as strictly as possible.",
      steps: [
        {
          label: "01",
          title: "Define the needs",
          body: "What does a motorcycle rider require with utmost priority while touring? His route. And that's exactly what the system shows.",
        },
        {
          label: "02",
          title: "Input devices",
          body: "Manually entering individual letters while going 100kmph down the highway, while trying to avoid a truck drifting from its lane and a herd of cattle, is quite a situation to be in. I used pre-defined categories to counter the problem and the keyboard only as backup.",
        },
        {
          label: "03",
          title: "Really simplistic UI",
          body: "I tried to keep the interface as simple as possible. It was interesting to use a monochromatic theme with different levels of brightness, textures, and shapes.",
        },
        {
          label: "04",
          title: "The Electroluminescent part",
          body: "The EL display has a neat aesthetic that is both clearly visible in broad daylight, but not 'a sun in your eyes' during the night. The amber glow gives it a very eerie, nostalgic vibe, which is what sells these days.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotVINT,
        alt: "HMI view",
        caption: "Minimal input, Maximum output",
      },
      {
        src: caseRenderVINT,
        alt: "HMI view",
        caption: "Paired with analogue dials",
      },
    ],
    result: {
      body: "Overall, I think screen technology from the years gone by can prove useful under the ideal usecase. There are situations where modern OLEDs work brilliantly, but for the certain few that remain, I'm in favour.",
      metrics: [
        { value: "0.5s", label: "Average lookdown time" },
        { value: "15%", label: "Better visibility" },
        { value: "AAA", label: "Contrast standard" },
      ],
    },
    conclusion: [
      "In the end, while modern OLEDs may win on technical metrics, they often lose entirely on character. This project proved that for machines built on pure passion and nostalgia, the digital interface must reflect that exact same philosophy.",
      "Oh and, the motorcycle that inspired this design is actually mentioned in my About page. It's the Vintana Voyager! :)"
    ],
  },
  {
    slug: "hmi-project-3",
    title: "Widescreen EV Cluster",
    tagline: "The correct way to do three screens.",
    year: "2025",
    role: "HMI Concept Design",
    timeline: "5 weeks",
    stack: ["Figma", "Protopie"],
    hero: {
      src: caseHeroWIDE, 
      alt: "It's either this or analogue dials.",
    },
    introduction: [
      "Electric vehicles have completely altered the layout of modern car interiors, often resulting in wide, expansive dashboards. Taking advantage of this, I explored what a 50:9 pillar-to-pillar display would look like if the user had total control over it.",
      "The goal was to create a modular system where drivers could drag and drop widgets to build a layout that exactly matches their daily routine, while integrating critical safety features like digital mirrors."
    ],
    problem: {
      statement:
        "Widescreen displays often present a rigid layout that wastes valuable screen real estate on features the driver might not even use.",
      points: [
        "Inflexible widget placements limit driver preference.",
        "Blind spot monitors are often positioned unnaturally on standard center screens.",
        "Crucial driving data gets lost in a sea of unnecessary infotainment features."
      ],
    },
    designStudy: {
      intro:
        "I wanted to approach the widescreen not as a single UI, but as a blank canvas divided into three primary zones: Left, Main, and Right. The side zones serve a dual purpose as digital wing mirrors and blind-spot monitors, while the main zone is highly configurable.",
      steps: [
        {
          label: "01",
          title: "The Main Zone",
          body: "The central driving display holds the speedometer and crucial range data. Beside it, modular widgets (like media or detailed navigation) can be swiped in or out based on the driver's immediate needs.",
        },
        {
          label: "02",
          title: "Integrated Camera Feeds",
          body: "Replacing traditional mirrors with cameras reduces drag. I used the extreme left and right edges of the 50:9 screen to stream these feeds, placing them exactly where a driver naturally looks to check their mirrors.",
        },
        {
          label: "03",
          title: "Active Blind-Spot Monitoring",
          body: "When the system detects a vehicle in the blind spot, the respective side zone immediately transitions from a camera feed into a stark, high-contrast red warning triangle against a dark gradient, grabbing peripheral attention instantly.",
        },
        {
          label: "04",
          title: "Minimalist Aesthetic",
          body: "To prevent the massive screen from glowing like a billboard at night, the interface leans heavily on true blacks and subtle green/red accents, ensuring it is visually quiet but highly legible.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotWIDE,
        alt: "HMI view of widescreen",
        caption: "the separation",
        loop: false,
      },
      {
        src: caseRenderWIDE,
        alt: "HMI view of widgets",
        caption: "credits to @ruiguoruiguo for the interior",
      },
    ],
    result: {
      body: "By treating the widescreen as a customizable utility belt rather than an oversized iPad, the driving experience becomes much more tailored and far less overwhelming.",
      metrics: [
        { value: "50:9", label: "Aspect Ratio" },
        { value: "100%", label: "Modular Main Zone" },
        { value: "<0.2s", label: "Blind-spot alert reaction" },
      ],
    },
    conclusion: [
      "This project proved that ultra-wide screens don't have to be distracting. If designed with modularity and peripheral vision in mind, they can be an incredible asset to driver safety and comfort.",
    ],
  },
  {
    slug: "hmi-project-4",
    title: "E-ink Navigation System",
    tagline: "Because an OLED screen in a classic car interior is a crime.",
    year: "2024",
    role: "HMI Concept Design",
    timeline: "2 weeks",
    stack: ["Figma", "Illustrator"],
    hero: {
      src: caseHeroEINK, 
      alt: "E-ink Navigation interface screenshot",
    },
    introduction: [
      "There is a growing trend of restomodding classic cars, or building modern cars with extremely minimal, retro-inspired interiors. Slapping a glowing OLED display into these cabins ruins the aesthetic instantly.",
      "I designed this e-ink navigation panel as a solution. It provides all the necessary routing capabilities while blending seamlessly into a tactile, analogue environment."
    ],
    problem: {
      statement:
        "Modern navigation interfaces are too bright, too colorful, and too complex for minimalist or retro vehicle interiors.",
      points: [
        "OLED screens break the immersion of an analogue cabin.",
        "High refresh rates and animations are unnecessary for simple A-to-B routing.",
        "Touchscreens lack the tactile satisfaction that classic car enthusiasts crave.",
      ],
    },
    designStudy: {
      intro:
        "The design language relies entirely on typography, crisp vector lines, and a warm, paper-like background. E-ink technology means the display only draws power when refreshing, and it looks like printed ink under direct sunlight.",
      steps: [
        {
          label: "01",
          title: "Home & Routing",
          body: "The home screen is incredibly bare—just a map and a 'Where to?' prompt. The navigation view strips away buildings and 3D terrain, leaving only the essential path forward.",
        },
        {
          label: "02",
          title: "Favourites",
          body: "To minimise typing on an e-ink display (which would be painstakingly slow), the UI relies heavily on pre-saved locations like Home, Work, Farm, and Fuel.",
        },
        {
          label: "03",
          title: "Settings",
          body: "The settings menu uses traditional toggle logic. Options like Map Orientation, Voice Alerts, and Display Refresh rate are laid out like a printed manual.",
        },
        {
          label: "04",
          title: "Typography",
          body: "A combination of elegant serif headers and highly legible sans-serif data points ensures the interface feels timeless, bridging the gap between an old map and a modern GPS.",
        },
      ],
    },
    screenshots: [
      {
        src: caseShotEINK,
        alt: "E-ink map view",
        caption: "Clear, distinct routing lines on a paper-like texture.",
      },
      {
        src: caseRenderEINK,
        alt: "E-ink settings view",
        caption: "credits to @geraudgordias for the interior.",
      },
    ],
    result: {
      body: "The result is a digital navigation system that feels delightfully analogue. It doesn't scream for your attention; it just quietly tells you where to go.",
      metrics: [
        { value: "0", label: "Animations" },
        { value: "1Hz", label: "Optimal Refresh Rate" },
        { value: "Infinite", label: "Daylight Visibility" },
      ],
    },
    conclusion: [
      "Sometimes, pushing technology forward means taking a step back. E-ink is vastly underutilized in the automotive space, and I believe it holds the key to preserving the soul of classic interiors while providing modern amenities.",
    ],
  }
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
