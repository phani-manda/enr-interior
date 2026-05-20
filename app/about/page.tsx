import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { ScrollRevealWords } from "@/components/sections/AnimatedWords";
import { team } from "@/data/team";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "About ENR",
    description: "Meet ENR Interiors — a Hyderabad interior design studio built on trust, obsessive detail, and durable execution. 11+ years of premium craftsmanship.",
    alternates: { canonical: "/about" },
    openGraph: { images: ["/portfolio/partition-living.jpeg"] }
  };
}

export default function AboutPage() {
  return (
    <>
      {/* ─── CINEMATIC HERO ─── */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--color-obsidian)] text-[var(--enr-text-primary)]">
        <Image
          src="/portfolio/partition-living.jpeg"
          alt="ENR Interiors design team"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/50 to-[var(--color-obsidian)]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(201,168,76,.06),transparent_50%)]" />

        {/* Architectural lines */}
        <div className="absolute left-8 top-1/4 h-40 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/30 to-transparent lg:left-16" />

        <div className="relative z-10 flex min-h-screen items-end px-5 pb-24 lg:px-10">
          <div>
            <p className="caption-label mb-6 text-[var(--enr-accent-gold)]">
              <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
              Est. 2014 · Hyderabad
            </p>
            <h1 className="display-type max-w-5xl">Born in Hyderabad.<br />Built on Trust.</h1>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER STORY ─── */}
      <section className="bg-[var(--color-cream-section)] px-5 py-28 text-[var(--color-obsidian)] lg:px-10">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-8 text-[var(--color-graphite)]">
          <p className="text-xl leading-9">
            ENR Interiors was founded with one belief: that premium interiors shouldn&apos;t be a privilege reserved
            for the ultra-wealthy. Over 11 years, we&apos;ve brought world-class design thinking to homes and
            offices across Hyderabad — and increasingly, across India.
          </p>
          <p>
            Our name — <strong className="text-[var(--color-obsidian)]">ENR</strong> — stands for everything
            we put into our work: <strong className="text-[var(--color-gold-muted)]">E</strong>xcellence,{" "}
            <strong className="text-[var(--color-gold-muted)]">N</strong>uance, and{" "}
            <strong className="text-[var(--color-gold-muted)]">R</strong>eliability. Three words that guide
            every measurement we take, every material we specify, and every deadline we commit to.
          </p>
          <p>
            From a 1BHK kitchen remodel to a 6,000 sqft villa — we approach every project with the same level
            of dedication, because to us, every home matters equally.
          </p>
        </div>

        {/* Scroll Reveal Quote */}
        <ScrollRevealWords
          text="Excellence, Nuance, and Reliability guide every measurement, material, and deadline."
          className="mx-auto mt-24 max-w-5xl font-display text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.1] text-[var(--color-obsidian)]"
        />
      </section>

      {/* ─── TEAM ─── */}
      <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">Studio Team</p>
          <h2 className="h1-type mt-4">People who keep promises.</h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group border border-[var(--enr-border)] transition-all duration-300 hover:border-[var(--enr-accent-gold)]/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 flex translate-y-8 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="grid h-9 w-9 place-items-center bg-[var(--color-obsidian)] text-[var(--enr-accent-gold)]">
                      <Instagram size={16} />
                    </span>
                    <span className="grid h-9 w-9 place-items-center bg-[var(--color-obsidian)] text-[var(--enr-accent-gold)]">
                      <Linkedin size={16} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="caption-label mt-2 text-[var(--enr-text-muted)]">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="grid bg-[var(--color-obsidian)] text-[var(--enr-text-primary)] md:grid-cols-3">
        {[
          ["01", "No Surprises", "We quote it, we stick to it. Timeline, budget, and quality — no excuses, no escalations."],
          ["02", "Obsessive Detail", "Our site team checks every corner, every hinge, every finish before you walk in."],
          ["03", "Built to Last", "We don't chase trends. We design spaces that look just as good 10 years from now."]
        ].map(([number, title, text]) => (
          <article
            key={title}
            className="group border-b border-[var(--enr-border)] p-10 transition-all duration-300 hover:bg-[var(--color-charcoal)] md:border-r lg:p-16"
          >
            <p className="font-display text-7xl text-[var(--enr-accent-gold)]/30 transition-colors group-hover:text-[var(--enr-accent-gold)]/60">
              {number}
            </p>
            <h2 className="mt-8 font-display text-4xl">{title}</h2>
            <p className="mt-6 leading-7 text-[var(--enr-text-muted)]">{text}</p>
          </article>
        ))}
      </section>

      {/* ─── RECOGNITION MARQUEE ─── */}
      <section className="bg-[var(--color-obsidian)] px-5 py-8 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden border-y border-[var(--enr-border)] py-6">
            <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-12 text-sm uppercase tracking-[0.18em] text-[var(--enr-text-muted)]">
              {[
                "Featured in Architectural Digest India",
                "Houzz Verified Pro",
                "99acres Design Partner",
                "CIDC Skill Certified",
                "Google Reviews: 4.9★ (180+ reviews)",
                "Featured in Architectural Digest India",
                "Houzz Verified Pro"
              ].map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-12">
                  {item}
                  <span className="h-1.5 w-1.5 rotate-45 bg-[var(--enr-accent-gold)]" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-28 text-center text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,.05),transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="h1-type mx-auto max-w-4xl tracking-tighter">Let&apos;s create something extraordinary.</h2>
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
