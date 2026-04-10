import { Sparkles, Sofa, TreePine } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Servicio Todo Incluido",
    description: "Olvídate del estrés. Banquete, meseros, decoración y limpieza. Tú solo disfruta tu evento.",
  },
  {
    icon: Sofa,
    title: "Mobiliario Elegante",
    description: "Mesas, sillas, mantelería de primera calidad incluidos. Todo listo para impresionar a tus invitados.",
  },
  {
    icon: TreePine,
    title: "Jardín y Área Infantil",
    description: "Amplio jardín con áreas verdes y zona de juegos para que los pequeños también disfruten.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestra diferencia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Más de 15 años creando momentos inolvidables para familias en Tlaxcala
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
