import { motion } from "framer-motion";
import React from "react";

interface TagProps {
  label: string;
  index: number;
}

export const Tag: React.FC<TagProps> = ({ label, index }) => {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark")
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.span
      className="relative px-4 py-2 text-xs font-semibold rounded-full overflow-hidden group cursor-default"
      style={{
        background: isDark
          ? "rgba(15, 20, 25, 0.08)"
          : "rgba(255, 255, 255, 0.7)",
        border: isDark
          ? "1px solid rgba(139, 92, 246, 0.12)"
          : "1px solid rgba(139, 92, 246, 0.08)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        background: isDark
          ? "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))"
          : "linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(59, 130, 246, 0.12))",
        borderColor: isDark
          ? "rgba(139, 92, 246, 0.25)"
          : "rgba(139, 92, 246, 0.15)",
      }}
    >
      {/* Subtle shine effect with purple/blue gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, rgba(var(--accent-purple-primary), 0.1), rgba(var(--accent-blue-primary), 0.1), transparent)`,
        }}
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      <span className="relative z-10">{label}</span>
    </motion.span>
  );
};
