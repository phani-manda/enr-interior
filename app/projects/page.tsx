import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";
import ParallaxImage from "@/components/sections/ParallaxImage";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export function generateMetadata(): Metadata {
  return {
    title: "Our Work",
    description: "Explore ENR Interiors projects across Hyderabad homes, modular kitchens, offices, and hospitality spaces.",
    alternates: { canonical: "/projects" },
    openGraph: { images: [projects[0].images[0]] }
  };
}

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-enr-obsidian px-5 pb-24 pt-44 text-enr-ivory lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="caption-label text-enr-gold">52 completed projects / Hyderabad, Mumbai, Bengaluru</p>
          <h1 className="display-type mt-5">Our Work Speaks for Itself</h1>
        </div>
      </section>
      <section className="bg-[var(--enr-bg-primary)] text-[var(--enr-text-primary)]">
        {projects.map((project, index) => (
          <article key={project.id} className="grid border-b border-enr-obsidian/10 md:min-h-[720px] md:grid-cols-2">
            <div className={index % 2 ? "order-2 md:order-2" : "order-2 md:order-1"} data-cursor-label="See Project">
              <ParallaxImage src={project.images[0]} alt={project.name} className="h-[360px] sm:h-[460px] md:h-full" speed={0.2} />
            </div>
            <div className={`flex items-center p-6 py-12 sm:p-8 lg:p-20 ${index % 2 ? "order-1" : "order-1 md:order-2"}`}>
              <div>
                <p className="font-display text-[84px] leading-none text-enr-gold-muted/45 md:text-[120px]">{project.number}</p>
                <h2 className="h2-type">{project.name}</h2>
                <p className="caption-label mt-4 text-[var(--enr-text-muted)]">{project.location} / {project.year} / {project.area} / {project.duration}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="border border-[var(--enr-border)] px-3 py-1 text-xs uppercase tracking-[0.08em]">{tag}</span>)}
                </div>
                <p className="mt-7 max-w-lg text-[var(--enr-text-muted)]">{project.description}</p>
                <a href={`/projects#${project.id}`} className="gold-underline mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em]">View Case Study <ArrowRight size={16} /></a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <BeforeAfterSlider />
      <section className="bg-[var(--enr-bg-primary)] px-5 py-24 text-[var(--enr-text-primary)] lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-[var(--enr-border)] p-8">
              <p className="font-display text-8xl leading-none text-enr-gold">&ldquo;</p>
              <p className="font-display text-2xl italic leading-snug">{testimonial.quote}</p>
              <p className="caption-label mt-8 text-[var(--enr-text-muted)]">{testimonial.name} / {testimonial.projectType}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
