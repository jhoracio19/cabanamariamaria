"use client";

import { useActionState, useState } from "react";
import { Star } from "lucide-react";
import { enviarResenaAction, type EnviarResenaState } from "@/app/resena/[id]/actions";

const initialState: EnviarResenaState = {};

export function ResenaForm({
  invitacionId,
  defaultName,
  eventLabel,
  existingText,
  existingRating,
}: {
  invitacionId: string;
  defaultName: string;
  eventLabel: string;
  existingText?: string;
  existingRating?: number;
}) {
  const [state, formAction, isPending] = useActionState(
    enviarResenaAction,
    initialState,
  );
  const [rating, setRating] = useState(existingRating || 5);
  const [hoverRating, setHoverRating] = useState(0);

  if (state.enviada) {
    return (
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center space-y-3">
        <p className="text-4xl">💛</p>
        <h2 className="font-serif text-2xl font-bold text-[#5C4033]">
          ¡Gracias por tu reseña!
        </h2>
        <p className="text-gray-500">
          La revisaremos y en cuanto la aprobemos aparecerá en nuestra página.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 space-y-6"
    >
      <div className="text-center">
        <h1 className="font-serif text-2xl font-bold text-[#5C4033] mb-1">
          Cuéntanos tu experiencia
        </h1>
        <p className="text-sm text-gray-500">{eventLabel}</p>
      </div>

      {state.error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-2">
          {state.error}
        </p>
      )}

      <input type="hidden" name="invitacionId" value={invitacionId} />
      <input type="hidden" name="rating" value={rating} />
      {/* Campo trampa para bots: invisible para personas */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />

      <div>
        <label className="block text-sm font-medium text-[#2D3748] mb-1">
          Tu nombre *
        </label>
        <input
          name="authorName"
          defaultValue={defaultName}
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2D3748] mb-2">
          Calificación
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(value)}
              aria-label={`${value} estrellas`}
              className="p-1"
            >
              <Star
                className={`w-8 h-8 transition-colors ${
                  value <= (hoverRating || rating)
                    ? "fill-[#D35400] text-[#D35400]"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2D3748] mb-1">
          Tu reseña *
        </label>
        <textarea
          name="text"
          required
          rows={5}
          defaultValue={existingText}
          placeholder="¿Cómo fue tu experiencia con nosotros?"
          className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#D35400] hover:bg-[#a84300] text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60"
      >
        {isPending ? "Enviando..." : "Enviar reseña"}
      </button>
    </form>
  );
}
