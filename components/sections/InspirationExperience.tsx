"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { blurDataURL, cn } from "@/lib/utils";

const styles = ["All", "Minimal", "Luxe", "Japandi", "Industrial", "Coastal"] as const;
const scenes = [
  {
    style: "Japandi",
    title: "Japandi Calm",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85",
    materials: "Oak, limewash, paper, linen",
    color: "Warm white, smoked beige, ink",
    mood: "Still, grounded, ritualistic"
  },
  {
    style: "Luxe",
    title: "Luxe Parisian",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=85",
    materials: "Marble, brass, velvet, plaster",
    color: "Ivory, cognac, antique gold",
    mood: "Cinematic, layered, intimate"
  },
  {
    style: "Industrial",
    title: "Raw Industrial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    materials: "Concrete, blackened steel, leather",
    color: "Graphite, oxide, warm grey",
    mood: "Direct, tactile, composed"
  },
  {
    style: "Coastal",
    title: "Coastal Quiet",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    secondary: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    materials: "Rattan, pale oak, cotton, stone",
    color: "Salt, sand, driftwood",
    mood: "Airy, relaxed, sun-washed"
  }
];

export default function InspirationExperience() {
  const [active, setActive] = useState<(typeof styles)[number]>("All");
  const visible = active === "All" ? scenes : scenes.filter((scene) => scene.style === active);

  return (
    <>
      <section className="bg-ivory px-5 pb-12 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] gap-3 overflow-x-auto scrollbar-hide">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActive(style)}
              className={cn("rounded-full border border-charcoal/15 px-5 py-2 text-sm transition", active === style && "border-gold bg-gold text-ivory")}
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
    ["Calacatta Marble", "Carrara, Italy", "Feature walls, counters", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85"],
    ["Smoked Oak", "European forests", "Millwork, flooring", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=85"],
    ["Brushed Brass", "Custom finish", "Hardware, trims", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85"],
    ["Boucle Wool", "Textile atelier", "Seating, panels", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85"],
    ["Lime Plaster", "Hand applied", "Walls, ceilings", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=700&q=85"],
    ["Travertine", "Tivoli, Italy", "Floors, baths", "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=700&q=85"]
  ];
  return (
    <section className="bg-ivory px-5 py-28 lg:px-10">
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
