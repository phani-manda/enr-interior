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
  ["Design Catalog", "/catalog"],
  ["Kitchens", "/kitchens"],
  ["About ENR", "/about"],
  ["Get in Touch", "/contact"]
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
      className="group relative px-3 py-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--enr-text-primary)] transition-colors duration-300 hover:text-[var(--enr-accent-gold)]"
    >
      {label}
      <span className="absolute bottom-2 left-3 right-3 h-px origin-left scale-x-0 bg-[var(--enr-accent-gold)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
      {active && <span className="absolute bottom-2 left-3 right-3 h-px bg-[var(--enr-accent-gold)]" />}
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

  /* Determine if current page has a light hero section */
  const isLightPage = ["/about", "/contact"].includes(pathname);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80]"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(26,26,24,0.92)" : "rgba(26,26,24,0.60)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)"
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <div className={`flex items-center transition-all duration-300 ${isLightPage && !scrolled ? "rounded-full bg-[var(--color-obsidian)]/80 px-3 py-1.5" : ""}`}>
              <Image
                src="/logo/enr-logo.png"
                alt="ENR Interiors"
                width={100}
                height={100}
                className="h-12 w-auto object-contain mix-blend-screen"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map(([label, href]) => (
              <MagneticLink key={href} href={href} label={label} active={pathname === href} />
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            ref={ctaMagnet.ref}
            href="/contact"
            data-cursor-label="Open"
            onMouseMove={ctaMagnet.onMouseMove}
            onMouseLeave={ctaMagnet.onMouseLeave}
            style={{ x: ctaMagnet.x, y: ctaMagnet.y }}
            className="hidden items-center gap-2 bg-[var(--enr-accent-gold)] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-obsidian)] transition-all duration-300 hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow md:inline-flex"
          >
            Free Site Visit
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center border border-[var(--enr-border)] text-[var(--enr-text-primary)] transition-colors hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)] md:hidden"
          >
            <Menu size={20} />
            <span className="sr-only">Open menu</span>
          </button>

          {/* Gold scroll line */}
          <motion.span
            aria-hidden
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--enr-accent-gold)] to-transparent"
            initial={false}
            animate={{ width: scrolled ? "100%" : "0%", opacity: scrolled ? 0.6 : 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      </motion.header>
      <AnimatePresence>{open && <MobileMenu close={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
