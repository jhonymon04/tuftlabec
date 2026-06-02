"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Upload,
  Sparkles,
  Package,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sube tu idea",
    description:
      "Comparte tu diseño, inspiración o concepto para comenzar el proceso.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Personalizamos",
    description:
      "Transformamos tu idea en una pieza visualmente impactante y única.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Lo fabricamos",
    description:
      "Creamos tu rug premium artesanalmente y lo enviamos a tu espacio.",
    icon: Package,
  },
];

export default function ProcessCTA() {
  return (
    <section id="diseñador"
      className="
        relative
        z-10
        px-8
        md:px-16
        py-32
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-400/10
          blur-[160px]
        "
      />

      {/* CONTAINER */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[50px]
          border
          border-white/40
          bg-white/50
          backdrop-blur-2xl
          shadow-[0_30px_100px_rgba(0,0,0,0.08)]
        "
      >
        {/* INTERNAL GLOW */}

        <div
          className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-120px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-violet-400/20
            blur-[120px]
          "
        />

        {/* GRID */}

        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-2
          "
        >
          {/* LEFT */}

          <div
            className="
              p-10
              md:p-16
              border-b
              lg:border-b-0
              lg:border-r
              border-white/40
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-blue-100
                text-blue-700
                text-sm
                font-semibold
              "
            >
              ✦ PROCESO CREATIVO
            </div>

            <h2
              className="
                mt-8
                text-5xl
                md:text-6xl
                font-black
                tracking-[-0.05em]
                leading-[0.95]
                text-[#0f172a]
              "
            >
              Diseñado para
              una experiencia
              inmersiva.
            </h2>

            <div className="mt-14 space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      group
                      flex
                      gap-6
                    "
                  >
                    {/* NUMBER */}

                    <div
                      className="
                        text-5xl
                        font-black
                        text-zinc-200
                        leading-none
                      "
                    >
                      {step.number}
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1">
                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >
                        <div
                          className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500
                            to-cyan-400
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            shadow-cyan-200/50
                          "
                        >
                          <Icon
                            size={24}
                            className="text-white"
                          />
                        </div>

                        <h3
                          className="
                            text-2xl
                            font-black
                            text-[#0f172a]
                          "
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-4
                          ml-[72px]
                          text-lg
                          leading-relaxed
                          text-zinc-600
                          max-w-md
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              p-10
              md:p-16
            "
          >
            {/* FLOATING CARD */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-gradient-to-br
                from-[#0f172a]
                via-[#111827]
                to-[#1e293b]
                p-10
                md:p-14
                shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  top-[-80px]
                  right-[-80px]
                  w-[220px]
                  h-[220px]
                  rounded-full
                  bg-cyan-400/20
                  blur-[90px]
                "
              />

              <div
                className="
                  absolute
                  bottom-[-100px]
                  left-[-100px]
                  w-[240px]
                  h-[240px]
                  rounded-full
                  bg-blue-500/20
                  blur-[100px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    text-cyan-300
                    text-sm
                    font-semibold
                    backdrop-blur-xl
                  "
                >
                  ✦ COMIENZA AHORA
                </div>

                <h3
                  className="
                    mt-8
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  Convierte
                  tu idea en
                  una pieza
                  coleccionable.
                </h3>

                <p
                  className="
                    mt-8
                    text-lg
                    leading-relaxed
                    text-zinc-300
                    max-w-lg
                  "
                >
                  Diseña rugs totalmente personalizados
                  creados para setups, estudios,
                  habitaciones y espacios únicos.
                </p>

                {/* BUTTONS */}

                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    gap-4
                  "
                >
                  <Link
                  href="/designer"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-3
                      bg-white
                      text-black
                      px-8
                      py-5
                      rounded-full
                      text-lg
                      font-semibold
                      hover:scale-105
                    "
                  >
                    Diseñar Rug

                    <ArrowRight size={18} />
                  </Link>

                  <Link
                  href="/showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                      px-8
                      py-5
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-lg
                      font-semibold
                      text-white
                      hover:bg-white/10
                    "
                       >
                     Ver Galería
                    </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}