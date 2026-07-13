"use server";

import { redirect } from "next/navigation";
import {
  saveInvitacion,
  invitacionExists,
  uploadCoverImage,
} from "@/lib/blob-store";

export interface NuevaInvitacionState {
  error?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export async function crearInvitacionAction(
  _prevState: NuevaInvitacionState | undefined,
  formData: FormData,
): Promise<NuevaInvitacionState> {
  const host = String(formData.get("host") || "").trim();
  const celebrant = String(formData.get("celebrant") || "").trim();
  const eventOrder = String(formData.get("eventOrder") || "").trim();
  const dressCode = String(formData.get("dressCode") || "").trim();
  const hostPhoneRaw = String(formData.get("hostPhone") || "").trim();
  const themeColor = String(formData.get("themeColor") || "#D35400").trim();
  const customMessage = String(formData.get("customMessage") || "").trim();
  const datetimeLocal = String(formData.get("datetime") || "");
  const idInput = String(formData.get("id") || "").trim();
  const coverFile = formData.get("coverImage");

  if (
    !host ||
    !celebrant ||
    !eventOrder ||
    !dressCode ||
    !hostPhoneRaw ||
    !datetimeLocal
  ) {
    return { error: "Completa todos los campos obligatorios." };
  }

  const id = slugify(idInput || `${celebrant}-${eventOrder}`);
  if (!id) {
    return {
      error: "No se pudo generar un identificador válido para el link, ajusta el nombre.",
    };
  }

  if (await invitacionExists(id)) {
    return {
      error: "Ya existe una invitación con ese identificador. Usa uno distinto.",
    };
  }

  const targetDate = new Date(datetimeLocal);
  if (Number.isNaN(targetDate.getTime())) {
    return { error: "La fecha y hora no son válidas." };
  }

  const date = targetDate.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = targetDate.toLocaleTimeString("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const digitsOnly = hostPhoneRaw.replace(/\D/g, "");
  const hostPhone = digitsOnly.startsWith("52") ? digitsOnly : `52${digitsOnly}`;

  let coverImageUrl: string | undefined;
  if (coverFile instanceof File && coverFile.size > 0) {
    coverImageUrl = await uploadCoverImage(id, coverFile);
  }

  await saveInvitacion({
    id,
    host,
    celebrant,
    eventOrder,
    date,
    time,
    targetDate: targetDate.toISOString(),
    dressCode,
    hostPhone,
    themeColor,
    coverImageUrl,
    customMessage: customMessage || undefined,
    createdAt: new Date().toISOString(),
  });

  redirect("/admin");
}
