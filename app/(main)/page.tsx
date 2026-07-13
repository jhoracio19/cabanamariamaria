import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import  Packages  from "@/components/packages";
import { DigitalInvite } from "@/components/digital-invite";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
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
