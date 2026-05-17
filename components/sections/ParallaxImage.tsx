"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { blurDataURL, cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  priority?: boolean;
}

export default function ParallaxImage({ src, alt, className, speed = 0.25, priority }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0px", "0px"] : [`-${speed * 80}px`, `${speed * 80}px`]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.04, 1.12]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div className="absolute inset-[-8%]" style={{ y, scale }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
