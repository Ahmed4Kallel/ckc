"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({ href, children }: PrimaryButtonProps) {
  return (
    <Link href={href} className="group relative inline-block">
      <motion.div
        className="relative z-10 inline-flex items-center gap-2 border border-[#1e1e1e] px-8 py-4 text-sm font-medium uppercase tracking-wider text-[#1e1e1e] transition-colors duration-300 group-hover:bg-[#1e1e1e] group-hover:text-white"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{children}</span>
        <span className="text-lg">&rarr;</span>
      </motion.div>
    </Link>
  );
}
