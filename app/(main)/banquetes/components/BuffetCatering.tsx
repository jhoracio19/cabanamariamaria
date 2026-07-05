import { GlassWater, Soup, Utensils, Beef, Drumstick } from 'lucide-react'
import React from 'react'

export default function BuffetCatering() {
  return (
    <>

      {/* 2. Buffet Catering Asistido ($340) */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Buffet Catering Asistido</h2>
          <span className="inline-block bg-[#D35400] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $280 por persona
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
                  "Mix de lechuga", "Queso panela", "Ajonjolí caramelizado",
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
    </>
  )
}
