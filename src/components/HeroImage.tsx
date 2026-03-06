"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────────────
   HeroImage — Right-side portrait in hero section
   ──────────────────────────────────────────────────────────────────
   Sits on the right side of the hero split layout.
   Gradients on all sides blend into the black bg.
   ────────────────────────────────────────────────────────────────── */

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full h-[70vh] md:h-[92vh] overflow-hidden"
    >
      <Image
        src="/profile.png"
        alt="Rooman Ahmed — Portrait"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover object-top"
        quality={90}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-44 bg-gradient-to-r from-black to-transparent pointer-events-none" />

      {/* Right fade — removed so image bleeds to edge */}
    </motion.div>
  );
}
