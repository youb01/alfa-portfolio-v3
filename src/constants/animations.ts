// ─── Easing curves ────────────────────────────────────────────────────────────

export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
export const EASE_EXPO   = [0.76, 0, 0.24, 1] as const;

// ─── Durations ────────────────────────────────────────────────────────────────

export const DURATION = {
  fast:   0.3,
  normal: 0.6,
  slow:   0.9,
} as const;

// ─── Reusable motion prop factories ───────────────────────────────────────────

export const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { duration: 0.85, delay, ease: EASE_SMOOTH },
  viewport:    { once: true, margin: "-60px" as const },
});

export const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  transition:  { duration: DURATION.normal, delay, ease: EASE_SMOOTH },
  viewport:    { once: true, margin: "-60px" as const },
});

export const slideUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { duration: 0.85, delay, ease: EASE_SMOOTH },
  viewport:    { once: true, margin: "-80px" as const },
});
