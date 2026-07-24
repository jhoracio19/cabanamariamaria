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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1039041621870653');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      {/* Inyectamos las variables de las fuentes en el body */}
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {/* Meta Pixel: fallback para navegadores sin JS */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1039041621870653&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
        
        {/* Aquí renderizamos tu botón de WhatsApp y Vercel Analytics */}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
