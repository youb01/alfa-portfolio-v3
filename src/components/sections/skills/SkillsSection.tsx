import { motion } from "framer-motion";
import { skillsData } from "../../../data/skills";
import { SkillCard } from "./SkillCard";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden 
        bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
    >
      {/* Background lines for depth */}
      <BackgroundLines />

      {/* Section Header */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 mb-12 md:mb-16">
        <div className="flex flex-col items-start">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 md:mb-12 relative"
          >
            <div className="flex items-center gap-4">
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
                Expertise
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
                className="h-[2px] flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-[rgb(var(--border-hover))] origin-left"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold 
              text-text-primary font-serif mb-4"
          >
            Skills and Tools
          </motion.h2>

          {/* Animated gradient line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="h-1 w-full max-w-md origin-left rounded-full"
            style={{
              background: `linear-gradient(90deg, 
                rgb(var(--border-hover)) 0%, 
                rgb(var(--border-primary)) 100%)`,
            }}
          />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative z-10 w-full">
        {/* Scroll indicator hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="px-6 md:px-8 lg:px-12 xl:px-16 mb-8 flex items-center gap-3 text-text-tertiary text-sm"
        >
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
          <span className="hidden sm:inline">Scroll to explore</span>
          <span className="sm:hidden">Swipe to explore</span>
        </motion.div>

        {/* Cards container with horizontal scroll */}
        <div
          className="overflow-x-auto overflow-y-hidden scrollbar-hide 
            px-6 md:px-8 lg:px-12 xl:px-16 pb-8"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x proximity",
          }}
        >
          <div className="flex gap-6 md:gap-8 lg:gap-10 pb-4">
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                style={{ scrollSnapAlign: "start" }}
              >
                <SkillCard skill={skill} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
