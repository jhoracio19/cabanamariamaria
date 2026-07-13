"use server";

import { redirect } from "next/navigation";
import { verifyCredentials } from "@/lib/auth";
import { createSession } from "@/lib/session";

export interface LoginState {
  error?: string;
}

export async function loginAction(
  _prevState: LoginState | undefined,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    return { error: "Ingresa tu correo y contraseña." };
  }

  const user = await verifyCredentials(email, password);
  if (!user) {
    return { error: "Correo o contraseña incorrectos." };
  }

  await createSession(user.email);
  redirect("/admin");
}
