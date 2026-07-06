export const durations = {
  reveal: 0.8,
  stagger: 0.1,
  hover: 0.4,
  cardExpand: 0.6,
  faqOpen: 0.4,
  faqClose: 0.3,
  counter: 1.5,
  marquee: 20,
} as const;

export const easings = {
  reveal: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  cardExpand: [0.5, 0, 0.75, 0] as [number, number, number, number],
  scroll: "none" as const,
} as const;

export const scrollTrigger = {
  howWeWork: { scrub: 1.5, start: "top 50%", end: "top 30%" },
} as const;

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: durations.stagger,
      delayChildren: 0.1,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.reveal,
      ease: easings.reveal,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: durations.reveal, ease: easings.reveal },
  },
};
