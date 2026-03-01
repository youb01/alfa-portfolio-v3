export type SkillCategory = "design" | "development" | "soft";

export interface Skill {
  id: string;
  number: string;
  category: SkillCategory;
  title: string;
  description: string;
  tags: string[];
  colorIndex: number;
}

export const skillsData: Skill[] = [
  // ── Design ───────────────────────────────────────────────────────────────
  {
    id: "skill-01",
    number: "01",
    category: "design",
    title: "UI/UX Design",
    description:
      "Crafting intuitive user experiences through research, wireframing, prototyping, and visual design that puts people first.",
    tags: ["Figma", "Adobe XD", "Notion", "Maze"],
    colorIndex: 0,
  },
  {
    id: "skill-02",
    number: "02",
    category: "design",
    title: "Interaction Design",
    description:
      "Creating micro-interactions and motion design that make digital products feel alive, responsive, and genuinely delightful.",
    tags: ["Framer", "Figma", "Principle"],
    colorIndex: 1,
  },
  {
    id: "skill-03",
    number: "03",
    category: "design",
    title: "UX Research",
    description:
      "User interviews, usability testing, and data-driven insights that inform every design decision with real evidence.",
    tags: ["Maze", "Hotjar", "Notion", "ChatGPT"],
    colorIndex: 2,
  },

  // ── Development ──────────────────────────────────────────────────────────
  {
    id: "skill-04",
    number: "04",
    category: "development",
    title: "Frontend Development",
    description:
      "Building performant, pixel-perfect interfaces with modern frameworks and meticulous attention to every detail.",
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaFX",
      "Liquid",
    ],
    colorIndex: 3,
  },
  {
    id: "skill-05",
    number: "05",
    category: "development",
    title: "Backend Development",
    description:
      "Architecting robust, scalable server-side systems and APIs that power seamless, reliable user experiences.",
    tags: ["Node.js", "Python", "C#", ".NET", "Java", "Spring Boot"],
    colorIndex: 4,
  },
  {
    id: "skill-06",
    number: "06",
    category: "development",
    title: "Low / No Code",
    description:
      "Rapidly deploying and customizing production-ready websites using powerful no-code platforms without compromise.",
    tags: ["Webflow", "WordPress"],
    colorIndex: 5,
  },

  // ── Soft Skills ──────────────────────────────────────────────────────────
  {
    id: "skill-07",
    number: "07",
    category: "soft",
    title: "Client Communication",
    description:
      "Translating complex technical concepts into clear narratives for stakeholders — bridging design, development, and business goals.",
    tags: ["Stakeholder Mgmt", "Presentations", "Active Listening"],
    colorIndex: 0,
  },
  {
    id: "skill-08",
    number: "08",
    category: "soft",
    title: "Self-reliance",
    description:
      "Taking full ownership of projects and consistently delivering high-quality results without needing constant direction or supervision.",
    tags: ["Autonomous", "Ownership", "Initiative"],
    colorIndex: 1,
  },
  {
    id: "skill-09",
    number: "09",
    category: "soft",
    title: "Eager to Learn",
    description:
      "Constantly evolving — embracing new tools, technologies, and perspectives with genuine curiosity and an unstoppable growth mindset.",
    tags: ["Growth Mindset", "Adaptable", "Curious"],
    colorIndex: 2,
  },
  {
    id: "skill-10",
    number: "10",
    category: "soft",
    title: "Problem Solving",
    description:
      "Approaching complex challenges with structured thinking and creative solutions that consistently move projects forward efficiently.",
    tags: ["Analytical", "Creative", "Strategic"],
    colorIndex: 3,
  },
];
