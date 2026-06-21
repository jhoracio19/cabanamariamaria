import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// SEO Avanzado: Metadata con URL Canónica
export const metadata: Metadata = {
  metadataBase: new URL("https://cabanamariamaria.com"),
  verification: {
    google: "H3t-tHVloK4N7tyYkT47HzDxDnc33oOFYSpCY4uhbVU",
  },
  title: "Cabaña María María | Salón y Jardín de Eventos en Tlaxcala",
  description:
    "El mejor salón y jardín para eventos en La Trinidad Tepehitec, Tlaxcala. Bodas, XV años, bautizos y más. Paquetes todo incluido desde $350 MXN por persona.",
  alternates: {
    canonical: "/",
  },
  keywords:
    "salón de eventos Tlaxcala, jardín de eventos, bodas Tlaxcala, XV años, Cabaña María María",
  openGraph: {
    title: "Cabaña María María | Salón y Jardín de Eventos en Tlaxcala",
    description:
      "Tu evento soñado en Tlaxcala. Paquetes todo incluido y servicio de primera.",
    url: "https://cabanamariamaria.com",
    siteName: "Cabaña María María",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Cabaña María María",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D35400",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos Estructurados (JSON-LD) para que Google te ponga en el mapa
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Cabaña María María",
    description:
      "Salón y jardín de eventos con paquetes todo incluido en Tlaxcala.",
    url: "https://cabanamariamaria.com",
    telephone: "+522462132732",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Privada el Palmar #5",
      addressLocality: "La Trinidad Tepehitec",
      addressRegion: "Tlaxcala",
      postalCode: "90110",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.308726, 
      longitude: -98.241512,
    },
    priceRange: "$$",
    image: "https://cabanamariamaria.com/logo.png",
  };

  return (
    <html lang="es">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4TZD8TCTJ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', 'G-4TZD8TCTJ7');
          `}
        </Script>
      </head>
      {/* Inyectamos las variables de las fuentes en el body */}
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {/* Inyección del JSON-LD para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
        
        {/* Aquí renderizamos tu botón de WhatsApp y Vercel Analytics */}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
