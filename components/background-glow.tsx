"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-purple-400/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-cyan-300/10 blur-[120px] rounded-full"
      />
    </div>
  );
}