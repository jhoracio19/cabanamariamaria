// Aislado en su propio archivo (sin `server-only` ni `next/headers`) para
// que tanto el middleware (Edge runtime) como lib/session.ts (Node runtime)
// puedan importarlo sin arrastrar dependencias incompatibles entre sí.
export const SESSION_COOKIE_NAME = "admin_session";
