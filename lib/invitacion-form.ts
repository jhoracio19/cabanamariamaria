// Lógica de parseo/validación compartida entre crear y editar una
// invitación, para no duplicarla en cada Server Action.

export interface ParsedInvitacionFields {
  host: string;
  celebrant: string;
  eventOrder: string;
  dressCode: string;
  hostPhone: string;
  themeColor: string;
  customMessage?: string;
  date: string;
  time: string;
  targetDate: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export interface FormattedDateTime {
  date: string;
  time: string;
  targetDate: string;
}

// Compartido entre el parseo del Server Action y la vista previa en vivo
// del formulario, para que ambos formateen la fecha exactamente igual.
export function formatFromDatetimeLocal(
  datetimeLocal: string,
): FormattedDateTime | null {
  const targetDate = new Date(datetimeLocal);
  if (!datetimeLocal || Number.isNaN(targetDate.getTime())) return null;

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

  return { date, time, targetDate: targetDate.toISOString() };
}

export function parseInvitacionForm(
  formData: FormData,
): ParsedInvitacionFields | { error: string } {
  const host = String(formData.get("host") || "").trim();
  const celebrant = String(formData.get("celebrant") || "").trim();
  const eventOrder = String(formData.get("eventOrder") || "").trim();
  const dressCode = String(formData.get("dressCode") || "").trim();
  const hostPhoneRaw = String(formData.get("hostPhone") || "").trim();
  const themeColor = String(formData.get("themeColor") || "#D35400").trim();
  const customMessage = String(formData.get("customMessage") || "").trim();
  const datetimeLocal = String(formData.get("datetime") || "");

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

  const formattedDate = formatFromDatetimeLocal(datetimeLocal);
  if (!formattedDate) {
    return { error: "La fecha y hora no son válidas." };
  }

  const digitsOnly = hostPhoneRaw.replace(/\D/g, "");
  const hostPhone = digitsOnly.startsWith("52") ? digitsOnly : `52${digitsOnly}`;

  return {
    host,
    celebrant,
    eventOrder,
    dressCode,
    hostPhone,
    themeColor,
    customMessage: customMessage || undefined,
    ...formattedDate,
  };
}

export function toDatetimeLocalValue(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
