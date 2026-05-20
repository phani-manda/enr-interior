import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Shield, Sparkles, Star } from "lucide-react";
import { EntranceWords } from "@/components/sections/AnimatedWords";
import ServicesHoverList from "@/components/sections/ServicesHoverList";
import CountUp from "@/components/sections/CountUp";
import ParallaxImage from "@/components/sections/ParallaxImage";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Premium Interior Designs in Hyderabad",
    description: "Interiors That Define You. ENR Interiors crafts ultra-premium modular kitchens, living rooms, bedrooms, and bespoke spaces for discerning homeowners across Hyderabad.",
    alternates: { canonical: "/" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"] }
  };
}

const metrics = [
  { value: "52+", label: "Projects Delivered" },
  { value: "11+", label: "Years of Excellence" },
  { value: "4.9★", label: "Google Rating" }
];

const marqueeItems = [
  "Modular Kitchens",
  "Living Room Design",
  "Bedroom Interiors",
  "False Ceilings",
  "Wardrobes",
  "TV Units",
  "Home Office",
  "Commercial Spaces",
  "Lighting Design",
  "Vastu Planning"
];

const featuredProjects = [
  {
    title: "Warm Ambient Living",
    category: "Full Home Interior",
    area: "3,200 sq.ft",
    image: "/portfolio/living-3.jpg",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Living with Partition",
    category: "Contemporary Residential",
    area: "1,800 sq.ft",
    image: "/portfolio/living-1.jpg",
    span: ""
  },
  {
    title: "L-Shaped Kitchen",
    category: "Modular Kitchen",
    area: "210 sq.ft",
    image: "/portfolio/kitchen-1.jpg",
    span: ""
  },
  {
    title: "Kids Dream Room",
    category: "Kids Bedroom",
    area: "180 sq.ft",
    image: "/portfolio/kids-room-1.jpg",
    span: ""
  },
  {
    title: "Premium Living Suite",
    category: "Modern Interiors",
    area: "2,400 sq.ft",
    image: "/portfolio/living-2.jpg",
    span: ""
  }
];

const designStyles = [
  {
    name: "Contemporary Warm",
    description: "Wooden partitions, warm lighting, and marble floors — modern living with Indian warmth.",
    image: "/portfolio/living-1.jpg"
  },
  {
    name: "Modern Luxe",
    description: "LED-lit TV units, L-shaped sofas, and ambient ceiling design — effortless premium.",
    image: "/portfolio/living-3.jpg"
  },
  {
    name: "Kitchen Studio",
    description: "L-shaped layouts, black granite, warm LED backlighting — built for Indian cooking.",
    image: "/portfolio/kitchen-1.jpg"
  },
  {
    name: "Whimsical Kids",
    description: "Moon-and-stars LED art, pastel tones, custom study desks — rooms that spark imagination.",
    image: "/portfolio/kids-room-1.jpg"
  }
];

const processSteps = [
  { number: "01", title: "Discovery Call", duration: "Day 1", icon: Sparkles },
  { number: "02", title: "Free Site Visit", duration: "Day 2–3", icon: Clock },
  { number: "03", title: "3D Concept Design", duration: "Day 5–10", icon: Star },
  { number: "04", title: "Material Selection", duration: "Day 10–14", icon: Award },
  { number: "05", title: "Installation", duration: "Day 14–45", icon: Shield }
];

const testimonials = [
  {
    quote: "ENR completely transformed our Jubilee Hills home. The kitchen alone gets more compliments than anything else in the house.",
    client: "Priya R.",
    project: "Full Home Interior · Jubilee Hills"
  },
  {
    quote: "Professional, punctual, and the 3D designs were exactly what we got in real life. No surprises, no excuses.",
    client: "Arun & Sunita K.",
    project: "Villa Interior · Gachibowli"
  },
  {
    quote: "Clients comment on our office space before the meeting even starts. ENR completely elevated our brand.",
    client: "Siddharth M.",
    project: "Office Fit-out · HITEC City"
  }
];

/* ─── GOLD STRIP DIVIDER ─── */
function GoldStrip({ variant = "full" }: { variant?: "full" | "center" | "left" | "diamond" }) {
  if (variant === "diamond") {
    return (
      <div className="flex items-center justify-center gap-4 py-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--enr-accent-gold)]/40 to-[var(--enr-accent-gold)]/60" />
        <span className="h-2 w-2 rotate-45 bg-[var(--enr-accent-gold)]" />
        <span className="h-px w-16 bg-[var(--enr-accent-gold)]" />
        <span className="h-2 w-2 rotate-45 bg-[var(--enr-accent-gold)]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--enr-accent-gold)]/40 to-[var(--enr-accent-gold)]/60" />
      </div>
    );
  }
  if (variant === "center") {
    return (
      <div className="mx-auto max-w-[1500px] px-5 py-1 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--enr-accent-gold)]/50" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--enr-accent-gold)]/50" />
        </div>
      </div>
    );
  }
  if (variant === "left") {
    return (
      <div className="mx-auto max-w-[1500px] px-5 py-1 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-24 bg-[var(--enr-accent-gold)]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--enr-accent-gold)]/40 to-transparent" />
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--enr-accent-gold)] to-transparent opacity-50" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen overflow-hidden bg-[var(--color-obsidian)] px-5 text-[var(--enr-text-primary)] lg:px-10">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="Cinematic luxury living room by ENR Interiors"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,168,76,.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,24,.3)_0%,rgba(26,26,24,.6)_50%,rgba(26,26,24,.95)_100%)]" />

        {/* Floating architectural gold lines */}
        <div className="absolute left-8 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/30 to-transparent lg:left-16" />
        <div className="absolute right-8 top-1/3 h-48 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent lg:right-16" />
        <div className="absolute bottom-1/3 left-1/3 h-24 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/15 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-center pt-24 pb-32">
          <p className="caption-label mb-8 text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            ENR Interiors · Hyderabad
          </p>

          <h1 className="display-type max-w-5xl tracking-tighter">
            <EntranceWords text="Interiors" className="block overflow-hidden" />
            <EntranceWords text="That Define" className="block overflow-hidden" />
            <span className="block overflow-hidden">
              <EntranceWords text="You." className="text-[var(--enr-accent-gold)]" />
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Premium craftsmanship for homes that feel deeply personal.
            Designed for affluent homeowners who refuse to compromise.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[var(--enr-accent-gold)] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all duration-300 hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
            >
              Book Free Site Visit
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center border border-[var(--enr-border)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--enr-text-primary)] transition-all duration-300 hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[var(--enr-border)] bg-[var(--color-obsidian)]/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 lg:px-10">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[var(--enr-text-muted)]">
              <span className="h-px w-12 bg-[var(--enr-accent-gold)]" />
              <span>Scroll to explore</span>
            </div>
            <div className="hidden items-center gap-10 md:flex">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-right">
                  <span className="font-display text-2xl text-[var(--enr-text-primary)]">{metric.value}</span>
                  <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          LUXURY MARQUEE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden border-b border-[var(--enr-border)] bg-[var(--color-obsidian)] py-6">
        <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-[var(--enr-text-muted)]">
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
            </span>
          ))}
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)] py-4">
        <GoldStrip variant="diamond" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — PHILOSOPHY / WHY ENR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-32 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,168,76,.04),transparent_50%)]" />
        {/* Floating gold lines */}
        <div className="absolute right-16 top-20 h-40 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent" />
        <div className="absolute left-20 bottom-32 h-28 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/15 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="caption-label text-[var(--enr-accent-gold)]">
                <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
                Our Philosophy
              </p>
              <h2 className="h1-type mt-6 tracking-tighter">
                We don&apos;t decorate spaces.<br />
                <span className="text-[var(--enr-accent-gold)]">We architect feelings.</span>
              </h2>
              <p className="mt-8 text-lg leading-8 text-[var(--enr-text-muted)]">
                Every ENR interior is a conversation between light and shadow, precision and warmth,
                functionality and beauty. We don&apos;t chase trends — we create atmospheres that
                age with grace and intention.
              </p>
              <p className="mt-6 leading-7 text-[var(--enr-text-muted)]">
                Our name — <strong className="text-[var(--enr-text-primary)]">ENR</strong> — embodies our promise:
                <strong className="text-[var(--enr-accent-gold)]"> E</strong>xcellence in every detail,
                <strong className="text-[var(--enr-accent-gold)]"> N</strong>uance in every material choice,
                <strong className="text-[var(--enr-accent-gold)]"> R</strong>eliability in every deadline.
              </p>

              {/* Gold strip accent */}
              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-16 bg-[var(--enr-accent-gold)]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
                <span className="h-px w-32 bg-gradient-to-r from-[var(--enr-accent-gold)]/60 to-transparent" />
              </div>

              <Link
                href="/about"
                className="gold-underline mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em]"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
                alt="ENR design team at work"
                className="aspect-[4/5]"
              />
              {/* Floating gold frame corners */}
              <div className="absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-[var(--enr-accent-gold)]/40" />
              <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-[var(--enr-accent-gold)]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="full" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — SERVICES
      ═══════════════════════════════════════════════════════════════ */}
      <ServicesHoverList />

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="center" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — IMPACT NUMBERS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.04),transparent_50%)]" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/10 to-transparent" />
        <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/8 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <p className="caption-label text-center text-[var(--enr-accent-gold)]">Numbers That Matter</p>
          <h2 className="h2-type mt-4 text-center">Measured in trust, not trends.</h2>

          {/* Gold strip under heading */}
          <div className="mx-auto mt-8 max-w-xs">
            <GoldStrip variant="diamond" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <CountUp value={52} suffix="+" label="Projects Delivered" />
            <CountUp value={11} suffix="+" label="Years in Business" />
            <CountUp value={180} suffix="+" label="Five-Star Reviews" />
            <CountUp value={45} label="Avg. Days to Complete" />
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="left" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — FEATURED PROJECTS GALLERY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between">
            <div>
              <p className="caption-label text-[var(--enr-accent-gold)]">
                <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
                Selected Work
              </p>
              <h2 className="h1-type mt-4 tracking-tighter">Spaces that tell stories.</h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-2 text-sm uppercase tracking-[0.12em] text-[var(--enr-text-muted)] transition-colors hover:text-[var(--enr-accent-gold)] md:inline-flex"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          {/* Gold strip under heading */}
          <div className="mt-8">
            <GoldStrip variant="left" />
          </div>

          <div className="mt-12 grid auto-rows-[280px] grid-cols-1 gap-3 md:grid-cols-3 lg:auto-rows-[320px]">
            {featuredProjects.map((project) => (
              <Link
                href="/projects"
                key={project.title}
                data-cursor-label="View"
                className={`group relative overflow-hidden border border-[var(--enr-border)] transition-all duration-500 hover:border-[var(--enr-accent-gold)]/50 hover:shadow-gold-subtle ${project.span}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Gold corner accent on hover */}
                <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-[var(--enr-accent-gold)] opacity-0 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="caption-label text-[var(--enr-accent-gold)]">{project.category}</p>
                  <h3 className="mt-1 font-display text-3xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-[var(--enr-text-muted)]">{project.area}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-[var(--enr-text-muted)] transition-colors hover:text-[var(--enr-accent-gold)] md:hidden"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="full" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — DESIGN STYLES SHOWCASE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-center text-[var(--enr-accent-gold)]">Design Worlds</p>
          <h2 className="h1-type mt-4 text-center tracking-tighter">Find your aesthetic.</h2>

          <div className="mx-auto mt-6 max-w-xs">
            <GoldStrip variant="diamond" />
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {designStyles.map((style) => (
              <Link
                href="/inspiration"
                key={style.name}
                data-cursor-label="Explore"
                className="group relative overflow-hidden border border-[var(--enr-border)] transition-all duration-500 hover:border-[var(--enr-accent-gold)]/50"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/30 to-transparent" />

                  {/* Gold line that grows on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--enr-accent-gold)] transition-all duration-700 group-hover:w-full" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl transition-colors group-hover:text-[var(--enr-accent-gold)]">{style.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--enr-text-muted)]">{style.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="center" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — KITCHEN SPOTLIGHT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] text-[var(--enr-text-primary)]">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden md:h-auto md:min-h-[700px]">
            <Image
              src="/portfolio/kitchen-1.jpg"
              alt="ENR luxury modular kitchen"
              fill
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-obsidian)]/60" />
            {/* Gold corner frame */}
            <div className="absolute right-6 top-6 h-20 w-20 border-r-2 border-t-2 border-[var(--enr-accent-gold)]/40" />
            <div className="absolute bottom-6 left-6 h-20 w-20 border-b-2 border-l-2 border-[var(--enr-accent-gold)]/40" />
          </div>
          <div className="flex items-center p-8 lg:p-20">
            <div>
              <p className="caption-label text-[var(--enr-accent-gold)]">
                <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
                Flagship Service
              </p>
              <h2 className="h1-type mt-6 tracking-tighter">
                Kitchens engineered<br />like architecture.
              </h2>
              <p className="mt-8 text-lg leading-8 text-[var(--enr-text-muted)]">
                Island, L-shaped, parallel, and U-shaped kitchens built with Hettich hardware,
                lacquered MDF, quartz counters, and a serious understanding of Indian cooking workflows.
              </p>

              {/* Gold strip accent */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-[var(--enr-accent-gold)]" />
                <span className="h-1 w-1 rotate-45 bg-[var(--enr-accent-gold)]" />
                <span className="h-px w-24 bg-gradient-to-r from-[var(--enr-accent-gold)]/50 to-transparent" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["40", "Days Avg."],
                  ["₹0", "Hidden Costs"],
                  ["100%", "German Hardware"]
                ].map(([val, lab]) => (
                  <div key={lab} className="border border-[var(--enr-border)] p-4 text-center">
                    <span className="block font-display text-2xl text-[var(--enr-accent-gold)]">{val}</span>
                    <span className="caption-label mt-1 block text-[var(--enr-text-muted)]">{lab}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/kitchens"
                  className="bg-[var(--enr-accent-gold)] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
                >
                  Explore Kitchens
                </Link>
                <Link
                  href="/contact?room=kitchen"
                  className="border border-[var(--enr-border)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
                >
                  Get Kitchen Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="left" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — TRUST METRICS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--color-obsidian)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-px bg-[var(--enr-border)] md:grid-cols-3">
            {[
              { icon: Shield, title: "Zero Hidden Costs", desc: "Transparent pricing from the first quote to the final handover. What we quote is what you pay." },
              { icon: Award, title: "Premium Materials Only", desc: "Hettich, Hafele, quartz, Italian marble — no shortcuts, no cheap alternatives, ever." },
              { icon: Clock, title: "On-Time Delivery", desc: "52 projects delivered on schedule. Your timeline is sacred — we treat every deadline as a promise." }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-[var(--color-obsidian)] p-10 transition-all duration-300 hover:bg-[var(--color-charcoal)]">
                <Icon className="text-[var(--enr-accent-gold)]" size={28} />
                {/* Small gold strip */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-px w-8 bg-[var(--enr-accent-gold)]" />
                  <span className="h-1 w-1 rotate-45 bg-[var(--enr-accent-gold)]" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--enr-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="full" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — PROCESS PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,168,76,.04),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <p className="caption-label text-center text-[var(--enr-accent-gold)]">How We Work</p>
          <h2 className="h1-type mt-4 text-center tracking-tighter">From vision to reality.</h2>

          <div className="mx-auto mt-6 max-w-xs">
            <GoldStrip variant="diamond" />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.number} className="group relative text-center">
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-[var(--enr-accent-gold)]/40 to-[var(--enr-accent-gold)]/10 md:block" />
                )}
                <div className="mx-auto grid h-16 w-16 place-items-center border border-[var(--enr-accent-gold)]/30 transition-all duration-300 group-hover:border-[var(--enr-accent-gold)] group-hover:bg-[var(--enr-accent-gold)] group-hover:text-[var(--color-obsidian)]">
                  <step.icon size={22} className="text-[var(--enr-accent-gold)] transition-colors group-hover:text-[var(--color-obsidian)]" />
                </div>
                <p className="mt-4 font-display text-lg">{step.title}</p>
                <p className="caption-label mt-2 text-[var(--enr-accent-gold)]">{step.duration}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/process"
              className="gold-underline inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em]"
            >
              See Full Process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="center" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            Client Testimonials
          </p>
          <h2 className="h2-type mt-4">Trust built through delivery.</h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.client}
                className="group relative border border-[var(--enr-border)] p-8 transition-all duration-300 hover:border-[var(--enr-accent-gold)]/40 hover:bg-[var(--color-charcoal)]"
              >
                {/* Gold corner accent */}
                <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[var(--enr-accent-gold)]/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[var(--enr-accent-gold)]" />

                <p className="font-display text-7xl leading-none text-[var(--enr-accent-gold)]/30">&ldquo;</p>
                <p className="mt-4 font-display text-xl italic leading-snug">{t.quote}</p>
                <div className="mt-8 border-t border-[var(--enr-border)] pt-5">
                  {/* Small gold strip */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-6 bg-[var(--enr-accent-gold)]" />
                    <span className="h-1 w-1 rotate-45 bg-[var(--enr-accent-gold)]" />
                  </div>
                  <p className="caption-label text-[var(--enr-accent-gold)]">{t.client}</p>
                  <p className="mt-1 text-xs text-[var(--enr-text-muted)]">{t.project}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="gold-underline inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em]"
            >
              Read All Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="full" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 11 — MATERIAL PALETTE PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--color-charcoal)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="caption-label text-center text-[var(--enr-accent-gold)]">Craftsmanship</p>
          <h2 className="h2-type mt-4 text-center">Only premium. No shortcuts.</h2>

          <div className="mx-auto mt-6 max-w-xs">
            <GoldStrip variant="diamond" />
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Hettich Hardware", "German precision fittings for every drawer and hinge."],
              ["Italian Marble", "Natural stone sourced from premium quarries."],
              ["Quartz Counters", "Engineered stone that resists heat, stains, and time."],
              ["Lacquered MDF", "Factory-finish panels with mirror-like sheen."]
            ].map(([name, desc]) => (
              <div
                key={name}
                className="group border border-[var(--enr-border)] p-6 transition-all duration-300 hover:border-[var(--enr-accent-gold)]/50 hover:bg-[var(--color-graphite)]"
              >
                {/* Gold strip top accent */}
                <div className="h-[2px] w-8 bg-[var(--enr-accent-gold)] transition-all duration-500 group-hover:w-full" />
                <h3 className="mt-5 font-display text-xl transition-colors group-hover:text-[var(--enr-accent-gold)]">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--enr-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="left" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 12 — RECOGNITION MARQUEE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-[var(--color-obsidian)] py-10">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-12 text-sm uppercase tracking-[0.18em] text-[var(--enr-text-muted)]">
          {[
            "Featured in Architectural Digest India",
            "Houzz Verified Pro",
            "99acres Design Partner",
            "CIDC Skill Certified",
            "Google Reviews: 4.9★ (180+ reviews)",
            "Featured in Architectural Digest India",
            "Houzz Verified Pro",
            "99acres Design Partner"
          ].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-12">
              {item}
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
            </span>
          ))}
        </div>
      </section>

      {/* ═══ GOLD STRIP ═══ */}
      <div className="bg-[var(--color-obsidian)]">
        <GoldStrip variant="full" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 13 — FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-40 text-center text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.08),transparent_60%)]" />
        {/* Floating gold architectural lines */}
        <div className="absolute left-16 top-1/4 h-40 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/25 to-transparent" />
        <div className="absolute right-20 bottom-1/4 h-32 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent" />
        <div className="absolute left-1/3 top-10 h-24 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/10 to-transparent" />

        <div className="relative z-10">
          <div className="mx-auto mb-10 max-w-xs">
            <GoldStrip variant="diamond" />
          </div>

          <p className="caption-label text-[var(--enr-accent-gold)]">Begin Your Journey</p>
          <h2 className="h1-type mx-auto mt-8 max-w-4xl tracking-tighter">
            Your dream interior starts with<br />one precise measurement.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Our specialists visit your home, take precise measurements, and present a 3D concept — completely free.
            No commitments. No pressure. Just craftsmanship.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[var(--enr-accent-gold)] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-obsidian)] transition-all duration-300 hover:bg-[var(--enr-accent-glow)] hover:shadow-gold-glow"
            >
              Book Free Site Visit
            </Link>
            <Link
              href="/catalog"
              className="border border-[var(--enr-border)] px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
            >
              Browse Design Catalog
            </Link>
          </div>

          <div className="mx-auto mt-14 max-w-xs">
            <GoldStrip variant="diamond" />
          </div>
        </div>
      </section>
    </>
  );
}
