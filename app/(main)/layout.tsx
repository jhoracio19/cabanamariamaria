import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventVenue",
            "name": "Cabaña María María",
            "description": "Salón y jardín de eventos con paquetes todo incluido en Tlaxcala.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Privada el Palmar #5",
              "addressLocality": "La Trinidad Tepehitec",
              "addressRegion": "Tlaxcala",
              "postalCode": "90110",
              "addressCountry": "MX"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.308726,
              "longitude": -98.241512
            },
            "telephone": "+522462132732",
            "url": "https://cabanamariamaria.com",
            "priceRange": "$$",
            "image": "https://cabanamariamaria.com/gallery/hero.webp"
          })
        }}
      />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}