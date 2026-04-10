import Image from "next/image";
import { CalendarCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const waLink =
    "https://wa.me/522462132732?text=Hola,%20quiero%20agendar%20mi%20fecha%20para%20mi%20evento%20en%20Cabaña%20María%20María";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND OPTIMIZADO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg" // Asegúrate que el nombre coincida
          alt="Interior del salón Cabaña María María decorado para evento"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay con degradado para legibilidad premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#2D3748]/80" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 container mx-auto px-4 text-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge de Disponibilidad */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-[#D35400] rounded-full animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-semibold tracking-widest uppercase">
              Agenda Abierta 2026 / 2027
            </span>
          </div>

          {/* H1 Principal - Oro para el SEO */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6 text-balance drop-shadow-xl">
            Tu Evento Soñado en <span className="text-[#D35400]">Tlaxcala</span>
          </h1>

          <p className="font-serif text-xl md:text-3xl text-white/90 mb-4 tracking-wide">
            Salón y Jardín Cabaña María María
          </p>

          {/* Subtítulo persuasivo */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty font-sans">
            ¿Quieres disfrutar de tu fiesta como un invitado más sin preocuparte
            por nada?
            <span className="text-[#D35400] font-bold">
              {" "}
              Nosotros nos encargamos de TODO.
            </span>
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#D35400] hover:bg-[#a84300] text-white text-lg px-10 py-7 rounded-full shadow-2xl shadow-orange-900/40 gap-3 w-full sm:w-auto transition-transform hover:scale-105"
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-6 h-6" />
                <span className="font-bold">Agendar mi Fecha</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#2D3748] text-lg px-10 py-7 rounded-full backdrop-blur-sm w-full sm:w-auto transition-all"
            >
              <a href="#paquetes">
                <span className="font-semibold">Ver Paquetes</span>
              </a>
            </Button>
          </div>

          {/* Trust indicators - Números que venden */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-14 text-white/80">
            <div className="flex flex-col items-center">
              <span className="text-[#D35400] font-serif text-3xl md:text-4xl font-bold">
                100+
              </span>
              <span className="text-xs md:text-sm uppercase tracking-tighter">
                Eventos realizados
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#D35400] font-serif text-3xl md:text-4xl font-bold">
                5+
              </span>
              <span className="text-xs md:text-sm uppercase tracking-tighter">
                Años de experiencia
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#D35400] font-serif text-3xl md:text-4xl font-bold">
                98%
              </span>
              <span className="text-xs md:text-sm uppercase tracking-tighter">
                Clientes felices
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#beneficios" aria-label="Bajar a beneficios">
          <ChevronDown className="w-10 h-10 text-white/40 hover:text-[#D35400] transition-colors" />
        </a>
      </div>
    </section>
  );
}
