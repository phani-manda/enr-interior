import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

const address = "7-949, Adarsh Nagar, Jyoti Nagar Colony, Bajarang Nagar Colony, Balaji Nagar, Hyderabad, Secunderabad, Telangana 500087, India";

export function generateMetadata(): Metadata {
  return {
    title: "Book Site Visit",
    description: "Book a free ENR Interiors site visit in Hyderabad for modular kitchens, wardrobes, false ceilings, lighting, and premium interiors.",
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
      <section className="bg-[var(--enr-bg-primary)] px-5 pb-16 pt-40 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1fr_640px]">
          <div>
            <p className="caption-label text-[var(--enr-accent-gold)]">Book Site Visit</p>
            <h1 className="h1-type mt-5 tracking-tighter">Let&apos;s design what your space becomes.</h1>
            <p className="mt-8 max-w-xl text-lg text-[var(--enr-text-muted)]">Share a few details. ENR will call within 24 hours and schedule a free site visit.</p>
            <a href="https://wa.me/919876543210" className="mt-10 inline-flex items-center gap-3 border border-[var(--enr-accent-gold)] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--enr-accent-gold)] transition hover:bg-[var(--enr-accent-gold)] hover:text-black">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="grid bg-[var(--enr-bg-primary)] text-[var(--enr-text-primary)] md:grid-cols-4">
        {[
          [MapPin, "Studio", address],
          [Phone, "Phone", "+91 98765 43210"],
          [Mail, "Email", "hello@enrinteriors.com"],
          [MessageCircle, "Hours", "Mon-Sat, 9:30 AM - 7:00 PM"]
        ].map(([Icon, title, value]) => (
          <article key={title as string} className="group border-t border-[var(--enr-border)] p-8 md:border-r lg:p-12">
            {typeof Icon !== "string" && <Icon className="text-[var(--enr-accent-gold)]" size={24} />}
            <h2 className="mt-8 font-display text-4xl">{title as string}</h2>
            <p className="mt-4 text-sm text-[var(--enr-text-muted)]">{value as string}</p>
          </article>
        ))}
      </section>
    </>
  );
}
