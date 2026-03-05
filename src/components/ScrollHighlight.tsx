"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   ScrollHighlight
   ──────────────────────────────────────────────────────────
   Wraps any inline text. When the element scrolls into view
   (controlled by an Intersection Observer via Framer Motion's
   `useInView`), a dark-gray background sweeps in from the left.
   ────────────────────────────────────────────────────────── */

interface ScrollHighlightProps {
  children: ReactNode;
  /** Delay before the sweep begins (seconds) */
  delay?: number;
  className?: string;
}

export default function ScrollHighlight({
  children,
  delay = 0,
  className = "",
}: ScrollHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      className={`highlight-sweep ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onViewportEnter={() => {
        setTimeout(() => {
          ref.current?.classList.add("active");
        }, delay * 1000);
      }}
    >
      {children}
    </motion.span>
  );
}
