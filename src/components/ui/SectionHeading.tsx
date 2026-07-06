"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config";

interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  description,
  centered,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#535353]">
        {tag}
      </span>
      <h2
        className="font-bayon text-4xl leading-tight text-[#1e1e1e] md:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-bayon)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#535353] md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
