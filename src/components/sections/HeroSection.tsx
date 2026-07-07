"use client";

import { motion } from "framer-motion";
import MarqueeStrip from "@/components/ui/MarqueeStrip";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

const scaleIn = {
  hidden: { scale: 1.08, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1, ease: easeOut } },
};

const marqueeImages = [
  { src: "/images/hero/Remove_logos_and_text_from_202607012110.jpeg", alt: "Maison moderne" },
  { src: "/images/hero/luxury_pool_ad.png", alt: "Piscine de luxe" },
  { src: "/images/hero/C11_Architectural (1).png", alt: "Vue architecturale" },
  { src: "/images/hero/C15_Perspective_Illusion.png", alt: "Perspective illusion" },
];

const tags = ["Planification intelligente", "Flux de travail fluide", "Execution precise"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1f1f2]">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="relative h-[500px] overflow-hidden rounded-lg md:h-[600px] lg:h-[700px]">
            <motion.img
              src="/images/hero/Remove_logos_and_text_from_202607012107.jpeg"
              alt="Vue architecturale"
              className="absolute inset-0 h-full w-full object-cover"
              variants={scaleIn}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={fadeUp}
            >
              <h1
                className="font-bayon text-center text-7xl leading-none tracking-tight text-white drop-shadow-lg md:text-8xl lg:text-9xl"
                style={{ fontFamily: "var(--font-bayon)" }}
              >
                CKC
              </h1>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col gap-8 pb-8 md:flex-row md:items-start md:gap-12">
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <MarqueeStrip duration={25}>
                <div className="flex gap-4 pr-4">
                  {marqueeImages.map((img, i) => (
                    <div
                      key={i}
                      className="h-48 w-64 flex-shrink-0 overflow-hidden rounded-lg md:h-56 md:w-80"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </MarqueeStrip>
            </motion.div>

            <motion.div className="md:w-1/2" variants={fadeUp}>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-[#535353] md:text-lg">
              _Nous creons des solutions architecturales innovantes avec des
              dispositions structurees, une planification detaillee et des
              processus de conception guides offrant clarte, efficacite et
              precision.
              </p>

              <MarqueeStrip reverse className="py-4" duration={15}>
                <div className="flex gap-12 pr-12">
                  {tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 flex-shrink-0">
                      <svg className="h-4 w-4 text-[#535353]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-sm font-medium uppercase tracking-wider text-[#1e1e1e]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </MarqueeStrip>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
