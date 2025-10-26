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
