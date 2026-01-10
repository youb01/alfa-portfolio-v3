import { motion } from "framer-motion";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SkillCard } from "./SkillCard";
import { skillsData } from "../../../data/skills";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
        bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
    >
      {/* Background lines for depth */}
      <BackgroundLines />

      {/* Content container */}
      <div className="relative z-10 w-full">
        {/* Section heading */}
        <div className="px-6 md:px-8 lg:px-12 xl:px-16 mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[1400px] mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif
                text-[rgb(var(--text-primary))] mb-4 md:mb-6"
            >
              Skills and Tools
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-lg md:text-xl lg:text-2xl font-serif text-[rgb(var(--text-secondary))]
                max-w-3xl"
            >
              Explore my technical expertise across various domains of software development
              and design.
            </motion.p>
          </motion.div>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div
            className="flex gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-6 md:px-8 lg:px-12 xl:px-16
              overflow-x-auto scrollbar-hide pb-8 scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {skillsData.map((category, index) => (
              <div key={category.id} className="snap-center">
                <SkillCard category={category} index={index} />
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-12 md:mt-16 gap-4"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 text-[rgb(var(--text-tertiary))]"
            >
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">
                Scroll to explore
              </span>
              <motion.div
                className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-[rgb(var(--border-hover))] to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
