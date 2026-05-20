"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import CatalogModal from "@/components/catalog/CatalogModal";
import {
  budgetLabels,
  catalogItems,
  roomLabels,
  styleLabels,
  type CatalogBudgetRange,
  type CatalogItem,
  type CatalogRoom,
  type CatalogStyle
} from "@/data/catalog";
import { blurDataURL, cn } from "@/lib/utils";

const rooms: CatalogRoom[] = ["living-room", "kitchen", "bedroom", "kids-room", "home-office", "dining", "bathroom", "balcony"];
const styles: CatalogStyle[] = ["contemporary", "modern-luxe", "classic", "scandinavian", "industrial", "vastu"];
const budgets: CatalogBudgetRange[] = ["5-10L", "10-25L", "25-50L", "50L+"];

type FilterKind = "room" | "style" | "budgetRange";

interface Filters {
  room?: CatalogRoom;
  style?: CatalogStyle;
  budgetRange?: CatalogBudgetRange;
}

interface CatalogGridProps {
  items?: CatalogItem[];
  lockedRoom?: CatalogRoom;
  showFilters?: boolean;
}

export default function CatalogGrid({ items = catalogItems, lockedRoom, showFilters = true }: CatalogGridProps) {
  const [filters, setFilters] = useState<Filters>(lockedRoom ? { room: lockedRoom } : {});
  const [selected, setSelected] = useState<CatalogItem | null>(null);
  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (!filters.room || item.room === filters.room) &&
          (!filters.style || item.style === filters.style) &&
          (!filters.budgetRange || item.budgetRange === filters.budgetRange)
      ),
    [filters, items]
  );

  function setFilter<T extends FilterKind>(kind: T, value: NonNullable<Filters[T]>) {
    setFilters((current) => ({ ...current, [kind]: current[kind] === value ? undefined : value }));
  }

  return (
    <>
      {showFilters && (
        <section className="sticky top-20 z-40 border-y border-[var(--enr-border)] bg-[rgba(10,10,10,.92)] px-5 py-4 text-[var(--enr-text-primary)] backdrop-blur lg:px-10">
          <div className="mx-auto flex max-w-[1500px] gap-4 overflow-x-auto scrollbar-hide">
            <FilterGroup label="Room Type" values={rooms} labels={roomLabels} active={filters.room} onClick={(value) => setFilter("room", value)} />
            <FilterGroup label="Style" values={styles} labels={styleLabels} active={filters.style} onClick={(value) => setFilter("style", value)} />
            <FilterGroup label="Budget" values={budgets} labels={budgetLabels} active={filters.budgetRange} onClick={(value) => setFilter("budgetRange", value)} />
          </div>
          <div className="mx-auto mt-3 flex max-w-[1500px] flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) =>
              value && !(lockedRoom && key === "room") ? (
                <button
                  key={key}
                  onClick={() => setFilters((current) => ({ ...current, [key]: undefined }))}
                  className="bg-[var(--enr-accent-gold)] px-3 py-1 text-xs uppercase tracking-[0.08em] text-black"
                >
                  {labelForFilterValue(value)} x
                </button>
              ) : null
            )}
          </div>
        </section>
      )}
      <section className="bg-[var(--enr-bg-primary)] px-5 py-16 text-[var(--enr-text-primary)] lg:px-10">
        <motion.div layout className="mx-auto grid max-w-[1500px] auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.button
                layout
                key={item.id}
                onClick={() => setSelected(item)}
                data-cursor-label="View Design"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "group relative overflow-hidden border border-transparent bg-enr-charcoal text-left transition hover:border-enr-gold",
                  index % 5 === 0 && "md:col-span-2 md:row-span-2",
                  index % 7 === 0 && "lg:row-span-2"
                )}
              >
                {item.tag && (
                  <span className="absolute left-4 top-4 z-10 bg-enr-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-enr-obsidian">
                    {item.tag}
                  </span>
                )}
                <Image src={item.images[0]} alt={item.title} fill placeholder="blur" blurDataURL={blurDataURL} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-enr-obsidian/86 p-5 text-enr-ivory backdrop-blur transition duration-500 md:translate-y-full md:group-hover:translate-y-0">
                  <p className="caption-label text-enr-gold">{roomLabels[item.room]}</p>
                  <h3 className="font-display text-4xl">{item.title}</h3>
                  <p className="mt-2 text-sm">View Details -&gt;</p>
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
  labels,
  active,
  onClick
}: {
  label: string;
  values: readonly T[];
  labels: Record<T, string>;
  active?: T;
  onClick: (value: T) => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="caption-label mr-1 text-[var(--enr-text-muted)]">{label}:</span>
      {values.map((value) => (
        <button
          key={value}
          onClick={() => onClick(value)}
          className={cn(
            "border border-[var(--enr-border)] px-4 py-2 text-xs uppercase tracking-[0.08em] transition hover:border-[var(--enr-accent-gold)]",
            active === value && "border-[var(--enr-accent-gold)] bg-[var(--enr-accent-gold)] text-black"
          )}
        >
          {labels[value]}
        </button>
      ))}
    </div>
  );
}

function labelForFilterValue(value: string) {
  return (
    roomLabels[value as CatalogRoom] ??
    styleLabels[value as CatalogStyle] ??
    budgetLabels[value as CatalogBudgetRange] ??
    value
  );
}
