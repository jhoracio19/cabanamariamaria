import { Facebook, Instagram, MessageCircle } from "lucide-react"

const quickLinks = [
  { href: "#beneficios", label: "Por qué elegirnos" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/522462132732", icon: MessageCircle, label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Cabaña María María
            </h3>
            <p className="text-secondary-foreground/70 leading-relaxed mb-4">
              El lugar perfecto para tus eventos especiales en Tlaxcala. 
              Bodas, XV años, bautizos y más.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <address className="not-italic space-y-3 text-secondary-foreground/70">
              <p>Privada el Palmar #5</p>
              <p>La Trinidad Tepehitec, Tlaxcala</p>
              <a 
                href="tel:+522462132732" 
                className="block hover:text-primary transition-colors"
              >
                +52 246 213 2732
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Cabaña María María. Todos los derechos reservados.</p>
          <a 
            href="#" 
            className="hover:text-secondary-foreground transition-colors"
          >
            Aviso de Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
