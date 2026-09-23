import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in the viewport center.
 * Uses IntersectionObserver with a rootMargin that creates a
 * "trigger band" in the upper-middle of the viewport.
 */
export const useActiveSection = (ids: string[]): string => {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // Section is "active" when it occupies the middle band of the viewport
        { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
};
