import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetails } from "../components/sections/data/ProjectDetailData";
import { projectsData } from "../components/sections/data/ProjectsData";
import { BackgroundLines } from "../components/ui/backgrounds/BackgroundLines";
import { OtherProjects } from "../components/ui/projects/OtherProjects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { ThemeToggle } from "../components/ui/ThemeToggle";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // One ref slot per gallery image — used by IntersectionObserver below
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);
  const detail = project ? projectDetails[project.id] : null;
  const imageCount = detail?.caseStudy.images.length ?? 0;

  // Track which gallery image is scrolled into view (desktop stacked layout)
  useEffect(() => {
    if (imageCount === 0) return;
    const observers = imageRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveImageIndex(i);
        },
        { threshold: 0.5, rootMargin: "-15% 0px -15% 0px" },
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [imageCount, slug]);

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

  // Active body paragraph — clamp to body array length
  const activeBodyIndex = Math.min(
    activeImageIndex,
    detail.caseStudy.body.length - 1,
  );

  const border = "1px solid rgb(var(--border-primary))";

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))]">
      <ScrollProgressBar />

      {/* ── Fixed nav ──────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(var(--bg-primary), 0.85)",
          borderBottom: border,
        }}
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

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="pt-16 relative overflow-hidden">
        <BackgroundLines />

        {/* Title — stays inside padded container */}
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
              transition={{
                duration: 1.1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
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
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {project.subtitle}
          </motion.p>
        </div>

        {/*
          Full-bleed block: hero image + meta bar.
          Both are w-full with no horizontal container padding,
          so the meta bar is exactly as wide as the image.
        */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hero image — edge to edge */}
          <div
            className="w-full overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={detail.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta bar — full width of the image */}
          <div
            className="w-full grid grid-cols-3"
            style={{ borderTop: border, borderBottom: border }}
          >
            {[
              { label: "Client", value: detail.client },
              { label: "Service", value: detail.service },
              { label: "Year", value: project.year },
            ].map((item, i) => (
              <div
                key={item.label}
                className="px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-5 md:py-6"
                style={{ borderRight: i < 2 ? border : undefined }}
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

      {/* ── Introduction ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[760px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            className="w-[1px] h-16 mx-auto mb-10 origin-top"
            style={{ background: "rgb(var(--border-primary))" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          />
          <motion.p
            className="text-xl md:text-2xl lg:text-[1.65rem] font-light leading-[1.65] text-[rgb(var(--text-primary))]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {detail.introduction}
          </motion.p>
        </div>
      </section>

      {/* ── Wide image ─────────────────────────────────────────────────────── */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          Case study — DESKTOP
          Images stacked on the left (always visible, scroll-driven via
          IntersectionObserver). Text panel on the right is sticky with a
          fixed column width so proportions hold regardless of how many
          images or paragraphs exist.
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="hidden lg:block py-24 md:py-32" style={{ borderTop: border }}>
        <div className="max-w-[1400px] mx-auto px-12 xl:px-16">

          {/* Section header row */}
          <motion.div
            className="flex items-center gap-8 mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
              Case Study
            </span>
            <div
              className="flex-1 h-[1px]"
              style={{ background: "rgb(var(--border-primary))" }}
            />
            <span className="shrink-0 text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))]">
              {String(imageCount).padStart(2, "0")} Images
            </span>
          </motion.div>

          {/* Two-column grid — images left, sticky text right */}
          <div className="grid grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-start">

            {/* ── LEFT: stacked image gallery ── */}
            <div className="space-y-5">
              {detail.caseStudy.images.map((src, i) => (
                <motion.div
                  key={src}
                  ref={(el) => { imageRefs.current[i] = el; }}
                  className="relative w-full overflow-hidden rounded-2xl group cursor-default"
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div
                    className="overflow-hidden"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} — image ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Subtle bottom gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.18) 100%)",
                    }}
                  />

                  {/* Image number badge */}
                  <div
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
                    style={{
                      background: "rgba(var(--bg-primary), 0.72)",
                      border: "1px solid rgba(var(--border-primary), 0.5)",
                    }}
                  >
                    <span className="text-[9px] font-bold tabular-nums text-[rgb(var(--text-primary))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── RIGHT: sticky text panel (fixed column width keeps proportions) ── */}
            <motion.div
              className="sticky top-24 flex flex-col"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h2 className="text-3xl xl:text-[2.1rem] font-extrabold leading-tight mb-10 text-[rgb(var(--text-primary))]">
                {detail.caseStudy.title}
              </h2>

              {/* Vertical progress line + paragraphs side-by-side */}
              <div className="flex gap-6 mb-10">
                {/* Animated fill line */}
                <div
                  className="relative shrink-0 self-stretch rounded-full overflow-hidden"
                  style={{
                    width: 1,
                    background: "rgb(var(--border-primary))",
                    minHeight: 40,
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full rounded-full"
                    style={{ background: "rgb(var(--text-primary))" }}
                    animate={{
                      height: `${((activeImageIndex + 1) / imageCount) * 100}%`,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Body paragraphs — active one is full opacity */}
                <div className="space-y-5 flex-1 min-w-0">
                  {detail.caseStudy.body.map((para, i) => (
                    <motion.p
                      key={i}
                      className="text-[0.93rem] leading-relaxed"
                      animate={{
                        opacity: i === activeBodyIndex ? 1 : 0.28,
                        color:
                          i === activeBodyIndex
                            ? "rgb(var(--text-primary))"
                            : "rgb(var(--text-secondary))",
                      }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>

              {/* Progress pills + image counter */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 items-center">
                  {detail.caseStudy.images.map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-[2px] rounded-full"
                      animate={{
                        width: i === activeImageIndex ? 28 : 8,
                        backgroundColor:
                          i === activeImageIndex
                            ? "rgb(var(--text-primary))"
                            : "rgb(var(--border-primary))",
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))]">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(imageCount).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          Case study — MOBILE / TABLET  (< lg)
          Images first (grab attention), then all body text below.
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="lg:hidden py-20" style={{ borderTop: border }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">

          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4">
            Case Study
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-8 text-[rgb(var(--text-primary))]">
            {detail.caseStudy.title}
          </h2>

          {/* Images stacked */}
          <div className="space-y-4 mb-10">
            {detail.caseStudy.images.map((src, i) => (
              <motion.div
                key={src}
                className="w-full overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Body text */}
          <div className="space-y-4">
            {detail.caseStudy.body.map((para, i) => (
              <motion.p
                key={i}
                className="text-base leading-relaxed text-[rgb(var(--text-secondary))]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-40px" }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ───────────────────────────────────────────────────────── */}
      {detail.outcomes && detail.outcomes.length > 0 && (
        <section className="py-24 md:py-32" style={{ borderTop: border }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4">
                  Outcomes
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[rgb(var(--text-primary))]">
                  What was achieved
                </h2>
              </motion.div>

              <ul className="divide-y divide-[rgb(var(--border-primary))]">
                {detail.outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6 py-5 first:pt-0"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <span className="text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))] mt-1 shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-[rgb(var(--text-secondary))]">
                      {outcome}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      {detail.stats && detail.stats.length > 0 && (
        <section className="py-16 md:py-20" style={{ borderTop: border }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ background: "rgb(var(--border-primary))" }}
            >
              {detail.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col px-8 py-10"
                  style={{ background: "rgb(var(--bg-primary))" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.6 }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <p className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none text-[rgb(var(--text-primary))] mb-3">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[rgb(var(--text-tertiary))]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tech stack ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ borderTop: border }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4">
                Built With
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[rgb(var(--text-primary))]">
                {project.techStack.length}{" "}
                {project.techStack.length === 1 ? "Technology" : "Technologies"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {project.techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[rgb(var(--border-primary))] cursor-default"
                  style={{ background: "rgb(var(--bg-primary))" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                >
                  <span className="text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))] shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-[rgb(var(--text-primary))]">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other projects ─────────────────────────────────────────────────── */}
      <OtherProjects currentSlug={slug!} />
    </div>
  );
};
