"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 900, damping: 35, mass: 0.1 });
  const y = useSpring(mouseY, { stiffness: 900, damping: 35, mass: 0.1 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const size = useTransform(() => (active ? 64 : 8));

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => {
      const canUseCursor = finePointer.matches && navigator.maxTouchPoints === 0;
      setEnabled(canUseCursor);
      document.body.classList.toggle("cursor-ready", canUseCursor);
    };
    update();
    finePointer.addEventListener("change", update);
    if (!finePointer.matches || navigator.maxTouchPoints > 0) {
      return () => {
        finePointer.removeEventListener("change", update);
        document.body.classList.remove("cursor-ready");
      };
    }
    document.body.classList.add("cursor-ready");
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a,button,input,textarea,select,[role='button'],[data-cursor-label]");
      setActive(Boolean(interactive));
      setLabel((interactive as HTMLElement | null)?.dataset.cursorLabel ?? "");
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      finePointer.removeEventListener("change", update);
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[140] hidden items-center justify-center border border-[var(--enr-accent-gold)] text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--enr-accent-gold)] mix-blend-screen md:flex"
      style={{
        x,
        y,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: active ? "rgba(201,168,76,0)" : "rgba(201,168,76,1)",
        boxShadow: active ? "0 0 20px rgba(201,168,76,0.15)" : "none"
      }}
    >
      {label && active ? label : null}
    </motion.div>
  );
}
