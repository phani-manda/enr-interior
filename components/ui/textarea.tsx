import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-36 w-full resize-none rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-charcoal outline-none transition focus:border-gold",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
