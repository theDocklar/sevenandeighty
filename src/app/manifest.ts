import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seven & Eighty · 7°N 80°E",
    short_name: "7°N 80°E",
    description:
      "Social media & video agency in Sri Lanka. Reels, ads, FPV drone cinematography, and commercial films for hotels, restaurants, and brands in Colombo, Negombo, and Galle.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#111317",
    icons: [
      {
        src: "/brand/seven-and-eighty-icon-black-transparent.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
