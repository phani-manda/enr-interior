"use client";

import Image from "next/image";
import { MessageCircle, Palette, Ruler, Sparkles } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { budgetLabels, roomLabels, styleLabels, type CatalogItem } from "@/data/catalog";
import { blurDataURL } from "@/lib/utils";
import { useChatStore } from "@/store/chatStore";

interface CatalogModalProps {
  item: CatalogItem | null;
  onOpenChange: (open: boolean) => void;
}

export default function CatalogModal({ item, onOpenChange }: CatalogModalProps) {
  const [active, setActive] = useState(0);
  const setContextPrompt = useChatStore((state) => state.setContextPrompt);

  if (!item) return null;

  return (
    <Dialog open={Boolean(item)} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="grid h-full overflow-y-auto md:grid-cols-[58%_42%] md:overflow-hidden">
          {/* Image Panel */}
          <div className="relative h-[42vh] min-h-[320px] bg-[var(--color-charcoal)] md:h-auto md:min-h-screen">
            <Image
              key={item.images[active]}
              src={item.images[active]}
              alt={item.title}
              fill
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 flex gap-3">
              {item.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActive(index)}
                  className={`relative h-16 w-20 overflow-hidden border transition-all ${
                    active === index
                      ? "border-[var(--enr-accent-gold)]"
                      : "border-white/30 hover:border-white/60"
                  }`}
                  aria-label={`Show ${item.title} image ${index + 1}`}
                >
                  <Image src={image} alt="" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <aside className="bg-[var(--color-obsidian)] px-6 py-12 text-[var(--enr-text-primary)] md:overflow-y-auto md:px-12 md:py-20">
            <p className="caption-label text-[var(--enr-accent-gold)]">
              {styleLabels[item.style]} / {roomLabels[item.room]} / {budgetLabels[item.budgetRange]}
            </p>
            <DialogTitle className="h1-type mt-4">{item.title}</DialogTitle>
            <DialogDescription className="mt-6 text-base leading-8 text-[var(--enr-text-muted)]">
              {item.description}
            </DialogDescription>

            <div className="mt-10 grid gap-8">
              {/* Materials */}
              <div>
                <p className="caption-label mb-3 flex items-center gap-2 text-[var(--enr-text-muted)]">
                  <Sparkles size={14} className="text-[var(--enr-accent-gold)]" /> Materials
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.materials.map((material) => (
                    <span
                      key={material}
                      className="border border-[var(--enr-border)] px-3 py-2 text-xs uppercase tracking-[0.08em]"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Story */}
              <div>
                <p className="caption-label mb-3 flex items-center gap-2 text-[var(--enr-text-muted)]">
                  <Palette size={14} className="text-[var(--enr-accent-gold)]" /> Color Story
                </p>
                <div className="flex gap-3">
                  {item.colorStory.map((color) => (
                    <span
                      key={color}
                      className="h-9 w-9 border border-[var(--enr-border)]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Area */}
              <p className="caption-label flex items-center gap-2 text-[var(--enr-text-muted)]">
                <Ruler size={14} className="text-[var(--enr-accent-gold)]" /> Area:{" "}
                <span className="text-[var(--enr-text-primary)]">{item.sqft}</span>
              </p>

              {/* Highlights */}
              <div>
                <p className="caption-label mb-3 text-[var(--enr-text-muted)]">Highlights</p>
                <ul className="space-y-2 text-sm text-[var(--enr-text-muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-[var(--enr-accent-gold)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <p className="caption-label text-[var(--enr-text-muted)]">
                Timeline: <span className="text-[var(--enr-text-primary)]">{item.estimatedTimeline}</span>
              </p>
            </div>

            {/* Actions */}
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => (window.location.href = `/contact?design=${encodeURIComponent(item.title)}`)}>
                Request This Design
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setContextPrompt(
                    `I'm looking at the ${item.title} design in your catalog. Can you tell me more about this style, the materials used, and roughly what it would cost to execute in Hyderabad?`
                  )
                }
              >
                <MessageCircle size={16} /> Ask ENR&apos;s AI
              </Button>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
