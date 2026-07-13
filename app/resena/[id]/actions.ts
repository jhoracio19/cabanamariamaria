"use server";

import { getInvitacion } from "@/lib/blob-store";
import { saveResena } from "@/lib/resena-store";

export interface EnviarResenaState {
  error?: string;
  enviada?: boolean;
}

export async function enviarResenaAction(
  _prevState: EnviarResenaState | undefined,
  formData: FormData,
): Promise<EnviarResenaState> {
  const invitacionId = String(formData.get("invitacionId") || "").trim();
  const authorName = String(formData.get("authorName") || "").trim();
  const ratingRaw = String(formData.get("rating") || "");
  const text = String(formData.get("text") || "").trim();
  // Campo trampa: si un bot lo llena, descartamos silenciosamente.
  const honeypot = String(formData.get("website") || "").trim();

  if (honeypot) {
    return { enviada: true };
  }

  if (!invitacionId || !authorName || !text) {
    return { error: "Completa tu nombre y tu reseña antes de enviar." };
  }

  const rating = Number(ratingRaw);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { error: "Selecciona una calificación de 1 a 5 estrellas." };
  }

  const invitacion = await getInvitacion(invitacionId);
  if (!invitacion) {
    return { error: "No pudimos identificar tu invitación. Contáctanos por WhatsApp." };
  }

  await saveResena({
    id: invitacionId,
    invitacionId,
    authorName,
    eventLabel: `${invitacion.eventOrder} de ${invitacion.celebrant}`,
    rating,
    text,
    status: "pendiente",
    createdAt: new Date().toISOString(),
  });

  return { enviada: true };
}
