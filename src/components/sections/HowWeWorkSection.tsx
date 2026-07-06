"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import CardOverlay from "@/components/ui/CardOverlay";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "etape 1",
    title: "Consultation & briefing",
    description:
      "Nous comprenons vos objectifs, votre site et votre vision avec clarte.",
  },
  {
    step: "etape 2",
    title: "Conception",
    description:
      "Les premieres esquisses, plans d'humeur et dispositions sont crees.",
  },
  {
    step: "etape 3",
    title: "Developpement du design",
    description:
      "Les dessins techniques, materiaux et details sont finalises.",
  },
  {
    step: "etape 4",
    title: "Affinage & revision",
    description:
      "Nous affinons chaque detail pour garantir la perfection du projet.",
  },
  {
    step: "etape 5",
    title: "Livraison du projet",
    description:
      "Des permis a la supervision de la construction, nous gerons l'execution.",
  },
];

export default function HowWeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;

    const getScrollAmount = () => {
      const scroll = cards.scrollWidth - container.offsetWidth;
      return scroll > 0 ? scroll : 0;
    };

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 50%",
          end: "top 30%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#f1f1f2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="Notre processus"
            title="Un chemin vers la creation"
            description="Nous croyons en la perfection avec la structure"
          />
        </motion.div>

        <div ref={containerRef} className="overflow-hidden">
          <div ref={cardsRef} className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="w-[320px] flex-shrink-0 rounded-lg bg-white p-6 md:w-[380px]"
              >
                <span className="mb-3 inline-block rounded-full bg-[#f1f1f2] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#535353]">
                  {step.step}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-[#1e1e1e]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#535353]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/images/howwework/Remove_logos_and_text_from_202607012107.jpeg"
              alt="3D map model"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <CardOverlay />
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/images/howwework/Remove_logos_and_text_from_202607012110.jpeg"
              alt="Floor plan"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <CardOverlay />
          </div>
        </div>
      </div>
    </section>
  );
}
