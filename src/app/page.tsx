"use client";

import ScrollHighlight from "@/components/ScrollHighlight";
import ProjectCard from "@/components/ProjectCard";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import TypingText from "@/components/TypingText";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   PROJECTS DATA
   ────────────────────────────────────────────────────────── */
const projects = [
  {
    index: "01",
    title: "DrKhan",
    description:
      "A hybrid desktop application built with Python FastAPI and SQLite, engineered to digitize paper-based clinic workflows into a secure, offline-first digital environment.",
    link: "https://github.com/rooman-dev/DrKhan",
  },
  {
    index: "02",
    title: "Rosseta",
    description:
      "A C++ desktop application utilizing graph-based algorithms and De Bruijn graphs for DNA sequence generation and analysis.",
    link: "https://github.com/rooman-dev/Rosseta",
  },
  {
    index: "03",
    title: "VoiceSnap",
    description:
      "A real-time, push-to-talk voice communication platform built with Python and Socket Programming for low-latency audio streaming.",
    link: "https://github.com/rooman-dev/VoiceSnap",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <main>

        {/* ════ HOME ════════════════════════════════════════ */}
        <section
          id="home"
          className="min-h-screen flex items-center snap-start snap-always"
        >
          <div className="mx-auto max-w-[1400px] w-full px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col md:flex-row items-center gap-12 md:gap-10 py-24 pt-32">
          {/* Left — text content */}
          <div className="w-full md:w-[50%] flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/40 text-xs tracking-[0.5em] uppercase mb-10"
            >
              Portfolio / 2026
            </motion.p>

            <TypingText
              as="h1"
              hoverStyle="outline"
              onMount
              className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter"
              delay={0.15}
              speed={0.08}
            >
              ROOMAN
            </TypingText>

            <TypingText
              as="h1"
              hoverStyle="solid"
              onMount
              className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter"
              delay={0.7}
              speed={0.08}
            >
              AHMED
            </TypingText>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 w-full flex flex-col gap-3"
            >
              {/* Line 1 — scrolls left */}
              <div className="overflow-hidden relative h-[28px]">
                <div
                  className="absolute whitespace-nowrap flex items-center gap-8 text-white/40 text-sm sm:text-base font-light"
                  style={{ animation: 'ticker 18s linear infinite' }}
                >
                  <span>Bridging raw backend power with relentless user focus. I engineer scalable systems designed to dismantle real-world inefficiencies.</span>
                  <span className="text-white/15">—</span>
                  <span>Bridging raw backend power with relentless user focus. I engineer scalable systems designed to dismantle real-world inefficiencies.</span>
                  <span className="text-white/15">—</span>
                </div>
              </div>

              {/* Line 2 — scrolls right */}
              <div className="overflow-hidden relative h-[28px]">
                <div
                  className="absolute whitespace-nowrap flex items-center gap-8 text-white/40 text-sm sm:text-base font-light"
                  style={{ animation: 'tickerReverse 22s linear infinite' }}
                >
                  <span>Driven by logic. Refined by design. I engineer scalable, full-stack ecosystems that transform complex friction into effortless performance.</span>
                  <span className="text-white/15">—</span>
                  <span>Driven by logic. Refined by design. I engineer scalable, full-stack ecosystems that transform complex friction into effortless performance.</span>
                  <span className="text-white/15">—</span>
                </div>
              </div>

              {/* Line 3 — scrolls left */}
              <div className="overflow-hidden relative h-[28px]">
                <div
                  className="absolute whitespace-nowrap flex items-center gap-8 text-white/40 text-sm sm:text-base font-light"
                  style={{ animation: 'ticker 20s linear infinite' }}
                >
                  <span>Architecting logic. Designing function. I build high-performance software that turns complex problems into elegant, scalable solutions.</span>
                  <span className="text-white/15">—</span>
                  <span>Architecting logic. Designing function. I build high-performance software that turns complex problems into elegant, scalable solutions.</span>
                  <span className="text-white/15">—</span>
                </div>
              </div>

              {/* Line 4 — scrolls right */}
              <div className="overflow-hidden relative h-[28px]">
                <div
                  className="absolute whitespace-nowrap flex items-center gap-8 text-white/40 text-sm sm:text-base font-light"
                  style={{ animation: 'tickerReverse 16s linear infinite' }}
                >
                  <span>Translating complex backend architecture into sharp, scalable solutions. I build software that solves real-world friction.</span>
                  <span className="text-white/15">—</span>
                  <span>Translating complex backend architecture into sharp, scalable solutions. I build software that solves real-world friction.</span>
                  <span className="text-white/15">—</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-14 flex gap-5"
            >
              <a
                href="#contact"
                className="px-12 py-4 bg-white text-black text-base tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
              >
                Hire Me ?
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-16"
            >
              <span className="block text-white/20 text-xs tracking-[0.3em] uppercase scroll-bounce">
                Scroll ↓
              </span>
            </motion.div>
          </div>

            {/* Right — profile image */}
            <div className="w-full md:w-[50%] flex-shrink-0">
              <HeroImage />
            </div>
          </div>
        </section>

        {/* ════ ABOUT — WHY INNOVATE + BIO ═════════════════ */}
        <section
          id="about"
          className="min-h-screen flex items-center snap-start snap-always"
        >
          <div className="mx-auto max-w-[1400px] w-full px-6 sm:px-10 md:px-14 lg:px-20 py-24">
          <TypingText
            as="h2"
            hoverStyle="solid"
            className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tighter mb-14"
            speed={0.05}
          >
            WHY INNOVATE
          </TypingText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl text-white/50 text-lg sm:text-xl md:text-2xl leading-relaxed font-light"
          >
            Innovation isn&apos;t about novelty for its own sake &mdash; it&apos;s about
            refusing to accept friction as inevitable. Every system has a seam
            that can be{" "}
            <ScrollHighlight delay={0.3}>eliminated</ScrollHighlight>,
            every workflow has a bottleneck that can be{" "}
            <ScrollHighlight delay={0.5}>dissolved</ScrollHighlight>.
            I push technical boundaries not to prove what&apos;s possible, but to
            close the gap between what software does and what it{" "}
            <ScrollHighlight delay={0.7}>should do</ScrollHighlight>.
            The best engineering is invisible &mdash; you only notice when it&apos;s
            absent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-end mt-10"
          >
            <a
              href="#projects"
              className="px-12 py-4 bg-white text-black text-base tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
            >
              Inspiration ?
            </a>
          </motion.div>

          <div className="border-t border-white/10 pt-16 mt-20">
          <TypingText
            as="h2"
            hoverStyle="solid"
            className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tighter mb-14"
          >
            BIO
          </TypingText>

          <div className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-3xl space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I build at the intersection of{" "}
              <ScrollHighlight delay={0.3}>
                systems design
              </ScrollHighlight>{" "}
              and{" "}
              <ScrollHighlight delay={0.5}>
                creative engineering
              </ScrollHighlight>
              . Obsessed with software that is both{" "}
              <ScrollHighlight delay={0.7}>
                performant and elegant
              </ScrollHighlight>
              , I focus on solving real problems with clean architecture
              and relentless iteration.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My domain spans{" "}
              <ScrollHighlight delay={0.3}>
                full-stack web development
              </ScrollHighlight>
              ,{" "}
              <ScrollHighlight delay={0.5}>
                distributed systems
              </ScrollHighlight>
              , and{" "}
              <ScrollHighlight delay={0.7}>
                machine learning pipelines
              </ScrollHighlight>
              . Great software is invisible &mdash; it simply works,
              beautifully and reliably.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-end mt-10"
          >
            <a
              href="https://docs.google.com/document/d/your-cv-id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-white text-black text-base tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
            >
              Download CV ?
            </a>
          </motion.div>
          </div>
          </div>
        </section>

        {/* ════ SELECTED WORKS ═════════════════════════════ */}
        <section
          id="projects"
          className="min-h-screen flex items-center snap-start snap-always"
        >
          <div className="mx-auto max-w-[1400px] w-full px-6 sm:px-10 md:px-14 lg:px-20 py-24">
          <TypingText
            as="h2"
            hoverStyle="solid"
            className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tighter mb-16"
          >
            SELECTED WORKS
          </TypingText>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.index}
                index={project.index}
                title={project.title}
                description={project.description}
                link={project.link}
                delay={i * 0.15}
              />
            ))}
          </div>
          </div>
        </section>

        {/* ════ CONTACT ════════════════════════════════════ */}
        <section
          id="contact"
          className="min-h-screen flex items-center snap-start snap-always"
        >
          <div className="mx-auto max-w-[1400px] w-full px-6 sm:px-10 md:px-14 lg:px-20 py-24">
          <TypingText
            as="h2"
            hoverStyle="solid"
            className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tighter mb-14"
          >
            LET&apos;S TALK
          </TypingText>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

            {/* Left — Contact form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 flex flex-col gap-6"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="flex-1 bg-transparent border-b border-white/15 py-4 text-white text-base placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 bg-transparent border-b border-white/15 py-4 text-white text-base placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-colors duration-300"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white/15 py-4 text-white text-base placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-colors duration-300"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="bg-transparent border-b border-white/15 py-4 text-white text-base placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-colors duration-300 resize-none"
              />

              <button
                type="submit"
                className="self-start mt-4 px-12 py-4 bg-white text-black text-base tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
              >
                Send Message ?
              </button>
            </motion.form>

            {/* Right — Links & info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:w-[320px] flex flex-col justify-between"
            >
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-3">
                    Email
                  </span>
                  <a
                    href="mailto:rooman.dev@gmail.com"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors duration-300"
                  >
                    rooman.dev@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-3">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/rooman-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors duration-300"
                  >
                    github.com/rooman-dev
                  </a>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex gap-4 mt-12">
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 hover:text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 hover:text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </a>

                <a
                  href="https://github.com/rooman-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 hover:text-white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/15 text-xs mt-20 tracking-[0.3em] uppercase"
          >
            &copy; 2026 Rooman Ahmed
          </motion.p>
          </div>
        </section>
      </main>
    </div>
  );
}
