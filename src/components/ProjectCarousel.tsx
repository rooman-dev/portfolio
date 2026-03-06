"use client";

import { useState, useCallback } from "react";

/* ──────────────────────────────────────────────────────────
   ProjectCarousel — Carousel for Selected Works
   ──────────────────────────────────────────────────────────
   Displays one project at a time with left/right navigation.
   Smooth slide transition between projects.
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

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating || index === current) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [current, isAnimating],
  );

  const prev = () => {
    const i = current === 0 ? projects.length - 1 : current - 1;
    goTo(i, "left");
  };

  const next = () => {
    const i = current === projects.length - 1 ? 0 : current + 1;
    goTo(i, "right");
  };

  const project = projects[current];

  return (
    <div className="relative">
      {/* Navigation arrows + counter */}
      <div className="flex items-center justify-between mb-12">
        <span className="text-white/30 text-sm tracking-[0.4em] uppercase">
          {project.index} / {String(projects.length).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-white"
            aria-label="Previous project"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-white"
            aria-label="Next project"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project content */}
      <div className="overflow-hidden">
        <div
          className="transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? `translateX(${direction === "right" ? "60px" : "-60px"})`
              : "translateX(0)",
          }}
        >
          {/* Title */}
          <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
            {project.description}
          </p>

          {/* View project button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-5 bg-white text-black text-lg tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
            >
              View Project ?
            </a>
          )}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-3 mt-14">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            className={`h-[2px] transition-all duration-500 ${
              i === current
                ? "w-10 bg-white"
                : "w-5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
