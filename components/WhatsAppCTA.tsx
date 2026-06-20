"use client";

import { track } from "@vercel/analytics/react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface WhatsAppCTAProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  ubicacion: string;
}

export function WhatsAppCTA({ href, className, children, ubicacion }: WhatsAppCTAProps) {
  const handleClick = () => {
    track("Clic_Ir_a_WhatsApp", { ubicacion });

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click_whatsapp", {
        event_category: "engagement",
        event_label: ubicacion,
        button_location: ubicacion,
        link_url: href,
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
