import { Beef, Drumstick, Utensils } from "lucide-react";


export default function TaquizaTradicional() {
  return (
    <>

      {/* 1. Buffet Caterign($300) - LISTA BONITA Y ORDENADA */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Gran Taquiza Tradicional</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $250 por persona
          </span>
          <p className="mt-6 text-gray-600 italic">
            Incluye Arroz rojo, Frijoles refritos. Elige un guisado de cada proteína:
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
                "Pipián rojo", "Costillas a la BBQ", "Carne enchilada tipo Pastor",
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
                "Pipián rojo", "Pollo con mole rojo", "Pechuga rellena",
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
    </>
  )
}
