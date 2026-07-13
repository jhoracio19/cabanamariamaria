import { Star } from "lucide-react";
import { listResenas } from "@/lib/resena-store";
import {
  AprobarResenaButton,
  EliminarResenaButton,
} from "@/components/admin/resena-actions";

export default async function AdminResenasPage() {
  const resenas = await listResenas();
  const pendientes = resenas.filter((r) => r.status === "pendiente");
  const aprobadas = resenas.filter((r) => r.status === "aprobada");

  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">
          Reseñas
        </h1>
        <p className="text-gray-500 text-sm">
          Se piden desde el link personal de cada invitación (botón "Pedir
          reseña" en el panel de Invitaciones). Solo las que apruebes aquí se
          publican en el sitio.
        </p>
      </div>

      <section>
        <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-4">
          Pendientes de aprobar ({pendientes.length})
        </h2>
        {pendientes.length === 0 ? (
          <p className="text-gray-400 text-sm">No hay reseñas pendientes.</p>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {pendientes.map((r) => (
              <ResenaRow key={r.id} resena={r} pendiente />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-4">
          Publicadas ({aprobadas.length})
        </h2>
        {aprobadas.length === 0 ? (
          <p className="text-gray-400 text-sm">
            Aún no hay reseñas publicadas.
          </p>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {aprobadas.map((r) => (
              <ResenaRow key={r.id} resena={r} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ResenaRow({
  resena,
  pendiente,
}: {
  resena: Awaited<ReturnType<typeof listResenas>>[number];
  pendiente?: boolean;
}) {
  return (
    <div className="p-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < resena.rating ? "fill-[#D35400] text-[#D35400]" : "text-gray-200"}`}
            />
          ))}
        </div>
        <p className="font-serif font-bold text-[#5C4033]">
          {resena.authorName}{" "}
          <span className="font-sans font-normal text-gray-400 text-sm">
            — {resena.eventLabel}
          </span>
        </p>
        <p className="text-sm text-gray-600 mt-1">{resena.text}</p>
      </div>
      <div className="flex items-center gap-3 text-sm shrink-0">
        {pendiente && <AprobarResenaButton id={resena.id} />}
        <EliminarResenaButton id={resena.id} label={resena.authorName} />
      </div>
    </div>
  );
}
