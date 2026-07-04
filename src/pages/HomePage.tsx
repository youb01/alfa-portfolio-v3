import { Navbar } from "../components/layout/Navbar";
import { Preloader } from "../components/ui/preLoader/PreLoader";
import { Hero } from "../components/sections/hero/HeroSection";
import { usePreloader } from "../hooks/usePreLoader";
import { AboutSection } from "../components/sections/about/AboutSection";
import { SkillsSection } from "../components/sections/skills/SkillsSection";
import { ProjectsSection } from "../components/sections/projects/ProjectsSection";
import { QualificationsSection } from "../components/sections/qualifications/QualificationsSection";
import { ContactSection } from "../components/sections/contact/ContactSection";
import { Footer } from "../components/layout/Footer";
import { navItems, socialLinks } from "../data/navigation";

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
