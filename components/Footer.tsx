"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const links = ["Inspiration", "Catalog", "Projects", "About", "Contact"];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <footer ref={ref} className="bg-obsidian px-5 py-20 text-ivory lg:px-10">
      <motion.div
        className="mb-16 h-px bg-gold"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <h2 className="font-display text-5xl tracking-[0.18em]">LUMINE</h2>
          <p className="mt-4 max-w-sm text-mist">Spaces That Speak. Interior architecture shaped by atmosphere, craft, and restraint.</p>
        </div>
        <nav className="flex flex-col gap-3 text-sm uppercase tracking-[0.12em]">
          {links.map((label) => (
            <Link key={label} href={label === "Contact" ? "/contact" : `/${label.toLowerCase()}`} className="transition hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>
        <div className="space-y-3 text-mist">
          <p>Road No. 12, Banjara Hills, Hyderabad</p>
          <p>Design District, Dubai</p>
          <p>hello@luminestudio.demo</p>
          <p>+91 90000 12012</p>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-[1500px] flex-col gap-5 border-t border-ivory/10 pt-8 text-xs uppercase tracking-[0.12em] text-mist md:flex-row md:items-center md:justify-between">
        <p>© 2026 LUMINE Studio</p>
        <p>Crafted with intent</p>
        <div className="flex gap-4">
          <Instagram size={18} />
          <Linkedin size={18} />
          <Mail size={18} />
        </div>
      </div>
    </footer>
  );
}
