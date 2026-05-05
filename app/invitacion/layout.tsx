import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function InvitacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      
      {/* HEADER MINIMALISTA Y ELEGANTE */}
      <header className="w-full py-5 flex justify-center items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#5C4033]/5 shadow-sm">
        <Link 
          href="/" 
          target="_blank"
          className="flex items-center gap-2 group"
        >
          <Sparkles className="w-4 h-4 text-[#D35400] opacity-50 group-hover:opacity-100 transition-opacity" />
          <span className="font-serif text-lg md:text-xl font-bold text-[#5C4033] tracking-wide group-hover:text-[#D35400] transition-colors">
            Cabaña María María
          </span>
          <Sparkles className="w-4 h-4 text-[#D35400] opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
      </header>

      {/* CONTENIDO DE LA INVITACIÓN (Aquí se inyecta tu page.tsx) */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER SUTIL DE FIRMA (Publicidad orgánica) */}
      <footer className="w-full py-8 bg-white border-t border-[#5C4033]/10 mt-auto">
        <div className="container mx-auto px-4 text-center flex flex-col items-center gap-3">
          <p className="text-sm text-gray-500 font-serif italic">
            Estás invitado a un evento exclusivo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs text-gray-400">
            <span>© {new Date().getFullYear()} Cabaña María María</span>
            <span className="hidden md:inline">•</span>
            <span>
              Desarrollador por{" "}
              <a 
                href="https://jhdevagency.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-[#5C4033] hover:text-[#D35400] transition-colors"
              >
                JH Dev Agency
              </a>
            </span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}