import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { BIO_PARAGRAPHS, FACTS, INTERESTS, PILLARS } from "../../../data/about";
import { fadeUp } from "../../../constants/animations";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[rgb(var(--bg-primary))] py-24 md:py-32 overflow-hidden"
    >
      <BackgroundLines />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        {/* ── Section header ── */}
        <motion.div
          className="flex items-center gap-6 mb-16 md:mb-20"
          {...fadeUp()}
        >
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
            About Me
          </span>
          <div
            className="flex-1 h-[1px]"
            style={{ background: "rgb(var(--border-primary))" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-14 xl:gap-24 mb-16 md:mb-20 items-start">
          <div>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-[rgb(var(--text-primary))] mb-10"
              style={{ maxWidth: "18ch" }}
              {...fadeUp(0)}
            >
              Disciplined engineer,{" "}
              <span className="text-[rgb(var(--text-tertiary))] font-light">
                curious by nature.
              </span>
            </motion.h2>

            <div className="space-y-5 max-w-[62ch]">
              {BIO_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  className="font-lora text-[1.05rem] leading-[1.85] text-[rgb(var(--text-secondary))]"
                  {...fadeUp(0.1 + i * 0.1)}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div className="flex flex-col gap-9 lg:pt-2" {...fadeUp(0.18)}>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
                Currently
              </span>
              <ul className="space-y-3.5">
                {FACTS.map(({ label, value }) => (
                  <li
                    key={label}
                    className="grid items-baseline gap-x-4 gap-y-0.5"
                    style={{ gridTemplateColumns: "72px 1fr" }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[rgb(var(--text-tertiary))]">
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-[rgb(var(--text-primary))]">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="h-[1px]"
              style={{ background: "rgb(var(--border-primary))" }}
            />

            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-5">
                Beyond the code
              </span>
              <ul className="space-y-2.5">
                {INTERESTS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "rgb(var(--text-tertiary))" }}
                    />
                    <span className="text-sm text-[rgb(var(--text-secondary))]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="h-[1px]"
              style={{ background: "rgb(var(--border-primary))" }}
            />

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--text-primary))] w-fit"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              Get in touch
              <ArrowRight size={14} strokeWidth={2.5} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          {...fadeUp(0.1)}
        >
          {PILLARS.map(({ label, text }, i) => (
            <motion.div
              key={label}
              className="flex flex-col gap-4 px-7 py-9 md:px-8 md:py-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgb(var(--text-tertiary))" }}
              >
                {label}
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgb(var(--text-secondary))" }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
