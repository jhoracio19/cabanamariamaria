"use client";

import { useTransition } from "react";
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
      className="text-red-500 hover:text-red-700 font-medium disabled:opacity-50"
    >
      {isPending ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
