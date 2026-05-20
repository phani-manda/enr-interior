import type { Metadata } from "next";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { ScrollRevealWords } from "@/components/sections/AnimatedWords";
import { team } from "@/data/team";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "About ENR",
    description: "Meet ENR Interiors, a Hyderabad interior design studio built on trust, detail, and durable execution.",
    alternates: { canonical: "/about" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-enr-obsidian text-enr-ivory">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=85"
          alt="ENR Interiors design team"
          fill
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-enr-obsidian via-enr-obsidian/45 to-enr-obsidian/20" />
        <div className="relative z-10 flex min-h-screen items-end px-5 pb-20 lg:px-10">
          <h1 className="display-type max-w-5xl">Born in Hyderabad. Built on Trust.</h1>
        </div>
      </section>
      <section className="bg-[var(--enr-bg-primary)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8 text-xl leading-9 text-[var(--enr-text-muted)]">
          <p>ENR Interiors was founded with one belief: that premium interiors shouldn&apos;t be a privilege reserved for the ultra-wealthy. Over 11 years, we&apos;ve brought world-class design thinking to homes and offices across Hyderabad - and increasingly, across India.</p>
          <p>Our name - ENR - stands for everything we put into our work: Excellence, Nuance, and Reliability. Three words that guide every measurement we take, every material we specify, and every deadline we commit to.</p>
          <p>From a 1BHK kitchen remodel to a 6,000 sqft villa - we approach every project with the same level of dedication, because to us, every home matters equally.</p>
        </div>
        <ScrollRevealWords
          text="Excellence, Nuance, and Reliability guide every measurement, material, and deadline."
          className="mx-auto mt-20 max-w-6xl font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.08]"
        />
      </section>
      <section className="bg-[var(--enr-bg-primary)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-enr-mist">Studio Team</p>
          <h2 className="h1-type mt-3">People who keep promises.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group border border-[var(--enr-border)]">
                <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--enr-border)] transition group-hover:border-[var(--enr-accent-gold)]">
                  <Image src={member.image} alt={member.name} fill placeholder="blur" blurDataURL={blurDataURL} className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute bottom-4 left-4 flex translate-y-8 gap-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="grid h-9 w-9 place-items-center bg-enr-obsidian text-enr-gold"><Instagram size={16} /></span>
                    <span className="grid h-9 w-9 place-items-center bg-enr-obsidian text-enr-gold"><Linkedin size={16} /></span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="caption-label mt-1 text-[var(--enr-text-muted)]">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="grid bg-enr-obsidian text-enr-ivory md:grid-cols-3">
        {[
          ["01", "No Surprises", "We quote it, we stick to it. Timeline, budget, and quality - no excuses, no escalations."],
          ["02", "Obsessive Detail", "Our site team checks every corner, every hinge, every finish before you walk in."],
          ["03", "Built to Last", "We don't chase trends. We design spaces that look just as good 10 years from now."]
        ].map(([number, title, text]) => (
          <article key={title} className="border-b border-enr-gold-muted/20 p-8 md:border-r lg:p-14">
            <p className="font-display text-8xl text-enr-gold/60">{number}</p>
            <h2 className="mt-8 font-display text-5xl">{title}</h2>
            <p className="mt-6 text-enr-parchment/70">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[var(--enr-bg-primary)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden border-y border-enr-obsidian/10 py-8">
            <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-16 text-xl uppercase tracking-[0.18em] text-[var(--enr-text-muted)]">
              {["Featured in Architectural Digest India", "Houzz Verified Pro", "99acres Design Partner", "CIDC Skill Certified", "Google Reviews: 4.9★ (180+ reviews)", "Featured in Architectural Digest India", "Houzz Verified Pro"].map((logo, index) => <span key={`${logo}-${index}`}>{logo}</span>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
