"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.round(latest))
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <motion.div ref={ref} className="border-l border-charcoal/15 pl-6" initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
      <p className="font-display text-6xl leading-none">{count}{suffix}</p>
      <p className="caption-label mt-3 text-mist">{label}</p>
    </motion.div>
  );
}
