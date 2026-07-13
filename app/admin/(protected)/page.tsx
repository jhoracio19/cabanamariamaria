import Link from "next/link";
import { listInvitaciones } from "@/lib/blob-store";

export default async function AdminDashboardPage() {
  const invitaciones = await listInvitaciones();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#5C4033]">
          Invitaciones
        </h1>
        <Link
          href="/admin/nueva"
          className="bg-[#D35400] hover:bg-[#a84300] text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          + Nueva invitación
        </Link>
      </div>

      {invitaciones.length === 0 ? (
        <p className="text-gray-500">Aún no has creado ninguna invitación.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
          {invitaciones.map((inv) => (
            <div
              key={inv.id}
              className="flex flex-wrap items-center justify-between gap-4 p-5"
            >
              <div>
                <p className="font-serif font-bold text-[#5C4033]">
                  {inv.eventOrder} — {inv.celebrant}
                </p>
                <p className="text-sm text-gray-500">
                  {inv.date} · {inv.host}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <a
                  href={`/invitacion/${inv.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D35400] font-bold hover:underline"
                >
                  Ver invitación ↗
                </a>
                <span className="text-gray-300">|</span>
                <span className="text-gray-400 select-all">
                  {`cabanamariamaria.com/invitacion/${inv.id}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
