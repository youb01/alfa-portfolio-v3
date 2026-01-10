export const skillsData = {
  meta: {
    id: "skills",
    label: "My Skills",
  },

  heading: {
    title: "Technical Expertise",
    subtitle: "Technologies and tools I work with",
  },

  skills: [
    {
      id: "frontend",
      category: "Frontend Development",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "backend",
      category: "Backend Development",
      technologies: [
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "Database Design",
      ],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "tools",
      category: "Development Tools",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "npm",
        "Vite",
        "ESLint",
        "Prettier",
      ],
      icon: "🛠️",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "other",
      category: "Other Skills",
      technologies: [
        "Responsive Design",
        "Web Accessibility",
        "UI/UX Design",
        "Agile",
        "Problem Solving",
      ],
      icon: "💡",
      color: "from-orange-500 to-red-500",
    },
  ],
} as const;

export type Skill = (typeof skillsData.skills)[number];
