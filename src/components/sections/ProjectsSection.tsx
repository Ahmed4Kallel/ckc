"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CardOverlay from "@/components/ui/CardOverlay";

const projects = [
  {
    title: "Maison urbaine moderne",
    location: "Hammamet",
    image: "/images/projects/Remove_logos_and_text_from_202607012107.jpeg",
  },
  {
    title: "Resort de luxe en bord de mer",
    location: "Nabeul",
    image: "/images/projects/Remove_logos_and_text_from_202607012110.jpeg",
  },
  {
    title: "Maison urbaine naturelle",
    location: "Sousse",
    image: "/images/projects/ckc_pool_cleaned.png",
  },
  {
    title: "Maison de luxe",
    location: "Sfax",
    image: "/images/projects/Remove_logos_and_text_from_202607012107.jpeg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="Projects" className="bg-[#f1f1f2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="Projets"
            title="Perfectionnée"
            description="Notre portefeuille de designs primés qui ont transformé les lignes d'horizon"
            centered
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <CardOverlay />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                  <svg className="h-3.5 w-3.5 text-[#535353]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#1e1e1e]">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1e1e1e]">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
