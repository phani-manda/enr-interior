"use client";

import Image from "next/image";
import { MessageCircle, Palette, Ruler, Sparkles } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { CatalogItem } from "@/data/catalog";
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
          <div className="relative h-[42vh] min-h-[320px] bg-charcoal md:h-auto md:min-h-screen">
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
                  className="relative h-16 w-20 overflow-hidden border border-ivory/40"
                  aria-label={`Show ${item.title} image ${index + 1}`}
                >
                  <Image src={image} alt="" fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          <aside className="px-6 py-12 md:overflow-y-auto md:px-12 md:py-20">
            <p className="caption-label text-gold">{item.style} · {item.category}</p>
            <DialogTitle className="h1-type mt-3">{item.title}</DialogTitle>
            <DialogDescription className="mt-6 text-base leading-8 text-charcoal/70">{item.description}</DialogDescription>
            <div className="mt-10 grid gap-8">
              <div>
                <p className="caption-label mb-3 flex items-center gap-2 text-mist"><Sparkles size={14} /> Materials</p>
                <div className="flex flex-wrap gap-2">
                  {item.materials.map((material) => (
                    <span key={material} className="rounded-sm border border-charcoal/15 px-3 py-2 text-xs uppercase tracking-[0.08em]">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="caption-label mb-3 flex items-center gap-2 text-mist"><Palette size={14} /> Color Story</p>
                <div className="flex gap-3">
                  {item.colorStory.map((color) => (
                    <span key={color} className="h-9 w-9 rounded-full border border-charcoal/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
              <p className="caption-label flex items-center gap-2 text-mist"><Ruler size={14} /> Estimated Range: <span className="text-charcoal">{item.sqft}</span></p>
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => (window.location.href = `/contact?design=${encodeURIComponent(item.title)}`)}>Request This Design</Button>
              <Button
                variant="outline"
                onClick={() => setContextPrompt(`Tell me about the ${item.title} design`)}
              >
                <MessageCircle size={16} /> Ask LUMI
              </Button>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
