import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroViewWrapper from "@/components/canvas/HeroViewWrapper";
import CoreniusLogo from "@/components/CoreniusLogo";
import TeamGrid from "@/components/TeamGrid";
import ProjectsGrid from "@/components/ProjectsGrid";

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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-6 border border-[#00C8F2]/30">
              <span className="w-2 h-2 rounded-full bg-[#00C8F2] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#00C8F2] font-semibold">
                Transformación Digital
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Soluciones Tecnológicas <br />
              <span className="gradient-corenius">
                Inteligentes &amp; Escalables
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
              <strong className="font-semibold text-white">Tecnología que entiende tu negocio y potencia su crecimiento.</strong> Diseñamos e implementamos soluciones tecnológicas personalizadas integrando sistemas empresariales, inteligencia artificial y automatización para transformar procesos y facilitar el crecimiento sostenible.
            </p>

            {/* Pilares Oficiales de Marca */}
            <div className="flex items-center gap-3 text-xs font-mono text-cyan-300/80 mb-8 tracking-widest uppercase">
              <span>Innovación</span>
              <span className="text-blue-500">•</span>
              <span>Inteligencia</span>
              <span className="text-blue-500">•</span>
              <span>Crecimiento</span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#proyectos"
                className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00C8F2 0%, #0057FF 100%)",
                  boxShadow: "0 0 30px rgba(0, 87, 255, 0.45)",
                }}
              >
                Explorar Proyectos
              </Link>
              <Link
                href="#servicios"
                className="px-8 py-3.5 rounded-full text-sm font-semibold border border-[#00C8F2]/30 text-white hover:bg-[#00C8F2]/10 transition-all hover:border-[#00C8F2]"
              >
                Nuestras Capacidades
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Escenario 3D Dedicado (Sin interferir con el texto) */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[580px] w-full relative flex items-center justify-center">
            {/* Halo de luz de fondo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0057FF]/20 via-[#00C8F2]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            {/* Contenedor del View 3D de Drei */}
            <div className="w-full h-full relative z-10">
              <HeroViewWrapper />
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 2: SERVICIOS & CAPACIDADES TECNOLÓGICAS ───────────────────── */}
      <section id="servicios" className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-cyan-500/15">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#00C8F2] font-semibold">
            Capacidades de Alto Nivel
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-4">
            Ingeniería que Transforma Organizaciones
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Integramos software empresarial, procesamiento inteligente y sistemas electromecánicos a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass p-10 rounded-3xl border border-cyan-500/10 hover:border-[#00C8F2]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,200,242,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-[#00C8F2]/10 border border-[#00C8F2]/20 flex items-center justify-center mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C8F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-[#00C8F2] uppercase tracking-wider font-semibold">
              Automatización &amp; IA
            </span>
            <h3 className="text-2xl font-bold mt-3 mb-4 text-white">
              Sincronización Total
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Acoplamos algoritmos de machine learning directamente con actuadores físicos, microcontroladores y sensores en tiempo real para decisiones en microsegundos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass p-10 rounded-3xl border border-cyan-500/10 hover:border-[#0057FF]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,87,255,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-[#0057FF]/10 border border-[#0057FF]/20 flex items-center justify-center mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-[#0057FF] uppercase tracking-wider font-semibold">
              Arquitectura Robusta
            </span>
            <h3 className="text-2xl font-bold mt-3 mb-4 text-white">
              Ingeniería Transparente
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Desde modelos de visión artificial hasta hardware industrial dedicado. Diseñamos con modularidad estricta y trazabilidad sin cajas negras.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass p-10 rounded-3xl border border-cyan-500/10 hover:border-[#00C8F2]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,200,242,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-[#00C8F2]/10 border border-[#00C8F2]/20 flex items-center justify-center mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C8F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-[#00C8F2] uppercase tracking-wider font-semibold">
              Despliegue &amp; Escala
            </span>
            <h3 className="text-2xl font-bold mt-3 mb-4 text-white">
              Construido para Escalar
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Llevamos tu visión desde el primer prototipo funcional en laboratorio hasta la producción y operación industrial continua con la máxima confiabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: MISIÓN & VISIÓN (NOSOTROS) ─────────────────────────────── */}
      <section id="nosotros" className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 border-t border-cyan-500/15 bg-[#071A45]/20">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-cyan-400/25">
              <span className="w-2 h-2 rounded-full bg-[#00C8F2] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#00C8F2] font-semibold">
                Propósito &amp; Identidad
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-4">
              Impulsando el Futuro de las Organizaciones
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Guiados por la ingeniería de precisión y la inteligencia digital para crear un impacto sostenible y escalable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Tarjeta: Misión */}
            <div className="relative rounded-3xl glass p-8 sm:p-10 flex flex-col justify-between border border-cyan-500/20 hover:border-[#00C8F2]/60 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(0,200,242,0.18)] hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C8F2]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00C8F2]/20 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#00C8F2]/15 text-[#00C8F2] border border-[#00C8F2]/30">
                    Misión
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#00C8F2]/10 border border-[#00C8F2]/25 flex items-center justify-center text-[#00C8F2] font-bold text-lg group-hover:scale-110 transition-transform">
                    🎯
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-white group-hover:text-cyan-300 transition-colors">
                  Soluciones Tecnológicas con Propósito Real
                </h3>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-8">
                  En <strong className="font-semibold text-white">Corenius</strong> diseñamos e implementamos soluciones tecnológicas personalizadas que responden a las necesidades reales de cada organización. Integramos software, inteligencia artificial, automatización y tecnologías digitales para transformar procesos, mejorar la toma de decisiones y facilitar el crecimiento sostenible de nuestros clientes.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono text-cyan-300/80">
                <span className="px-3 py-1 rounded-lg bg-white/5">Personalización</span>
                <span className="px-3 py-1 rounded-lg bg-white/5">IA &amp; Automatización</span>
                <span className="px-3 py-1 rounded-lg bg-white/5">Crecimiento Sostenible</span>
              </div>
            </div>

            {/* Tarjeta: Visión */}
            <div className="relative rounded-3xl glass p-8 sm:p-10 flex flex-col justify-between border border-blue-500/20 hover:border-[#0057FF]/70 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(0,87,255,0.22)] hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0057FF]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0057FF]/25 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#0057FF]/20 text-cyan-300 border border-[#0057FF]/40">
                    Visión
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#0057FF]/15 border border-[#0057FF]/35 flex items-center justify-center text-cyan-300 font-bold text-lg group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-white group-hover:text-blue-300 transition-colors">
                  Referente Global en Transformación Digital
                </h3>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-8">
                  Ser una empresa referente en transformación digital en Colombia y con proyección internacional, reconocida por convertir los desafíos de las organizaciones en soluciones tecnológicas inteligentes, personalizadas y escalables, impulsando una evolución continua de sus procesos y capacidades.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono text-cyan-300/80">
                <span className="px-3 py-1 rounded-lg bg-white/5">Proyección Internacional</span>
                <span className="px-3 py-1 rounded-lg bg-white/5">Escalabilidad</span>
                <span className="px-3 py-1 rounded-lg bg-white/5">Evolución Continua</span>
              </div>
            </div>

          </div>

          {/* Pilares Oficiales */}
          <div className="mt-12 p-6 rounded-2xl glass border border-white/5 flex flex-col md:flex-row items-center justify-around gap-6 text-center">
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#00C8F2]">⚡</span>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Pilar 01</p>
                <p className="text-base font-bold text-white">Innovación Constante</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#00C8F2]">🧠</span>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Pilar 02</p>
                <p className="text-base font-bold text-white">Inteligencia Aplicada</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#00C8F2]">📈</span>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Pilar 03</p>
                <p className="text-base font-bold text-white">Crecimiento Sostenible</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 4: PROYECTOS DESTACADOS ──────────────────────────────────── */}
      <section id="proyectos" className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-cyan-500/15">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#00C8F2] font-semibold">
            Portafolio de Innovación
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Sistemas inteligentes, plataformas digitales e ingeniería mecatrónica desarrollada para la transformación digital.
          </p>
        </div>

        <ProjectsGrid />
      </section>

      {/* ── SECCIÓN: EQUIPO — THE MINDS BEHIND CORENIUS ───────────────────────── */}
      <section id="equipo" className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 border-t border-cyan-500/15 overflow-hidden">
        {/* Orbs de luz ambientales de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full left-[-10%] top-[20%] opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(0,87,255,0.25) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full right-[-10%] top-[20%] opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(0,200,242,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header de sección */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-cyan-400/25">
              <span className="w-2 h-2 rounded-full bg-[#00C8F2] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#00C8F2] font-semibold font-mono">
                Equipo Fundador
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-4">
              Las mentes detrás de{" "}
              <span className="gradient-corenius">Corenius</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Construido por dos. Diseñado para transformar organizaciones.
            </p>
          </div>

          {/* Grid de 2 Co-Founders — Client Component para interactividad */}
          <TeamGrid />

          {/* Stat row abajo */}
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {[
              { value: "2", label: "Co-Founders" },
              { value: "100%", label: "Enfoque en el cliente" },
              { value: "∞", label: "Compromiso con la innovación" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl py-5 px-4 border border-white/5">
                <p className="text-2xl sm:text-3xl font-black gradient-corenius mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400 font-mono">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER & CONTACTO ─────────────────────────────────────────────────── */}
      <footer id="contacto" className="relative z-10 py-20 px-6 sm:px-12 lg:px-16 border-t border-cyan-500/15 bg-[#050d1a]">
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
                boxShadow: "0 0 25px rgba(0, 87, 255, 0.4)",
              }}
            >
              Hablemos de tu Proyecto
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Corenius. Todos los derechos reservados.</span>
          <span className="tracking-widest font-mono text-cyan-400/70">
            INNOVACIÓN · INTELIGENCIA · CRECIMIENTO
          </span>
        </div>
      </footer>

    </div>
  );
}
