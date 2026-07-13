import { put, list, del } from "@vercel/blob";

const RESENAS_PREFIX = "resenas/data/";

export interface Resena {
  id: string;
  invitacionId: string;
  authorName: string;
  eventLabel: string;
  rating: number;
  text: string;
  status: "pendiente" | "aprobada";
  createdAt: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`No se pudo leer el archivo en ${url}`);
  }
  return res.json();
}

export async function getResena(id: string): Promise<Resena | null> {
  const pathname = `${RESENAS_PREFIX}${id}.json`;
  const { blobs } = await list({ prefix: pathname });
  const match = blobs.find((blob) => blob.pathname === pathname);
  if (!match) return null;
  return fetchJson<Resena>(match.url);
}

export async function listResenas(): Promise<Resena[]> {
  const { blobs } = await list({ prefix: RESENAS_PREFIX });
  const resenas = await Promise.all(
    blobs.map((blob) => fetchJson<Resena>(blob.url)),
  );
  return resenas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function listResenasAprobadas(): Promise<Resena[]> {
  const resenas = await listResenas();
  return resenas.filter((r) => r.status === "aprobada");
}

export async function saveResena(data: Resena): Promise<void> {
  await put(`${RESENAS_PREFIX}${data.id}.json`, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function deleteResena(id: string): Promise<void> {
  await del(`${RESENAS_PREFIX}${id}.json`);
}
