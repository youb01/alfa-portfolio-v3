import { Navbar } from "./components/layout/Navbar";
import { Preloader } from "./components/ui/preLoader/PreLoader";
import { Hero } from "./components/sections/hero/HeroSection";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "./hooks/usePreLoader";
import type { NavItem, SocialLink } from "./types";
import { AboutSection } from "./components/sections/about/AboutSection";
import { SkillsSection } from "./components/sections/skills/SkillsSection";
import { CustomCursor } from "./components/ui/cursor/CustomCursor";
import { BackgroundLines } from "./components/ui/backgrounds/BackgroundLines";

const navItems: NavItem[] = [
  { label: "Home", href: "#home", number: "01" },
  { label: "Skills", href: "#skills", number: "02" },
  { label: "Qualifications", href: "#qualifications", number: "03" },
  { label: "Services", href: "#services", number: "04" },
  { label: "Projects", href: "#projects", number: "05" },
  { label: "Contact Me", href: "#contact", number: "06" },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={20} />,
  },
  { label: "GitHub", href: "https://github.com", icon: <Github size={20} /> },
  { label: "Email", href: "mailto:alfa@gmail.com", icon: <Mail size={20} /> },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter size={20} />,
  },
];

function App() {
  const { isLoading, isComplete, handleComplete } = usePreloader();

  return (
    <>
      <Preloader isLoading={isLoading} onComplete={handleComplete} />
      <CustomCursor />

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="min-h-screen bg-[rgb(var(--bg-primary))]"
          >
            <Navbar navItems={navItems} socialLinks={socialLinks} />

            {/* Hero Section */}
            <Hero socialLinks={socialLinks} />

            <AboutSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Other sections */}

            <section
              id="qualifications"
              className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
            >
              {/* Background lines for depth */}
              <BackgroundLines />

              <div className="relative z-10 text-center px-4">
                <h2 className="text-5xl font-extrabold text-[rgb(var(--text-primary))] mb-4">
                  Qualifications
                </h2>
                <p className="text-[rgb(var(--text-secondary))] text-lg">
                  Professional certifications and education
                </p>
              </div>
            </section>

            <section
              id="services"
              className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
            >
              {/* Background lines for depth */}
              <BackgroundLines />

              <div className="relative z-10 text-center px-4">
                <h2 className="text-5xl font-extrabold text-[rgb(var(--text-primary))] mb-4">
                  Services
                </h2>
                <p className="text-[rgb(var(--text-secondary))] text-lg">
                  Solutions tailored to your needs
                </p>
              </div>
            </section>

            <section
              id="projects"
              className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
            >
              {/* Background lines for depth */}
              <BackgroundLines />

              <div className="relative z-10 text-center px-4">
                <h2 className="text-5xl font-extrabold text-[rgb(var(--text-primary))] mb-4">
                  Projects
                </h2>
                <p className="text-[rgb(var(--text-secondary))] text-lg">
                  Featured work and case studies
                </p>
              </div>
            </section>

            <section
              id="contact"
              className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
            >
              {/* Background lines for depth */}
              <BackgroundLines />

              <div className="relative z-10 text-center px-4">
                <h2 className="text-5xl font-extrabold text-[rgb(var(--text-primary))] mb-4">
                  Contact Me
                </h2>
                <p className="text-[rgb(var(--text-secondary))] text-lg">
                  Let's work together on your next project
                </p>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
