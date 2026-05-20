import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ruler } from "lucide-react";
import KitchenHorizontalShowcase from "@/components/sections/KitchenHorizontalShowcase";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Modular Kitchens",
    description: "Flagship modular kitchen interiors by ENR Interiors: island, L-shaped, parallel, and U-shaped kitchens with premium Hettich & Hafele hardware and luxury finishes.",
    alternates: { canonical: "/kitchens" },
    openGraph: { images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=90"] }
  };
}

const kitchenFeatures = [
  { number: "01", title: "Consultation", desc: "Deep dive into your cooking habits, family size, and kitchen dreams." },
  { number: "02", title: "3D Design", desc: "Photorealistic renders of your exact kitchen before we cut a single panel." },
  { number: "03", title: "Fabrication", desc: "Factory-precision manufacturing with German hardware and premium finishes." },
  { number: "04", title: "Installation", desc: "Clean, dust-managed installation with daily progress updates." }
];

const materials = [
  { name: "Hettich Hardware", origin: "German precision" },
  { name: "Hafele Fittings", origin: "European quality" },
  { name: "Quartz Counters", origin: "Engineered stone" },
  { name: "Lacquered MDF", origin: "Premium shutters" },
  { name: "Back-painted Glass", origin: "Easy-clean backsplash" },
  { name: "Brushed Brass", origin: "Warm accents" }
];

export default function KitchensPage() {
  return (
    <>
      {/* ─── CINEMATIC HERO ─── */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[var(--color-obsidian)] px-5 pb-24 text-[var(--enr-text-primary)] lg:px-10">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2200&q=90"
          alt="Dark luxury modular kitchen"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,26,24,1)_0%,rgba(26,26,24,.5)_40%,rgba(26,26,24,.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(201,168,76,.08),transparent_60%)]" />

        {/* Floating gold lines */}
        <div className="absolute right-12 top-1/4 h-40 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            Flagship Service
          </p>
          <h1 className="display-type mt-6 max-w-5xl tracking-tighter">
            Modular Kitchens,<br />
            <span className="text-[var(--enr-accent-gold)]">engineered like architecture.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Island, L-shaped, parallel, and U-shaped kitchens built with Hettich hardware, lacquered MDF,
            quartz counters, and a serious understanding of Indian cooking workflows.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact?room=kitchen"
              className="bg-[var(--enr-accent-gold)] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
            >
              Get Kitchen Quote
            </Link>
            <Link
              href="/catalog"
              className="border border-[var(--enr-border)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
            >
              Browse Kitchen Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HORIZONTAL SHOWCASE ─── */}
      <KitchenHorizontalShowcase />

      {/* ─── PROCESS TIMELINE ─── */}
      <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">Our Process</p>
          <h2 className="h1-type mt-4 max-w-3xl tracking-tighter">From concept to cooking — in 40 days.</h2>

          <div className="mt-16 grid gap-px bg-[var(--enr-border)] md:grid-cols-4">
            {kitchenFeatures.map((feature) => (
              <div key={feature.number} className="group bg-[var(--color-obsidian)] p-8 transition-all duration-500 hover:bg-[var(--color-charcoal)]">
                <span className="font-display text-5xl text-[var(--enr-accent-gold)]/40 transition-colors group-hover:text-[var(--enr-accent-gold)]">
                  {feature.number}
                </span>
                <h3 className="mt-6 font-display text-2xl">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--enr-text-muted)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATERIALS ─── */}
      <section className="bg-[var(--color-charcoal)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">Material Standards</p>
          <h2 className="h2-type mt-4">Only premium. No shortcuts.</h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((mat) => (
              <div
                key={mat.name}
                className="group border border-[var(--enr-border)] p-6 transition-all duration-300 hover:border-[var(--enr-accent-gold)]/50 hover:bg-[var(--color-graphite)]"
              >
                <h3 className="font-display text-xl transition-colors group-hover:text-[var(--enr-accent-gold)]">{mat.name}</h3>
                <p className="mt-2 text-sm text-[var(--enr-text-muted)]">{mat.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-32 text-center text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.05),transparent_60%)]" />
        <div className="relative z-10">
          <Ruler className="mx-auto text-[var(--enr-accent-gold)]" size={36} />
          <h2 className="h1-type mx-auto mt-8 max-w-4xl tracking-tighter">Ready to measure your kitchen?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--enr-text-muted)]">
            Our specialists visit your home, take precise measurements, and present a 3D concept before execution begins — completely free.
          </p>
          <Link
            href="/contact?room=kitchen"
            className="mt-10 inline-flex bg-[var(--enr-accent-gold)] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
          >
            Book Free Kitchen Visit
          </Link>
        </div>
      </section>
    </>
  );
}
