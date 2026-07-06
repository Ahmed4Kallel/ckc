"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const reviewStats = [
  {
    rating: "4.9",
    label: "From bustling urban condos to peaceful...",
    ratingLabel: "4.9 / 5.0",
  },
  {
    rating: "4.9",
    label: "On average for home owner cost savings",
    ratingLabel: "4.9 / 5.0",
  },
];

const testimonials = [
  {
    name: "Devid Jones",
    role: "House Owner",
    text: "Immerse yourself in a world where luxury meets sustainability, offering a seamless blend of comfort and innovation.",
    avatar: "/images/reviews/Remove_logos_and_text_from_202607012107.jpeg",
  },
  {
    name: "Sarah Mitchell",
    role: "Property Developer",
    text: "The attention to detail and commitment to excellence transformed our vision into reality. Truly outstanding work.",
    avatar: "/images/reviews/Remove_logos_and_text_from_202607012110.jpeg",
  },
  {
    name: "Michael Chen",
    role: "Architect",
    text: "Working with this team elevated our project beyond expectations. Their innovative approach sets them apart.",
    avatar: "/images/reviews/ckc_pool_cleaned.png",
  },
  {
    name: "Emily Watson",
    role: "Interior Designer",
    text: "Every aspect of the design was handled with precision and care. The results speak for themselves.",
    avatar: "/images/reviews/ckc_pool_cleaned.png",
  },
];

function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="rounded-lg border border-[#f1f1f2] bg-white p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="mb-4 flex items-center gap-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#1e1e1e]">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-[#535353]">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-[#535353]">
              {testimonials[current].text}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#535353] transition-colors hover:text-[#1e1e1e]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <span className="text-xs text-[#535353]">Twitter</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? "bg-[#1e1e1e]" : "bg-[#e0e0e0]"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="Reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            tag="Reviews"
            title="Hear from our user"
            description="Read how our users have achieved success"
          />
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewStats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-lg border border-[#f1f1f2] bg-white p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="mb-2 text-5xl font-bold text-[#1e1e1e]">
                {stat.rating}
              </div>
              <p className="text-sm text-[#535353]">{stat.ratingLabel}</p>
              <p className="mt-2 text-xs text-[#535353]/70">{stat.label}</p>
            </motion.div>
          ))}

          <motion.div
            className="relative aspect-video overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <video
              className="h-full w-full object-cover"
              poster="/images/reviews/ckc_pool_cleaned.png"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/images/reviews/review-video.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>

        <ReviewCarousel />
      </div>
    </section>
  );
}
