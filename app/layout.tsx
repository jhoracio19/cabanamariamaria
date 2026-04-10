import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: "Cabaña María María | Salón y Jardín de Eventos en Tlaxcala",
  description:
    "El mejor salón y jardín para eventos en La Trinidad Tepehitec, Tlaxcala. Bodas, XV años, bautizos y más. Paquetes todo incluido desde $350 MXN por persona. ¡Cotiza ahora!",
  keywords:
    "salón de eventos Tlaxcala, jardín de eventos, bodas Tlaxcala, XV años, eventos La Trinidad Tepehitec, Cabaña María María",
  openGraph: {
    title: "Cabaña María María | Salón y Jardín de Eventos en Tlaxcala",
    description:
      "Tu evento soñado en Tlaxcala. Paquetes todo incluido, jardín con área infantil y servicio de primera.",
    type: "website",
    locale: "es_MX",
    images: ["/logo.png"], // Esto ayuda a que el logo salga cuando compartes el link
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // Apuntamos directamente a tu archivo logo.png en la carpeta public
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
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
