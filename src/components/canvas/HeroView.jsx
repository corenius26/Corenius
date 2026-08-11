"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ← MÓDULO SCOPE: registrar plugins una sola vez
gsap.registerPlugin(useGSAP, ScrollTrigger);

// ── Escena 3D del Núcleo Corenius (Software, IA & Mecatrónica) ─────
function AIScene() {
  const groupRef = useRef();
  const cArcRef = useRef();
  const innerCoreRef = useRef();
  const dataCubesGroupRef = useRef();
  const circuitRingRef = useRef();

  useGSAP(() => {
    if (!groupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // Sección 1→2 (Cerebro y Máquina): El núcleo se desplaza a la izquierda para dar paso al texto de la derecha
    tl.to(groupRef.current.position, { x: -1.6, y: -0.1, z: 0.2, duration: 1 }, 0);
    tl.to(groupRef.current.rotation, { y: Math.PI * 0.9, x: 0.2, duration: 1 }, 0);
    if (dataCubesGroupRef.current) {
      tl.to(dataCubesGroupRef.current.position, { x: -0.8, duration: 1 }, 0);
    }

    // Sección 2→3 (Ingeniería Transparente): El núcleo se mueve a la derecha mientras el texto está a la izquierda
    tl.to(groupRef.current.position, { x: 1.6, y: 0.1, z: 0.2, duration: 1 }, 1);
    tl.to(groupRef.current.rotation, { y: Math.PI * 1.8, x: -0.2, duration: 1 }, 1);
    if (cArcRef.current) {
      tl.to(cArcRef.current.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 1 }, 1);
    }
    if (innerCoreRef.current) {
      tl.to(innerCoreRef.current.position, { z: 0.9, duration: 1 }, 1);
    }
    if (circuitRingRef.current) {
      tl.to(circuitRingRef.current.rotation, { x: Math.PI * 0.8, duration: 1 }, 1);
    }

    // Sección 3→4 (Escala): Re-ensamble centrado elegante y compacto
    tl.to(groupRef.current.position, { x: 0, y: 0.4, z: 0, duration: 1 }, 2);
    tl.to(groupRef.current.rotation, { y: Math.PI * 2.5, x: 0.1, duration: 1 }, 2);
    if (cArcRef.current) {
      tl.to(cArcRef.current.scale, { x: 1, y: 1, z: 1, duration: 1 }, 2);
    }
    if (innerCoreRef.current) {
      tl.to(innerCoreRef.current.position, { z: 0, duration: 1 }, 2);
    }
  });

  // Animación idle continua
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(t * 1.2) * 0.0012;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = t * 0.6;
      innerCoreRef.current.rotation.x = t * 0.3;
    }
    if (circuitRingRef.current) {
      circuitRingRef.current.rotation.z = -t * 0.35;
    }
    if (dataCubesGroupRef.current) {
      dataCubesGroupRef.current.children.forEach((cube, i) => {
        cube.rotation.x = t * (0.4 + i * 0.08);
        cube.rotation.y = t * (0.35 + i * 0.1);
      });
    }
  });

  // Matriz de cubos de dispersión (Representa Datos / IA del logo de Corenius)
  const dataCubes = [
    { pos: [-1.2, 0.15, 0.15], size: 0.12, color: "#00C2FF" },
    { pos: [-1.0, 0.45, -0.15], size: 0.09, color: "#0066FF" },
    { pos: [-1.1, -0.38, 0.2], size: 0.10, color: "#00C2FF" },
    { pos: [-1.35, -0.15, -0.08], size: 0.08, color: "#0066FF" },
    { pos: [-0.85, 0.65, 0.08], size: 0.07, color: "#00C2FF" },
    { pos: [-0.8, -0.55, -0.15], size: 0.09, color: "#0066FF" },
    { pos: [-1.5, 0.2, 0.0], size: 0.06, color: "#00C2FF" },
  ];

  return (
    // scale={[0.55, 0.55, 0.55]} para un tamaño compacto y balanceado
    <group ref={groupRef} scale={[0.55, 0.55, 0.55]} position={[1.4, 0, 0]}>
      {/* Iluminación con la paleta de Corenius */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 8, 5]} intensity={3.5} color="#00C2FF" />
      <directionalLight position={[-8, -8, -5]} intensity={3.0} color="#0066FF" />
      <pointLight position={[0, 0, 2.5]} intensity={2.5} color="#00C2FF" distance={6} />

      {/* ── Isotipo 3D: Arco 'C' Principal de Corenius ── */}
      <group ref={cArcRef} rotation={[0, 0, Math.PI * 0.2]}>
        {/* Arco exterior principal */}
        <mesh rotation={[0, 0, Math.PI * 0.1]}>
          <torusGeometry args={[1.35, 0.22, 36, 100, Math.PI * 1.55]} />
          <meshStandardMaterial
            color="#0066FF"
            metalness={0.85}
            roughness={0.15}
            emissive="#003588"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Cinta interna luminosa (Volumen 3D con degradado) */}
        <mesh rotation={[0, 0, Math.PI * 0.25]} scale={[0.88, 0.88, 0.88]}>
          <torusGeometry args={[1.35, 0.11, 24, 80, Math.PI * 1.45]} />
          <meshStandardMaterial
            color="#00C2FF"
            metalness={0.9}
            roughness={0.1}
            emissive="#00C2FF"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* ── Núcleo Cuántico Central (Procesamiento & IA) ── */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[0.55, 2]} />
        <meshStandardMaterial
          color="#00C2FF"
          wireframe
          emissive="#00C2FF"
          emissiveIntensity={1.6}
        />
      </mesh>

      {/* ── Anillo de Circuitos & Integración ── */}
      <mesh ref={circuitRingRef} rotation-x={Math.PI / 2.3}>
        <torusGeometry args={[1.65, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#00C2FF"
          transparent
          opacity={0.4}
          emissive="#0066FF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* ── Constelación de Datos / IA (Cubos de dispersión) ── */}
      <group ref={dataCubesGroupRef}>
        {dataCubes.map((cube, idx) => (
          <mesh key={idx} position={cube.pos}>
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshStandardMaterial
              color={cube.color}
              metalness={0.8}
              roughness={0.2}
              emissive={cube.color}
              emissiveIntensity={0.9}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// ── View Portal: conecta la escena 3D a la sección HTML ────────────
export default function HeroView() {
  return (
    <View
      className="
        pointer-events-none
        sticky top-0 left-0
        -mt-[100vh]
        h-screen w-screen
        z-30
      "
    >
      <AIScene />
    </View>
  );
}
