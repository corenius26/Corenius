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

    // Sección 1→2: Gira hacia la derecha y expande los cubos de datos
    tl.to(groupRef.current.position, { x: 2.6, y: -0.2, z: 0.5, duration: 1 }, 0);
    tl.to(groupRef.current.rotation, { y: Math.PI * 0.9, x: 0.25, duration: 1 }, 0);
    if (dataCubesGroupRef.current) {
      tl.to(dataCubesGroupRef.current.position, { x: -1.2, duration: 1 }, 0);
    }

    // Sección 2→3: Vista explosionada - Desacopla el arco C, el núcleo y los datos
    tl.to(groupRef.current.position, { x: -2.6, y: 0.2, duration: 1 }, 1);
    tl.to(groupRef.current.rotation, { y: Math.PI * 1.8, x: -0.3, duration: 1 }, 1);
    if (cArcRef.current) {
      tl.to(cArcRef.current.scale, { x: 1.25, y: 1.25, z: 1.25, duration: 1 }, 1);
    }
    if (innerCoreRef.current) {
      tl.to(innerCoreRef.current.position, { z: 1.4, duration: 1 }, 1);
    }
    if (circuitRingRef.current) {
      tl.to(circuitRingRef.current.rotation, { x: Math.PI, duration: 1 }, 1);
    }

    // Sección 3→4: Re-ensamble holográfico central para Escala
    tl.to(groupRef.current.position, { x: 0, y: 0.6, z: 0, duration: 1 }, 2);
    tl.to(groupRef.current.rotation, { y: Math.PI * 2.5, x: 0.15, duration: 1 }, 2);
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
      groupRef.current.position.y += Math.sin(t * 1.2) * 0.0015;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = t * 0.7;
      innerCoreRef.current.rotation.x = t * 0.35;
    }
    if (circuitRingRef.current) {
      circuitRingRef.current.rotation.z = -t * 0.4;
    }
    if (dataCubesGroupRef.current) {
      dataCubesGroupRef.current.children.forEach((cube, i) => {
        cube.rotation.x = t * (0.5 + i * 0.1);
        cube.rotation.y = t * (0.4 + i * 0.15);
      });
    }
  });

  // Matriz de cubos de dispersión (Representa Datos / IA del logo de Corenius)
  const dataCubes = [
    { pos: [-1.7, 0.2, 0.2], size: 0.18, color: "#00C2FF" },
    { pos: [-1.4, 0.6, -0.2], size: 0.14, color: "#0066FF" },
    { pos: [-1.5, -0.5, 0.3], size: 0.16, color: "#00C2FF" },
    { pos: [-1.9, -0.2, -0.1], size: 0.12, color: "#0066FF" },
    { pos: [-1.2, 0.9, 0.1], size: 0.11, color: "#00C2FF" },
    { pos: [-1.1, -0.8, -0.2], size: 0.13, color: "#0066FF" },
    { pos: [-2.1, 0.3, 0.0], size: 0.09, color: "#00C2FF" },
  ];

  return (
    <group ref={groupRef}>
      {/* Iluminación con la paleta de Corenius */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 6]} intensity={3.5} color="#00C2FF" />
      <directionalLight position={[-10, -10, -6]} intensity={3.0} color="#0066FF" />
      <pointLight position={[0, 0, 3]} intensity={2.5} color="#00C2FF" distance={8} />

      {/* ── Isotipo 3D: Arco 'C' Principal de Corenius ── */}
      <group ref={cArcRef} rotation={[0, 0, Math.PI * 0.2]}>
        {/* Arco exterior principal */}
        <mesh rotation={[0, 0, Math.PI * 0.1]}>
          <torusGeometry args={[1.5, 0.28, 36, 100, Math.PI * 1.55]} />
          <meshStandardMaterial
            color="#0066FF"
            metalness={0.85}
            roughness={0.15}
            emissive="#0040AA"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Cinta interna luminosa (Volumen 3D con degradado) */}
        <mesh rotation={[0, 0, Math.PI * 0.25]} scale={[0.88, 0.88, 0.88]}>
          <torusGeometry args={[1.5, 0.14, 24, 80, Math.PI * 1.45]} />
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
        <octahedronGeometry args={[0.75, 2]} />
        <meshStandardMaterial
          color="#00C2FF"
          wireframe
          emissive="#00C2FF"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* ── Anillo de Circuitos & Integración ── */}
      <mesh ref={circuitRingRef} rotation-x={Math.PI / 2.3}>
        <torusGeometry args={[1.9, 0.02, 16, 120]} />
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
