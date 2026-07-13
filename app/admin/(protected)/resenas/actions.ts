"use server";

import { revalidatePath } from "next/cache";
import { getResena, saveResena, deleteResena } from "@/lib/resena-store";

export async function aprobarResenaAction(id: string) {
  const resena = await getResena(id);
  if (!resena) return;
  await saveResena({ ...resena, status: "aprobada" });
  revalidatePath("/admin/resenas");
  revalidatePath("/");
  revalidatePath("/banquetes");
}

export async function eliminarResenaAction(id: string) {
  await deleteResena(id);
  revalidatePath("/admin/resenas");
  revalidatePath("/");
  revalidatePath("/banquetes");
}
