import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import  Packages  from "@/components/packages";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Packages />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
