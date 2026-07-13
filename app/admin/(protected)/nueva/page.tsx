import Link from "next/link";
import { InvitacionForm } from "@/components/admin/invitacion-form";
import { crearInvitacionAction } from "./actions";

export default function NuevaInvitacionPage() {
  return (
    <div className="max-w-2xl">
      <Link
        href="/admin"
        className="text-sm text-[#D35400] font-medium hover:underline mb-4 inline-block"
      >
        ← Volver al panel
      </Link>
      <h1 className="font-serif text-3xl font-bold text-[#5C4033] mb-8">
        Nueva invitación
      </h1>
      <InvitacionForm mode="crear" action={crearInvitacionAction} />
    </div>
  );
}
