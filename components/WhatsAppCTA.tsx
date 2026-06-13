"use client";

import { track } from "@vercel/analytics/react";

interface WhatsAppCTAProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  ubicacion: string;
}

export function WhatsAppCTA({ href, className, children, ubicacion }: WhatsAppCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('Clic_Ir_a_WhatsApp', { ubicacion })}
      className={className}
    >
      {children}
    </a>
  );
}
