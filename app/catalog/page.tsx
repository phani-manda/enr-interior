import type { Metadata } from "next";
import CatalogGrid from "@/components/catalog/CatalogGrid";

export function generateMetadata(): Metadata {
  return {
    title: "Design Catalog",
    description: "Browse curated LUMINE Studio interior concepts by room, style, and budget tier.",
    alternates: { canonical: "/catalog" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function CatalogPage() {
  return (
    <>
      <section className="bg-ivory px-5 pb-14 pt-40 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="caption-label text-mist">Catalog</p>
            <h1 className="h1-type mt-3">Design Catalog</h1>
          </div>
          <p className="text-lg leading-8 text-charcoal/65">Browse 200+ curated interior concepts across every room and style. Filter the demo collection below by category, style, and budget.</p>
        </div>
      </section>
      <CatalogGrid />
    </>
  );
}
