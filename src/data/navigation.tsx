import { Github, Linkedin, Mail } from "lucide-react";
import type { NavItem, SocialLink } from "../types";

export const navItems: NavItem[] = [
  { label: "Home",           href: "#home",           number: "01" },
  { label: "Skills",         href: "#skills",         number: "02" },
  { label: "Qualifications", href: "#qualifications", number: "03" },
  { label: "Projects",       href: "#projects",       number: "04" },
  { label: "Contact Me",     href: "#contact",        number: "05" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayoub-l-b93bb8255/",
    icon: <Linkedin size={20} strokeWidth={1.5} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/youb01",
    icon: <Github size={20} strokeWidth={1.5} />,
  },
  {
    label: "Email",
    href: "mailto:lfatmi.ayoub@gmail.com",
    icon: <Mail size={20} strokeWidth={1.5} />,
  },
];
