"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div
          className="
            backdrop-blur-2xl
            bg-white/70
            border
            border-zinc-200
            rounded-[24px]
            sm:rounded-3xl
            px-4
            sm:px-6
            py-3
            sm:py-4
            shadow-xl
          "
        >
          {/* TOP BAR */}

          <div className="flex items-center justify-between gap-4">
            {/* LOGO */}

            <h1
              onClick={() => {
                window.location.href = "/";
              }}
              className="
                text-xl
                sm:text-2xl
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
                shrink-0
              "
            >
              TuftLabEc
            </h1>

            {/* DESKTOP NAV */}

            <nav
              className="
                hidden
                md:flex
                items-center
                gap-8
                text-sm
                text-zinc-600
              "
            >
              <a
                href="#"
                className="hover:text-cyan-500 transition"
              >
                Inicio
              </a>

              <Link
                href="/showroom"
                className="hover:text-cyan-500 transition"
              >
                ShowCase
              </Link>

              <a
                href="#diseñador"
                className="hover:text-cyan-500 transition"
              >
                Diseñador
              </a>

              <a
                href="#faq"
                className="hover:text-cyan-500 transition"
              >
                FAQ
              </a>
            </nav>

            {/* RIGHT SIDE */}

            <div className="flex items-center gap-3">
              {/* DESKTOP BUTTON */}

              <Link
                href="/designer"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden
                  sm:flex
                  items-center
                  justify-center
                  px-5
                  md:px-6
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  text-white
                  text-sm
                  md:text-base
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

              {/* MOBILE MENU BUTTON */}

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="
                  md:hidden
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  bg-zinc-100
                  border
                  border-zinc-200
                  text-zinc-700
                "
              >
                {mobileMenu ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}

          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  md:hidden
                  overflow-hidden
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    pt-5
                    pb-2
                  "
                >
                  <a
                    href="#"
                    onClick={() => setMobileMenu(false)}
                    className="
                      px-4
                      py-3
                      rounded-2xl
                      bg-zinc-50
                      text-zinc-700
                      font-medium
                    "
                  >
                    Inicio
                  </a>

                  <Link
                    href="/showroom"
                    onClick={() => setMobileMenu(false)}
                    className="
                      px-4
                      py-3
                      rounded-2xl
                      bg-zinc-50
                      text-zinc-700
                      font-medium
                    "
                  >
                    ShowCase
                  </Link>

                  <a
                    href="#diseñador"
                    onClick={() => setMobileMenu(false)}
                    className="
                      px-4
                      py-3
                      rounded-2xl
                      bg-zinc-50
                      text-zinc-700
                      font-medium
                    "
                  >
                    Diseñador
                  </a>

                  <a
                    href="#faq"
                    onClick={() => setMobileMenu(false)}
                    className="
                      px-4
                      py-3
                      rounded-2xl
                      bg-zinc-50
                      text-zinc-700
                      font-medium
                    "
                  >
                    FAQ
                  </a>

                  {/* MOBILE CTA */}

                  <Link
                    href="/designer"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenu(false)}
                    className="
                      mt-2
                      flex
                      items-center
                      justify-center
                      px-5
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400
                      text-white
                      font-semibold
                      shadow-lg
                    "
                  >
                    Diseñar
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}