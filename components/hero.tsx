import { CalendarCheck, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Reservaciones abiertas 2025</span>
          </div>

          {/* H1 Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            Tu Evento Soñado en Tlaxcala
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-serif mb-4">
            Salón y Jardín Cabaña María María
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            ¿Quieres disfrutar de tu fiesta como un invitado más sin preocuparte por nada? 
            <span className="text-primary font-semibold"> Nosotros nos encargamos de TODO.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl shadow-primary/30 gap-2 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/522462132732?text=Hola,%20quiero%20agendar%20mi%20fecha%20para%20mi%20evento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Agendar mi Fecha</span>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white text-lg px-8 py-6 rounded-full w-full sm:w-auto"
            >
              <a href="#paquetes">
                <span>Ver Paquetes</span>
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">500+</span>
              <span>Eventos realizados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">15+</span>
              <span>Años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">100%</span>
              <span>Clientes satisfechos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#beneficios" aria-label="Ver más">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </a>
      </div>
    </section>
  )
}
