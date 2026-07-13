"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ¡NUEVO: Importamos usePathname!
import { Menu, X, ChevronDown, UtensilsCrossed, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteMenuOpen, setIsQuoteMenuOpen] = useState(false);
  const quoteMenuRef = useRef<HTMLDivElement>(null);

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

  // Cierra el submenú "Cotizador" al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (quoteMenuRef.current && !quoteMenuRef.current.contains(event.target as Node)) {
        setIsQuoteMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // navLinks se divide en "antes" y "después" del dropdown de Cotizador
  // para mantener el orden lógico: Paquetes -> Banquetes -> Cotizador -> Galería -> Contacto
  const navLinksBefore = [
    { href: "/#paquetes", label: "Paquetes" },
    { href: "/banquetes", label: "Banquetes" },
  ];
  const navLinksAfter = [
    { href: "/#galeria", label: "Galería" },
    { href: "/#preguntas-frecuentes", label: "Preguntas Frecuentes" },
    { href: "/#contacto", label: "Contacto" },
  ];

  // Los dos caminos de cotización que ofrece el negocio, explicados
  // por separado para que el usuario elija el que corresponde a su caso.
  const quoteOptions = [
    {
      href: "/banquetes#cotizador-banquete",
      icon: UtensilsCrossed,
      label: "Todo Incluido",
      description: "Banquete + salón + mobiliario",
    },
    {
      href: "/renta-salon",
      icon: Home,
      label: "Solo Renta del Salón",
      description: "Tú pones el banquete, nosotros el espacio",
    },
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
            {navLinksBefore.map((link) => (
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

            {/* Dropdown "Cotizador": separa los dos productos (Todo Incluido vs Solo Renta)
                para que el usuario no confunda cuál cotizador le corresponde */}
            <div className="relative" ref={quoteMenuRef}>
              <button
                type="button"
                onClick={() => setIsQuoteMenuOpen((open) => !open)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#D35400] ${
                  isSolid ? "text-[#2D3748]" : "text-white/90"
                }`}
                aria-expanded={isQuoteMenuOpen}
                aria-haspopup="true"
              >
                Cotizador
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isQuoteMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isQuoteMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 z-[110]">
                  {quoteOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      onClick={() => setIsQuoteMenuOpen(false)}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-[#FAF9F6] transition-colors"
                    >
                      <option.icon className="w-5 h-5 text-[#D35400] shrink-0 mt-0.5" />
                      <span>
                        <span className="block text-sm font-bold text-[#2D3748]">
                          {option.label}
                        </span>
                        <span className="block text-xs text-gray-500">
                          {option.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinksAfter.map((link) => (
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
                onClick={() => trackWhatsAppClick("Header Desktop", waLink)}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Escríbenos</span>
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
          {navLinksBefore.map((link) => (
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

          {/* En mobile no usamos dropdown: mostramos las dos opciones de
              cotizador directamente, agrupadas visualmente bajo un mismo bloque */}
          <div className="py-3 border-b border-gray-100">
            <span className="block text-[#2D3748]/50 font-sans text-xs font-bold uppercase tracking-widest mb-3">
              Cotizador
            </span>
            <div className="flex flex-col gap-4">
              {quoteOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 group"
                >
                  <option.icon className="w-5 h-5 text-[#D35400] shrink-0" />
                  <span>
                    <span className="block text-[#2D3748] font-serif text-xl leading-tight">
                      {option.label}
                    </span>
                    <span className="block text-gray-500 text-xs">
                      {option.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {navLinksAfter.map((link) => (
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
              onClick={() => trackWhatsAppClick("Header Mobile", waLink)}
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
