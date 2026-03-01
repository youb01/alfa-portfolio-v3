import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import { projectsData } from "../../sections/data/ProjectsData";
import { projectDetails } from "../../sections/data/ProjectDetailData";
import { ProjectCard } from "./ProjectCard";

interface OtherProjectsProps {
  currentSlug: string;
}

/**
 * "Find another project" footer block.
 * Picks the two projects that are NOT the current one (wraps around).
 * Fully reusable — drop on any detail page.
 */
export const OtherProjects: React.FC<OtherProjectsProps> = ({
  currentSlug,
}) => {
  // Only surface projects that have a detail page
  const available = projectsData.filter(
    (p) => p.slug !== currentSlug && !!projectDetails[p.id]
  );

  // Show up to 2, prefer the ones closest in the list
  const picks = available.slice(0, 2);

  if (picks.length === 0) return null;

  return (
    <section className="bg-[rgb(var(--bg-primary))] border-t border-[rgb(var(--border-primary))]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-28">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <span
              className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-4"
              style={{ color: "rgb(var(--text-tertiary))" }}
            >
              Continue exploring
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight flex items-center gap-4"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Find another project
              <ArrowRight
                size={32}
                style={{ color: "rgb(var(--text-tertiary))" }}
              />
            </h2>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {picks.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
