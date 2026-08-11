"use client";

import Image from "next/image";

export default function CoreniusLogo({
  variant = "blanco", // "blanco" | "color" | "isotipo"
  showTagline = true,
  className = "",
  size = "normal",
}) {
  const height = size === "large" ? 48 : size === "small" ? 28 : 36;

  if (variant === "isotipo") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Image
          src="/brand/Corenius_Isotipo_Color.svg"
          alt="Corenius Isotipo"
          width={height}
          height={height}
          className="w-auto object-contain"
          priority
        />
      </div>
    );
  }

  const logoSrc =
    variant === "color"
      ? "/brand/Corenius_Logo_Principal_Color.svg"
      : "/brand/Corenius_Logo_Blanco.svg";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="Corenius - Transformación Digital"
        width={height * 4}
        height={height}
        style={{ height: `${height}px`, width: "auto" }}
        className="object-contain"
        priority
      />
    </div>
  );
}
