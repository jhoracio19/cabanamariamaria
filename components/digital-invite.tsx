import Link from "next/link";
import { Smartphone, CalendarClock, MapPinned, MessageCircleHeart } from "lucide-react";

const perks = [
  {
    icon: CalendarClock,
    text: "Cuenta regresiva en vivo para tus invitados",
  },
  {
    icon: MapPinned,
    text: "Mapa y ubicación con un clic",
  },
  {
    icon: MessageCircleHeart,
    text: "Confirmación de asistencia (RSVP) directo por WhatsApp",
  },
];

export function DigitalInvite() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Texto */}
          <div>
            <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
              Incluida en todos los paquetes
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6 leading-tight">
              Tu Invitación Digital Inteligente
            </h2>
            <p className="font-sans text-[#2D3748]/80 text-lg leading-relaxed mb-8">
              Además del salón y el banquete, te entregamos una invitación
              digital personalizada para compartir por WhatsApp: con cuenta
              regresiva, ubicación y confirmación de asistencia, sin que tus
              invitados tengan que descargar nada.
            </p>

            <ul className="space-y-4 mb-10">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-gray-100 flex items-center justify-center shrink-0">
                    <perk.icon className="w-5 h-5 text-[#D35400]" />
                  </div>
                  <span className="font-sans text-[#2D3748]/80 text-base">
                    {perk.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/invitacion/demo"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#5C4033] hover:bg-[#4A332A] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              <Smartphone className="w-5 h-5" />
              Ver invitación de ejemplo
            </Link>
          </div>

          {/* Mockup simple tipo celular apuntando a la demo */}
          <div className="flex justify-center">
            <Link
              href="/invitacion/demo"
              target="_blank"
              className="block w-full max-w-[280px] rounded-[2.5rem] border-8 border-[#2D3748] shadow-2xl overflow-hidden bg-[#FAF9F6] hover:-translate-y-1 transition-transform"
              aria-label="Ver invitación de ejemplo"
            >
              <div className="p-6 text-center text-white" style={{ backgroundColor: "#D35400" }}>
                <p className="font-sans uppercase tracking-widest text-[10px] mb-1">
                  Estás cordialmente invitado a
                </p>
                <p className="font-serif text-xl font-bold">Nuestra Boda</p>
                <p className="font-serif text-sm mt-1">de Sofía &amp; Diego</p>
              </div>
              <div className="p-6 space-y-3 text-left">
                <div className="h-2 w-3/4 bg-gray-200 rounded-full" />
                <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
                <div className="h-24 w-full bg-gray-100 rounded-xl mt-4" />
                <div className="h-9 w-full bg-[#D35400]/90 rounded-full mt-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
