import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetails } from "../components/sections/data/ProjectDetailData";
import { projectsData } from "../components/sections/data/ProjectsData";
import { BackgroundLines } from "../components/ui/backgrounds/BackgroundLines";
import { Footer } from "../components/layout/Footer";
import { OtherProjects } from "../components/ui/projects/OtherProjects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { ThemeToggle } from "../components/ui/ThemeToggle";

// ─── Entrance presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

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

  const imageCount = detail.caseStudy.images.length;
  const bodyCount = detail.caseStudy.body.length;
  const chapterCount = Math.max(imageCount, bodyCount);
  const border = "1px solid rgb(var(--border-primary))";

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))]">
      <ScrollProgressBar />

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{ background: "rgba(var(--bg-primary), 0.85)", borderBottom: border }}
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

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
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

      {/* ── Introduction ────────────────────────────────────────────────────── */}
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

      {/* ── Wide image ──────────────────────────────────────────────────────── */}
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
          Case Study — Alternating editorial chapters

          Each chapter pairs one image with one paragraph. Chapters
          alternate between image-left (7fr) and image-right (5fr:7fr)
          for a magazine-style visual rhythm.

          If imageCount > bodyCount the final "orphan" image renders
          as a full-width cinematic frame (16/9) so proportion is
          always correct regardless of content length.

          Single responsive section — no scroll-trapping, no state.
          Mobile: grid stacks naturally (image above text).
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ borderTop: border }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">

          {/* ── Section header ── */}
          <motion.div
            className="mb-16 md:mb-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {/* Label row */}
            <div className="flex items-center gap-6 mb-8 md:mb-10">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
                Case Study
              </span>
              <div
                className="flex-1 h-[1px]"
                style={{ background: "rgb(var(--border-primary))" }}
              />
              <span className="shrink-0 text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))]">
                {String(chapterCount).padStart(2, "0")}{" "}
                {chapterCount === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>

            {/* Large section title */}
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.06] tracking-tight text-[rgb(var(--text-primary))]"
              style={{ maxWidth: "22ch" }}
            >
              {detail.caseStudy.title}
            </h2>
          </motion.div>

          {/* ── Chapter list ── */}
          <div className="divide-y divide-[rgb(var(--border-primary))]">
            {Array.from({ length: chapterCount }).map((_, i) => {
              const src = detail.caseStudy.images[i];
              const para = detail.caseStudy.body[i];
              const imageLeft = i % 2 === 0;
              const hasBoth = !!src && !!para;
              const imageOnly = !!src && !para;

              return (
                <div key={i} className="py-14 md:py-20 lg:py-24">

                  {/* ── Chapter with both image + text: alternating split ── */}
                  {hasBoth && (
                    <div
                      className={`grid grid-cols-1 items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 ${
                        imageLeft
                          ? "lg:grid-cols-[7fr_5fr]"
                          : "lg:grid-cols-[5fr_7fr]"
                      }`}
                    >
                      {/* Image */}
                      <motion.div
                        className={`relative overflow-hidden rounded-2xl group ${
                          imageLeft ? "lg:order-1" : "lg:order-2"
                        }`}
                        initial={{ opacity: 0, y: 48, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                      >
                        <div
                          className="overflow-hidden"
                          style={{ aspectRatio: "4/3" }}
                        >
                          <img
                            src={src}
                            alt={`${project.title} — chapter ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </div>

                        {/* Bottom vignette */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.16) 100%)",
                          }}
                        />

                        {/* Chapter number badge */}
                        <div
                          className="absolute bottom-4 right-4 h-7 px-3 flex items-center rounded-full backdrop-blur-md"
                          style={{
                            background: "rgba(var(--bg-primary), 0.76)",
                            border: "1px solid rgba(var(--border-primary), 0.55)",
                          }}
                        >
                          <span className="text-[9px] font-bold tabular-nums text-[rgb(var(--text-primary))]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </motion.div>

                      {/* Text */}
                      <motion.div
                        className={`flex flex-col ${
                          imageLeft ? "lg:order-2" : "lg:order-1"
                        }`}
                        initial={{
                          opacity: 0,
                          x: imageLeft ? 28 : -28,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.14,
                          duration: 0.85,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true, margin: "-80px" }}
                      >
                        {/* Chapter label */}
                        <div className="flex items-center gap-4 mb-7">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-tertiary))]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div
                            className="w-8 h-[1px]"
                            style={{ background: "rgb(var(--border-primary))" }}
                          />
                        </div>

                        {/* Paragraph — Lora serif for a premium editorial feel */}
                        <p className="font-lora text-[1.05rem] md:text-[1.1rem] lg:text-[1.15rem] leading-[1.85] text-[rgb(var(--text-secondary))]">
                          {para}
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {/* ── Orphan image (no matching paragraph): cinematic full-width frame ── */}
                  {imageOnly && (
                    <motion.div
                      className="relative overflow-hidden rounded-2xl group"
                      initial={{ opacity: 0, y: 48, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, margin: "-80px" }}
                    >
                      <div
                        className="overflow-hidden"
                        style={{ aspectRatio: "21/9" }}
                      >
                        <img
                          src={src}
                          alt={`${project.title} — chapter ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      </div>

                      {/* Vignette */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.2) 100%)",
                        }}
                      />

                      {/* Chapter badge */}
                      <div
                        className="absolute bottom-5 right-6 h-7 px-3 flex items-center rounded-full backdrop-blur-md"
                        style={{
                          background: "rgba(var(--bg-primary), 0.76)",
                          border: "1px solid rgba(var(--border-primary), 0.55)",
                        }}
                      >
                        <span className="text-[9px] font-bold tabular-nums text-[rgb(var(--text-primary))]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* ── Orphan paragraph (no matching image): full-width prose ── */}
                  {!src && !!para && (
                    <motion.div
                      className="max-w-[60ch]"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      custom={0}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <div className="flex items-center gap-4 mb-7">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-tertiary))]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div
                          className="w-8 h-[1px]"
                          style={{ background: "rgb(var(--border-primary))" }}
                        />
                      </div>
                      <p className="font-lora text-[1.05rem] md:text-[1.1rem] leading-[1.85] text-[rgb(var(--text-secondary))]">
                        {para}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Outcomes ────────────────────────────────────────────────────────── */}
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

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
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

      {/* ── Tech stack ──────────────────────────────────────────────────────── */}
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

      {/* ── Other projects ──────────────────────────────────────────────────── */}
      <OtherProjects currentSlug={slug!} />

      <Footer />
    </div>
  );
};
