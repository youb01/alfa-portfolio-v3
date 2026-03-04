import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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

  // Desktop: driven by scroll progress inside the tall sticky section
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Mobile: driven by tap/swipe on the carousel
  const [mobilePage, setMobilePage] = useState(0);

  const caseStudySectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setMobilePage(0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);
  const detail = project ? projectDetails[project.id] : null;
  const imageCount = detail?.caseStudy.images.length ?? 0;

  // Map scroll progress [0 → 1] inside the tall desktop section to an image index.
  // The section has (imageCount + 1) * 100 vh of height, so each "screen" of scroll
  // corresponds to one image transition.
  const { scrollYProgress } = useScroll({
    target: caseStudySectionRef,
    offset: ["start start", "end end"],
  });

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

  // Clamp paragraph highlight to the number of body entries
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

        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
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
          Case study — DESKTOP  (lg+)

          Outer section is (imageCount + 1) × 100 vh tall — the extra
          height is the scroll "budget" that gets consumed while the inner
          panel stays pinned to the viewport.  Images cross-fade on the
          LEFT as you scroll; the text panel on the RIGHT is always in
          view.  Once you've scrolled through every image the section
          releases and the rest of the page continues normally.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={caseStudySectionRef}
        className="hidden lg:block relative"
        style={{
          borderTop: border,
          height: `${(imageCount + 1) * 100}vh`,
        }}
      >
        {/* Sticky inner panel — fills exactly one viewport */}
        <div
          className="sticky top-0 h-screen flex flex-col overflow-hidden"
          style={{ background: "rgb(var(--bg-primary))" }}
        >
          {/* Spacer that clears the 64 px fixed nav */}
          <div className="h-16 shrink-0" />

          {/* Main two-column layout */}
          <div className="flex-1 min-h-0 pb-8 px-12 xl:px-16">
            <div className="h-full max-w-[1400px] mx-auto grid grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 xl:gap-14">

              {/* ── LEFT: cross-fading gallery — fills the grid cell height ── */}
              <div className="relative overflow-hidden rounded-2xl">
                {detail.caseStudy.images.map((src, i) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0"
                    animate={{
                      opacity: i === activeImageIndex ? 1 : 0,
                      scale: i === activeImageIndex ? 1 : 1.04,
                      y:
                        i < activeImageIndex
                          ? "-2%"
                          : i > activeImageIndex
                            ? "2%"
                            : "0%",
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

                {/* Bottom vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.22) 100%)",
                  }}
                />

                {/* Image counter badge */}
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <span className="text-[12px] font-bold tabular-nums text-white drop-shadow">
                    {String(activeImageIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="w-px h-3.5 bg-white/40" />
                  <span className="text-[12px] font-medium tabular-nums text-white/55 drop-shadow">
                    {String(imageCount).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* ── RIGHT: text panel — vertically centred in its grid cell ── */}
              <div className="flex flex-col justify-center py-2">

                {/* Section label + rule */}
                <div className="flex items-center gap-5 mb-8">
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
                    Case Study
                  </span>
                  <div
                    className="flex-1 h-[1px]"
                    style={{ background: "rgb(var(--border-primary))" }}
                  />
                </div>

                {/* Title */}
                <h2 className="text-[1.75rem] xl:text-[2rem] font-extrabold leading-tight mb-8 text-[rgb(var(--text-primary))]">
                  {detail.caseStudy.title}
                </h2>

                {/* Vertical progress fill line + body paragraphs */}
                <div className="flex gap-5 mb-9">
                  {/* Thin line — fills proportionally as images advance */}
                  <div
                    className="relative shrink-0 self-stretch rounded-full overflow-hidden"
                    style={{
                      width: 1,
                      background: "rgb(var(--border-primary))",
                      minHeight: 24,
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full"
                      style={{ background: "rgb(var(--text-primary))" }}
                      animate={{
                        height: `${((activeImageIndex + 1) / imageCount) * 100}%`,
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  {/* Paragraphs — active one at full opacity, rest dimmed */}
                  <div className="space-y-4 flex-1 min-w-0">
                    {detail.caseStudy.body.map((para, i) => (
                      <motion.p
                        key={i}
                        className="text-[0.88rem] leading-relaxed"
                        animate={{
                          opacity: i === activeBodyIndex ? 1 : 0.2,
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

                {/* Progress pills */}
                <div className="flex items-center gap-2.5">
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          Case study — MOBILE / TABLET  (< lg)

          Tap-driven image carousel above the body text.  No scroll-
          trapping — touch users navigate with taps on the image or the
          dot controls below it.
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="lg:hidden py-16 sm:py-20" style={{ borderTop: border }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

          {/* Header */}
          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4">
            Case Study
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-7 text-[rgb(var(--text-primary))]">
            {detail.caseStudy.title}
          </h2>

          {/* Tap-to-advance image carousel */}
          <div
            className="relative overflow-hidden rounded-xl mb-5"
            style={{ aspectRatio: "16/10" }}
          >
            {detail.caseStudy.images.map((src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                animate={{
                  opacity: i === mobilePage ? 1 : 0,
                  scale: i === mobilePage ? 1 : 1.03,
                  x:
                    i < mobilePage
                      ? "-4%"
                      : i > mobilePage
                        ? "4%"
                        : "0%",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

            {/* Tap left = previous */}
            <button
              className="absolute left-0 top-0 bottom-0 w-1/2 cursor-w-resize"
              onClick={() => setMobilePage((p) => Math.max(0, p - 1))}
              aria-label="Previous image"
            />
            {/* Tap right = next */}
            <button
              className="absolute right-0 top-0 bottom-0 w-1/2 cursor-e-resize"
              onClick={() =>
                setMobilePage((p) => Math.min(imageCount - 1, p + 1))
              }
              aria-label="Next image"
            />
          </div>

          {/* Dot + counter navigation */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex gap-1.5 items-center">
              {detail.caseStudy.images.map((_, i) => (
                <motion.button
                  key={i}
                  className="h-[2px] rounded-full"
                  animate={{
                    width: i === mobilePage ? 24 : 8,
                    backgroundColor:
                      i === mobilePage
                        ? "rgb(var(--text-primary))"
                        : "rgb(var(--border-primary))",
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setMobilePage(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
            <span className="ml-3 text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))]">
              {String(mobilePage + 1).padStart(2, "0")} /{" "}
              {String(imageCount).padStart(2, "0")}
            </span>
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
