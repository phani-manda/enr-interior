"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { blurDataURL } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/motion";

const services = [
  {
    title: "Residential Design",
    subtitle: "Full Home Interiors",
    meta: "Living rooms / bedrooms / wardrobes / false ceilings / lighting",
    description: "Complete home transformations with bespoke material palettes, precision storage, and spaces designed for the way you actually live.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    href: "/projects"
  },
  {
    title: "Modular Kitchens",
    subtitle: "Flagship Service",
    meta: "Island / L-shaped / parallel / U-shaped / Hettich & Hafele hardware",
    description: "Engineered kitchens built for Indian cooking — with premium hardware, quartz counters, and layouts that make daily life effortless.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=85",
    href: "/kitchens"
  },
  {
    title: "Commercial Spaces",
    subtitle: "Office & Hospitality",
    meta: "Reception design / meeting rooms / cafe interiors / brand identity",
    description: "Fast-track commercial interiors with durable finishes, brand-forward design, and spaces that impress before the meeting starts.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    href: "/projects"
  }
];

export default function ServicesHoverList() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-32 text-[var(--enr-text-primary)] lg:px-10">
      {/* Background Image */}
      <motion.div
        key={services[active].image}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
        className="absolute inset-0"
      >
        <Image src={services[active].image} alt="" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,26,24,.95)_0%,rgba(26,26,24,.8)_40%,rgba(26,26,24,.6)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_EXPO }}
        >
          <p className="caption-label text-[var(--enr-accent-gold)]">Our Specializations</p>
          <h2 className="h1-type mt-4 max-w-3xl">Crafted for how you live.</h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.12, duration: 0.8, ease: EASE_EXPO }}
              onMouseEnter={() => setActive(index)}
            >
              <Link
                href={service.href}
                data-cursor-label="Explore"
                className={`group relative flex h-full flex-col border transition-all duration-500 ${
                  active === index
                    ? "border-[var(--enr-accent-gold)]/50 bg-[var(--color-charcoal)]/80 shadow-gold-subtle"
                    : "border-[var(--enr-border)] bg-[var(--color-charcoal)]/40 hover:border-[var(--enr-accent-gold)]/30"
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] to-transparent" />
                  <span className="absolute left-5 top-5 caption-label text-[var(--enr-accent-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="caption-label text-[var(--enr-accent-gold)]">{service.subtitle}</p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--enr-text-muted)]">
                    {service.description}
                  </p>
                  <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">
                    {service.meta}
                  </p>

                  {/* Gold bottom line */}
                  <motion.div
                    className="mt-6 h-px bg-[var(--enr-accent-gold)]"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: active === index ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: EASE_EXPO }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
