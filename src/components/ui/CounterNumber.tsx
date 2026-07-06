"use client";

import { useEffect, useRef, useState } from "react";

interface CounterNumberProps {
  value: string;
  suffix?: string;
  className?: string;
}

export default function CounterNumber({
  value,
  suffix = "",
  className = "",
}: CounterNumberProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="transition-transform duration-[1500ms] ease-out"
        style={{ transform: isVisible ? "translateY(0)" : "translateY(100%)" }}
      >
        <span className="text-5xl font-bold md:text-6xl lg:text-7xl">
          {value}
          {suffix}
        </span>
      </div>
    </div>
  );
}
