import HeroViewWrapper from "@/components/canvas/HeroViewWrapper";
import Navbar from "@/components/Navbar";
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
          <div className="h-screen flex items-center justify-start px-8 md:px-16 lg:px-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass mb-6 border border-cyan-400/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
                  Innovación con Propósito
                </span>
              </div>

              <h1 className="text-5xl md:text-7.5xl font-black tracking-tight mb-6 leading-[1.05]">
                Software &amp; Mecatrónica <br />
                <span className="gradient-corenius">
                  Impulsados por IA
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
                Diseñamos y construimos sistemas de alta precisión donde la inteligencia artificial se fusiona con el software y el mundo físico.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#proyectos"
                  className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-black transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #00FFFF 0%, #0090BC 60%, #0F52BA 100%)",
                    boxShadow: "0 0 25px rgba(0, 255, 255, 0.35)",
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
          </div>

          {/* Sección 2: Cerebro y Máquina */}
          <div id="servicios" className="h-screen flex items-center justify-end px-8 md:px-16 lg:px-32">
            <div className="max-w-lg text-right">
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
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
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
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

      {/* ── Sección de Proyectos ──────────────────────────────────────────────── */}
      <section id="proyectos" className="relative z-10 py-32 px-8 md:px-16 lg:px-32 border-t border-cyan-500/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Portafolio de Innovación
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg">
            Sistemas inteligentes, plataformas digitales e ingeniería mecatrónica desarrollada con propósito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {[
            {
              title: "Visión Artificial & Robótica",
              tag: "Computer Vision · Edge AI",
              desc: "Inspección autónoma y clasificación en tiempo real con modelos de redes convolucionales.",
            },
            {
              title: "Automatización & Telemetría IoT",
              tag: "Mecatrónica · Supabase",
              desc: "Monitoreo predictivo y control distribuido de actuadores con sincronización cloud.",
            },
            {
              title: "Plataformas SaaS de Alto Rendimiento",
              tag: "Fullstack · IA Generativa",
              desc: "Arquitecturas cloud escalables con pipelines inteligentes de procesamiento de datos.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="h-80 glass rounded-3xl p-7 flex flex-col justify-between hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer border border-cyan-500/20 group hover:border-cyan-400/60 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
            >
              <div>
                <span className="text-[11px] text-cyan-300 font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold mt-5 mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center text-sm font-semibold text-cyan-400 group-hover:translate-x-2 transition-transform">
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
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="text-2xl font-black tracking-[0.18em] text-white">
                CORENIUS
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Innovación con Propósito
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Ingeniería mecatrónica y desarrollo de software con inteligencia artificial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contacto@corenius.com"
              className="px-7 py-3 rounded-full text-xs uppercase font-bold tracking-widest text-black transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00FFFF 0%, #0090BC 60%, #0F52BA 100%)",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
              }}
            >
              Hablemos de tu Proyecto
            </a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Corenius. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}

