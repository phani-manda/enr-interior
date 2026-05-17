"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { staggerParent, wordReveal } from "@/lib/motion";

export function EntranceWords({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      variants={staggerParent}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.18em] inline-block overflow-hidden"
          variants={reduce ? undefined : wordReveal}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function ScrollRevealWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 35%"] });
  const words = text.split(" ");
  return (
    <div ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <RevealWord key={`${word}-${index}`} word={word} index={index} total={words.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}

function RevealWord({
  word,
  index,
  total,
  progress
}: {
  word: string;
  index: number;
  total: number;
  progress: import("framer-motion").MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, start + 0.22);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.18em] inline-block">
      {word}
    </motion.span>
  );
}
