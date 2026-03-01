import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { projectsData, type ProjectCategory } from "../data/ProjectsData";
import { FeaturedProjectCard } from "../../ui/projects/FeaturedProjectCard";
import { ProjectCard } from "../../ui/projects/ProjectCard";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

type FilterOption = "All" | ProjectCategory;

const filterOptions: FilterOption[] = [
  "All",
  "Frontend",
  "Fullstack",
  "UI/UX Design",
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterOption>("All");
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark")
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const featuredProject = projectsData.find((p) => p.featured);
  const regularProjects = projectsData.filter((p) => !p.featured);

  const visibleRegular =
    activeFilter === "All"
      ? regularProjects
      : regularProjects.filter((p) => p.category === activeFilter);

  const showFeatured =
    activeFilter === "All" ||
    (featuredProject && featuredProject.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative bg-[rgb(var(--bg-primary))]"
    >
      <BackgroundLines />

      {/* ── Section Header ── */}
      <div className="relative z-10 pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[rgb(var(--border-hover))] origin-right"
              />
              <span className="text-xs md:text-sm font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.3em]">
                05
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[rgb(var(--border-hover))] origin-left"
              />
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-[rgb(var(--text-primary))]">Projects </span>
              <span className="text-[rgb(var(--text-tertiary))]">and Work</span>
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-border-primary via-border-hover to-transparent origin-left max-w-3xl mb-10"
          />

          {/* ── Filter Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex items-center gap-1 flex-wrap"
          >
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="relative px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] rounded-full transition-colors duration-200 cursor-pointer"
                  style={{
                    color: isActive
                      ? isDark
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(0,0,0,0.85)"
                      : isDark
                        ? "rgba(255,255,255,0.35)"
                        : "rgba(0,0,0,0.35)",
                    background: isActive
                      ? isDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.06)"
                      : "transparent",
                    border: `1px solid ${
                      isActive
                        ? isDark
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(0,0,0,0.1)"
                        : "transparent"
                    }`,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: isDark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.05)",
                      }}
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <div className="relative z-10 pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Featured card — full width */}
              {showFeatured && featuredProject && (
                <div className="mb-8">
                  <FeaturedProjectCard project={featuredProject} />
                </div>
              )}

              {/* Regular cards grid */}
              {visibleRegular.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {visibleRegular.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              )}

              {/* Empty state */}
              {!showFeatured && visibleRegular.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <p
                    className="text-sm font-medium uppercase tracking-[0.2em]"
                    style={{
                      color: isDark
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0.2)",
                    }}
                  >
                    No projects in this category yet
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
