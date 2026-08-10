import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ViewCanvas from "@/components/canvas/ViewCanvas";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Corenius | Innovación con Propósito",
  description:
    "Soluciones mecatrónicas y plataformas digitales potenciadas por modelos avanzados de IA. El futuro de la automatización inteligente.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground overflow-x-hidden">
        <main>
          {children}
          {/* ViewCanvas SIBLING de children */}
          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
