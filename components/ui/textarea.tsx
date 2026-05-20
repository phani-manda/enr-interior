import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-36 w-full resize-none rounded-none border-0 border-b border-[var(--enr-border)] bg-transparent px-0 py-3 text-sm text-[var(--enr-text-primary)] outline-none transition placeholder:text-[var(--enr-text-muted)] focus:border-[var(--enr-accent-gold)]",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
