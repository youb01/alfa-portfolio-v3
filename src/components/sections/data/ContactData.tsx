/**
 * Non-translatable contact data (icons, hrefs, IDs).
 * All user-visible labels and text live in
 * src/i18n/locales/{lang}/translation.json under contact.
 */
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";

export interface ContactMethod {
  id: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  value: string;
  href: string;
  type: "email" | "phone" | "location" | "social";
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    icon: Mail,
    value: "lfatmi.ayoub@gmail.com",
    href: "mailto:lfatmi.ayoub@gmail.com",
    type: "email",
  },
  {
    id: "phone",
    icon: Phone,
    value: "+31 6 44 45 95 21",
    href: "tel:+31644459521",
    type: "phone",
  },
  {
    id: "location",
    icon: MapPin,
    value: "#location",
    href: "#",
    type: "location",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayoub-l-b93bb8255/",
    icon: <Linkedin size={20} strokeWidth={1.5} />,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/youb01",
    icon: <Github size={20} strokeWidth={1.5} />,
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/",
    icon: <Twitter size={20} strokeWidth={1.5} />,
  },
];
