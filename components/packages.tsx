import { Check, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const packages = [
  {
    name: "Paquete Todo Incluido",
    description: "La opción favorita de nuestros clientes",
    price: "$350",
    unit: "MXN por persona",
    featured: true,
    features: [
      "Banquete completo con entradas",
      "Bebidas ilimitadas (agua, refresco)",
      "Meseros profesionales",
      "Mantelería y centros de mesa",
      "Limpieza antes y después",
      "Acceso al jardín y salón",
      "Estacionamiento incluido",
      "7 horas de evento",
    ],
  },
  {
    name: "Renta de Instalaciones",
    description: "Para quienes prefieren su propio catering",
    price: "$4,000",
    unit: "MXN",
    featured: false,
    features: [
      "Salón con capacidad 150 personas",
      "Mesas y sillas incluidas",
      "Acceso al jardín",
      "Área infantil disponible",
      "Estacionamiento",
      "7 horas de evento",
      "Baños limpios y equipados",
    ],
  },
]

export function Packages() {
  return (
    <section id="paquetes" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros paquetes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Elige el plan perfecto para tu evento
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Opciones flexibles diseñadas para que disfrutes sin preocupaciones
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "relative bg-card rounded-3xl p-8 shadow-sm border transition-all duration-300",
                pkg.featured
                  ? "border-primary shadow-xl shadow-primary/10 lg:scale-105"
                  : "border-border hover:border-primary/20 hover:shadow-lg"
              )}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Recomendado</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">Desde</span>
                  <span className={cn(
                    "font-serif text-5xl md:text-6xl font-bold",
                    pkg.featured ? "text-primary" : "text-foreground"
                  )}>
                    {pkg.price}
                  </span>
                </div>
                <span className="text-muted-foreground">{pkg.unit}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                      pkg.featured ? "bg-primary/10" : "bg-secondary/10"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        pkg.featured ? "text-primary" : "text-secondary"
                      )} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full gap-2 rounded-full text-lg py-6",
                  pkg.featured
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                )}
              >
                <a
                  href={`https://wa.me/522462132732?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar este paquete</span>
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Precios sujetos a disponibilidad y temporada. Contáctanos para una cotización personalizada.
        </p>
      </div>
    </section>
  )
}
