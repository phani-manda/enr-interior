"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE_EXPO } from "@/lib/motion";

const links = [
  ["Inspiration", "/inspiration"],
  ["Catalog", "/catalog"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function MobileMenu({ close }: { close: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-obsidian px-6 py-6 text-ivory md:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: EASE_EXPO }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" onClick={close} className="font-display text-2xl tracking-[0.3em]">
          LUMINE
        </Link>
        <button onClick={close} className="grid h-11 w-11 place-items-center border border-ivory/20">
          <X size={20} />
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <motion.nav
        className="mt-24 flex flex-col gap-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
      >
        {links.map(([label, href]) => (
          <motion.div
            key={href}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link onClick={close} href={href} className="font-display text-6xl leading-none">
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}
