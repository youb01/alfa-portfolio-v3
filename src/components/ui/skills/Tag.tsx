import { motion } from "framer-motion";
import React from "react";
import { ACCENT_COLORS, ANIMATION_TIMINGS } from "../../../constants/design_system";

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
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.04)",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.08)",
        backdropFilter: "blur(10px) saturate(150%)",
      }}
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: ANIMATION_TIMINGS.custom,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        transition: { duration: ANIMATION_TIMINGS.fast },
      }}
    >
      {/* Purple/Blue gradient glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: ACCENT_COLORS.gradient.purpleToBlueSoft,
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${ACCENT_COLORS.purple.primaryRgba(0.3)}, ${ACCENT_COLORS.blue.primaryRgba(0.3)}, transparent)`,
        }}
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      <span className="relative z-10">{label}</span>
    </motion.span>
  );
};
