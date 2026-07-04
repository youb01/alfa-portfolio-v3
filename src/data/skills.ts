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
    tagline: "UI, interaction & visual research",
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
    tagline: "APIs, databases & server-side logic",
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
    category: "Architecture",
    tagline: "Event-driven systems & distributed design patterns",
    tools: ["Event Modelling", "Event Sourcing", "CQRS", "Axon Server", "Kafka"],
  },
  {
    id: "row-05",
    number: "05",
    category: "No Code",
    tagline: "Production sites, fast",
    tools: ["Webflow", "WordPress", "Shopify"],
  },
  {
    id: "row-06",
    number: "06",
    category: "Tools & DevOps",
    tagline: "Version control, CI/CD & infrastructure",
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Azure DevOps",
      "Ubuntu",
      "CI/CD pipelines",
      "Agile methodologies",
    ],
  },
];
