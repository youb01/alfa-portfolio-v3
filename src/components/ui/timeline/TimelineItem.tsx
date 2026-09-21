import { motion } from "framer-motion";
import type { TimelineEvent } from "../../../data/qualifications";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const isOngoing = event.dateTo === "Present";

  return (
    <motion.div
      className="border-t border-[rgb(var(--border-primary))] py-7 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
    >
      {/* ── Left: date ── */}
      <div className="flex items-center gap-2 pt-0.5">
        <span className="text-[11px] font-semibold tabular-nums" style={{ color: "rgb(var(--text-secondary))" }}>
          {event.dateFrom} — {event.dateTo}
        </span>
        {isOngoing && (
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
            style={{ background: "rgb(var(--text-primary))" }}
          />
        )}
      </div>

      {/* ── Right: content ── */}
      <div>
        <h3
          className="font-extrabold uppercase leading-tight text-[rgb(var(--text-primary))] mb-1.5"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", letterSpacing: "-0.01em" }}
        >
          {event.title}
        </h3>

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
