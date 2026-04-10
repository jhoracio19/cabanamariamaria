import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Paquete Todo Incluido",
    price: " Desde 350",
    unit: "por persona",
    description:
      "La solución completa para que tú solo te encargues de disfrutar.",
    features: [
      "Banquete",
      "Servicio de meseros profesionales",
      "7 horas de servicio",
      "Montaje y desmontaje",
      "Refrescos e insumos básicos",
    ],
    highlight: true,
  },
  {
    name: "Renta de Instalaciones",
    price: "Desde 4,000",
    unit: "pago único",
    description:
      "Ideal si ya cuentas con tu banquete y solo buscas el espacio perfecto.",
    features: [
      "Uso de salón y jardín",
      "Área de juegos infantiles",
      "7 horas de evento + 1 de cortesía",
      "Refrigerador y parrilla disponible",
      "Estacionamiento",
    ],
    highlight: false,
  },
];

export function Packages() {
  const waLink =
    "https://wa.me/522462132732?text=Hola,%20me%20gustaría%20cotizar%20un%20evento.%20Me%20interesa%20saber%20los%20precios%20con%20sillas%20Tiffany/Madera.";

  return (
    <section id="paquetes" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Nuestros Paquetes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6">
            Planes a tu Medida
          </h2>
          <p className="font-sans text-[#2D3748]/70 text-lg">
            Precios transparentes y flexibilidad total para cualquier tipo de
            celebración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 md:p-12 rounded-3xl border-2 transition-all duration-300 ${
                pkg.highlight
                  ? "border-[#D35400] shadow-2xl scale-105 z-10 bg-white"
                  : "border-gray-100 bg-[#FAF9F6]"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D35400] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Más Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#5C4033] mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-[#D35400]">
                    ${pkg.price}
                  </span>
                  <span className="text-[#2D3748]/60 font-medium">
                    {pkg.unit}*
                  </span>
                </div>
                <p className="text-[#2D3748]/70">{pkg.description}</p>
              </div>

              {/* OPCIONES DE SILLAS - ESTO ES LO NUEVO */}
              <div className="mb-8 p-4 bg-white/50 rounded-xl border border-[#D35400]/10">
                <p className="text-xs font-bold text-[#D35400] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Personaliza tu Mobiliario:
                </p>
                <ul className="text-sm space-y-2 text-[#2D3748]/80">
                  <li>• Silla Plegable (Económica)</li>
                  <li>• Silla de Madera (Rústica/Elegante)</li>
                  <li>• Silla Tiffany (Premium)</li>
                </ul>
                <p className="text-[10px] mt-2 italic text-gray-400">
                  *El precio final varía según el tipo de silla seleccionada.
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D35400] shrink-0 mt-0.5" />
                    <span className="text-[#2D3748]/80 leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full py-7 rounded-xl text-lg font-bold transition-all ${
                  pkg.highlight
                    ? "bg-[#D35400] hover:bg-[#a84300] text-white shadow-lg"
                    : "bg-[#5C4033] hover:bg-[#3d2a22] text-white"
                }`}
              >
                <a href={waLink} target="_blank">
                  Cotizar mi Evento
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-[#2D3748]/50 text-sm">
          ¿Necesitas algo diferente?{" "}
          <a href={waLink} className="text-[#D35400] underline font-bold">
            Contáctanos
          </a>{" "}
          para armar un paquete personalizado.
        </p>
      </div>
    </section>
  );
}
