import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Our Design Process",
    description: "Discover ENR Interiors' proven 6-step process — from first consultation to final handover. No surprises, no delays, just precision.",
    alternates: { canonical: "/process" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"] }
  };
}

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We start with an in-depth conversation to understand your lifestyle, aesthetic preferences, family needs, budget range, and timeline expectations.",
    duration: "Day 1",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85"
  },
  {
    number: "02",
    title: "Free Site Visit",
    description: "Our design team visits your home to take precise measurements, assess light, ventilation, and structural details — completely free of charge.",
    duration: "Day 2-3",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85"
  },
  {
    number: "03",
    title: "3D Concept Design",
    description: "We present photorealistic 3D renders of your space — every room, every angle, every material — before we cut a single panel.",
    duration: "Day 5-10",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85"
  },
  {
    number: "04",
    title: "Material Selection",
    description: "Walk through our curated material library — touch real samples of quartz, veneer, lacquer, fabric, and hardware before you commit.",
    duration: "Day 10-14",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=85"
  },
  {
    number: "05",
    title: "Factory Production",
    description: "Precision manufacturing at our partner factories using German hardware, CNC-cut panels, and factory-finish quality control.",
    duration: "Day 14-35",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=85"
  },
  {
    number: "06",
    title: "Installation & Handover",
    description: "Clean, dust-managed installation with daily progress updates. We do a final quality walkthrough with you before handover.",
    duration: "Day 35-45",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=85"
  }
];

export default function ProcessPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-20 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_40%,rgba(201,168,76,.05),transparent_50%)]" />
        <div className="absolute left-10 top-1/4 h-40 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/25 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            How We Work
          </p>
          <h1 className="display-type mt-6 max-w-5xl">From Vision to<br /><span className="text-[var(--enr-accent-gold)]">Reality.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Our proven 6-step process ensures no surprises, no delays, and no compromises.
            Every step is transparent, every detail is accounted for.
          </p>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="bg-[var(--color-obsidian)] text-[var(--enr-text-primary)]">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className="grid border-b border-[var(--enr-border)] md:grid-cols-2"
          >
            {/* Image */}
            <div className={`relative h-[400px] overflow-hidden md:h-auto md:min-h-[500px] ${index % 2 ? "md:order-2" : ""}`}>
              <Image
                src={step.image}
                alt={step.title}
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[var(--color-obsidian)]/30" />
              <div className="absolute left-6 top-6 border border-[var(--enr-accent-gold)]/30 bg-[var(--color-obsidian)]/80 px-4 py-2 backdrop-blur-sm">
                <span className="caption-label text-[var(--enr-accent-gold)]">{step.duration}</span>
              </div>
            </div>

            {/* Content */}
            <div className={`flex items-center p-8 lg:p-20 ${index % 2 ? "md:order-1" : ""}`}>
              <div>
                <span className="font-display text-[100px] leading-none text-[var(--enr-accent-gold)]/15">
                  {step.number}
                </span>
                <h2 className="mt-4 font-display text-4xl tracking-tight">{step.title}</h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--enr-text-muted)]">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-10 flex items-center gap-3">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 transition-all duration-300 ${
                        i <= index ? "w-8 bg-[var(--enr-accent-gold)]" : "w-4 bg-[var(--enr-border)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-32 text-center text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.05),transparent_60%)]" />
        <div className="relative z-10">
          <p className="caption-label text-[var(--enr-accent-gold)]">Step 1 Starts Here</p>
          <h2 className="h1-type mx-auto mt-6 max-w-3xl tracking-tighter">Ready to start your journey?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--enr-text-muted)]">
            Book your free site visit today. Our team will take it from there.
          </p>
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
