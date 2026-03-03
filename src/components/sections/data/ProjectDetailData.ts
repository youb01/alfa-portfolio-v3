/**
 * Rich per-project data for the detail page.
 * Keyed by the same `id` used in ProjectsData.ts.
 *
 * How to add a new project:
 *   1. Add the base card data to ProjectsData.ts (with a slug).
 *   2. Add a matching entry here, using the same `id` as key.
 *   3. Swap placeholder image URLs for real screenshots when ready.
 */

import project02Hero from "../../../assets/project-media/project-02/project-02-hero.png";

export interface ProjectDetail {
  /** Links to Project.id in ProjectsData */
  projectId: string;
  client: string;
  service: string;
  /** Large hero image — ideally 16:9, min 1600 px wide */
  heroImage: string;
  /** Two–three sentence pull-quote shown in the intro block */
  introduction: string;
  /** Full-bleed wide image between intro and case-study */
  wideImage: string;
  caseStudy: {
    title: string;
    /** Each string is one paragraph */
    body: string[];
    /** 3–4 vertical gallery images — ideally 4:3 or portrait */
    images: string[];
  };
  /** Key metrics / outcomes displayed in the stats strip */
  outcomes?: {
    value: string;
    label: string;
    description?: string;
  }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "project-01": {
    projectId: "project-01",
    client: "Personal",
    service: "Design & Frontend Engineering",
    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "Three iterations of the same idea — each built as my understanding of design and engineering deepened. The portfolio became a living document of growth: from static HTML to a fully animated, TypeScript-first system with a custom design language.",
    wideImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Designing in public, building in real time",
      body: [
        "Version one was a lesson in restraint. Built with plain HTML and CSS, it forced me to understand the fundamentals before reaching for a framework. Every layout decision was deliberate — there were no shortcuts.",
        "Version two introduced React and a design system I built from scratch. I spent weeks on type scales, spacing rhythms, and interaction patterns before writing a single component. The result felt more intentional, but the codebase was brittle.",
        "Version three — this one — is the synthesis. TypeScript throughout, Framer Motion for orchestrated animation, and a component architecture that scales. Every section was designed to feel editorial: generous whitespace, typographic hierarchy, and motion that adds meaning rather than noise.",
      ],
      images: [
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      { value: "3", label: "Versions Built", description: "Each a complete rebuild" },
      { value: "3 yrs", label: "In Development", description: "2022 – 2025" },
      { value: "8+", label: "Technologies", description: "Across all versions" },
      { value: "100", label: "Lighthouse Score", description: "Performance & accessibility" },
    ],
  },

  "project-02": {
    projectId: "project-02",
    client: "GetMore Systems",
    service: "Frontend Engineering",
    heroImage: project02Hero,
    introduction:
      "An internship that felt like a masterclass in production software. I joined a small engineering team building internal tooling for a growing operations business and shipped real features from week one — in a live TypeScript and React codebase.",
    wideImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Enterprise tooling for a growing operations team",
      body: [
        "The core challenge was scale. The existing dashboards worked for a small team but weren't holding up as the company grew. My first task was auditing the frontend for bottlenecks — we found unnecessary re-renders, missing memoisation, and a data-fetching layer that hammered the API on every interaction.",
        "I rebuilt the data layer around a shared cache, added optimistic UI for the most-used interactions, and introduced a component library that the rest of the team could extend. Response times dropped measurably and the team started shipping faster because the building blocks were consistent.",
        "The internship also gave me a first-hand view of how good teams work: daily standups, code reviews, sprint retrospectives. Learning to write code that someone else can understand and build on was the most valuable thing I took away.",
      ],
      images: [
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      { value: "~40%", label: "Faster Response", description: "After data-layer rebuild" },
      { value: "4", label: "Team Members", description: "Including intern" },
      { value: "6 mo.", label: "Internship", description: "Full-time engagement" },
      { value: "9", label: "Technologies", description: "Production stack" },
    ],
  },

  "project-03": {
    projectId: "project-03",
    client: "Stichting Accessibility NL",
    service: "Web Design & Frontend Development",
    heroImage:
      "https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "Accessibility is not a feature — it is a baseline. This project was an opportunity to build something that genuinely works for everyone, applying WCAG 2.1 AA standards from the first wireframe rather than retrofitting them at the end.",
    wideImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Inclusive by design — not as an afterthought",
      body: [
        "The brief was straightforward: a public-facing web platform for a nonprofit focused on digital inclusion. The catch was that the primary users included people with visual impairments, motor difficulties, and cognitive differences. Every component had to be audited against real-world assistive technology.",
        "I built the platform on Next.js with a semantic HTML-first approach. Colour contrast ratios were validated against WCAG AA (and AA+ where possible). All interactive elements are keyboard-navigable, focus states are visible and styled consistently, and every image has meaningful alt text. The site was tested with NVDA and VoiceOver across multiple browsers.",
        "The design system was also built to be maintainable by a non-technical team. Content editable via a headless CMS, clear documentation, and a component library that enforces accessible patterns by default — not by accident.",
      ],
      images: [
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      { value: "AA", label: "WCAG Standard", description: "Full compliance achieved" },
      { value: "3", label: "Assistive Tech", description: "NVDA, VoiceOver, JAWS" },
      { value: "7", label: "Technologies", description: "Full-stack implementation" },
      { value: "4", label: "Team Members", description: "Cross-functional" },
    ],
  },

"project-04": {
    projectId: "project-04",
    client: "Minor Visual Design",
    service: "Creative Coding & 3D Web Development",
    heroImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "A portfolio where browsing becomes gameplay. Built for the HvA Minor in Visual Design and Web Development, this Minecraft-themed site places each project inside a hand-crafted 3D world — navigate the blocks, discover the work.",
    wideImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Turning a portfolio into an experience",
      body: [
        "The brief asked for a portfolio — we turned it into a game. The concept was simple: what if every project lived inside a Minecraft world you could actually explore? The technical challenge was building a 3D environment that ran smoothly in the browser without a game engine.",
        "React Three Fiber gave us a declarative way to write Three.js inside React. Every building, path, and sign was modelled in Blender and exported as GLTF, then loaded and animated at runtime. Optimising draw calls and asset sizes was critical — we needed the world to load fast on a standard laptop.",
        "The interaction design was the hardest part. First-person controls feel natural in a game engine but need careful calibration in a browser. We tuned movement speed, added pointer-lock controls, and built a minimal HUD to guide users — all without making it feel like a tutorial.",
      ],
      images: [
        "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535223289429-462dc99e1e7a?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      { value: "60", label: "FPS", description: "Interactive 3D portfolio running stably in Chrome and Firefox" },
      { value: "<4 MB", label: "Total Assets", description: "All 3D assets optimised for fast initial load" },
      { value: "Yes", label: "Full Navigation", description: "Mouse-driven navigation with pointer-lock controls" },
      { value: "8.5", label: "Grade", description: "Both students and instructors where very impressed with the final result" },
    ],
  },
};
