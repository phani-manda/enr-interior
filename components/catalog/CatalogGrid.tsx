"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import CatalogModal from "@/components/catalog/CatalogModal";
import { catalogItems, type CatalogBudget, type CatalogCategory, type CatalogItem, type CatalogStyle } from "@/data/catalog";
import { blurDataURL, cn } from "@/lib/utils";

const categories: CatalogCategory[] = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Outdoor"];
const styles: CatalogStyle[] = ["Minimal", "Luxe", "Japandi", "Industrial", "Coastal", "Rustic"];
const budgets: CatalogBudget[] = ["Starter", "Premium", "Ultra-Luxury"];

type FilterKind = "category" | "style" | "budget";

interface Filters {
  category?: CatalogCategory;
  style?: CatalogStyle;
  budget?: CatalogBudget;
}

export default function CatalogGrid() {
  const [filters, setFilters] = useState<Filters>({});
  const [selected, setSelected] = useState<CatalogItem | null>(null);
  const filtered = useMemo(
    () =>
      catalogItems.filter(
        (item) =>
          (!filters.category || item.category === filters.category) &&
          (!filters.style || item.style === filters.style) &&
          (!filters.budget || item.budget === filters.budget)
      ),
    [filters]
  );

  function setFilter<T extends FilterKind>(kind: T, value: NonNullable<Filters[T]>) {
    setFilters((current) => ({ ...current, [kind]: current[kind] === value ? undefined : value }));
  }

  return (
    <>
      <section className="sticky top-20 z-40 border-y border-charcoal/10 bg-ivory/95 px-5 py-4 backdrop-blur lg:px-10">
        <div className="mx-auto flex max-w-[1500px] gap-4 overflow-x-auto scrollbar-hide">
          <FilterGroup label="Category" values={categories} active={filters.category} onClick={(value) => setFilter("category", value)} />
          <FilterGroup label="Style" values={styles} active={filters.style} onClick={(value) => setFilter("style", value)} />
          <FilterGroup label="Budget" values={budgets} active={filters.budget} onClick={(value) => setFilter("budget", value)} />
        </div>
        <div className="mx-auto mt-3 flex max-w-[1500px] flex-wrap gap-2">
          {Object.entries(filters).map(([key, value]) =>
            value ? (
              <button
                key={key}
                onClick={() => setFilters((current) => ({ ...current, [key]: undefined }))}
                className="rounded-sm bg-gold px-3 py-1 text-xs uppercase tracking-[0.08em] text-obsidian"
              >
                {value} ×
              </button>
            ) : null
          )}
        </div>
      </section>
      <section className="px-5 py-16 lg:px-10">
        <motion.div layout className="mx-auto grid max-w-[1500px] auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.button
                layout
                key={item.id}
                onClick={() => setSelected(item)}
                data-cursor-label="View"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "group relative overflow-hidden border border-transparent text-left transition hover:border-gold",
                  index % 5 === 0 && "md:col-span-2 md:row-span-2",
                  index % 7 === 0 && "lg:row-span-2"
                )}
              >
                <Image src={item.images[0]} alt={item.title} fill placeholder="blur" blurDataURL={blurDataURL} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-obsidian/82 p-5 text-ivory backdrop-blur transition duration-500 md:translate-y-full md:group-hover:translate-y-0">
                  <p className="caption-label text-gold">{item.category}</p>
                  <h3 className="font-display text-4xl">{item.title}</h3>
                  <p className="mt-2 text-sm">View Details →</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <CatalogModal item={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </>
  );
}

function FilterGroup<T extends string>({
  label,
  values,
  active,
  onClick
}: {
  label: string;
  values: readonly T[];
  active?: T;
  onClick: (value: T) => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="caption-label mr-1 text-mist">{label}:</span>
      {values.map((value) => (
        <button
          key={value}
          onClick={() => onClick(value)}
          className={cn(
            "rounded-sm border border-charcoal/15 px-4 py-2 text-xs uppercase tracking-[0.08em] transition",
            active === value && "border-gold bg-gold text-obsidian"
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
