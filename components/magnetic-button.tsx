"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  // Cambiamos HTMLButtonElement a HTMLAnchorElement
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement> // También lo cambiamos aquí
  ) => {
    const link = ref.current;

    if (!link) return;

    const rect = link.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    link.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.a
      ref={ref}
      href="/designer" 
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-full font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition duration-300 cursor-pointer"
    >
      {children}
    </motion.a>
  );
}