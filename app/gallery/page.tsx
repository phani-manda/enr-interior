import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Gallery",
    description: "Browse ENR Interiors' curated gallery of luxury residential, kitchen, and commercial interiors across Hyderabad.",
    alternates: { canonical: "/gallery" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"] }
  };
}

const galleryImages = [
  { src: "/portfolio/living-3.jpg", title: "Warm Ambient Living", category: "Living Room", span: "col-span-2 row-span-2" },
  { src: "/portfolio/kitchen-1.jpg", title: "L-Shaped Kitchen", category: "Kitchen", span: "" },
  { src: "/portfolio/kids-room-1.jpg", title: "Kids Dream Room", category: "Kids Room", span: "" },
  { src: "/portfolio/living-1.jpg", title: "Partition Living", category: "Living Room", span: "col-span-2" },
  { src: "/portfolio/living-2.jpg", title: "Premium Living Suite", category: "Living Room", span: "" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85", title: "Executive Office", category: "Commercial", span: "" },
  { src: "/portfolio/living-3.jpg", title: "TV Unit Design", category: "Living Room", span: "" },
  { src: "/portfolio/kids-room-1.jpg", title: "Study Corner", category: "Kids Room", span: "col-span-2 row-span-2" },
  { src: "/portfolio/kitchen-1.jpg", title: "Kitchen LED Lighting", category: "Kitchen", span: "" },
  { src: "/portfolio/living-1.jpg", title: "Dining Zone", category: "Dining", span: "" },
  { src: "/portfolio/living-2.jpg", title: "Modern Interiors", category: "Living Room", span: "col-span-2" },
  { src: "/portfolio/living-3.jpg", title: "Sofa Arrangement", category: "Living Room", span: "" },
  { src: "/portfolio/kitchen-1.jpg", title: "Countertop Detail", category: "Kitchen", span: "" },
  { src: "/portfolio/living-1.jpg", title: "False Ceiling Design", category: "Living Room", span: "" }
];

export default function GalleryPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-16 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,168,76,.04),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            Visual Portfolio
          </p>
          <h1 className="display-type mt-6 max-w-4xl">
            Every Detail,<br /><span className="text-[var(--enr-accent-gold)]">Captured.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            A curated selection of our finest work — luxury homes, statement kitchens, and spaces that tell stories.
          </p>
        </div>
      </section>

      {/* ─── MASONRY GALLERY ─── */}
      <section className="bg-[var(--color-obsidian)] px-5 pb-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto grid max-w-[1500px] auto-rows-[280px] grid-cols-2 gap-3 md:grid-cols-4 lg:auto-rows-[320px]">
          {galleryImages.map((img) => (
            <div
              key={img.title}
              className={`group relative overflow-hidden ${img.span}`}
              data-cursor-label="View"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                <p className="caption-label text-[var(--enr-accent-gold)]">{img.category}</p>
                <h3 className="mt-1 font-display text-2xl">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-28 text-center text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.05),transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="h1-type mx-auto max-w-3xl tracking-tighter">Want your space in our gallery?</h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex bg-[var(--enr-accent-gold)] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
