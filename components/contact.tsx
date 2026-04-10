import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Ubicación y Contacto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            El Mejor Salón de Eventos en La Trinidad Tepehitec, Tlaxcala
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos listos para hacer realidad tu evento soñado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Privada el Palmar #5<br />
                  La Trinidad Tepehitec<br />
                  Tlaxcala, México
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                <a 
                  href="tel:+522462132732" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +52 246 213 2732
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horarios de Atención</h3>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                  Sábados: 9:00 AM - 3:00 PM
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full shadow-lg shadow-primary/20"
              >
                <a
                  href="https://wa.me/522462132732?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20para%20conocer%20las%20instalaciones"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar una Visita</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123!2d-98.2371!3d19.3187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE5JzA3LjMiTiA5OMKwMTQnMTMuNiJX!5e0!3m2!1ses!2smx!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabaña María María"
              className="w-full h-full min-h-[300px] lg:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
