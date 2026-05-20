import type { Metadata } from "next";
import CatalogGrid from "@/components/catalog/CatalogGrid";

export function generateMetadata(): Metadata {
  return {
    title: "Design Catalog",
    description: "Browse 150+ ENR interior concepts across every room, every budget, and every style — a luxury design discovery platform.",
    alternates: { canonical: "/catalog" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function CatalogPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-16 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,168,76,.04),transparent_50%)]" />
        <div className="absolute left-10 top-1/3 h-32 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="caption-label text-[var(--enr-accent-gold)]">
              <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
              Design Discovery
            </p>
            <h1 className="h1-type mt-4 tracking-tighter">Design Catalog</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--enr-text-muted)]">
              Explore 150+ curated interior concepts — filter by room, style, and budget. Each design is ready to be customized for your home.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { value: "150+", label: "Designs" },
              { value: "8", label: "Room Types" },
              { value: "6", label: "Styles" }
            ].map((stat) => (
              <div key={stat.label} className="border border-[var(--enr-border)] px-6 py-4 text-center">
                <span className="block font-display text-2xl text-[var(--enr-accent-gold)]">{stat.value}</span>
                <span className="caption-label mt-1 block text-[var(--enr-text-muted)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATALOG GRID ─── */}
      <CatalogGrid />
    </>
  );
}
