import Link from "next/link";
import { Heart, Sparkles, Church, Cake, Users, Briefcase } from "lucide-react";

// Categorías derivadas de los testimonios y eventos reales que ya aparecen
// en el sitio (banquetes todo incluido vs solo renta de instalaciones),
// para que cada visitante identifique rápido su tipo de evento y a dónde ir.
const eventTypes = [
  {
    icon: Heart,
    title: "Bodas",
    description: "Tu día soñado, sin preocuparte por nada del banquete ni el montaje.",
    href: "/banquetes",
  },
  {
    icon: Sparkles,
    title: "XV Años",
    description: "La fiesta que ella siempre imaginó, con salón y jardín para toda la noche.",
    href: "/banquetes",
  },
  {
    icon: Church,
    title: "Bautizos",
    description: "Servicio todo incluido para celebrar en familia, con atención de meseros.",
    href: "/banquetes",
  },
  {
    icon: Cake,
    title: "Cumpleaños Infantiles",
    description: "Área de juegos segura para los niños mientras los adultos disfrutan del salón.",
    href: "/banquetes",
  },
  {
    icon: Users,
    title: "Reuniones Familiares",
    description: "Renta el jardín y el salón para tu carne asada o convivencia, muy privado.",
    href: "/renta-salon",
  },
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description: "Un espacio fuera de la oficina para juntas de planeación o integración de equipo.",
    href: "/renta-salon",
  },
];

export function EventTypes() {
  return (
    <section id="tipos-de-evento" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            ¿Qué vas a celebrar?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6 leading-tight">
            Un espacio para cada tipo de evento
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {eventTypes.map((eventType) => (
            <Link
              key={eventType.title}
              href={eventType.href}
              className="group bg-[#FAF9F6] rounded-3xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#D35400] transition-colors duration-300">
                <eventType.icon className="w-7 h-7 text-[#D35400] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5C4033] mb-2">
                {eventType.title}
              </h3>
              <p className="text-[#2D3748]/60 text-sm leading-relaxed hidden md:block">
                {eventType.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
