import { Check, Utensils, GlassWater, Sparkles, ChefHat, Soup, Beef, Drumstick, Clock } from "lucide-react";

export const metadata = {
  title: "Menús y Paquetes Todo Incluido | Cabaña María María",
  description: "Explora nuestra variedad de banquetes: Taquizas, Menús a 2 y 3 tiempos. Todo incluido con mobiliario, meseros y salón en Tlaxcala.",
};

const WHATSAPP_CONTACTO = "522462132732";

export default function BanquetesPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_CONTACTO}?text=${encodeURIComponent("Hola, me interesa cotizar un evento con sus paquetes de banquetes.")}`;

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-4">
      
      {/* HEADER PRINCIPAL */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-[#5C4033] font-bold mb-4">
          Banquetes Todo Incluido
        </h1>
        <p className="text-gray-600 text-lg">
          La mejor gastronomía y el mejor servicio para tu evento. Tú eliges el sabor, nosotros nos encargamos del resto.
        </p>
      </div>

      {/* SECCIÓN: SERVICIOS INCLUIDOS */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 mb-20">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Sparkles className="w-8 h-8 text-[#D35400]" />
          <h2 className="font-serif text-3xl font-bold text-[#5C4033]">¿Qué incluye tu paquete?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Salón por 7 horas",
            "2 horas previas de cortesía para arreglo",
            "Mesa con mantel blanco",
            "Sillas según capacidad",
            "Servicio de Meseros por 7 horas",
            "Losa para el menú y vaso de vidrio",
            "Cubiertos y complementos de mesa",
            "Pan para acompañar",
            "Vitrolero de agua de Jamaica",
            "Refresco y hielos ilimitados (3 horas)",
            "Montaje, desmontaje y limpieza",
            "Invitación digital inteligente"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#D35400] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1. SECCIÓN TAQUIZA ($300) */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Gran Taquiza Tradicional</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $300 por persona
          </span>
          <p className="mt-4 text-gray-500 italic">Incluye Arroz, Frijoles refritos y Verduras. Elige un guisado de cada proteína:</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Puerco */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#D35400]">
            <h4 className="font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-2"><Utensils className="w-4 h-4 text-[#D35400]"/> Puerco</h4>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>Cochinita Pibil, Bistec en Morita, Adobo, Mole verde, Tres chiles, Chicharrón (verde/rojo), Pasilla con nopales, Costillas BBQ, Salsa verde con nopales, Chile quemado, Verdolagas, Carne al pastor.</li>
            </ul>
          </div>
          {/* Res */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#D35400]">
            <h4 className="font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-2"><Beef className="w-4 h-4 text-[#D35400]"/> Res</h4>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>Bistec a la mexicana, Pasilla con nopales, Picadillo, Tinga de res, Albóndigas, Tortitas en salsa verde, Entomatado, Guajillo con papas, Encebollado con rajas.</li>
            </ul>
          </div>
          {/* Pollo */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#D35400]">
            <h4 className="font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-2"><Drumstick className="w-4 h-4 text-[#D35400]"/> Pollo</h4>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>Tinga, Mole rojo, Crema de chipotle, Fajitas empanizadas, Al pastor, Tortitas en pasilla, Pechuga rellena, Adobo de tres chiles, Chile quemado, Empapelado.</li>
            </ul>
          </div>
          {/* Verduras */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#D35400]">
            <h4 className="font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-2"><Utensils className="w-4 h-4 text-[#D35400]"/> Verduras</h4>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>Papa al gratín, Alambre de Portobello, Setas a los tres chiles, Ensalada rusa, Salpicón de pollo, Rajas poblanas, Papas con chorizo.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN 2 TIEMPOS ($340) */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Menú Tradicional a 2 Tiempos</h2>
          <span className="inline-block bg-[#D35400] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $340 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-[#D35400]">
            <h3 className="font-bold text-[#5C4033] text-xl mb-6">Opción 1</h3>
            <div className="space-y-4">
              <p className="text-sm"><strong className="text-[#D35400]">1er Tiempo:</strong> Sopa mixta.</p>
              <p className="text-sm"><strong className="text-[#D35400]">Plato Fuerte:</strong> Mixiote (2 piezas: pierna y muslo) acompañado de arroz rojo.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-[#D35400]">
            <h3 className="font-bold text-[#5C4033] text-xl mb-6">Opción 2</h3>
            <div className="space-y-4">
              <p className="text-sm"><strong className="text-[#D35400]">1er Tiempo:</strong> Crema de papa con tocineta y pollo deshebrado.</p>
              <p className="text-sm"><strong className="text-[#D35400]">Plato Fuerte:</strong> Pechuga rellena de pimientos acompañada de espagueti.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN ESPECIALIDADES 3 TIEMPOS ($380) */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Especialidades de la Casa (3 Tiempos)</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $380 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Menú 1",
              items: ["Ensalada Italiana", "Crema de Nuez con Amaretto", "Lomo de Cerdo en Salsa de Mango"]
            },
            {
              title: "Menú 2",
              items: ["Empanada de Atún", "Fettuccine Alfredo", "Lomo al Ajo Arriero con Ensalada"]
            },
            {
              title: "Menú 3",
              items: ["Ensalada Crujiente Cítrica", "Crema de Papa con Tocineta", "Suprema de Pollo en Flor de Calabaza"]
            },
            {
              title: "Menú 4",
              items: ["Ensalada Mixta", "Crema de Brócoli a los VI Quesos", "Pollo en Costra de Cacahuate"]
            }
          ].map((menu, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#D35400] mb-4 border-b pb-2">{menu.title}</h4>
              <ul className="text-xs text-gray-600 space-y-3 font-medium">
                <li><span className="text-[#5C4033] block text-[10px] uppercase">Entrada</span> {menu.items[0]}</li>
                <li><span className="text-[#5C4033] block text-[10px] uppercase">Sopa/Crema</span> {menu.items[1]}</li>
                <li><span className="text-[#5C4033] block text-[10px] uppercase">Fuerte</span> {menu.items[2]}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SECCIÓN MENÚ A ELEGIR ($380) */}
      <div className="max-w-5xl mx-auto mb-20 bg-[#5C4033] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Diseña tu Menú Gourmet</h2>
            <p className="text-white/80 max-w-xl mx-auto italic">Elige una opción de cada sección para crear un banquete único ($380 p/p).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><Soup className="w-5 h-5"/> Cremas</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Champiñones</li>
                <li>• Elote dulce</li>
                <li>• Zanahoria con calabaza</li>
                <li>• Papa con tocineta y pollo deshebrado</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><Utensils className="w-5 h-5"/> Pastas</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Espagueti en crema de chile poblano</li>
                <li>• Espagueti en salsa fina de tres quesos</li>
                <li>• Espagueti Aglio e Olio clásico</li>
                <li>• Espagueti al Pomodoro o Crema Fina</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><ChefHat className="w-5 h-5"/> Plato Fuerte</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Pierna de cerdo adobada al horno</li>
                <li>• Lomo en medallones (Salsa Mango-Habanero)</li>
                <li>• Pechuga rellena en salsa de mango suave</li>
                <li>• Pollo en salsa de champiñones</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><Sparkles className="w-5 h-5"/> Guarnición</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Espinacas a la crema fina</li>
                <li>• Papas en crema suave con tocineta</li>
                <li>• Papas baby a la mantequilla y hierbas</li>
                <li>• Verduras al vapor o salteadas</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D35400]/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>

      {/* CTA FINAL */}
      <div className="max-w-2xl mx-auto text-center">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#D35400] text-white font-bold px-10 py-5 rounded-full text-xl hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          Apartar Fecha por WhatsApp
        </a>
      </div>

    </div>
  );
}