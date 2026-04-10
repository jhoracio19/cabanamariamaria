import { Facebook, Instagram, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "#beneficios", label: "Por qué elegirnos" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/cabanamariamaria",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/cabanamariamaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://wa.me/522462132732",
    icon: MessageCircle,
    label: "WhatsApp",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#5C4033] text-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Columna 1: Identidad */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold tracking-tight">
              Cabaña María María
            </h3>
            <p className="text-[#FAF9F6]/70 leading-relaxed text-lg font-sans">
              El lugar perfecto para tus eventos especiales en Tlaxcala.
              Calidez, elegancia y un servicio que te permite disfrutar como un
              invitado más.
            </p>
            {/* Redes Sociales con hover naranja */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D35400] hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF9F6]/70 hover:text-[#D35400] transition-colors text-lg font-sans flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#D35400] group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Datos de Contacto */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Contacto
            </h4>
            <address className="not-italic space-y-4 text-[#FAF9F6]/70 text-lg font-sans">
              <p className="hover:text-white transition-colors cursor-default">
                Privada el Palmar #5
                <br />
                La Trinidad Tepehitec, Tlaxcala
              </p>
              <a
                href="tel:+522462132732"
                className="block text-[#D35400] font-bold hover:underline transition-all"
              >
                +52 246 213 2732
              </a>
            </address>
          </div>
        </div>

        {/* Barra Inferior y Branding JH Dev Agency */}
        <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#FAF9F6]/40">
          <p className="font-sans">
            © {new Date().getFullYear()} Cabaña María María. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </a>
            <span className="hidden md:inline text-white/10">|</span>
            <p className="font-sans font-medium tracking-wide">
              Desarrollado por{" "}
              <a href="https://jhdevagency.com/">
                <span className="text-white font-bold">JH Dev Agency</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
