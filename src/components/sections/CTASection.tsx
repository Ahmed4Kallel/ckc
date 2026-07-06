"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CardOverlay from "@/components/ui/CardOverlay";

export default function CTASection() {
  return (
    <section id="CTA" className="bg-[#f1f1f2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionHeading
                tag="Commençons"
                title="Construisons ensemble des espaces calmes et intemporels"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PrimaryButton href="mailto:wajdidja@hotmail.fr">
                Réservez maintenant
              </PrimaryButton>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/cta/Remove_logos_and_text_from_202607012107.jpeg"
                alt="Modern minimalist house"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <CardOverlay />
            </motion.div>
            <motion.div
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/cta/Remove_logos_and_text_from_202607012110.jpeg"
                alt="Modern living room"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <CardOverlay />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
