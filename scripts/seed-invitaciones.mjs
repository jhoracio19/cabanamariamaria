// Script de un solo uso: migra las invitaciones que antes vivían
// hardcodeadas en app/invitacion/[id]/page.tsx hacia Vercel Blob, para que
// el panel de administración (/admin) las pueda listar y editar.
//
// Uso: node --env-file=.env.local scripts/seed-invitaciones.mjs
import { put } from "@vercel/blob";

const INVITACIONES_PREFIX = "invitaciones/data/";

const invitaciones = [
  {
    id: "1",
    host: "Familia Ahuactzin",
    celebrant: "María Fernanda y María José",
    eventOrder: "XV años",
    date: "3 de Enero, 2026",
    time: "7:00 PM",
    targetDate: "2026-01-03T19:00:00",
    dressCode: "Formal",
    hostPhone: "522462278504",
    themeColor: "#C93756",
    createdAt: new Date().toISOString(),
  },
  {
    id: "credicer-10mayo-a7b2",
    host: "Financiera Credicer, Plaza Tlaxcala",
    celebrant: "Financiera Credicer, Plaza Tlaxcala",
    eventOrder: "Festejo del 10 de Mayo",
    date: "14 de Mayo, 2026",
    time: "11:00 AM",
    targetDate: "2026-05-14T11:00:00",
    dressCode: "Casual (Sin código de vestimenta)",
    hostPhone: "522461735600",
    themeColor: "#D81B60",
    createdAt: new Date().toISOString(),
  },
  {
    id: "eliette-2-anios-vaquera",
    host: "la familia de Eliette",
    celebrant: "Eliette",
    eventOrder: "Fiesta de 2 años",
    date: "12 de Julio, 2026",
    time: "3:00 PM",
    targetDate: "2026-07-12T15:00:00",
    dressCode: "Vaqueros",
    hostPhone: "522462411951",
    themeColor: "#B45309",
    createdAt: new Date().toISOString(),
  },
  {
    id: "demo",
    host: "Familia González",
    celebrant: "Sofía & Diego",
    eventOrder: "Nuestra Boda",
    date: "12 de Marzo, 2027",
    time: "5:00 PM",
    targetDate: "2027-03-12T17:00:00",
    dressCode: "Formal",
    hostPhone: "522462132732",
    themeColor: "#D35400",
    customMessage: "Sin ustedes, la fiesta no sería lo mismo.",
    createdAt: new Date().toISOString(),
  },
];

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "Falta BLOB_READ_WRITE_TOKEN. Agrégalo a .env.local antes de correr este script.",
    );
    process.exit(1);
  }

  for (const inv of invitaciones) {
    await put(`${INVITACIONES_PREFIX}${inv.id}.json`, JSON.stringify(inv), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    console.log(`Invitación migrada: ${inv.id}`);
  }

  console.log("Listo. Ya puedes verlas en /admin.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
