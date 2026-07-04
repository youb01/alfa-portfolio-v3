import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { TimelineEvent } from "../../../data/qualifications";

interface TimelineCardProps {
  event: TimelineEvent;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TimelineCard = ({ event }: TimelineCardProps) => {
  const isWork    = event.type === "work";
  const isOngoing = event.dateTo === "Present";

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border-primary))]"
      style={{
        background:
          "linear-gradient(145deg, rgb(var(--bg-secondary)) 0%, rgb(var(--bg-primary)) 60%)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 56px rgba(0,0,0,0.12), 0 4px 14px rgba(0,0,0,0.07)",
        transition: { duration: 0.26, ease: EASE },
      }}
    >
      {/* Top accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background: isWork
            ? "rgb(var(--text-secondary))"
            : "rgb(var(--text-primary))",
          opacity: 0.55,
        }}
      />

      {/* Left accent */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-px"
        style={{
          background: isWork
            ? "rgb(var(--text-secondary))"
            : "rgb(var(--text-primary))",
          opacity: 0.22,
        }}
      />

      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgb(var(--text-primary)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.018,
        }}
      />

      {/* Faded index number */}
      <span
        aria-hidden
        className="absolute right-4 -top-1 font-black leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(5rem, 9vw, 7.5rem)",
          color: "rgb(var(--text-primary))",
          opacity: 0.045,
          letterSpacing: "-0.04em",
        }}
      >
        {event.id}
      </span>

      {/* ── Content ── */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Badge row */}
        <div className="flex items-center gap-2.5 mb-5">
          <span
            className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-md"
            style={{
              color: "rgb(var(--text-tertiary))",
              background: "rgb(var(--bg-tertiary))",
              border: "1px solid rgb(var(--border-secondary))",
            }}
          >
            {isWork ? "Work" : "Education"}
          </span>

          {isOngoing && (
            <span className="flex items-center gap-1.5 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--text-primary))] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[rgb(var(--text-secondary))]">
                Present
              </span>
            </span>
          )}

          <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.1em] text-[rgb(var(--text-tertiary))] opacity-70 tabular-nums">
            {event.dateFrom}&thinsp;—&thinsp;{event.dateTo}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold font-serif leading-[1.2] tracking-tight text-[rgb(var(--text-primary))] mb-1.5">
          {event.title}
        </h3>

        {/* Institution */}
        <p className="text-sm font-semibold text-[rgb(var(--text-secondary))] mb-3">
          {event.subtitle}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-[rgb(var(--text-tertiary))] mb-6">
          <MapPin size={10} strokeWidth={2.5} />
          <span className="text-[11px] font-medium">{event.location}</span>
        </div>

        {/* Gradient rule */}
        <div
          className="mb-5"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgb(var(--border-primary)) 0%, transparent 100%)",
          }}
        />

        {/* Description */}
        <p className="text-sm leading-[1.85] text-[rgb(var(--text-secondary))]">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};
