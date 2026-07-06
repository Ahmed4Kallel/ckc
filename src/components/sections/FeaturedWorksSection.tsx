"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    mainImage: "/images/featured/Remove_logos_and_text_from_202607012107.jpeg",
    smallImage: "/images/featured/ckc_pool_cleaned.png",
    titles: ["Salle a manger", "Residence Serenite", "Espace de vie Aura"],
    details: [
      { label: "Surface", value: "400 m\u00B2" },
      { label: "Salle de bain", value: "2" },
      { label: "Style", value: "Moderne" },
    ],
  },
  {
    mainImage: "/images/featured/Remove_logos_and_text_from_202607012110.jpeg",
    smallImage: "/images/featured/ckc_pool_cleaned.png",
    titles: ["Residence Serenite", "Espace de vie Aura", "Salle a manger"],
    details: [
      { label: "Surface", value: "400 m\u00B2" },
      { label: "Salle de bain", value: "2" },
      { label: "Style", value: "Marron" },
    ],
  },
  {
    mainImage: "/images/featured/ckc_pool_cleaned.png",
    smallImage: "/images/featured/ckc_pool_cleaned.png",
    titles: ["Espace de vie Aura", "Salle a manger", "Residence Serenite"],
    details: [
      { label: "Surface", value: "400 m\u00B2" },
      { label: "Salle de bain", value: "2" },
      { label: "Style", value: "Marron" },
    ],
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const [activeVariant, setActiveVariant] = useState(0);

  return (
    <motion.div
      className="group rounded-lg bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeVariant}
            src={feature.mainImage}
            alt={feature.titles[activeVariant]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>

      <div className="p-5">
        <div className="mb-4 flex gap-2">
          {feature.titles.map((_, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveVariant(i)}
              onClick={() => setActiveVariant(i)}
              className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-opacity"
            >
              <img
                src={feature.smallImage}
                alt=""
                className={`h-full w-full object-cover transition-opacity ${activeVariant === i ? "opacity-100 ring-2 ring-[#1e1e1e]" : "opacity-60"}`}
              />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariant}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-3 text-lg font-semibold text-[#1e1e1e]">
              {feature.titles[activeVariant]}
            </h3>
            <div className="flex gap-4">
              {feature.details.map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-sm text-[#535353]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    {d.label}: {d.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FeaturedWorksSection() {
  return (
    <section id="Works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="Realisations"
            title="Nos œuvres signature"
            description="Decouvrez nos projets architecturaux les plus raffines et a fort impact, crees avec precision, creativite et esthetique moderne."
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
