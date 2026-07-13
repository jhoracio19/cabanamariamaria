"use server";

import { redirect } from "next/navigation";
import { getInvitacion, saveInvitacion, uploadCoverImage } from "@/lib/blob-store";
import { parseInvitacionForm } from "@/lib/invitacion-form";

export interface EditarInvitacionState {
  error?: string;
}

export async function actualizarInvitacionAction(
  _prevState: EditarInvitacionState | undefined,
  formData: FormData,
): Promise<EditarInvitacionState> {
  const id = String(formData.get("id") || "").trim();
  const existing = id ? await getInvitacion(id) : null;

  if (!existing) {
    return { error: "No se encontró la invitación que intentas editar." };
  }

  const parsed = parseInvitacionForm(formData);
  if ("error" in parsed) return parsed;

  const coverFile = formData.get("coverImage");
  let coverImageUrl = existing.coverImageUrl;
  if (coverFile instanceof File && coverFile.size > 0) {
    coverImageUrl = await uploadCoverImage(id, coverFile);
  }

  await saveInvitacion({
    ...existing,
    ...parsed,
    id,
    coverImageUrl,
  });

  redirect("/admin?actualizada=1");
}
