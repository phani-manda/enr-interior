"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE_EXPO } from "@/lib/motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE_EXPO }}
      >
        {!reduce && (
          <>
            {/* Gold accent line that sweeps across */}
            <motion.div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 top-0 z-[121] h-[2px] bg-gradient-to-r from-transparent via-[var(--enr-accent-gold)] to-transparent"
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: 0 }}
              transition={{ duration: 1, ease: EASE_EXPO }}
            />
            {/* Full-screen wipe */}
            <motion.div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-screen bg-[var(--color-obsidian)]"
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              exit={{ y: "0%" }}
              transition={{ duration: 0.85, ease: EASE_EXPO }}
            />
          </>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
