import { redirect } from "next/navigation";
import { getSession, destroySession } from "@/lib/session";
import { AdminHeader } from "@/components/admin/admin-header";

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
      <AdminHeader email={session.email} logout={logout} />
      <main className="container mx-auto px-4 lg:px-8 py-10 flex-1">
        {children}
      </main>
      <footer className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-center sm:text-left text-xs text-gray-400">
          <span>
            © {new Date().getFullYear()} Cabaña María María — Panel interno,
            no indexado.
          </span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D35400] transition-colors font-medium"
          >
            Ver sitio público ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
