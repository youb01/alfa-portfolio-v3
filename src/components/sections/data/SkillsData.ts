export interface SkillRow {
  id: string;
  number: string;
  category: string;
  tagline: string;
  tools: string[];
}

export const skillRows: SkillRow[] = [
  {
    id: "row-01",
    number: "01",
    category: "Design",
    tagline: "UI, interaction & research",
    tools: ["Figma", "Framer", "Miro"],
  },
  {
    id: "row-02",
    number: "02",
    category: "Frontend",
    tagline: "Modern web interfaces & animations",
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Angular",
      "Framer Motion",
      "Three.js",
      "HTML",
      "CSS",
      "Liquid",
    ],
  },
  {
    id: "row-03",
    number: "03",
    category: "Backend",
    tagline: "APIs, databases & server-side",
    tools: [
      "Node.js",
      "Python",
      "C#",
      ".NET",
      "Java",
      "SQL",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    id: "row-04",
    number: "04",
    category: "No Code",
    tagline: "Production sites, fast",
    tools: ["Webflow", "WordPress", "Shopify"],
  },
  {
    id: "row-05",
    number: "05",
    category: "Other",
    tagline: "Version control, collaboration & deployment",
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Agile methodologies",
      "CI/CD pipelines",
      "Docker",
      "Azure DevOps",
      "SquareSpace",
    ],
  },
];
