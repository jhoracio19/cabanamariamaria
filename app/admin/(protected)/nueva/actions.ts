"use server";

import { redirect } from "next/navigation";
import {
  saveInvitacion,
  invitacionExists,
  uploadCoverImage,
} from "@/lib/blob-store";
import { parseInvitacionForm, slugify } from "@/lib/invitacion-form";

export interface NuevaInvitacionState {
  error?: string;
}

export async function crearInvitacionAction(
  _prevState: NuevaInvitacionState | undefined,
  formData: FormData,
): Promise<NuevaInvitacionState> {
  const parsed = parseInvitacionForm(formData);
  if ("error" in parsed) return parsed;

  const idInput = String(formData.get("id") || "").trim();
  const coverFile = formData.get("coverImage");

  const id = slugify(idInput || `${parsed.celebrant}-${parsed.eventOrder}`);
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

  let coverImageUrl: string | undefined;
  if (coverFile instanceof File && coverFile.size > 0) {
    coverImageUrl = await uploadCoverImage(id, coverFile);
  }

  await saveInvitacion({
    id,
    ...parsed,
    coverImageUrl,
    createdAt: new Date().toISOString(),
  });

  redirect("/admin?creada=1");
}
