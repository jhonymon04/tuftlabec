"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Palette,
  Maximize,
  Layers3,
} from "lucide-react";

const colors = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-cyan-400",
  "bg-pink-400",
  "bg-orange-400",
];

export default function DesignerPreview() {
  return (
    <section  className="relative py-40 px-6 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-blue-500 text-xs mb-5">
            DESIGNER EXPERIENCE
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Una experiencia
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}interactiva.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[35px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-2xl"
          >

            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                <Layers3 size={24} />
              </div>

              <div>
                <h3 className="font-black text-xl">
                  Tuft Designer
                </h3>

                <p className="text-zinc-500 text-sm">
                  Customize your rug
                </p>
              </div>
            </div>

            {/* Upload */}
            <div className="rounded-3xl border-2 border-dashed border-zinc-200 p-8 text-center bg-white/60">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-5">
                <Upload size={28} />
              </div>

              <h4 className="font-bold text-lg">
                Upload Design
              </h4>

              <p className="text-zinc-500 text-sm mt-2">
                PNG, JPG or SVG
              </p>

              <button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
                Select File
              </button>
            </div>

            {/* Colors */}
            <div className="mt-10">

              <div className="flex items-center gap-2 mb-5">
                <Palette size={18} />
                <h4 className="font-bold">
                  Colors
                </h4>
              </div>

              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                   type="button"
                    key={color}
                    className={`w-10 h-10 rounded-full ${color} shadow-lg hover:scale-110 transition`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-10">

              <div className="flex items-center gap-2 mb-5">
                <Maximize size={18} />
                <h4 className="font-bold">
                  Size
                </h4>
              </div>

              <div className="flex gap-3 flex-wrap">

                <button className="px-5 py-3 rounded-full bg-blue-500 text-white text-sm font-medium">
                  Small
                </button>

                <button className="px-5 py-3 rounded-full bg-white border border-zinc-200 text-sm font-medium">
                  Medium
                </button>

                <button className="px-5 py-3 rounded-full bg-white border border-zinc-200 text-sm font-medium">
                  Large
                </button>
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-2xl overflow-hidden min-h-[700px]"
          >

            {/* Glow */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full" />

            {/* Fake Workspace */}
            <div className="relative h-full flex items-center justify-center p-10">

              <motion.div
                animate={{
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[420px] h-[420px] rounded-[60px] bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_80px_rgba(59,130,246,0.25)]"
              >

                {/* Fake Texture */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:18px_18px]" />

                {/* Inner Card */}
                <div className="absolute inset-[35px] rounded-[40px] bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">

                  <div className="text-center">

                    <h3 className="text-5xl font-black text-white">
                      YOUR
                    </h3>

                    <h3 className="text-5xl font-black text-white">
                      DESIGN
                    </h3>

                    <p className="text-white/80 mt-4">
                      Interactive Preview
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}