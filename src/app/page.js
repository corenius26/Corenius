import HeroViewWrapper from "@/components/canvas/HeroViewWrapper";

export default function Home() {
  return (
    // SIN overflow-hidden — el body debe scrollear libremente para que GSAP funcione
    <div className="relative text-foreground selection:bg-cyan-500/30">

      {/* ── Zona con el portal 3D ─────────────────────────────── */}
      {/* hero-section: target de GSAP ScrollTrigger */}
      <section className="hero-section relative h-[400vh]">

        {/* El View portal: sticky que sigue el viewport mientras scrolleas */}
        <HeroViewWrapper />

        {/* Contenido HTML superpuesto — position sticky por sección */}
        <div className="relative z-10">

          {/* Texto 1: Hero */}
          <div className="h-screen flex items-center justify-start px-8 md:px-16 lg:px-32">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4 font-medium">
                Corenius · Ingeniería del Futuro
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Software <br /> Integrado con <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
                  Inteligencia Artificial
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                Soluciones mecatrónicas y plataformas digitales potenciadas por modelos avanzados de IA. El futuro de la automatización inteligente, hoy.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors">
                  Ver Proyectos
                </button>
                <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>

          {/* Texto 2: Cerebro y Máquina */}
          <div className="h-screen flex items-center justify-end px-8 md:px-16 lg:px-32">
            <div className="max-w-lg text-right">
              <h2 className="text-4xl font-bold mb-4">Cerebro y Máquina</h2>
              <p className="text-lg text-gray-300 glass p-8 rounded-3xl shadow-2xl">
                Integramos modelos de machine learning directamente con hardware físico y arquitecturas cloud. Toma de decisiones en milisegundos, telemetría predictiva y autonomía total.
              </p>
            </div>
          </div>

          {/* Texto 3: Ingeniería Transparente */}
          <div className="h-screen flex items-center justify-start px-8 md:px-16 lg:px-32">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-4">Ingeniería Transparente</h2>
              <p className="text-lg text-gray-300 glass p-8 rounded-3xl shadow-2xl">
                Controlamos desde la red neuronal que procesa los datos hasta los actuadores mecánicos que ejecutan la acción. Sin cajas negras.
              </p>
            </div>
          </div>

          {/* Texto 4: Escala */}
          <div className="h-screen flex items-center justify-center px-8 md:px-16 lg:px-32">
            <div className="text-center max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Construido para Escalar</h2>
              <p className="text-lg text-gray-300">
                De un prototipo a producción sin fricción. Nuestra plataforma crece contigo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Sección de Proyectos (Supabase en el futuro) ─────── */}
      <section className="relative z-10 py-32 px-8 md:px-16 lg:px-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Nuestros Proyectos de IA
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
          Software inteligente y sistemas físicos que resuelven problemas reales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {[
            { title: "Sistema de Visión IA", tag: "Computer Vision" },
            { title: "Automatización Industrial", tag: "Mecatrónica + ML" },
            { title: "Plataforma Cloud", tag: "SaaS · Backend IA" },
          ].map((item) => (
            <div
              key={item.title}
              className="h-64 glass rounded-3xl p-6 flex flex-col justify-end hover:bg-white/10 transition-all duration-300 cursor-pointer border border-cyan-500/20 group hover:border-cyan-500/60 hover:-translate-y-1"
            >
              <span className="text-xs text-cyan-400 uppercase tracking-widest mb-2">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-cyan-400 group-hover:translate-x-2 transition-transform">
                Ver demostración ↗
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
