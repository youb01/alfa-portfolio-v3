import { Navbar } from "./components/layout/Navbar";
import { Preloader } from "./components/ui/preLoader/PreLoader";
import { Hero } from "./components/sections/hero/HeroSection";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "./hooks/usePreLoader";
import type { NavItem, SocialLink } from "./types";

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

            {/* Other sections */}
            <section
              id="skills"
              className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg-primary))]"
            >
              <div className="text-center px-4">
                <h2 className="text-5xl font-extrabold text-[rgb(var(--text-primary))] mb-4">
                  Skills
                </h2>
                <p className="text-[rgb(var(--text-secondary))] text-lg">
                  Expertise in modern web development
                </p>
              </div>
            </section>

            <section
              id="qualifications"
              className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg-secondary))]"
            >
              <div className="text-center px-4">
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
              className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg-primary))]"
            >
              <div className="text-center px-4">
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
              className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg-secondary))]"
            >
              <div className="text-center px-4">
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
              className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg-primary))]"
            >
              <div className="text-center px-4">
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
