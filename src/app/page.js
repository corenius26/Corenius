import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroViewWrapper from "@/components/canvas/HeroViewWrapper";
import CoreniusLogo from "@/components/CoreniusLogo";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#00C8F2] selection:text-[#071A45]">
      {/* ── Barra de Navegación Oficial ────────────────────────────────────────── */}
      <Navbar />

      {/* ── SECCIÓN 1: HERO PRINCIPAL CON NÚCLEO 3D EN DERECHA ────────────────── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Columna Izquierda: Información & Titulares */}
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-6 border border-[#0057FF]/20">
              <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#0057FF] font-bold">
                Transformación Digital
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">
              Soluciones Tecnológicas <br />
              <span className="gradient-corenius">
                Inteligentes &amp; Escalables
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl font-light leading-relaxed">
              <strong className="font-semibold text-slate-900">Tecnología que entiende tu negocio y potencia su crecimiento.</strong> Diseñamos e implementamos soluciones tecnológicas personalizadas integrando sistemas empresariales, inteligencia artificial y automatización para transformar procesos y facilitar el crecimiento sostenible.
            </p>

            {/* Pilares Oficiales de Marca */}
            <div className="flex items-center gap-3 text-xs font-bold text-[#0057FF] mb-8 tracking-[0.25em] uppercase">
              <span>Innovación</span>
              <span className="text-[#00C8F2] font-black">•</span>
              <span>Inteligencia</span>
              <span className="text-[#00C8F2] font-black">•</span>
              <span>Crecimiento</span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#proyectos"
                className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:opacity-95 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #00C8F2 0%, #0057FF 100%)",
                }}
              >
                Explorar Proyectos
              </Link>
              <Link
                href="#servicios"
                className="px-8 py-3.5 rounded-full text-sm font-semibold border border-gray-300 text-slate-700 hover:bg-gray-50 transition-all hover:border-gray-400"
              >
                Nuestras Capacidades
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Escenario 3D Dedicado (Sin interferir con el texto) */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[580px] w-full relative flex items-center justify-center">
            
            {/* Contenedor del View 3D de Drei */}
            <div className="w-full h-full relative z-10">
              <HeroViewWrapper />
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 2: SERVICIOS & CAPACIDADES TECNOLÓGICAS (ANIMADO CON SCROLL) ─ */}
      <ServicesSection />

      {/* ── SECCIÓN 3: MISIÓN & VISIÓN (ANIMADO CON SCROLLTRIGGER) ───────────── */}
      <AboutSection />

      {/* ── SECCIÓN 4: PROYECTOS DESTACADOS (ANIMADO CON SCROLLTRIGGER) ─────── */}
      <ProjectsSection />

      {/* ── SECCIÓN 5: EQUIPO (ANIMADO CON SCROLLTRIGGER & HOVER PREVIEW) ────── */}
      <TeamSection />

      {/* ── FOOTER & CONTACTO ─────────────────────────────────────────────────── */}
      <footer id="contacto" className="relative z-10 py-20 px-6 sm:px-12 lg:px-16 bg-[#071A45]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div>
            <CoreniusLogo size="large" />
            <p className="text-sm text-gray-400 mt-4 max-w-md font-light">
              Soluciones tecnológicas personalizadas, inteligencia artificial y automatización para transformar procesos y potenciar el crecimiento sostenible de las organizaciones.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:Corenius26@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#00C8F2] transition-colors w-fit">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00C8F2]">✉</span> 
                Corenius26@gmail.com
              </a>
              <a href="tel:+573133730496" className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#00C8F2] transition-colors w-fit">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00C8F2]">📞</span> 
                +57 3133730496
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:Corenius26@gmail.com"
              className="px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-widest text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00C8F2 0%, #0057FF 100%)",
              }}
            >
              Hablemos de tu Proyecto
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Corenius. Todos los derechos reservados.</span>
          <span className="tracking-[0.25em] font-semibold text-xs text-blue-200/90 uppercase">
            INNOVACIÓN · INTELIGENCIA · CRECIMIENTO
          </span>
        </div>
      </footer>

    </div>
  );
}
