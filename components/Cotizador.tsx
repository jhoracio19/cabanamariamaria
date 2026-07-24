"use client";

import { useState } from "react";
import { Users, CalendarCheck, Info, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/lib/analytics";
import { track } from "@vercel/analytics/react";

const PRECIOS_RENTA: Record<number, number> = {
  50: 3500,
  60: 3600,
  70: 3700,
  80: 3800,
  90: 3900,
  100: 4000,
};

// Mesas con sillas incluidas: se agregan por cantidad (ya no van incluidas según el número de invitados)
const MESAS_EXTRAS = [
  { id: "mesaRectangularRedonda", nombre: "Mesa rectangular o redonda con 10 sillas (acojinable)", precio: 150 },
  { id: "mesaCuadrada", nombre: "Mesa cuadrada con 12 sillas", precio: 400 },
];

const SERVICIOS_EXTRAS = [
  { id: "trinche", nombre: "Loza: Plato trinche", precio: 5, tipo: "por_persona" },
  { id: "sopero", nombre: "Loza: Plato sopero", precio: 5, tipo: "por_persona" },
  { id: "base", nombre: "Loza: Plato base", precio: 5, tipo: "por_persona" },
  { id: "cubiertos", nombre: "Juego de cubiertos", precio: 5, tipo: "por_persona" },
  { id: "vaso", nombre: "Vaso de vidrio", precio: 2, tipo: "por_persona" },
  { id: "tiffany", nombre: "Silla Tiffany", precio: 30, tipo: "por_persona" },
  { id: "servilletas", nombre: "Servilletas de tela", precio: 5, tipo: "por_persona" },
  { id: "mantel", nombre: "Mantel para tus mesas", precio: 50, tipo: "por_mesa" },
  { id: "sobremantel", nombre: "Sobre mantel para tus mesas", precio: 50, tipo: "por_mesa" },
  { id: "dj", nombre: "DJ", precio: 4800, tipo: "fijo" },
  { id: "inflable", nombre: "Inflable", precio: 900, tipo: "fijo" },
  { id: "rockola", nombre: "Rockola", precio: 1800, tipo: "fijo" },
  { id: "montaje", nombre: "Montaje y desmontaje", precio: 500, tipo: "fijo" },
  { id: "horario", nombre: "Actividades fuera de horario", precio: 300, tipo: "fijo" },
];

const WHATSAPP_CONTACTO = "522462132732";

export function Cotizador() {
  const [personas, setPersonas] = useState<number>(50);
  const [extrasSeleccionados, setExtrasSeleccionados] = useState<string[]>([]);
  const [mesasExtras, setMesasExtras] = useState<Record<string, number>>({
    mesaRectangularRedonda: 0,
    mesaCuadrada: 0,
  });

  const toggleExtra = (id: string) => {
    setExtrasSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cambiarCantidadMesa = (id: string, delta: number) => {
    setMesasExtras((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const precioBase = PRECIOS_RENTA[personas];

  const totalMesasExtra = Object.values(mesasExtras).reduce((total, cantidad) => total + cantidad, 0);

  const costoMesas = MESAS_EXTRAS.reduce(
    (total, mesa) => total + mesa.precio * (mesasExtras[mesa.id] || 0),
    0
  );

  // Los items "por_mesa" (mantel, sobremantel) se cobran según las mesas extra agregadas arriba
  const costoExtras = extrasSeleccionados.reduce((total, idExtra) => {
    const extra = SERVICIOS_EXTRAS.find((e) => e.id === idExtra);
    if (!extra) return total;

    if (extra.tipo === "por_persona") {
      return total + (extra.precio * personas);
    } else if (extra.tipo === "por_mesa") {
      return total + (extra.precio * totalMesasExtra);
    } else {
      return total + extra.precio;
    }
  }, 0);

  const precioTotal = precioBase + costoMesas + costoExtras;

const enviarWhatsApp = () => {
  // Rastrear en Vercel Analytics
  track('Cotizar_Renta_Salon', {
    personas,
    total: precioTotal,
    mesasExtra: totalMesasExtra,
    extras: extrasSeleccionados.join(", ")
  });

  // Rastrear en Google Analytics 4
// Rastrear en Google Analytics 4
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'cotizacion_completada', {
    'event_category': 'engagement',
    'event_label': 'renta_salon',
    'value': precioTotal,
    'personas': personas,
    'cantidad_extras': extrasSeleccionados.length
  });
}

  const nombresMesas = MESAS_EXTRAS
    .filter((mesa) => (mesasExtras[mesa.id] || 0) > 0)
    .map((mesa) => `${mesasExtras[mesa.id]}x ${mesa.nombre}`);

  const nombresExtras = extrasSeleccionados.map((id) => {
    return SERVICIOS_EXTRAS.find((e) => e.id === id)?.nombre;
  });

  const todosLosExtras = [...nombresMesas, ...nombresExtras].join(", ");

  const mensaje = `Hola, usé el cotizador web y me interesa rentar el salón.

👥 *Personas:* ${personas}
🍽️ *Extras seleccionados:* ${todosLosExtras || "Ninguno"}
💰 *Total aproximado:* $${precioTotal} MXN

¿Tienen fechas disponibles?`;

  const url = `https://wa.me/${WHATSAPP_CONTACTO}?text=${encodeURIComponent(mensaje)}`;
  trackWhatsAppClick("Cotizador Renta", url);
  window.open(url, "_blank");
};

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
      <div className="bg-[#D35400] p-6 text-center text-white">
        <h3 className="font-serif text-2xl font-bold">Cotiza tu Renta</h3>
        <p className="text-sm opacity-90 mt-1">Arma tu paquete y descubre tu precio al instante</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Slider de Personas */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center gap-2 font-bold text-gray-700">
              <Users className="w-5 h-5 text-[#D35400]" />
              Número de Invitados
            </label>
            <span className="bg-[#FAF9F6] text-[#D35400] font-bold py-1 px-3 rounded-full border border-[#D35400]/20">
              {personas}
            </span>
          </div>
          
          <input 
            type="range" 
            min="50" 
            max="100" 
            step="10" 
            value={personas}
            onChange={(e) => setPersonas(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D35400]"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
            <span>50 min</span>
            <span>100 máx</span>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Mesas Extra (cantidad) */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-4">
            <PlusCircle className="w-5 h-5 text-[#D35400]" />
            Mesas Extra (con sillas incluidas)
          </label>
          <div className="space-y-2">
            {MESAS_EXTRAS.map((mesa) => (
              <div
                key={mesa.id}
                className="flex items-center justify-between p-3 rounded-xl border border-gray-200"
              >
                <div>
                  <span className="text-sm font-medium text-gray-700 block">{mesa.nombre}</span>
                  <span className="text-xs text-gray-500">${mesa.precio} c/u</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => cambiarCantidadMesa(mesa.id, -1)}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D35400] hover:text-[#D35400]"
                  >
                    -
                  </button>
                  <span className="w-5 text-center font-bold text-gray-700">
                    {mesasExtras[mesa.id] || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() => cambiarCantidadMesa(mesa.id, 1)}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D35400] hover:text-[#D35400]"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Lista de Extras */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-4">
            <PlusCircle className="w-5 h-5 text-[#D35400]" />
            Servicios Extras
          </label>
          <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {SERVICIOS_EXTRAS.map((extra) => {
              const seleccionado = extrasSeleccionados.includes(extra.id);
              return (
                <label 
                  key={extra.id} 
                  className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    seleccionado ? "border-[#D35400] bg-[#FAF9F6]" : "border-gray-200 hover:border-[#D35400]/50"
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={seleccionado} 
                    onChange={() => toggleExtra(extra.id)} 
                  />
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                      seleccionado ? "bg-[#D35400] border-[#D35400]" : "border-gray-300 bg-white"
                    }`}>
                      {seleccionado && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{extra.nombre}</span>
                  </div>
                  {/* Etiqueta de precio dinámica según el tipo */}
                  <span className="text-xs text-gray-500 font-bold">
                    {extra.tipo === "por_mesa"
                      ? `+$${extra.precio * totalMesasExtra} (${totalMesasExtra} mesas)`
                      : `+$${extra.precio} ${extra.tipo === "por_persona" ? "c/u" : ""}`}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Resumen de Precio */}
        <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-gray-200">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Renta Base:</span>
            <span>${precioBase}</span>
          </div>
          {costoMesas > 0 && (
            <div className="flex justify-between text-sm text-[#D35400] mb-2">
              <span>Mesas Extra ({totalMesasExtra}):</span>
              <span>+ ${costoMesas}</span>
            </div>
          )}
          {costoExtras > 0 && (
            <div className="flex justify-between text-sm text-[#D35400] mb-2">
              <span>Extras ({extrasSeleccionados.length}):</span>
              <span>+ ${costoExtras}</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between items-center">
            <span className="font-bold text-gray-800">Total Estimado:</span>
            <span className="font-serif text-3xl font-bold text-[#D35400]">
              ${precioTotal}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-3 flex items-center gap-1">
            <Info className="w-3 h-3 flex-shrink-0" /> Precios sujetos a cambios. El total exacto se confirmará por WhatsApp.
          </p>
        </div>

        {/* Botón de Acción */}
        <Button 
          onClick={enviarWhatsApp}
          className="w-full bg-[#D35400] hover:bg-[#A84300] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <CalendarCheck className="w-5 h-5" />
          Reservar por WhatsApp
        </Button>
      </div>
    </div>
  );
}
