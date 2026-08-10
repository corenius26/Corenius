import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ViewCanvas from "@/components/canvas/ViewCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Corenius | Software Integrado con Inteligencia Artificial",
  description:
    "Soluciones mecatrónicas y plataformas digitales potenciadas por modelos avanzados de IA. El futuro de la automatización inteligente.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground overflow-x-hidden">
        <main>
          {children}
          {/* ViewCanvas SIBLING de children — clave para que el body scrolle naturalmente */}
          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
