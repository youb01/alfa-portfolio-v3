import { Fragment, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../hooks/useTheme";

// ─── Types ───────────────────────────────────────────────────────────────────

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

// ─── Config ──────────────────────────────────────────────────────────────────

const EXIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const TOTAL_MS      = 4800;
const CORD_PULL_MS  = 800;
const LAMP_DELAY_MS = 2000;
const LAMP_MS       = 2200;

const LINE_COLS = [
  { left: "3%",  pair: false },
  { left: "18%", pair: true  },
  { left: "33%", pair: true  },
  { left: "50%", pair: true  },
  { left: "67%", pair: true  },
  { left: "82%", pair: true  },
  { left: "97%", pair: false },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const anim = (name: string, ms: number, delayMs: number, easing = "ease-out forwards") =>
  `${name} ${ms}ms ${delayMs}ms ${easing}`;

// ─── Theme tokens ─────────────────────────────────────────────────────────────

const tokens = (isDark: boolean) => {
  const c = isDark
    ? { r: 255, g: 255, b: 255 }
    : { r: 0,   g: 0,   b: 0   };

  const ra = (a: number) => `rgba(${c.r},${c.g},${c.b},${a})`;

  const settledShadow = isDark
    ? `0 0 12px rgba(255,255,255,0.95), 0 0 40px rgba(255,255,255,0.45), 0 0 90px rgba(255,255,255,0.18), 0 0 180px rgba(255,255,255,0.07), 0 14px 50px rgba(0,0,0,0.75)`
    : `0 0 8px rgba(0,0,0,0.65), 0 0 28px rgba(0,0,0,0.22), 0 0 56px rgba(0,0,0,0.1), 0 4px 18px rgba(0,0,0,0.4)`;

  const keyframes = `
    @keyframes click-flash {
      0%   { opacity: 0; }
      2%   { opacity: ${isDark ? 0.28 : 0.12}; }
      8%   { opacity: 0; }
      100% { opacity: 0; }
    }

    @keyframes flicker {
      0%   { opacity: 0;    text-shadow: none; }
      3%   { opacity: 0.07; text-shadow: 0 0 20px ${ra(0.10)}; }
      5%   { opacity: 0;    text-shadow: none; }
      8%   { opacity: 0.05; text-shadow: 0 0 15px ${ra(0.08)}; }
      10%  { opacity: 0;    text-shadow: none; }
      14%  { opacity: 0.22; text-shadow: 0 0 28px ${ra(0.22)}; }
      22%  { opacity: 0.68; text-shadow: 0 0 48px ${ra(0.52)}; }
      32%  { opacity: 0.46; text-shadow: 0 0 36px ${ra(0.40)}; }
      44%  { opacity: 0.84; text-shadow: 0 0 52px ${ra(0.58)}; }
      56%  { opacity: 0.66; text-shadow: 0 0 42px ${ra(0.48)}; }
      68%  { opacity: 0.96; text-shadow: ${settledShadow}; }
      80%  { opacity: 0.90; text-shadow: 0 0 42px ${ra(0.48)}; }
      92%  { opacity: 1;    text-shadow: ${settledShadow}; }
      100% { opacity: 1;    text-shadow: ${settledShadow}; }
    }

    @keyframes bloom {
      0%   { opacity: 0; }
      45%  { opacity: 0; }
      85%  { opacity: 1; }
      100% { opacity: 1; }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @keyframes cord-life {
      0%   { opacity: 0.22; transform: rotate(2deg)    scaleY(1);    }
      6%   { opacity: 0.22; transform: rotate(-2.5deg) scaleY(1);    }
      12%  { opacity: 0.22; transform: rotate(1.8deg)  scaleY(1);    }
      16%  { opacity: 0.25; transform: rotate(-1.2deg) scaleY(1);    }
      17%  { opacity: 0.30; transform: rotate(0deg)    scaleY(1);    }
      27%  { opacity: 0.90; transform: rotate(0deg)    scaleY(1.45); }
      35%  { opacity: 0.52; transform: rotate(-1.8deg) scaleY(0.86); }
      43%  { opacity: 0.22; transform: rotate(0.9deg)  scaleY(1.05); }
      48%  { opacity: 0.10; transform: rotate(0deg)    scaleY(1);    }
      52%  { opacity: 0;    transform: rotate(0deg)    scaleY(1);    }
      100% { opacity: 0;    transform: rotate(0deg)    scaleY(1);    }
    }
  `;

  return {
    keyframes,
    bg:           isDark ? "rgb(6,6,6)"        : "rgb(250,250,250)",
    textColor:    isDark ? "rgb(242,242,242)"   : "rgb(14,14,14)",
    lineColor:    ra(0.05),
    cordLine:     `linear-gradient(to bottom, ${ra(0.06)}, ${ra(isDark ? 0.7 : 0.45)})`,
    cordBall:     `1.5px solid ${ra(isDark ? 0.75 : 0.5)}`,
    flashBg:      isDark ? "rgb(255,255,255)"  : "rgb(0,0,0)",
    flashOpacity: isDark ? 0.28 : 0.12,
    bloom:        `radial-gradient(ellipse 55% 35% at 50% 50%, ${ra(isDark ? 0.045 : 0.025)}, transparent)`,
    vignette:     isDark
      ? "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(0,0,0,0.88) 100%)"
      : "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(250,250,250,0.9) 100%)",
    frameBorder:  `1px solid ${ra(0.06)}`,
  };
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Preloader = ({ isLoading, onComplete }: PreloaderProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const t = tokens(isDark);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(onComplete, TOTAL_MS);
    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: t.bg, willChange: "transform" }}
          initial={{ y: "0%" }}
          exit={{ y: "-100%", transition: { duration: 0.9, delay: 0.2, ease: EXIT_EASE } }}
        >
          <style>{t.keyframes}</style>

          {/* ── Background vertical lines ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0, animation: anim("fade-in", 1400, LAMP_DELAY_MS + 400) }}
          >
            {LINE_COLS.map(({ left, pair }) => (
              <Fragment key={left}>
                <div
                  className="absolute top-0 bottom-0"
                  style={{ left, width: "1px", background: t.lineColor }}
                />
                {pair && (
                  <div
                    className="absolute top-0 bottom-0"
                    style={{ left: `calc(${left} + 24px)`, width: "1px", background: t.lineColor }}
                  />
                )}
              </Fragment>
            ))}
          </div>

          {/* ── Vignette — always present ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: t.vignette }}
          />

          {/* ── Inset border frame ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset:     "1.5rem",
              border:    t.frameBorder,
              opacity:   0,
              animation: anim("fade-in", 600, LAMP_DELAY_MS + 1200),
            }}
          />

          {/* ── Light switch cord ── */}
          <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
            <div
              style={{
                transformOrigin: "top center",
                animation:       `cord-life ${TOTAL_MS}ms 0ms linear forwards`,
              }}
            >
              <div
                style={{
                  width:      "1px",
                  height:     "32vh",
                  background: t.cordLine,
                }}
              />
              <div
                style={{
                  width:        "11px",
                  height:       "11px",
                  borderRadius: "50%",
                  border:       t.cordBall,
                  marginLeft:   "-5px",
                  marginTop:    "2px",
                }}
              />
            </div>
          </div>

          {/* ── Switch-click flash ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: t.flashBg,
              opacity:    0,
              animation:  anim("click-flash", 600, CORD_PULL_MS + 100, "linear forwards"),
            }}
          />

          {/* ── Ambient bloom ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: t.bloom,
              opacity:    0,
              animation:  anim("bloom", LAMP_MS, LAMP_DELAY_MS),
            }}
          />

          {/* ── ALFA ── */}
          <motion.span
            className="relative font-extrabold uppercase select-none"
            style={{
              fontSize:      "clamp(5.5rem, 20vw, 16rem)",
              letterSpacing: "-0.03em",
              color:         t.textColor,
              opacity:       0,
              animation:     anim("flicker", LAMP_MS, LAMP_DELAY_MS, "linear forwards"),
            }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.3, ease: "easeIn" } }}
          >
            ALFA
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
