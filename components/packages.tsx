import Link from "next/link";
import { Check, Info } from "lucide-react"; 

const WHATSAPP_CONTACTO = "522462278504";

export default function Packages() {
  const whatsappTodoIncluido = `https://wa.me/${WHATSAPP_CONTACTO}?text=${encodeURIComponent("Hola, me interesa información sobre el Paquete Todo Incluido para mi evento.")}`;

  return (
    <section className="py-20 bg-white" id="paquetes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 mt-2">
            Precios transparentes y flexibilidad total para cualquier tipo de celebración.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          
          {/* TARJETA 1: TODO INCLUIDO */}
          <div className="border-2 border-[#D35400] rounded-3xl p-8 relative bg-white shadow-lg">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D35400] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
               MÁS POPULAR
             </div>
             
             <h3 className="font-serif text-2xl font-bold text-[#5C4033] mb-2">Paquete Todo Incluido</h3>
             <div className="flex items-baseline gap-2 mb-4">
               <span className="text-4xl font-bold text-[#D35400]">$ Desde 300</span>
               <span className="text-sm text-gray-500 leading-tight">por<br/>persona*</span>
             </div>
             <p className="text-gray-600 mb-6 text-sm">
               La solución completa para que tú solo te encargues de disfrutar.
             </p>

             <div className="bg-[#FAF9F6] p-4 rounded-xl border border-gray-100 mb-6">
               <div className="flex items-center gap-2 mb-3 text-[#D35400] text-xs font-bold">
                 <Info className="w-4 h-4 flex-shrink-0" />
                 MOBILIARIO INCLUIDO:
               </div>
               <ul className="text-xs text-gray-600 space-y-2 ml-6 list-disc mb-3">
                 <li><strong>Mesas:</strong> Circulares o rectangulares a tu elección.</li>
                 <li><strong>50 a 60 personas:</strong> Incluye Silla de Madera.</li>
                 <li><strong>Más de 60 personas:</strong> Incluye Silla Plegable.</li>
               </ul>
               <div className="border-t border-gray-200 pt-2">
                 <p className="text-[11px] text-gray-500">
                   <strong className="text-[#D35400]">Mejora tu evento:</strong> Puedes cambiar a <strong>Silla Tiffany</strong> por un costo extra.
                 </p>
               </div>
             </div>

             <ul className="space-y-3 mb-8">
               {[
                 "Banquete",
                 "Servicio de meseros profesionales",
                 "7 horas de servicio",
                 "Montaje y desmontaje",
                 "Refrescos e insumos básicos",
                 "Invitación Digital Inteligente (RSVP)"
               ].map((item, index) => (
                 <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                   <Check className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                   <span className={item.includes("Invitación") ? "font-bold text-[#D35400]" : ""}>{item}</span>
                 </li>
               ))}
             </ul>
             
<Link 
                href="/todo-incluido"
                className="block w-full text-center bg-[#D35400] hover:bg-[#A84300] transition-colors text-white py-3 rounded-xl mt-auto font-bold"
             >
               Ver Menús y Detalles
             </Link>
          </div>

          {/* TARJETA 2: RENTA DE INSTALACIONES */}
          <div className="bg-[#FAF9F6] border border-gray-100 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
             <h3 className="font-serif text-2xl font-bold text-[#5C4033] mb-2">Renta de Instalaciones</h3>
             <div className="flex items-baseline gap-2 mb-4">
               <span className="text-4xl font-bold text-[#D35400]">$Desde 4,500</span>
               <span className="text-sm text-gray-500 leading-tight">pago<br/>único*</span>
             </div>
             <p className="text-gray-600 mb-6 text-sm">
               Ideal si ya cuentas con tu banquete y solo buscas el espacio perfecto.
             </p>

             <div className="bg-white p-4 rounded-xl border border-gray-100 mb-6">
               <div className="flex items-center gap-2 mb-3 text-[#D35400] text-xs font-bold">
                 <Info className="w-4 h-4 flex-shrink-0" />
                 MOBILIARIO INCLUIDO:
               </div>
               <ul className="text-xs text-gray-600 space-y-2 ml-6 list-disc mb-3">
                 <li><strong>Mesas:</strong> Circulares o rectangulares a tu elección.</li>
                 <li><strong>50 a 60 personas:</strong> Incluye Silla de Madera.</li>
                 <li><strong>Más de 60 personas:</strong> Incluye Silla Plegable.</li>
               </ul>
               <div className="border-t border-gray-100 pt-2">
                 <p className="text-[11px] text-gray-500">
                    <strong className="text-[#D35400]">Mejora tu evento:</strong> Puedes cambiar a <strong>Silla Tiffany</strong> por un costo extra.
                 </p>
               </div>
             </div>

             <ul className="space-y-3 mb-8">
               {[
                 "Uso de salón y jardín",
                 "Área de juegos infantiles",
                 "7 horas de evento + 1 de cortesía",
                 "Refrigerador y parrilla disponible",
                 "Estacionamiento",
                 "Invitación Digital Inteligente (RSVP)"
               ].map((item, index) => (
                 <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                   <Check className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                   <span className={item.includes("Invitación") ? "font-bold text-[#D35400]" : ""}>{item}</span>
                 </li>
               ))}
             </ul>
             
             {/* AQUÍ ESTÁ EL CAMBIO MÁGICO: Un Link directo a la nueva ruta */}
             <Link 
                href="/cotizador"
                className="block text-center w-full bg-[#5C4033] hover:bg-[#4A332A] text-white py-3 rounded-xl mt-auto font-bold transition-colors"
             >
               Cotizar mi Evento
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
}