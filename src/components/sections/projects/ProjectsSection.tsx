import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { projectsData, type ProjectCategory } from "../data/ProjectsData";
import { FeaturedProjectCard } from "../../ui/projects/FeaturedProjectCard";
import { ProjectCard } from "../../ui/projects/ProjectCard";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SectionHeader } from "../../ui/SectionHeader";

type FilterOption = "All" | ProjectCategory;

// Automatically derived from projectsData — add new projects and categories
// will appear in the filter tabs without any changes here.
const filterOptions: FilterOption[] = [
  "All",
  ...Array.from(new Set(projectsData.map((p) => p.category))),
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterOption>("All");
  const [isDark, setIsDark] = React.useState(
<<<<<<< HEAD
    document.documentElement.classList.contains("dark"),
=======
    document.documentElement.classList.contains("dark")
>>>>>>> claude/add-project-section-YzCbV
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
      className="relative overflow-hidden bg-[rgb(var(--bg-primary))]"
    >
      <BackgroundLines />

      {/* ── Section Header ── */}
      <div className="relative z-10 pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader number="05" title="Projects" titleMuted="and Work" />

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-[1px] origin-left max-w-3xl mb-10"
            style={{
              background:
                "linear-gradient(to right, rgb(var(--border-primary)), rgb(var(--border-hover)), transparent)",
            }}
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
<<<<<<< HEAD
                      transition={{
                        type: "spring",
                        duration: 0.4,
                        bounce: 0.15,
                      }}
=======
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
>>>>>>> claude/add-project-section-YzCbV
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
