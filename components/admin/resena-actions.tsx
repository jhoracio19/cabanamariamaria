"use client";

import { useTransition } from "react";
import {
  aprobarResenaAction,
  eliminarResenaAction,
} from "@/app/admin/(protected)/resenas/actions";

export function AprobarResenaButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => aprobarResenaAction(id))}
      className="text-green-600 hover:text-green-800 font-bold disabled:opacity-50"
    >
      {isPending ? "Aprobando..." : "Aprobar"}
    </button>
  );
}

export function EliminarResenaButton({
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
          `¿Eliminar la reseña de "${label}"? Esta acción no se puede deshacer.`,
        );
        if (!confirmed) return;
        startTransition(() => eliminarResenaAction(id));
      }}
      className="text-red-500 hover:text-red-700 font-medium disabled:opacity-50"
    >
      {isPending ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
