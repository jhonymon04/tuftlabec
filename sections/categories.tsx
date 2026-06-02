"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Sparkles,
  Shapes,
  Palette,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Gaming",
    description:
      "Rugs inspirados en setups inmersivos, luces neon y cultura gamer.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    icon: Gamepad2,
    large: true,
  },
  {
    title: "Minimalistas",
    description:
      "Diseños limpios y modernos para espacios sofisticados.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    icon: Sparkles,
  },
  {
    title: "Personalizados",
    description:
      "Convertimos cualquier idea en una pieza totalmente única.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    icon: Shapes,
  },
  {
    title: "Abstractos",
    description:
      "Formas, colores y texturas convertidas en arte textil.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    icon: Palette,
  },
  {
    title: "Naturales",
    description:
      "Inspirados en tonos orgánicos y espacios cálidos.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    icon: Leaf,
  },
];

export default function Categories() {
  return (
    <section id="categorias"
      className="
        relative
        z-10
        px-8
        md:px-16
        py-32
      "
    >
      {/* TOP */}

      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
        "
      >
        <div className="max-w-3xl">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-blue-100
              text-blue-700
              text-sm
              font-semibold
            "
          >
            ✦ CATEGORÍAS
          </div>

          <h2
            className="
              mt-8
              text-5xl
              md:text-7xl
              font-black
              tracking-[-0.05em]
              leading-[0.95]
              text-[#0f172a]
            "
          >
            Explora nuestras
            <br />
            colecciones
          </h2>

          <p
            className="
              mt-8
              text-xl
              leading-relaxed
              text-zinc-600
              max-w-2xl
            "
          >
            Cada categoría está diseñada para inspirar tu
            creatividad y transformar tus espacios.
          </p>
        </div>

        {/* RIGHT TEXT */}

        <div className="relative">
          <div
            className="
              absolute
              -top-20
              left-0
              w-44
              h-44
              rounded-full
              bg-violet-400/20
              blur-[90px]
            "
          />

          <p
            className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-zinc-500
              max-w-sm
            "
          >
            Rugs creados para destacar,
            inspirados en pasión,
            diseño y autenticidad.
          </p>
        </div>
      </div>

      {/* GRID */}

      <div
        className="
          mt-24
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
          auto-rows-[320px]
        "
      >
        {/* LARGE CARD */}

        <motion.div
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[40px]
            lg:row-span-2
            bg-black
            shadow-[0_20px_80px_rgba(0,0,0,0.12)]
          "
        >
          <img
            src={categories[0].image}
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              top-8
              left-8
              w-16
              h-16
              rounded-full
              bg-blue-500/30
              backdrop-blur-xl
              flex
              items-center
              justify-center
              border
              border-white/20
            "
          >
            <Gamepad2 className="text-white" size={28} />
          </div>

          <div
            className="
              absolute
              bottom-10
              left-10
              right-10
            "
          >
            <h3
              className="
                text-5xl
                font-black
                text-white
              "
            >
              Gaming
            </h3>

            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-white/75
                max-w-sm
              "
            >
              Rugs inspirados en el mundo gamer.
              Diseños que elevan tu setup al siguiente nivel.
            </p>

            <button
              className="
                mt-8
                w-16
                h-16
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                hover:scale-110
              "
            >
              <ArrowUpRight />
            </button>
          </div>
        </motion.div>

        {/* SMALL CARDS */}

        {categories.slice(1).map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                bg-white/70
                backdrop-blur-xl
                border
                border-white/60
                shadow-[0_15px_50px_rgba(0,0,0,0.06)]
              "
            >
              <img
                src={item.image}
                alt=""
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  opacity-40
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/80
                  to-white/30
                "
              />

              <div
                className="
                  relative
                  z-10
                  h-full
                  p-8
                  flex
                  flex-col
                  justify-between
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-300
                    to-violet-400
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-cyan-200/50
                  "
                >
                  <Icon className="text-white" size={26} />
                </div>

                <div>
                  <h3
                    className="
                      text-4xl
                      font-black
                      text-[#0f172a]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-lg
                      leading-relaxed
                      text-zinc-600
                    "
                  >
                    {item.description}
                  </p>

                  <button
                    className="
                      mt-6
                      w-14
                      h-14
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      hover:scale-110
                    "
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}