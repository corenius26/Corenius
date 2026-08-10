"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Slogan */}
        <Link href="/" className="flex items-center gap-3.5 group">
          {/* Logo SVG Icon */}
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="coreniusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FFFF" />
                  <stop offset="40%" stopColor="#0090BC" />
                  <stop offset="75%" stopColor="#0F52BA" />
                  <stop offset="100%" stopColor="#0047AB" />
                </linearGradient>
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer C Curve */}
              <path
                d="M 50 12 C 26 12 10 28 10 50 C 10 72 26 88 50 88 C 65 88 78 79 84 66 C 81 64 74 62 68 68 C 64 72 57 76 50 76 C 35 76 22 64 22 50 C 22 36 35 24 50 24 C 62 24 72 32 75 43 C 82 41 85 36 84 32 C 77 20 65 12 50 12 Z"
                fill="url(#coreniusGrad)"
              />

              {/* Inner Dynamic Arc */}
              <path
                d="M 46 28 C 34 30 25 40 25 50 C 25 60 34 70 46 72 C 38 66 35 58 35 50 C 35 42 38 34 46 28 Z"
                fill="#00FFFF"
                opacity="0.9"
              />

              {/* Cyan Pulse Node */}
              <circle cx="78" cy="50" r="8" fill="#00FFFF" filter="url(#cyanGlow)" />
            </svg>
          </div>

          {/* Typography */}
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-[0.18em] text-white font-sans leading-none group-hover:text-cyan-400 transition-colors">
              CORENIUS
            </span>
            <span className="text-[9px] font-semibold tracking-[0.28em] text-gray-300 uppercase mt-1 leading-none">
              INNOVACIÓN CON PROPÓSITO
            </span>
          </div>
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
