import type { Metadata } from "next";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { ScrollRevealWords } from "@/components/sections/AnimatedWords";
import { team } from "@/data/team";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "About",
    description: "Meet LUMINE Studio, a detail-obsessed interior architecture practice rooted in craft, integrity, and longevity.",
    alternates: { canonical: "/about" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-obsidian text-ivory">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=85"
          alt="LUMINE Studio design team"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-obsidian/20" />
        <div className="relative z-10 flex min-h-screen items-end px-5 pb-20 lg:px-10">
          <h1 className="display-type max-w-5xl">A studio born from obsession with detail.</h1>
        </div>
      </section>
      <section className="bg-sand px-5 py-28 lg:px-10">
        <ScrollRevealWords
          text="We are an interior architecture studio shaped by research, craft, and the belief that restraint can feel abundant. Every project begins with listening, then becomes a disciplined study of light, proportion, material, and the invisible rhythms of daily life."
          className="mx-auto max-w-6xl font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.08]"
        />
      </section>
      <section className="bg-ivory px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-mist">Studio Team</p>
          <h2 className="h1-type mt-3">Measured minds. Exacting hands.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="group border border-charcoal/10">
                <div className="relative aspect-[4/5] overflow-hidden border-b border-charcoal/10 transition group-hover:border-gold">
                  <Image src={member.image} alt={member.name} fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute bottom-4 left-4 flex translate-y-8 gap-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="grid h-9 w-9 place-items-center bg-obsidian text-gold"><Instagram size={16} /></span>
                    <span className="grid h-9 w-9 place-items-center bg-obsidian text-gold"><Linkedin size={16} /></span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="caption-label mt-1 text-mist">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="grid bg-obsidian text-ivory md:grid-cols-3">
        {[
          ["01", "Integrity", "We specify honestly, communicate clearly, and make decisions that age well beyond the reveal."],
          ["02", "Craft", "We respect the intelligence of makers and build details that survive construction, not just render beautifully."],
          ["03", "Longevity", "We design with proportion, material, and memory so rooms become richer with use."]
        ].map(([number, title, text]) => (
          <article key={title} className="border-b border-ivory/10 p-8 md:border-r lg:p-14">
            <p className="font-display text-8xl text-gold/60">{number}</p>
            <h2 className="mt-8 font-display text-5xl">{title}</h2>
            <p className="mt-6 text-ivory/70">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-ivory px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden border-y border-charcoal/10 py-8">
            <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-16 text-2xl uppercase tracking-[0.18em] text-mist">
              {["AD100", "FRAME", "Dezeen", "Elle Decor", "Wallpaper*", "ArchDaily", "AD100", "FRAME", "Dezeen"].map((logo, index) => <span key={`${logo}-${index}`}>{logo}</span>)}
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {["Best Residential Interior 2025", "Hospitality Design Shortlist 2024", "Emerging Studio India 2023", "Material Innovation Citation", "Dubai Design Week Feature", "Craft Council Honoree"].map((award) => (
              <p key={award} className="border-t border-charcoal/10 pt-4 text-xl">{award}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
