"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { blurDataURL } from "@/lib/utils";

export default function PortfolioDrag({ images }: { images: string[] }) {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      drag={desktop ? "x" : false}
      dragConstraints={{ left: -900, right: 0 }}
      className="grid grid-cols-2 gap-3 overflow-visible sm:grid-cols-3 md:flex md:gap-4 md:cursor-grab"
    >
      {images.map((src, index) => (
        <div key={`${src}-${index}`} className="relative aspect-square w-full shrink-0 overflow-hidden border border-transparent transition hover:border-gold md:h-72 md:w-72">
          <Image src={src} alt="Interior preview" fill placeholder="blur" blurDataURL={blurDataURL} sizes="300px" className="object-cover transition duration-700 hover:scale-105" />
        </div>
      ))}
    </motion.div>
  );
}
