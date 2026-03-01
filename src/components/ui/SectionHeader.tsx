import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  titleMuted: string;
  subtitle?: string;
}

/**
 * Shared section header used across Skills, Projects, and any future section.
 * Uses CSS custom properties so it is theme-reactive without any JS observer.
 *
 * Visual anatomy:
 *   ─────  [ 02 ]  ─────          ← animated lines + bordered chip
 *   Skills and Experience          ← bold primary + muted secondary
 *   Optional subtitle paragraph
 *   ─────────────────────          ← animated bottom divider
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  titleMuted,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-8"
    >
      {/* ── Number indicator ─────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-8">
        {/* Left line */}
        <motion.div
          className="h-[1px] w-10 origin-right"
          style={{
            background:
              "linear-gradient(to left, rgb(var(--border-hover)), transparent)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        />

        {/* Number chip — bordered pill, bold weight, tight tracking */}
        <motion.span
          className="text-[10px] font-black tracking-[0.08em] px-2.5 py-[5px] rounded
                     text-[rgb(var(--text-tertiary))]
                     border border-[rgb(var(--border-secondary))]"
          style={{ background: "rgb(var(--bg-secondary))" }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>

        {/* Right line */}
        <motion.div
          className="h-[1px] w-10 origin-left"
          style={{
            background:
              "linear-gradient(to right, rgb(var(--border-hover)), transparent)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        />
      </div>

      {/* ── Heading ──────────────────────────────────────────────────────── */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        <span className="text-[rgb(var(--text-primary))]">{title} </span>
        <span className="text-[rgb(var(--text-tertiary))]">{titleMuted}</span>
      </h2>

      {/* ── Subtitle ─────────────────────────────────────────────────────── */}
      {subtitle && (
        <motion.p
          className="mt-5 text-base md:text-lg text-[rgb(var(--text-secondary))] max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
