import { motion } from "framer-motion";
import React from "react";
import { SkillsGrid } from "../../ui/skills/SkillsGrid";

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[rgb(var(--bg-primary))]"
      style={{ overflowX: "clip" }}
    >
      {/* ── Section header ───────────────────────────────────────────── */}
      <div className="relative z-20 bg-[rgb(var(--bg-primary))] pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 relative"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[rgb(var(--border-hover))] origin-right"
              />
              <span className="text-xs md:text-sm font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.3em]">
                02
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[rgb(var(--border-hover))] origin-left"
              />
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-[rgb(var(--text-primary))]">Skills </span>
              <span className="text-[rgb(var(--text-tertiary))]">
                and Experience
              </span>
            </h2>

            {/* Subtitle */}
            <motion.p
              className="mt-5 text-base md:text-lg text-[rgb(var(--text-secondary))] max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              Technical expertise meets human-centred thinking — from pixels
              to production, and everything in between.
            </motion.p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-[rgb(var(--border-primary))] via-[rgb(var(--border-hover))] to-transparent origin-left max-w-3xl"
          />
        </div>
      </div>

      {/* ── Filterable skills grid ────────────────────────────────────── */}
      <SkillsGrid />
    </section>
  );
};
