import { Check, Utensils, GlassWater, Sparkles, ChefHat, Soup, Beef, Drumstick } from "lucide-react";

export const metadata = {
  title: "Paquetes Todo Incluido y Menús | Cabaña María María",
  description: "Descubre nuestros deliciosos menús de Taquiza, 2 y 3 tiempos. Paquetes completos con mobiliario, servicio de meseros y más en Tlaxcala.",
};

const WHATSAPP_CONTACTO = "522462132732";

export default function BanquetesPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_CONTACTO}?text=${encodeURIComponent("Hola, vi los paquetes de banquetes en la página web y me interesa cotizar un evento.")}`;

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-4">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-[#5C4033] font-bold mb-4">
          Banquete Todo Incluido
        </h1>
        <p className="text-gray-600 text-lg">
          Calidad, sabor y servicio profesional. Elige el estilo de banquete que mejor se adapte a tu celebración.
        </p>
      </div>

      {/* SECCIÓN: ¿QUÉ INCLUYE? */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 mb-20">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Sparkles className="w-8 h-8 text-[#D35400]" />
          <h2 className="font-serif text-3xl font-bold text-[#5C4033]">Tu Paquete Incluye</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Renta de Salón por 7 horas",
            "1 hora previa de cortesía para arreglo y montaje",
            "Mesas con mantel blanco a elección",
            "Sillas según capacidad (Madera o Plegable)",
            "Servicio de meseros por 7 horas",
            "Loza completa y vaso de vidrio",
            "Pan para acompañar",
            "Vitrolero de agua de Jamaica",
            "Refresco y hielos ilimitados por 3 horas",
            "Montaje, desmontaje y limpieza",
            "Invitación Digital Inteligente (RSVP)"
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
{/* SECCIÓN 1: TAQUIZA TRADICIONAL ($300) */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Gran Taquiza Tradicional</h2>
          <span className="inline-block bg-[#5C4033] text-white px-6 py-2 rounded-full text-xl font-bold shadow-md">
            $300 por persona
          </span>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            La opción ideal para compartir. Tu taquiza ya incluye <span className="font-bold text-[#D35400]">Arroz</span>, <span className="font-bold text-[#D35400]">Frijoles Refritos</span> y <span className="font-bold text-[#D35400]">Verduras</span>. 
            <br className="hidden md:block"/>Arma tu paquete eligiendo un guisado de cada una de las siguientes opciones:
          </p>
        </div>

        {/* Tarjetas de Guisados a elegir */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Opción 1: Puerco */}
          <div className="bg-white p-6 rounded-3xl shadow-md border-t-4 border-[#D35400]">
            <h4 className="font-serif text-xl font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-3">
              <span className="bg-orange-100 p-2 rounded-full"><Utensils className="w-5 h-5 text-[#D35400]"/></span>
              Elige 1 de Puerco
            </h4>
            <ul className="text-gray-600 space-y-2 text-sm ml-2">
              <li className="flex gap-2"><span>•</span> Cochinita Pibil</li>
              <li className="flex gap-2"><span>•</span> Bistec en salsa Morita con papas</li>
              <li className="flex gap-2"><span>•</span> Costillas a la BBQ</li>
              <li className="flex gap-2"><span>•</span> Puerco en Adobo o Mole Verde</li>
              <li className="flex gap-2"><span>•</span> Chicharrón en salsa (verde/roja)</li>
              <li className="flex gap-2"><span>•</span> Carne enchilada al Pastor</li>
              <li className="flex gap-2"><span>•</span> Puerco en Verdolagas o Pasilla</li>
            </ul>
          </div>

          {/* Opción 2: Res */}
          <div className="bg-white p-6 rounded-3xl shadow-md border-t-4 border-[#D35400]">
            <h4 className="font-serif text-xl font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-3">
              <span className="bg-orange-100 p-2 rounded-full"><Beef className="w-5 h-5 text-[#D35400]"/></span>
              Elige 1 de Res
            </h4>
            <ul className="text-gray-600 space-y-2 text-sm ml-2">
              <li className="flex gap-2"><span>•</span> Bistec a la Mexicana</li>
              <li className="flex gap-2"><span>•</span> Tinga de Res</li>
              <li className="flex gap-2"><span>•</span> Picadillo Tradicional</li>
              <li className="flex gap-2"><span>•</span> Albóndigas</li>
              <li className="flex gap-2"><span>•</span> Bistec Encebollado con rajas</li>
              <li className="flex gap-2"><span>•</span> Tortitas de carne en salsa verde</li>
              <li className="flex gap-2"><span>•</span> Bistec en Guajillo o Pasilla</li>
            </ul>
          </div>

          {/* Opción 3: Pollo */}
          <div className="bg-white p-6 rounded-3xl shadow-md border-t-4 border-[#D35400]">
            <h4 className="font-serif text-xl font-bold text-[#5C4033] mb-4 flex items-center gap-2 border-b pb-3">
              <span className="bg-orange-100 p-2 rounded-full"><Drumstick className="w-5 h-5 text-[#D35400]"/></span>
              Elige 1 de Pollo
            </h4>
            <ul className="text-gray-600 space-y-2 text-sm ml-2">
              <li className="flex gap-2"><span>•</span> Tinga de Pollo</li>
              <li className="flex gap-2"><span>•</span> Pollo con Mole Rojo</li>
              <li className="flex gap-2"><span>•</span> Pechuga Rellena</li>
              <li className="flex gap-2"><span>•</span> Fajitas de pollo empanizadas</li>
              <li className="flex gap-2"><span>•</span> Pollo al Pastor</li>
              <li className="flex gap-2"><span>•</span> Pollo en crema de chipotle</li>
              <li className="flex gap-2"><span>•</span> Tortitas en salsa de pasilla</li>
            </ul>
          </div>
        </div>

        {/* Banner de Verduras Extras */}
        <div className="mt-6 bg-[#FAF9F6] border border-gray-200 rounded-2xl p-6 text-center max-w-3xl mx-auto shadow-sm">
           <h4 className="font-bold text-[#5C4033] mb-3 uppercase tracking-widest text-sm">Opciones de Verduras (Eliges 1 para acompañar)</h4>
           <div className="flex flex-wrap justify-center gap-2 text-xs font-medium text-gray-600">
             <span className="bg-white px-3 py-1.5 rounded-full border shadow-sm">Papa al gratín</span>
             <span className="bg-white px-3 py-1.5 rounded-full border shadow-sm">Alambre de Portobello</span>
             <span className="bg-white px-3 py-1.5 rounded-full border shadow-sm">Ensalada rusa</span>
             <span className="bg-white px-3 py-1.5 rounded-full border shadow-sm">Rajas poblanas</span>
             <span className="bg-white px-3 py-1.5 rounded-full border shadow-sm">Papas con chorizo</span>
             <span className="bg-white px-3 py-1.5 rounded-full border shadow-sm">Setas a los tres chiles</span>
           </div>
        </div>

      </div>

      {/* SECCIÓN 2: MENÚS TRADICIONALES ($340) */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Menú Clásico a 2 Tiempos</h2>
          <span className="inline-block bg-[#D35400] text-white px-6 py-2 rounded-full text-xl font-bold shadow-md">
            $340 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-[#D35400]/30 transition-colors">
            <h3 className="font-bold text-xl text-[#5C4033] mb-6 flex items-center gap-2 border-b pb-4">Menú 1</h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong className="text-gray-800 italic block">Primer Tiempo:</strong> Sopa mixta.</li>
              <li><strong className="text-gray-800 italic block">Plato Fuerte:</strong> Mixiote (2 piezas: pierna y muslo) acompañado de arroz rojo.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-[#D35400]/30 transition-colors">
            <h3 className="font-bold text-xl text-[#5C4033] mb-6 flex items-center gap-2 border-b pb-4">Menú 2</h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong className="text-gray-800 italic block">Primer Tiempo:</strong> Crema de papa con tocineta y pollo deshebrado.</li>
              <li><strong className="text-gray-800 italic block">Plato Fuerte:</strong> Pechuga rellena de pimientos acompañada de espagueti.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: MENÚ GOURMET A ELEGIR ($380) */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl font-bold text-[#5C4033] mb-2 text-gradient bg-clip-text">Menú Gourmet a 3 Tiempos</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-3 rounded-full text-2xl font-bold shadow-xl">
            $380 por persona
          </span>
          <p className="mt-4 text-gray-600">Arma tu menú eligiendo una opción de cada tiempo para todos tus invitados.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Primer Tiempo: Cremas */}
          <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-[#D35400]">
            <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-6 flex items-center gap-2 uppercase tracking-widest"><Soup className="text-[#D35400]"/> Cremas Finas</h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>• Champiñones</li>
              <li>• Elote Dulce</li>
              <li>• Zanahoria con Calabaza</li>
              <li>• Papa con Tocineta y Pollo</li>
            </ul>
          </div>

          {/* Segundo Tiempo: Pastas */}
          <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-[#D35400]">
            <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-6 flex items-center gap-2 uppercase tracking-widest"><Utensils className="text-[#D35400]"/> Pastas</h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>• Espagueti en Crema Poblana</li>
              <li>• Salsa Fina de Tres Quesos</li>
              <li>• Aglio e Olio Clásico</li>
              <li>• Pomodoro o Crema Fina con Jamón</li>
            </ul>
          </div>

          {/* Tercer Tiempo: Platos Fuertes */}
          <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-[#D35400] md:col-span-2">
            <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-6 flex items-center gap-2 uppercase tracking-widest"><ChefHat className="text-[#D35400]"/> Platos Fuertes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 font-medium">
              <ul className="space-y-3">
                <li>• Pierna de Cerdo Adobada al Horno</li>
                <li>• Lomo en Medallones con Mango y Habanero</li>
                <li>• Pollo en Salsa de Champiñones</li>
              </ul>
              <ul className="space-y-3">
                <li>• Pechuga Rellena de Pimientos Asados</li>
                <li>• Pechuga Sellada con Pimientos Tricolor</li>
              </ul>
            </div>
          </div>

          {/* Guarniciones */}
          <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-[#5C4033] md:col-span-2">
            <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-4 uppercase tracking-widest text-center">Guarniciones a elegir</h3>
            <p className="text-center text-xs text-gray-500 mb-6">(Elegir una guarnición para acompañar tu plato fuerte)</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-600">
              <span className="bg-gray-100 px-4 py-2 rounded-lg">Espinacas a la Crema</span>
              <span className="bg-gray-100 px-4 py-2 rounded-lg">Papas con Tocineta</span>
              <span className="bg-gray-100 px-4 py-2 rounded-lg">Papas Baby a las Hierbas</span>
              <span className="bg-gray-100 px-4 py-2 rounded-lg">Verduras al Vapor o Salteadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="max-w-2xl mx-auto text-center bg-[#D35400] text-white p-10 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 font-serif">¿Listo para agendar tu evento?</h3>
        <p className="mb-8 opacity-90">Contáctanos para revisar disponibilidad de fecha y apartar tu paquete con el mejor sazón.</p>
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