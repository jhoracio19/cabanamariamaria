"use client";

import { useActionState } from "react";
import { crearInvitacionAction, type NuevaInvitacionState } from "./actions";

const initialState: NuevaInvitacionState = {};

export default function NuevaInvitacionPage() {
  const [state, formAction, isPending] = useActionState(
    crearInvitacionAction,
    initialState,
  );

  return (
    <div className="max-w-2xl">
      <h1 className="font-serif text-3xl font-bold text-[#5C4033] mb-8">
        Nueva invitación
      </h1>

      <form
        action={formAction}
        className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6"
      >
        {state?.error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-2">
            {state.error}
          </p>
        )}

        <Field
          label="Identificador para el link (opcional, se genera solo)"
          name="id"
          placeholder="sofia-diego-boda"
        />
        <Field label="Anfitrión" name="host" placeholder="Familia González" required />
        <Field
          label="Celebrante(s)"
          name="celebrant"
          placeholder="Sofía & Diego"
          required
        />
        <Field
          label="Tipo de evento / título"
          name="eventOrder"
          placeholder="Nuestra Boda"
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
            className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
          />
        </div>

        <Field
          label="Código de vestimenta"
          name="dressCode"
          placeholder="Formal"
          required
        />
        <Field
          label="Teléfono de WhatsApp para confirmar asistencia"
          name="hostPhone"
          placeholder="2461234567"
          required
        />

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            Color del tema
          </label>
          <input
            type="color"
            name="themeColor"
            defaultValue="#D35400"
            className="h-10 w-20 rounded-lg border border-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            Foto de portada (opcional)
          </label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            className="w-full text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">
            Si no subes una, se usa el color del tema como fondo del encabezado.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D3748] mb-1">
            Mensaje o frase personalizada (opcional)
          </label>
          <textarea
            name="customMessage"
            rows={3}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
            placeholder="Una frase especial para tus invitados..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#D35400] hover:bg-[#a84300] text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60"
        >
          {isPending ? "Creando..." : "Crear invitación"}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
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
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
      />
    </div>
  );
}
