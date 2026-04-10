"use client"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Salón interior elegante de Cabaña María María",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Hermoso jardín para eventos",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Montaje de mesa elegante",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Detalles culinarios del banquete",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Decoración de evento especial",
    className: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Galería
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Conoce nuestros espacios
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada rincón diseñado para crear momentos mágicos
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} group relative overflow-hidden rounded-2xl bg-muted cursor-pointer`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
              {/* Aspect ratio placeholder */}
              <div className={index === 0 || index === 3 ? "aspect-square" : "aspect-video md:aspect-square"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
