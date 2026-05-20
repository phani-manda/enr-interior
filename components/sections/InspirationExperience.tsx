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
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85",
    materials: "Teak wood, brushed brass, handloom textiles",
    color: "Warm neutrals, antique gold, deep wood",
    mood: "Grounded / Cultured / Proudly Indian"
  },
  {
    style: "Modern Luxe",
    title: "Modern Luxe Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=85",
    materials: "Lacquered MDF, quartz counters, Hettich hardware",
    color: "Charcoal, champagne gold, clean white",
    mood: "Precision / Gleaming / Effortless"
  },
  {
    style: "Royal Classic",
    title: "Royal Classic Living",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    materials: "Italian marble, velvet upholstery, gold leaf accents",
    color: "Ivory, old gold, deep walnut",
    mood: "Opulent / Timeless / Statement"
  },
  {
    style: "Scandinavian",
    title: "Scandinavian Calm Bedroom",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    materials: "White oak, linen, concrete textures, soft greys",
    color: "Warm white, pale grey, light oak",
    mood: "Restful / Breathable / Uncluttered"
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
    ["Lacquered MDF", "Gloss finish", "Kitchen shutters", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=85"],
    ["Teak Wood", "Indian hardwood", "Doors, accents", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=85"],
    ["Italian Marble", "Premium stone", "Floors, counters", "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=700&q=85"],
    ["Quartz Stone", "Engineered surface", "Kitchen counters", "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=700&q=85"],
    ["Engineered Wood", "Stable core", "Wardrobes, storage", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=700&q=85"],
    ["Velvet Fabric", "Soft touch", "Sofas, headboards", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85"],
    ["Brushed Brass", "Warm metal", "Handles, trims", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=85"],
    ["Hettich Hardware", "German fittings", "Kitchen systems", "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=700&q=85"],
    ["Back-painted Glass", "Reflective surface", "Backsplashes", "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=700&q=85"],
    ["Veneer Finish", "Natural grain", "Wall panels", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"],
    ["Porcelain Tiles", "Durable surface", "Bathrooms, floors", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=85"],
    ["PU Paint", "Seamless finish", "Premium shutters", "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=700&q=85"]
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
