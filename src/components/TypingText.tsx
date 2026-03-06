"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { ElementType } from "react";

/* ──────────────────────────────────────────────────────────
   TypingText — Typewriter reveal for headings
   ──────────────────────────────────────────────────────────
   Each character appears one-by-one with a blinking cursor.
   Supports both solid white text and outline-to-fill style.
   
   • outline = false → solid white (BIO, SELECTED WORKS, etc.)
   • outline = true  → transparent + stroke (ROOMAN, WHY INNOVATE)
   • onMount = true  → animates immediately (hero)
   • onMount = false  → triggers on scroll into view (default)
   ────────────────────────────────────────────────────────── */

interface TypingTextProps {
  children: string;
  as?: ElementType;
  className?: string;
  /** Time per character in seconds */
  speed?: number;
  /** Initial delay before typing starts */
  delay?: number;
  /** 'outline' = starts outlined, fills on hover. 'solid' = starts solid, outlines on hover. 'none' = no stroke effect */
  hoverStyle?: "outline" | "solid" | "none";
  /** Animate on mount instead of on scroll */
  onMount?: boolean;
}

export default function TypingText({
  children,
  as: Tag = "h2",
  className = "",
  speed = 0.12,
  delay = 0,
  hoverStyle = "solid",
  onMount = false,
}: TypingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = onMount || isInView;

  const chars = children.split("");
  const styleClass =
    hoverStyle === "outline"
      ? "text-outline"
      : hoverStyle === "solid"
        ? "text-solid-to-outline"
        : "";

  return (
    <div ref={ref}>
      <Tag className={`${styleClass} cursor-default font-sans ${className}`}>
        {chars.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className={`inline-block ${shouldAnimate ? "typing-char-visible" : "typing-char-hidden"}`}
            style={{
              animationDelay: shouldAnimate ? `${delay + i * speed}s` : undefined,
              whiteSpace: char === " " ? "pre" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        {/* Blinking cursor */}
        <span
          className={`inline-block ml-1 -mb-1 w-[3px] bg-white ${shouldAnimate ? "typing-cursor-visible" : "typing-cursor-hidden"}`}
          style={{
            height: "0.85em",
            animationDelay: shouldAnimate ? `${delay + chars.length * speed}s` : undefined,
          }}
        />
      </Tag>
    </div>
  );
}
