"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const showcaseItems = [
  {
    title: "Anime Collection",
    image: "/images/anime.jpg",
    size: "large",
  },
  {
    title: "Gaming Setup",
    image: "/images/gaming.jpg",
    size: "small",
  },
  {
    title: "Minimal Aesthetic",
    image: "/images/minimal.png",
    size: "small",
  },
  {
    title: "Custom Rugs",
    image: "/images/custom.jpg",
    size: "large",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-40 px-6">

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.4em] text-blue-500 text-xs mb-5">
            SHOWCASE
          </p>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Inspiración para crear algo increíble.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[40px] border border-white/40 bg-white/60 backdrop-blur-2xl shadow-2xl ${
                item.size === "large"
                  ? "min-h-[550px]"
                  : "min-h-[380px]"
              }`}
            >

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8">

                <h3 className="text-4xl font-black text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-200 mt-4 max-w-md">
                  Explora diseños personalizados y estilos únicos para transformar cualquier espacio.
                </p>

                <Link
                  href="/showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-fit bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition duration-300"
                  >
                Explorar
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}