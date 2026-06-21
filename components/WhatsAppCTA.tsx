"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppCTAProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  ubicacion: string;
}

export function WhatsAppCTA({ href, className, children, ubicacion }: WhatsAppCTAProps) {
  const handleClick = () => {
    trackWhatsAppClick(ubicacion, href);
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
