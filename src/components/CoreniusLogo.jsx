"use client";

export default function CoreniusLogo({ showTagline = true, className = "", size = "normal" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 3D C Emblem with Pixel/Data Dispersion */}
      <svg
        viewBox="0 0 160 160"
        className={size === "large" ? "w-14 h-14" : "w-10 h-10"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cGradOuter" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#00C2FF" />
            <stop offset="45%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#0A2540" />
          </linearGradient>
          <linearGradient id="cGradInner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="70%" stopColor="#00C2FF" />
          </linearGradient>
          <filter id="dataGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Data/IA Pixel dispersion cubes on the left */}
        <rect x="12" y="70" width="13" height="13" rx="2.5" fill="#00C2FF" filter="url(#dataGlow)" />
        <rect x="30" y="52" width="11" height="11" rx="2" fill="#00C2FF" />
        <rect x="30" y="88" width="11" height="11" rx="2" fill="#0066FF" />
        <rect x="18" y="96" width="9" height="9" rx="2" fill="#00C2FF" opacity="0.9" />
        <rect x="18" y="44" width="9" height="9" rx="2" fill="#0066FF" opacity="0.9" />
        <rect x="6" y="56" width="7" height="7" rx="1.5" fill="#00C2FF" opacity="0.65" />
        <rect x="44" y="36" width="9" height="9" rx="2" fill="#00C2FF" />
        <rect x="44" y="106" width="9" height="9" rx="2" fill="#0066FF" />

        {/* Main 3D Curve 'C' Shape */}
        <path
          d="M 106 24 C 62 24 38 52 38 80 C 38 108 62 136 106 136 C 130 136 146 124 150 110 C 142 106 132 102 120 110 C 112 116 100 122 86 122 C 60 122 52 102 52 80 C 52 58 60 38 86 38 C 102 38 116 46 122 56 C 132 52 142 44 146 36 C 136 26 122 24 106 24 Z"
          fill="url(#cGradOuter)"
        />

        {/* Inner dynamic volume ribbon for 3D depth */}
        <path
          d="M 94 38 C 66 40 52 60 52 80 C 52 100 66 120 94 122 C 116 122 132 110 142 98 C 134 96 126 98 118 104 C 106 112 94 112 84 108 C 68 102 64 88 64 80 C 64 72 68 58 84 52 C 98 46 114 52 122 60 C 130 52 138 44 144 40 C 130 34 110 36 94 38 Z"
          fill="url(#cGradInner)"
          opacity="0.95"
        />
      </svg>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="text-[26px] font-bold tracking-tight text-white leading-none font-sans">
          <span>Core</span>
          <span className="gradient-corenius">nius</span>
        </div>
        {showTagline && (
          <span className="text-[8px] font-semibold tracking-[0.32em] text-gray-400 uppercase mt-1 leading-none">
            TRANSFORMACIÓN DIGITAL
          </span>
        )}
      </div>
    </div>
  );
}
