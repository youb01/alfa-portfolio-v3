import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../../sections/data/SkillsData";
import type { SkillCategory } from "../../sections/data/SkillsData";
import { SkillCard } from "./SkillCard";

type FilterTab = "all" | SkillCategory;

interface Tab {
  id: FilterTab;
  label: string;
}

const TABS: Tab[] = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "soft", label: "Soft Skills" },
];

const getCategoryCount = (cat: FilterTab): number =>
  cat === "all"
    ? skillsData.length
    : skillsData.filter((s) => s.category === cat).length;

export const SkillsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <div className="pb-24 lg:pb-40 relative">
      {/* Subtle depth orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-[10%] w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "rgb(var(--text-primary) / 0.022)" }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[10%] w-[420px] h-[420px] rounded-full blur-[110px]"
          style={{ background: "rgb(var(--text-secondary) / 0.018)" }}
          animate={{ scale: [1.25, 1, 1.25], opacity: [1, 0.5, 1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* ── Filter tabs ────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 mb-12 md:mb-16">
        <div
          className="inline-flex items-center gap-1.5 p-1.5 rounded-full"
          style={{
            background: "rgb(var(--bg-tertiary))",
            border: "1px solid rgb(var(--border-primary))",
          }}
          role="tablist"
          aria-label="Filter skills by category"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = getCategoryCount(tab.id);

            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 outline-none"
              >
                {/* Sliding active pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgb(var(--text-primary))" }}
                    transition={{
                      type: "spring",
                      bounce: 0.18,
                      duration: 0.48,
                    }}
                  />
                )}

                <span
                  className="relative z-10 transition-colors duration-200 whitespace-nowrap"
                  style={{
                    color: isActive
                      ? "rgb(var(--bg-primary))"
                      : "rgb(var(--text-secondary))",
                  }}
                >
                  {tab.label}
                </span>

                {/* Count badge */}
                <span
                  className="relative z-10 flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: isActive
                      ? "rgb(var(--bg-primary) / 0.2)"
                      : "rgb(var(--bg-elevated))",
                    color: isActive
                      ? "rgb(var(--bg-primary))"
                      : "rgb(var(--text-tertiary))",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            className="mt-5 text-sm font-medium"
            style={{ color: "rgb(var(--text-tertiary))" }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {filteredSkills.length === skillsData.length
              ? `Showing all ${filteredSkills.length} skills`
              : `${filteredSkills.length} skill${filteredSkills.length !== 1 ? "s" : ""} in this category`}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Cards grid ─────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -10 }}
                transition={{
                  duration: 0.38,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1] as [
                    number,
                    number,
                    number,
                    number,
                  ],
                }}
                className="min-h-[460px] lg:min-h-[500px]"
              >
                <SkillCard skill={skill} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
