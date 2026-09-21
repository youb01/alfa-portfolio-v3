import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-9 h-9 text-[rgb(var(--text-primary))] transition-colors duration-150 focus:outline-none"
      style={{ border: "1px solid rgb(var(--border-primary))", background: "rgb(var(--bg-primary))" }}
      whileHover={{ borderColor: "rgb(var(--text-primary))" }}
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
