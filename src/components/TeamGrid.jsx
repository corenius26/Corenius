"use client";

const founders = [
  {
    id: 1,
    initials: "JB",
    role: "Co-Founder & CEO",
    name: "Juan Manuel Beltrán Botello",
    bio: "Estudiante de Ingeniería Mecatrónica y cofundador de Corenius. Lidera la visión estratégica para convertir los desafíos de las organizaciones en soluciones tecnológicas inteligentes y personalizadas. Impulsa el crecimiento sostenible de cada cliente mediante alianzas reales y transformación digital con propósito.",
    linkedinUrl: "https://www.linkedin.com/in/juan-manuel-beltran-botello-ab0042368/",
    githubUrl: "https://github.com/JuanBeltran2024",
    skills: ["Estrategia", "Transformación Digital", "Partnerships", "Crecimiento Sostenible"],
    gradientFrom: "#0057FF",
    gradientVia: "#007CFF",
    gradientTo: "#00C8F2",
    avatarShadow: "rgba(0,0,0,0.08)",
    borderDefault: "#e2e8f0",
    borderHover: "rgba(0,87,255,0.35)",
    glowHover:
      "0 16px 36px -6px rgba(0,87,255,0.08)",
    overlayGradient:
      "linear-gradient(135deg, rgba(0,87,255,0.03) 0%, rgba(0,200,242,0.02) 100%)",
    ringHover: "rgba(0,87,255,0.2)",
  },
  {
    id: 2,
    initials: "OS",
    role: "Co-Founder & CTO",
    name: "Oscar Jhondairo Siabato León",
    bio: "Estudiante de Ingeniería Mecatrónica y cofundador de Corenius. Integra software, inteligencia artificial, automatización y tecnologías digitales para transformar procesos, mejorar la toma de decisiones y construir soluciones escalables que impulsan la evolución continua de cada organización.",
    linkedinUrl: "https://www.linkedin.com/in/oscar-siabato-leon/",
    githubUrl: "https://github.com/Oscarsiabato18",
    skills: ["IA & Automatización", "Software Architecture", "Embedded Systems", "Soluciones Escalables"],
    gradientFrom: "#00C8F2",
    gradientVia: "#007CFF",
    gradientTo: "#0057FF",
    avatarShadow: "rgba(0,0,0,0.08)",
    borderDefault: "#e2e8f0",
    borderHover: "rgba(0,87,255,0.35)",
    glowHover:
      "0 16px 36px -6px rgba(0,87,255,0.08)",
    overlayGradient:
      "linear-gradient(135deg, rgba(0,200,242,0.02) 0%, rgba(0,87,255,0.03) 100%)",
    ringHover: "rgba(0,87,255,0.2)",
  },
];

function FounderCard({ founder }) {
  return (
    <div
      id={`founder-card-${founder.id}`}
      className="group relative rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-500 cursor-default"
      style={{
        background: "#ffffff",
        boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
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

        {/* Redes Sociales (LinkedIn + GitHub) — slide-in en hover */}
        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {founder.linkedinUrl && (
            <a
              href={founder.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${founder.name}`}
              className="w-9 h-9 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/35 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {founder.githubUrl && (
            <a
              href={founder.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${founder.name}`}
              className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="relative z-10 flex-1">
        <p className="text-xs uppercase tracking-[0.25em] text-[#0057FF] mb-2 font-bold">
          {founder.role}
        </p>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
          {founder.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
          {founder.bio}
        </p>
      </div>

      {/* Skills tags */}
      <div className="relative z-10 mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-2">
        {founder.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-lg text-[11px] font-mono text-gray-600 font-medium bg-gray-100 border border-gray-200 transition-colors group-hover:border-gray-300"
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
