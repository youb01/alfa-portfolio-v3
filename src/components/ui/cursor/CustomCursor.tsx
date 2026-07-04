import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";

/* Concrete RGB values — never use CSS variable syntax in Framer Motion animate props */
const COLORS = {
  light: "rgb(17, 17, 17)",
  dark:  "rgb(245, 245, 247)",
};

export const CustomCursor = () => {
  const { theme } = useTheme();
  const color = theme === "dark" ? COLORS.dark : COLORS.light;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible]   = useState(false);

  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button") || t.classList.contains("cursor-hover") || t.closest(".cursor-hover")) {
        setIsHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button") || t.classList.contains("cursor-hover") || t.closest(".cursor-hover")) {
        setIsHovering(false);
      }
    };

    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="hidden md:block pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{
          scale:   isHovering ? 2.2 : 1,
          opacity: isVisible  ? (isHovering ? 0.22 : 0.75) : 0,
        }}
        transition={{
          type:      "spring",
          stiffness: 500,
          damping:   28,
          mass:      0.5,
        }}
        style={{
          width:           16,
          height:          16,
          borderRadius:    "50%",
          backgroundColor: color,
          mixBlendMode:    "difference",
          willChange:      "transform, opacity",
        }}
      />
    </motion.div>
  );
};
