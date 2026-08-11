"use client";

import { useState } from "react";
import LiaterDemoModal from "./LiaterDemoModal";

export default function ProjectsGrid() {
  const [isLiaterOpen, setIsLiaterOpen] = useState(false);

  const projects = [
    {
      id: "liater",
      title: "LIATER LMS (Learning Management System)",
      tag: "React · Supabase · EdTech",
      desc: "Plataforma web integral para la gestión y entrega de programas académicos, con enrutamiento contextual por roles (Admin, Profesor, Estudiante) y seguridad a nivel de base de datos.",
      onClick: () => setIsLiaterOpen(true),
    },
    {
      id: "vision",
      title: "Visión Artificial & Robótica",
      tag: "Computer Vision · Edge AI",
      desc: "Inspección autónoma y clasificación en tiempo real con modelos de redes neuronales convolucionales.",
    },
    {
      id: "iot",
      title: "Automatización & Telemetría IoT",
      tag: "Hardware · Supabase",
      desc: "Monitoreo predictivo y control distribuido de actuadores con sincronización cloud en tiempo real.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((item) => (
          <div
            key={item.id}
            onClick={item.onClick}
            className={`glass rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border border-cyan-500/20 group hover:border-[#00C8F2]/70 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(0,200,242,0.2)] ${
              item.onClick ? "cursor-pointer hover:bg-[#071A45]/40" : "cursor-default"
            }`}
          >
            <div>
              <span className="text-[11px] text-[#00C8F2] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#071A45]/80 border border-cyan-500/30">
                {item.tag}
              </span>
              <h3 className="text-2xl font-bold mt-5 mb-3 group-hover:text-[#00C8F2] transition-colors text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                {item.desc}
              </p>
            </div>

            {item.onClick && (
              <div className="flex items-center text-sm font-semibold text-[#00C8F2] group-hover:translate-x-2 transition-transform">
                Ver demostración interactiva <span className="ml-1.5">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <LiaterDemoModal 
        isOpen={isLiaterOpen} 
        onClose={() => setIsLiaterOpen(false)} 
      />
    </>
  );
}
