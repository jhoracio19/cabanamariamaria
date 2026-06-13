"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ¡NUEVO: Importamos usePathname!
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@vercel/analytics/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Obtenemos la ruta actual para saber en qué página estamos
  const pathname = usePathname(); 
  const isHomePage = pathname === "/"; // Verificamos si estamos en el inicio

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const navLinks = [
    { href: "/#paquetes", label: "Paquetes" },
    { href: "/banquetes", label: "Banquetes" }, // Responde a "Todo incluido qué?"
    { href: "/renta-salon", label: "Cotizar Renta" }, // Responde a "Cotizador de qué?"
    { href: "/#galeria", label: "Galería" },
    { href: "/#contacto", label: "Contacto" },
  ];

  const waLink =
    "https://wa.me/522462132732?text=Hola,%20me%20interesa%20cotizar%20un%20evento%20en%20Cabaña%20María%20María";

  // LA MAGIA: Si no es la página de inicio (!isHomePage), el header SIEMPRE será sólido
  const isSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isSolid
          ? "bg-[#FAF9F6] shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-[110]">
            <span
              className={`font-serif text-xl md:text-2xl font-bold transition-colors ${
                isSolid ? "text-[#5C4033]" : "text-white drop-shadow-md"
              }`}
            >
              Cabaña María María
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#D35400] ${
                  isSolid ? "text-[#2D3748]" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-[110]">
            <Button
              asChild
              className={`hidden sm:flex gap-2 shadow-lg transition-all ${
                isSolid
                  ? "bg-[#D35400] hover:bg-[#a84300] text-white"
                  : "bg-white text-[#D35400] hover:bg-gray-100"
              }`}
            >
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => track('Clic_Ir_a_WhatsApp', { ubicacion: 'Header Desktop' })}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors focus:outline-none ${
                isSolid ? "text-[#2D3748]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[64px] md:top-[80px] bg-[#FAF9F6] z-[90] md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container mx-auto px-6 py-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#2D3748] font-serif text-2xl py-3 border-b border-gray-100 flex items-center justify-between group"
            >
              {link.label}
              <span className="text-[#D35400] opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </Link>
          ))}
          <Button
            asChild
            className="mt-6 bg-[#D35400] hover:bg-[#a84300] text-white gap-3 w-full h-14 text-lg font-bold shadow-xl"
          >
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => track('Clic_Ir_a_WhatsApp', { ubicacion: 'Header Mobile' })}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}