"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Array de puntos para dibujar el hilo / estela recta
    const points = [];
    const MAX_POINTS = 35; // Longitud del hilo
    let mouse = { x: -100, y: -100, isMoving: false };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoving = true;

      // Añadir nuevo punto al hilo
      points.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        maxAge: 25, // Duración del trazo
      });

      if (points.length > MAX_POINTS) {
        points.shift();
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -100;
      mouse.y = -100;
      mouse.isMoving = false;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // ── 1. Dibujar el hilo recto que deja el cursor ──
      if (points.length > 1) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          p1.age += 1;

          // Opacidad progresiva según la edad del punto
          const alpha = Math.max(0, 1 - p1.age / p1.maxAge) * 0.75;
          const progress = i / points.length;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // Estilo de línea recta: azul eléctrico (#0057FF) a cian (#00C8F2)
          ctx.strokeStyle = `rgba(0, 87, 255, ${alpha})`;
          ctx.lineWidth = 1.8 * progress + 0.6; // Hilo fino y afilado
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowColor = "rgba(0, 200, 242, 0.5)";
          ctx.shadowBlur = 4;
          ctx.stroke();
        }

        // Limpiar puntos expirados
        while (points.length > 0 && points[0].age >= points[0].maxAge) {
          points.shift();
        }
      }

      // ── 2. Dibujar el punto azul pequeño y nítido en la punta ──
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2); // Radio de 3px (pequeño y nítido)
        ctx.fillStyle = "#0057FF";
        ctx.shadowColor = "#00C8F2";
        ctx.shadowBlur = 8;
        ctx.fill();

        // Núcleo blanco diminuto para máxima definición
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 0;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
