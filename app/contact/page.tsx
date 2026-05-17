import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title: "Contact",
    description: "Book a consultation with LUMINE Studio for residential, commercial, and hospitality interior design.",
    alternates: { canonical: "/contact" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LUMINE Studio",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    address: { "@type": "PostalAddress", streetAddress: "Road No. 12, Banjara Hills", addressLocality: "Hyderabad", addressCountry: "IN" },
    telephone: "+91 90000 12012",
    email: "hello@luminestudio.demo"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-ivory px-5 pb-16 pt-40 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="h1-type">Let&apos;s Build Something Together</h1>
          <p className="mt-5 text-xl text-mist">Start with a conversation.</p>
        </div>
      </section>
      <section className="bg-sand px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </section>
      <section className="grid bg-ivory md:grid-cols-3">
        {[
          [MapPin, "Visit Us", "Road No. 12, Banjara Hills, Hyderabad"],
          [Phone, "Call Us", "+91 90000 12012"],
          [Mail, "Email Us", "hello@luminestudio.demo"]
        ].map(([Icon, title, value]) => (
          <article key={title as string} className="group border-b border-charcoal/10 p-8 md:border-r lg:p-12">
            {typeof Icon !== "string" && <Icon className="text-gold" size={24} />}
            <h2 className="mt-8 font-display text-4xl">{title as string}</h2>
            <p className="gold-underline mt-4 inline-block text-mist">{value as string}</p>
          </article>
        ))}
      </section>
      <section className="relative h-[520px] bg-charcoal">
        <iframe
          title="LUMINE Studio map"
          src="https://www.google.com/maps?q=Banjara%20Hills%20Hyderabad&output=embed"
          className="h-full w-full grayscale"
          loading="lazy"
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-obsidian">
          <MapPin size={22} />
        </div>
      </section>
    </>
  );
}
