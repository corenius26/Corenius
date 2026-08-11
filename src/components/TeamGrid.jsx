"use client";

const founders = [
  {
    id: 1,
    initials: "F1",
    role: "Co-Founder & CEO",
    name: "Nombre Fundador 1",
    bio: "Lidera la visión estratégica y el crecimiento de Corenius. Especialista en gestión de proyectos tecnológicos, alianzas comerciales y transformación digital de organizaciones. Convierte los desafíos del negocio en soluciones de alto impacto.",
    skills: ["Estrategia", "Producto", "Partnerships", "Transformación Digital"],
    gradientFrom: "#0057FF",
    gradientVia: "#007CFF",
    gradientTo: "#00C8F2",
    avatarShadow: "rgba(0,87,255,0.4)",
    borderDefault: "rgba(0,200,242,0.15)",
    borderHover: "rgba(0,200,242,0.45)",
    glowHover:
      "0 0 50px rgba(0,87,255,0.18), 0 0 100px rgba(0,87,255,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
    overlayGradient:
      "linear-gradient(135deg, rgba(0,87,255,0.12) 0%, rgba(0,200,242,0.06) 100%)",
    ringHover: "rgba(0,200,242,0.5)",
  },
  {
    id: 2,
    initials: "F2",
    role: "Co-Founder & CTO",
    name: "Nombre Fundador 2",
    bio: "Arquitecto de las soluciones tecnológicas de Corenius. Experto en inteligencia artificial, sistemas embebidos y arquitecturas de software escalables. Define y ejecuta la hoja de ruta técnica que convierte la visión en producto real.",
    skills: ["IA & ML", "Software Architecture", "Embedded Systems", "Mecatrónica"],
    gradientFrom: "#00C8F2",
    gradientVia: "#007CFF",
    gradientTo: "#0057FF",
    avatarShadow: "rgba(0,200,242,0.35)",
    borderDefault: "rgba(0,87,255,0.15)",
    borderHover: "rgba(0,87,255,0.45)",
    glowHover:
      "0 0 50px rgba(0,200,242,0.15), 0 0 100px rgba(0,200,242,0.07), inset 0 1px 0 rgba(255,255,255,0.08)",
    overlayGradient:
      "linear-gradient(135deg, rgba(0,200,242,0.08) 0%, rgba(0,87,255,0.08) 100%)",
    ringHover: "rgba(0,87,255,0.5)",
  },
];

function FounderCard({ founder }) {
  return (
    <div
      id={`founder-card-${founder.id}`}
      className="group relative rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-500 cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${founder.borderDefault}`,
        transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = founder.glowHover;
        e.currentTarget.style.borderColor = founder.borderHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = founder.borderDefault;
      }}
    >
      {/* Overlay degradado suave al hover */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: founder.overlayGradient }}
      />

      {/* Avatar + LinkedIn */}
      <div className="relative z-10 mb-8 flex items-start justify-between">
        {/* Avatar — Placeholder con iniciales (reemplazar con <Image> cuando haya foto) */}
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-black text-white select-none transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${founder.gradientFrom} 0%, ${founder.gradientVia} 50%, ${founder.gradientTo} 100%)`,
            boxShadow: `0 8px 32px ${founder.avatarShadow}`,
          }}
        >
          <span className="opacity-90">{founder.initials}</span>
          {/* Glow ring en hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `0 0 0 3px ${founder.ringHover}` }}
          />
        </div>

        {/* Ícono LinkedIn — slide-in en hover */}
        <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
          <a
            href="#"
            aria-label={`LinkedIn de ${founder.name}`}
            className="w-9 h-9 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/35 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="relative z-10 flex-1">
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#00C8F2] mb-2">
          {founder.role}
        </p>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          {founder.name}
          <span className="block text-sm font-normal text-gray-500 tracking-normal mt-0.5">
            (Pendiente confirmar)
          </span>
        </h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
          {founder.bio}
        </p>
      </div>

      {/* Skills tags */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {founder.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-lg text-[11px] font-mono text-cyan-300/80 bg-white/[0.04] border border-white/[0.06] transition-colors group-hover:border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {founders.map((founder) => (
        <FounderCard key={founder.id} founder={founder} />
      ))}
    </div>
  );
}
