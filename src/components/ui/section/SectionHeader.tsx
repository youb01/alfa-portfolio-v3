import { motion } from "framer-motion";

interface SectionHeaderProps {
  sectionNumber: string;
  title: string;
  titleAccent?: string; // Optional accent text
  subtitle?: string;
  showDivider?: boolean;
  className?: string;
}

export const SectionHeader = ({
  sectionNumber,
  title,
  titleAccent,
  subtitle,
  showDivider = true,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-8 md:mb-12 relative ${className}`}
    >
      {/* Section Label with decorative lines */}
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          style={{
            background: `linear-gradient(to right, transparent, rgb(var(--accent-purple-primary)))`,
          }}
          className="h-[2px] w-12 origin-right"
        />
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-[rgb(var(--accent-purple-primary))] to-[rgb(var(--accent-blue-primary))] bg-clip-text text-transparent">
          {sectionNumber}
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
          style={{
            background: `linear-gradient(to left, transparent, rgb(var(--accent-blue-primary)))`,
          }}
          className="h-[2px] w-12 origin-left"
        />
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
        <span className="text-[rgb(var(--text-primary))]">{title}</span>
        {titleAccent && (
          <>
            {" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[rgb(var(--accent-purple-primary))] to-[rgb(var(--accent-blue-primary))] bg-clip-text text-transparent">
                {titleAccent}
              </span>
              {/* Subtle glassmorphism effect on accent text */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left"
                style={{
                  background: `linear-gradient(to right, rgb(var(--accent-purple-primary)), rgb(var(--accent-blue-primary)))`,
                  opacity: 0.3,
                }}
              />
            </span>
          </>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-[rgb(var(--text-secondary))] max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Gradient Divider */}
      {showDivider && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-[1px] mt-6 md:mt-8 origin-left max-w-3xl"
          style={{
            background: `linear-gradient(to right, rgb(var(--accent-purple-primary)), rgb(var(--accent-blue-primary)), transparent)`,
          }}
        />
      )}
    </motion.div>
  );
};
