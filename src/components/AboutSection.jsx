"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const misionRef = useRef(null);
  const visionRef = useRef(null);
  const pilaresRef = useRef(null);

  useGSAP(
    () => {
      // 1. Animación del Encabezado
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

      // 2. Tarjeta Misión (Emerge desde la izquierda y abajo con el scroll)
      gsap.fromTo(
        misionRef.current,
        {
          opacity: 0.15,
          x: -50,
          y: 60,
        },
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

      // 3. Tarjeta Visión (Emerge desde la derecha y abajo con el scroll)
      gsap.fromTo(
        visionRef.current,
        {
          opacity: 0.15,
          x: 50,
          y: 60,
        },
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

      // 4. Barra de Pilares inferiores
      gsap.fromTo(
        pilaresRef.current,
        {
          opacity: 0.2,
          y: 50,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: pilaresRef.current,
            start: "top 95%",
            end: "top 75%",
            scrub: 1,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 border-t border-gray-200 bg-gray-50/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-[#0057FF]/20">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#0057FF] font-bold">
              Propósito &amp; Identidad
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-4 text-slate-900">
            Impulsando el Futuro de las Organizaciones
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Guiados por la ingeniería de precisión y la inteligencia digital para crear un impacto sostenible y escalable.
          </p>
        </div>

        {/* Grid Misión & Visión con ScrollTrigger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Tarjeta: Misión */}
          <div
            ref={misionRef}
            className="relative rounded-3xl glass p-8 sm:p-10 flex flex-col justify-between border border-slate-200/90"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#0057FF]/10 text-[#0057FF] border border-[#0057FF]/20">
                  Misión
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#0057FF]/10 border border-[#0057FF]/20 flex items-center justify-center text-[#0057FF]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-slate-900">
                Soluciones Tecnológicas con Propósito Real
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-8">
                En <strong className="font-semibold text-slate-900">Corenius</strong> diseñamos e implementamos soluciones tecnológicas personalizadas que responden a las necesidades reales de cada organización. Integramos software, inteligencia artificial, automatización y tecnologías digitales para transformar procesos, mejorar la toma de decisiones y facilitar el crecimiento sostenible de nuestros clientes.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
              <span className="px-3 py-1 rounded-lg bg-gray-100">Personalización</span>
              <span className="px-3 py-1 rounded-lg bg-gray-100">IA &amp; Automatización</span>
              <span className="px-3 py-1 rounded-lg bg-gray-100">Crecimiento Sostenible</span>
            </div>
          </div>

          {/* Tarjeta: Visión */}
          <div
            ref={visionRef}
            className="relative rounded-3xl glass p-8 sm:p-10 flex flex-col justify-between border border-slate-200/90"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#0057FF]/10 text-[#0057FF] border border-[#0057FF]/20">
                  Visión
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#0057FF]/10 border border-[#0057FF]/20 flex items-center justify-center text-[#0057FF]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 22l10-5 10 5L12 2z"></path>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-slate-900">
                Referente Global en Transformación Digital
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-8">
                Ser una empresa referente en transformación digital en Colombia y con proyección internacional, reconocida por convertir los desafíos de las organizaciones en soluciones tecnológicas inteligentes, personalizadas y escalables, impulsando una evolución continua de sus procesos y capacidades.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
              <span className="px-3 py-1 rounded-lg bg-gray-100">Proyección Internacional</span>
              <span className="px-3 py-1 rounded-lg bg-gray-100">Escalabilidad</span>
              <span className="px-3 py-1 rounded-lg bg-gray-100">Evolución Continua</span>
            </div>
          </div>
        </div>

        {/* Pilares Oficiales */}
        <div
          ref={pilaresRef}
          className="mt-12 p-6 rounded-2xl glass border border-gray-200 flex flex-col md:flex-row items-center justify-around gap-6 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#0057FF]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </span>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0057FF] font-bold">Pilar 01</p>
              <p className="text-base font-bold text-slate-900">Innovación Constante</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-200" />
          <div className="flex items-center gap-3">
            <span className="text-[#0057FF]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </span>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0057FF] font-bold">Pilar 02</p>
              <p className="text-base font-bold text-slate-900">Inteligencia Aplicada</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-200" />
          <div className="flex items-center gap-3">
            <span className="text-[#0057FF]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </span>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0057FF] font-bold">Pilar 03</p>
              <p className="text-base font-bold text-slate-900">Crecimiento Sostenible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
