"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LiaterDemoModal from "./LiaterDemoModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "liater",
    title: "LIATER LMS (Learning Management System)",
    tag: "React · Supabase · EdTech",
    desc: "Plataforma web integral para la gestión y entrega de programas académicos, con enrutamiento contextual por roles (Admin, Profesor, Estudiante) y seguridad a nivel de base de datos.",
    isInteractive: true,
  },
  {
    id: "vision",
    title: "Visión Artificial & Robótica",
    tag: "Computer Vision · Edge AI",
    desc: "Inspección autónoma y clasificación en tiempo real con modelos de redes neuronales convolucionales sobre hardware embebido industrial.",
    isInteractive: false,
  },
  {
    id: "iot",
    title: "Automatización & Telemetría IoT",
    tag: "Hardware · Supabase",
    desc: "Monitoreo predictivo y control distribuido de actuadores con sincronización cloud bidireccional en tiempo real.",
    isInteractive: false,
  },
];

export default function ProjectsSection() {
  const [isLiaterOpen, setIsLiaterOpen] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // 1. Animación del Encabezado con Scroll
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

      // 2. Animación Parallax reactiva con Scroll (scrub: 1.2) en las 3 tarjetas
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Desfase escalonado de profundidad
        const yStart = 80 + i * 40; // 80px, 120px, 160px

        gsap.fromTo(
          card,
          {
            opacity: 0.15,
            y: yStart,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "center 45%",
              scrub: 1.2, // Atado 100% al scroll del usuario
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="proyectos"
        className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-gray-200"
      >
        {/* Encabezado */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0057FF] font-bold">
            Portafolio de Innovación
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-slate-900">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Sistemas inteligentes, plataformas digitales e ingeniería mecatrónica desarrollada para la transformación digital.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={item.isInteractive ? () => setIsLiaterOpen(true) : undefined}
              className={`glass rounded-3xl p-10 flex flex-col justify-between border border-slate-200/90 transition-colors ${
                item.isInteractive
                  ? "cursor-pointer hover:border-[#0057FF]/40 hover:bg-slate-50/40"
                  : "cursor-default"
              }`}
            >
              <div>
                <span className="text-xs text-[#0057FF] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-[#0057FF]/10 border border-[#0057FF]/20">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold mt-5 mb-3 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">
                  {item.desc}
                </p>
              </div>

              {item.isInteractive && (
                <div className="flex items-center text-sm font-semibold text-[#0057FF]">
                  Ver demostración interactiva <span className="ml-1.5">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modal interactivo de LIATER */}
      <LiaterDemoModal
        isOpen={isLiaterOpen}
        onClose={() => setIsLiaterOpen(false)}
      />
    </>
  );
}
