import { motion } from "framer-motion";
import React from "react";
import { HorizontalScrollContainer } from "../../ui/skills/SkillsCarousel";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative bg-[rgb(var(--bg-primary))]" style={{ overflowX: "clip" }}>
      {/* Section Header - Fixed */}
      <div className="relative z-20 bg-[rgb(var(--bg-primary))] pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 relative"
          >
            {/* Section Label */}
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

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-[rgb(var(--text-primary))]">Skills </span>
              <span className="text-[rgb(var(--text-tertiary))]">
                and Tools
              </span>
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-border-primary via-border-hover to-transparent origin-left max-w-3xl"
          />
        </div>

        {/* Scroll Indicator - Only on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:flex absolute bottom-4 right-6 md:right-8 lg:right-12 xl:right-16 items-center gap-3 text-text-tertiary text-sm font-medium"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-5 h-8 border-2 border-current rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <HorizontalScrollContainer />
    </section>
  );
};
