import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetails } from "../components/sections/data/ProjectDetailData";
import { projectsData } from "../components/sections/data/ProjectsData";
import { BackgroundLines } from "../components/ui/backgrounds/BackgroundLines";
import { OtherProjects } from "../components/ui/projects/OtherProjects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { Tag } from "../components/ui/skills/Tag";
import { ThemeToggle } from "../components/ui/ThemeToggle";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);
  const detail = project ? projectDetails[project.id] : null;

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

      {/* ── Fixed detail nav ────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[rgb(var(--border-primary))]"
        style={{ background: "rgba(var(--bg-primary), 0.85)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between gap-4">
          <motion.button
            onClick={() => navigate(-1)}
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

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-16 relative overflow-hidden">
        <BackgroundLines />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-24 pb-14">
          {/* Number label + hairline */}
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

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4rem,8vw,7rem)] font-extrabold leading-none tracking-tighter mb-10 text-[rgb(var(--text-primary))]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            className="flex flex-wrap gap-x-12 gap-y-5 pb-14 border-b border-[rgb(var(--border-primary))]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "Client", value: detail.client },
              { label: "Service", value: detail.service },
              { label: "Year", value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-1.5">
                  {item.label}
                </p>
                <p className="text-base font-semibold text-[rgb(var(--text-primary))]">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src={detail.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Introduction ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[760px] mx-auto px-6 md:px-8 text-center">
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"
            style={{ color: "rgb(var(--text-primary))" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {detail.introduction}
          </motion.p>
        </div>
      </section>

      {/* ── Wide image ──────────────────────────────────────────────────── */}
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

      {/* ── Case study ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: gallery (scrolls naturally) */}
            <div className="flex flex-col gap-6">
              {detail.caseStudy.images.map((src, i) => (
                <motion.div
                  key={src}
                  className="w-full overflow-hidden rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <img
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: sticky text */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-6">
                  Case Study
                </span>
                <h2
                  className="text-3xl md:text-4xl font-extrabold leading-tight mb-8"
                  style={{ color: "rgb(var(--text-primary))" }}
                >
                  {detail.caseStudy.title}
                </h2>
                <div className="space-y-5">
                  {detail.caseStudy.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ color: "rgb(var(--text-secondary))" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech stack ──────────────────────────────────────────────────── */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="border-t border-[rgb(var(--border-primary))] pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-6">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Tag key={tech} label={tech} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Other projects ──────────────────────────────────────────────── */}
      <OtherProjects currentSlug={slug!} />
    </div>
  );
};
