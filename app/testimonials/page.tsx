import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Client Stories",
    description: "Real stories from real homeowners. See why Hyderabad's most discerning families trust ENR Interiors with their homes.",
    alternates: { canonical: "/testimonials" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"] }
  };
}

const stories = [
  {
    quote: "ENR completely transformed our Jubilee Hills home. The kitchen alone gets more compliments than anything else in the house. Every detail was exactly as promised.",
    client: "Priya R.",
    location: "Jubilee Hills, Hyderabad",
    projectType: "Full Home Interior",
    area: "3,200 sq.ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
  },
  {
    quote: "Professional, punctual, and the 3D designs they shared were exactly what we got in real life. No surprises, no excuses. This is how interior design should work.",
    client: "Arun & Sunita K.",
    location: "Gachibowli, Hyderabad",
    projectType: "Villa Interior",
    area: "5,100 sq.ft",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
  },
  {
    quote: "We gave ENR full creative freedom for our office. Best decision we made — clients comment on the space before the meeting even starts. It completely elevated our brand.",
    client: "Siddharth M.",
    location: "HITEC City, Hyderabad",
    projectType: "Office Fit-out",
    area: "4,500 sq.ft",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
  },
  {
    quote: "Our L-shaped kitchen is a dream. ENR understood exactly how we cook — the wet zone, dry zone, storage — everything is precisely where it should be.",
    client: "Rekha & Varun S.",
    location: "Banjara Hills, Hyderabad",
    projectType: "Modular Kitchen",
    area: "210 sq.ft",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85"
  },
  {
    quote: "Moving from a 2BHK to a 3BHK, we needed every inch optimized. ENR delivered wardrobes, a study, kids room, and a stunning living wall — all within budget.",
    client: "Meera & Karthik D.",
    location: "Kondapur, Hyderabad",
    projectType: "3BHK Transformation",
    area: "1,800 sq.ft",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
  },
  {
    quote: "The penthouse needed to feel grand but liveable. ENR nailed it — dark kitchen cabinetry, panoramic living zones, and lighting that makes evenings magical.",
    client: "Vikram & Anjali P.",
    location: "Kokapet, Hyderabad",
    projectType: "Penthouse Interior",
    area: "4,200 sq.ft",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-20 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(201,168,76,.05),transparent_50%)]" />
        <div className="absolute right-12 top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            Client Stories
          </p>
          <h1 className="display-type mt-6 max-w-5xl">Trust Built Through<br /><span className="text-[var(--enr-accent-gold)]">Delivery.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Real stories from real homeowners. See why Hyderabad&apos;s most discerning families trust ENR Interiors with their homes.
          </p>
          <div className="mt-10 flex gap-8">
            <div>
              <span className="font-display text-4xl text-[var(--enr-accent-gold)]">4.9★</span>
              <span className="caption-label ml-2 text-[var(--enr-text-muted)]">Google Rating</span>
            </div>
            <div>
              <span className="font-display text-4xl text-[var(--enr-text-primary)]">180+</span>
              <span className="caption-label ml-2 text-[var(--enr-text-muted)]">Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section className="bg-[var(--color-obsidian)] text-[var(--enr-text-primary)]">
        {stories.map((story, index) => (
          <article
            key={story.client}
            className="grid border-b border-[var(--enr-border)] md:grid-cols-2"
          >
            {/* Image */}
            <div className={`relative h-[400px] overflow-hidden md:h-auto md:min-h-[560px] ${index % 2 ? "md:order-2" : ""}`}>
              <Image
                src={story.image}
                alt={`${story.client}'s interior by ENR`}
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className={`flex items-center p-8 lg:p-20 ${index % 2 ? "md:order-1" : ""}`}>
              <div>
                <p className="font-display text-8xl leading-none text-[var(--enr-accent-gold)]/30">&ldquo;</p>
                <blockquote className="mt-4 font-display text-[clamp(1.5rem,3vw,2.2rem)] italic leading-snug">
                  {story.quote}
                </blockquote>

                <div className="mt-10 border-t border-[var(--enr-border)] pt-6">
                  <p className="text-lg font-medium">{story.client}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">
                    <span>{story.location}</span>
                    <span className="text-[var(--enr-accent-gold)]">·</span>
                    <span>{story.projectType}</span>
                    <span className="text-[var(--enr-accent-gold)]">·</span>
                    <span>{story.area}</span>
                  </div>
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
          <h2 className="h1-type mx-auto max-w-4xl tracking-tighter">Your story could be next.</h2>
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
