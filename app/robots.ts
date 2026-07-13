import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Páginas privadas de clientes o de administración: no deben salir en Google
      disallow: ["/invitacion/", "/resena/", "/admin/"],
    },
    sitemap: "https://cabanamariamaria.com/sitemap.xml",
  };
}