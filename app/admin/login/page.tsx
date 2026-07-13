"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-4">
      <form
        action={formAction}
        className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 w-full max-w-sm space-y-5"
      >
        <div className="text-center mb-2">
          <h1 className="font-serif text-2xl font-bold text-[#5C4033]">
            Panel de Invitaciones
          </h1>
          <p className="text-sm text-gray-500 mt-1">Cabaña María María</p>
        </div>

        {state?.error && (
          <p className="text-red-600 text-sm text-center bg-red-50 border border-red-100 rounded-lg px-4 py-2">
            {state.error}
          </p>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#2D3748]">
            Correo
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#2D3748]">
            Contraseña
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D35400]/40"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#D35400] hover:bg-[#a84300] text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60"
        >
          {isPending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
