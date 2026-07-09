import { ChefHat } from "lucide-react";

export default function TaquizaTradicional() {
  return (
    <>
      {/* 1. Buffet Catering($300) - LISTA BONITA Y ORDENADA */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5C4033] mb-3">
            Gran Taquiza Tradicional
          </h2>
          <div className="inline-block bg-[#D35400] text-white px-8 py-2.5 rounded-full text-2xl font-bold shadow-lg hover:scale-105 transition-transform duration-300">
            $250 por persona
          </div>
          <p className="mt-6 text-gray-600 text-lg italic max-w-2xl mx-auto">
            Incluye arroz rojo frijoles refritos y elige 3 guisados favoritos de nuestra gran variedad tradicional 
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-md border border-gray-100/80 space-y-12">
          {/* Guisados General */}
          <div>
            <h4 className="font-serif text-2xl font-bold text-[#5C4033] mb-8 flex items-center justify-center gap-2.5 border-b pb-4">
              <ChefHat className="w-7 h-7 text-[#D35400]" /> Guisados Tradicionales a Elegir
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Pipián rojo con pollo o puerco",
                "Pipián rojo con pollo, papas y nopales",
                "Salsa de chicharrón roja o verde",
                "Fajitas de puerco en salsa de pasilla con nopales",
                "Bistec en fajitas en salsa Morita con papas",
                "Moronga a la mexicana",
                "Fajitas de puerco a la mexicana",
                "Salsa de longaniza",
                "Puerco en adobo",
                "Puerco en mole verde",
                "Puerco a los tres chiles",
                "Longaniza en salsa verde con nopales",
                "Puerco en chile quemado",
                "Papas con rajas y longaniza",
                "Cochinita pibil",
                "Puerco en verdolaga",
                "Tinga de pollo",
                "Pollo con mole rojo"
              ].map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3.5 text-sm md:text-base text-gray-700 font-medium bg-orange-50/20 p-4 rounded-2xl border border-orange-100/40 hover:bg-orange-50/70 hover:border-orange-200/60 hover:shadow-sm transition-all duration-300 group cursor-default"
                >
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

