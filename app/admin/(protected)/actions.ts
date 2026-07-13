"use server";

import { revalidatePath } from "next/cache";
import { deleteInvitacion } from "@/lib/blob-store";

export async function eliminarInvitacionAction(id: string) {
  await deleteInvitacion(id);
  revalidatePath("/admin");
}
