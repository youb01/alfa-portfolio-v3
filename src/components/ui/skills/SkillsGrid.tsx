import { motion } from "framer-motion";
import React from "react";
import { skillRows } from "../../../data/skills";
import { SkillRow } from "./SkillRow";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const totalTools = skillRows.reduce((acc, r) => acc + r.tools.length, 0);

const STATS = [
  { value: `${skillRows.length}`, label: "Categories" },
  { value: `${totalTools}+`, label: "Tools & technologies" },
  { value: "4+", label: "Years of experience" },
];

export const SkillsGrid: React.FC = () => {
  return (
    <div className="pb-24 lg:pb-40 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">

      {/* ── Stats strip ── */}
      <motion.div
        className="flex flex-wrap items-center gap-x-10 gap-y-6 pb-14 md:pb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {STATS.map(({ value, label }, i) => (
          <React.Fragment key={label}>
            <div className="flex flex-col gap-1">
              <span
                className="text-3xl md:text-4xl font-black tracking-tight leading-none"
                style={{ color: "rgb(var(--text-primary))" }}
              >
                {value}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgb(var(--text-tertiary))" }}
              >
                {label}
              </span>
            </div>
            {i < STATS.length - 1 && (
              <div
                className="hidden sm:block w-px h-8 self-center"
                style={{ background: "rgb(var(--border-primary))" }}
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* ── Skill rows ── */}
      {skillRows.map((row) => (
        <React.Fragment key={row.id}>
          <Separator />
          <SkillRow row={row} />
        </React.Fragment>
      ))}
      <Separator />

    </div>
  );
};

const Separator: React.FC = () => (
  <motion.div
    className="h-px origin-left bg-[rgb(var(--border-primary))]"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: EASE }}
  />
);
