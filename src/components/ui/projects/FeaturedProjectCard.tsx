import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import type { Project } from "../../sections/data/ProjectsData";
import { Tag } from "../skills/Tag";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface FeaturedProjectCardProps {
  project: Project;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark")
  );
  const [isHovered, setIsHovered] = React.useState(false);

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

<<<<<<< HEAD
  const cardBg = isDark ? "rgba(18, 18, 18, 0.85)" : "rgba(255, 255, 255, 0.9)";
  const cardBorder = isDark ? "rgba(60, 60, 60, 0.5)" : "rgba(0, 0, 0, 0.08)";
=======
  const cardBg = isDark
    ? "rgba(18, 18, 18, 0.85)"
    : "rgba(255, 255, 255, 0.9)";
  const cardBorder = isDark
    ? "rgba(60, 60, 60, 0.5)"
    : "rgba(0, 0, 0, 0.08)";
>>>>>>> claude/add-project-section-YzCbV
  const cardShadow = isDark
    ? "0 30px 80px -20px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.05)"
    : "0 30px 80px -20px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)";
  const cardShadowHover = isDark
    ? "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.08)"
    : "0 40px 100px -20px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.07)";

  return (
    <motion.div
      className="relative w-full group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute -inset-3 rounded-3xl blur-3xl pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
<<<<<<< HEAD
          background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
=======
          background: isDark
            ? "rgba(255,255,255,0.03)"
            : "rgba(0,0,0,0.03)",
>>>>>>> claude/add-project-section-YzCbV
        }}
      />

      {/* Card */}
      <motion.div
        className="relative w-full rounded-3xl overflow-hidden backdrop-blur-xl"
        style={{
          background: cardBg,
          border: `1px solid ${cardBorder}`,
          boxShadow: isHovered ? cardShadowHover : cardShadow,
        }}
        animate={{
          scale: isHovered ? 1.008 : 1,
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Glass reflection */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%)",
          }}
        />

        {/* Featured label — absolute top-left of whole card */}
        <div className="absolute top-5 left-5 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span
              className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.07)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.1)"}`,
                color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.65)",
              }}
            >
              Featured
            </span>
          </motion.div>
        </div>

        {/* Layout: thumbnail left on desktop, top on mobile */}
        <div className="flex flex-col lg:flex-row">
          {/* Thumbnail — takes 58% width on desktop */}
          <div className="relative lg:w-[58%] h-64 sm:h-72 lg:h-auto lg:min-h-[420px] overflow-hidden flex-shrink-0">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.04 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProjectThumbnail
                variant={project.thumbnailVariant}
                isDark={isDark}
                className="h-full"
              />
            </motion.div>

            {/* Fade to content area on desktop (right edge) */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background: `linear-gradient(to right, transparent 50%, ${
                  isDark ? "rgba(18,18,18,0.95)" : "rgba(255,255,255,0.95)"
                } 100%)`,
              }}
            />
            {/* Fade to content area on mobile (bottom edge) */}
            <div
              className="absolute inset-0 pointer-events-none lg:hidden"
              style={{
                background: `linear-gradient(to bottom, transparent 50%, ${
                  isDark ? "rgba(18,18,18,0.95)" : "rgba(255,255,255,0.95)"
                } 100%)`,
              }}
            />
          </div>

          {/* Content — 42% on desktop */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 lg:pl-8 lg:w-[42%]">
            {/* Category + year */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.05)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
<<<<<<< HEAD
                  color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)",
=======
                  color: isDark
                    ? "rgba(255,255,255,0.65)"
                    : "rgba(0,0,0,0.55)",
>>>>>>> claude/add-project-section-YzCbV
                }}
              >
                {project.category}
              </span>
              <span
                className="text-[10px] font-medium"
                style={{
<<<<<<< HEAD
                  color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
=======
                  color: isDark
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(0,0,0,0.3)",
>>>>>>> claude/add-project-section-YzCbV
                }}
              >
                {project.year}
              </span>
            </div>

            {/* Version timeline */}
            <div className="flex items-center gap-2 mb-5">
              {["v1", "v2", "v3"].map((v, i) => (
                <React.Fragment key={v}>
                  <motion.span
                    className="text-xs font-black"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    style={{
                      color: isDark
                        ? `rgba(255,255,255,${0.3 + i * 0.25})`
                        : `rgba(0,0,0,${0.25 + i * 0.2})`,
                    }}
                  >
                    {v}
                  </motion.span>
                  {i < 2 && (
                    <motion.div
                      className="h-[1px] w-5"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true }}
                      style={{
                        background: isDark
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(0,0,0,0.12)",
                        transformOrigin: "left",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Decorative line */}
            <motion.div
              className="h-[2px] w-10 mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
<<<<<<< HEAD
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
=======
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>>>>>>> claude/add-project-section-YzCbV
              viewport={{ once: true }}
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.15)",
                transformOrigin: "left",
              }}
            />

            {/* Title */}
            <motion.h3
              className="text-3xl sm:text-4xl font-black leading-tight tracking-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{
                delay: 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              style={{
                color: isDark ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.88)",
=======
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{
                color: isDark
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(0,0,0,0.88)",
>>>>>>> claude/add-project-section-YzCbV
              }}
            >
              {project.title}
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
<<<<<<< HEAD
                color: isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.28)",
=======
                color: isDark
                  ? "rgba(255,255,255,0.28)"
                  : "rgba(0,0,0,0.28)",
>>>>>>> claude/add-project-section-YzCbV
              }}
            >
              {project.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base leading-relaxed mb-7"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              style={{
                color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
=======
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{
                color: isDark
                  ? "rgba(255,255,255,0.55)"
                  : "rgba(0,0,0,0.55)",
>>>>>>> claude/add-project-section-YzCbV
              }}
            >
              {project.description}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {project.techStack.map((tech, i) => (
                <Tag key={tech} label={tech} index={i} />
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  color: isDark
                    ? isHovered
                      ? "rgba(255,255,255,0.75)"
                      : "rgba(255,255,255,0.35)"
                    : isHovered
                      ? "rgba(0,0,0,0.7)"
                      : "rgba(0,0,0,0.35)",
                }}
              >
                <span>View Details</span>
                <motion.div
                  animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowUpRight size={15} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle corner number watermark */}
        <div
          className="absolute bottom-5 right-6 text-[6rem] font-black leading-none select-none pointer-events-none"
          style={{
<<<<<<< HEAD
            color: isDark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.012)",
=======
            color: isDark
              ? "rgba(255,255,255,0.015)"
              : "rgba(0,0,0,0.012)",
>>>>>>> claude/add-project-section-YzCbV
          }}
        >
          {project.number}
        </div>
      </motion.div>
    </motion.div>
  );
};
