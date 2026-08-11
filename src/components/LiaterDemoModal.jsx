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
      {/* Backdrop con Blur */}
      <div 
        className="absolute inset-0 bg-[#050D1A]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl h-[80vh] min-h-[600px] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,87,255,0.2)] animate-in fade-in zoom-in-95 duration-300"
        style={{
          background: "rgba(10, 20, 40, 0.95)",
          border: "1px solid rgba(0, 200, 242, 0.2)",
        }}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
        >
          ✕
        </button>

        {/* --- Sidebar Simulado --- */}
        <div className="hidden md:flex w-64 flex-col bg-[#050D1A]/50 border-r border-white/5 p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0057FF] to-[#00C8F2] flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-sm">Liater LMS</span>
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-mono">Diplomado Activo</div>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 transition-colors">
              📊 Panel Principal
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 text-sm font-medium transition-colors">
              📚 Módulos y Clases
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 text-sm font-medium transition-colors">
              👥 Participantes
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 text-sm font-medium transition-colors">
              ⚙️ Configuración
            </button>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                AD
              </div>
              <div>
                <p className="text-sm text-white font-medium">Administrador</p>
                <p className="text-xs text-cyan-400">Corenius Staff</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Contenido Principal Simulado --- */}
        <div className="flex-1 flex flex-col p-6 sm:p-10 overflow-y-auto">
          
          {/* Header */}
          <div className="mb-8">
            <span className="px-3 py-1 text-xs rounded-full bg-[#0057FF]/20 text-[#00C8F2] border border-[#0057FF]/30 font-mono uppercase">
              Módulo 3: Inteligencia Artificial
            </span>
            <h2 className="text-3xl font-bold text-white mt-4">Redes Neuronales Convolucionales</h2>
            <p className="text-gray-400 mt-2">Clase 4 • Impartida por el Dr. Alan Turing</p>
          </div>

          {/* Video Placeholder */}
          <div className="relative w-full aspect-video rounded-2xl bg-black/50 border border-white/10 overflow-hidden group mb-8 flex items-center justify-center">
            {/* Animación de fondo sutil */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0057FF]/20 to-transparent opacity-50" />
            
            <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#0057FF]/40 transition-all duration-300 z-10">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
            </button>

            {/* Barra de progreso falsa */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
              <div className="h-full bg-[#00C8F2] w-1/3" />
            </div>
          </div>

          {/* Tabs Nav */}
          <div className="flex gap-6 border-b border-white/10 mb-6">
            <button 
              onClick={() => setActiveTab("clase")}
              className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'clase' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Recursos de Clase
              {activeTab === 'clase' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00C8F2]" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab("preguntas")}
              className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'preguntas' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Preguntas (3)
              {activeTab === 'preguntas' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00C8F2]" />
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
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="text-2xl">{file.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-white">{file.title}</p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs text-purple-300">A</div>
                    <span className="text-sm text-gray-300 font-medium">Ana Gómez</span>
                    <span className="text-xs text-gray-500 ml-auto">Hace 2 horas</span>
                  </div>
                  <p className="text-sm text-gray-400">¿Cuál es la función de activación recomendada para la última capa en clasificación multiclase?</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
