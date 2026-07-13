import { Hero } from "@/components/hero";
import { EventTypes } from "@/components/event-types";
import { Benefits } from "@/components/benefits";
import  Packages  from "@/components/packages";
import { DigitalInvite } from "@/components/digital-invite";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

// Refresca cada minuto para que las reseñas recién aprobadas aparezcan
// aunque la revalidación al aprobar no alcance a ganarle a la consistencia
// eventual de Vercel Blob.
export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <Hero />
      <EventTypes />
      <Benefits />
      <Packages />
      <DigitalInvite />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
