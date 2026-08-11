import HeroViewWrapper from "@/components/canvas/HeroViewWrapper";
import Navbar from "@/components/Navbar";
import CoreniusLogo from "@/components/CoreniusLogo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative text-foreground selection:bg-cyan-500/30">
      {/* Barra de Navegación Oficial */}
      <Navbar />

      {/* ── Zona con el portal 3D (GSAP ScrollTrigger) ─────────────────────────── */}
      <section id="ia-mecatronica" className="hero-section relative h-[400vh]">
        {/* El View portal: sticky que sigue el viewport mientras scrolleas */}
        <HeroViewWrapper />

        {/* Contenido HTML superpuesto — position sticky por sección */}
        <div className="relative z-10 pt-20">

          {/* Sección 1: Hero */}
          <div className="h-screen max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-16">
            <div className="w-full lg:w-[55%] z-20 pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-6 border border-cyan-400/25">
                <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#00C2FF] font-semibold">
                  Transformación Digital
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                Software &amp; Mecatrónica <br />
                <span className="gradient-corenius">
                  Impulsados por IA
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg font-light leading-relaxed">
                Diseñamos y construimos sistemas inteligentes de alta precisión donde los datos, la inteligencia artificial y la ingeniería física convergen.
              </p>

              {/* Pilares de Marca */}
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-300/80 mb-8 tracking-widest uppercase">
                <span>Innovación</span>
                <span className="text-blue-500">•</span>
                <span>Inteligencia</span>
                <span className="text-blue-500">•</span>
                <span>Crecimiento</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#proyectos"
                  className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #00C2FF 0%, #0066FF 100%)",
                    boxShadow: "0 0 30px rgba(0, 102, 255, 0.45)",
                  }}
                >
                  Explorar Proyectos
                </Link>
                <Link
                  href="#servicios"
                  className="px-8 py-3.5 rounded-full text-sm font-semibold border border-cyan-500/30 text-white hover:bg-cyan-500/10 transition-all hover:border-cyan-400"
                >
                  Nuestras Capacidades
                </Link>
              </div>
            </div>

            {/* Espacio reservado para el Núcleo 3D en Desktop */}
            <div className="hidden lg:block w-[45%] pointer-events-none" />
          </div>

          {/* Sección 2: Cerebro y Máquina */}
          <div id="servicios" className="h-screen flex items-center justify-end px-8 md:px-16 lg:px-32">
            <div className="max-w-lg text-right">
              <span className="text-xs uppercase tracking-[0.3em] text-[#00C2FF] font-semibold">
                Sincronización Total
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Cerebro y Máquina
              </h2>
              <p className="text-base md:text-lg text-gray-300 glass p-8 rounded-3xl shadow-2xl leading-relaxed">
                Integramos algoritmos de machine learning directamente con actuadores físicos y arquitecturas en la nube. Procesamiento en el borde con toma de decisiones en microsegundos y telemetría predictiva continua.
              </p>
            </div>
          </div>

          {/* Sección 3: Ingeniería Transparente */}
          <div className="h-screen flex items-center justify-start px-8 md:px-16 lg:px-32">
            <div className="max-w-lg">
              <span className="text-xs uppercase tracking-[0.3em] text-[#00C2FF] font-semibold">
                Arquitectura Robusta
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Ingeniería Transparente
              </h2>
              <p className="text-base md:text-lg text-gray-300 glass p-8 rounded-3xl shadow-2xl leading-relaxed">
                Diseccionamos cada componente. Desde los modelos de visión artificial y redes neuronales hasta los sistemas embebidos y hardware a medida. Sin cajas negras, con máxima trazabilidad.
              </p>
            </div>
          </div>

          {/* Sección 4: Escala */}
          <div className="h-screen flex items-center justify-center px-8 md:px-16 lg:px-32">
            <div className="text-center max-w-2xl glass p-10 rounded-3xl border border-cyan-500/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-corenius">
                Construido para el Futuro
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Llevamos tus ideas desde el primer prototipo funcional en laboratorio hasta la producción industrial a escala con la mayor seguridad y rendimiento.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Sección: Misión & Visión (Propósito & Identidad) ───────────────── */}
      <section id="nosotros" className="relative z-10 py-32 px-6 sm:px-12 lg:px-24 border-t border-cyan-500/10 bg-gradient-to-b from-transparent via-[#0A2540]/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-cyan-400/25">
              <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#00C2FF] font-semibold">
                Propósito &amp; Identidad
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
              Impulsando el Futuro de las Organizaciones
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Guiados por la ingeniería de precisión y la inteligencia digital para crear un impacto sostenible y escalable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Tarjeta: Misión */}
            <div className="relative rounded-3xl glass p-8 sm:p-10 flex flex-col justify-between border border-cyan-500/20 hover:border-[#00C2FF]/60 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(0,194,255,0.18)] hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00C2FF]/20 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30">
                    Misión
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/25 flex items-center justify-center text-[#00C2FF] font-bold text-lg group-hover:scale-110 transition-transform">
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
            <div className="relative rounded-3xl glass p-8 sm:p-10 flex flex-col justify-between border border-blue-500/20 hover:border-[#0066FF]/70 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(0,102,255,0.22)] hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0066FF]/25 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#0066FF]/20 text-cyan-300 border border-[#0066FF]/40">
                    Visión
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#0066FF]/15 border border-[#0066FF]/35 flex items-center justify-center text-cyan-300 font-bold text-lg group-hover:scale-110 transition-transform">
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
          <div className="mt-14 p-6 rounded-2xl glass border border-white/5 flex flex-col md:flex-row items-center justify-around gap-6 text-center">
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#00C2FF]">⚡</span>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Pilar 01</p>
                <p className="text-base font-bold text-white">Innovación Constante</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#00C2FF]">🧠</span>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Pilar 02</p>
                <p className="text-base font-bold text-white">Inteligencia Aplicada</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#00C2FF]">📈</span>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Pilar 03</p>
                <p className="text-base font-bold text-white">Crecimiento Sostenible</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Sección de Proyectos ──────────────────────────────────────────────── */}
      <section id="proyectos" className="relative z-10 py-32 px-8 md:px-16 lg:px-32 border-t border-cyan-500/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#00C2FF] font-semibold">
            Portafolio de Innovación
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg">
            Sistemas inteligentes, plataformas digitales e ingeniería mecatrónica desarrollada para la transformación digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {[
            {
              title: "Visión Artificial & Robótica",
              tag: "Computer Vision · Edge AI",
              desc: "Inspección autónoma y clasificación en tiempo real con modelos de redes neuronales convolucionales.",
            },
            {
              title: "Automatización & Telemetría IoT",
              tag: "Mecatrónica · Supabase",
              desc: "Monitoreo predictivo y control distribuido de actuadores con sincronización cloud en tiempo real.",
            },
            {
              title: "Plataformas SaaS de Alto Rendimiento",
              tag: "Fullstack · IA Generativa",
              desc: "Arquitecturas cloud escalables con pipelines inteligentes y microservicios de alto desempeño.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="h-80 glass rounded-3xl p-7 flex flex-col justify-between hover:bg-[#0A2540]/40 transition-all duration-300 cursor-pointer border border-cyan-500/20 group hover:border-[#00C2FF]/70 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(0,194,255,0.2)]"
            >
              <div>
                <span className="text-[11px] text-[#00C2FF] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#0A2540]/80 border border-cyan-500/30">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold mt-5 mb-2 group-hover:text-[#00C2FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center text-sm font-semibold text-[#00C2FF] group-hover:translate-x-2 transition-transform">
                Ver demostración interactiva <span className="ml-1.5">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sección de Contacto / Footer ──────────────────────────────────────── */}
      <footer id="contacto" className="relative z-10 py-20 px-8 md:px-16 lg:px-32 border-t border-cyan-500/10 glass-nav">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div>
            <CoreniusLogo size="large" />
            <p className="text-sm text-gray-400 mt-4 max-w-md">
              Ingeniería mecatrónica y desarrollo de software con inteligencia artificial para la transformación digital.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contacto@corenius.com"
              className="px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-widest text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00C2FF 0%, #0066FF 100%)",
                boxShadow: "0 0 25px rgba(0, 102, 255, 0.4)",
              }}
            >
              Hablemos de tu Proyecto
            </a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Corenius. Todos los derechos reservados.</span>
          <span className="tracking-widest font-mono text-cyan-400/70">
            INNOVACIÓN · INTELIGENCIA · CRECIMIENTO
          </span>
        </div>
      </footer>

    </div>
  );
}
