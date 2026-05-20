"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { blurDataURL, cn } from "@/lib/utils";

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
      <section className="bg-enr-obsidian px-5 pb-12 text-enr-ivory lg:px-10">
        <div className="mx-auto flex max-w-[1500px] gap-3 overflow-x-auto scrollbar-hide">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActive(style)}
              className={cn("border border-enr-gold-muted/40 px-5 py-2 text-sm transition hover:border-enr-gold", active === style && "border-enr-gold bg-enr-gold text-enr-obsidian")}
            >
              {style}
            </button>
          ))}
        </div>
      </section>
      <AnimatePresence mode="popLayout">
        {visible.map((scene) => (
          <ScenePanel key={scene.title} scene={scene} />
        ))}
      </AnimatePresence>
      <MaterialExplorer />
    </>
  );
}

function ScenePanel({ scene }: { scene: (typeof scenes)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const [desktop, setDesktop] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const sideX = useTransform(scrollYProgress, [0.1, 0.45], [80, 0]);
  const sideOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <motion.section ref={ref} layout className="relative min-h-[760px] overflow-hidden bg-obsidian text-ivory md:sticky md:top-0 md:min-h-screen">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image src={scene.image} alt={scene.title} fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover opacity-70" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/20 to-obsidian/78" />
      <div className="relative z-10 grid min-h-[760px] items-end gap-8 px-5 py-20 md:min-h-screen md:grid-cols-[1fr_420px] md:items-center md:gap-10 lg:px-10">
        <div>
          <p className="caption-label text-gold">{scene.style}</p>
          <h2 className="display-type max-w-4xl">{scene.title}</h2>
        </div>
        <motion.aside style={desktop ? { x: sideX, opacity: sideOpacity } : undefined} className="border border-ivory/20 bg-obsidian/78 p-5 backdrop-blur md:p-6">
          <div className="relative mb-5 h-44 md:mb-6 md:h-56">
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
    <div className="border-t border-ivory/10 py-4">
      <p className="caption-label text-mist">{label}</p>
      <p className="mt-1">{value}</p>
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
    <section className="bg-[var(--enr-bg-primary)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="h1-type mb-12">Our Material Language</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map(([name, origin, uses, image]) => (
            <motion.div key={name} layout whileHover={{ scale: 1.04 }} className="group border border-charcoal/10 bg-ivory p-4">
              <div className="relative aspect-square overflow-hidden">
                <Image src={image} alt={name} fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{name}</h3>
              <p className="text-sm text-mist">{origin} · {uses}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
