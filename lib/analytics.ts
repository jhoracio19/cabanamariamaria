import { track } from "@vercel/analytics/react";

const GA_MEASUREMENT_ID = "G-4TZD8TCTJ7";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(ubicacion: string, href: string) {
  track("Clic_Ir_a_WhatsApp", { ubicacion });

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "click_whatsapp", {
    send_to: GA_MEASUREMENT_ID,
    event_category: "engagement",
    event_label: ubicacion,
    button_location: ubicacion,
    link_url: href,
  });
}
