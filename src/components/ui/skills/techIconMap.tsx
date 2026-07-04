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
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiAdobexd,
  SiHotjar,
  SiOpenai,
  SiGit,
  SiGithub,
  SiDocker,
  SiBootstrap,
  SiMiro,
  SiShopify,
  SiGitlab,
  SiSquarespace,
  SiApachekafka,
  SiUbuntu,
  SiThreedotjs,
  SiSharp,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { DiJava, DiSqllite, DiScrum } from "react-icons/di";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  // Design
  Figma: SiFigma,
  "Adobe XD": SiAdobexd,
  Framer: SiFramer,
  Notion: SiNotion,
  Hotjar: SiHotjar,
  ChatGPT: SiOpenai,
  Miro: SiMiro,

  // Frontend
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Framer Motion": SiFramer,
  "Three.js": SiThreedotjs,
  Vite: SiVite,
  "Next.js": SiNextdotjs,

  // Backend
  "Node.js": SiNodedotjs,
  Python: SiPython,
  ".NET": SiDotnet,
  "C#": SiSharp,
  "Spring Boot": SiSpringboot,
  Java: DiJava,
  SQL: DiSqllite,
  PostgreSQL: SiPostgresql,

  // Architecture
  Kafka: SiApachekafka,

  // No Code
  WordPress: SiWordpress,
  Webflow: SiWebflow,
  Shopify: SiShopify,
  SquareSpace: SiSquarespace,

  // Tools & DevOps
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Docker: SiDocker,
  "Azure DevOps": VscAzureDevops,
  Ubuntu: SiUbuntu,
  Bootstrap: SiBootstrap,
  "Agile methodologies": DiScrum,
};

export const getTechIcon = (
  name: string,
): React.ComponentType<{ size?: number; style?: React.CSSProperties }> | null =>
  iconMap[name] ?? null;
