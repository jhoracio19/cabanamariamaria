import Link from "next/link";
import { notFound } from "next/navigation";
import { getInvitacion } from "@/lib/blob-store";
import { InvitacionForm } from "@/components/admin/invitacion-form";
import { actualizarInvitacionAction } from "./actions";

export default async function EditarInvitacionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invitacion = await getInvitacion(id);

  if (!invitacion) notFound();

  return (
    <div className="max-w-2xl">
      <Link
        href="/admin"
        className="text-sm text-[#D35400] font-medium hover:underline mb-4 inline-block"
      >
        ← Volver al panel
      </Link>
      <h1 className="font-serif text-3xl font-bold text-[#5C4033] mb-8">
        Editar invitación
      </h1>
      <InvitacionForm
        mode="editar"
        action={actualizarInvitacionAction}
        initialData={invitacion}
      />
    </div>
  );
}
