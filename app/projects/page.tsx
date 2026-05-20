import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";
import ParallaxImage from "@/components/sections/ParallaxImage";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export function generateMetadata(): Metadata {
  return {
    title: "Our Work",
    description: "Explore ENR Interiors projects across Hyderabad — luxury homes, modular kitchens, offices, and hospitality spaces transformed with precision and elegance.",
    alternates: { canonical: "/projects" },
    openGraph: { images: [projects[0].images[0]] }
  };
}

export default function ProjectsPage() {
  return (
    <>
      {/* ─── IMMERSIVE HERO ─── */}
      <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 pb-24 pt-44 text-[var(--enr-text-primary)] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(201,168,76,.06),transparent_50%)]" />
        <div className="absolute right-10 top-1/3 h-48 w-px bg-gradient-to-b from-transparent via-[var(--enr-accent-gold)]/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">
            <span className="mr-3 inline-block h-px w-8 bg-[var(--enr-accent-gold)] align-middle" />
            52 completed projects · Hyderabad, Mumbai, Bengaluru
          </p>
          <h1 className="display-type mt-6 max-w-5xl">Our Work Speaks<br />for Itself</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--enr-text-muted)]">
            Each project is a story of trust, precision, and craft — delivered on time, on budget, and beyond expectation.
          </p>
        </div>
      </section>

      {/* ─── PROJECT CASE STUDIES ─── */}
      <section className="bg-[var(--color-obsidian)] text-[var(--enr-text-primary)]">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className="grid border-b border-[var(--enr-border)] md:min-h-[720px] md:grid-cols-2"
          >
            {/* Image */}
            <div
              className={index % 2 ? "order-2 md:order-2" : "order-2 md:order-1"}
              data-cursor-label="See Project"
            >
              <ParallaxImage
                src={project.images[0]}
                alt={project.name}
                className="h-[400px] sm:h-[500px] md:h-full"
                speed={0.2}
              />
            </div>

            {/* Content */}
            <div className={`flex items-center p-8 py-14 lg:p-20 ${index % 2 ? "order-1" : "order-1 md:order-2"}`}>
              <div className="w-full">
                {/* Project Number */}
                <p className="font-display text-[80px] leading-none text-[var(--enr-accent-gold)]/20 md:text-[110px]">
                  {project.number}
                </p>

                {/* Title */}
                <h2 className="h2-type mt-2">{project.name}</h2>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-[var(--enr-text-muted)]">
                  <span>{project.location}</span>
                  <span className="text-[var(--enr-accent-gold)]">·</span>
                  <span>{project.year}</span>
                  <span className="text-[var(--enr-accent-gold)]">·</span>
                  <span>{project.area}</span>
                  <span className="text-[var(--enr-accent-gold)]">·</span>
                  <span>{project.duration}</span>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--enr-border)] px-3 py-1 text-xs uppercase tracking-[0.08em] transition-colors hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-7 max-w-lg leading-7 text-[var(--enr-text-muted)]">{project.description}</p>

                {/* Testimonial */}
                {project.testimonial && (
                  <blockquote className="mt-8 border-l-2 border-[var(--enr-accent-gold)]/40 pl-5">
                    <p className="text-sm italic leading-6 text-[var(--enr-text-muted)]">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <cite className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-[var(--enr-accent-gold)]">
                      — {project.testimonial.client}
                    </cite>
                  </blockquote>
                )}

                {/* Link */}
                <Link
                  href={`/projects#${project.id}`}
                  className="gold-underline mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em]"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <BeforeAfterSlider />

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[var(--color-obsidian)] px-5 py-28 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-[var(--enr-accent-gold)]">Client Testimonials</p>
          <h2 className="h2-type mt-4 mb-12">Trust built through delivery.</h2>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="group border border-[var(--enr-border)] p-8 transition-all duration-300 hover:border-[var(--enr-accent-gold)]/40 hover:bg-[var(--color-charcoal)]"
              >
                <p className="font-display text-7xl leading-none text-[var(--enr-accent-gold)]/40">&ldquo;</p>
                <p className="mt-4 font-display text-xl italic leading-snug">{testimonial.quote}</p>
                <div className="mt-8 border-t border-[var(--enr-border)] pt-5">
                  <p className="caption-label text-[var(--enr-accent-gold)]">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-[var(--enr-text-muted)]">{testimonial.projectType}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
