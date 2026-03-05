import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Project } from "../../sections/data/ProjectsData";
import { Tag } from "../skills/Tag";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const getCategoryColors = (isDark: boolean) => ({
  Frontend: {
    bg: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)",
    border: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.09)",
    text: isDark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.6)",
  },
  Backend: {
    bg: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    border: isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.07)",
    text: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)",
  },
  Fullstack: {
    bg: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.055)",
    border: isDark ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.1)",
    text: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.65)",
  },
  "UI/UX Design": {
    bg: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.045)",
    border: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    text: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.58)",
  },
});

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark"),
  );
  const [isHovered, setIsHovered] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const cardBg = isDark ? "rgba(18, 18, 18, 0.85)" : "rgba(255, 255, 255, 0.9)";
  const cardBorder = isDark ? "rgba(60, 60, 60, 0.5)" : "rgba(0, 0, 0, 0.08)";
  const cardShadow = isDark
    ? "0 20px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)"
    : "0 20px 60px -15px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)";
  const cardShadowHover = isDark
    ? "0 30px 80px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.07)"
    : "0 30px 80px -15px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)";

  const categoryColors = getCategoryColors(isDark);
  const catColor =
    categoryColors[project.category] ?? categoryColors["Frontend"];

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block h-full"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <motion.div
        className="relative group cursor-pointer h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, margin: "-60px" }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="absolute -inset-2 rounded-2xl blur-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
          }}
        />

        {/* Card */}
        <motion.div
          className="relative flex flex-col h-full rounded-2xl overflow-hidden backdrop-blur-xl"
          style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: isHovered ? cardShadowHover : cardShadow,
          }}
          animate={{
            scale: isHovered ? 1.015 : 1,
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Thumbnail */}
          <div className="relative h-52 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.04 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectThumbnail
                variant={project.thumbnailVariant}
                isDark={isDark}
                className="h-full"
              />
            </motion.div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent 55%, ${
                  isDark ? "rgba(18,18,18,0.9)" : "rgba(255,255,255,0.9)"
                } 100%)`,
              }}
            />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full backdrop-blur-md"
                style={{
                  background: catColor.bg,
                  border: `1px solid ${catColor.border}`,
                  color: catColor.text,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Year badge */}
            <div className="absolute top-3 right-3">
              <span
                className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full backdrop-blur-md"
                style={{
                  background: isDark
                    ? "rgba(0,0,0,0.4)"
                    : "rgba(255,255,255,0.7)",
                  border: `1px solid ${cardBorder}`,
                  color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)",
                }}
              >
                {project.year}
              </span>
            </div>

            {/* Project number */}
            <motion.div
              className="absolute bottom-3 right-3 text-[10px] font-black tracking-widest"
              style={{
                color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
              }}
            >
              {project.number}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <div
              className="h-[1px] mb-5"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.06)",
              }}
            />

            {/* Title + subtitle */}
            <div className="mb-3">
              <h3
                className="text-xl font-black leading-tight tracking-tight mb-1"
                style={{
                  color: isDark ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.88)",
                }}
              >
                {t(`projects.items.${project.id}.title`)}
              </h3>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                style={{
                  color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                }}
              >
                {t(`projects.items.${project.id}.subtitle`)}
              </p>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-5 flex-1"
              style={{
                color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
              }}
            >
              {t(`projects.items.${project.id}.description`)}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <Tag key={tech} label={tech} index={i} />
              ))}
              {project.techStack.length > 4 && (
                <span
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                    background: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(0,0,0,0.03)",
                    border: `1px solid ${cardBorder}`,
                  }}
                >
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* View Details */}
            <div
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] mt-auto"
              style={{
                color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
              }}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t("projects.viewDetails")}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.div
                animate={{
                  x: isHovered ? 0 : 0,
                  rotate: isHovered ? 0 : 45,
                  opacity: isHovered ? 1 : 0.4,
                }}
                transition={{ duration: 0.25 }}
              >
                <ArrowUpRight size={14} />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
            }}
            animate={{ x: isHovered ? "200%" : "-200%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
};
