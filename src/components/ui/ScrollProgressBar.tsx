import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

/**
 * A 2 px hairline at the very top of the viewport that fills left→right
 * as the user scrolls the page. Drop it anywhere inside the page tree.
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9999] pointer-events-none"
      style={{
        scaleX,
        background: "rgb(var(--text-primary))",
        opacity: 0.7,
      }}
    />
  );
};
