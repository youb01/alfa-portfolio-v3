import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

interface MenuToggleProps {
  isVisible: boolean;
  onClick: () => void;
}

export const MenuToggle = ({ isVisible, onClick }: MenuToggleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          }}
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open menu"
          className="
            fixed top-6 right-6 md:top-8 md:right-8 z-[1030]
            w-14 h-14 md:w-16 md:h-16 rounded-full 
            bg-[rgb(var(--bg-elevated))]
            hover:bg-[rgb(var(--bg-tertiary))]
            text-[rgb(var(--text-primary))]
            shadow-[0_4px_16px_rgb(var(--shadow-color)/0.15)]
            hover:shadow-[0_8px_28px_rgb(var(--shadow-color)/0.2)]
            border-2 border-[rgb(var(--border-primary))]
            hover:border-[rgb(var(--border-hover))]
            transition-all duration-200
            flex items-center justify-center
            focus:outline-none
            focus-visible:ring-2 
            focus-visible:ring-[rgb(var(--interactive-default)/0.4)]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[rgb(var(--bg-primary))]
          "
        >
          <motion.div
            animate={{
              rotate: isHovered ? 90 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <Menu className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
