import { MapPin } from "lucide-react";
import type { TimelineEvent } from "../../../data/qualifications";

interface TimelineCardProps {
  event: TimelineEvent;
}

export const TimelineCard = ({ event }: TimelineCardProps) => {
  const isWork    = event.type === "work";
  const isOngoing = event.dateTo === "Present";

  return (
    <div
      className="relative border border-[rgb(var(--border-primary))]"
      style={{ background: "rgb(var(--bg-primary))" }}
    >
      {/* ── Content ── */}
      <div className="relative z-10 p-6 md:p-8">

        {/* Meta row — type badge · present pill · date */}
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.22em] px-2 py-1"
            style={{
              color:  "rgb(var(--text-tertiary))",
              border: "1px solid rgb(var(--border-primary))",
            }}
          >
            {isWork ? "Work" : "Education"}
          </span>

          {isOngoing && (
            <span className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "rgb(var(--text-primary))" }}
              />
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[rgb(var(--text-secondary))]">
                Present
              </span>
            </span>
          )}

          <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.1em] text-[rgb(var(--text-tertiary))] tabular-nums whitespace-nowrap">
            {event.dateFrom}&thinsp;—&thinsp;{event.dateTo}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-extrabold leading-tight tracking-tight text-[rgb(var(--text-primary))] mb-1.5"
          style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)" }}
        >
          {event.title}
        </h3>

        {/* Institution */}
        <p className="text-sm font-semibold text-[rgb(var(--text-secondary))] mb-3">
          {event.subtitle}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-6" style={{ color: "rgb(var(--text-tertiary))" }}>
          <MapPin size={10} strokeWidth={2.5} />
          <span className="text-[10px] font-medium uppercase tracking-[0.12em]">
            {event.location}
          </span>
        </div>

        {/* Hairline rule */}
        <div
          className="mb-5 h-px w-full"
          style={{ background: "rgb(var(--border-primary))" }}
        />

        {/* Description */}
        <p className="text-sm leading-relaxed text-[rgb(var(--text-secondary))]">
          {event.description}
        </p>

      </div>
    </div>
  );
};
