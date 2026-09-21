import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { projectsData, type ProjectCategory } from "../../../data/projects";
import { ProjectCard } from "../../ui/projects/ProjectCard";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SectionHeader } from "../../ui/SectionHeader";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FilterOption = "All" | ProjectCategory;

const filterOptions: FilterOption[] = [
  "All",
  ...Array.from(new Set(projectsData.map((p) => p.category))),
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterOption>("All");

  const visible =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative overflow-hidden bg-[rgb(var(--bg-primary))]">
      <BackgroundLines />

      {/* ── Section header ── */}
      <div className="relative z-10 pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            number="04"
            title="Projects"
            titleMuted="and Work"
            subtitle="A selection of work across frontend, backend, and fullstack development."
          />

          {/* Filter chips */}
          <motion.div
            className="flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              const count = filter === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === filter).length;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2 transition-colors duration-200 cursor-pointer"
                  style={{
                    border:     "1px solid rgb(var(--border-primary))",
                    background: isActive ? "rgb(var(--text-primary))" : "transparent",
                    color:      isActive ? "rgb(var(--bg-primary))"   : "rgb(var(--text-tertiary))",
                  }}
                >
                  {filter} <span style={{ opacity: 0.6 }}>({count})</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Projects grid ── */}
      <div className="relative z-10 pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {visible.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {visible.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              ) : (
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[rgb(var(--text-tertiary))] py-20 text-center">
                  No projects in this category yet
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
