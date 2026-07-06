"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CardOverlay from "@/components/ui/CardOverlay";

const serviceImages = [
  "/images/services/Remove_logos_and_text_from_202607012107.jpeg",
  "/images/services/Remove_logos_and_text_from_202607012110.jpeg",
  "/images/services/ckc_pool_cleaned.png",
];

const serviceCards = [
  {
    title: "Residential design",
    description:
      "We integrate eco-friendly materials and energy-efficient solutions to build",
  },
  {
    title: "Commercial design",
    description:
      "From modern minimalism to intricate classical forms, we bring unique artistic",
  },
  {
    title: "Landscape design",
    description:
      "Our team's expertise ensures professionalism and reliability, making",
  },
];

const interiorCard = {
  title: "Interior design",
  description:
    "Our team's expertise ensures professionalism and reliability, making your",
};

const sustainableCard = {
  title: "Sustainable architect",
  description:
    "Our designs beauty with stability, ensuring durability and safety without compromising",
};

export default function ServicesSection() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="Services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="Services"
            title="Architecture services"
            description="We believe in the perfection with structure"
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={serviceImages[activeImage]}
                  alt={`Service ${activeImage + 1}`}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
                {serviceImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      i === activeImage ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Service image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {serviceCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="flex gap-4 rounded-lg border border-[#f1f1f2] p-5 transition-colors hover:border-[#e0e0e0]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#f1f1f2]">
                    <svg className="h-5 w-5 text-[#535353]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e1e1e]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#535353]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/images/services/ckc_pool_cleaned.png"
                alt="Modern living room"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <CardOverlay />
            </div>

            <motion.div
              className="flex gap-4 rounded-lg border border-[#f1f1f2] p-5 transition-colors hover:border-[#e0e0e0]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#f1f1f2]">
                <svg className="h-5 w-5 text-[#535353]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e1e1e]">
                  {interiorCard.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#535353]">
                  {interiorCard.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 rounded-lg border border-[#f1f1f2] p-5 transition-colors hover:border-[#e0e0e0]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#f1f1f2]">
                <svg className="h-5 w-5 text-[#535353]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e1e1e]">
                  {sustainableCard.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#535353]">
                  {sustainableCard.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
