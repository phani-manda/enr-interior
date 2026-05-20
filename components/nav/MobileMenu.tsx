"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { EASE_EXPO } from "@/lib/motion";

const links = [
  ["Our Work", "/projects"],
  ["Design Catalog", "/catalog"],
  ["Kitchens", "/kitchens"],
  ["About ENR", "/about"],
  ["Get in Touch", "/contact"]
];

export default function MobileMenu({ close }: { close: () => void }) {
  const pathname = usePathname();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-[var(--color-obsidian)] px-6 py-6 text-[var(--enr-text-primary)] md:hidden"
      initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
      transition={{ duration: 0.85, ease: EASE_EXPO }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/" onClick={close}>
          <Image
            src="/logo/enr-logo.png"
            alt="ENR Interiors"
            width={100}
            height={100}
            className="h-14 w-auto object-contain mix-blend-screen"
          />
        </Link>
        <button
          onClick={close}
          className="grid h-11 w-11 place-items-center border border-[var(--enr-border)] transition-colors hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
        >
          <X size={20} />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      {/* Decorative gold line */}
      <motion.div
        className="mt-8 h-px bg-gradient-to-r from-[var(--enr-accent-gold)] via-[var(--enr-accent-gold)]/50 to-transparent"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: EASE_EXPO }}
      />

      {/* Nav Links */}
      <motion.nav
        className="mt-12 flex flex-1 flex-col gap-1"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
      >
        {links.map(([label, href], index) => {
          const isActive = pathname === href;
          return (
            <motion.div
              key={href}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_EXPO } }
              }}
              className="border-b border-[var(--enr-border)]"
            >
              <Link
                onClick={close}
                href={href}
                className={`flex items-baseline justify-between py-5 font-display text-[clamp(2rem,8vw,3.5rem)] leading-none tracking-tight transition-colors duration-300 ${
                  isActive ? "text-[var(--enr-accent-gold)]" : "text-[var(--enr-text-primary)] hover:text-[var(--enr-accent-gold)]"
                }`}
              >
                <span>{label}</span>
                <span className="text-sm font-sans font-light tracking-[0.12em] text-[var(--enr-text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: EASE_EXPO }}
      >
        <Link
          href="/contact"
          onClick={close}
          className="block bg-[var(--enr-accent-gold)] py-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-obsidian)] transition-colors hover:bg-[var(--enr-accent-glow)]"
        >
          Free Site Visit
        </Link>
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--enr-text-muted)]">
          ENR Interiors · Hyderabad
        </p>
      </motion.div>
    </motion.div>
  );
}
