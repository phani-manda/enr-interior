"use client";

import { useScroll, useSpring } from "framer-motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
}
