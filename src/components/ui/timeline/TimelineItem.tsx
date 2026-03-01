import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import type { TimelineEvent } from "../../sections/data/QualificationsData";

interface TimelineItemProps {
  event: TimelineEvent;
  /** 0-based index, controls left/right alternation on desktop */
  index: number;
}

// ─── Variants ────────────────────────────────────────────────────────────────

const cardVariants = {
  future: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -32 : 32,
  }),
  active: {
    opacity: 1,
    x: 0,
  },
  past: {
    opacity: 0.32,
    x: 0,
  },
};

const dotVariants = {
  future: { scale: 0.5, opacity: 0.2 },
  active: { scale: 1, opacity: 1 },
  past: { scale: 0.7, opacity: 0.4 },
};

// ─── Card ─────────────────────────────────────────────────────────────────────

function TimelineCard({ event }: { event: TimelineEvent }) {
  const isWork = event.type === "work";

  return (
    <div
      className="rounded-2xl p-6 md:p-7"
      style={{
        background: "rgb(var(--bg-secondary))",
        border: "1px solid rgb(var(--border-primary))",
      }}
    >
      {/* Header row: date range + type badge */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "rgb(var(--text-tertiary))" }}
        >
          {event.dateFrom} — {event.dateTo}
        </span>
        <span
          className="text-[9px] font-black uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
          style={{
            color: isWork
              ? "rgb(var(--text-secondary))"
              : "rgb(var(--text-secondary))",
            background: isWork
              ? "rgba(var(--text-primary) / 0.06)"
              : "rgba(var(--text-primary) / 0.06)",
            border: "1px solid rgb(var(--border-secondary))",
          }}
        >
          {isWork ? "Work" : "Education"}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg md:text-xl font-extrabold leading-tight mb-1"
        style={{ color: "rgb(var(--text-primary))" }}
      >
        {event.title}
      </h3>

      {/* Subtitle / institution */}
      <p
        className="text-sm font-semibold mb-4"
        style={{ color: "rgb(var(--text-secondary))" }}
      >
        {event.subtitle}
      </p>

      {/* Location */}
      <div
        className="flex items-center gap-1.5 mb-4"
        style={{ color: "rgb(var(--text-tertiary))" }}
      >
        <MapPin size={11} style={{ flexShrink: 0 }} />
        <span className="text-[11px] font-medium">{event.location}</span>
      </div>

      {/* Hairline separator */}
      <div
        className="h-[1px] mb-4"
        style={{ background: "rgb(var(--border-primary))" }}
      />

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgb(var(--text-secondary))" }}
      >
        {event.description}
      </p>
    </div>
  );
}

// ─── Dot ─────────────────────────────────────────────────────────────────────

function TimelineDot({
  animateKey,
}: {
  animateKey: "future" | "active" | "past";
}) {
  const isActive = animateKey === "active";

  return (
    <div className="relative flex items-center justify-center w-5 h-5 mt-6">
      {/* Pulse ring — only when active */}
      {isActive && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "rgb(var(--text-primary))" }}
          animate={{ scale: [1, 2.2, 1], opacity: [0.18, 0, 0.18] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Core dot */}
      <motion.span
        className="relative rounded-full"
        variants={dotVariants}
        animate={animateKey}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: 12,
          height: 12,
          background:
            animateKey === "future"
              ? "rgb(var(--bg-primary))"
              : "rgb(var(--text-primary))",
          border: `2px solid ${
            animateKey === "future"
              ? "rgb(var(--border-secondary))"
              : "rgb(var(--text-primary))"
          }`,
        }}
      />
    </div>
  );
}

// ─── TimelineItem ─────────────────────────────────────────────────────────────

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const isLeft = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  // Track visibility
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenSeen) setHasBeenSeen(true);
  }, [isInView, hasBeenSeen]);

  const animateKey: "future" | "active" | "past" = isInView
    ? "active"
    : hasBeenSeen
      ? "past"
      : "future";

  const cardTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div ref={ref} className="relative mb-0">
      {/*
       * ── Mobile layout (< md) ──────────────────────────────────────────
       * Single column: 20px dot lane | flexible card
       */}
      <div className="grid grid-cols-[20px_1fr] gap-5 md:hidden py-4">
        <TimelineDot animateKey={animateKey} />
        <motion.div
          custom={false}
          variants={cardVariants}
          animate={animateKey}
          transition={cardTransition}
          className="min-w-0"
        >
          <TimelineCard event={event} />
        </motion.div>
      </div>

      {/*
       * ── Desktop layout (≥ md) ─────────────────────────────────────────
       * Three columns: [1fr] dot-lane [80px] [1fr]
       * Even index → card on left; odd index → card on right
       */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] py-6">
        {/* Left slot */}
        <div className="pr-8 flex items-start justify-end">
          {isLeft && (
            <motion.div
              custom
              variants={cardVariants}
              animate={animateKey}
              transition={cardTransition}
              className="w-full"
            >
              <TimelineCard event={event} />
            </motion.div>
          )}
        </div>

        {/* Dot column — always centered */}
        <div className="flex justify-center">
          <TimelineDot animateKey={animateKey} />
        </div>

        {/* Right slot */}
        <div className="pl-8 flex items-start">
          {!isLeft && (
            <motion.div
              custom={false}
              variants={cardVariants}
              animate={animateKey}
              transition={cardTransition}
              className="w-full"
            >
              <TimelineCard event={event} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
