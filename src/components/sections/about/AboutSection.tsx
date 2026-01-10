import { motion } from "framer-motion";
import { AnimatedHeading } from "../../ui/about/AnimatedHeading";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { AmbientOverlay } from "../../ui/backgrounds/AmbientOverlay";
import { CTAButton } from "../../ui/about/CTAButton";
import { HighlightCard } from "../../ui/about/HighlightCardProps";
import { Tagline } from "../../ui/about/Tagline";
import { aboutData } from "../data/AboutData";

export const AboutSection = () => {
  const { meta, content, highlights, cta } = aboutData;

  return (
    <section
      id={meta.id}
      className="relative h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))]"
    >
      {/* Background lines for depth */}
      <BackgroundLines />
      <AmbientOverlay variant="about" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 md:mb-16 relative"
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
                {meta.label}
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
          </motion.div>

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[950px] text-center mb-20 md:mb-24"
          >
            <AnimatedHeading parts={content.heading.parts} />
            <div className="mt-8">
              <Tagline parts={content.tagline.parts} />
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1200px] mb-20 md:mb-24"
          >
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.id}
                icon={highlight.icon}
                iconSize={highlight.iconSize}
                title={highlight.title}
                description={highlight.description}
                index={index}
              />
            ))}
          </motion.div>

          {/* CTA Button */}
          <CTAButton
            text={cta.text}
            href={cta.href}
            showArrow={cta.showArrow}
          />

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-[rgb(var(--border-secondary))] rounded-full flex items-start justify-center p-2 cursor-hover"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-[rgb(var(--text-tertiary))] rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
