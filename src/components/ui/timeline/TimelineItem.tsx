import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import type { TimelineEvent } from "../../sections/data/QualificationsData";
import { useTheme } from "../../../hooks/useTheme";

interface TimelineItemProps {
  event: TimelineEvent;
  /** 0-based; controls left/right alternation on desktop */
  index: number;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const cardVariants = {
  future: (isLeft: boolean) => ({ opacity: 0, x: isLeft ? -36 : 36 }),
  active: { opacity: 1, x: 0 },
  past: { opacity: 0.28, x: 0 },
};

const dotVariants = {
  future: { scale: 0.5, opacity: 0.18 },
  active: { scale: 1, opacity: 1 },
  past: { scale: 0.75, opacity: 0.45 },
};

type AnimKey = "future" | "active" | "past";

const CARD_TRANSITION = { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const };

// ─── Dot ──────────────────────────────────────────────────────────────────────

/*
 * Desktop dot vertical offset:
 *   grid py-6 (24 px) is padding on the row container — slots start at 0 inside.
 *   mt-11 (44 px) + half wrapper (12 px) = 56 px from slot top.
 *   Connector lines are therefore placed at top-14 (56 px) in each slot div.
 */
function TimelineDot({ animKey }: { animKey: AnimKey }) {
  const isActive = animKey === "active";

  return (
    // mt-6 on mobile, mt-11 on desktop to match the card's title visual centre
    <div className="relative flex items-center justify-center w-6 h-6 mt-6 md:mt-11">
      {/* Expanding glow pulse — active state only */}
      {isActive && (
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 24,
            height: 24,
            background: "rgb(var(--text-primary))",
          }}
          animate={{ scale: [1, 2.4, 1], opacity: [0.14, 0, 0.14] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Outer ring — subtly visible in all states */}
      <motion.span
        className="absolute rounded-full"
        style={{ width: 22, height: 22 }}
        animate={{
          borderColor: isActive
            ? "rgb(var(--border-hover))"
            : "rgb(var(--border-primary))",
          borderWidth: 1,
          borderStyle: "solid",
          opacity: isActive ? 0.6 : 0.25,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Core dot */}
      <motion.span
        className="relative rounded-full"
        variants={dotVariants}
        animate={animKey}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: 14,
          height: 14,
          background:
            animKey === "future"
              ? "rgb(var(--bg-primary))"
              : "rgb(var(--text-primary))",
          border: `2px solid ${
            animKey === "future"
              ? "rgb(var(--border-secondary))"
              : "rgb(var(--text-primary))"
          }`,
        }}
      />
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function TimelineCard({
  event,
  isDark,
}: {
  event: TimelineEvent;
  isDark: boolean;
}) {
  const isWork = event.type === "work";

  return (
    /*
     * overflow-hidden + rounded-2xl so the left accent bar respects
     * the card's border-radius at its corners.
     */
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgb(var(--bg-secondary))",
        border: "1px solid rgb(var(--border-primary))",
        boxShadow: isDark
          ? "0 8px 40px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18)"
          : "0 4px 28px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Left accent bar — education vs work get different tones */}
      <div
        className="absolute inset-y-0 left-0 w-[3px]"
        style={{
          background: isWork
            ? "rgb(var(--text-secondary))"
            : "rgb(var(--border-hover))",
        }}
      />

      {/* Content — extra left padding clears the accent bar */}
      <div className="p-6 md:p-7 pl-7 md:pl-8">
        {/* ── Header: date range + type badge ──────────────────────── */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: "rgb(var(--text-tertiary))" }}
          >
            {event.dateFrom}&nbsp;—&nbsp;{event.dateTo}
          </span>

          {/*
           * Badges are visually distinct:
           *   Education → outline only (no fill)
           *   Work      → subtle filled background
           */}
          <span
            className="text-[9px] font-black uppercase tracking-[0.14em] px-2.5 py-[5px] rounded-full"
            style={{
              color: "rgb(var(--text-secondary))",
              background: isWork ? "rgb(var(--bg-tertiary))" : "transparent",
              border: "1px solid rgb(var(--border-secondary))",
            }}
          >
            {isWork ? "Work" : "Education"}
          </span>
        </div>

        {/* ── Title ───────────────────────────────────────────────── */}
        <h3
          className="text-lg md:text-xl font-extrabold leading-tight mb-1"
          style={{ color: "rgb(var(--text-primary))" }}
        >
          {event.title}
        </h3>

        {/* ── Institution / company ────────────────────────────────── */}
        <p
          className="text-sm font-medium mb-3"
          style={{ color: "rgb(var(--text-tertiary))" }}
        >
          {event.subtitle}
        </p>

        {/* ── Location ─────────────────────────────────────────────── */}
        <div
          className="inline-flex items-center gap-1.5 mb-5"
          style={{ color: "rgb(var(--text-tertiary))" }}
        >
          <MapPin size={10} style={{ flexShrink: 0 }} />
          <span className="text-[11px] font-medium">{event.location}</span>
        </div>

        {/* ── Hairline separator ───────────────────────────────────── */}
        <div
          className="h-[1px] mb-4"
          style={{ background: "rgb(var(--border-primary))" }}
        />

        {/* ── Description ──────────────────────────────────────────── */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgb(var(--text-secondary))" }}
        >
          {event.description}
        </p>
      </div>
    </div>
  );
}

// ─── Connector line ───────────────────────────────────────────────────────────

/*
 * A 1 px horizontal line bridging the card edge to the dot.
 * Positioned at top-14 (56 px) inside each slot div so it aligns
 * with the dot centre (mt-11 44 px + 12 px half-height = 56 px).
 * Opacity fades with the card state.
 */
function Connector({
  side,
  animKey,
}: {
  side: "left" | "right";
  animKey: AnimKey;
}) {
  return (
    <motion.div
      aria-hidden
      className={`absolute top-14 h-[8px] w-10 ${
        side === "left" ? "right-0" : "left-0"
      }`}
      style={{
        background: "rgb(var(--border-secondary))",
        transformOrigin: side === "left" ? "right" : "left",
      }}
      animate={{
        opacity: animKey === "future" ? 0 : animKey === "active" ? 0.7 : 0.25,
        scaleX: animKey === "future" ? 0 : 1,
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

// ─── TimelineItem ─────────────────────────────────────────────────────────────

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isLeft = index % 2 === 0;

  const ref = useRef<HTMLDivElement>(null);
  // Activate when 15 % of the item is visible — captures cards that are
  // partially in view without waiting for them to be half-visible
  const isInView = useInView(ref, { amount: 0.15, once: false });
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenSeen) setHasBeenSeen(true);
  }, [isInView, hasBeenSeen]);

  const animKey: AnimKey = isInView
    ? "active"
    : hasBeenSeen
      ? "past"
      : "future";

  return (
    <div ref={ref}>
      {/*
       * ── Mobile layout ─────────────────────────────────────────────────
       * [20 px dot lane] [card — full width]
       */}
      <div className="grid grid-cols-[20px_1fr] gap-5 md:hidden py-5">
        <TimelineDot animKey={animKey} />
        <motion.div
          custom={false}
          variants={cardVariants}
          animate={animKey}
          transition={CARD_TRANSITION}
          className="min-w-0"
        >
          <TimelineCard event={event} isDark={isDark} />
        </motion.div>
      </div>

      {/*
       * ── Desktop layout ────────────────────────────────────────────────
       * [1fr left slot] [80 px dot column] [1fr right slot]
       * Even index → card left; odd index → card right
       *
       * The slot divs are `relative` so the Connector can be `absolute`
       * inside them at top-14 (56 px = dot centre height).
       */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] py-6">
        {/* Left slot */}
        <div className="relative pr-10 flex items-start justify-end">
          {isLeft && (
            <>
              <Connector side="left" animKey={animKey} />
              <motion.div
                custom={true}
                variants={cardVariants}
                animate={animKey}
                transition={CARD_TRANSITION}
                className="w-full"
              >
                <TimelineCard event={event} isDark={isDark} />
              </motion.div>
            </>
          )}
        </div>

        <div className="flex justify-center">
          <TimelineDot animKey={animKey} />
        </div>

        <div className="relative pl-10 flex items-start">
          {!isLeft && (
            <>
              <Connector side="right" animKey={animKey} />
              <motion.div
                custom={false}
                variants={cardVariants}
                animate={animKey}
                transition={CARD_TRANSITION}
                className="w-full"
              >
                <TimelineCard event={event} isDark={isDark} />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
