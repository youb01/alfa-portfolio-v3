import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const PANELS  = 12;
const LETTERS = ["A", "L", "F", "A"] as const;
const EASE_IN:  [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];
const DURATION = 2200;
const YEAR = new Date().getFullYear();

const wrapperVariants = {
  show: {},
  hide: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

const panelVariants = {
  show: { y: "0%" },
  hide: { y: "-102%", transition: { duration: 1.0, ease: EASE_OUT } },
};

const CORNERS = [
  { cls: "top-7 left-7",     rotate: "0deg"   },
  { cls: "top-7 right-7",    rotate: "90deg"  },
  { cls: "bottom-7 right-7", rotate: "180deg" },
  { cls: "bottom-7 left-7",  rotate: "270deg" },
] as const;

const CornerMark = ({ cls, rotate }: { cls: string; rotate: string }) => (
  <motion.div
    className={`absolute ${cls} w-6 h-6`}
    style={{ transform: `rotate(${rotate})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4 }}
    transition={{ delay: 0.35, duration: 0.5 }}
  >
    <div className="absolute top-0 left-0 w-full h-px" style={{ background: "rgb(var(--text-tertiary))" }} />
    <div className="absolute top-0 left-0 h-full w-px" style={{ background: "rgb(var(--text-tertiary))" }} />
  </motion.div>
);

export const Preloader = ({ isLoading, onComplete }: PreloaderProps) => {
  /*
   * Progress bar fill and counter text are driven via direct DOM refs.
   * Zero React re-renders per animation frame — all composited on the GPU.
   */
  const fillRef    = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isLoading) return;

    let raf: number;
    let startTime: number | null = null;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / DURATION, 1);

      if (fillRef.current)    fillRef.current.style.transform = `scaleX(${p})`;
      if (counterRef.current) counterRef.current.textContent  = `${Math.round(p * 100).toString().padStart(3, "0")}%`;

      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    const t = setTimeout(onComplete, DURATION + 100);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          variants={wrapperVariants}
          initial="show"
          animate="show"
          exit="hide"
        >
          {/* Staggered vertical panels — slide up on exit */}
          {Array.from({ length: PANELS }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 bg-[rgb(var(--bg-secondary))]"
              style={{
                left:       `${(i / PANELS) * 100}%`,
                width:      `${100 / PANELS + 0.25}%`,
                willChange: "transform",
              }}
              variants={panelVariants}
            />
          ))}

          {/* Content layer — fades out before panels start */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
          >
            {/* Dot-grid texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, rgb(var(--text-tertiary)) 1px, transparent 1px)",
                backgroundSize:  "44px 44px",
                opacity:         0.07,
              }}
            />

            {/* Corner marks */}
            {CORNERS.map(({ cls, rotate }, i) => (
              <CornerMark key={i} cls={cls} rotate={rotate} />
            ))}

            {/* Top rule */}
            <motion.div
              className="absolute top-[72px] left-12 right-12 h-px"
              style={{ background: "rgb(var(--border-primary))", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: EASE_IN }}
            />

            {/* Bottom rule */}
            <motion.div
              className="absolute bottom-[72px] left-12 right-12 h-px"
              style={{ background: "rgb(var(--border-primary))", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: EASE_IN }}
            />

            {/* Top label row */}
            <motion.div
              className="absolute top-8 left-12 right-12 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: "rgb(var(--text-tertiary))" }}>
                Ayoub Lfatmi
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: "rgb(var(--text-tertiary))" }}>
                {YEAR}
              </span>
            </motion.div>

            {/* Center wordmark */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex flex-col items-start">

                {/* Letters clip up */}
                <div className="flex items-baseline">
                  {LETTERS.map((letter, i) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.08 + i * 0.09, duration: 0.78, ease: EASE_IN }}
                        className="block font-black tracking-tighter leading-none select-none"
                        style={{
                          fontSize:   "clamp(4.5rem, 14vw, 10rem)",
                          color:      "rgb(var(--text-primary))",
                          willChange: "transform",
                        }}
                      >
                        {letter}
                      </motion.span>
                    </div>
                  ))}
                </div>

                {/* Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.58, duration: 0.5, ease: EASE_IN }}
                  style={{ transformOrigin: "left", height: "1px", width: "100%", background: "rgb(var(--text-primary))" }}
                />

                {/* Descriptor row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.4 }}
                  className="mt-3 flex w-full items-center justify-between"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: "rgb(var(--text-tertiary))" }}>
                    Portfolio
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: "rgb(var(--text-tertiary))" }}>
                    Software Engineer
                  </span>
                </motion.div>

              </div>
            </div>

            {/* Progress bar + counter */}
            <motion.div
              className="absolute bottom-8 left-12 right-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: "rgb(var(--text-tertiary))" }}>
                  Loading
                </span>
                <span ref={counterRef} className="text-[9px] font-bold tabular-nums" style={{ color: "rgb(var(--text-tertiary))" }}>
                  000%
                </span>
              </div>

              {/* Track */}
              <div className="relative h-px w-full overflow-hidden" style={{ background: "rgb(var(--border-primary))" }}>
                {/* Fill — scaleX via DOM ref, GPU composited, no re-renders */}
                <div
                  ref={fillRef}
                  className="absolute inset-0"
                  style={{
                    background:      "rgb(var(--text-primary))",
                    transform:       "scaleX(0)",
                    transformOrigin: "left",
                    willChange:      "transform",
                  }}
                />
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
