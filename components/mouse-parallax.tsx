"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute top-[15%] left-[10%] w-40 h-40 rounded-[40px] bg-gradient-to-br from-blue-400/30 to-cyan-300/30 backdrop-blur-2xl border border-white/30 shadow-2xl"
      />

      <motion.div
        style={{
          x: smoothX.get() * -1,
          y: smoothY.get() * -1,
        }}
        className="absolute bottom-[15%] right-[10%] w-56 h-56 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-300/30 blur-sm shadow-2xl"
      />

      <motion.div
        style={{
          x: smoothX.get() * 0.5,
          y: smoothY.get() * 0.5,
        }}
        className="absolute top-[40%] right-[20%] w-24 h-24 rounded-full bg-cyan-300/40 blur-md"
      />
    </>
  );
}