import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { timelineEvents } from "../data/QualificationsData";
import { SectionHeader } from "../../ui/SectionHeader";
import { TimelineItem } from "../../ui/timeline/TimelineItem";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

export const QualificationsSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(rawProgress, {
    stiffness: 320,
    damping: 45,
    restDelta: 0.001,
  });

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
            title={t("qualifications.sectionTitle")}
            titleMuted={t("qualifications.sectionTitleMuted")}
            subtitle={t("qualifications.subtitle")}
          />
        </div>
      </div>

      {/* ── Timeline ───────────────────────────────────────────────────── */}
      <div className="relative z-10 pb-28 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <div ref={trackRef} className="relative">
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

            {timelineEvents.map((event, i) => (
              <TimelineItem key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
