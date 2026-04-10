"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/principal.jpg", // Tu foto estrella del interior
    alt: "Elegante salón interior con techo de madera y mesas decoradas",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/gallery/jardin-juegos.jpg", // Foto del jardín con resbaladilla
    alt: "Amplio jardín con área de juegos infantiles y áreas verdes",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/decoracion.jpg", // Foto del plato de comida o buffet
    alt: "Montaje elegante",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/fiesta-tematica.jpg", // Foto del interior con decoración temática
    alt: "Montaje temático para fiestas infantiles en salón Cabaña María María",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/gallery/entrada.jpg", // Foto de la fachada o entrada
    alt: "Entrada principal y fachada acogedora de la Cabaña",
    className: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Nuestros Espacios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6">
            Cada Rincón una Historia
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto mb-6" />
          <p className="font-sans text-[#2D3748]/70 text-lg md:text-xl">
            Explora la calidez de nuestras instalaciones diseñadas para crear
            momentos mágicos.
          </p>
        </div>

        {/* Bento Grid con Next/Image */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} group relative overflow-hidden rounded-3xl bg-gray-200 shadow-sm border border-white hover:shadow-2xl transition-all duration-500`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay elegante al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/90 via-[#5C4033]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-serif text-lg md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
