import type { Metadata } from "next";
import CatalogGrid from "@/components/catalog/CatalogGrid";

export function generateMetadata(): Metadata {
  return {
    title: "Design Catalog",
    description: "Browse 150+ ENR interior concepts across every room, every budget, and every style.",
    alternates: { canonical: "/catalog" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function CatalogPage() {
  return (
    <>
      <section className="bg-[var(--enr-bg-primary)] px-5 pb-14 pt-40 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="caption-label text-[var(--enr-accent-gold)]">Catalog</p>
            <h1 className="h1-type mt-3">Design Catalog</h1>
          </div>
          <p className="text-lg leading-8 text-[var(--enr-text-muted)]">150+ interior concepts. Every room, every budget, every style.</p>
        </div>
      </section>
      <CatalogGrid />
    </>
  );
}
