"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);

  // Posición directa en la punta del cursor
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Movimiento rápido y reactivo
  const cursorX = useSpring(rawX, { damping: 26, stiffness: 450, mass: 0.1 });
  const cursorY = useSpring(rawY, { damping: 26, stiffness: 450, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rawX, rawY, isVisible]);

  if (!isVisible) return null;

  return (
    /* Punto azul pronunciado y nítido directamente en la punta del cursor */
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        width: 10,
        height: 10,
        backgroundColor: "#0057FF",
        boxShadow:
          "0 0 12px 3px rgba(0, 87, 255, 0.85), 0 0 20px 6px rgba(0, 200, 242, 0.45)",
      }}
    />
  );
}
