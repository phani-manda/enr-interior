"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { blurDataURL } from "@/lib/utils";

const services = [
  {
    title: "Modular Kitchens",
    meta: "Hettich hardware / lacquered MDF / quartz counters",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=85"
  },
  {
    title: "Living Room Designs",
    meta: "TV walls / textured panels / ambient lighting",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
  },
  {
    title: "Bedroom Interiors",
    meta: "Wardrobes / headboards / soft material palettes",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85"
  },
  {
    title: "False Ceiling & Lighting",
    meta: "Layered cove light / architectural profiles / mood scenes",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85"
  },
  {
    title: "TV Units & Wardrobes",
    meta: "Precision storage / veneer finishes / concealed utility",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85"
  }
];

export default function ServicesHoverList() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[var(--enr-bg-primary)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
      <motion.div
        key={services[active].image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0"
      >
        <Image src={services[active].image} alt="" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,.86)_42%,rgba(10,10,10,.35)_100%)]" />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="caption-label text-[var(--enr-accent-gold)]">Specializations</p>
        <div className="mt-14 border-t border-[var(--enr-border)]">
          {services.map((service, index) => (
            <button
              key={service.title}
              onMouseEnter={() => setActive(index)}
              data-cursor-label="Explore"
              className="group grid w-full gap-6 border-b border-[var(--enr-border)] py-8 text-left md:grid-cols-[120px_1fr_420px]"
            >
              <span className="caption-label text-[var(--enr-text-muted)]">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-display text-[clamp(2.8rem,6vw,6.4rem)] leading-none tracking-tighter text-[var(--enr-text-primary)] transition group-hover:text-[var(--enr-accent-gold)]">
                {service.title}
              </span>
              <span className="self-end text-sm uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">{service.meta}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
