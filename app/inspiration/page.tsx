import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InspirationExperience from "@/components/sections/InspirationExperience";
import ParallaxImage from "@/components/sections/ParallaxImage";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Inspiration",
    description: "Explore the design philosophies and style worlds that ENR Interiors brings to life — from contemporary Indian to modern luxe.",
    alternates: { canonical: "/inspiration" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function InspirationPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-20 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,168,76,.05),transparent_50%)]" />
        <div className="absolute right-12 top-1/4 h-40 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/25 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            Design Philosophy
          </p>
          <h1 className="h1-type mt-5">Where Function<br />Meets Beauty</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Explore the design philosophies and style worlds that ENR Interiors brings to life — one space at a time.
          </p>

          {/* Gold line */}
          <div className="mt-10 h-px w-60 bg-gradient-to-r from-[var(--enr-accent-gold)] to-transparent" />
        </div>
      </section>

      {/* ─── INSPIRATION EXPERIENCE ─── */}
      <InspirationExperience />

      {/* ─── DESIGNER'S NOTE ─── */}
      <section className="grid bg-[var(--color-charcoal)] md:grid-cols-2">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85"
          alt="ENR designer portrait"
          className="min-h-[620px]"
        />
        <div className="flex items-center p-8 text-[var(--enr-text-primary)] lg:p-20">
          <div>
            <p className="caption-label text-[var(--enr-accent-gold)]">Designer&apos;s Note</p>
            <blockquote className="mt-8 font-display text-[clamp(2rem,4vw,3.5rem)] italic leading-tight">
              Atmosphere is not decoration. It is the discipline of making every surface, shadow, and pause carry intention.
            </blockquote>
            <div className="mt-10 flex items-center gap-4 border-t border-[var(--enr-border)] pt-6">
              <Image
                src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=200&q=85"
                alt="Signature portrait"
                width={56}
                height={56}
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="h-14 w-14 object-cover"
              />
              <div>
                <p className="text-sm font-medium">Mira Anand</p>
                <p className="caption-label mt-0.5 text-[var(--enr-text-muted)]">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-28 text-center text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.05),transparent_60%)]" />
        <div className="relative z-10">
          <p className="caption-label text-[var(--enr-accent-gold)]">Ready to Begin?</p>
          <h2 className="h1-type mx-auto mt-6 max-w-4xl tracking-tighter">
            Let&apos;s bring your vision to life.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex bg-[var(--enr-accent-gold)] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
          >
            Book Free Site Visit
          </Link>
        </div>
      </section>
    </>
  );
}
