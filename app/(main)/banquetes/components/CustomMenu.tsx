import { Soup, Utensils, ChefHat, Sparkles } from 'lucide-react'
import React from 'react'

export default function CustomMenu() {
  return (
    <>
              {/* 4. SECCIÓN MENÚ A ELEGIR ($380) */}
      <div className="max-w-5xl mx-auto mb-20 bg-[#5C4033] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Diseña tu Propio Menú</h2>
            <p className="text-white/80 max-w-xl mx-auto italic">Combina a tu gusto eligiendo una opción de cada sección ($350 p/p).</p>
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
    </>
  )
}
