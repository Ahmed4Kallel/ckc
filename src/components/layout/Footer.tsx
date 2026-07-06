"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Accueil", href: "/#About" },
  { label: "Services", href: "/#Services" },
  { label: "Projets", href: "/#Projects" },
  { label: "Réalisations", href: "/#Works" },
  { label: "FAQ", href: "/#FAQ" },
  { label: "Contact", href: "/#CTA" },
];

const utilityLinks = [
  { label: "Guide de style", href: "/utility-pages/style-guide" },
  { label: "Licence", href: "/utility-pages/lisense" },
  { label: "Changelog", href: "/utility-pages/changelog" },
  { label: "404", href: "/404" },
  { label: "Page protégée", href: "/401" },
  { label: "Instructions", href: "/utility-pages/instructions" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
    <footer className="relative overflow-hidden bg-[#1e1e1e] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/images/brand/2.png"
                alt="CKC"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Propriétés dans des zones stratégiques avec des équipements essentiels.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50 hover:text-white/80"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Liens utiles
            </h4>
            <ul className="space-y-3">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contactez-nous
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="tel:+21650222751" className="transition-colors hover:text-white">
                  +216 50 222 751
                </a>
              </li>
              <li>
                <a
                  href="mailto:wajdidja@hotmail.fr"
                  className="transition-colors hover:text-white"
                >
                  wajdidja@hotmail.fr
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/B7ABtg4YonzMpf2s5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Hammamet
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-white/40">
              &copy; Tous droits réservés{" "}
              <Link href="/" className="hover:text-white/60">
                CKC
              </Link>
            </p>
            <p className="text-sm text-white/40">
              Propulsé par{" "}
              <a
                href="https://github.com/Ahmed4Kallel/ckc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60"
              >
                CKC
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 -left-12 opacity-[0.03]">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="white">
          <rect x="10" y="30" width="20" height="140" rx="2" />
          <rect x="40" y="10" width="20" height="160" rx="2" />
          <rect x="70" y="50" width="20" height="120" rx="2" />
          <rect x="100" y="20" width="20" height="150" rx="2" />
          <rect x="130" y="40" width="20" height="130" rx="2" />
          <rect x="160" y="0" width="20" height="170" rx="2" />
        </svg>
      </div>
      <div className="absolute -bottom-12 -right-12 opacity-[0.03]">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="white">
          <rect x="10" y="30" width="20" height="140" rx="2" />
          <rect x="40" y="10" width="20" height="160" rx="2" />
          <rect x="70" y="50" width="20" height="120" rx="2" />
          <rect x="100" y="20" width="20" height="150" rx="2" />
          <rect x="130" y="40" width="20" height="130" rx="2" />
          <rect x="160" y="0" width="20" height="170" rx="2" />
        </svg>
      </div>
    </footer>

    <div className="relative overflow-hidden bg-[#1e1e1e]">
      <div className="flex w-max animate-marquee items-center gap-8 py-6" style={{ ["--marquee-duration" as string]: "30s" }}>
        <div className="flex items-center gap-8">
          <img
            src="/images/brand/2.png"
            alt="ARCHIVANTA"
            className="h-8 w-auto brightness-0 invert"
          />
          <img
            src="/images/brand/2.png"
            alt=""
            className="h-8 w-auto opacity-30 brightness-0 invert"
          />
          <img
            src="/images/brand/2.png"
            alt="ARCHIVANTA"
            className="h-8 w-auto brightness-0 invert"
          />
          <img
            src="/images/brand/2.png"
            alt=""
            className="h-8 w-auto opacity-30 brightness-0 invert"
          />
        </div>
        <div className="flex items-center gap-8">
          <img
            src="/images/brand/2.png"
            alt="ARCHIVANTA"
            className="h-8 w-auto brightness-0 invert"
          />
          <img
            src="/images/brand/2.png"
            alt=""
            className="h-8 w-auto opacity-30 brightness-0 invert"
          />
          <img
            src="/images/brand/2.png"
            alt="ARCHIVANTA"
            className="h-8 w-auto brightness-0 invert"
          />
          <img
            src="/images/brand/2.png"
            alt=""
            className="h-8 w-auto opacity-30 brightness-0 invert"
          />
        </div>
      </div>
    </div>
    </>
  );
}
