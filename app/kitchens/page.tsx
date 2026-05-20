import type { Metadata } from "next";
import Image from "next/image";
import { Ruler } from "lucide-react";
import KitchenHorizontalShowcase from "@/components/sections/KitchenHorizontalShowcase";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Modular Kitchens",
    description: "Flagship modular kitchen interiors by ENR Interiors: island, L-shaped, and parallel kitchens with premium hardware and finishes.",
    alternates: { canonical: "/kitchens" },
    openGraph: { images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=90"] }
  };
}

export default function KitchensPage() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[var(--enr-bg-primary)] px-5 pb-20 text-[var(--enr-text-primary)] lg:px-10">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2200&q=90"
          alt="Dark luxury modular kitchen"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0A0A0A_0%,rgba(10,10,10,.28)_55%,rgba(10,10,10,.74)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">Flagship Service</p>
          <h1 className="display-type mt-5 max-w-6xl tracking-tighter">Modular Kitchens, engineered like architecture.</h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--enr-text-muted)]">Island, L-shaped, and parallel kitchens built with Hettich hardware, lacquered MDF, quartz, and a serious understanding of Indian cooking.</p>
        </div>
      </section>

      <KitchenHorizontalShowcase />

      <section className="bg-[var(--enr-bg-primary)] px-5 py-28 text-center text-[var(--enr-text-primary)] lg:px-10">
        <Ruler className="mx-auto text-[var(--enr-accent-gold)]" size={32} />
        <h2 className="h1-type mx-auto mt-6 max-w-4xl tracking-tighter">Ready to measure your kitchen?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[var(--enr-text-muted)]">Our specialists visit your home, take precise measurements, and present a 3D concept before execution begins.</p>
        <a href="/contact?room=kitchen" className="mt-10 inline-flex border border-[var(--enr-accent-gold)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--enr-accent-gold)] transition hover:bg-[var(--enr-accent-gold)] hover:text-black">Book Site Visit</a>
      </section>
    </>
  );
}
