import { motion } from "framer-motion";

interface TaglinePart {
  text: string;
  normal?: boolean;
  highlighted?: boolean;
}

interface TaglineProps {
  parts: readonly TaglinePart[];
  className?: string;
}

export const Tagline = ({ parts, className = "" }: TaglineProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: true }}
      className={`text-lg sm:text-xl md:text-2xl text-[rgb(var(--text-secondary))] font-light leading-relaxed ${className}`}
    >
      {parts.map((part, index) => (
        <span
          key={index}
          className={
            part.highlighted
              ? "text-[rgb(var(--text-primary))] font-medium"
              : ""
          }
        >
          {part.text}
        </span>
      ))}
    </motion.p>
  );
};
