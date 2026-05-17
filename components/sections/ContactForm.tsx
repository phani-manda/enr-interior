"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Check, Home, Hotel, Shapes } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a phone number."),
  company: z.string().optional(),
  projectType: z.enum(["Residential", "Commercial", "Hospitality", "Other"]),
  budget: z.coerce.number().min(25).max(500),
  location: z.string().min(2, "Project location is required."),
  date: z.string().min(1, "Please choose a target date."),
  vision: z.string().min(20, "Share a little more detail.").max(400),
  styles: z.array(z.string()).min(1, "Choose at least one style."),
  source: z.string().min(1, "Please select a source.")
});

type FormValues = z.infer<typeof schema>;

const projectTypes = [
  ["Residential", Home],
  ["Commercial", Building2],
  ["Hospitality", Hotel],
  ["Other", Shapes]
] as const;
const styleOptions = ["Minimal", "Luxe", "Japandi", "Industrial", "Coastal", "Rustic"];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: "Residential", budget: 160, styles: [] }
  });
  const selectedStyles = watch("styles") ?? [];
  const projectType = watch("projectType");
  const budget = watch("budget");

  async function next() {
    const fields: (keyof FormValues)[][] = [
      ["fullName", "email", "phone"],
      ["projectType", "budget", "location", "date"],
      ["vision", "styles", "source"]
    ];
    const ok = await trigger(fields[step]);
    if (ok) setStep((current) => Math.min(2, current + 1));
  }

  function onSubmit() {
    setSubmitted(true);
  }

  function toggleStyle(style: string) {
    setValue("styles", selectedStyles.includes(style) ? selectedStyles.filter((item) => item !== style) : [...selectedStyles, style], { shouldValidate: true });
  }

  if (submitted) {
    return (
      <div className="border border-charcoal/10 bg-ivory p-8 text-center">
        <motion.svg width="96" height="96" viewBox="0 0 96 96" className="mx-auto text-gold">
          <motion.circle cx="48" cy="48" r="42" fill="none" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
          <motion.path d="M29 49 L42 62 L68 35" fill="none" stroke="currentColor" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35 }} />
        </motion.svg>
        <h2 className="h2-type mt-8">Conversation requested.</h2>
        <p className="mx-auto mt-4 max-w-md text-mist">Thank you. A LUMINE design lead will review your brief and respond with next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border border-charcoal/10 bg-ivory">
      <div className="h-1 bg-charcoal/10">
        <motion.div className="h-full bg-gold" animate={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>
      <div className="p-6 lg:p-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Step key="one">
              <h2 className="h2-type mb-8">About You</h2>
              <Field error={errors.fullName?.message}><Input placeholder="Full name" {...register("fullName")} /></Field>
              <Field error={errors.email?.message}><Input placeholder="Email" type="email" {...register("email")} /></Field>
              <Field error={errors.phone?.message}><Input placeholder="Phone" {...register("phone")} /></Field>
              <Field><Input placeholder="Company (optional)" {...register("company")} /></Field>
            </Step>
          )}
          {step === 1 && (
            <Step key="two">
              <h2 className="h2-type mb-8">Your Project</h2>
              <div className="mb-5 grid gap-3 sm:grid-cols-4">
                {projectTypes.map(([type, Icon]) => (
                  <button type="button" key={type} onClick={() => setValue("projectType", type)} className={cn("border border-charcoal/15 p-4 text-left transition hover:border-gold", projectType === type && "border-gold bg-sand")}>
                    <Icon size={20} />
                    <span className="caption-label mt-4 block">{type}</span>
                  </button>
                ))}
              </div>
              <label className="caption-label text-mist">Approximate budget: ₹{budget}L</label>
              <input type="range" min={25} max={500} className="my-5 w-full accent-gold" {...register("budget")} />
              <Field error={errors.location?.message}><Input placeholder="Project location" {...register("location")} /></Field>
              <Field error={errors.date?.message}><Input type="date" {...register("date")} /></Field>
            </Step>
          )}
          {step === 2 && (
            <Step key="three">
              <h2 className="h2-type mb-8">Your Vision</h2>
              <Field error={errors.vision?.message}><Textarea maxLength={400} placeholder="Describe your dream space" {...register("vision")} /></Field>
              <div className="mb-5 flex flex-wrap gap-2">
                {styleOptions.map((style) => (
                  <button key={style} type="button" onClick={() => toggleStyle(style)} className={cn("rounded-sm border border-charcoal/15 px-4 py-2 text-xs uppercase tracking-[0.08em]", selectedStyles.includes(style) && "border-gold bg-gold text-obsidian")}>{style}</button>
                ))}
              </div>
              {errors.styles?.message && <p className="mb-4 text-sm text-red-700">{errors.styles.message}</p>}
              <Field error={errors.source?.message}>
                <select className="h-12 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 text-sm outline-none focus:border-gold" {...register("source")}>
                  <option value="">How did you hear about us?</option>
                  <option>Instagram</option>
                  <option>Architect referral</option>
                  <option>Press</option>
                  <option>Past client</option>
                </select>
              </Field>
            </Step>
          )}
        </AnimatePresence>
        <div className="mt-8 flex justify-between">
          <Button type="button" variant="outline" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}>Back</Button>
          {step < 2 ? <Button type="button" onClick={next}>Next</Button> : <Button type="submit"><Check size={16} /> Submit</Button>}
        </div>
      </div>
    </form>
  );
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, x: 42 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -42 }} transition={{ type: "spring", stiffness: 140, damping: 22 }}>
      {children}
    </motion.div>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <div className="mb-5">
      {children}
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}
