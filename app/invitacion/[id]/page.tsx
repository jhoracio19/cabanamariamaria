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
      themeColor: "#C93756" // Rojo Blush elegante
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
          
          {/* Header de la Invitación con color dinámico */}
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
                {/* Icono con color dinámico */}
                <Calendar className="w-6 h-6" style={{ color: event.themeColor }} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Fecha y Hora</p>
                  <p className="text-[#2D3748]">{event.date} - {event.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Icono con color dinámico */}
                <Shirt className="w-6 h-6" style={{ color: event.themeColor }} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Código de Vestimenta</p>
                  <p className="text-[#2D3748]">{event.dressCode}</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {/* Icono con color dinámico */}
                <MapPin className="w-8 h-8" style={{ color: event.themeColor }} />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-2">Ubicación</h2>
              <p className="text-gray-600 mb-6 italic">Privada el Palmar #5, La Trinidad Tepehitec, Tlaxcala.</p>
              {/* Botón con color dinámico y efecto hover */}
              <Button asChild className="w-full py-6 text-lg rounded-full text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: event.themeColor }}>
                <a href={event.locationUrl} target="_blank">Abrir en Google Maps</a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center border border-dashed border-gray-300 shadow-sm">
              <p className="text-sm text-gray-500 mb-4">Favor de confirmar su asistencia con el anfitrión:</p>
              {/* Enlace con color dinámico */}
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

        {/* El Caballo de Troya: Mantiene el naranja de identidad de Cabaña María María (#D35400) */}
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