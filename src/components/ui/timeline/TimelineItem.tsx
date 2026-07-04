import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import type { TimelineEvent } from "../../../data/qualifications";
import { TimelineDot, type AnimKey } from "./TimelineDot";
import { TimelineCard } from "./TimelineCard";
import { TimelineConnector } from "./TimelineConnector";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const CARD_TRANSITION = { duration: 0.85, ease: EASE };

const cardVariants = {
  future: (isLeft: boolean) => ({ opacity: 0, x: isLeft ? -40 : 40, y: 10 }),
  active: { opacity: 1, x: 0, y: 0 },
  past:   { opacity: 0.2, x: 0, y: 0 },
};

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const isLeft = index % 2 === 0;

  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.12, once: false });
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenSeen) setHasBeenSeen(true);
  }, [isInView, hasBeenSeen]);

  const animKey: AnimKey = isInView ? "active" : hasBeenSeen ? "past" : "future";

  return (
    <div ref={ref}>
      {/* ── Mobile ── */}
      <div className="grid grid-cols-[24px_1fr] gap-5 md:hidden py-5">
        <div className="flex justify-center pt-5">
          <TimelineDot animKey={animKey} />
        </div>
        <motion.div
          custom={false}
          variants={cardVariants}
          animate={animKey}
          transition={CARD_TRANSITION}
          className="min-w-0"
        >
          <TimelineCard event={event} />
        </motion.div>
      </div>

      {/* ── Desktop — alternating ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] py-8 items-start">
        {/* Left slot */}
        <div className="relative pr-10 flex justify-end">
          {isLeft && (
            <>
              <TimelineConnector side="left" animKey={animKey} />
              <motion.div
                custom={true}
                variants={cardVariants}
                animate={animKey}
                transition={CARD_TRANSITION}
                className="w-full"
              >
                <TimelineCard event={event} />
              </motion.div>
            </>
          )}
        </div>

        {/* Center — dot */}
        <div className="flex justify-center pt-5">
          <TimelineDot animKey={animKey} />
        </div>

        {/* Right slot */}
        <div className="relative pl-10 flex">
          {!isLeft && (
            <>
              <TimelineConnector side="right" animKey={animKey} />
              <motion.div
                custom={false}
                variants={cardVariants}
                animate={animKey}
                transition={CARD_TRANSITION}
                className="w-full"
              >
                <TimelineCard event={event} />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
