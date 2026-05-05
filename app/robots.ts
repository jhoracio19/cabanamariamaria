import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/invitacion/", // Evitamos que las invitaciones de los clientes salgan en Google
    },
    sitemap: "https://cabanamariamaria.com/sitemap.xml",
  };
}