export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "UI/UX Design";

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  year: string;
  featured: boolean;
  thumbnailVariant: number;
}

export const projectsData: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Portfolio — Evolution",
    subtitle: "v1 · v2 · v3",
    description:
      "Three generations of personal portfolio, each built as I deepened my expertise in design and frontend engineering. From plain HTML/CSS to React and finally a fully animated TypeScript system — a live document of continuous growth.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "Frontend",
    year: "2022 — 2025",
    featured: true,
    thumbnailVariant: 0,
  },
  {
    id: "project-02",
    number: "02",
    title: "GetMore Systems",
    subtitle: "Internship Project",
    description:
      "Built internal tooling and responsive dashboards during a professional internship. Developed scalable APIs and interfaces that streamlined company workflows.",
    techStack: ["React", "Node.js", "PostgreSQL", "TypeScript", "REST API"],
    category: "Fullstack",
    year: "2024",
    featured: false,
    thumbnailVariant: 1,
  },
  {
    id: "project-03",
    number: "03",
    title: "Stichting Accessibility",
    subtitle: "Nonprofit Web Platform",
    description:
      "Designed and built an inclusive web platform for a nonprofit, ensuring WCAG compliance and a seamless experience for users of all abilities.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WCAG 2.1",
    ],
    category: "Frontend",
    year: "2024",
    featured: false,
    thumbnailVariant: 2,
  },
  {
    id: "project-04",
    number: "04",
    title: "Oak",
    subtitle: "Brand & UX Design",
    description:
      "Designed the complete visual identity and user experience for Oak — from brand strategy to high-fidelity prototypes, crafting a cohesive and elegant product ecosystem.",
    techStack: ["Figma", "Framer", "Notion", "Midjourney"],
    category: "UI/UX Design",
    year: "2022",
    featured: false,
    thumbnailVariant: 3,
  },
];
