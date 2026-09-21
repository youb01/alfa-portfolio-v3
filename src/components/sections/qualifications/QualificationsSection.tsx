import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { timelineEvents } from "../../../data/qualifications";
import { SectionHeader } from "../../ui/SectionHeader";
import { TimelineItem } from "../../ui/timeline/TimelineItem";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Filter = "education" | "work";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "education",  label: "Education"        },
  { key: "work",       label: "Work Experience"  },
];

export const QualificationsSection: React.FC = () => {
  const [active, setActive] = useState<Filter>("work");

  const filtered = timelineEvents.filter((e) => e.type === active);

  return (
    <section id="qualifications" className="relative bg-[rgb(var(--bg-primary))] overflow-hidden">
      <BackgroundLines />

      {/* ── Section header ── */}
      <div className="relative z-10 pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            number="03"
            title="Qualifications"
            titleMuted="and Experience"
            subtitle="A timeline of study, work, and the things that shaped how I build."
          />
        </div>
      </div>

      {/* ── Filter chips + list ── */}
      <div className="relative z-10 pb-28 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">

          {/* Filter row */}
          <div className="flex items-center gap-2 mb-10">
            {FILTERS.map(({ key, label }) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2 transition-colors duration-200"
                  style={{
                    border:     "1px solid rgb(var(--border-primary))",
                    background: isActive ? "rgb(var(--text-primary))" : "transparent",
                    color:      isActive ? "rgb(var(--bg-primary))"   : "rgb(var(--text-tertiary))",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {filtered.map((event, i) => (
                <TimelineItem key={event.id} event={event} index={i} />
              ))}
              <div className="h-px bg-[rgb(var(--border-primary))]" />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
