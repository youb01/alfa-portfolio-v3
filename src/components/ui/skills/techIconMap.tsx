import React from "react";
import {
  SiFigma,
  SiFramer,
  SiNotion,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiSpringboot,
  SiWordpress,
  SiWebflow,
  SiJava,
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiAdobexd,
  SiHotjar,
  SiOpenai,
} from "react-icons/si";

// Maps a tech/tool name to a react-icons/si component.
// Icons are rendered with currentColor so they inherit the parent's
// monochromatic text colour — no extra filtering needed.
const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Figma: SiFigma,
  "Adobe XD": SiAdobexd,
  Framer: SiFramer,
  Notion: SiNotion,
  Hotjar: SiHotjar,
  ChatGPT: SiOpenai,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  ".NET": SiDotnet,
  "Spring Boot": SiSpringboot,
  Java: SiJava,
  WordPress: SiWordpress,
  Webflow: SiWebflow,
  Vite: SiVite,
  "Next.js": SiNextdotjs,
  "Framer Motion": SiFramer,
  PostgreSQL: SiPostgresql,
};

export const getTechIcon = (
  name: string
): React.ComponentType<{ size?: number; style?: React.CSSProperties }> | null =>
  iconMap[name] ?? null;
