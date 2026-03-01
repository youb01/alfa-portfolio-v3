import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { timelineEvents } from "../data/QualificationsData";
import { SectionHeader } from "../../ui/SectionHeader";
import { TimelineItem } from "../../ui/timeline/TimelineItem";

export const QualificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /*
   * Scroll progress scoped to this section.
   * offset[0] = "section top at 90 % of viewport" → user is just arriving
   * offset[1] = "section bottom at 10 % of viewport" → user has scrolled through
   */
  const { scrollYProgress: rawProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });

  /*
   * Light spring smoothing — removes jitter on fast scrolls while staying
   * very responsive. stiffness/damping tuned for near-instant response.
   */
  const progress = useSpring(rawProgress, {
    stiffness: 280,
    damping: 40,
    restDelta: 0.001,
  });

  /*
   * Map progress [0→1] to scaleY [0→1].
   * The fill bar uses transformOrigin "center top" so it grows downward.
   */
  const trackFill = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="qualifications"
      className="relative bg-[rgb(var(--bg-primary))] overflow-hidden"
    >
      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            number="03"
            title="Qualifications"
            titleMuted="and Education"
            subtitle="A timeline of study, work, and the things that shaped how I build."
          />
        </div>
      </div>

      {/* ── Timeline ───────────────────────────────────────────────────── */}
      <div className="pb-28 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          {/*
           * Outer relative container: the scroll-driven track is positioned
           * absolutely inside here, spanning the full height of the items.
           */}
          <div ref={trackRef} className="relative">
            {/* ── Center track ─────────────────────────────────────────── */}
            {/*
             * Mobile  : left-[10px]  — aligned with the 20 px dot-lane centre
             * Desktop : left-1/2     — aligned with the 80 px dot-column centre
             *
             * top-6 / bottom-6 keeps the line from overshooting the first/last dot.
             */}
            <div
              className="
                absolute top-6 bottom-6 w-[1px]
                left-[10px]
                md:left-1/2 md:-translate-x-px
                pointer-events-none
              "
              style={{ background: "rgb(var(--border-primary))" }}
            >
              {/* Scroll-driven fill */}
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                  scaleY: trackFill,
                  transformOrigin: "center top",
                  background: "rgb(var(--text-primary))",
                  opacity: 0.7,
                }}
              />
            </div>

            {/* ── Timeline items ───────────────────────────────────────── */}
            {timelineEvents.map((event, i) => (
              <TimelineItem key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
