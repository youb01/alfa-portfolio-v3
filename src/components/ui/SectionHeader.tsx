import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  titleMuted: string;
  subtitle?: string;
}

/**
 * Shared section header.
 *
 * Visual anatomy (left-aligned, editorial):
 *
 *   01                    ← tiny muted index label
 *   ──────────────────    ← full-width animated hairline rule
 *   Skills                ← dominant heading — primary weight
 *   and Experience        ← heading continued — tertiary weight
 *
 *   Optional subtitle     ← secondary body text
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
      {/* ── Index label ──────────────────────────────────────────────────── */}
      <motion.span
        className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {number}
      </motion.span>

      {/* ── Hairline rule — animates in from left ────────────────────────── */}
      <motion.div
        className="h-[1px] w-full origin-left mb-10"
        style={{ background: "rgb(var(--border-secondary))" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      />

      {/* ── Heading ──────────────────────────────────────────────────────── */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        <span className="text-[rgb(var(--text-primary))]">{title} </span>
        <span className="text-[rgb(var(--text-tertiary))]">{titleMuted}</span>
      </h2>

      {/* ── Subtitle ─────────────────────────────────────────────────────── */}
      {subtitle && (
        <motion.p
          className="mt-5 text-base md:text-lg text-[rgb(var(--text-secondary))] max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
