import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María Elena García",
    event: "Boda",
    rating: 5,
    text: "¡Fue la boda de mis sueños! El servicio fue impecable, la comida deliciosa y no tuve que preocuparme por nada. El equipo de Cabaña María María hizo todo perfecto.",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Roberto Hernández",
    event: "XV Años",
    rating: 5,
    text: "Celebramos los XV años de mi hija y superó todas nuestras expectativas. El jardín es hermoso, los meseros muy atentos y mis invitados quedaron encantados con la comida.",
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Ana Lucía Mendoza",
    event: "Bautizo",
    rating: 5,
    text: "Excelente lugar para eventos familiares. El área infantil fue perfecta para los niños, y nosotros pudimos disfrutar tranquilos. ¡El servicio todo incluido vale cada peso!",
    image: "/images/testimonial-3.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Historias reales de familias que confiaron en nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-muted bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
