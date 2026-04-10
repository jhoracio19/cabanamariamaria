import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { Packages } from "@/components/packages";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@radix-ui/react-accordion";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Packages />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
