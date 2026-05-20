"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import MobileMenu from "./MobileMenu";

const navLinks = [
  ["Our Work", "/projects"],
  ["Modular Kitchens", "/kitchens"],
  ["Wardrobes", "/catalog"],
  ["Studio", "/about"]
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
      className="group relative px-2 py-4 text-[10px] uppercase tracking-[0.28em] text-[var(--enr-text-primary)] transition hover:text-[var(--enr-accent-gold)]"
    >
      {label}
      <span className="absolute bottom-2 left-2 right-2 h-px origin-left scale-x-0 bg-[var(--enr-accent-gold)] transition-transform duration-500 group-hover:scale-x-100" />
      {active && <span className="absolute bottom-2 left-2 right-2 h-px bg-[var(--enr-accent-gold)]" />}
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
        className="fixed inset-x-0 top-4 z-[80] transition-colors"
        animate={{
          backgroundColor: "rgba(10,10,10,0.70)",
          color: "#F5F0E8",
          backdropFilter: "blur(18px)"
        }}
      >
        <div className="relative mx-auto flex h-16 max-w-[1320px] items-center justify-between border border-[var(--enr-border)] px-4 lg:px-6">
          <Link href="/" className="px-1 py-1">
            <Image src="/logo/enr-logo.png" alt="ENR Interiors" width={100} height={100} className="h-11 w-auto object-contain mix-blend-screen" priority />
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
            className="hidden border border-[var(--enr-accent-gold)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--enr-accent-gold)] transition hover:scale-[1.02] hover:bg-[var(--enr-accent-gold)] hover:text-black md:block"
          >
            Book Site Visit
          </motion.a>
          <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center md:hidden">
            <Menu size={22} />
            <span className="sr-only">Open menu</span>
          </button>
          <motion.span
            aria-hidden
            className="absolute bottom-0 left-0 h-px bg-[var(--enr-accent-gold)]"
            initial={false}
            animate={{ width: scrolled ? "100%" : "0%", opacity: scrolled ? 1 : 0 }}
          />
        </div>
      </motion.header>
      <AnimatePresence>{open && <MobileMenu close={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
