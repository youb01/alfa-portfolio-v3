import type { SkillCategory } from "../types";

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, interactive user interfaces with modern frameworks and best practices for exceptional user experiences.",
    tags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Vue.js" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Development",
    description:
      "Creating robust server-side applications, RESTful APIs, and database architectures with scalability and performance in mind.",
    tags: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "C#" },
      { name: ".NET" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "uiux",
    number: "03",
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered interfaces with attention to detail, accessibility, and aesthetic excellence.",
    tags: [
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Sketch" },
      { name: "Prototyping" },
      { name: "User Research" },
    ],
  },
  {
    id: "lowcode",
    number: "04",
    title: "Low/No Code",
    description:
      "Leveraging modern no-code tools to rapidly prototype, automate workflows, and deliver solutions efficiently.",
    tags: [
      { name: "Webflow" },
      { name: "Notion" },
      { name: "Airtable" },
      { name: "Zapier" },
      { name: "Make" },
    ],
  },
];
