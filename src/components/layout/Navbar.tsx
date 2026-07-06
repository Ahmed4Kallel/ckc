"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/#About" },
  { label: "Projets", href: "/#Projects" },
  { label: "Services", href: "/#Services" },
];

const locations = [
  { label: "Hammamet", href: "https://maps.app.goo.gl/fSDUyRnsWke5jWQ37" },
  { label: "Nabeul", href: "https://maps.app.goo.gl/eWWc3y7Ep4urouVRA" },
  { label: "Sousse", href: "https://maps.app.goo.gl/dFjvd3L6pC7UgNqf9" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/brand/1.png"
                alt="CKC"
                className="h-16 w-auto"
              />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <span className="text-xs font-medium uppercase tracking-widest text-[#535353]">
                Basé à :
              </span>
              {locations.map((loc) => (
                <a
                  key={loc.label}
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-[#1e1e1e] transition-colors hover:text-[#535353]"
                >
                  {loc.label}
                </a>
              ))}
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-[#1e1e1e] transition-colors hover:text-[#535353]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-6 bg-[#1e1e1e]"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-6 bg-[#1e1e1e]"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-6 bg-[#1e1e1e]"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#f1f1f2] bg-white md:hidden"
            >
              <div className="mx-auto max-w-7xl px-6 py-8">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium uppercase tracking-wider text-[#1e1e1e]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-8 border-t border-[#f1f1f2] pt-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#535353]">
                    Based in:
                  </span>
                  <div className="mt-3 flex gap-4">
                    {locations.map((loc) => (
                      <a
                        key={loc.label}
                        href={loc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-wider text-[#1e1e1e]"
                      >
                        {loc.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="h-20" />
    </>
  );
}
