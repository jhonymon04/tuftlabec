"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function DesignerCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/60 backdrop-blur-2xl p-12 md:p-20 shadow-2xl"
        >

          {/* Floating Gradient */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400/20 blur-[100px] rounded-full" />

          <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-400/20 blur-[100px] rounded-full" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles size={16} />
              Interactive Designer
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none max-w-5xl">
              Diseña tu tapete
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}en tiempo real.
              </span>
            </h2>

            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              Sube imágenes, cambia colores, ajusta tamaños y visualiza tu diseño antes de fabricarlo.
            </p>

            <div className="flex flex-col md:flex-row gap-5 mt-12">

              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-5 rounded-full font-semibold text-lg hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                Abrir diseñador
              </button>

              <button className="bg-white/70 border border-zinc-200 px-8 py-5 rounded-full font-medium hover:bg-white transition duration-300">
                Ver demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}