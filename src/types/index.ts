export type Theme = "light" | "dark";

export interface NavItem {
  label: string;
  href: string;
  number: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Skills Section Types
export interface SkillTag {
  name: string;
  color?: string; // Optional custom color
}

export interface SkillCategory {
  id: string;
  number: string; // "01", "02", etc.
  title: string;
  description: string;
  tags: SkillTag[];
}
