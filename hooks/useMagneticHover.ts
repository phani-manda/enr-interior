"use client";

import { MouseEvent, RefObject, useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

type MagneticReturn<T extends HTMLElement> = {
  ref: RefObject<T>;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  onMouseMove: (event: MouseEvent<T>) => void;
  onMouseLeave: () => void;
};

export function useMagneticHover<T extends HTMLElement>(strength = 0.22): MagneticReturn<T> {
  const ref = useRef<T>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 22 });
  const y = useSpring(rawY, { stiffness: 180, damping: 22 });

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return;
      rawX.set((event.clientX - bounds.left - bounds.width / 2) * strength);
      rawY.set((event.clientY - bounds.top - bounds.height / 2) * strength);
    },
    [rawX, rawY, strength]
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, x, y, onMouseMove, onMouseLeave };
}
