import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "lagoon" | "dot";
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase tracking-widest transition-colors",
        variant === "default" && "bg-surface-subtle text-ink-muted border border-surface-border",
        variant === "outline" && "border border-surface-border text-ink",
        variant === "lagoon" && "bg-lagoon/10 text-lagoon border border-lagoon/20",
        variant === "dot" && "bg-white text-ink border border-surface-border",
        className
      )}
      {...props}
    >
      {variant === "dot" && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      )}
      {children}
    </span>
  );
}
