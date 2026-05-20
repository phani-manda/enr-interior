import type { Variants } from "framer-motion";

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_SMOOTH = [0.43, 0.13, 0.23, 0.96] as const;
export const EASE_CINEMATIC = [0.76, 0, 0.24, 1] as const;
export const SPRING_SOFT = { type: "spring", stiffness: 80, damping: 20 } as const;
export const SPRING_SNAPPY = { type: "spring", stiffness: 200, damping: 28 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_EXPO }
  }
};

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 }
  }
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE_EXPO }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_EXPO }
  }
};
