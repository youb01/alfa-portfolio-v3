import { Fragment, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

// ─── Config ──────────────────────────────────────────────────────────────────

const EXIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const TOTAL_MS      = 4800; // full screen time before curtain lifts
const CORD_PULL_MS  = 800;  // cord starts being pulled at this point
const LAMP_DELAY_MS = 2000; // lamp first tries to ignite (after pull + gap)
const LAMP_MS       = 2200; // warm-up duration once it starts

// Matches the hero BackgroundLines paired-column layout
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

// ─── Keyframes ───────────────────────────────────────────────────────────────

// Four-layer depth glow for the settled state
const SETTLED_SHADOW =
  "0 0 12px rgba(255,255,255,0.95), 0 0 40px rgba(255,255,255,0.45), 0 0 90px rgba(255,255,255,0.18), 0 0 180px rgba(255,255,255,0.07), 0 14px 50px rgba(0,0,0,0.75)";

const KEYFRAMES = `
  /*
   * Switch-click flash — fires when the cord is pulled (CORD_PULL_MS).
   * A single brief attempt by the lamp that immediately fails.
   */
  @keyframes click-flash {
    0%   { opacity: 0; }
    2%   { opacity: 0.28; }
    8%   { opacity: 0; }
    100% { opacity: 0; }
  }

  /*
   * Lamp ignition — starts at LAMP_DELAY_MS (after the pull gap):
   *   0–10%  : two failed ignition attempts (very dim, quickly die)
   *  10–18%  : lamp finally catches, dim initial glow
   *  18–100% : natural incandescent warm-up, two gentle dips, then stable
   *
   * Min opacity above 0.4 once it catches — no harsh strobe after ignition.
   */
  @keyframes flicker {
    0%   { opacity: 0;    text-shadow: none; }
    3%   { opacity: 0.07; text-shadow: 0 0 20px rgba(255,255,255,0.1); }
    5%   { opacity: 0;    text-shadow: none; }
    8%   { opacity: 0.05; text-shadow: 0 0 15px rgba(255,255,255,0.08); }
    10%  { opacity: 0;    text-shadow: none; }
    14%  { opacity: 0.22; text-shadow: 0 0 28px rgba(255,255,255,0.22); }
    22%  { opacity: 0.68; text-shadow: 0 0 48px rgba(255,255,255,0.52); }
    32%  { opacity: 0.46; text-shadow: 0 0 36px rgba(255,255,255,0.40); }
    44%  { opacity: 0.84; text-shadow: 0 0 52px rgba(255,255,255,0.58); }
    56%  { opacity: 0.66; text-shadow: 0 0 42px rgba(255,255,255,0.48); }
    68%  { opacity: 0.96; text-shadow: ${SETTLED_SHADOW}; }
    80%  { opacity: 0.90; text-shadow: 0 0 42px rgba(255,255,255,0.48); }
    92%  { opacity: 1;    text-shadow: ${SETTLED_SHADOW}; }
    100% { opacity: 1;    text-shadow: ${SETTLED_SHADOW}; }
  }

  /* Ambient bloom: lags the flicker — room lights up after lamp stabilises */
  @keyframes bloom {
    0%   { opacity: 0; }
    45%  { opacity: 0; }
    85%  { opacity: 1; }
    100% { opacity: 1; }
  }

  /* Background lines and frame */
  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /*
   * Cord life — covers the full TOTAL_MS duration:
   *
   *   Timeline (TOTAL_MS = 4800ms):
   *   0–17%  (  0– 816ms) : gentle pendulum sway in darkness
   *  17–27%  (816–1296ms) : cord stretches as it's pulled
   *  27–38%  (1296–1824ms): snaps back with bounce
   *  38–46%  (1824–2208ms): settling — lamp is still dark at this point
   *  46–52%  (2208–2496ms): fades to zero, cleanly gone before lamp ignites
   *  52–100%              : hidden
   *
   * transform-origin must be "top center" on the element.
   */
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

// ─── Component ───────────────────────────────────────────────────────────────

export const Preloader = ({ isLoading, onComplete }: PreloaderProps) => {
  useEffect(() => {
    if (!isLoading) return;
    const t = setTimeout(onComplete, TOTAL_MS);
    return () => clearTimeout(t);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "rgb(6,6,6)", willChange: "transform" }}
          initial={{ y: "0%" }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: EXIT_EASE } }}
        >
          <style>{KEYFRAMES}</style>

          {/* ── Background vertical lines ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0, animation: anim("fade-in", 1400, LAMP_DELAY_MS + 400) }}
          >
            {LINE_COLS.map(({ left, pair }) => (
              <Fragment key={left}>
                <div
                  className="absolute top-0 bottom-0"
                  style={{ left, width: "1px", background: "rgba(255,255,255,0.05)" }}
                />
                {pair && (
                  <div
                    className="absolute top-0 bottom-0"
                    style={{ left: `calc(${left} + 24px)`, width: "1px", background: "rgba(255,255,255,0.05)" }}
                  />
                )}
              </Fragment>
            ))}
          </div>

          {/* ── Vignette — always present ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(0,0,0,0.88) 100%)",
            }}
          />

          {/* ── Inset border frame ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset:     "1.5rem",
              border:    "1px solid rgba(255,255,255,0.06)",
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
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.7))",
                }}
              />
              <div
                style={{
                  width:        "11px",
                  height:       "11px",
                  borderRadius: "50%",
                  border:       "1.5px solid rgba(255,255,255,0.75)",
                  marginLeft:   "-5px",
                  marginTop:    "2px",
                }}
              />
            </div>
          </div>

          {/* ── Switch-click flash — fires at the cord pull moment ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "rgb(255,255,255)",
              opacity:    0,
              animation:  anim("click-flash", 600, CORD_PULL_MS + 100, "linear forwards"),
            }}
          />

          {/* ── Ambient bloom ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 55% 35% at 50% 50%, rgba(255,255,255,0.045), transparent)",
              opacity:    0,
              animation:  anim("bloom", LAMP_MS, LAMP_DELAY_MS),
            }}
          />

          {/* ── ALFA ── */}
          <span
            className="relative font-extrabold uppercase select-none"
            style={{
              fontSize:      "clamp(5.5rem, 20vw, 16rem)",
              letterSpacing: "-0.03em",
              color:         "rgb(242,242,242)",
              opacity:       0,
              animation:     anim("flicker", LAMP_MS, LAMP_DELAY_MS, "linear forwards"),
            }}
          >
            ALFA
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
