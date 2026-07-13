"use client";

import { useActionState } from "react";
import type { Invitacion } from "@/lib/blob-store";
import { toDatetimeLocalValue } from "@/lib/invitacion-form";

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

  return (
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
        defaultValue={initialData?.host}
        required
      />
      <Field
        label="Celebrante(s)"
        name="celebrant"
        placeholder="Sofía & Diego"
        defaultValue={initialData?.celebrant}
        required
      />
      <Field
        label="Tipo de evento / título"
        name="eventOrder"
        placeholder="Nuestra Boda"
        defaultValue={initialData?.eventOrder}
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
          defaultValue={
            initialData ? toDatetimeLocalValue(initialData.targetDate) : undefined
          }
          className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
        />
      </div>

      <Field
        label="Código de vestimenta"
        name="dressCode"
        placeholder="Formal"
        defaultValue={initialData?.dressCode}
        required
      />
      <Field
        label="Teléfono de WhatsApp para confirmar asistencia"
        name="hostPhone"
        placeholder="2461234567"
        defaultValue={initialData?.hostPhone}
        required
      />

      <div>
        <label className="block text-sm font-medium text-[#2D3748] mb-1">
          Color del tema
        </label>
        <input
          type="color"
          name="themeColor"
          defaultValue={initialData?.themeColor || "#D35400"}
          className="h-10 w-20 rounded-lg border border-gray-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2D3748] mb-1">
          {initialData?.coverImageUrl
            ? "Reemplazar foto de portada (opcional)"
            : "Foto de portada (opcional)"}
        </label>
        {initialData?.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={initialData.coverImageUrl}
            alt="Portada actual"
            className="w-full h-32 object-cover rounded-xl mb-3 border border-gray-100"
          />
        )}
        <input
          type="file"
          name="coverImage"
          accept="image/*"
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
          defaultValue={initialData?.customMessage}
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
  );
}

function Field({
  label,
  name,
  placeholder,
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
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
        defaultValue={defaultValue}
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
      />
    </div>
  );
}
