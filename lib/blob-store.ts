import { put, list, del } from "@vercel/blob";

const INVITACIONES_PREFIX = "invitaciones/data/";

export interface Invitacion {
  id: string;
  host: string;
  celebrant: string;
  eventOrder: string;
  date: string;
  time: string;
  targetDate: string;
  dressCode: string;
  hostPhone: string;
  themeColor: string;
  coverImageUrl?: string;
  customMessage?: string;
  createdAt: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`No se pudo leer el archivo en ${url}`);
  }
  return res.json();
}

export async function getInvitacion(id: string): Promise<Invitacion | null> {
  const pathname = `${INVITACIONES_PREFIX}${id}.json`;
  const { blobs } = await list({ prefix: pathname });
  const match = blobs.find((blob) => blob.pathname === pathname);
  if (!match) return null;
  return fetchJson<Invitacion>(match.url);
}

export async function invitacionExists(id: string): Promise<boolean> {
  const pathname = `${INVITACIONES_PREFIX}${id}.json`;
  const { blobs } = await list({ prefix: pathname });
  return blobs.some((blob) => blob.pathname === pathname);
}

export async function listInvitaciones(): Promise<Invitacion[]> {
  const { blobs } = await list({ prefix: INVITACIONES_PREFIX });
  const invitaciones = await Promise.all(
    blobs.map((blob) => fetchJson<Invitacion>(blob.url)),
  );
  return invitaciones.sort((a, b) => (a.targetDate < b.targetDate ? 1 : -1));
}

export async function saveInvitacion(data: Invitacion): Promise<void> {
  await put(`${INVITACIONES_PREFIX}${data.id}.json`, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function uploadCoverImage(
  id: string,
  file: File,
): Promise<string> {
  const extension = file.name.split(".").pop() || "jpg";
  const blob = await put(
    `invitaciones/covers/${id}-${Date.now()}.${extension}`,
    file,
    { access: "public", contentType: file.type },
  );
  return blob.url;
}

export async function deleteInvitacion(id: string): Promise<void> {
  const existing = await getInvitacion(id);
  const targets = [`${INVITACIONES_PREFIX}${id}.json`];
  if (existing?.coverImageUrl) {
    targets.push(existing.coverImageUrl);
  }
  await del(targets);
}
