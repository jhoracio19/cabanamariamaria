import { MapPin, Shirt, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";

const getEventData = (id: string) => {
  const events: any = {
    "1": {
      host: "Familia Ahuactzin",
      celebrant: "María Fernanda y María José",
      eventOrder: "XV años",
      date: "3 de Enero, 2026",
      time: "7:00 PM",
      targetDate: "2026-01-03T19:00:00",
      dressCode: "Formal",
      hostPhone: "522462278504",
      locationUrl: "https://maps.app.goo.gl/EXpsx5jdFKY2C1mQ6",
      // Agregamos el link de inserción (embed) de Google Maps
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.406774937089!2d-98.25581129999999!3d19.308147299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd972fa12302d%3A0xe268168bb773c60c!2sCaba%C3%B1a%20Maria%20Maria!5e0!3m2!1ses-419!2smx!4v1777844102262!5m2!1ses-419!2smx",
      themeColor: "#C93756" 
    }
  };
  return events[id];
};
export default async function InvitacionPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const event = getEventData(resolvedParams.id);

  if (!event) return <div className="min-h-screen pt-32 text-center text-xl text-[#5C4033]">Invitación no encontrada</div>;

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          <div className="p-8 text-center text-white relative" style={{ backgroundColor: event.themeColor }}>
            <p className="font-sans uppercase tracking-widest text-sm mb-2">Estás cordialmente invitado al</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">{event.eventOrder}</h1>
            <p className="font-serif text-2xl mt-2">de {event.celebrant}</p>
          </div>

          <div className="p-8 space-y-8 bg-[#FAF9F6]/50">
            
            <div className="text-center">
              <h3 className="font-serif text-lg text-[#5C4033] mb-2">Faltan:</h3>
              <Countdown targetDate={event.targetDate} />
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6" style={{ color: event.themeColor }} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Fecha y Hora</p>
                  <p className="text-[#2D3748]">{event.date} - {event.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shirt className="w-6 h-6" style={{ color: event.themeColor }} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Código de Vestimenta</p>
                  <p className="text-[#2D3748]">{event.dressCode}</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Sección de Ubicación con Mapa Interactivo */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8" style={{ color: event.themeColor }} />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-2">Ubicación</h2>
              <p className="text-gray-600 mb-4 italic">Privada el Palmar #5, La Trinidad Tepehitec, Tlaxcala.</p>
              
              {/* Contenedor del Mapa Interactivo */}
              <div className="rounded-2xl overflow-hidden shadow-inner border border-gray-200 mb-6 h-64 w-full">
                <iframe
                  src={event.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la ubicación"
                />
              </div>

              <Button asChild className="w-full py-6 text-lg rounded-full text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: event.themeColor }}>
                <a href={event.locationUrl} target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center border border-dashed border-gray-300 shadow-sm">
              <p className="text-sm text-gray-500 mb-4">Favor de confirmar su asistencia con el anfitrión:</p>
              <a 
                href={`https://wa.me/${event.hostPhone}?text=Hola%20${event.host},%20confirmo%20mi%20asistencia.`}
                className="flex items-center justify-center gap-2 font-bold hover:underline"
                style={{ color: event.themeColor }}
              >
                <Phone className="w-4 h-4" />
                Confirmar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">¿Te gustó el lugar del evento?</p>
          <Button variant="outline" asChild className="border-[#D35400] text-[#D35400] rounded-full hover:bg-[#D35400] hover:text-white transition-colors">
            <a href="/">Conoce Cabaña María María</a>
          </Button>
        </div>
      </div>
    </div>
  );
}