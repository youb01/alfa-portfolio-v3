import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetails } from "../components/sections/data/ProjectDetailData";
import { projectsData } from "../components/sections/data/ProjectsData";
import { BackgroundLines } from "../components/ui/backgrounds/BackgroundLines";
import { OtherProjects } from "../components/ui/projects/OtherProjects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { getTechIcon } from "../components/ui/skills/techIconMap";
import { ThemeToggle } from "../components/ui/ThemeToggle";

/* ─── Scroll-driven image slide ────────────────────────────────────────────── */

const ImageSlide: React.FC<{
  src: string;
  alt: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}> = ({ src, alt, index, total, scrollYProgress }) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const start = index / total;
  const end = (index + 1) / total;
  const fadeIn = start + 0.08;
  const fadeOut = end - 0.08;

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [start, fadeIn],
    [isFirst ? 1 : 1.06, 1],
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ scale }}
      />
    </motion.div>
  );
};

/* ─── Progress pill indicator ──────────────────────────────────────────────── */

const ProgressPill: React.FC<{
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}> = ({ index, total, scrollYProgress }) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.35, 1, 1, 0.35],
  );
  const width = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    ["6px", "24px", "24px", "6px"],
  );

  return (
    <motion.div
      className="h-1 rounded-full bg-white"
      style={{ opacity, width }}
    />
  );
};

/* ─── Main page ─────────────────────────────────────────────────────────────── */

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const caseStudyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);
  const detail = project ? projectDetails[project.id] : null;

  const { scrollYProgress: caseScrollProgress } = useScroll({
    target: caseStudyRef,
    offset: ["start start", "end end"],
  });

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

  const images = detail.caseStudy.images;
  const sectionHeight = `${(images.length + 1) * 100}vh`;

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))]">
      <ScrollProgressBar />

      {/* ── Fixed nav ─────────────────────────────────────────────────────── */}
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

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-16 relative overflow-hidden">
        <BackgroundLines />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-24 pb-10">
          {/* Number + hairline */}
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
              transition={{
                duration: 1.1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4rem,8vw,7rem)] font-extrabold leading-none tracking-tighter mb-12 text-[rgb(var(--text-primary))]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.title}
          </motion.h1>
        </div>

        {/* Hero image — meta row overlaid at bottom spanning full image width */}
        <motion.div
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl relative">
            <img
              src={detail.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient scrim */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 40%, transparent 70%)",
              }}
            />

            {/* Meta row — full width of the image */}
            <div className="absolute bottom-0 left-0 right-0 px-8 md:px-10 lg:px-12 py-7">
              <div className="flex items-end justify-between">
                {[
                  { label: "Client", value: detail.client },
                  { label: "Service", value: detail.service },
                  { label: "Year", value: project.year },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + i * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 mb-1.5">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white leading-snug">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[760px] mx-auto px-6 md:px-8 text-center">
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgb(var(--text-primary))]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {detail.introduction}
          </motion.p>
        </div>
      </section>

      {/* ── Wide image ───────────────────────────────────────────────────── */}
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

      {/* ── Outcomes / metrics ───────────────────────────────────────────── */}
      {detail.outcomes && detail.outcomes.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ background: "rgb(var(--border-primary))" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {detail.outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  className="px-8 py-10"
                  style={{ background: "rgb(var(--bg-primary))" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[rgb(var(--text-primary))] mb-2 leading-none">
                    {outcome.value}
                  </p>
                  <p className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-1">
                    {outcome.label}
                  </p>
                  {outcome.description && (
                    <p className="text-xs text-[rgb(var(--text-tertiary))] leading-relaxed">
                      {outcome.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Case study ───────────────────────────────────────────────────── */}

      {/* Desktop: scroll-pinned depth experience */}
      <div
        ref={caseStudyRef}
        className="hidden lg:block relative"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 w-full">
            <div className="grid grid-cols-2 gap-16 xl:gap-24 items-center">

              {/* Left — image stack with scroll-driven transitions */}
              <div className="relative rounded-2xl overflow-hidden bg-[rgb(var(--bg-secondary))]" style={{ height: "62vh" }}>
                {images.map((src, i) => (
                  <ImageSlide
                    key={src}
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    index={i}
                    total={images.length}
                    scrollYProgress={caseScrollProgress}
                  />
                ))}

                {/* Progress pills */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {images.map((_, i) => (
                    <ProgressPill
                      key={i}
                      index={i}
                      total={images.length}
                      scrollYProgress={caseScrollProgress}
                    />
                  ))}
                </div>

                {/* Image index counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                  {images.length} images
                </div>
              </div>

              {/* Right — case study text */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
                    Case Study
                  </span>
                  <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-extrabold leading-tight tracking-tighter mb-8 text-[rgb(var(--text-primary))]">
                    {detail.caseStudy.title}
                  </h2>

                  <div className="space-y-5">
                    {detail.caseStudy.body.map((para, i) => (
                      <p
                        key={i}
                        className="text-base xl:text-lg leading-relaxed text-[rgb(var(--text-secondary))]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Decorative divider */}
                  <div
                    className="mt-10 h-[1px] w-16"
                    style={{ background: "rgb(var(--border-hover))" }}
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[rgb(var(--text-tertiary))]">
                    Scroll to explore
                  </p>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile: standard stacked case study */}
      <section className="lg:hidden py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
              Case Study
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter mb-8 text-[rgb(var(--text-primary))]">
              {detail.caseStudy.title}
            </h2>
            <div className="space-y-5">
              {detail.caseStudy.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-[rgb(var(--text-secondary))]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {images.map((src, i) => (
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
                  className="w-full object-cover rounded-xl"
                  style={{ aspectRatio: "4/3" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="border-t border-[rgb(var(--border-primary))] pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Header row */}
            <div className="flex items-baseline justify-between mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
                Tech Stack
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
                {project.techStack.length} technologies
              </span>
            </div>

            {/* Tech grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
              {project.techStack.map((tech, i) => {
                const Icon = getTechIcon(tech);
                return (
                  <motion.div
                    key={tech}
                    className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl border border-[rgb(var(--border-primary))] bg-[rgb(var(--bg-secondary))] group"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -3,
                      borderColor: "rgb(var(--border-hover))",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {Icon ? (
                      <Icon
                        size={15}
                        style={{
                          color: "rgb(var(--text-primary))",
                          flexShrink: 0,
                          opacity: 0.85,
                        }}
                      />
                    ) : (
                      <span
                        className="w-[15px] h-[15px] rounded-sm flex-shrink-0 flex items-center justify-center text-[7px] font-black text-white"
                        style={{ background: "rgb(var(--text-tertiary))" }}
                      >
                        {tech.charAt(0)}
                      </span>
                    )}
                    <span className="text-[13px] font-medium text-[rgb(var(--text-primary))] truncate leading-none">
                      {tech}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Other projects ───────────────────────────────────────────────── */}
      <OtherProjects currentSlug={slug!} />
    </div>
  );
};
