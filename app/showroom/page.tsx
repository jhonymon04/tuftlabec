"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  MessageCircle,
  Menu,
  Minus,
} from "lucide-react";

const categories = [
  "Todos",
  "Gaming",
  "Anime",
  "Minimal",
  "Abstract",
  "Custom",
];

const rugs = [
  {
    title: "Cyber Oni",
    category: "Gaming",
    image: "/images/gaming.jpg",
    size: "large",
    slug: "cyber-oni",
    description:
      "Una pieza imponente inspirada en la cultura cyberpunk y las máscaras tradicionales Oni. Perfecta para darle un toque agresivo y vibrante a tu setup de gaming.",
  },
  {
    title: "RGB Temple",
    category: "Gaming",
    image: "/images/gaming2.jpg",
    size: "small",
    slug: "rgb-temple",
    description:
      "Geometría sagrada combinada con estética gamer. Sus colores contrastantes están diseñados para resaltar bajo la iluminación LED de tu habitación.",
  },
  {
    title: "Neon Dreams",
    category: "Anime",
    image: "/images/anime.jpg",
    size: "small",
    slug: "neon-dreams",
    description:
      "Captura la esencia de las noches de Tokio y tus animes favoritos. Una alfombra con colores neón que se convierte en el centro de atención.",
  },
  {
    title: "Kawaii Night",
    category: "Anime",
    image: "/images/anime2.jpg",
    size: "vertical",
    slug: "kawaii-night",
    description:
      "Un diseño tierno y relajante, ideal para pies descalzos gracias a nuestra lana premium de alta densidad. Suavidad extrema garantizada.",
  },
  {
    title: "Soft Geometry",
    category: "Minimal",
    image: "/images/minimal.png",
    size: "vertical",
    slug: "soft-geometry",
    description:
      "Para los amantes del diseño nórdico. Tonos pastel y formas fluidas que aportan calma y sofisticación a cualquier estudio u oficina en casa.",
  },
  {
    title: "Nordic Space",
    category: "Minimal",
    image: "/images/minimal2.jpg",
    size: "horizontal",
    slug: "nordic-space",
    description:
      "Minimalismo puro. Una alfombra que no compite con tus muebles, sino que los abraza y unifica el espacio visualmente.",
  },
  {
    title: "Color Collapse",
    category: "Abstract",
    image: "/images/abstract.jpg",
    size: "horizontal",
    slug: "color-collapse",
    description:
      "Una explosión controlada de creatividad. Este diseño abstracto es una obra de arte para el suelo, hecha a mano hilo por hilo.",
  },
  {
    title: "Dream Shapes",
    category: "Abstract",
    image: "/images/abstract2.jpg",
    size: "small",
    slug: "dream-shapes",
    description:
      "Formas orgánicas y colores de ensueño que invitan a la relajación. Un toque moderno e irregular que rompe con la monotonía.",
  },
  {
    title: "Studio Piece",
    category: "Custom",
    image: "/images/custom.jpg",
    size: "large",
    slug: "studio-piece",
    description:
      "Diseño exclusivo de tamaño gigante. Creado específicamente para estudios de grabación o creadores de contenido que buscan una estética impecable.",
  },
  {
    title: "Collector Edition",
    category: "Custom",
    image: "/images/custom2.jpg",
    size: "small",
    slug: "collector-edition",
    description:
      "Edición limitada. Detalles minúsculos logrados con técnicas avanzadas de tufting para los coleccionistas más exigentes.",
  },
];

export default function ShowroomPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedRug, setSelectedRug] =
    useState<typeof rugs[0] | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9fc] text-[#0f172a]">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            md:top-[-200px]
            md:left-[-120px]
            w-[280px]
            h-[280px]
            md:w-[500px]
            md:h-[500px]
            rounded-full
            bg-blue-400/15
            blur-[100px]
            md:blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            md:bottom-[-200px]
            md:right-[-120px]
            w-[280px]
            h-[280px]
            md:w-[500px]
            md:h-[500px]
            rounded-full
            bg-cyan-300/15
            blur-[100px]
            md:blur-[120px]
          "
        />
      </div>

      {/* NAVBAR */}

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
            <div className="flex items-center justify-between gap-4">
              {/* LOGO */}

              <Link href="/">
                <h1
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
              </Link>

              {/* DESKTOP NAV */}

              <nav
                className="
                  hidden
                  md:flex
                  items-center
                  gap-8
                  text-sm
                  font-medium
                  text-zinc-600
                "
              >
                <Link
                  href="/"
                  className="hover:text-cyan-500 transition"
                >
                  Inicio
                </Link>

                <Link
                  href="/showroom"
                  className="hover:text-cyan-500 transition"
                >
                  ShowCase
                </Link>

                <Link
                  href="/#diseñador"
                  className="hover:text-cyan-500 transition"
                >
                  Diseñador
                </Link>

                <Link
                  href="/#faq"
                  className="hover:text-cyan-500 transition"
                >
                  FAQ
                </Link>
              </nav>

              {/* RIGHT */}

              <div className="flex items-center gap-3">
                <Link
                  href="/designer"
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
                  onClick={() =>
                    setMobileMenu(!mobileMenu)
                  }
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
                    <Minus size={20} />
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
                    <Link
                      href="/"
                      onClick={() =>
                        setMobileMenu(false)
                      }
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
                    </Link>

                    <Link
                      href="/showroom"
                      onClick={() =>
                        setMobileMenu(false)
                      }
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

                    <Link
                      href="/#diseñador"
                      onClick={() =>
                        setMobileMenu(false)
                      }
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
                    </Link>

                    <Link
                      href="/#faq"
                      onClick={() =>
                        setMobileMenu(false)
                      }
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
                    </Link>

                    <Link
                      href="/designer"
                      onClick={() =>
                        setMobileMenu(false)
                      }
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
                      Diseñar Rug
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* HEADER */}

      <section
        className="
          relative
          z-10
          px-4
          sm:px-6
          md:px-14
          pt-28
          md:pt-32
          pb-20
          md:pb-24
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-10
            mb-14
            md:mb-20
          "
        >
          <div>
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-blue-500
                text-[10px]
                sm:text-xs
                font-bold
              "
            >
              SHOWROOM
            </p>

            <h1
              className="
                mt-5
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-black
                tracking-[-0.06em]
                leading-[0.92]
              "
            >
              Rugs que hablan
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-violet-500
                  bg-clip-text
                  text-transparent
                "
              >
                por sí solos.
              </span>
            </h1>

            <p
              className="
                mt-6
                text-zinc-600
                text-base
                sm:text-lg
                max-w-2xl
                leading-relaxed
              "
            >
              Explora colecciones visuales creadas
              para setups, estudios y espacios
              creativos.
            </p>
          </div>

          {/* FILTERS */}

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-4
                  sm:px-5
                  py-2.5
                  sm:py-3
                  rounded-full
                  text-xs
                  sm:text-sm
                  font-semibold
                  transition-all
                  duration-300
                  border
                  ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-lg shadow-blue-500/20"
                      : "bg-white/70 backdrop-blur-xl border-white/60 text-zinc-700 hover:bg-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            md:gap-7
            auto-rows-[260px]
            md:auto-rows-[280px]
          "
        >
          <AnimatePresence>
            {rugs.map((rug, index) => {
              const isActive =
                activeCategory === "Todos"
                  ? true
                  : rug.category === activeCategory;

              if (!isActive) return null;

              return (
                <motion.div
                  key={rug.slug}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  onClick={() =>
                    setSelectedRug(rug)
                  }
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    md:rounded-[38px]
                    shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    cursor-pointer

                    ${
                      rug.size === "large"
                        ? "xl:col-span-2 xl:row-span-2"
                        : rug.size === "vertical"
                        ? "row-span-2"
                        : rug.size === "horizontal"
                        ? "xl:col-span-2"
                        : ""
                    }
                  `}
                >
                  {/* IMAGE */}

                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={rug.image}
                      alt={rug.title}
                      fill
                      className="
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-700
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-500
                        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]
                      "
                    />
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      justify-between
                      h-full
                      p-5
                      md:p-7
                    "
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="
                          px-3
                          md:px-4
                          py-2
                          rounded-full
                          bg-white/10
                          backdrop-blur-xl
                          border
                          border-white/20
                          text-[10px]
                          md:text-xs
                          font-semibold
                          text-white
                        "
                      >
                        {rug.category}
                      </span>

                      <button
                        className="
                          w-10
                          h-10
                          md:w-12
                          md:h-12
                          rounded-full
                          bg-white/10
                          backdrop-blur-xl
                          border
                          border-white/20
                          flex
                          items-center
                          justify-center
                          text-white
                          hover:rotate-45
                          transition-all
                        "
                      >
                        <ArrowUpRight size={18} />
                      </button>
                    </div>

                    <div>
                      <h3
                        className="
                          text-2xl
                          md:text-4xl
                          font-black
                          text-white
                          tracking-tight
                        "
                      >
                        {rug.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-zinc-200
                          text-sm
                          max-w-sm
                          leading-relaxed
                          opacity-100
                          md:opacity-0
                          md:group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      >
                        Haz clic para ver más detalles.
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selectedRug && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setSelectedRug(null)
              }
              className="
                fixed
                inset-0
                bg-zinc-900/40
                backdrop-blur-sm
                z-40
              "
            />

            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "100%",
                opacity: 0,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="
                fixed
                bottom-0
                left-0
                w-full
                z-50
                flex
                justify-center
                p-3
                md:p-6
                pointer-events-none
              "
            >
              <div
                className="
                  bg-white/80
                  backdrop-blur-2xl
                  border
                  border-white
                  w-full
                  max-w-5xl
                  rounded-[28px]
                  md:rounded-[40px]
                  shadow-2xl
                  overflow-hidden
                  pointer-events-auto
                  flex
                  flex-col
                  md:flex-row
                  max-h-[90vh]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    w-full
                    md:w-1/2
                    h-64
                    sm:h-80
                    md:h-auto
                    bg-zinc-100
                  "
                >
                  <Image
                    src={selectedRug.image}
                    alt={selectedRug.title}
                    fill
                    className="object-cover"
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      to-transparent
                      md:hidden
                    "
                  />
                </div>

                {/* CONTENT */}

                <div
                  className="
                    w-full
                    md:w-1/2
                    p-6
                    sm:p-8
                    md:p-12
                    flex
                    flex-col
                    justify-between
                    overflow-y-auto
                  "
                >
                  <div>
                    <div
                      className="
                        flex
                        justify-between
                        items-start
                        mb-6
                      "
                    >
                      <span
                        className="
                          px-4
                          py-1.5
                          rounded-full
                          bg-blue-100
                          text-blue-700
                          text-[10px]
                          md:text-xs
                          font-bold
                          tracking-wide
                          uppercase
                        "
                      >
                        {selectedRug.category}
                      </span>

                      <button
                        onClick={() =>
                          setSelectedRug(null)
                        }
                        className="
                          w-10
                          h-10
                          rounded-full
                          bg-zinc-100
                          flex
                          items-center
                          justify-center
                          text-zinc-500
                          hover:bg-zinc-200
                          hover:text-zinc-800
                          transition-colors
                        "
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <h2
                      className="
                        text-3xl
                        md:text-4xl
                        font-black
                        text-zinc-900
                        tracking-tight
                        mb-4
                      "
                    >
                      {selectedRug.title}
                    </h2>

                    <p
                      className="
                        text-zinc-600
                        text-base
                        md:text-lg
                        leading-relaxed
                        mb-8
                      "
                    >
                      {selectedRug.description}
                    </p>

                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-4
                        mb-8
                      "
                    >
                      <div
                        className="
                          bg-zinc-50
                          p-4
                          rounded-2xl
                          border
                          border-zinc-100
                        "
                      >
                        <span
                          className="
                            block
                            text-xs
                            font-bold
                            text-zinc-400
                            uppercase
                            mb-1
                          "
                        >
                          Formato
                        </span>

                        <span
                          className="
                            font-semibold
                            text-zinc-800
                            capitalize
                          "
                        >
                          {selectedRug.size}
                        </span>
                      </div>

                      <div
                        className="
                          bg-zinc-50
                          p-4
                          rounded-2xl
                          border
                          border-zinc-100
                        "
                      >
                        <span
                          className="
                            block
                            text-xs
                            font-bold
                            text-zinc-400
                            uppercase
                            mb-1
                          "
                        >
                          Elaboración
                        </span>

                        <span
                          className="
                            font-semibold
                            text-zinc-800
                          "
                        >
                          100% Tufting a mano
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}

                  <a
                    href={`https://wa.me/593999999999?text=${encodeURIComponent(
                      `¡Hola! Me interesa el diseño "${selectedRug.title}" de su Showroom. ¿Podrían darme más información?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full
                      py-4
                      bg-zinc-900
                      hover:bg-blue-600
                      text-white
                      rounded-2xl
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-colors
                      shadow-lg
                      shadow-zinc-900/20
                    "
                  >
                    <MessageCircle size={20} />
                    Me interesa este diseño
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}