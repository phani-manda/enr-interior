"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { blurDataURL, cn } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/motion";

const styles = ["All", "Contemporary", "Royal Classic", "Modern Luxe", "Scandinavian", "Industrial Chic", "Vastu-Aligned"] as const;
const scenes = [
  {
    style: "Contemporary",
    title: "Contemporary Indian",
    image: "/portfolio/partition-living.jpeg",
    secondary: "/portfolio/living-room.jpeg",
    materials: "Teak wood, brushed brass, handloom textiles",
    color: "Warm neutrals, antique gold, deep wood",
    mood: "Grounded / Cultured / Proudly Indian"
  },
  {
    style: "Modern Luxe",
    title: "Modern Luxe Kitchen",
    image: "/portfolio/kitchen.jpeg",
    secondary: "/portfolio/living-promo.jpeg",
    materials: "Lacquered MDF, quartz counters, Hettich hardware",
    color: "Charcoal, champagne gold, clean white",
    mood: "Precision / Gleaming / Effortless"
  },
  {
    style: "Royal Classic",
    title: "Royal Classic Living",
    image: "/portfolio/living-room.jpeg",
    secondary: "/portfolio/bedroom.jpeg",
    materials: "Italian marble, velvet upholstery, gold leaf accents",
    color: "Ivory, old gold, deep walnut",
    mood: "Opulent / Timeless / Statement"
  },
  {
    style: "Scandinavian",
    title: "Kids Dream Room",
    image: "/portfolio/kids-room.jpeg",
    secondary: "/portfolio/bedroom.jpeg",
    materials: "White oak, linen, LED art, soft pastels",
    color: "Warm white, pale grey, blush pink",
    mood: "Restful / Playful / Imaginative"
  }
];

export default function InspirationExperience() {
  const [active, setActive] = useState<(typeof styles)[number]>("All");
  const visible = active === "All" ? scenes : scenes.filter((scene) => scene.style === active);

  return (
    <>
      {/* Filter Bar */}
      <section className="bg-[var(--color-obsidian)] px-5 pb-12 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto flex max-w-[1500px] gap-3 overflow-x-auto scrollbar-hide">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActive(style)}
              className={cn(
                "border px-5 py-2.5 text-sm transition-all duration-300",
                active === style
                  ? "border-[var(--enr-accent-gold)] bg-[var(--enr-accent-gold)] text-[var(--color-obsidian)]"
                  : "border-[var(--enr-border)] hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
              )}
            >
              {style}
            </button>
          ))}
        </div>
      </section>

      {/* Scene Panels */}
      <AnimatePresence mode="popLayout">
        {visible.map((scene) => (
          <ScenePanel key={scene.title} scene={scene} />
        ))}
      </AnimatePresence>

      {/* Material Explorer */}
      <MaterialExplorer />
    </>
  );
}

function ScenePanel({ scene }: { scene: (typeof scenes)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const [desktop, setDesktop] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const sideX = useTransform(scrollYProgress, [0.1, 0.45], [60, 0]);
  const sideOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <motion.section
      ref={ref}
      layout
      className="relative min-h-[760px] overflow-hidden bg-[var(--color-obsidian)] text-[var(--enr-text-primary)] md:sticky md:top-0 md:min-h-screen"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image src={scene.image} alt={scene.title} fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover opacity-60" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)]/85 via-[var(--color-obsidian)]/30 to-[var(--color-obsidian)]/75" />

      <div className="relative z-10 grid min-h-[760px] items-end gap-8 px-5 py-20 md:min-h-screen md:grid-cols-[1fr_420px] md:items-center md:gap-10 lg:px-10">
        <div>
          <p className="caption-label text-[var(--enr-accent-gold)]">{scene.style}</p>
          <h2 className="display-type mt-4 max-w-4xl">{scene.title}</h2>
        </div>
        <motion.aside
          style={desktop ? { x: sideX, opacity: sideOpacity } : undefined}
          className="border border-[var(--enr-border)] bg-[var(--color-obsidian)]/80 p-5 backdrop-blur-md md:p-6"
        >
          <div className="relative mb-5 h-44 overflow-hidden md:mb-6 md:h-56">
            <Image src={scene.secondary} alt="" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
          </div>
          <Info label="Key Materials" value={scene.materials} />
          <Info label="Color Story" value={scene.color} />
          <Info label="Mood Words" value={scene.mood} />
        </motion.aside>
      </div>
    </motion.section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[var(--enr-border)] py-4">
      <p className="caption-label text-[var(--enr-text-muted)]">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}

function MaterialExplorer() {
  const materials = [
    ["Lacquered MDF", "Gloss finish", "Kitchen shutters", "/portfolio/kitchen.jpeg"],
    ["Teak Wood", "Indian hardwood", "Doors, accents", "/portfolio/partition-living.jpeg"],
    ["Italian Marble", "Premium stone", "Floors, counters", "/portfolio/living-room.jpeg"],
    ["Quartz Stone", "Engineered surface", "Kitchen counters", "/portfolio/kitchen.jpeg"],
    ["Engineered Wood", "Stable core", "Wardrobes, storage", "/portfolio/bedroom.jpeg"],
    ["Velvet Fabric", "Soft touch", "Sofas, headboards", "/portfolio/living-room.jpeg"],
    ["Brushed Brass", "Warm metal", "Handles, trims", "/portfolio/partition-living.jpeg"],
    ["Hettich Hardware", "German fittings", "Kitchen systems", "/portfolio/kitchen.jpeg"],
    ["Back-painted Glass", "Reflective surface", "Backsplashes", "/portfolio/kitchen.jpeg"],
    ["Veneer Finish", "Natural grain", "Wall panels", "/portfolio/partition-living.jpeg"],
    ["Porcelain Tiles", "Durable surface", "Bathrooms, floors", "/portfolio/bedroom.jpeg"],
    ["PU Paint", "Seamless finish", "Premium shutters", "/portfolio/kitchen.jpeg"]
  ];
  return (
    <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="caption-label text-[var(--enr-accent-gold)]">Material Palette</p>
        <h2 className="h1-type mt-4 mb-14">Our Material Language</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map(([name, origin, uses, image]) => (
            <motion.div
              key={name}
              layout
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group border border-[var(--enr-border)] bg-[var(--color-charcoal)] transition-all duration-300 hover:border-[var(--enr-accent-gold)]/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium transition-colors group-hover:text-[var(--enr-accent-gold)]">{name}</h3>
                <p className="mt-1 text-sm text-[var(--enr-text-muted)]">{origin} · {uses}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
