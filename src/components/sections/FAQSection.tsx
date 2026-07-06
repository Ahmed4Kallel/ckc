"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqItems = [
  {
    question: "Proposez-vous de la visualisation 3D ?",
    answer:
      "Oui. Nous creons des rendus 3D photorealistes pour les villas de luxe et les interieurs, transformant vos plans en visuels marketing haut de gamme.",
  },
  {
    question: "Combien de temps dure un projet typique ?",
    answer:
      "Chez CKC, nous suivons un processus structure — de la consultation et du developpement conceptuel a l'affinage et a l'execution du design — pour garantir que chaque projet soit realise efficacement sans compromettre la qualite.",
  },
  {
    question: "Travaillez-vous avec des startups ou uniquement des marques etablies ?",
    answer:
      "Nous travaillons avec les startups et les marques etablies. Que vous lanciez un nouveau concept ou fassiez evoluer un espace existant, notre approche est adaptee a vos objectifs, votre vision et votre stade de croissance.",
  },
  {
    question: "Mon site gerera-t-il des images haute resolution ?",
    answer:
      "Oui, votre site est entierement capable de gerer des images haute resolution. Nous optimisons chaque image pour les performances web, en veillant a ce qu'elles maintiennent leur qualite visuelle tout en se chargeant rapidement sur tous les appareils.",
  },
  {
    question: "Qu'est-il necessaire pour demarrer un projet ?",
    answer:
      "Nous commencerons par une consultation initiale pour discuter de vos idees, suivie d'une proposition detaillant le calendrier, les livrables et le budget.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#e0e0e0]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h3 className="pr-4 text-lg font-semibold text-[#1e1e1e]">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#e0e0e0] text-xl text-[#535353]"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-[#535353]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="FAQ" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="FAQ"
            title="Questions frequentes"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
