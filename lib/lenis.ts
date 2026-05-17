"use client";

import Lenis from "@studio-freight/lenis";
import { motionValue } from "framer-motion";

export const lenisScroll = motionValue(0);

export function createLenis() {
  const lenis = new Lenis({
    duration: 1.18,
    smoothWheel: true,
    wheelMultiplier: 0.92,
    touchMultiplier: 1.25
  });

  lenis.on("scroll", ({ scroll }: { scroll: number }) => {
    lenisScroll.set(scroll);
  });

  return lenis;
}
