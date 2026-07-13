"use client";

import { useTransition } from "react";
import { Check, Trash2 } from "lucide-react";
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
      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors disabled:opacity-50"
    >
      <Check className="w-3.5 h-3.5" />
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
      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50"
    >
      <Trash2 className="w-3.5 h-3.5" />
      {isPending ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
