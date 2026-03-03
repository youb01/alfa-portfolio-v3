import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDown, ChevronLeft } from "lucide-react";
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

  // Ref targets the DESKTOP sticky section only.
  // On mobile it's display:none so useScroll is a no-op there.
  const caseStudyRef = useRef<HTMLElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: caseStudyRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);
  const detail = project ? projectDetails[project.id] : null;
  const imageCount = detail?.caseStudy.images.length ?? 0;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (imageCount === 0) return;
    setActiveImageIndex(Math.min(Math.floor(v * imageCount), imageCount - 1));
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

  // Active body paragraph — clamp to body array length
  const activeBodyIndex = Math.min(
    activeImageIndex,
    detail.caseStudy.body.length - 1
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
          <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
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
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
          Uses CSS `hidden lg:block` so this section has real layout
          dimensions on desktop. The sticky inner panel pins to the
          viewport while the outer section's extra height provides
          scroll "room" for each image to become active.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={caseStudyRef}
        className="hidden lg:block relative"
        style={{ height: `${imageCount * 100}vh`, borderTop: border }}
      >
        <div
          className="sticky top-0 h-screen overflow-hidden flex items-center"
          style={{ background: "rgb(var(--bg-primary))" }}
        >
          <div className="w-full max-w-[1400px] mx-auto px-12 xl:px-16">
            {/* 5 : 7 split — text left, image right */}
            <div className="grid grid-cols-[5fr_7fr] gap-16 xl:gap-20 items-center">

              {/* ── Left: text + progress line ── */}
              <div className="flex items-start gap-7">

                {/* Vertical fill line */}
                <div
                  className="relative shrink-0 mt-1 rounded-full overflow-hidden"
                  style={{ width: 1, height: 200, background: "rgb(var(--border-primary))" }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full rounded-full"
                    style={{ background: "rgb(var(--text-primary))" }}
                    animate={{
                      height: `${((activeImageIndex + 1) / imageCount) * 100}%`,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
                    Case Study
                  </span>
                  <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight mb-8 text-[rgb(var(--text-primary))]">
                    {detail.caseStudy.title}
                  </h2>

                  {/* Body paragraphs — active one highlights */}
                  <div className="space-y-4">
                    {detail.caseStudy.body.map((para, i) => (
                      <motion.p
                        key={i}
                        className="text-base leading-relaxed text-[rgb(var(--text-secondary))]"
                        animate={{
                          opacity: i === activeBodyIndex ? 1 : 0.2,
                          x: i === activeBodyIndex ? 0 : 5,
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {para}
                      </motion.p>
                    ))}
                  </div>

                  {/* Progress pills + counter */}
                  <div className="flex items-center gap-3 mt-10">
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
                </div>
              </div>

              {/* ── Right: cross-fading images ── */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ height: "72vh" }}
              >
                {detail.caseStudy.images.map((src, i) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0"
                    animate={{
                      opacity: i === activeImageIndex ? 1 : 0,
                      scale: i === activeImageIndex ? 1 : 1.05,
                      // outgoing images slide up slightly; incoming start from below
                      y:
                        i < activeImageIndex
                          ? -24
                          : i > activeImageIndex
                          ? 20
                          : 0,
                    }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} — image ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}

                {/* Depth gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.14) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scroll hint — fades out after last image */}
          <motion.div
            className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
            animate={{ opacity: activeImageIndex === imageCount - 1 ? 0 : 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown
                size={14}
                style={{ color: "rgb(var(--text-tertiary))" }}
              />
            </motion.div>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{
                color: "rgb(var(--text-tertiary))",
                writingMode: "vertical-rl",
              }}
            >
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          Case study — MOBILE (stacked, no sticky scroll)
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="lg:hidden py-24"
        style={{ borderTop: border }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
            Case Study
          </span>
          <h2 className="text-3xl font-extrabold leading-tight mb-6 text-[rgb(var(--text-primary))]">
            {detail.caseStudy.title}
          </h2>
          <div className="space-y-4 mb-10">
            {detail.caseStudy.body.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-[rgb(var(--text-secondary))]"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="space-y-4">
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
