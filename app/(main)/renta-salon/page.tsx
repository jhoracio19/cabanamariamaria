import { Cotizador } from "@/components/Cotizador";
import { Check, Info, Sparkles } from "lucide-react";

export const metadata = {
  title: "Cotizador Interactivo | Cabaña María María",
  description: "Calcula el precio de tu evento en Cabaña María María. Selecciona tus invitados y personaliza tus extras al instante.",
};

export default function CotizadorPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-4">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-[#5C4033] font-bold mb-4">
          Cotiza la Renta de Instalaciones
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ajusta el número de invitados y selecciona los servicios extras que necesites. Te daremos un estimado transparente al instante.
        </p>
      </div>

      {/* CONTENEDOR A DOS COLUMNAS */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        
        {/* COLUMNA IZQUIERDA: QUÉ INCLUYE */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#D35400]" />
            <h2 className="font-serif text-2xl font-bold text-[#5C4033]">¿Qué incluye la renta base?</h2>
          </div>
          
          <ul className="space-y-4 mb-8">
            {[
              "Uso de salón y jardín",
              "Plato base",
              "Juego de cubiertos",
              "Vaso de vidrio",
              "Área de juegos infantiles",
              "7 horas de evento + 1 hora previa de cortesía para arreglo y montaje",
              "Refrigerador y parrilla disponible",
              "Estacionamiento",
              "Invitación Digital Inteligente (RSVP)"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-[#D35400] flex-shrink-0 mt-0.5" />
                <span className={item.includes("Invitación") ? "font-bold text-[#D35400]" : ""}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#FAF9F6] p-5 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-3 text-[#D35400] text-xs font-bold">
              <Info className="w-4 h-4 flex-shrink-0" />
              MOBILIARIO INCLUIDO:
            </div>
            <ul className="text-sm text-gray-600 space-y-2 ml-6 list-disc mb-3">
              <li><strong>Mesas:</strong> Circulares o rectangulares a tu elección.</li>
              <li><strong>50 a 60 personas:</strong> Incluye Silla de Madera.</li>
              <li><strong>Más de 60 personas:</strong> Incluye Silla Plegable.</li>
            </ul>
            <div className="border-t border-gray-200 pt-3 mt-4">
              <p className="text-xs text-gray-500">
                ✨ <strong className="text-[#D35400]">Mejora tu evento:</strong> Puedes cambiar a <strong>Silla Tiffany</strong> u otros extras directamente en el cotizador.
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: EL COTIZADOR INTERACTIVO */}
        {/* Le agregamos 'sticky' para que el cotizador acompañe al usuario si hace scroll en pantallas muy largas */}
        <div className="sticky top-24">
          <Cotizador />
        </div>

      </div>
    </div>
  );
}