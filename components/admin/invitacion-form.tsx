"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import type { Invitacion } from "@/lib/blob-store";
import { toDatetimeLocalValue, formatFromDatetimeLocal } from "@/lib/invitacion-form";
import { InvitationCard, type InvitationCardData } from "@/components/invitation-card";

interface FormState {
  error?: string;
}

interface InvitacionFormProps {
  mode: "crear" | "editar";
  action: (
    prevState: FormState | undefined,
    formData: FormData,
  ) => Promise<FormState>;
  initialData?: Invitacion;
}

export function InvitacionForm({
  mode,
  action,
  initialData,
}: InvitacionFormProps) {
  const [state, formAction, isPending] = useActionState(action, {});

  const [host, setHost] = useState(initialData?.host || "");
  const [celebrant, setCelebrant] = useState(initialData?.celebrant || "");
  const [eventOrder, setEventOrder] = useState(initialData?.eventOrder || "");
  const [dressCode, setDressCode] = useState(initialData?.dressCode || "");
  const [hostPhone, setHostPhone] = useState(initialData?.hostPhone || "");
  const [themeColor, setThemeColor] = useState(
    initialData?.themeColor || "#D35400",
  );
  const [customMessage, setCustomMessage] = useState(
    initialData?.customMessage || "",
  );
  const [datetime, setDatetime] = useState(
    initialData ? toDatetimeLocalValue(initialData.targetDate) : "",
  );
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | undefined>(
    initialData?.coverImageUrl,
  );
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    if (file) {
      const url = URL.createObjectURL(file);
      objectUrlRef.current = url;
      setCoverPreviewUrl(url);
    } else {
      setCoverPreviewUrl(initialData?.coverImageUrl);
    }
  }

  const formattedDate = formatFromDatetimeLocal(datetime);

  const previewData: InvitationCardData = {
    host: host || "Familia López",
    celebrant: celebrant || "Nombre y Nombre",
    eventOrder: eventOrder || "Tu Evento",
    date: formattedDate?.date || "Elige una fecha",
    time: formattedDate?.time || "",
    targetDate:
      formattedDate?.targetDate ||
      new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    dressCode: dressCode || "Casual",
    hostPhone: hostPhone || "5215555555555",
    themeColor,
    coverImageUrl: coverPreviewUrl,
    customMessage: customMessage || undefined,
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <form
        action={formAction}
        className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6"
      >
        {state?.error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-2">
            {state.error}
          </p>
        )}

        {mode === "editar" && initialData ? (
          <>
            <input type="hidden" name="id" value={initialData.id} />
            <p className="text-xs text-gray-400">
              Link (no se puede cambiar):{" "}
              <span className="font-medium text-gray-500">
                cabanamariamaria.com/invitacion/{initialData.id}
              </span>
            </p>
          </>
        ) : (
          <Field
            label="Identificador para el link (opcional, se genera solo)"
            name="id"
            placeholder="sofia-diego-boda"
          />
        )}

        <Field
          label="Anfitrión"
          name="host"
          placeholder="Familia González"
          value={host}
          onChange={setHost}
          required
        />
        <Field
          label="Celebrante(s)"
          name="celebrant"
          placeholder="Sofía & Diego"
          value={celebrant}
          onChange={setCelebrant}
          required
        />
        <Field
          label="Tipo de evento / título"
          name="eventOrder"
          placeholder="Nuestra Boda"
          value={eventOrder}
          onChange={setEventOrder}
          required
        />

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            Fecha y hora *
          </label>
          <input
            type="datetime-local"
            name="datetime"
            required
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
          />
        </div>

        <Field
          label="Código de vestimenta"
          name="dressCode"
          placeholder="Formal"
          value={dressCode}
          onChange={setDressCode}
          required
        />
        <Field
          label="Teléfono de WhatsApp para confirmar asistencia"
          name="hostPhone"
          placeholder="2461234567"
          value={hostPhone}
          onChange={setHostPhone}
          required
        />

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            Color del tema
          </label>
          <input
            type="color"
            name="themeColor"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
            className="h-10 w-20 rounded-lg border border-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            {initialData?.coverImageUrl
              ? "Reemplazar foto de portada (opcional)"
              : "Foto de portada (opcional)"}
          </label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleCoverChange}
            className="w-full text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">
            {initialData?.coverImageUrl
              ? "Si no subes una nueva, se conserva la actual."
              : "Si no subes una, se usa el color del tema como fondo del encabezado."}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            Mensaje o frase personalizada (opcional)
          </label>
          <textarea
            name="customMessage"
            rows={3}
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
            placeholder="Una frase especial para tus invitados..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#D35400] hover:bg-[#a84300] text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60"
        >
          {isPending
            ? mode === "crear"
              ? "Creando..."
              : "Guardando..."
            : mode === "crear"
              ? "Crear invitación"
              : "Guardar cambios"}
        </button>
      </form>

      <div className="lg:sticky lg:top-24">
        <p className="text-xs font-bold text-[#5C4033] uppercase tracking-widest mb-3">
          Así se va viendo tu invitación
        </p>
        <div className="max-h-[80vh] overflow-y-auto rounded-3xl">
          <InvitationCard event={previewData} />
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2D3748] mb-1">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
      />
    </div>
  );
}
