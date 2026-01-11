import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skillsData } from "../../sections/data/SkillsData";
import { SkillCard } from "./SkillCard";
import { ACCENT_COLORS } from "../../../constants/design_system";

export const HorizontalScrollContainer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollLength, setScrollLength] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!trackRef.current) return;

    const update = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;
      const difference = totalWidth - viewport;

      setScrollLength(Math.max(difference, 0));
    };

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollLength]);

  // Mobile: vertical scroll
  if (isMobile) {
    return (
      <section className="relative py-12 px-6">
        {/* Purple/Blue ambient gradient background for mobile */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: ACCENT_COLORS.purple.primaryRgba(0.3) }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: ACCENT_COLORS.blue.primaryRgba(0.3) }}
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="flex flex-col gap-8 max-w-2xl mx-auto relative z-10">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </section>
    );
  }

  // Desktop: horizontal scroll with progress indicator
  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100vh + ${scrollLength}px)` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Purple/Blue animated background gradients */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ background: ACCENT_COLORS.purple.primaryRgba(0.4) }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: ACCENT_COLORS.blue.primaryRgba(0.4) }}
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_COLORS.purple.secondaryRgba(0.3)}, ${ACCENT_COLORS.blue.secondaryRgba(0.3)})`,
            }}
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        {/* Cards container */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-8 lg:gap-12 px-12 lg:px-24 will-change-transform relative z-10"
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-24" />
        </motion.div>
      </div>
    </section>
  );
};
