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
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", title: "Contemporary Living", category: "Living Room", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=85", title: "Dark Kitchen Studio", category: "Kitchen", span: "" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85", title: "Calm Bedroom Suite", category: "Bedroom", span: "" },
  { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85", title: "Royal Classic Villa", category: "Living Room", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=85", title: "Bright Parallel Kitchen", category: "Kitchen", span: "" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85", title: "Executive Office", category: "Commercial", span: "" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85", title: "Warm Indian Living", category: "Living Room", span: "" },
  { src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85", title: "Luxe Master Suite", category: "Bedroom", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=85", title: "L-Shaped Kitchen", category: "Kitchen", span: "" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=85", title: "Spa Bathroom", category: "Bathroom", span: "" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85", title: "Cloudnine Cafe", category: "Hospitality", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85", title: "Balcony Lounge", category: "Outdoor", span: "" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85", title: "Playful Kids Room", category: "Kids Room", span: "" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85", title: "Elegant Dining", category: "Dining", span: "" }
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
