"use client";

import { useEffect, useState } from "react";

export default function LiaterDemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("clase");

  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop con Blur - Mantiene el aura del main site pero más oscuro */}
      <div 
        className="absolute inset-0 bg-[#050D1A]/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container - LIATER Colors: #14213D (Navy) and #FCA311 (Gold) */}
      <div 
        className="relative w-full max-w-5xl h-[80vh] min-h-[600px] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(252,163,17,0.15)] animate-in fade-in zoom-in-95 duration-300"
        style={{
          background: "#e2e8f0", // bg-color from LIATER
          border: "1px solid rgba(252, 163, 17, 0.4)",
        }}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 text-gray-700 hover:text-black transition-colors border border-black/10"
        >
          ✕
        </button>

        {/* --- Sidebar Simulado (LIATER Navy #14213D) --- */}
        <div className="hidden md:flex w-64 flex-col border-r border-black/5 p-6" style={{ backgroundColor: "#14213D" }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#14213D] font-bold text-lg" style={{ backgroundColor: "#FCA311" }}>
              L
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-sm">Liater LMS</span>
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest mb-4 font-mono" style={{ color: "rgba(255,255,255,0.55)" }}>Diplomado Activo</div>
            <button className="w-full text-left px-4 py-3 rounded-xl text-white text-sm font-medium border transition-colors" style={{ backgroundColor: "rgba(252,163,17,0.15)", borderColor: "rgba(255,255,255,0.08)" }}>
              📊 Panel Principal
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
              📚 Módulos y Clases
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
              👥 Participantes
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
              ⚙️ Configuración
            </button>
          </div>

          <div className="mt-auto pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: "rgba(252,163,17,0.2)", border: "1px solid rgba(252,163,17,0.5)", color: "#FCA311" }}>
                AD
              </div>
              <div>
                <p className="text-sm text-white font-medium">Administrador</p>
                <p className="text-xs" style={{ color: "#FCA311" }}>Corenius Staff</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Contenido Principal Simulado (LIATER Light Background) --- */}
        <div className="flex-1 flex flex-col p-6 sm:p-10 overflow-y-auto" style={{ backgroundColor: "#e2e8f0" }}>
          
          {/* Header */}
          <div className="mb-8">
            <span className="px-3 py-1 text-xs rounded-full font-mono uppercase" style={{ backgroundColor: "rgba(20,33,61,0.10)", color: "#14213D" }}>
              Módulo 3: Inteligencia Artificial
            </span>
            <h2 className="text-3xl font-bold mt-4" style={{ color: "#000000" }}>Redes Neuronales Convolucionales</h2>
            <p className="mt-2" style={{ color: "#6b7280" }}>Clase 4 • Impartida por el Dr. Alan Turing</p>
          </div>

          {/* Video Placeholder */}
          <div className="relative w-full aspect-video rounded-2xl bg-black/90 border border-black/10 overflow-hidden group mb-8 flex items-center justify-center shadow-sm">
            {/* Animación de fondo sutil */}
            <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at center, rgba(252,163,17,0.3) 0%, transparent 70%)" }} />
            
            <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#FCA311]/80 transition-all duration-300 z-10">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
            </button>

            {/* Barra de progreso falsa */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
              <div className="h-full w-1/3" style={{ backgroundColor: "#FCA311" }} />
            </div>
          </div>

          {/* Tabs Nav */}
          <div className="flex gap-6 border-b border-black/10 mb-6">
            <button 
              onClick={() => setActiveTab("clase")}
              className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'clase' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Recursos de Clase
              {activeTab === 'clase' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#FCA311" }} />
              )}
            </button>
            <button 
              onClick={() => setActiveTab("preguntas")}
              className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'preguntas' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Preguntas (3)
              {activeTab === 'preguntas' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#FCA311" }} />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            {activeTab === 'clase' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "📄", title: "Presentación_CNN_v2.pdf", size: "4.2 MB" },
                  { icon: "📊", title: "Dataset_Entrenamiento.csv", size: "12.5 MB" },
                  { icon: "💻", title: "Script_Python_Modelo.py", size: "15 KB" },
                ].map((file, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white border-b-gray-200 hover:bg-white transition-colors cursor-pointer shadow-sm hover:-translate-y-0.5">
                    <div className="text-2xl">{file.icon}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{file.title}</p>
                      <p className="text-xs" style={{ color: "#9ca3af" }}>{file.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: "#14213D", color: "#FCA311" }}>A</div>
                    <span className="text-sm font-medium text-black">Ana Gómez</span>
                    <span className="text-xs ml-auto" style={{ color: "#9ca3af" }}>Hace 2 horas</span>
                  </div>
                  <p className="text-sm" style={{ color: "#1a1a1a" }}>¿Cuál es la función de activación recomendada para la última capa en clasificación multiclase?</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
