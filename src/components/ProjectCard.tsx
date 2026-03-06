"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   ProjectCard
   ──────────────────────────────────────────────────────────
   Solid white title with animated underline on hover.
   Description fades in on scroll via Intersection Observer.
   ────────────────────────────────────────────────────────── */

interface ProjectCardProps {
  index: string;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

export default function ProjectCard({
  index,
  title,
  description,
  link,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative border-t border-white/10 py-10 sm:py-14"
    >
      {/* Index number */}
      <span className="text-xs tracking-[0.4em] uppercase text-white/30 mb-4 block">
        {index}
      </span>

      {/* Project title — solid to outline hover effect */}
      <h3
        className="text-white cursor-pointer text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5"
      >
        {title}
      </h3>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        {/* Description */}
        <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* View project button */}
        <a
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-14 py-5 bg-white text-black text-lg tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 text-center"
        >
          View Project ?
        </a>
      </div>
    </motion.div>
  );
}
