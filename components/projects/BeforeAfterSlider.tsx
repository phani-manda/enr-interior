"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { KeyboardEvent, useRef } from "react";
import { blurDataURL } from "@/lib/utils";

const before = "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=85";
const after = "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85";

export default function BeforeAfterSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const clip = useTransform(x, (value) => `inset(0 ${100 - value}% 0 0)`);

  function keyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") x.set(Math.max(8, x.get() - 5));
    if (event.key === "ArrowRight") x.set(Math.min(92, x.get() + 5));
  }

  return (
    <section className="bg-enr-charcoal px-5 py-24 text-enr-ivory lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="caption-label text-enr-mist">Before / After</p>
        <h2 className="h1-type mb-3">Before ENR. After ENR.</h2>
        <p className="mb-10 text-enr-mist">Banjara Hills 3BHK - completed in 48 days</p>
        <div
          ref={ref}
          tabIndex={0}
          role="slider"
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(x.get())}
          onKeyDown={keyDown}
          className="relative h-[70vh] min-h-[460px] overflow-hidden bg-enr-charcoal"
        >
          <Image src={after} alt="Finished interior after transformation" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
          <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
            <Image src={before} alt="Interior before transformation" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
          </motion.div>
          <span className="absolute left-6 top-6 bg-enr-obsidian/70 px-4 py-2 text-xs uppercase tracking-[0.12em] text-enr-ivory">Before</span>
          <span className="absolute right-6 top-6 bg-enr-obsidian/70 px-4 py-2 text-xs uppercase tracking-[0.12em] text-enr-ivory">After</span>
          <motion.div
            drag="x"
            dragConstraints={ref}
            dragElastic={0}
            className="absolute top-0 h-full w-px bg-enr-gold"
            style={{ left: useTransform(x, (value) => `${value}%`) }}
            onDrag={(_, info) => {
              const bounds = ref.current?.getBoundingClientRect();
              if (!bounds) return;
              x.set(Math.min(92, Math.max(8, ((info.point.x - bounds.left) / bounds.width) * 100)));
            }}
          >
            <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-enr-gold bg-enr-obsidian text-enr-gold">
              ↔
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
