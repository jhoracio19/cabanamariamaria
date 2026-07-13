import BanqueteCotizador from "@/components/BanqueteCotizador";
import { Check, Utensils, GlassWater, Sparkles, ChefHat, Soup, Beef, Drumstick, Clock } from "lucide-react";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import Services from "@/app/(main)/banquetes/components/Services";
import Testimonials from "@/app/(main)/banquetes/components/Testimonials";
import TaquizaTradicional from "./components/TaquizaTradicional";
import BuffetCatering from "./components/BuffetCatering";
import MenuTradicional from "./components/MenuTradicional";
import Gourmet from "./components/Gourmet";
import CustomMenu from "./components/CustomMenu";


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

      <Services />

      <TaquizaTradicional />

      <MenuTradicional />

      <Gourmet />

      <CustomMenu />

      <Testimonials />

      <BanqueteCotizador />

      {/* CTA FINAL */}
      <div className="max-w-2xl mx-auto text-center">
        <WhatsAppCTA 
          href={whatsappLink} 
          ubicacion="Página Banquetes - CTA Final"
          className="inline-flex items-center gap-3 bg-[#D35400] text-white font-bold px-10 py-5 rounded-full text-xl hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          Apartar Fecha por WhatsApp
        </WhatsAppCTA>
      </div>

    </div>
  );
}
