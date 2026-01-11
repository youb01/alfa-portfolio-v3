import { motion } from "framer-motion";
import React from "react";
import { ACCENT_COLORS, ANIMATION_TIMINGS } from "../../../constants/design_system";

export interface SectionHeaderProps {
  sectionNumber: string;
  title: string;
  titleAccent?: string; // Optional accent text
  subtitle?: string;
  showDivider?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionNumber,
  title,
  titleAccent,
  subtitle,
  showDivider = true,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_TIMINGS.slow, ease: ANIMATION_TIMINGS.custom }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative ${className}`}
    >
      {/* Section Number with Decorative Lines */}
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        {/* Left Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: ANIMATION_TIMINGS.custom,
          }}
          viewport={{ once: true }}
          className="h-[2px] w-12 origin-right"
          style={{
            background: ACCENT_COLORS.gradient.purpleToBlue,
          }}
        />

        {/* Section Number */}
        <motion.span
          className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: ANIMATION_TIMINGS.medium,
            delay: 0.2,
            ease: ANIMATION_TIMINGS.custom,
          }}
          viewport={{ once: true }}
        >
          <span
            className="relative z-10"
            style={{
              background: ACCENT_COLORS.gradient.purpleToBlue,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {sectionNumber}
          </span>
          
          {/* Hover glow effect */}
          <motion.span
            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              background: ACCENT_COLORS.gradient.purpleToBlue,
            }}
          />
        </motion.span>

        {/* Right Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: ANIMATION_TIMINGS.custom,
          }}
          viewport={{ once: true }}
          className="h-[2px] w-12 origin-left"
          style={{
            background: ACCENT_COLORS.gradient.purpleToBlue,
          }}
        />
      </div>

      {/* Main Heading */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_TIMINGS.slow,
          delay: 0.4,
          ease: ANIMATION_TIMINGS.custom,
        }}
        viewport={{ once: true }}
      >
        <span className="text-[rgb(var(--text-primary))]">{title}</span>
        {titleAccent && (
          <>
            {" "}
            <span
              className="relative inline-block"
              style={{
                background: ACCENT_COLORS.gradient.purpleToBlue,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {titleAccent}
              
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                style={{
                  background: ACCENT_COLORS.gradient.purpleToBlue,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: ANIMATION_TIMINGS.slow,
                  delay: 0.6,
                  ease: ANIMATION_TIMINGS.custom,
                }}
                viewport={{ once: true }}
              />
            </span>
          </>
        )}
      </motion.h2>

      {/* Subtitle/Description */}
      {subtitle && (
        <motion.p
          className="text-base md:text-lg lg:text-xl text-[rgb(var(--text-secondary))] max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_TIMINGS.medium,
            delay: 0.5,
            ease: ANIMATION_TIMINGS.custom,
          }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Gradient Underline Divider */}
      {showDivider && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.6,
            duration: ANIMATION_TIMINGS.slow,
            ease: ANIMATION_TIMINGS.custom,
          }}
          viewport={{ once: true }}
          className="h-[2px] mt-8 md:mt-12 origin-left max-w-3xl rounded-full relative overflow-hidden"
          style={{
            background: "linear-gradient(90deg, rgb(var(--accent-purple-primary)), rgb(var(--accent-blue-primary)), transparent)",
          }}
        >
          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
