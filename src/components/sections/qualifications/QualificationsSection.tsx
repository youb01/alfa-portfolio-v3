import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { timelineEvents } from "../data/QualificationsData";
import { SectionHeader } from "../../ui/SectionHeader";
import { TimelineItem } from "../../ui/timeline/TimelineItem";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

export const QualificationsSection: React.FC = () => {
  /*
   * Two separate refs:
   *   sectionRef → the <section> element (for the id anchor)
   *   trackRef   → only the items container (for accurate scroll progress)
   *
   * Using trackRef means progress = 0 when the first dot reaches the
   * viewport centre, and 1 when the last dot does — not when the section
   * header first enters the viewport.
   */
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawProgress } = useScroll({
    target: trackRef,
    // "start center" → track top aligns with viewport centre (first dot visible)
    // "end center"   → track bottom aligns with viewport centre (last dot visible)
    offset: ["start center", "end center"],
  });

  // Tight spring so the bar feels snappy but never jittery
  const progress = useSpring(rawProgress, {
    stiffness: 320,
    damping: 45,
    restDelta: 0.001,
  });

  // scaleY [0 → 1] with transformOrigin "center top" grows the bar downward
  const trackFill = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="qualifications"
      className="relative bg-[rgb(var(--bg-primary))] overflow-hidden"
    >
      <BackgroundLines />

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="relative z-10 pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-20">
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
      <div className="relative z-10 pb-28 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          {/*
           * trackRef lives here — this is the scroll-progress target.
           * The absolute track line is positioned inside this container.
           *
           * Mobile  : line at left-[10px]  (centre of the 20 px dot lane)
           * Desktop : line at left-1/2     (centre of the 80 px dot column)
           */}
          <div ref={trackRef} className="relative">
            {/* ── Vertical track ───────────────────────────────────────── */}
            <div
              aria-hidden
              className="
                absolute top-[56px] bottom-[56px] w-[6px]
                left-[10px]
                md:left-1/2 md:-translate-x-1/2
                pointer-events-none
              "
              style={{ background: "rgb(var(--border-primary))" }}
            >
              {/* Filled portion grows downward as user scrolls */}
              <motion.div
                className="absolute inset-x-0 top-0"
                style={{
                  scaleY: trackFill,
                  transformOrigin: "center top",
                  height: "100%",
                  background: "rgb(var(--text-primary))",
                  opacity: 0.65,
                }}
              />
            </div>

            {/* ── Items ────────────────────────────────────────────────── */}
            {timelineEvents.map((event, i) => (
              <TimelineItem key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
