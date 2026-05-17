import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EntranceWords, ScrollRevealWords } from "@/components/sections/AnimatedWords";
import CountUp from "@/components/sections/CountUp";
import ParallaxImage from "@/components/sections/ParallaxImage";
import PortfolioDrag from "@/components/sections/PortfolioDrag";
import { projects } from "@/data/projects";
import { blurDataURL, formatOrdinal } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Interior Architecture & Spatial Design",
    description: "LUMINE Studio creates modern minimalist luxury interiors across Hyderabad, Dubai, and beyond.",
    alternates: { canonical: "/" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"] }
  };
}

const awards = ["AD100", "Dezeen Select", "Wallpaper*", "ArchDaily", "Elle Decor", "FRAME"];
const insta = projects.flatMap((project) => [project.image]).slice(0, 8);

export default function HomePage() {
  const featured = projects[0];
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-obsidian px-5 text-center text-ivory image-noise">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85"
          alt="Dark refined interior by LUMINE Studio"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-55 motion-safe:animate-[pulse_12s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/45 to-obsidian/80" />
        <div className="relative z-10 max-w-6xl pt-20">
          <p className="caption-label mb-8 text-mist">EST. 2012 · HYDERABAD · DUBAI</p>
          <h1 className="display-type">
            <EntranceWords text="Spaces" className="block" />
            <EntranceWords text="That Speak" className="block" />
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-ivory/78">Interior architecture and spatial design for those who demand the extraordinary.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/projects" data-cursor-label="Open" className="inline-flex h-11 items-center justify-center border border-gold bg-gold px-6 text-sm uppercase tracking-[0.08em] text-obsidian transition hover:bg-transparent hover:text-gold">Explore Our Work</a>
            <a href="/catalog" className="inline-flex h-11 items-center justify-center border border-ivory/50 px-6 text-sm uppercase tracking-[0.08em] transition hover:border-gold hover:text-gold">View Catalog</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-ivory/10 py-5">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-16 text-xs uppercase tracking-[0.2em] text-ivory/55">
            {[...awards, ...awards].map((award, index) => <span key={`${award}-${index}`}>{award}</span>)}
          </div>
        </div>
      </section>

      <section className="grid bg-ivory md:grid-cols-3">
        {["Residential Design", "Commercial Spaces", "Turnkey Execution"].map((service, index) => (
          <div key={service} className="group border-b border-charcoal/10 p-8 transition-all duration-500 hover:border-l-4 hover:border-l-gold hover:bg-sand/60 md:min-h-[360px] md:border-r">
            <p className="font-display text-7xl text-charcoal/20">{formatOrdinal(index)}</p>
            <h2 className="h2-type mt-10">{service}</h2>
            <p className="mt-4 text-mist">Complete spatial direction shaped around material intelligence, proportion, light, and how daily life actually moves.</p>
            <p className="mt-0 max-h-0 overflow-hidden text-charcoal/70 transition-all duration-500 group-hover:mt-6 group-hover:max-h-32">From concept to site handover, our process keeps craft and execution in the same conversation.</p>
          </div>
        ))}
      </section>

      <section className="grid bg-ivory md:min-h-[780px] md:grid-cols-[55%_45%]">
        <ParallaxImage src={featured.image} alt={featured.name} className="min-h-[380px] md:min-h-full" speed={0.3} />
        <div className="flex items-center p-6 py-14 sm:p-8 lg:p-20">
          <div>
            <p className="caption-label text-gold">{featured.category}</p>
            <h2 className="h1-type mt-4">{featured.name}</h2>
            <p className="mt-6 max-w-lg text-charcoal/70">{featured.description} Every junction is reduced until the space feels inevitable.</p>
            <a href="/projects" className="gold-underline mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em]">View Case Study <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="bg-sand px-5 py-24 text-center lg:px-10 lg:py-32">
        <ScrollRevealWords
          text="We don't just design rooms. We design the feeling of coming home."
          className="mx-auto max-w-5xl font-display text-[clamp(2.8rem,6vw,5.2rem)] italic leading-[1.05]"
        />
      </section>

      <section className="grid gap-10 bg-ivory px-5 py-20 sm:grid-cols-2 md:grid-cols-4 lg:px-10 lg:py-24">
        <CountUp value={230} suffix="+" label="Projects" />
        <CountUp value={12} label="Years" />
        <CountUp value={8} label="Countries" />
        <CountUp value={94} suffix="%" label="Client Return Rate" />
      </section>

      <section className="overflow-hidden bg-ivory px-5 py-20 lg:px-10">
        <p className="caption-label mb-8 text-mist">Portfolio Preview</p>
        <PortfolioDrag images={insta} />
      </section>

      <section className="relative overflow-hidden bg-obsidian px-5 py-32 text-center text-ivory lg:px-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-charcoal opacity-[0.05] blur-3xl motion-safe:animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gold opacity-[0.04] blur-3xl motion-safe:animate-pulse" />
        <h2 className="h1-type">Ready to transform your space?</h2>
        <a href="/contact" className="mt-10 inline-flex h-12 items-center border border-gold bg-gold px-8 text-sm uppercase tracking-[0.1em] text-obsidian transition hover:bg-transparent hover:text-gold">Schedule a Free Consultation</a>
      </section>
    </>
  );
}
