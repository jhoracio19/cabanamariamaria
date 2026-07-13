import bcrypt from "bcryptjs";

interface AdminUser {
  email: string;
  passwordHash: string;
}

// Las cuentas del panel viven en la variable de entorno ADMIN_USERS_JSON
// (nunca en el repositorio ni en almacenamiento público) para no exponer
// los hashes de contraseña a través de una URL. Agregar una persona nueva
// significa actualizar esa variable en Vercel, no tocar código.
function getAdminUsers(): AdminUser[] {
  const raw = process.env.ADMIN_USERS_JSON;
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function verifyCredentials(
  email: string,
  password: string,
): Promise<{ email: string } | null> {
  const users = getAdminUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
  );
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.passwordHash);
  return isValid ? { email: user.email } : null;
}
