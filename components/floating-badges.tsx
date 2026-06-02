"use client";

import { motion } from "framer-motion";

const badges = [
  "Anime",
  "Gaming",
  "Custom",
  "Creative",
  "Setup",
  "Design",
];

export default function FloatingBadges() {
  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`hidden lg:flex absolute z-20 px-5 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl text-sm font-medium text-zinc-700
          
          ${
            index === 0 && "top-[25%] left-[10%]"
          }

          ${
            index === 1 && "top-[20%] right-[12%]"
          }

          ${
            index === 2 && "bottom-[20%] left-[12%]"
          }

          ${
            index === 3 && "bottom-[18%] right-[10%]"
          }

          ${
            index === 4 && "top-[50%] left-[5%]"
          }

          ${
            index === 5 && "top-[55%] right-[5%]"
          }
          `}
        >
          ✦ {badge}
        </motion.div>
      ))}
    </>
  );
}