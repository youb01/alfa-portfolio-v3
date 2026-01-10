export interface SkillTag {
  name: string;
  color?: string; // Optional custom color
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: SkillTag[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    description: "Crafting responsive and interactive user interfaces with modern frameworks and tools.",
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
    description: "Building scalable server-side applications with robust APIs and database management.",
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
    description: "Designing intuitive user experiences with attention to aesthetics and usability.",
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
    description: "Rapid prototyping and development using modern no-code and low-code platforms.",
    tags: [
      { name: "Webflow" },
      { name: "Notion" },
      { name: "Airtable" },
      { name: "Zapier" },
      { name: "Make" },
    ],
  },
];
