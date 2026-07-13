"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export default function WhatsAppButton() {
  const phoneNumber = "522462132732";
  const message =
    "¡Hola! Vengo de su sitio web y me gustaría cotizar un evento en la Cabaña María María. ✨";
  // Convertimos el texto a formato URL
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("Botón Flotante", waLink)}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#1ebd5b] transition-all duration-300 animate-bounce cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </Link>
  );
}
