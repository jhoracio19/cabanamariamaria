import { Star, Quote, UserCircle, BadgeCheck } from "lucide-react";
import { listResenasAprobadas } from "@/lib/resena-store";

export async function Testimonials() {
  const resenas = await listResenasAprobadas();

  // Sin reseñas reales aprobadas todavía, no mostramos nada en vez de
  // inventar contenido: mejor ausente que falso.
  if (resenas.length === 0) return null;

  const promedio =
    resenas.reduce((sum, r) => sum + r.rating, 0) / resenas.length;
  const promedioRedondeado = Math.round(promedio);

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6">
            Experiencias Reales
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto mb-6" />

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-serif text-4xl font-bold text-[#5C4033]">
              {promedio.toFixed(1)}
            </span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < promedioRedondeado ? "fill-[#D35400] text-[#D35400]" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {resenas.length}{" "}
                {resenas.length === 1
                  ? "reseña verificada"
                  : "reseñas verificadas"}
              </span>
            </div>
          </div>

          <p className="font-sans text-[#2D3748]/70 text-lg md:text-xl">
            Todas nuestras reseñas son 100% reales: se las pedimos
            directamente a cada cliente al terminar su evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {resenas.slice(0, 8).map((resena) => (
            <div
              key={resena.id}
              className="relative bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-[#D35400]" />
                </div>

                <div className="flex items-center gap-1 mb-3 text-[10px] font-bold text-green-600 uppercase tracking-wider">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Reseña verificada
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: resena.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D35400] text-[#D35400]"
                    />
                  ))}
                </div>

                <p className="font-sans text-[#2D3748] text-md italic leading-relaxed mb-6 relative z-10">
                  {`"${resena.text}"`}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                <div className="w-12 h-12 rounded-full border-2 border-[#D35400]/20 flex items-center justify-center bg-[#FAF9F6] flex-shrink-0">
                  <UserCircle
                    className="w-8 h-8 text-[#D35400]/70"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="font-serif font-bold text-[#5C4033] text-sm leading-tight">
                    {resena.authorName}
                  </p>
                  <p className="text-[10px] font-bold text-[#D35400] uppercase tracking-wider mt-1">
                    {resena.eventLabel}
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
