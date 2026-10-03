import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sevenandeighty.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot"],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
