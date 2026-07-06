"use client";

interface MarqueeStripProps {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}

export default function MarqueeStrip({
  children,
  reverse = false,
  duration = 20,
  className = "",
}: MarqueeStripProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
