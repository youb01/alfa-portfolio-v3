import { motion } from "framer-motion";
import type { Project } from "../../../data/projects";
import type { ProjectDetail } from "../../../data/projectDetails";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BORDER = "1px solid rgb(var(--border-primary))";

interface CaseStudyProps {
  project: Project;
  detail:  ProjectDetail;
}

export const CaseStudy = ({ project, detail }: CaseStudyProps) => {
  const { title, body, images } = detail.caseStudy;

  /* First image is featured (full-width hero), rest go into the grid */
  const [featured, ...gridImages] = images;

  return (
    <section className="py-20 md:py-28" style={{ borderTop: BORDER }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
              Case Study
            </span>
            <div className="flex-1 h-px" style={{ background: "rgb(var(--border-primary))" }} />
            <span className="shrink-0 text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))]">
              {String(body.length).padStart(2, "0")} {body.length === 1 ? "Chapter" : "Chapters"}
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-[rgb(var(--text-primary))]"
            style={{ maxWidth: "26ch" }}
          >
            {title}
          </h2>
        </motion.div>

        {/* ── Narrative — two-column magazine flow ─────────── */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* "The Process" label */}
          <div className="flex items-center gap-5 mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
              The Process
            </span>
            <div className="w-8 h-px" style={{ background: "rgb(var(--border-primary))" }} />
          </div>

          {/* Flowing two-column text — unified, no boxes */}
          <div className="columns-1 md:columns-2 gap-x-12 lg:gap-x-16 xl:gap-x-20">
            {body.map((para, i) => (
              <p
                key={i}
                className="mb-7 last:mb-0 break-inside-avoid font-lora text-[1.0rem] md:text-[1.05rem] leading-[1.9] text-[rgb(var(--text-secondary))]"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* ── Visual Gallery ───────────────────────────────── */}
        {images.length > 0 && (
          <div style={{ borderTop: BORDER }}>

            {/* Gallery label */}
            <motion.div
              className="flex items-center gap-6 py-10 md:py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
                Visual Reference
              </span>
              <div className="flex-1 h-px" style={{ background: "rgb(var(--border-primary))" }} />
              <span className="shrink-0 text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))]">
                {String(images.length).padStart(2, "0")} {images.length === 1 ? "Image" : "Images"}
              </span>
            </motion.div>

            {/* Featured image — full width */}
            {featured && (
              <motion.div
                className="relative overflow-hidden rounded-2xl group mb-3 md:mb-4"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, ease: EASE }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={featured}
                    alt={`${project.title} — visual 01`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.2) 100%)" }}
                />
                <span
                  className="absolute bottom-4 left-5 h-6 px-2.5 flex items-center rounded-full text-[9px] font-bold tabular-nums backdrop-blur-md"
                  style={{
                    background: "rgba(var(--bg-primary), 0.72)",
                    border:     "1px solid rgba(var(--border-primary), 0.5)",
                    color:      "rgb(var(--text-primary))",
                  }}
                >
                  01
                </span>
              </motion.div>
            )}

            {/* Remaining images — 2-col grid, last spans full if odd */}
            {gridImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {gridImages.map((src, i) => {
                  const idx        = i + 2; // display number (featured was 01)
                  const isLastOdd  = gridImages.length % 2 === 1 && i === gridImages.length - 1;

                  return (
                    <motion.div
                      key={idx}
                      className={`relative overflow-hidden rounded-2xl group ${
                        isLastOdd ? "sm:col-span-2" : ""
                      }`}
                      initial={{ opacity: 0, y: 24, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: i * 0.07, duration: 0.85, ease: EASE }}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <div
                        className="overflow-hidden"
                        style={{ aspectRatio: isLastOdd ? "21/9" : "4/3" }}
                      >
                        <img
                          src={src}
                          alt={`${project.title} — visual ${String(idx).padStart(2, "0")}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      </div>
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.2) 100%)" }}
                      />
                      <span
                        className="absolute bottom-4 left-5 h-6 px-2.5 flex items-center rounded-full text-[9px] font-bold tabular-nums backdrop-blur-md"
                        style={{
                          background: "rgba(var(--bg-primary), 0.72)",
                          border:     "1px solid rgba(var(--border-primary), 0.5)",
                          color:      "rgb(var(--text-primary))",
                        }}
                      >
                        {String(idx).padStart(2, "0")}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
