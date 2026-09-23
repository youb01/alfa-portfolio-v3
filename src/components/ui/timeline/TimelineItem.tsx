import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { TimelineEvent } from "../../../data/qualifications";

interface TimelineItemProps {
  event:     TimelineEvent;
  index:     number;
  isLast:    boolean;
  isCurrent: boolean;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  index,
  isLast,
  isCurrent,
}) => {
  const isOngoing = event.dateTo === "Present";
  const delay = index * 0.08;

  // Track scroll progress of the entire item — the connecting line fills
  // as you scroll through this item's content, so each line fills sequentially.
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.75", "end 0.25"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={itemRef}
      className="grid grid-cols-[16px_1fr] md:grid-cols-[16px_200px_1fr]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {/* ── Col 1: indicator ── */}
      <div className="flex flex-col items-center" style={{ paddingTop: "22px" }}>

        {/* Dot */}
        <motion.div
          className="relative z-10 flex-shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: delay + 0.15, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {isCurrent ? (
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgb(var(--text-primary))" }} />
          ) : (
            <div className="w-2 h-2 rounded-full" style={{ border: "1.5px solid rgb(var(--text-tertiary))", background: "rgb(var(--bg-primary))" }} />
          )}
        </motion.div>

        {/* Connecting line — driven by this item's scroll progress */}
        {!isLast && (
          <div className="mt-2" style={{ flex: "1 1 0", width: "2px", position: "relative" }}>
            {/* Track (always visible, dim) */}
            <div
              className="absolute inset-0"
              style={{ background: "rgb(var(--border-primary))" }}
            />
            {/* Fill (scroll-driven) */}
            <motion.div
              className="absolute inset-0 origin-top"
              style={{ background: "rgb(var(--text-secondary))", scaleY: lineScaleY }}
            />
          </div>
        )}
      </div>

      {/* ── Col 2 (desktop only): date ── */}
      <div className="hidden md:block pl-5 pb-12" style={{ paddingTop: "20px" }}>
        <p
          className="text-[11px] font-semibold tabular-nums leading-snug"
          style={{ color: isCurrent ? "rgb(var(--text-secondary))" : "rgb(var(--text-tertiary))" }}
        >
          {event.dateFrom}
          {event.dateFrom !== event.dateTo && <><br />{event.dateTo}</>}
          {isOngoing && (
            <span
              className="ml-1.5 mt-1.5 inline-block w-1.5 h-1.5 animate-pulse"
              style={{ background: "rgb(var(--text-primary))" }}
            />
          )}
        </p>
      </div>

      {/* ── Col 3: content ── */}
      <div className="pl-5 pb-12" style={{ paddingTop: "20px" }}>

        {/* Mobile date */}
        <p className="md:hidden text-[11px] font-semibold tabular-nums mb-2" style={{ color: "rgb(var(--text-tertiary))" }}>
          {event.dateFrom} — {event.dateTo}
        </p>

        {/* Title row */}
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3
            className="font-extrabold uppercase leading-tight text-[rgb(var(--text-primary))]"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", letterSpacing: "-0.01em" }}
          >
            {event.title}
          </h3>
          {isCurrent && (
            <span
              className="text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5"
              style={{ border: "1px solid rgb(var(--text-primary))", color: "rgb(var(--text-primary))" }}
            >
              Current
            </span>
          )}
        </div>

        <p className="text-sm font-medium mb-4" style={{ color: "rgb(var(--text-secondary))" }}>
          {event.subtitle}
          <span className="mx-1.5" style={{ color: "rgb(var(--text-tertiary))" }}>·</span>
          <span style={{ color: "rgb(var(--text-tertiary))" }}>{event.location}</span>
        </p>

        <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--text-secondary))" }}>
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};
