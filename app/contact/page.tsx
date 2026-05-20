import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

const address = "7-949, Adarsh Nagar, Jyoti Nagar Colony, Bajarang Nagar Colony, Balaji Nagar, Hyderabad, Secunderabad, Telangana 500087, India";

export function generateMetadata(): Metadata {
  return {
    title: "Book Free Site Visit",
    description: "Book a free ENR Interiors site visit in Hyderabad. Get expert consultation for modular kitchens, wardrobes, false ceilings, lighting, and premium interiors.",
    alternates: { canonical: "/contact" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"] }
  };
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ENR Interiors",
    image: "https://enrinteriors.com/logo/enr-logo.png",
    address: { "@type": "PostalAddress", streetAddress: address, addressLocality: "Hyderabad", postalCode: "500087", addressCountry: "IN" },
    telephone: "+91 98765 43210",
    email: "hello@enrinteriors.com"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-20 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,168,76,.05),transparent_50%)]" />
        <div className="absolute left-10 top-1/3 h-32 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1fr_640px]">
          <div>
            <p className="caption-label text-[var(--enr-accent-gold)]">
              <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
              Book Free Site Visit
            </p>
            <h1 className="h1-type mt-6 tracking-tighter">
              Let&apos;s design what<br />your space becomes.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--enr-text-muted)]">
              Share a few details. ENR will call within 24 hours and schedule a free site visit — no commitments, no pressure.
            </p>

            {/* CTA Hierarchy */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#22C55E]"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
              <Link
                href="/kitchens"
                className="inline-flex items-center justify-center gap-2 border border-[var(--enr-border)] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
              >
                Get Kitchen Quote
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 grid gap-6 border-t border-[var(--enr-border)] pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center border border-[var(--enr-accent-gold)]/30 text-[var(--enr-accent-gold)]">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="caption-label text-[var(--enr-accent-gold)]">24hr Response</p>
                  <p className="mt-1 text-sm text-[var(--enr-text-muted)]">We call back within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center border border-[var(--enr-accent-gold)]/30 text-[var(--enr-accent-gold)]">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="caption-label text-[var(--enr-accent-gold)]">Free Visit</p>
                  <p className="mt-1 text-sm text-[var(--enr-text-muted)]">Completely free, no obligations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* ─── CONTACT INFO GRID ─── */}
      <section className="grid bg-[var(--color-obsidian)] text-[var(--enr-text-primary)] md:grid-cols-4">
        {[
          { Icon: MapPin, title: "Studio", value: address },
          { Icon: Phone, title: "Phone", value: "+91 98765 43210" },
          { Icon: Mail, title: "Email", value: "hello@enrinteriors.com" },
          { Icon: MessageCircle, title: "Hours", value: "Mon-Sat, 9:30 AM - 7:00 PM" }
        ].map(({ Icon, title, value }) => (
          <article
            key={title}
            className="group border-t border-[var(--enr-border)] p-8 transition-all duration-300 hover:bg-[var(--color-charcoal)] md:border-r lg:p-12"
          >
            <div className="grid h-10 w-10 place-items-center border border-[var(--enr-accent-gold)]/30 text-[var(--enr-accent-gold)] transition-colors group-hover:border-[var(--enr-accent-gold)] group-hover:bg-[var(--enr-accent-gold)] group-hover:text-[var(--color-obsidian)]">
              <Icon size={18} />
            </div>
            <h2 className="mt-6 font-display text-3xl">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--enr-text-muted)]">{value}</p>
          </article>
        ))}
      </section>
    </>
  );
}
