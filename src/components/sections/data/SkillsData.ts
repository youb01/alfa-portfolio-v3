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
    tools: ["Figma", "Framer", "Adobe XD", "Maze"],
  },
  {
    id: "row-02",
    number: "02",
    category: "Frontend",
    tagline: "React, TypeScript & modern web",
    tools: ["React", "TypeScript", "Tailwind CSS", "Angular", "Framer Motion", "Next.js"],
  },
  {
    id: "row-03",
    number: "03",
    category: "Backend",
    tagline: "APIs, databases & server-side",
    tools: ["Node.js", "Python", "C#", ".NET", "Java"],
  },
  {
    id: "row-04",
    number: "04",
    category: "No Code",
    tagline: "Production sites, fast",
    tools: ["Webflow", "WordPress"],
  },
];
