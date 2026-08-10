"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Slogan */}
        <Link href="/" className="flex flex-col group">
          <span className="text-2xl font-black tracking-[0.18em] text-white leading-none group-hover:text-cyan-400 transition-colors">
            CORENIUS
          </span>
          <span className="text-[9px] font-semibold tracking-[0.28em] text-cyan-400 uppercase mt-1 leading-none">
            INNOVACIÓN CON PROPÓSITO
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
            Soluciones
          </Link>
          <Link href="#ia-mecatronica" className="hover:text-cyan-400 transition-colors">
            Mecatrónica & IA
          </Link>
          <Link href="#proyectos" className="hover:text-cyan-400 transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="hover:text-cyan-400 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-widest text-black transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00FFFF 0%, #0090BC 60%, #0F52BA 100%)",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
            }}
          >
            Comenzar
          </Link>
        </div>

      </div>
    </header>
  );
}
