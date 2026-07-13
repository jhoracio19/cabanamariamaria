"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { eliminarInvitacionAction } from "@/app/admin/(protected)/actions";

export function DeleteInvitacionButton({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        const confirmed = window.confirm(
          `¿Seguro que quieres eliminar la invitación "${label}"? Esta acción no se puede deshacer.`,
        );
        if (!confirmed) return;
        startTransition(() => {
          eliminarInvitacionAction(id);
        });
      }}
      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50"
    >
      <Trash2 className="w-3.5 h-3.5" />
      {isPending ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
