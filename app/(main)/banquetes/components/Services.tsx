import { Check, Sparkles } from 'lucide-react'

export default function Services() {
  return (
    <>
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
      </>
  )
}
