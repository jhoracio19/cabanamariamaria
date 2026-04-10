import { Sparkles, Sofa, TreePine } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Servicio Todo Incluido",
    description:
      "Olvídate del estrés. Banquete, meseros, decoración y limpieza. Tú solo llega a disfrutar tu evento como un invitado más.",
  },
  {
    icon: Sofa,
    title: "Mobiliario Elegante",
    description:
      "Mesas, sillas de madera y mantelería de alta calidad incluidos. Todo listo para impresionar a tus invitados desde el primer segundo.",
  },
  {
    icon: TreePine,
    title: "Jardín y Área Infantil",
    description:
      "Amplio jardín con áreas verdes impecables y zona de juegos segura para que los pequeños también tengan una tarde inolvidable.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Nuestra Diferencia
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6 leading-tight">
            ¿Por qué celebrar en Cabaña María María?
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto mb-6" />
          <p className="font-sans text-[#2D3748]/80 text-lg md:text-xl leading-relaxed">
            Más de 5 años creando momentos inolvidables para las familias de
            Tlaxcala con calidez y profesionalismo.
          </p>
        </div>

        {/* Cuadrícula de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Decoración sutil en la esquina */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D35400]/5 rounded-tr-3xl rounded-bl-[100px] transition-colors group-hover:bg-[#D35400]/10" />

              {/* Icono */}
              <div className="relative w-16 h-16 rounded-2xl bg-[#FAF9F6] border border-gray-100 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <benefit.icon className="w-8 h-8 text-[#D35400]" />
              </div>

              {/* Texto */}
              <h3 className="font-serif text-2xl font-bold text-[#5C4033] mb-4">
                {benefit.title}
              </h3>
              <p className="font-sans text-[#2D3748]/70 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
