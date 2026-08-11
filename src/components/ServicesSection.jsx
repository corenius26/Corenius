"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "auto",
    badge: "Automatización & IA",
    title: "Sincronización Total",
    desc: "Acoplamos algoritmos de machine learning directamente con actuadores físicos, microcontroladores y sensores en tiempo real para decisiones en microsegundos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: "arch",
    badge: "Arquitectura Robusta",
    title: "Ingeniería Transparente",
    desc: "Desde modelos de visión artificial hasta hardware industrial dedicado. Diseñamos con modularidad estricta y trazabilidad sin cajas negras.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    id: "scale",
    badge: "Despliegue & Escala",
    title: "Construido para Escalar",
    desc: "Llevamos tu visión desde el primer prototipo funcional en laboratorio hasta la producción y operación industrial continua con la máxima confiabilidad.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // 1. Animación del Header vinculada al Scroll
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
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

      // 2. Animación Parallax / Scroll Scrub dinámico en las 3 tarjetas
      // Con scrub: 1, las tarjetas se mueven y responden directamente al giro de la rueda / scroll
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Desfase de altura para efecto parallax tridimensional al hacer scroll
        const yOffset = i === 0 ? 80 : i === 1 ? 120 : 160;

        gsap.fromTo(
          card,
          {
            opacity: 0.1,
            y: yOffset,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center 50%",
              scrub: 1.2, // Vinculado 100% al movimiento del scroll
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-gray-200"
    >
      {/* Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#0057FF] font-bold">
          Capacidades de Alto Nivel
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-slate-900">
          Ingeniería que Transforma Organizaciones
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Integramos software empresarial, procesamiento inteligente y sistemas electromecánicos a medida.
        </p>
      </div>

      {/* Grid de tarjetas controladas directamente por Scroll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="glass p-10 rounded-3xl border border-slate-200/90 flex flex-col justify-between"
          >
            <div>
              {/* Ícono sutil sin efecto botón */}
              <div className="w-12 h-12 rounded-2xl bg-[#0057FF]/10 border border-[#0057FF]/20 flex items-center justify-center mb-8 text-[#0057FF]">
                {service.icon}
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#0057FF] font-bold">
                {service.badge}
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4 text-slate-900">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
