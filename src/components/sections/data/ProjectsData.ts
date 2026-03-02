export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "UI/UX Design";

export interface Project {
  id: string;
  slug: string;
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
    slug: "portfolio-evolution",
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
    slug: "getmore-systems",
    number: "02",
    title: "GetMore Systems",
    subtitle: "Internship Project",
    description:
      "Worked as a software developer intern at GetMore Systems, a company specializing in software solutions for the financial industry. Contributed to the development of a client dashboard application using Angular and .NET, improving user experience and functionality. Collaborated with a team of 3 to implement new features, fix bugs, and optimize performance, gaining valuable hands-on experience in a professional software development environment.",
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
    title: "Stichting Accessibility",
    subtitle: "Nonprofit Web Platform",
    description:
      "Designed and built an inclusive web platform for a nonprofit, ensuring WCAG compliance and a seamless experience for users of all abilities. We implemented features within the web platform to provide a way for users to get in contact with companies that are searching for accessibility consultants. The project involved setting up a .NET backend with ASP.NET Core, creating a responsive frontend with React and TypeScript, and deploying the application on Azure.",
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
    slug: "oak",
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
  {
    id: "project-05",
    slug: "minecraft-portfolio",
    number: "05",
    title: "Minecraft Portfolio Website",
    subtitle: "Creative Coding & 3D Design",
    description:
      "A unique Minecraft-themed portfolio website built using React Thee Fiber, Three.js and Blender. Showcasing our projects, for the Minor Visual Design and Web Development, in an interactive 3D environment inspired by the iconic blocky world of Minecraft.",
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
