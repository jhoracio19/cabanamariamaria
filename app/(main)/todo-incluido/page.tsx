import { Check, Utensils, GlassWater, Sparkles, ChefHat } from "lucide-react";

export const metadata = {
  title: "Paquetes Todo Incluido y Menús | Cabaña María María",
  description: "Descubre nuestros deliciosos menús a 2 y 3 tiempos. Paquetes completos con mobiliario, servicio de meseros y más para tu evento en Tlaxcala.",
};

const WHATSAPP_CONTACTO = "522462278504";

export default function TodoIncluidoPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_CONTACTO}?text=${encodeURIComponent("Hola, vi los menús del Paquete Todo Incluido en la página web y me interesa cotizar un evento.")}`;

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-4">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-[#5C4033] font-bold mb-4">
          Servicio de Banquete Todo Incluido
        </h1>
        <p className="text-gray-600 text-lg">
          La solución perfecta para que tú solo te encargues de disfrutar. Elige el menú que más te guste y nosotros hacemos la magia.
        </p>
      </div>

      {/* SECCIÓN: ¿QUÉ INCLUYE? (El gran valor del paquete) */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 mb-20">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Sparkles className="w-8 h-8 text-[#D35400]" />
          <h2 className="font-serif text-3xl font-bold text-[#5C4033]">Tu Paquete Incluye</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Renta de Salón por 7 horas (2 hrs extra antes para arreglo)",
            "Mesas con mantel blanco a elección (circular o rectangular)",
            "Sillas según capacidad (Madera o Plegable)",
            "Servicio de meseros por 7 horas",
            "Loza completa para el menú y vaso de vidrio",
            "Cubiertos y complementos de mesa",
            "Pan para acompañar",
            "Vitrolero de agua de Jamaica",
            "Refresco y hielos ilimitados por 3 horas",
            "Montaje, desmontaje y limpieza",
            "Invitación Digital Inteligente (RSVP) 🎁"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#D35400] flex-shrink-0 mt-0.5" />
              <span className={item.includes("Invitación") ? "font-bold text-[#D35400] text-sm" : "text-gray-700 text-sm"}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN: MENÚS DE $300 */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Menú Tradicional a 2 Tiempos</h2>
          <span className="inline-block bg-[#D35400] text-white px-6 py-2 rounded-full text-xl font-bold shadow-md">
            $300 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Menú 1 - $300 */}
          <div className="bg-white border-2 border-transparent hover:border-[#D35400]/30 transition-colors p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl text-[#5C4033] mb-6 flex items-center gap-2 border-b pb-4">
              <Utensils className="w-5 h-5 text-[#D35400]" /> Menú 1
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong className="text-gray-800">Primer Tiempo:</strong> Sopa mixta.</li>
              <li><strong className="text-gray-800">Plato Fuerte:</strong> Mixiote 2 piezas (pierna y muslo) acompañado de arroz rojo.</li>
            </ul>
          </div>

          {/* Menú 2 - $300 */}
          <div className="bg-white border-2 border-transparent hover:border-[#D35400]/30 transition-colors p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl text-[#5C4033] mb-6 flex items-center gap-2 border-b pb-4">
              <Utensils className="w-5 h-5 text-[#D35400]" /> Menú 2
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong className="text-gray-800">Primer Tiempo:</strong> Crema de papa con tocineta y pollo deshebrado.</li>
              <li><strong className="text-gray-800">Plato Fuerte:</strong> Pechuga rellena de pimientos acompañada de espagueti.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECCIÓN: MENÚS DE $350 */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Menú Ejecutivo a 3 Tiempos</h2>
          <span className="inline-block bg-[#5C4033] text-white px-6 py-2 rounded-full text-xl font-bold shadow-md">
            $350 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Menú 1 - $350 */}
          <div className="bg-white border-2 border-gray-100 hover:border-[#5C4033]/30 transition-colors p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl text-[#5C4033] mb-4 border-b pb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#D35400]" /> Menú 1
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><strong className="text-gray-800 block mb-1">Entrada:</strong> Ensalada Italiana (Conjunto de frescas lechugas con germen de soya, jitomate, tocineta acompañada con una rica vinagreta italiana).</li>
              <li><strong className="text-gray-800 block mb-1">Sopa/Crema:</strong> Crema de nuez con un toque de amaretto.</li>
              <li><strong className="text-gray-800 block mb-1">Plato Fuerte:</strong> Lomo de cerdo en salsa de mango (Suaves medallones de cerdo con salsa de mango acompañado con papas cambray o verduras al vapor).</li>
            </ul>
          </div>

          {/* Menú 2 - $350 */}
          <div className="bg-white border-2 border-gray-100 hover:border-[#5C4033]/30 transition-colors p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl text-[#5C4033] mb-4 border-b pb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#D35400]" /> Menú 2
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><strong className="text-gray-800 block mb-1">Entrada:</strong> Empanada de atún (Tradicional empanada rellena con atún a la vizcaína).</li>
              <li><strong className="text-gray-800 block mb-1">Sopa/Pasta:</strong> Fettucine Alfredo (Cremosa pasta con jamón y queso parmesano con perejil).</li>
              <li><strong className="text-gray-800 block mb-1">Plato Fuerte:</strong> Lomo de cerdo al ajo arriero (Horneado en salsa de gravy con champiñón, ajo y chiltepín, flameado con brandy. Acompañado con ensalada de col morada, zanahoria, chícharo en aceite de oliva).</li>
            </ul>
          </div>

          {/* Menú 3 - $350 */}
          <div className="bg-white border-2 border-gray-100 hover:border-[#5C4033]/30 transition-colors p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl text-[#5C4033] mb-4 border-b pb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#D35400]" /> Menú 3
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><strong className="text-gray-800 block mb-1">Entrada:</strong> Ensalada crujiente con aderezo de cítricos (Rica combinación de lechuga, espinaca con nueces con aderezo de la casa).</li>
              <li><strong className="text-gray-800 block mb-1">Sopa/Crema:</strong> Crema de papa (Con tocineta y pollo deshebrado).</li>
              <li><strong className="text-gray-800 block mb-1">Plato Fuerte:</strong> Suprema de pollo rellena de pimientos (Jugosa pechuga de pollo en salsa de flor de calabaza acompañada con verduras al vapor).</li>
            </ul>
          </div>

          {/* Menú 4 - $350 */}
          <div className="bg-white border-2 border-gray-100 hover:border-[#5C4033]/30 transition-colors p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl text-[#5C4033] mb-4 border-b pb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#D35400]" /> Menú 4
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><strong className="text-gray-800 block mb-1">Entrada:</strong> Ensalada mixta (Mix de lechugas con morrones, aceituna negra, crotón y huevo duro).</li>
              <li><strong className="text-gray-800 block mb-1">Sopa/Crema:</strong> Crema brócoli a los vi quesos (Deliciosa crema perfumada con vino blanco, con una mezcla de quesos estilo italiano).</li>
              <li><strong className="text-gray-800 block mb-1">Plato Fuerte:</strong> Pollo en costra de cacahuate (Jugosa pechuga tostada en salsa de balsámico con verduras asadas: zanahoria, cebollita y papa cambray).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="max-w-2xl mx-auto text-center bg-[#D35400] text-white p-10 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 font-serif">¿Listo para agendar tu evento?</h3>
        <p className="mb-8 opacity-90">Contáctanos para revisar fechas disponibles y resolver cualquier duda sobre tu paquete.</p>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#D35400] font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          Apartar Fecha por WhatsApp
        </a>
      </div>

    </div>
  );
}