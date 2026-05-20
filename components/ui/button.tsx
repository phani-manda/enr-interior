import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-none border transition-all duration-300 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
          size === "sm" && "h-9 px-4 text-xs uppercase tracking-[0.08em]",
          size === "md" && "h-11 px-6 text-sm uppercase tracking-[0.08em]",
          size === "lg" && "h-13 px-8 text-sm uppercase tracking-[0.08em]",
          variant === "gold" && "border-gold bg-gold text-obsidian hover:bg-transparent hover:text-gold",
          variant === "outline" && "border-gold bg-transparent text-current hover:bg-gold hover:text-obsidian",
          variant === "ghost" && "border-transparent bg-transparent text-current hover:border-gold",
          variant === "dark" && "border-charcoal bg-charcoal text-ivory hover:border-gold hover:bg-gold hover:text-obsidian",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
