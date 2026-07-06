"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const articles = [
  {
    slug: "real-estate-market-trends",
    title: "Tendances du marche immobilier",
    date: "28 avril 2026",
    category: "Actualites",
    image: "/images/journal/Remove_logos_and_text_from_202607012107.jpeg",
  },
  {
    slug: "functional-interiors-the-secret",
    title: "Interieurs fonctionnels : Le secret",
    date: "28 avril 2026",
    category: "Actualites",
    image: "/images/journal/Remove_logos_and_text_from_202607012110.jpeg",
  },
  {
    slug: "real-estate-market",
    title: "Marche immobilier",
    date: "28 avril 2026",
    category: "Actualites",
    image: "/images/journal/ckc_pool_cleaned.png",
  },
];

export default function JournalSection() {
  return (
    <section id="Journal" className="bg-[#f1f1f2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="Journal"
            title="Nos insights"
            description="Chaque maison incarne precision et elegance."
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={`/journals/${article.slug}`}
                className="group block overflow-hidden rounded-lg bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#1e1e1e] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45">
                      &rarr;
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs text-[#535353]">{article.date}</span>
                    <span className="rounded-full bg-[#f1f1f2] px-2 py-0.5 text-xs font-medium uppercase text-[#535353]">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1e1e1e] transition-colors group-hover:text-[#535353]">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
