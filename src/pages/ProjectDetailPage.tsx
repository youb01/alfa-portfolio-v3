import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";
import { projectsData } from "../data/projects";
import { Footer } from "../components/layout/Footer";
import { OtherProjects } from "../components/ui/projects/OtherProjects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { ProjectHero } from "../components/ui/projectDetail/ProjectHero";
import { ProjectIntro } from "../components/ui/projectDetail/ProjectIntro";
import { CaseStudy } from "../components/ui/projectDetail/CaseStudy";
import { OutcomesSection } from "../components/ui/projectDetail/OutcomesSection";
import { StatsGrid } from "../components/ui/projectDetail/StatsGrid";
import { TechStackSection } from "../components/ui/projectDetail/TechStackSection";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);
  const detail  = project ? projectDetails[project.id] : null;

  if (!project || !detail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg-primary))]">
        <div className="text-center">
          <p className="text-[rgb(var(--text-secondary))] mb-6">
            Project not found.
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-sm font-semibold text-[rgb(var(--text-primary))] underline underline-offset-4"
          >
            Go home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))]">
      <ScrollProgressBar />

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(var(--bg-primary), 0.85)",
          borderBottom: "1px solid rgb(var(--border-primary))",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between gap-4">
          <motion.button
            onClick={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate("/");
            }}
            className="flex items-center gap-1.5 text-sm font-semibold text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors shrink-0"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.15 }}
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
            Back
          </motion.button>

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] truncate hidden sm:block">
            {project.number} — {project.title}
          </span>

          <ThemeToggle />
        </div>
      </nav>

      <ProjectHero project={project} detail={detail} />

      <ProjectIntro introduction={detail.introduction} />

      {/* Wide image */}
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <img
          src={detail.wideImage}
          alt="Project overview"
          className="w-full object-cover"
          style={{ aspectRatio: "21/9" }}
        />
      </motion.div>

      <CaseStudy project={project} detail={detail} />

      {detail.outcomes && (
        <OutcomesSection outcomes={detail.outcomes} />
      )}

      {detail.stats && (
        <StatsGrid stats={detail.stats} />
      )}

      <TechStackSection techStack={project.techStack} />

      <OtherProjects currentSlug={slug!} />

      <Footer />
    </div>
  );
};
