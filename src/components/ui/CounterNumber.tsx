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
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const targetNumber = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const duration = 2000;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * targetNumber);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [hasAnimated, targetNumber]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <span className="text-5xl font-bold md:text-6xl lg:text-7xl">
        {displayValue}
        {suffix}
      </span>
    </div>
  );
}
