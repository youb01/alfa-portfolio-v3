import { motion } from "framer-motion";
import type { SocialLink } from "../../types";
import { useState } from "react";

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-center gap-6 md:gap-8">
      {links.map((link, index) => (
        <motion.div key={link.label} className="relative">
          <motion.a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.08 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-200 group"
            aria-label={link.label}
          >
            {/* Background circle on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-bg-tertiary"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredIndex === index ? 1 : 0,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Outer circle border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-border-primary"
              animate={{
                borderColor:
                  hoveredIndex === index
                    ? "rgb(var(--border-hover))"
                    : "rgb(var(--border-primary))",
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Icon */}
            <motion.span
              className="relative z-10 text-lg md:text-xl"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {link.icon}
            </motion.span>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};
