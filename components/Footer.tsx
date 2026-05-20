"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Play, Search, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const address = "7-949, Adarsh Nagar, Jyoti Nagar Colony, Bajarang Nagar Colony, Balaji Nagar, Hyderabad, Secunderabad, Telangana 500087, India";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <>
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 left-6 z-[95] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-black shadow-luxury motion-safe:animate-pulse"
        aria-label="Chat with ENR Interiors on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
      <footer ref={ref} className="bg-[var(--enr-bg-primary)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <motion.div
          className="mb-16 h-px bg-[var(--enr-accent-gold)]"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        />
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Image src="/logo/enr-logo.png" alt="ENR Interiors" width={160} height={160} className="h-28 w-auto object-contain mix-blend-screen" />
              <p className="mt-5 max-w-sm text-[var(--enr-text-muted)]">Transform Your Space with Premium Interior Designs ✨</p>
              <div className="mt-8 flex gap-5 text-[var(--enr-accent-gold)]">
                <Instagram size={18} aria-label="Instagram" />
                <Search size={18} aria-label="Facebook" />
                <Youtube size={18} aria-label="YouTube" />
                <Play size={18} aria-label="Houzz" />
                <MapPin size={18} aria-label="Google Maps" />
              </div>
            </div>
            <div>
              <Link href="/contact" className="block font-display text-[clamp(5rem,14vw,13rem)] leading-none tracking-tighter text-[var(--enr-text-primary)] transition hover:text-[var(--enr-accent-gold)]">
                LET&apos;S TALK.
              </Link>
              <div className="mt-12 grid gap-8 border-t border-[var(--enr-border)] pt-8 text-sm text-[var(--enr-text-muted)] md:grid-cols-3">
                <p>{address}</p>
                <p>hello@enrinteriors.com<br />+91 98765 43210</p>
                <nav className="flex flex-col gap-2 uppercase tracking-[0.18em]">
                  <Link href="/projects" className="hover:text-[var(--enr-accent-gold)]">Our Work</Link>
                  <Link href="/kitchens" className="hover:text-[var(--enr-accent-gold)]">Modular Kitchens</Link>
                  <Link href="/catalog" className="hover:text-[var(--enr-accent-gold)]">Wardrobes</Link>
                  <Link href="/about" className="hover:text-[var(--enr-accent-gold)]">Studio</Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-20 border-t border-[var(--enr-border)] pt-8 text-[10px] uppercase tracking-[0.2em] text-[var(--enr-text-muted)]">
            © 2025 ENR Interiors. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
