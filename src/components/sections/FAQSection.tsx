"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqItems = [
  {
    question: "Do you offer 3D visualization?",
    answer:
      "Yes. We create photorealistic 3D renders for luxury villas and interiors, turning your blueprints into high-end marketing visuals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "At Archivanta, we follow a structured process—from consultation and concept development to design refinement and execution—to ensure each project is completed efficiently without compromising quality.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with both startups and established brands. Whether you're launching a new concept or evolving an existing space, our approach is tailored to your goals, vision, and stage of growth.",
  },
  {
    question: "Will my site handle high-res images?",
    answer:
      "Yes, your site is fully capable of handling high-resolution images. We optimize every image for web performance, ensuring they maintain visual quality while loading quickly across all devices.",
  },
  {
    question: "What is required to start a project?",
    answer:
      "We'll begin with an initial consultation to discuss your ideas, followed by a proposal outlining the timeline, deliverables, and budget.",
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
            title="Frequently asked questions"
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
