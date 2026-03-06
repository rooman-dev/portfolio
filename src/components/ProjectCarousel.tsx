"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   ProjectCarousel — Full-width horizontal project slides
   ────────────────────────────────────────────────────────── */

interface Project {
  index: string;
  title: string;
  description: string;
  link?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDir: number) => {
    const next = page + newDir;
    if (next < 0 || next >= projects.length) return;
    setPage([next, newDir]);
  };

  const goTo = (idx: number) => {
    setPage([idx, idx > page ? 1 : -1]);
  };

  const project = projects[page];

  return (
    <div className="relative w-full">
      {/* Project content — horizontal layout with page indicator */}
      <div className="relative overflow-hidden flex items-start gap-8" style={{ minHeight: "320px" }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.3 },
            }}
            className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          >
            {/* Left — project info */}
            <div className="flex-1">
              {/* Index */}
              <span className="text-xs tracking-[0.4em] uppercase text-white/30 mb-6 block">
                {project.index}
              </span>

              {/* Title */}
              <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                {project.description}
              </p>

              {/* Button */}
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-14 py-5 bg-white text-black text-lg tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
              >
                View Project →
              </a>
            </div>

            {/* Right — large page indicator */}
            <div className="hidden md:flex items-baseline gap-3 flex-shrink-0 pt-4">
              <span className="text-white text-7xl lg:text-8xl font-bold leading-none">
                {String(page + 1).padStart(2, "0")}
              </span>
              <span className="text-white/20 text-3xl lg:text-4xl font-light">/</span>
              <span className="text-white/20 text-3xl lg:text-4xl font-light">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation — dots + arrows */}
      <div className="flex items-center justify-between mt-14 border-t border-white/10 pt-8">
        {/* Dots */}
        <div className="flex gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 border border-white/30 transition-all duration-300 ${
                i === page ? "bg-white border-white" : "bg-transparent hover:border-white/60"
              }`}
            />
          ))}
        </div>

        {/* Page indicator */}
        <span className="text-white/30 text-sm tracking-widest">
          {String(page + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>

        {/* Arrows */}
        <div className="flex gap-4">
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={page === projects.length - 1}
            className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
