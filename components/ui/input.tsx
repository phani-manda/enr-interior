import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 text-sm text-charcoal outline-none transition focus:border-gold",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
