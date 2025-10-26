import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle theme"
      className="
        relative flex items-center justify-center
        w-10 h-10 rounded-lg
        bg-[rgb(var(--bg-tertiary))]
        hover:bg-[rgb(var(--bg-elevated))]
        text-[rgb(var(--text-primary))]
        transition-colors duration-200
        focus:outline-none
        focus-visible:ring-2 
        focus-visible:ring-[rgb(var(--interactive-default)/0.3)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[rgb(var(--bg-primary))]
      "
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative w-5 h-5 flex items-center justify-center"
      >
        <motion.div
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Moon className="w-5 h-5" strokeWidth={2} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Sun className="w-5 h-5" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
