"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { blurDataURL } from "@/lib/utils";

const kitchens = [
  {
    title: "Island",
    subtitle: "The social kitchen",
    materials: "Hettich Hardware / Lacquered MDF / Quartz Counters",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=90"
  },
  {
    title: "L-Shaped",
    subtitle: "India's favourite format",
    materials: "Acrylic Shutters / Tandem Drawers / Profile Handles",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1800&q=90"
  },
  {
    title: "Parallel",
    subtitle: "Maximum efficiency",
    materials: "Back-painted Glass / Granite / Hafele Fittings",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1800&q=90"
  }
];

function ProgressDot({ index, total, progress }: { index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(
    progress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0.2, 1, 0.2]
  );
  return <motion.div className="h-8 w-px bg-[var(--enr-accent-gold)]" style={{ opacity }} />;
}

export default function KitchenHorizontalShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={ref} className="relative h-[320vh] bg-[var(--color-obsidian)]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Progress indicator */}
        <div className="absolute right-8 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 lg:right-12">
          {kitchens.map((kitchen, index) => (
            <ProgressDot key={kitchen.title} index={index} total={kitchens.length} progress={scrollYProgress} />
          ))}
        </div>

        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          {kitchens.map((kitchen, index) => (
            <article key={kitchen.title} className="relative h-screen w-screen overflow-hidden" data-cursor-label="Explore">
              <Image
                src={kitchen.image}
                alt={`${kitchen.title} modular kitchen`}
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,26,24,.9)_0%,rgba(26,26,24,.5)_40%,rgba(26,26,24,.3)_100%)]" />

              {/* Floating gold accent line */}
              <div className="absolute left-8 top-1/4 h-24 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/40 to-transparent lg:left-16" />

              <div className="absolute bottom-16 left-5 right-5 z-10 lg:left-16 lg:right-16">
                <span className="caption-label text-[var(--enr-accent-gold)]">
                  {String(index + 1).padStart(2, "0")} / {String(kitchens.length).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm text-[var(--enr-text-muted)]">{kitchen.subtitle}</p>
                <h2 className="mt-2 font-display text-[clamp(5rem,14vw,12rem)] leading-[0.85] tracking-tighter text-[var(--enr-text-primary)]">
                  {kitchen.title}
                </h2>
                <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">{kitchen.materials}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
