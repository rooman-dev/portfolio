"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ──────────────────────────────────────────────────────────
   Navbar — Floating centered nav + Experience button
   ────────────────────────────────────────────────────────── */

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ── Data ───────────────────────────────────────────────── */

const stats = [
  { value: "4+", label: "Years Coding" },
  { value: "40+", label: "Projects Built" },
  { value: "80%", label: "Problem Solving" },
  { value: "2+", label: "Years Freelancing" },
];

const education = [
  {
    degree: "MS Computer Science",
    school: "Air University, Islamabad",
    period: "2024 — Present",
    detail: "Specializing in AI / Machine Learning and Distributed Systems.",
  },
  {
    degree: "BS Computer Science",
    school: "Air University, Islamabad",
    period: "2020 — 2024",
    detail: "Graduated with distinction. Core focus on Software Engineering, Data Structures & Algorithms.",
  },
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Auwasoft",
    period: "2023 — 2024",
    description:
      "Built production-grade backend services, designed database schemas, and contributed to client-facing products using modern web technologies.",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 — Present",
    description:
      "Delivering scalable web applications, UI/UX design, and backend systems for clients across healthcare, education, and fintech. 2+ years of remote freelancing experience.",
  },
];

const certificates = [
  { title: "Meta Back-End Developer", issuer: "Meta — Coursera", year: "2024" },
  { title: "CS50x: Introduction to Computer Science", issuer: "Harvard / edX", year: "2023" },
  { title: "Python for Data Science & AI", issuer: "IBM — Coursera", year: "2023" },
];

const achievements = [
  "Dean's List — Air University (multiple semesters)",
  "Top 5% — LeetCode Problem Solving (500+ problems)",
  "Hackathon Finalist — National Software Competition 2023",
  "Open-Source Contributor — Python & C++ developer tooling",
];

/* ── Animated section wrapper ───────────────────────────── */
function Section({
  title,
  delay,
  children,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-[11px] tracking-[0.5em] uppercase text-white/30 mb-6 pb-2 border-b border-white/5">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

/* ── Component ──────────────────────────────────────────── */

export default function Navbar() {
  const [showExp, setShowExp] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
          className="flex items-center gap-8 border border-white/10 bg-black shadow-lg shadow-black/50 whitespace-nowrap"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent("scrollToSection", {
                    detail: link.href.replace("#", ""),
                  }),
                );
              }}
              className="px-5 py-2 text-[14px] font-medium text-white/60 tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white shrink-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Experience button — top right */}
      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={() => setShowExp(!showExp)}
        className="fixed top-6 right-0 z-50 bg-white text-black text-[14px] font-medium tracking-[1.5em] uppercase hover:bg-white/90 transition-all duration-300 shadow-lg"
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        {showExp ? "Close" : "Experience"}
      </motion.button>

      {/* ════ Experience panel — slides in from right (40 vw) ════ */}
      <AnimatePresence>
        {showExp && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowExp(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 z-50 h-full w-[92vw] md:w-[45vw] bg-[#0a0a0a] border-l border-white/10 overflow-y-auto"
            >
              {/* Close button inside panel */}
              <button
                onClick={() => setShowExp(false)}
                className="absolute top-8 right-8 z-10 text-white/40 hover:text-white transition-colors text-2xl leading-none"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="p-10 sm:p-14 lg:p-16 pt-24 flex flex-col gap-16">

                {/* ── Header ──────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                    EXPERIENCE
                  </h2>
                  <div className="w-16 h-[2px] bg-white" />
                </motion.div>

                {/* ── Stats grid ──────────────────────── */}
                <Section title="At a Glance" delay={0.15}>
                  <div className="grid grid-cols-2 gap-5">
                    {stats.map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                        className="border border-white/10 bg-white/[0.02] p-6 sm:p-7 text-center hover:border-white/20 transition-colors duration-300"
                      >
                        <span className="block text-3xl sm:text-4xl font-bold text-white tracking-tight">
                          {s.value}
                        </span>
                        <span className="block text-[10px] sm:text-xs text-white/40 tracking-[0.25em] uppercase mt-2">
                          {s.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Section>

                {/* ── Education ────────────────────────── */}
                <Section title="Education" delay={0.25}>
                  <div className="flex flex-col gap-8">
                    {education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-white/15 pl-6 py-1">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/25 block mb-2">
                          {edu.period}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-white/40 text-sm tracking-wide mb-3">
                          {edu.school}
                        </p>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {edu.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* ── Work Experience ──────────────────── */}
                <Section title="Work Experience" delay={0.35}>
                  <div className="flex flex-col gap-8">
                    {experience.map((exp, i) => (
                      <div key={i} className="border-l-2 border-white/15 pl-6 py-1">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/25 block mb-2">
                          {exp.period}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-white/40 text-sm tracking-wide mb-3">
                          {exp.company}
                        </p>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* ── Certificates ─────────────────────── */}
                <Section title="Certificates" delay={0.45}>
                  <div className="flex flex-col gap-5">
                    {certificates.map((cert, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between border border-white/8 bg-white/[0.02] p-5 hover:border-white/15 transition-colors duration-300"
                      >
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white">
                            {cert.title}
                          </h4>
                          <p className="text-white/35 text-xs tracking-wide mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase shrink-0 ml-6 mt-1">
                          {cert.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* ── Achievements ─────────────────────── */}
                <Section title="Achievements" delay={0.55}>
                  <ul className="flex flex-col gap-4">
                    {achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-white/50 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white/40 rotate-45" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </Section>

                {/* bottom spacer for scroll comfort */}
                <div className="h-16" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
