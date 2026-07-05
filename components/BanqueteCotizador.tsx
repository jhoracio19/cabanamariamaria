"use client";

import { useState, useMemo } from "react";
import { Calculator, Users, MessageCircle, Music, Castle, Disc, Layout, Layers } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { track } from "@vercel/analytics/react";

// Precios base definidos por el negocio
const PRECIOS_MENU = {
  taquiza: 250,
  buffetAsistido: 280,
  tradicional: 300,
  gourmet: 360
};

const NOMBRES_MENU: Record<keyof typeof PRECIOS_MENU, string> = {
  taquiza: "Taquiza tradicional",
  buffetAsistido: "Buffet catering asistido",
  tradicional: "Menú tradicional a 2 tiempos",
  gourmet: "Especialidades gourmet"
};

// Servicios extras con los precios exactos
const EXTRAS = [
  { id: "dj", name: "Servicio de DJ", price: 4700, type: "fijo", icon: Music },
  { id: "rockola", name: "Rockola", price: 1800, type: "fijo", icon: Disc },
  { id: "inflable", name: "Inflable", price: 900, type: "fijo", icon: Castle },
  { id: "tiffany", name: "Sillas Tiffany", price: 30, type: "por_persona", icon: Layout },
  { id: "sobremantel", name: "Sobremantel", price: 50, type: "por_mesa", icon: Layers }, // Se calcula por mesas de 10
];

export default function BanqueteCotizador() {
  const [menu, setMenu] = useState<keyof typeof PRECIOS_MENU>("taquiza");
  const [personas, setPersonas] = useState(50); // Mínimo 50
  const [serviciosExtras, setServiciosExtras] = useState<string[]>([]);

  // Lógica de cálculo dinámico y exacto
  const total = useMemo(() => {
    let subtotal = PRECIOS_MENU[menu] * personas;
    const numeroMesas = Math.ceil(personas / 10); // Calculamos mesas de 10 personas
    
    EXTRAS.forEach(extra => {
      if (serviciosExtras.includes(extra.id)) {
        if (extra.type === "fijo") {
          subtotal += extra.price;
        } else if (extra.type === "por_persona") {
          subtotal += extra.price * personas;
        } else if (extra.type === "por_mesa") {
          subtotal += extra.price * numeroMesas;
        }
      }
    });
    
    return subtotal;
  }, [menu, personas, serviciosExtras]);

  const toggleExtra = (id: string) => {
    setServiciosExtras(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

const generarWhatsApp = () => {
  // Rastrear en Vercel Analytics
  track('Cotizar_Banquete', {
    menu: NOMBRES_MENU[menu],
    personas,
    total,
    extras: serviciosExtras.join(", ")
  });

  // Rastrear en Google Analytics 4
// Rastrear en Google Analytics 4
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'cotizacion_completada', {
    'event_category': 'engagement',
    'event_label': 'banquete',
    'value': total,
    'menu_type': NOMBRES_MENU[menu],
    'personas': personas,
    'cantidad_extras': serviciosExtras.length
  });
}
  const extrasSeleccionados = EXTRAS
    .filter(e => serviciosExtras.includes(e.id))
    .map(e => {
      let precioMostrado = "";
      if(e.type === "por_persona") precioMostrado = `($${e.price} p/p)`;
      if(e.type === "por_mesa") precioMostrado = `($${e.price} p/mesa)`;
      if(e.type === "fijo") precioMostrado = `($${e.price.toLocaleString()})`;
      return `- ${e.name} ${precioMostrado}`;
    })
    .join("\n");

  const mensaje = `¡Hola! 👋 Coticé mi banquete en su página web:

📍 *Paquete Seleccionado:* ${NOMBRES_MENU[menu]}
👥 *Número de Personas:* ${personas}
✨ *Servicios Adicionales:*
${extrasSeleccionados || "- Ninguno"}

💰 *Total estimado:* $${total.toLocaleString('es-MX')} MXN

¿Tienen disponibilidad para mi evento?`;

  const url = `https://wa.me/522462132732?text=${encodeURIComponent(mensaje)}`;
  trackWhatsAppClick("Cotizador Banquetes", url);
  window.open(url, "_blank");
};

  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden grid md:grid-cols-2">
        
        {/* PANEL DE CONTROL */}
        <div className="p-8 md:p-12 space-y-10">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2 flex items-center gap-3">
              <Calculator className="text-[#D35400] w-8 h-8"/> Cotizador al Instante
            </h2>
            <p className="text-gray-500 text-sm">Personaliza tu evento y obtén un presupuesto real y transparente.</p>
          </div>

          {/* 1. Selección de Menú */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">1. Selecciona tu Banquete</label>
            <div className="grid grid-cols-1 gap-3">
              {(Object.keys(PRECIOS_MENU) as Array<keyof typeof PRECIOS_MENU>).map((type) => (
                <button
                  key={type}
                  onClick={() => setMenu(type)}
                  className={`p-4 rounded-2xl border-2 transition-all flex justify-between items-center ${menu === type ? "border-[#D35400] bg-orange-50 shadow-md" : "border-gray-100 bg-white hover:border-gray-200"}`}
                >
                  <span className="font-bold text-[#5C4033]">{NOMBRES_MENU[type]}</span>
                  <span className="font-bold text-[#D35400]">${PRECIOS_MENU[type]} p/p</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Número de Personas (Rango 50-100) */}
          <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex justify-between">
              2. Total de Invitados <span className="text-[#D35400] text-sm">{personas} personas</span>
            </label>
            <input 
              type="range" min="50" max="100" step="10" 
              value={personas}
              onChange={(e) => setPersonas(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D35400] mt-4"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-bold px-1 mt-2">
              <span>MIN 50</span>
              <span>MAX 100</span>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2 italic">Calculado en {Math.ceil(personas / 10)} mesas de 10 personas.</p>
          </div>

          {/* 3. Servicios Extras con Precios Visibles */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">3. Servicios Adicionales (Opcionales)</label>
            <div className="grid grid-cols-2 gap-3">
              {EXTRAS.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-28 ${serviciosExtras.includes(extra.id) ? "bg-[#5C4033] border-[#5C4033] text-white shadow-lg" : "bg-white border-gray-200 text-gray-600 hover:border-[#D35400]/50"}`}
                >
                  <extra.icon className={`w-5 h-5 ${serviciosExtras.includes(extra.id) ? "text-orange-300" : "text-[#D35400]"}`} />
                  <div>
                    <span className="text-xs font-bold block leading-tight">{extra.name}</span>
                    <span className={`text-[10px] ${serviciosExtras.includes(extra.id) ? "text-white/80" : "text-[#D35400] font-semibold"}`}>
                      {extra.type === "por_persona" && `+$${extra.price} c/u`}
                      {extra.type === "por_mesa" && `+$${extra.price} p/mesa`}
                      {extra.type === "fijo" && `+$${extra.price.toLocaleString()}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PANEL DE RESULTADO (RESUMEN) */}
        <div className="bg-[#FAF9F6] p-8 md:p-12 flex flex-col justify-center items-center text-center border-l border-gray-100">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
             <MessageCircle className="w-10 h-10 text-[#25D366]" />
          </div>
          <h3 className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-2">Presupuesto Estimado</h3>
          <div className="text-5xl md:text-6xl font-serif font-bold text-[#5C4033] mb-4">
            ${total.toLocaleString('es-MX')}
          </div>
          <p className="text-gray-500 text-sm mb-10 max-w-[250px]">
            Incluye el paquete <span className="font-bold text-[#D35400]">{NOMBRES_MENU[menu]}</span> para <span className="font-bold text-[#D35400]">{personas} personas</span> y {serviciosExtras.length} servicios adicionales.
          </p>

          <button 
            onClick={generarWhatsApp}
            className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Enviar Cotización por WA
          </button>
          <p className="mt-6 text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
            * Cabaña María María - Sujeto a disponibilidad de fecha
          </p>
        </div>

      </div>
    </div>
  );
}
