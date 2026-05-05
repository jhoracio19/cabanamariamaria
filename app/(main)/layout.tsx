import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": "Cabaña María María",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Privada el Palmar #5",
        "addressLocality": "La Trinidad Tepehitec",
        "addressRegion": "Tlaxcala",
        "postalCode": "90115",
        "addressCountry": "MX"
      },
      "telephone": "+522462132732",
      "url": "https://cabanamariamaria.com", // Cambia por tu dominio real
      "priceRange": "$$",
      "image": "https://cabanamariamaria.com/hero.webp" // Una foto pro
    })
  }}
/>
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>

    
  );
  
}