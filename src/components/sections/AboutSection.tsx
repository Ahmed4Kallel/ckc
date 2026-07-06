"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import CounterNumber from "@/components/ui/CounterNumber";

const aboutImages = [
  "/images/about/Remove_logos_and_text_from_202607012107.jpeg",
  "/images/about/Remove_logos_and_text_from_202607012110.jpeg",
  "/images/about/ckc_pool_cleaned.png",
];

const stats = [
  { value: "10", suffix: "+", label: "Années d'expérience" },
  { value: "500", suffix: "+", label: "Projets réalisés" },
  { value: "98", suffix: "%", label: "Satisfaction client" },
];

export default function AboutSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const wrapper = cards[0]?.parentElement;
    if (!cards.length || !wrapper) return;

    const total = cards.length;
    const baseWidth = 100 / total;
    cards.forEach((card) => gsap.set(card, { width: `${baseWidth}%` }));

    function animate(activeCard: HTMLDivElement) {
      const smallWidth = 100 / (total + 2);
      const bigWidth = 100 - smallWidth * (total - 1);
      cards.forEach((card) => {
        gsap.to(card, {
          width: card === activeCard ? `${bigWidth}%` : `${smallWidth}%`,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    }

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => animate(card));
    });

    wrapper.addEventListener("mouseleave", () => animate(cards[0]));

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => animate(card));
      });
      wrapper.removeEventListener("mouseleave", () => animate(cards[0]));
    };
  }, []);

  return (
    <section id="About" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="À propos"
            title="Découvrez l'architecture innovante"
          />
        </motion.div>

        <motion.p
          className="mb-16 max-w-2xl text-base leading-relaxed text-[#535353] md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nous combinons architecture innovante et esthétique fonctionnelle pour
          créer des habitats intelligents intemporels. En nous concentrant sur la
          conception réfléchie et les exigences de vie modernes, nous
          transformons des espaces compacts en environnements durables qui
          inspirent et s'adaptent à votre style de vie.
        </motion.p>

        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <CounterNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm uppercase tracking-wider text-[#535353]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex h-[400px] gap-2 overflow-hidden rounded-lg md:h-[500px]">
          {aboutImages.map((src, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="relative h-full cursor-pointer overflow-hidden transition-all duration-[600ms]"
              style={{ width: `${100 / aboutImages.length}%` }}
            >
              <img
                src={src}
                alt={`Architecture ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
