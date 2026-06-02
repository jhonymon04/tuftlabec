"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="backdrop-blur-2xl bg-white/70 border border-zinc-200 rounded-3xl px-6 py-4 flex items-center justify-between shadow-xl">
        <h1
        onClick={() => {
        window.location.href = "/";
        }}
          className="
          text-2xl
          font-black
          tracking-tight
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          bg-clip-text
          text-transparent
          cursor-pointer
          hover:scale-105
          transition
          duration-300
          "
          >
            TuftLabEc
        </h1>       
         

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a href="#" className="hover:text-cyan-500 transition">
              Inicio
            </a>
             <Link
              href="/showroom"
              rel="noopener noreferrer"
              >
              ShowCase
            </Link>          

            <a href="#diseñador" className="hover:text-cyan-500 transition">
              Diseñador
            </a>

            <a href="#categorias" className="hover:text-cyan-500 transition">
              Categorías
            </a>

            <a href="#faq" className="hover:text-cyan-500 transition">
              FAQ
            </a>
          </nav>

          <Link
  href="/designer"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    justify-center
    px-6
    py-3
    rounded-full
    bg-gradient-to-r
    from-blue-500
    to-cyan-400
    text-white
    font-semibold
    shadow-lg
    shadow-blue-500/20
    hover:scale-105
    transition-all
    duration-300
  "
>
  Diseñar
</Link>
          
        </div>
      </div>
    </motion.header>
  );
}