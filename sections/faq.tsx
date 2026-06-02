"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "¿Puedo subir mi propio diseño?",
    answer:
      "Sí. Puedes enviarnos imágenes, ilustraciones, conceptos o cualquier idea visual para convertirla en un rug completamente personalizado.",
  },
  {
    question: "¿Los rugs son hechos a mano?",
    answer:
      "Sí. Cada pieza es cuidadosamente tufted a mano utilizando materiales premium para garantizar calidad y detalle.",
  },
  {
    question: "¿Qué tamaños manejan?",
    answer:
      "Trabajamos tamaños personalizados según tu espacio. Desde rugs pequeños decorativos hasta piezas grandes para setups o estudios.",
  },
  {
    question: "¿Realizan envíos?",
    answer:
      "Sí. Realizamos envíos nacionales EC con costo de envio para que puedas recibir tu rug desde cualquier lugar.",
  },
  {
    question: "¿Cuánto tarda la fabricación?",
    answer:
      "El tiempo promedio depende del diseño y tamaño del rug, pero normalmente toma entre 1 y 3 semanas.",
  },
  {
    question: "¿Cómo funciona el diseñador interactivo?",
    answer:
      "Podrás subir imágenes, personalizar tamaños, colores y visualizar tu diseño antes de realizar el pedido.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        py-24
        md:py-40
        px-4
        sm:px-6
        md:px-16
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-[-120px]
          md:left-[-200px]
          w-[280px]
          h-[280px]
          md:w-[500px]
          md:h-[500px]
          rounded-full
          bg-blue-400/10
          blur-[100px]
          md:blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-120px]
          md:right-[-200px]
          w-[280px]
          h-[280px]
          md:w-[500px]
          md:h-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[100px]
          md:blur-[140px]
        "
      />

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[420px_1fr]
          gap-12
          lg:gap-20
          items-start
        "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            lg:sticky
            lg:top-32
            h-fit
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
              border
              border-blue-200
              bg-white/70
              backdrop-blur-xl
              text-[10px]
              sm:text-xs
              font-bold
              tracking-[0.25em]
              text-blue-700
            "
          >
            ✦ FAQ
          </div>

          <h2
            className="
              mt-6
              md:mt-8
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-black
              tracking-[-0.06em]
              leading-[0.92]
              text-[#0f172a]
              break-words
            "
          >
            Preguntas
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
              frecuentes.
            </span>
          </h2>

          <p
            className="
              mt-6
              md:mt-8
              text-zinc-600
              text-base
              sm:text-lg
              leading-relaxed
              max-w-md
            "
          >
            Todo lo que necesitas saber sobre el proceso,
            personalización, envíos y fabricación de tu rug.
          </p>
        </motion.div>

        {/* FAQ LIST */}

        <div className="flex flex-col gap-5 sm:gap-6">
          {faqItems.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[24px]
                  md:rounded-[32px]
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-2xl
                  shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)]
                  transition-all
                  duration-500
                "
              >
                {/* QUESTION */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    sm:gap-6
                    px-5
                    sm:px-8
                    py-5
                    sm:py-8
                    text-left
                  "
                >
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        font-bold
                        tracking-[0.2em]
                        text-blue-500
                        uppercase
                      "
                    >
                      0{index + 1}
                    </p>

                    <h3
                      className="
                        mt-2
                        sm:mt-3
                        text-lg
                        sm:text-2xl
                        md:text-3xl
                        font-black
                        leading-tight
                        text-[#0f172a]
                        break-words
                      "
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-11
                      h-11
                      sm:w-14
                      sm:h-14
                      rounded-full
                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-400
                      text-white
                      shrink-0
                      shadow-lg
                    "
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div
                        className="
                          px-5
                          sm:px-8
                          pb-5
                          sm:pb-8
                          pr-5
                          sm:pr-20
                        "
                      >
                        <p
                          className="
                            text-zinc-600
                            text-base
                            sm:text-lg
                            leading-relaxed
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}