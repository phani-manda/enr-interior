"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[90] bg-obsidian/70 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn("fixed inset-0 z-[91] bg-ivory text-charcoal", className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center border border-charcoal/20 text-charcoal transition hover:border-gold hover:text-gold">
          <X size={18} />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
