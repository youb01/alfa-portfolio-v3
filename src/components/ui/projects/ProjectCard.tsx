import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../../data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { useTheme } from "../../../hooks/useTheme";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link to={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <motion.div
        className="group border border-[rgb(var(--border-primary))] cursor-pointer flex flex-col h-full transition-colors duration-200"
        style={{ background: "rgb(var(--bg-primary))" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
        whileHover={{ borderColor: "rgb(var(--border-secondary))" }}
      >
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden border-b border-[rgb(var(--border-primary))]">
          <ProjectThumbnail
            variant={project.thumbnailVariant}
            isDark={isDark}
            className="h-full w-full"
          />
          {/* Project number — bottom right of thumbnail */}
          <span
            className="absolute bottom-3 right-4 text-[9px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "rgb(var(--text-tertiary))" }}
          >
            {project.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">

          {/* Meta: category · year */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--text-tertiary))]">
              {project.category}
            </span>
            <span style={{ color: "rgb(var(--border-secondary))" }}>·</span>
            <span className="text-[9px] font-medium tabular-nums text-[rgb(var(--text-tertiary))]">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-extrabold uppercase leading-tight text-[rgb(var(--text-primary))] mb-1.5"
            style={{ fontSize: "clamp(0.88rem, 1.5vw, 1.05rem)", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-[11px] font-medium text-[rgb(var(--text-tertiary))] mb-4">
            {project.subtitle}
          </p>

          {/* Divider */}
          <div className="h-px bg-[rgb(var(--border-primary))] mb-4" />

          {/* Description */}
          <p className="text-sm leading-relaxed text-[rgb(var(--text-secondary))] mb-5 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium px-2 py-0.5 border border-[rgb(var(--border-primary))] text-[rgb(var(--text-tertiary))]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-medium px-2 py-0.5 border border-[rgb(var(--border-primary))] text-[rgb(var(--text-tertiary))]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--text-primary))] transition-colors duration-200">
            View Project
            <ArrowUpRight size={11} strokeWidth={2.5} />
          </div>

        </div>
      </motion.div>
    </Link>
  );
};
