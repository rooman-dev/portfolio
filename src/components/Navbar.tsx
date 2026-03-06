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

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Building scalable web applications and backend systems for clients across healthcare, education, and fintech.",
  },
  {
    role: "Backend Engineer Intern",
    company: "Tech Startup",
    period: "2023 — 2024",
    description:
      "Designed RESTful APIs with Python FastAPI, optimized database queries, and implemented CI/CD pipelines.",
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 — Present",
    description:
      "Contributing to open-source tools in Python and C++ ecosystems, focusing on developer tooling and performance.",
  },
];

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
        <div style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }} className="flex items-center gap-8 border border-white/10 bg-black shadow-lg shadow-black/50 whitespace-nowrap">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("scrollToSection", { detail: link.href.replace("#", "") }));
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
        style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
      >
        {showExp ? "Close" : "Experience"}
      </motion.button>

      {/* Experience card — slides in from right */}
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
              className="fixed inset-0 z-40 bg-black/60"
            />

            {/* Card */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-[480px] bg-black border-l border-white/10 overflow-y-auto"
            >
              <div className="p-10 sm:p-14 pt-24">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                  EXPERIENCE
                </h2>
                <div className="w-12 h-[2px] bg-white mb-12" />

                <div className="flex flex-col gap-10">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="border-t border-white/10 pt-8"
                    >
                      <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-white/40 text-sm tracking-wide mb-4">
                        {exp.company}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
