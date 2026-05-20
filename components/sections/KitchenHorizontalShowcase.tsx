"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { blurDataURL } from "@/lib/utils";

const kitchens = [
  {
    title: "Island",
    materials: "Hettich Hardware / Lacquered MDF / Quartz",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=90"
  },
  {
    title: "L-Shaped",
    materials: "Acrylic Shutters / Tandem Drawers / Profile Handles",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1800&q=90"
  },
  {
    title: "Parallel",
    materials: "Back-painted Glass / Granite / Hafele Fittings",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1800&q=90"
  }
];

export default function KitchenHorizontalShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={ref} className="relative h-[320vh] bg-[var(--enr-bg-primary)]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          {kitchens.map((kitchen) => (
            <article key={kitchen.title} className="relative h-screen w-screen overflow-hidden">
              <Image src={kitchen.image} alt={`${kitchen.title} modular kitchen`} fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover opacity-70" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,.52)_45%,rgba(10,10,10,.18)_100%)]" />
              <div className="absolute bottom-16 left-5 right-5 lg:left-16 lg:right-16">
                <p className="caption-label text-[var(--enr-accent-gold)]">{kitchen.materials}</p>
                <h2 className="mt-4 font-display text-[clamp(5rem,14vw,13rem)] leading-none tracking-tighter text-[var(--enr-text-primary)]">{kitchen.title}</h2>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
