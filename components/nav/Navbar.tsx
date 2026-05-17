"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import MobileMenu from "./MobileMenu";

const navLinks = [
  ["Inspiration", "/inspiration"],
  ["Catalog", "/catalog"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

function MagneticLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const magnetic = useMagneticHover<HTMLAnchorElement>(0.16);
  return (
    <motion.a
      ref={magnetic.ref}
      href={href}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      style={{ x: magnetic.x, y: magnetic.y }}
      className="relative px-2 py-4 text-xs uppercase tracking-[0.16em] transition hover:text-gold"
    >
      {label}
      {active && <span className="absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />}
    </motion.a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ctaMagnet = useMagneticHover<HTMLAnchorElement>(0.14);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 32));

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80] transition-colors"
        animate={{
          backgroundColor: scrolled ? "rgba(248,245,240,0.95)" : "rgba(248,245,240,0)",
          color: scrolled || pathname !== "/" ? "#1C1C1A" : "#F8F5F0",
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)"
        }}
      >
        <div className="relative mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <Link href="/" className="font-display text-[22px] tracking-[0.3em]">
            LUMINE
          </Link>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex">
            {navLinks.map(([label, href]) => (
              <MagneticLink key={href} href={href} label={label} active={pathname === href} />
            ))}
          </nav>
          <motion.a
            ref={ctaMagnet.ref}
            href="/contact"
            data-cursor-label="Open"
            onMouseMove={ctaMagnet.onMouseMove}
            onMouseLeave={ctaMagnet.onMouseLeave}
            style={{ x: ctaMagnet.x, y: ctaMagnet.y }}
            className="hidden rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-[0.12em] transition hover:bg-gold hover:text-obsidian md:block"
          >
            Book Consultation
          </motion.a>
          <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center md:hidden">
            <Menu size={22} />
            <span className="sr-only">Open menu</span>
          </button>
          <motion.span
            aria-hidden
            className="absolute bottom-0 left-0 h-px bg-gold"
            initial={false}
            animate={{ width: scrolled ? "100%" : "0%", opacity: scrolled ? 1 : 0 }}
          />
        </div>
      </motion.header>
      <AnimatePresence>{open && <MobileMenu close={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
