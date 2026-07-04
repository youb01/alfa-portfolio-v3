import { motion } from "framer-motion";
import { BackgroundLines } from "../backgrounds/BackgroundLines";
import type { Project } from "../../../data/projects";
import type { ProjectDetail } from "../../../data/projectDetails";

const BORDER = "1px solid rgb(var(--border-primary))";

interface ProjectHeroProps {
  project: Project;
  detail: ProjectDetail;
}

export const ProjectHero = ({ project, detail }: ProjectHeroProps) => (
  <section className="pt-16 relative overflow-hidden">
    <BackgroundLines />

    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-24 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4">
          {project.number} · {project.category}
        </span>
        <motion.div
          className="h-[1px] w-full origin-left mb-10"
          style={{ background: "rgb(var(--border-primary))" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4rem,8vw,7rem)] font-extrabold leading-none tracking-tighter mb-3 text-[rgb(var(--text-primary))]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {project.title}
      </motion.h1>

      <motion.p
        className="text-sm font-medium text-[rgb(var(--text-tertiary))]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {project.subtitle}
      </motion.p>
    </div>

    <motion.div
      className="relative z-10 w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={detail.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="w-full grid grid-cols-3"
        style={{ borderTop: BORDER, borderBottom: BORDER }}
      >
        {[
          { label: "Client",  value: detail.client },
          { label: "Service", value: detail.service },
          { label: "Year",    value: project.year },
        ].map((item, i) => (
          <div
            key={item.label}
            className="px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-5 md:py-6"
            style={{ borderRight: i < 2 ? BORDER : undefined }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-1.5">
              {item.label}
            </p>
            <p className="text-sm font-semibold text-[rgb(var(--text-primary))] truncate">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);
