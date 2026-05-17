import type { Metadata } from "next";
import Image from "next/image";
import InspirationExperience from "@/components/sections/InspirationExperience";
import ParallaxImage from "@/components/sections/ParallaxImage";
import { blurDataURL } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Inspiration",
    description: "Explore LUMINE Studio's mood boards, material palettes, and interior design atmospheres.",
    alternates: { canonical: "/inspiration" },
    openGraph: { images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"] }
  };
}

export default function InspirationPage() {
  return (
    <>
      <section className="bg-ivory px-5 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-mist">INSPIRATION</p>
          <h1 className="h1-type mt-4">The Art of Atmosphere</h1>
          <svg className="mt-8 h-2 w-72" viewBox="0 0 300 8" aria-hidden>
            <path d="M0 4 H300" stroke="#B89A6A" strokeWidth="1" strokeDasharray="300" strokeDashoffset="0" />
          </svg>
        </div>
      </section>
      <InspirationExperience />
      <section className="grid bg-sand md:grid-cols-2">
        <ParallaxImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85" alt="LUMINE designer portrait" className="min-h-[620px]" />
        <div className="flex items-center p-8 lg:p-20">
          <div>
            <p className="caption-label text-mist">Designer’s Note</p>
            <blockquote className="mt-6 font-display text-5xl italic leading-tight">Atmosphere is not decoration. It is the discipline of making every surface, shadow, and pause carry intention.</blockquote>
            <div className="mt-8 flex items-center gap-4">
              <Image src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=200&q=85" alt="Signature portrait" width={64} height={64} placeholder="blur" blurDataURL={blurDataURL} className="rounded-full object-cover" />
              <p className="caption-label text-mist">Mira Anand · Creative Director</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
