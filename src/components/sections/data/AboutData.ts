import { Code, Cpu, Lightbulb, Rocket } from "lucide-react";

export const aboutData = {
  meta: {
    id: "about",
    label: "About Me",
  },

  // Main content
  content: {
    // Main heading with emphasis on key words
    heading: {
      parts: [
        { text: "I'm an ", emphasized: false },
        { text: "IT-obsessed student", emphasized: true },
        { text: " diving into ", emphasized: false },
        { text: "tech—coding", emphasized: true },
        { text: " and ", emphasized: false },
        { text: "tinkering with hardware", emphasized: true },
        { text: ".", emphasized: false },
      ],
    },

    // Subheading/tagline
    tagline: {
      parts: [
        { text: "Fueled by ", normal: true },
        { text: "curiosity", highlighted: true },
        { text: ", I'm always ready for the next ", normal: true },
        { text: "challenge", highlighted: true },
        { text: ".", normal: true },
      ],
    },
  },

  // Highlight cards
  highlights: [
    {
      id: "coding",
      icon: Code,
      iconSize: 24,
      title: "Coding",
      description: "Building elegant solutions",
    },
    {
      id: "hardware",
      icon: Cpu,
      iconSize: 24,
      title: "Hardware",
      description: "Tinkering with tech",
    },
    {
      id: "curiosity",
      icon: Lightbulb,
      iconSize: 24,
      title: "Curiosity",
      description: "Always learning",
    },
    {
      id: "innovation",
      icon: Rocket,
      iconSize: 24,
      title: "Innovation",
      description: "Ready for challenges",
    },
  ],

  // Call to action
  cta: {
    text: "Learn about me",
    href: "#contact",
    showArrow: true,
  },
} as const;

// Type exports for better TypeScript support
export type AboutHighlight = (typeof aboutData.highlights)[number];
export type AboutHeadingPart = (typeof aboutData.content.heading.parts)[number];
export type AboutTaglinePart = (typeof aboutData.content.tagline.parts)[number];
