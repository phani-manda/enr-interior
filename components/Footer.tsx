"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Play, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const address = "7-949, Adarsh Nagar, Jyoti Nagar Colony, Bajarang Nagar Colony, Balaji Nagar, Hyderabad, Secunderabad, Telangana 500087, India";

const quickLinks = [
  ["Our Work", "/projects"],
  ["Design Catalog", "/catalog"],
  ["Modular Kitchens", "/kitchens"],
  ["Inspiration", "/inspiration"],
  ["About ENR", "/about"],
  ["Get in Touch", "/contact"]
];

const kitchenLinks = [
  "Island Kitchens",
  "L-Shaped Kitchens",
  "Parallel Kitchens",
  "U-Shaped Kitchens",
  "Compact Kitchens"
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <>
      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 left-6 z-[95] grid h-14 w-14 place-items-center bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat with ENR Interiors on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <footer ref={ref} className="relative overflow-hidden bg-[var(--color-obsidian)] text-[var(--enr-text-primary)]">
        {/* Decorative background glow */}
        <div className="absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-[var(--enr-accent-gold)]/[0.03] blur-[120px]" />

        {/* Animated gold divider */}
        <div className="px-5 lg:px-10">
          <motion.div
            className="mx-auto h-px max-w-[1500px] bg-gradient-to-r from-transparent via-[var(--enr-accent-gold)] to-transparent"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
          {/* Top Section: Logo + LET'S TALK */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            {/* Logo Column */}
            <div>
              <Image
                src="/logo/enr-logo.png"
                alt="ENR Interiors"
                width={160}
                height={160}
                className="h-20 w-auto object-contain mix-blend-screen"
              />
              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--enr-text-muted)]">
                Crafting ultra-premium interiors for discerning homeowners across Hyderabad.
                Excellence, Nuance, and Reliability — in every detail.
              </p>
              <div className="mt-8 flex gap-4">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                  { Icon: Play, label: "Houzz" },
                  { Icon: MapPin, label: "Google Maps" }
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center border border-[var(--enr-border)] text-[var(--enr-text-muted)] transition-all duration-300 hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* LET'S TALK */}
            <div>
              <Link
                href="/contact"
                className="block font-display text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-tighter text-[var(--enr-text-primary)] transition-colors duration-500 hover:text-[var(--enr-accent-gold)]"
                data-cursor-label="Open"
              >
                LET&apos;S TALK.
              </Link>
            </div>
          </div>

          {/* Middle Grid */}
          <div className="mt-16 grid gap-10 border-t border-[var(--enr-border)] pt-12 md:grid-cols-4">
            {/* Address */}
            <div>
              <p className="caption-label mb-4 text-[var(--enr-accent-gold)]">Studio</p>
              <p className="text-sm leading-6 text-[var(--enr-text-muted)]">{address}</p>
            </div>

            {/* Contact */}
            <div>
              <p className="caption-label mb-4 text-[var(--enr-accent-gold)]">Contact</p>
              <p className="text-sm leading-7 text-[var(--enr-text-muted)]">
                hello@enrinteriors.com
                <br />
                +91 98765 43210
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="caption-label mb-4 text-[var(--enr-accent-gold)]">Explore</p>
              <nav className="flex flex-col gap-2">
                {quickLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-[var(--enr-text-muted)] transition-colors hover:text-[var(--enr-accent-gold)]"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Kitchen Types */}
            <div>
              <p className="caption-label mb-4 text-[var(--enr-accent-gold)]">Kitchen Types</p>
              <nav className="flex flex-col gap-2">
                {kitchenLinks.map((label) => (
                  <Link
                    key={label}
                    href="/kitchens"
                    className="text-sm text-[var(--enr-text-muted)] transition-colors hover:text-[var(--enr-accent-gold)]"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--enr-border)] pt-8 md:flex-row md:items-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--enr-text-muted)]">
              © 2025 ENR Interiors. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
