import { MapPin, Shirt, Phone, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { getInvitacion } from "@/lib/blob-store";
import {
  VENUE_ADDRESS,
  VENUE_LOCATION_URL,
  VENUE_MAP_EMBED_URL,
} from "@/lib/venue";

export default async function InvitacionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getInvitacion(id);

  if (!event)
    return (
      <div className="min-h-screen pt-32 text-center text-xl text-[#5C4033]">
        Invitación no encontrada
      </div>
    );

  // Verificamos si es un evento temático vaquero para cambiar estilos
  const isVaquero = event.dressCode.toLowerCase().includes("vaquero");

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Agregamos un borde doble si es vaquero para simular un póster rústico */}
        <div
          className={`bg-white rounded-3xl shadow-xl overflow-hidden ${isVaquero ? "border-4 border-double border-[#92400E]/20" : "border border-gray-100"}`}
        >
          <div
            className="p-8 text-center text-white relative bg-cover bg-center"
            style={
              event.coverImageUrl
                ? {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${event.coverImageUrl})`,
                  }
                : { backgroundColor: event.themeColor }
            }
          >
            {/* Detalles decorativos tipo Sheriff para la temática vaquera */}
            {isVaquero && (
              <>
                <Star className="absolute top-6 left-6 w-5 h-5 text-white/40 fill-white/20" />
                <Star className="absolute top-6 right-6 w-5 h-5 text-white/40 fill-white/20" />
              </>
            )}

            <p className="font-sans uppercase tracking-widest text-sm mb-2">
              {isVaquero
                ? "¡Yeehaw! Estás invitado al"
                : "Estás cordialmente invitado al"}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              {event.eventOrder}
            </h1>
            <p className="font-serif text-2xl mt-2">de {event.celebrant}</p>

            {event.customMessage && (
              <p className="font-sans text-sm md:text-base text-white/90 italic mt-4 max-w-md mx-auto">
                {event.customMessage}
              </p>
            )}

            {/* Costura simulada abajo del header */}
            {isVaquero && (
              <div className="absolute bottom-0 left-0 right-0 h-1 border-b-2 border-dashed border-white/30"></div>
            )}
          </div>

          <div className="p-8 space-y-8 bg-[#FAF9F6]/50">
            <div className="text-center">
              <h3 className="font-serif text-lg text-[#5C4033] mb-2">
                Faltan:
              </h3>
              <Countdown targetDate={event.targetDate} />
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Calendar
                  className="w-6 h-6"
                  style={{ color: event.themeColor }}
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Fecha y Hora
                  </p>
                  <p className="text-[#2D3748] font-medium">
                    {event.date} - {event.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Cambiamos el ícono de la camisa por una Estrella de Sheriff si es vaquero */}
                {isVaquero ? (
                  <Star
                    className="w-6 h-6"
                    style={{ color: event.themeColor }}
                  />
                ) : (
                  <Shirt
                    className="w-6 h-6"
                    style={{ color: event.themeColor }}
                  />
                )}
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Código de Vestimenta
                  </p>
                  <p className="text-[#2D3748] font-bold">
                    {event.dressCode}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8" style={{ color: event.themeColor }} />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-2">
                Ubicación
              </h2>
              <p className="text-gray-600 mb-4 italic">{VENUE_ADDRESS}</p>

              <div
                className={`rounded-2xl overflow-hidden shadow-inner mb-6 h-64 w-full ${isVaquero ? "border-2 border-dashed border-[#92400E]/30" : "border border-gray-200"}`}
              >
                <iframe
                  src={VENUE_MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la ubicación"
                />
              </div>

              <Button
                asChild
                className="w-full py-6 text-lg rounded-full text-white hover:opacity-90 transition-opacity font-bold shadow-lg"
                style={{ backgroundColor: event.themeColor }}
              >
                <a href={VENUE_LOCATION_URL} target="_blank" rel="noopener noreferrer">
                  Abrir en Google Maps
                </a>
              </Button>
            </div>

            <div
              className={`p-6 rounded-2xl text-center shadow-sm ${isVaquero ? "bg-[#92400E]/5 border border-[#92400E]/20" : "bg-white border border-dashed border-gray-300"}`}
            >
              <p className="text-sm text-gray-500 mb-4">
                Favor de confirmar su asistencia con el anfitrión:
              </p>
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
          <p className="text-gray-400 text-sm mb-4">
            ¿Te gustó el lugar del evento?
          </p>
          <Button
            variant="outline"
            asChild
            className="rounded-full hover:text-white transition-colors"
            style={{ borderColor: event.themeColor, color: event.themeColor }}
          >
            <a href="/">Conoce Cabaña María María</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
