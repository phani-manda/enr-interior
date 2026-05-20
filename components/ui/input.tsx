import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-14 w-full rounded-none border-0 border-b border-[var(--enr-border)] bg-transparent px-0 text-sm text-[var(--enr-text-primary)] outline-none transition placeholder:text-[var(--enr-text-muted)] focus:border-[var(--enr-accent-gold)]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
