import BanqueteCotizador from "@/components/BanqueteCotizador";
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
            "Salón por 7 horas de evento",
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

      {/* 1. Buffet Caterign($300) - LISTA BONITA Y ORDENADA */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Gran Taquiza Tradicional</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $300 por persona
          </span>
          <p className="mt-6 text-gray-600 italic">
            Incluye Arroz rojo, Frijoles refritos y Verduras. Elige un guisado de cada proteína:
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-10">
          {/* Puerco */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b pb-2">
              <Utensils className="w-5 h-5"/> Especialidades de Puerco (Elige 1)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Cochinita Pibil", "Costillas a la BBQ", "Carne enchilada tipo Pastor",
                "Bistec en Morita con papas", "Puerco en adobo o mole verde",
                "Chicharrones (Verde o Roja)", "Puerco en pasilla con nopales",
                "Longaniza en salsa verde", "Puerco en chile quemado", "Puerco en verdolagas"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Res */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b pb-2">
              <Beef className="w-5 h-5"/> Especialidades de Res (Elige 1)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Bistec a la mexicana", "Tinga de Res", "Picadillo Tradicional",
                "Albóndigas", "Bistec encebollado con rajas", "Bistec en pasilla o guajillo",
                "Tortitas de carne en salsa verde", "Entomatado"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Pollo */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b pb-2">
              <Drumstick className="w-5 h-5"/> Especialidades de Pollo (Elige 1)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Tinga de pollo", "Pollo con mole rojo", "Pechuga rellena",
                "Pollo en crema de chipotle", "Fajitas de pollo empanizada",
                "Pollo al pastor", "Tortitas de pollo en pasilla",
                "Pollo en chile quemado", "Pollo empapelado con vegetales"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Verduras */}
          <div className="pt-4">
            <h4 className="font-serif text-lg font-bold text-[#5C4033] mb-6 text-center uppercase tracking-widest">
              Guarniciones de Verduras (Elige 1)
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Papa al gratín", "Alambre de Portobello", "Setas a los tres chiles",
                "Ensalada Rusa", "Salpicón de pollo", "Rajas poblanas", "Papas con chorizo"
              ].map((v) => (
                <span key={v} className="bg-orange-50 text-[#D35400] px-4 py-2 rounded-full text-xs font-bold border border-orange-100">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Buffet Catering Asistido ($340) */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Buffet Catering Asistido</h2>
          <span className="inline-block bg-[#D35400] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $340 por persona
          </span>
          <p className="mt-6 text-gray-600 italic">
            Elige 1 opción de barra fría, 1 opción de barra caliente y 1 guisado de cada proteína.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-orange-100">
              <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b border-orange-100 pb-2">
                <GlassWater className="w-5 h-5" /> Barra Fría <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">(Elige 1)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Cóctel frío", "Mix de lechuga", "Queso panela", "Ajonjolí caramelizado",
                  "Aderezo mil islas", "Aderezo ranch", "Jícama", "Sandía", "Pastel",
                  "Agua de Jamaica", "Agua de limón"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-orange-100">
              <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b border-orange-100 pb-2">
                <Soup className="w-5 h-5" /> Barra Caliente <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">(Elige 1)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Sopa azteca", "Caldo Xóchitl",
                  "Espagueti blanco", "Arroz a la jardinera", "Papas a la mantequilla",
                  "Salchicha frita"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <h3 className="font-serif text-2xl font-bold text-[#5C4033] mb-2">Guisados a Elegir</h3>
            <p className="text-gray-500 text-sm italic">Para completar el buffet, selecciona 1 guisado de puerco, 1 de res y 1 de pollo.</p>
          </div>

          {/* Puerco */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b pb-2">
              <Utensils className="w-5 h-5"/> Puerco <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">(Elige 1)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Cochinita Pibil", "Bistec en fajitas en morita con papas",
                "Puerco en adobo", "Puerco en mole verde", "Puerco a los tres chiles",
                "Chicharrones en salsa verde o roja con nopales o papas",
                "Puerco en pasilla con nopales", "Costillas a la BBQ",
                "Longaniza en salsa verde con nopales", "Puerco en chile quemado",
                "Puerco en verdolagas", "Carne enchilada tipo pastor"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Res */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b pb-2">
              <Beef className="w-5 h-5"/> Res <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">(Elige 1)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Bistec a la mexicana", "Bistec en pasilla con nopales",
                "Picadillo", "Tinga de res", "Albóndigas",
                "Tortitas de carne en salsa verde", "Entomatado",
                "Bistec en guajillo con papas",
                "Bistec encebollado con rajas de jalapeño y papas"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Pollo */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D35400] mb-6 flex items-center gap-2 border-b pb-2">
              <Drumstick className="w-5 h-5"/> Pollo <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">(Elige 1)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Tinga de pollo", "Pollo con mole rojo", "Pollo en crema de chipotle",
                "Fajitas de pollo empanizada", "Pollo al pastor",
                "Tortitas de pollo en salsa de pasilla", "Pechuga rellena",
                "Pollo en adobo de tres chiles", "Pollo en chile quemado",
                "Pollo empapelado de vegetales"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-orange-200 rounded-full flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
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
              <p className="text-sm"><strong className="text-[#D35400]">Plato Fuerte:</strong> Mixiote (2 piezas) acompañado de arroz rojo.</p>
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
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Especialidades Gourmet (3 Tiempos)</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $380 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Menú 1",
              items: ["Ensalada Italiana", "Crema de Nuez con Amaretto", "Lomo en Salsa de Mango"]
            },
            {
              title: "Menú 2",
              items: ["Empanada de Atún", "Fettuccine Alfredo", "Lomo al Ajo Arriero"]
            },
            {
              title: "Menú 3",
              items: ["Ensalada Crujiente Cítrica", "Crema de Papa con Tocineta", "Suprema en Flor de Calabaza"]
            },
            {
              title: "Menú 4",
              items: ["Ensalada Mixta", "Crema Brócoli VI Quesos", "Pollo en Costra de Cacahuate"]
            }
          ].map((menu, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#D35400] mb-4 border-b pb-2">{menu.title}</h4>
              <ul className="text-xs text-gray-600 space-y-3 font-medium">
                <li><span className="text-[#5C4033] block text-[10px] uppercase font-bold">Entrada</span> {menu.items[0]}</li>
                <li><span className="text-[#5C4033] block text-[10px] uppercase font-bold">Sopa/Crema</span> {menu.items[1]}</li>
                <li><span className="text-[#5C4033] block text-[10px] uppercase font-bold">Fuerte</span> {menu.items[2]}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SECCIÓN MENÚ A ELEGIR ($380) */}
      <div className="max-w-5xl mx-auto mb-20 bg-[#5C4033] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Diseña tu Propio Menú</h2>
            <p className="text-white/80 max-w-xl mx-auto italic">Combina a tu gusto eligiendo una opción de cada sección ($380 p/p).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><Soup className="w-5 h-5"/> Cremas</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Champiñones</li>
                <li>• Elote Dulce</li>
                <li>• Zanahoria con Calabaza</li>
                <li>• Papa con Tocineta y Pollo</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><Utensils className="w-5 h-5"/> Pastas</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Espagueti en Crema Poblana</li>
                <li>• Salsa Fina de Tres Quesos</li>
                <li>• Aglio e Olio o Pomodoro</li>
                <li>• Crema Fina (con o sin jamón)</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><ChefHat className="w-5 h-5"/> Plato Fuerte</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Pierna de Cerdo Adobada</li>
                <li>• Lomo en Medallones de Mango</li>
                <li>• Pechuga Rellena en Salsa de Mango</li>
                <li>• Pollo en Salsa de Champiñones</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-serif text-xl border-b border-white/20 pb-2 mb-6"><Sparkles className="w-5 h-5"/> Guarnición</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Espinacas a la Crema</li>
                <li>• Papas en Crema con Tocineta</li>
                <li>• Papas Baby a las Hierbas</li>
                <li>• Verduras al Vapor o Salteadas</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D35400]/20 rounded-full -ml-32 -mb-32 blur-3xl" />
      </div>
    <BanqueteCotizador />

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
