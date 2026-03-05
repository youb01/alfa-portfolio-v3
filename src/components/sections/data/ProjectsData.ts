/**
 * Non-translatable project metadata.
 * User-visible strings (title, subtitle, description) live in
 * src/i18n/locales/{lang}/translation.json under projects.items.{id}.
 */

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "UI/UX Design";

export interface Project {
  id: string;
  slug: string;
  number: string;
  techStack: string[];
  category: ProjectCategory;
  year: string;
  featured: boolean;
  thumbnailVariant: number;
}

export const projectsData: Project[] = [
  {
    id: "project-01",
    slug: "portfolio-evolution",
    number: "01",
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
    slug: "getmore-systems",
    number: "02",
    techStack: [
      "Angular",
      ".NET",
      "ASP.NET Core",
      "C#",
      "Azure",
      "TypeScript",
      "REST API",
      "Azure DevOps",
      "Azure SQL Database",
    ],
    category: "Fullstack",
    year: "2024",
    featured: false,
    thumbnailVariant: 1,
  },
  {
    id: "project-03",
    slug: "stichting-accessibility",
    number: "03",
    techStack: [
      "React",
      "Javascript",
      ".NET",
      "SignalR",
      "WCAG 2.1",
      "Azure",
      "SQL Server",
    ],
    category: "Fullstack",
    year: "2024",
    featured: false,
    thumbnailVariant: 2,
  },
  {
    id: "project-04",
    slug: "minecraft-portfolio",
    number: "05",
    techStack: [
      "React Three Fiber",
      "Three.js",
      "Blender",
      "Framer Motion",
      "Vite",
    ],
    category: "Frontend",
    year: "2025",
    featured: false,
    thumbnailVariant: 4,
  },
];
