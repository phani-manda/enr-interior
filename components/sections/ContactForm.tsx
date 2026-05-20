"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Check, Home, Hotel, RefreshCw, Utensils } from "lucide-react";
import Link from "next/link";
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
  language: z.enum(["English", "Telugu", "Hindi"]),
  projectType: z.enum(["Full Home Interior", "Modular Kitchen Only", "Single Room", "Commercial Space", "Renovation / Remodel"]),
  budget: z.coerce.number().min(3).max(100),
  location: z.string().min(2, "Project location is required."),
  date: z.string().min(1, "Please choose a target date."),
  propertyStatus: z.string().min(1, "Please select property status."),
  rooms: z.array(z.string()).min(1, "Choose at least one room."),
  vision: z.string().min(20, "Share a little more detail.").max(400),
  source: z.string().min(1, "Please select a source.")
});

type FormValues = z.infer<typeof schema>;

const projectTypes = [
  ["Full Home Interior", Home],
  ["Modular Kitchen Only", Utensils],
  ["Single Room", Hotel],
  ["Commercial Space", Building2],
  ["Renovation / Remodel", RefreshCw]
] as const;
const roomOptions = ["Living Room", "Kitchen", "Master Bedroom", "Kids Room", "Dining", "Bathrooms", "All Rooms", "Others"];

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
    defaultValues: { projectType: "Full Home Interior", budget: 25, rooms: [], language: "English" }
  });
  const selectedRooms = watch("rooms") ?? [];
  const projectType = watch("projectType");
  const budget = watch("budget");

  async function next() {
    const fields: (keyof FormValues)[][] = [
      ["fullName", "email", "phone", "language"],
      ["projectType", "budget", "location", "date", "propertyStatus"],
      ["rooms", "vision", "source"]
    ];
    const ok = await trigger(fields[step]);
    if (ok) setStep((current) => Math.min(2, current + 1));
  }

  function onSubmit() {
    setSubmitted(true);
  }

  function toggleRoom(room: string) {
    setValue("rooms", selectedRooms.includes(room) ? selectedRooms.filter((item) => item !== room) : [...selectedRooms, room], { shouldValidate: true });
  }

  if (submitted) {
    return (
      <div className="border border-[var(--enr-border)] bg-[var(--enr-bg-secondary)] p-8 text-center text-[var(--enr-text-primary)]">
        <motion.svg width="96" height="96" viewBox="0 0 96 96" className="mx-auto text-[var(--enr-accent-gold)]">
          <motion.circle cx="48" cy="48" r="42" fill="none" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
          <motion.path d="M29 49 L42 62 L68 35" fill="none" stroke="currentColor" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35 }} />
        </motion.svg>
        <h2 className="h2-type mt-8">Thank you. ENR will call within 24 hours.</h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--enr-text-muted)]">Until then, explore our flagship modular kitchen work.</p>
        <Link href="/kitchens" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[var(--enr-accent-gold)]">Explore Kitchens -&gt;</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border border-[var(--enr-border)] bg-[var(--enr-bg-secondary)] text-[var(--enr-text-primary)]">
      <div className="h-px bg-[var(--enr-border)]">
        <motion.div className="h-full bg-[var(--enr-accent-gold)]" animate={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>
      <div className="p-6 lg:p-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Step key="one">
              <h2 className="h2-type mb-8">About You</h2>
              <Field error={errors.fullName?.message}><Input placeholder="Full name" {...register("fullName")} /></Field>
              <Field error={errors.email?.message}><Input placeholder="Email" type="email" {...register("email")} /></Field>
              <Field error={errors.phone?.message}><Input placeholder="Phone" {...register("phone")} /></Field>
              <Field error={errors.language?.message}>
                <select className="h-14 w-full border-0 border-b border-[var(--enr-border)] bg-transparent px-0 text-sm outline-none focus:border-[var(--enr-accent-gold)]" {...register("language")}>
                  <option>English</option>
                  <option>Telugu</option>
                  <option>Hindi</option>
                </select>
              </Field>
            </Step>
          )}
          {step === 1 && (
            <Step key="two">
              <h2 className="h2-type mb-8">Your Project</h2>
              <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {projectTypes.map(([type, Icon]) => (
                  <button type="button" key={type} onClick={() => setValue("projectType", type)} className={cn("border border-[var(--enr-border)] p-4 text-left transition hover:border-[var(--enr-accent-gold)]", projectType === type && "border-[var(--enr-accent-gold)] bg-[rgba(201,168,76,.08)]")}>
                    <Icon size={20} />
                    <span className="caption-label mt-4 block">{type}</span>
                  </button>
                ))}
              </div>
              <label className="caption-label text-[var(--enr-text-muted)]">Approximate budget: Rs. {budget >= 100 ? "1Cr+" : `${budget}L`}</label>
              <input type="range" min={3} max={100} className="my-5 w-full accent-[var(--enr-accent-gold)]" {...register("budget")} />
              <div className="mb-5 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-[0.12em] text-[var(--enr-text-muted)] md:grid-cols-5">
                {["Rs. 3-10L", "Rs. 10-25L", "Rs. 25-50L", "Rs. 50L-1Cr", "Rs. 1Cr+"].map((label) => <span key={label}>{label}</span>)}
              </div>
              <Field error={errors.location?.message}><Input placeholder="Project location" {...register("location")} /></Field>
              <Field error={errors.date?.message}><Input type="date" {...register("date")} /></Field>
              <Field error={errors.propertyStatus?.message}>
                <select className="h-14 w-full border-0 border-b border-[var(--enr-border)] bg-transparent px-0 text-sm outline-none focus:border-[var(--enr-accent-gold)]" {...register("propertyStatus")}>
                  <option value="">Property Status</option>
                  <option>Under Construction</option>
                  <option>Ready to Move</option>
                  <option>Currently Occupied</option>
                </select>
              </Field>
            </Step>
          )}
          {step === 2 && (
            <Step key="three">
              <h2 className="h2-type mb-8">Your Vision</h2>
              <p className="caption-label mb-3 text-[var(--enr-text-muted)]">Which rooms need interior work?</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {roomOptions.map((room) => (
                  <button key={room} type="button" onClick={() => toggleRoom(room)} className={cn("border border-[var(--enr-border)] px-4 py-2 text-xs uppercase tracking-[0.08em]", selectedRooms.includes(room) && "border-[var(--enr-accent-gold)] bg-[var(--enr-accent-gold)] text-black")}>{room}</button>
                ))}
              </div>
              {errors.rooms?.message && <p className="mb-4 text-sm text-red-500">{errors.rooms.message}</p>}
              <Field error={errors.vision?.message}><Textarea maxLength={400} placeholder="Describe your dream space" {...register("vision")} /></Field>
              <Field error={errors.source?.message}>
                <select className="h-14 w-full border-0 border-b border-[var(--enr-border)] bg-transparent px-0 text-sm outline-none focus:border-[var(--enr-accent-gold)]" {...register("source")}>
                  <option value="">How did you hear about us?</option>
                  <option>Google Search</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Friend/Family Referral</option>
                  <option>Builder/Developer</option>
                  <option>Other</option>
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
    <motion.div initial={{ opacity: 0, x: 42 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -42 }} transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}>
      {children}
    </motion.div>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <div className="mb-5">
      {children}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
