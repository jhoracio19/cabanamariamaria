"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageSquareText, Menu, X, LogOut } from "lucide-react";

const navLinks = [
  { href: "/admin", label: "Invitaciones", icon: Mail },
  { href: "/admin/resenas", label: "Reseñas", icon: MessageSquareText },
];

export function AdminHeader({
  email,
  logout,
}: {
  email: string;
  logout: () => Promise<void>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#5C4033] text-white relative z-50">
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 min-w-0">
          <span className="font-serif font-bold shrink-0 truncate">
            Panel — Cabaña María María
          </span>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm shrink-0">
          <span className="text-white/70">{email}</span>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center gap-1.5 hover:text-[#D35400] transition-colors font-medium"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden p-2 -mr-2"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#5C4033] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2.5 text-white/90 font-medium"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-white/60 text-xs truncate">{email}</span>
            <form action={logout}>
              <button
                type="submit"
                className="flex items-center gap-1.5 text-sm text-[#D35400] font-bold"
              >
                <LogOut className="w-4 h-4" />
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
