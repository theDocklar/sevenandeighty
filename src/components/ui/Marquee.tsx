"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden select-none",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 sm:gap-20 min-w-full animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 sm:gap-20 min-w-full animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
