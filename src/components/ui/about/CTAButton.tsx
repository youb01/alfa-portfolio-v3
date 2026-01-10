import { motion } from "framer-motion";

interface CTAButtonProps {
  text: string;
  href: string;
  showArrow?: boolean;
}

export const CTAButton = ({ text, href, showArrow = true }: CTAButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-20"
    >
      <motion.a
        href={href}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-medium text-[rgb(var(--text-inverse))] bg-[rgb(var(--interactive-default))] hover:bg-[rgb(var(--interactive-hover))] rounded-full transition-all duration-300 overflow-hidden shadow-elevation-medium hover:shadow-elevation-high"
      >
        {/* Button glow effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0.2 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-white rounded-full"
        />

        <span className="relative z-10">{text}</span>

        {/* Arrow icon */}
        {showArrow && (
          <motion.svg
            className="relative z-10 ml-2 w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        )}
      </motion.a>
    </motion.div>
  );
};
