import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-10 h-10 transition-colors duration-150"
          style={{
            background: "rgb(var(--bg-primary))",
            border: "1px solid rgb(var(--border-primary))",
            color: "rgb(var(--text-primary))",
          }}
          whileHover={{ borderColor: "rgb(var(--text-primary))" }}
        >
          <ArrowUp size={14} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
