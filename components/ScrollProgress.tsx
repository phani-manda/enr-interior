"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const scaleX = useScrollProgress();
  return (
    <motion.div
      className="fixed left-0 top-0 z-[130] h-0.5 w-full origin-left bg-gold"
      style={{ scaleX }}
    />
  );
}
