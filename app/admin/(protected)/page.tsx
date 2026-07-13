import Link from "next/link";
import { Eye, Pencil, MessageCircleHeart } from "lucide-react";
import { listInvitaciones } from "@/lib/blob-store";
import { DeleteInvitacionButton } from "@/components/admin/delete-invitacion-button";

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ creada?: string; actualizada?: string }>;
}) {
  const [invitaciones, params] = await Promise.all([
    listInvitaciones(),
    searchParams,
  ]);

  return (
    <div>
      {params.creada && (
        <p className="bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl px-4 py-3 mb-6">
          Invitación creada correctamente.
        </p>
      )}
      {params.actualizada && (
        <p className="bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl px-4 py-3 mb-6">
          Invitación actualizada correctamente.
        </p>
      )}

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
              <div className="flex items-center gap-4 min-w-0">
                {inv.coverImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={inv.coverImageUrl}
                    alt=""
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-100"
                  />
                ) : (
                  <div
                    className="w-14 h-14 rounded-xl shrink-0 border border-gray-100"
                    style={{ backgroundColor: inv.themeColor }}
                  />
                )}
                <div className="min-w-0">
                  <p className="font-serif font-bold text-[#5C4033] truncate">
                    {inv.eventOrder} — {inv.celebrant}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {inv.date} · {inv.host}
                  </p>
                  <p className="text-xs text-gray-400 select-all truncate">
                    {`cabanamariamaria.com/invitacion/${inv.id}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <a
                  href={`/invitacion/${inv.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-[#D35400]/10 text-[#D35400] hover:bg-[#D35400]/20 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Ver
                </a>
                <Link
                  href={`/admin/${inv.id}/editar`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-[#5C4033]/10 text-[#5C4033] hover:bg-[#5C4033]/20 transition-colors"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  Editar
                </Link>
                <a
                  href={`https://wa.me/${inv.hostPhone}?text=${encodeURIComponent(
                    `¡Hola ${inv.host}! 💛 Nos encantaría conocer tu experiencia en tu evento. ¿Nos regalas una reseña? cabanamariamaria.com/resena/${inv.id}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                >
                  <MessageCircleHeart className="w-3.5 h-3.5" />
                  Pedir reseña
                </a>
                <DeleteInvitacionButton
                  id={inv.id}
                  label={`${inv.eventOrder} — ${inv.celebrant}`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
