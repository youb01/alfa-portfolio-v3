import React from "react";
import { motion } from "framer-motion";
import { skillRows } from "../../sections/data/SkillsData";
import { getTechIcon } from "./techIconMap";

export const SkillsGrid: React.FC = () => {
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

  const sep = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <div className="pb-24 lg:pb-40 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      {skillRows.map((row, i) => (
        <React.Fragment key={row.id}>
          {/* Animated separator */}
          <motion.div
            className="h-[1px] origin-left"
            style={{ background: sep }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-16 py-10 md:py-14">
            {/* Left: number · category · tagline */}
            <motion.div
              className="flex flex-col gap-1.5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                className="text-[10px] font-black uppercase tracking-[0.35em]"
                style={{
                  color: isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)",
                }}
              >
                {row.number}
              </span>
              <h3
                className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none mt-1"
                style={{
                  color: isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.88)",
                }}
              >
                {row.category}
              </h3>
              <p
                className="text-sm leading-relaxed mt-2"
                style={{
                  color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.38)",
                }}
              >
                {row.tagline}
              </p>
            </motion.div>

            {/* Right: tool badges */}
            <div className="flex flex-wrap content-center gap-2">
              {row.tools.map((tool, j) => {
                const IconComp = getTechIcon(tool);
                return (
                  <motion.span
                    key={tool}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide cursor-default"
                    style={{
                      color: isDark
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(0,0,0,0.58)",
                      background: isDark
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(0,0,0,0.03)",
                      border: `1px solid ${
                        isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"
                      }`,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + j * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      background: isDark
                        ? "rgba(255,255,255,0.09)"
                        : "rgba(0,0,0,0.07)",
                      color: isDark
                        ? "rgba(255,255,255,0.88)"
                        : "rgba(0,0,0,0.8)",
                    }}
                  >
                    {IconComp && (
                      <IconComp
                        size={11}
                        style={{ flexShrink: 0, opacity: 0.7 }}
                      />
                    )}
                    {tool}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Bottom separator */}
      <motion.div
        className="h-[1px] origin-left"
        style={{ background: sep }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};
