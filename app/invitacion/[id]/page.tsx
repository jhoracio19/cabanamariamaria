import { Button } from "@/components/ui/button";
import { InvitationCard } from "@/components/invitation-card";
import { getInvitacion } from "@/lib/blob-store";

export default async function InvitacionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getInvitacion(id);

  if (!event)
    return (
      <div className="min-h-screen pt-32 text-center text-xl text-[#5C4033]">
        Invitación no encontrada
      </div>
    );

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <InvitationCard event={event} />

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ¿Te gustó el lugar del evento?
          </p>
          <Button
            variant="outline"
            asChild
            className="rounded-full hover:text-white transition-colors"
            style={{ borderColor: event.themeColor, color: event.themeColor }}
          >
            <a href="/">Conoce Cabaña María María</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
