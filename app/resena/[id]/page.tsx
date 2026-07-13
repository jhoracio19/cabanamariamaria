import { getInvitacion } from "@/lib/blob-store";
import { getResena } from "@/lib/resena-store";
import { ResenaForm } from "@/components/resena-form";

export default async function ResenaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [invitacion, resena] = await Promise.all([
    getInvitacion(id),
    getResena(id),
  ]);

  if (!invitacion) {
    return (
      <div className="min-h-screen pt-32 text-center text-xl text-[#5C4033] px-4">
        No encontramos tu invitación. Si crees que es un error, escríbenos por
        WhatsApp.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-lg">
        <ResenaForm
          invitacionId={id}
          defaultName={invitacion.host}
          eventLabel={`${invitacion.eventOrder} de ${invitacion.celebrant}`}
          existingText={resena?.text}
          existingRating={resena?.rating}
        />
      </div>
    </div>
  );
}
