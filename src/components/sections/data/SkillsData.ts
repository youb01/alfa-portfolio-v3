export interface Skill {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  colorIndex: number; // For progressive color scheme
  image?: string; // Image URL for hover effect
  imageAlt?: string; // Alt text for accessibility
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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    imageAlt: "UI/UX Design workspace with design tools",
  },
  {
    id: "skill-02",
    number: "02",
    title: "UX Research & Strategy",
    description:
      "User interviews, research, and journey mapping to guide every design decision.",
    tags: ["ChatGPT", "Notion"],
    colorIndex: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    imageAlt: "UX Research analytics and data visualization",
  },
  {
    id: "skill-03",
    number: "03",
    title: "Interaction Design",
    description:
      "Micro-interactions, motion, and prototypes that make products feel alive.",
    tags: ["Framer", "Figma", "Midjourney"],
    colorIndex: 2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    imageAlt: "Interactive design prototypes and animations",
  },
  {
    id: "skill-04",
    number: "04",
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with modern frameworks and cutting-edge technologies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    colorIndex: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    imageAlt: "Frontend development code on screen",
  },
  {
    id: "skill-05",
    number: "05",
    title: "Backend Development",
    description:
      "Architecting scalable server-side solutions, APIs, and databases that power robust applications.",
    tags: ["Node.js", "Python", "C#", ". NET", "PostgreSQL", "MongoDB"],
    colorIndex: 4,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    imageAlt: "Backend server infrastructure",
  },
  {
    id: "skill-06",
    number: "06",
    title: "Low/No Code",
    description:
      "Rapid prototyping and deployment using modern no-code platforms for efficient solution delivery.",
    tags: ["Webflow", "Framer", "Bubble", "Airtable", "Zapier"],
    colorIndex: 5,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    imageAlt: "No-code platform interfaces",
  },
];
