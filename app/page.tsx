import type { Metadata } from "next";
import Image from "next/image";
import { EntranceWords } from "@/components/sections/AnimatedWords";
import ServicesHoverList from "@/components/sections/ServicesHoverList";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Premium Interior Designs in Hyderabad",
    description: "Transform Your Space with Premium Interior Designs. ENR Interiors creates modular kitchens, living room designs, bedroom interiors, wardrobes, lighting, and home and office interiors.",
    alternates: { canonical: "/" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"] }
  };
}

const trust = ["11+ Years", "Premium Materials", "Zero Hidden Costs"];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen overflow-hidden bg-[var(--enr-bg-primary)] px-5 text-[var(--enr-text-primary)] lg:px-10">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="Cinematic luxury living room by ENR Interiors"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-48"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,.12),transparent_26%),linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,.82)_45%,rgba(10,10,10,.42)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-center pt-24">
          <p className="caption-label mb-8 text-[var(--enr-accent-gold)]">ENR Interiors / Hyderabad</p>
          <h1 className="display-type max-w-6xl tracking-tighter">
            <EntranceWords text="Transform." className="block overflow-hidden" />
            <EntranceWords text="Your Space." className="block overflow-hidden" />
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-[var(--enr-text-muted)]">Transform Your Space with Premium Interior Designs ✨</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[var(--enr-border)] px-5 py-6 lg:px-10">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[var(--enr-text-muted)]">
            <div className="flex items-center gap-4">
              <span className="h-px w-16 bg-[var(--enr-accent-gold)]" />
              <span>Scroll</span>
            </div>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </section>

      <ServicesHoverList />

      <section className="bg-[var(--enr-bg-primary)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-8 border-y border-[var(--enr-border)] py-12 md:grid-cols-3">
          {trust.map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-[var(--enr-border)] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8 last:md:border-r-0">
              <span className="font-display text-4xl tracking-tighter">{item}</span>
              <span className="h-2 w-2 rounded-full bg-[var(--enr-accent-gold)]" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--enr-bg-primary)] px-5 py-32 text-center text-[var(--enr-text-primary)] lg:px-10">
        <p className="caption-label text-[var(--enr-accent-gold)]">Site Visit</p>
        <h2 className="h1-type mx-auto mt-5 max-w-5xl tracking-tighter">Your dream interior starts with one precise measurement.</h2>
        <a href="/contact" className="mt-10 inline-flex border border-[var(--enr-accent-gold)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--enr-accent-gold)] transition hover:bg-[var(--enr-accent-gold)] hover:text-black">Book Site Visit</a>
      </section>
    </>
  );
}
