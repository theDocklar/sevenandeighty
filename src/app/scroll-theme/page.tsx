import React from "react";
import type { Metadata } from "next";
import { Providers } from "@/components/motion/Providers";
import { ScrollThemeDemo } from "@/components/theme/ScrollThemeDemo";

export const metadata: Metadata = {
  title: "Light & Dark · Scroll Theme",
  description:
    "A scroll-driven showcase where Seven & Eighty's palette shifts between light and dark as each section enters the viewport.",
  alternates: { canonical: "/scroll-theme" },
};

export default function ScrollThemePage() {
  return (
    <Providers>
      <ScrollThemeDemo />
    </Providers>
  );
}
