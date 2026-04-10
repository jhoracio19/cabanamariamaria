// 1. Eliminamos el import de next/image y agregamos UserCircle
import { Star, Quote, UserCircle } from "lucide-react";

const testimonials = [
  {
    name: "Paola Rojas",
    event: "Fiesta de 3 años",
    rating: 5,
    text: "Celebrar los 3 años de mi hijo aquí fue la mejor decisión. Los niños no salieron del área de juegos y nosotros pudimos platicar tranquilos en el salón. ¡Súper seguro y espacioso!",
    // 2. Eliminamos la propiedad 'image'
  },
  {
    name: "Ricardo Méndez",
    event: "Reunión Familiar / Carne Asada",
    rating: 5,
    text: "Rentamos solo las instalaciones para una convivencia familiar. El jardín es perfecto para una carne asada, muy privado y con todo lo necesario. El ambiente de la cabaña es único.",
  },
  {
    name: "Lic. Arturo Torres",
    event: "Conferencia Empresarial",
    rating: 5,
    text: "Buscábamos un lugar fuera de la oficina para nuestra planeación anual. La tranquilidad de la zona y la calidez de la madera ayudaron mucho a la integración del equipo. Muy profesional.",
  },
  {
    name: "Ana Lucía Mendoza",
    event: "Bautizo",
    rating: 5,
    text: "Excelente servicio todo incluido. No tuvimos que preocuparnos por nada del banquete ni el montaje. La comida deliciosa y la atención de los meseros de diez.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6">
            Experiencias Reales
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto mb-6" />
          <p className="font-sans text-[#2D3748]/70 text-lg md:text-xl">
            Desde reuniones casuales hasta eventos corporativos, nos adaptamos a
            tu visión.
          </p>
        </div>

        {/* Cuadrícula de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icono de Comilla */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-[#D35400]" />
                </div>

                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D35400] text-[#D35400]"
                    />
                  ))}
                </div>

                {/* Texto */}
                <p className="font-sans text-[#2D3748] text-md italic leading-relaxed mb-6 relative z-10">
                  {`"${testimonial.text}"`}
                </p>
              </div>

              {/* Autor - Sección modificada */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                {/* 3. Reemplazamos el div del Image por el icono */}
                <div className="w-12 h-12 rounded-full border-2 border-[#D35400]/20 flex items-center justify-center bg-[#FAF9F6] flex-shrink-0">
                  <UserCircle
                    className="w-8 h-8 text-[#D35400]/70"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="font-serif font-bold text-[#5C4033] text-sm leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] font-bold text-[#D35400] uppercase tracking-wider mt-1">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
