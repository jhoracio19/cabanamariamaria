import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const waLink =
    "https://wa.me/522462132732?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20para%20conocer%20las%20instalaciones%20de%20la%20Cabaña.";

  // Link de Google Maps para el mapa interactivo
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.40665878483!2d-98.25838622452967!3d19.30815234464297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd972fa12302d%3A0xe268168bb773c60c!2sCaba%C3%B1a%20Maria%20Maria!5e0!3m2!1ses-419!2smx!4v1775791657240!5m2!1ses-419!2smx";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6">
            ¿Dónde estamos ubicados?
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto mb-6" />
          <p className="font-sans text-[#2D3748]/70 text-lg md:text-xl leading-relaxed">
            Estamos en el corazón de Tlaxcala, listos para recibirte y mostrarte
            el lugar de tu próximo evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Dirección */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#D35400] transition-colors duration-300">
                <MapPin className="w-7 h-7 text-[#D35400] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-2">
                  Dirección
                </h3>
                <p className="text-[#2D3748]/70 text-lg leading-relaxed">
                  Privada el Palmar #5, La Trinidad Tepehitec,
                  <br />
                  Tlaxcala, Tlax. México. CP. 90110
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#D35400] transition-colors duration-300">
                <Phone className="w-7 h-7 text-[#D35400] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-2">
                  Teléfono
                </h3>
                <a
                  href="tel:+522462132732"
                  className="text-[#2D3748]/70 text-lg hover:text-[#D35400] transition-colors"
                >
                  246 213 2732
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#D35400] transition-colors duration-300">
                <Clock className="w-7 h-7 text-[#D35400] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-2">
                  Horarios de Atención
                </h3>
                <p className="text-[#2D3748]/70 text-lg">
                  Lunes a Viernes: 9:00 AM - 5:00 PM
                  <br />
                  Sábados y Domignos: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            {/* Botón de Acción Especial */}
            <div className="pt-6">
              <Button
                asChild
                className="bg-[#D35400] hover:bg-[#a84300] text-white py-8 px-10 rounded-2xl shadow-xl shadow-orange-900/20 gap-3 text-lg font-bold transition-transform hover:scale-105"
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  <span>Agendar una Visita Guiada</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mapa Interactivo de Google */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabaña María María"
              className="grayscale-[0.2] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
            />
            {/* Botón flotante sobre el mapa para móviles */}
            <div className="absolute bottom-4 left-4 right-4 md:hidden">
              <a
                href="https://maps.app.goo.gl/8QYeZPjLudsvLzrx6" // Actualiza con tu link de Maps real
                target="_blank"
                className="flex items-center justify-center bg-white/90 backdrop-blur-sm py-3 rounded-xl text-[#5C4033] font-bold text-sm shadow-lg"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.40665878483!2d-98.25838622452967!3d19.30815234464297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd972fa12302d%3A0xe268168bb773c60c!2sCaba%C3%B1a%20Maria%20Maria!5e0!3m2!1ses-419!2smx!4v1775791657240!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
