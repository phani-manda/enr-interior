"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const scaleX = useScrollProgress();
  return (
    <motion.div
      className="fixed left-0 top-0 z-[130] h-px w-full origin-left bg-[var(--enr-accent-gold)]"
      style={{ scaleX }}
    />
  );
}
