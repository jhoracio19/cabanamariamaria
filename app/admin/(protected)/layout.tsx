import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession, destroySession } from "@/lib/session";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  async function logout() {
    "use server";
    await destroySession();
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <header className="bg-[#5C4033] text-white">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-serif font-bold shrink-0">
              Panel — Cabaña María María
            </span>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/admin" className="text-white/80 hover:text-white transition-colors">
                Invitaciones
              </Link>
              <Link href="/admin/resenas" className="text-white/80 hover:text-white transition-colors">
                Reseñas
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/70 hidden sm:inline">
              {session.email}
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="hover:text-[#D35400] transition-colors font-medium"
              >
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 lg:px-8 py-10 flex-1">
        {children}
      </main>
      <footer className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
          <span>
            © {new Date().getFullYear()} Cabaña María María — Panel interno,
            no indexado.
          </span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D35400] transition-colors"
          >
            Ver sitio público ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
