"use client";

import { motion } from "framer-motion";
import FloatingBadges from "@/components/floating-badges";
import MagneticButton from "@/components/magnetic-button";
import MouseParallax from "@/components/mouse-parallax";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-zinc-900">

      <FloatingBadges />
      <MouseParallax />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-[0.5em] text-blue-500 text-xs md:text-sm mb-6"
        >
          TUFTING REIMAGINED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none max-w-6xl"
        >
          Diseña algo
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}único.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-zinc-600 text-lg md:text-xl mt-8 leading-relaxed"
        >
          Crea tapetes personalizados inspirados en anime, gaming y cultura digital con una experiencia interactiva moderna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12"
        >
<div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

  <MagneticButton>
    Crear mi tapete
  </MagneticButton>

 
  <Link
              href="/showroom"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-200 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-white transition duration-300 shadow-lg">
              
              Ver diseños
            </Link> 
                     
</div>
        </motion.div>
      </motion.div>
    </section>
  );
}