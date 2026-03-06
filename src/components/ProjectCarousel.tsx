"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   ProjectCarousel — 3 projects per page, horizontal slide
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

const ITEMS_PER_PAGE = 3;

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
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDir: number) => {
    const next = page + newDir;
    if (next < 0 || next >= totalPages) return;
    setPage([next, newDir]);
  };

  const goTo = (idx: number) => {
    setPage([idx, idx > page ? 1 : -1]);
  };

  const startIdx = page * ITEMS_PER_PAGE;
  const pageProjects = projects.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="relative w-full">
      {/* Projects grid */}
      <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
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
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pageProjects.map((project) => (
              <div
                key={project.index}
                className="group border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
              >
                {/* Index */}
                <span className="text-xs tracking-[0.4em] uppercase text-white/25 mb-4 block">
                  {project.index}
                </span>

                {/* Title */}
                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Button */}
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-fit px-8 py-3 bg-white text-black text-sm tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation — dots + arrows */}
      <div className="flex items-center justify-between mt-10 border-t border-white/10 pt-6">
        {/* Dots */}
        <div className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
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
          {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
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
            disabled={page === totalPages - 1}
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
