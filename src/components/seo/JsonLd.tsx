import React from "react";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sevenandeighty.com/#website",
        url: "https://sevenandeighty.com",
        name: "Seven & Eighty",
        description:
          "We don't sell posts. We sell the reason people buy. Social media & video agency · Sri Lanka.",
        publisher: {
          "@id": "https://sevenandeighty.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://sevenandeighty.com/#organization",
        name: "Seven & Eighty (7°N 80°E)",
        url: "https://sevenandeighty.com",
        logo: "https://sevenandeighty.com/brand/seven-and-eighty-logo-black.svg",
        image: "https://sevenandeighty.com/og-image-1200x630.png",
        description:
          "High-end social media and commercial video production agency in Sri Lanka specializing in vertical reels, FPV drone cinematography, and brand strategy for hospitality, culinary, fashion, and retail brands in Colombo, Negombo, and Galle.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Negombo",
          addressRegion: "Western Province",
          addressCountry: "LK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 7.2083,
          longitude: 79.8358,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Colombo",
          },
          {
            "@type": "City",
            name: "Negombo",
          },
          {
            "@type": "City",
            name: "Galle",
          },
          {
            "@type": "Country",
            name: "Sri Lanka",
          },
        ],
        telephone: "+94775146688",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+94-77-514-6688",
            contactType: "customer service",
            availableLanguage: ["English", "Sinhala"],
            areaServed: "LK",
          },
          {
            "@type": "ContactPoint",
            telephone: "+94-76-690-1333",
            contactType: "sales",
            availableLanguage: ["English", "Sinhala"],
            areaServed: "LK",
          },
        ],
        sameAs: [
          "https://instagram.com/7n80e",
          "https://sevenandeighty.com",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Video & Social Media Production Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full Social Media Retainer",
                description: "End-to-end content calendar, filming, editing, and daily multi-platform management.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Reels & Short-Form Video Production",
                description: "Cinematic vertical video optimized for Instagram Reels, TikTok, and YouTube Shorts.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "FPV & Drone Cinematography",
                description: "Sub-249g indoor/outdoor precision drone flythroughs with DJI Avata 2 and Neo 2.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospitality & Villa Showcase",
                description: "Architectural and lifestyle cinematic reels for luxury resorts, boutique hotels, and private villas.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial & Brand Films",
                description: "High-bitrate Sony A7 III cinema shoots with custom sound design and Davinci color grading.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
