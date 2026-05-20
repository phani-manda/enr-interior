"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE_EXPO } from "@/lib/motion";

const links = [
  ["Our Work", "/projects"],
  ["Modular Kitchens", "/kitchens"],
  ["Wardrobes", "/catalog"],
  ["Studio", "/about"]
];

export default function MobileMenu({ close }: { close: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[var(--enr-bg-primary)] px-6 py-6 text-[var(--enr-text-primary)] md:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: EASE_EXPO }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" onClick={close} className="bg-enr-obsidian px-3 py-1">
          <Image src="/logo/enr-logo.png" alt="ENR Interiors" width={100} height={100} className="h-16 w-auto object-contain mix-blend-screen" />
        </Link>
        <button onClick={close} className="grid h-11 w-11 place-items-center border border-ivory/20">
          <X size={20} />
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <motion.nav
        className="mt-20 flex flex-col gap-7"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
      >
        {links.map(([label, href]) => (
          <motion.div
            key={href}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link onClick={close} href={href} className="font-display text-4xl leading-tight text-[var(--enr-text-primary)] transition hover:text-[var(--enr-accent-gold)]">
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
      <Link
        href="/contact"
        onClick={close}
        className="absolute bottom-8 left-6 right-6 border border-[var(--enr-accent-gold)] py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--enr-accent-gold)]"
      >
        Book Site Visit
      </Link>
    </motion.div>
  );
}
