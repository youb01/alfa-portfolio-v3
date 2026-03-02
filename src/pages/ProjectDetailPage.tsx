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

  // ── Sticky case-study scroll state ─────────────────────────────────────
  const caseStudyRef = useRef<HTMLElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024
  );

  const { scrollYProgress } = useScroll({
    target: caseStudyRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [slug]);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const project = projectsData.find((p) => p.slug === slug);
  const detail = project ? projectDetails[project.id] : null;
  const imageCount = detail?.caseStudy.images.length ?? 0;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!isDesktop || imageCount === 0) return;
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

  // Which body paragraph is "active" — clamp to body array length
  const activeBodyIndex = Math.min(
    activeImageIndex,
    detail.caseStudy.body.length - 1
  );

  const px = "px-6 md:px-8 lg:px-12 xl:px-16";
  const maxW = "max-w-[1400px] mx-auto";

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))]">
      <ScrollProgressBar />

      {/* ── Fixed nav ──────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[rgb(var(--border-primary))]"
        style={{ background: "rgba(var(--bg-primary), 0.85)" }}
      >
        <div
          className={`${maxW} ${px} h-16 flex items-center justify-between gap-4`}
        >
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

        {/* Title area */}
        <div className={`relative z-10 ${maxW} ${px} pt-16 md:pt-24 pb-10`}>
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

        {/* Hero image + meta bar — same container = identical width */}
        <motion.div
          className={`relative z-10 ${maxW} ${px}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image */}
          <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
            <img
              src={detail.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta bar — flush below image, full image width */}
          <div className="grid grid-cols-3 rounded-b-2xl overflow-hidden border border-t-0 border-[rgb(var(--border-primary))]">
            {[
              { label: "Client", value: detail.client },
              { label: "Service", value: detail.service },
              { label: "Year", value: project.year },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`px-6 py-5 ${
                  i < 2 ? "border-r border-[rgb(var(--border-primary))]" : ""
                }`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-[rgb(var(--text-primary))]">
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

      {/* ── Case study ─────────────────────────────────────────────────────── */}
      {/*
        Desktop: sticky-scroll depth effect.
          - Section is tall (imageCount × 100 vh) so the sticky inner panel
            stays pinned while the user scrolls through all images.
        Mobile: normal stacked layout.
      */}
      <section
        ref={caseStudyRef}
        className="relative border-t border-[rgb(var(--border-primary))]"
        style={isDesktop ? { height: `${imageCount * 100}vh` } : undefined}
      >
        {isDesktop ? (
          /* ── Desktop: pinned panel ── */
          <div
            className="sticky top-0 h-screen flex items-center overflow-hidden"
            style={{ background: "rgb(var(--bg-primary))" }}
          >
            <div className={`w-full ${maxW} ${px}`}>
              <div className="grid grid-cols-2 gap-16 xl:gap-24 items-center">

                {/* Left: text */}
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
                    Case Study
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8 text-[rgb(var(--text-primary))]">
                    {detail.caseStudy.title}
                  </h2>

                  <div className="space-y-4">
                    {detail.caseStudy.body.map((para, i) => (
                      <motion.p
                        key={i}
                        className="text-base leading-relaxed"
                        animate={{
                          opacity: i === activeBodyIndex ? 1 : 0.2,
                          x: i === activeBodyIndex ? 0 : 6,
                          color:
                            i === activeBodyIndex
                              ? "rgb(var(--text-secondary))"
                              : "rgb(var(--text-tertiary))",
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {para}
                      </motion.p>
                    ))}
                  </div>

                  {/* Progress bar + counter */}
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

                {/* Right: cross-fading images */}
                <div className="relative h-[68vh] overflow-hidden rounded-2xl">
                  {detail.caseStudy.images.map((src, i) => (
                    <motion.div
                      key={src}
                      className="absolute inset-0"
                      animate={{
                        opacity: i === activeImageIndex ? 1 : 0,
                        scale: i === activeImageIndex ? 1 : 1.04,
                      }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                        "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.15) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Scroll hint — fades out on last image */}
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
        ) : (
          /* ── Mobile: stacked layout ── */
          <div className={`py-24 ${maxW} ${px}`}>
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
        )}
      </section>

      {/* ── Outcomes ───────────────────────────────────────────────────────── */}
      {detail.outcomes && detail.outcomes.length > 0 && (
        <section className="py-24 md:py-32 border-t border-[rgb(var(--border-primary))]">
          <div className={`${maxW} ${px}`}>
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

              <ul className="space-y-0 divide-y divide-[rgb(var(--border-primary))]">
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
        <section className="py-16 md:py-20 border-t border-[rgb(var(--border-primary))]">
          <div className={`${maxW} ${px}`}>
            {/* Gap-px + bg-border trick gives clean 1 px separators */}
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

      {/* ── Tech stack (enhanced) ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-[rgb(var(--border-primary))]">
        <div className={`${maxW} ${px}`}>
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
