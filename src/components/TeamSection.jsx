"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const founders = [
  {
    id: 1,
    initials: "JB",
    role: "Co-Founder & CEO",
    name: "Juan Manuel Beltrán Botello",
    titleTag: "Liderazgo & Estrategia",
    bio: "Estudiante de Ingeniería Mecatrónica y cofundador de Corenius. Lidera la visión estratégica para convertir los desafíos de las organizaciones en soluciones tecnológicas inteligentes y personalizadas. Impulsa el crecimiento sostenible de cada cliente mediante alianzas reales y transformación digital con propósito.",
    linkedinUrl: "https://www.linkedin.com/in/juan-manuel-beltran-botello-ab0042368/",
    githubUrl: "https://github.com/JuanBeltran2024",
    skills: ["Estrategia", "Transformación Digital", "Partnerships", "Crecimiento Sostenible"],
    gradientFrom: "#0057FF",
    gradientVia: "#007CFF",
    gradientTo: "#00C8F2",
    photoUrl: null, // Listo para cuando suba la foto (ej: "/team/juan-manuel.jpg")
  },
  {
    id: 2,
    initials: "OS",
    role: "Co-Founder & CTO",
    name: "Oscar Jhondairo Siabato León",
    titleTag: "Arquitectura & Tecnología",
    bio: "Estudiante de Ingeniería Mecatrónica y cofundador de Corenius. Integra software, inteligencia artificial, automatización y tecnologías digitales para transformar procesos, mejorar la toma de decisiones y construir soluciones escalables que impulsan la evolución continua de cada organización.",
    linkedinUrl: "https://www.linkedin.com/in/oscar-siabato-leon/",
    githubUrl: "https://github.com/Oscarsiabato18",
    skills: ["IA & Automatización", "Software Architecture", "Embedded Systems", "Soluciones Escalables"],
    gradientFrom: "#00C8F2",
    gradientVia: "#007CFF",
    gradientTo: "#0057FF",
    photoUrl: null, // Listo para cuando suba la foto (ej: "/team/oscar.jpg")
  },
];

function FounderCard({ founder, index, isHovered, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={() => onHover(founder.id)}
      onMouseLeave={onLeave}
      className={`relative glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-slate-200/90 transition-all duration-500 ${
        isHovered
          ? "border-[#0057FF]/40 shadow-[0_20px_45px_-10px_rgba(0,87,255,0.10)]"
          : "hover:border-slate-300"
      }`}
    >
      {/* Header del Founder: Avatar + Despliegue de Preview al lado */}
      <div className="relative z-10 mb-8 flex items-start justify-between">
        {/* Contenedor Avatar Interactivo con Despliegue */}
        <div className="flex items-center gap-5">
          {/* Avatar principal */}
          <div
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-black text-white select-none transition-transform duration-300 shadow-sm shrink-0 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${founder.gradientFrom} 0%, ${founder.gradientVia} 50%, ${founder.gradientTo} 100%)`,
            }}
          >
            {founder.photoUrl ? (
              <Image
                src={founder.photoUrl}
                alt={founder.name}
                fill
                className="object-cover"
              />
            ) : (
              <span className="opacity-95">{founder.initials}</span>
            )}
          </div>

          {/* Panel Desplegable que aparece al lado con la imagen/perfil */}
          <div
            className={`transition-all duration-500 ease-out origin-left flex flex-col justify-center ${
              isHovered
                ? "opacity-100 translate-x-0 scale-100 max-w-[200px]"
                : "opacity-0 -translate-x-3 scale-95 max-w-0 overflow-hidden pointer-events-none"
            }`}
          >
            <div className="p-3 bg-blue-50/80 border border-blue-100/90 rounded-2xl shadow-sm whitespace-nowrap">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                  Fundador Activo
                </span>
              </div>
              <p className="text-xs font-semibold text-[#0057FF]">
                {founder.titleTag}
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Corenius Leadership
              </p>
            </div>
          </div>
        </div>

        {/* Redes Sociales (LinkedIn + GitHub) */}
        <div className="flex flex-col gap-2">
          {founder.linkedinUrl && (
            <a
              href={founder.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${founder.name}`}
              className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
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
              className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Info del Founder */}
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
            className="px-3 py-1 rounded-lg text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);

  useGSAP(
    () => {
      // 1. Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Founder 1 (Left) & Founder 2 (Right) convergencia con ScrollTrigger
      if (cardsRef.current[0]) {
        gsap.fromTo(
          cardsRef.current[0],
          { opacity: 0.15, x: -50, y: 50 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "center 45%",
              scrub: 1.2,
            },
          }
        );
      }

      if (cardsRef.current[1]) {
        gsap.fromTo(
          cardsRef.current[1],
          { opacity: 0.15, x: 50, y: 50 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "center 45%",
              scrub: 1.2,
            },
          }
        );
      }

      // 3. Stats row reveal
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0.2, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 95%",
              end: "top 75%",
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="equipo"
      className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 border-t border-gray-200 overflow-hidden bg-gray-50/50"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header de sección */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-[#0057FF]/20">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#0057FF] font-bold">
              Equipo Fundador
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-4 text-slate-900">
            Las mentes detrás de{" "}
            <span className="gradient-corenius">Corenius</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Construido por dos. Diseñado para transformar organizaciones.
          </p>
        </div>

        {/* Grid de 2 Co-Founders con ScrollTrigger + Hover Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {founders.map((founder, index) => (
            <div
              key={founder.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <FounderCard
                founder={founder}
                index={index}
                isHovered={hoveredId === founder.id}
                onHover={setHoveredId}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </div>

        {/* Stat row abajo */}
        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center"
        >
          {[
            { value: "2", label: "Co-Founders" },
            { value: "100%", label: "Enfoque en el cliente" },
            { value: "∞", label: "Compromiso con la innovación" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl py-5 px-4 border border-gray-200 bg-white"
            >
              <p className="text-2xl sm:text-3xl font-black gradient-corenius mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
