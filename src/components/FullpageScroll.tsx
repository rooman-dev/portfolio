"use client";

import { useRef, useEffect, useState, useCallback, type ReactNode } from "react";

/* ──────────────────────────────────────────────────────────
   FullpageScroll — Exactly one section per scroll
   ──────────────────────────────────────────────────────────
   Intercepts wheel + touch events and scrolls one section
   at a time. No free scrolling.
   ────────────────────────────────────────────────────────── */

const SECTION_IDS = ["home", "about", "projects", "contact"];
const COOLDOWN_MS = 800; // prevent rapid-fire scrolls

interface FullpageScrollProps {
  children: ReactNode;
}

export default function FullpageScroll({ children }: FullpageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, index));
      if (clamped === current && isScrolling.current) return;

      isScrolling.current = true;
      setCurrent(clamped);

      const section = document.getElementById(SECTION_IDS[clamped]);
      section?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, COOLDOWN_MS);
    },
    [current],
  );

  /* Expose scrollTo for navbar / buttons */
  useEffect(() => {
    const handler = (e: CustomEvent<string>) => {
      const idx = SECTION_IDS.indexOf(e.detail);
      if (idx !== -1) scrollTo(idx);
    };
    window.addEventListener("scrollToSection" as string, handler as EventListener);
    return () =>
      window.removeEventListener("scrollToSection" as string, handler as EventListener);
  }, [scrollTo]);

  /* Wheel event */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 0) scrollTo(current + 1);
      else if (e.deltaY < 0) scrollTo(current - 1);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [current, scrollTo]);

  /* Touch events (mobile swipe) */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return; // ignore small swipes

      if (diff > 0) scrollTo(current + 1);
      else scrollTo(current - 1);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, scrollTo]);

  /* Keyboard support (arrow keys) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollTo(current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollTo(current - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, scrollTo]);

  return (
    <div
      ref={containerRef}
      className="bg-black h-screen overflow-hidden"
    >
      {children}
    </div>
  );
}
