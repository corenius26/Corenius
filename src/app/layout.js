import { Montserrat, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ViewCanvas from "@/components/canvas/ViewCanvas";
import InteractiveBackground from "@/components/InteractiveBackground";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Corenius | Transformación Digital",
  description:
    "Tecnología que entiende tu negocio y potencia su crecimiento. Software, inteligencia artificial y automatización a medida.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground overflow-x-hidden">
        {/* Fondo interactivo que reacciona con el cursor + punto azul nítido */}
        <InteractiveBackground />
        <main>
          {children}
          {/* ViewCanvas SIBLING de children */}
          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
