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
    slug: "minecraft-portfolio",
    number: "04",
    title: "Minecraft Portfolio Website",
    subtitle: "Creative Coding & 3D Design",
    description:
      "A unique Minecraft-themed portfolio website built using React Three Fiber, Three.js and Blender. Showcasing our projects, for the Minor Visual Design and Web Development, in an interactive 3D environment inspired by the iconic blocky world of Minecraft.",
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
  {
    id: "project-05",
    slug: "social-supermarket",
    number: "05",
    title: "Social Supermarket",
    subtitle: "Event-Driven Marketplace",
    description:
      "A full-stack social marketplace platform built on an event-driven architecture using CQRS and Event Sourcing. The platform connects buyers and sellers in a community-focused marketplace, backed by Spring Boot, Axon Server, and Kafka for reliable, scalable event processing.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Java",
      "Spring Boot",
      "Axon Server",
      "Kafka",
      "PostgreSQL",
      "CQRS",
      "Event Sourcing",
      "Docker",
    ],
    category: "Fullstack",
    year: "2025",
    featured: false,
    thumbnailVariant: 1,
  },
  {
    id: "project-06",
    slug: "gatekeeper",
    number: "06",
    title: "Gatekeeper",
    subtitle: "Centralized Auth & Authorization",
    description:
      "A centralized authentication and authorization system built on CQRS and Event Sourcing via the Axon Framework. Gatekeeper manages identity verification, role assignment, application registration, and API key lifecycle management — serving as the security gateway for a distributed system.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "Axon Framework",
      "CQRS",
      "Event Sourcing",
      "PostgreSQL",
      "Flyway",
      "JWT",
      "Spring Security",
      "Docker",
      "JUnit 5",
      "Testcontainers",
    ],
    category: "Backend",
    year: "2025",
    featured: false,
    thumbnailVariant: 2,
  },
  {
    id: "project-07",
    slug: "ankerdcon",
    number: "07",
    title: "Ankerd Con",
    subtitle: "Private Event PWA",
    description:
      "A full-stack Progressive Web App for organizing private group convention meetups. Covers the full logistics of a group trip — rides, meals, shared finances, hotel rooms, and event calendars — all in one invite-only platform with Discord OAuth and a Python FastAPI backend.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Python",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Discord OAuth",
      "TanStack Query",
      "Zustand",
      "PWA",
    ],
    category: "Fullstack",
    year: "2025",
    featured: false,
    thumbnailVariant: 3,
  },
];
