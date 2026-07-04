import { Navbar } from "../components/layout/Navbar";
import { Preloader } from "../components/ui/preLoader/PreLoader";
import { Hero } from "../components/sections/hero/HeroSection";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { usePreloader } from "../hooks/usePreLoader";
import type { NavItem, SocialLink } from "../types";
import { AboutSection } from "../components/sections/about/AboutSection";
import { SkillsSection } from "../components/sections/skills/SkillsSection";
import { ProjectsSection } from "../components/sections/projects/ProjectsSection";
import { QualificationsSection } from "../components/sections/qualifications/QualificationsSection";
import { ContactSection } from "../components/sections/contact/ContactSection";
import { Footer } from "../components/layout/Footer";
const navItems: NavItem[] = [
  { label: "Home", href: "#home", number: "01" },
  { label: "Skills", href: "#skills", number: "02" },
  { label: "Qualifications", href: "#qualifications", number: "03" },
  { label: "Projects", href: "#projects", number: "05" },
  { label: "Contact Me", href: "#contact", number: "06" },
];

const socialLinks: SocialLink[] = [
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
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: <Twitter size={20} strokeWidth={1.5} />,
  },
];

export const HomePage: React.FC = () => {
  const { isLoading, isComplete, handleComplete } = usePreloader();

  return (
    <>
      <Preloader isLoading={isLoading} onComplete={handleComplete} />

      {isComplete && <Navbar navItems={navItems} socialLinks={socialLinks} />}

      {/* Always fully rendered and opaque — panels peel away to reveal it */}
      <div className="min-h-screen bg-[rgb(var(--bg-primary))]">
        <Hero socialLinks={socialLinks} />
        <AboutSection />
        <SkillsSection />
        <QualificationsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};
