export interface Skill {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  colorIndex: number; // For progressive color scheme
}

export const skillsData: Skill[] = [
  {
    id: "skill-01",
    number: "01",
    title: "UI/UX Design",
    description:
      "Crafting intuitive user experiences through research, wireframing, prototyping, and visual design that delights users.",
    tags: ["Figma", "Notion"],
    colorIndex: 0,
  },
  {
    id: "skill-02",
    number: "02",
    title: "UX Research & Strategy",
    description:
      "User interviews, research, and journey mapping to guide every design decision.",
    tags: ["ChatGPT", "Notion"],
    colorIndex: 1,
  },
  {
    id: "skill-03",
    number: "03",
    title: "Interaction Design",
    description:
      "Micro-interactions, motion, and prototypes that make products feel alive.",
    tags: ["Framer", "Figma", "Midjourney"],
    colorIndex: 2,
  },
  {
    id: "skill-04",
    number: "04",
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with modern frameworks and cutting-edge technologies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    colorIndex: 3,
  },
  {
    id: "skill-05",
    number: "05",
    title: "Backend Development",
    description:
      "Architecting scalable server-side solutions, APIs, and databases that power robust applications.",
    tags: ["Node.js", "Python", "C#", ". NET", "PostgreSQL", "MongoDB"],
    colorIndex: 4,
  },
  {
    id: "skill-06",
    number: "06",
    title: "Low/No Code",
    description:
      "Rapid prototyping and deployment using modern no-code platforms for efficient solution delivery.",
    tags: ["Webflow", "Framer", "Bubble", "Airtable", "Zapier"],
    colorIndex: 5,
  },
];
