"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { View, Float, Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ← MÓDULO SCOPE: registrar plugins una sola vez
gsap.registerPlugin(useGSAP, ScrollTrigger);

// ── Escena 3D de Alta Fidelidad del Núcleo Corenius ─────────────────
function AIScene() {
  const groupRef = useRef();
  const cArcRef = useRef();
  const innerCoreRef = useRef();
  const innerLatticeRef = useRef();
  const dataCubesGroupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

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

    // Sección 1→2 (Cerebro y Máquina): Rotación dinámica y leve inclinación 3D
    tl.to(groupRef.current.position, { x: 0.9, y: 0, z: 0.3, duration: 1 }, 0);
    tl.to(groupRef.current.rotation, { y: Math.PI * 0.75, x: 0.2, z: -0.1, duration: 1 }, 0);
    if (dataCubesGroupRef.current) {
      tl.to(dataCubesGroupRef.current.position, { x: -0.6, z: 0.4, duration: 1 }, 0);
    }

    // Sección 2→3 (Ingeniería Transparente): Vista explosionada con separación de capas
    tl.to(groupRef.current.position, { x: -0.9, y: 0.1, z: 0.4, duration: 1 }, 1);
    tl.to(groupRef.current.rotation, { y: Math.PI * 1.6, x: -0.25, z: 0.15, duration: 1 }, 1);
    if (cArcRef.current) {
      tl.to(cArcRef.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 1 }, 1);
    }
    if (innerCoreRef.current) {
      tl.to(innerCoreRef.current.position, { z: 0.8, duration: 1 }, 1);
    }
    if (ring1Ref.current) {
      tl.to(ring1Ref.current.rotation, { x: Math.PI * 0.85, duration: 1 }, 1);
    }
    if (ring2Ref.current) {
      tl.to(ring2Ref.current.rotation, { y: Math.PI * 0.9, duration: 1 }, 1);
    }

    // Sección 3→4 (Construido para el Futuro): Re-ensamble centrado majestuoso
    tl.to(groupRef.current.position, { x: 0, y: 0.3, z: 0.2, duration: 1 }, 2);
    tl.to(groupRef.current.rotation, { y: Math.PI * 2.5, x: 0.1, z: 0, duration: 1 }, 2);
    if (cArcRef.current) {
      tl.to(cArcRef.current.scale, { x: 1, y: 1, z: 1, duration: 1 }, 2);
    }
    if (innerCoreRef.current) {
      tl.to(innerCoreRef.current.position, { z: 0, duration: 1 }, 2);
    }
  });

  // Animación idle continua ultra fluida
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = t * 0.55;
      innerCoreRef.current.rotation.x = t * 0.28;
    }
    if (innerLatticeRef.current) {
      innerLatticeRef.current.rotation.y = -t * 0.35;
      innerLatticeRef.current.rotation.z = t * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = -t * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = t * 0.18;
    }
    if (dataCubesGroupRef.current) {
      dataCubesGroupRef.current.children.forEach((cube, i) => {
        cube.rotation.x = t * (0.4 + i * 0.06);
        cube.rotation.y = t * (0.35 + i * 0.08);
      });
    }
  });

  // Matriz de cubos de dispersión de alta definición (Datos / IA)
  const dataCubes = [
    { pos: [-1.25, 0.18, 0.15], size: 0.13, color: "#00C2FF" },
    { pos: [-1.05, 0.52, -0.15], size: 0.10, color: "#0066FF" },
    { pos: [-1.15, -0.42, 0.2], size: 0.11, color: "#00C2FF" },
    { pos: [-1.45, -0.18, -0.08], size: 0.08, color: "#0066FF" },
    { pos: [-0.9, 0.72, 0.08], size: 0.07, color: "#00C2FF" },
    { pos: [-0.85, -0.62, -0.15], size: 0.09, color: "#0066FF" },
    { pos: [-1.6, 0.25, 0.02], size: 0.06, color: "#00C2FF" },
  ];

  return (
    // position={[0, 0, 0]} Centrado perfectamente en pantalla
    <group ref={groupRef} scale={[0.62, 0.62, 0.62]} position={[0, 0, 0]}>
      {/* ── Iluminación Studio PBR ── */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[10, 12, 8]} intensity={4.0} color="#00C2FF" />
      <directionalLight position={[-10, -10, -6]} intensity={3.5} color="#0066FF" />
      <pointLight position={[0, 0, 3.5]} intensity={3.0} color="#00C2FF" distance={10} />
      <pointLight position={[0, -2, -2]} intensity={2.0} color="#0A2540" distance={8} />

      {/* ── Isotipo 3D: Arco 'C' Principal de Corenius ── */}
      <group ref={cArcRef} rotation={[0, 0, Math.PI * 0.2]}>
        {/* Arco exterior principal (Azul Eléctrico #0066FF con acabado metálico automotriz) */}
        <mesh rotation={[0, 0, Math.PI * 0.1]}>
          <torusGeometry args={[1.4, 0.24, 64, 160, Math.PI * 1.55]} />
          <meshPhysicalMaterial
            color="#0066FF"
            metalness={0.9}
            roughness={0.12}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
            reflectivity={0.95}
            emissive="#002D80"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Cinta interna luminosa (Azul Cian #00C2FF reflectivo de alta gama) */}
        <mesh rotation={[0, 0, Math.PI * 0.25]} scale={[0.88, 0.88, 0.88]}>
          <torusGeometry args={[1.4, 0.12, 48, 140, Math.PI * 1.45]} />
          <meshPhysicalMaterial
            color="#00C2FF"
            metalness={0.92}
            roughness={0.08}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            emissive="#00C2FF"
            emissiveIntensity={0.9}
          />
        </mesh>
      </group>

      {/* ── Núcleo Cuántico Central: Cristal Multifacético con Holograma ── */}
      <group ref={innerCoreRef}>
        {/* Cristal interior sólido con refracción */}
        <mesh>
          <icosahedronGeometry args={[0.52, 1]} />
          <meshPhysicalMaterial
            color="#00C2FF"
            metalness={0.3}
            roughness={0.1}
            transmission={0.8}
            thickness={0.5}
            emissive="#0066FF"
            emissiveIntensity={0.7}
          />
        </mesh>

        {/* Enrejado holográfico externo */}
        <mesh ref={innerLatticeRef}>
          <icosahedronGeometry args={[0.62, 2]} />
          <meshStandardMaterial
            color="#00C2FF"
            wireframe
            emissive="#00C2FF"
            emissiveIntensity={1.8}
          />
        </mesh>
      </group>

      {/* ── Anillos de Circuitos & Telemetría Orbital ── */}
      <mesh ref={ring1Ref} rotation-x={Math.PI / 2.3}>
        <torusGeometry args={[1.75, 0.016, 24, 160]} />
        <meshPhysicalMaterial
          color="#00C2FF"
          metalness={1.0}
          roughness={0.1}
          emissive="#00C2FF"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation-x={Math.PI / 3.2} rotation-y={Math.PI / 5}>
        <torusGeometry args={[2.05, 0.01, 24, 160]} />
        <meshPhysicalMaterial
          color="#0066FF"
          transparent
          opacity={0.45}
          metalness={0.8}
          emissive="#0066FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* ── Constelación de Datos / IA (Cubos de dispersión) ── */}
      <group ref={dataCubesGroupRef}>
        {dataCubes.map((cube, idx) => (
          <mesh key={idx} position={cube.pos}>
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshPhysicalMaterial
              color={cube.color}
              metalness={0.9}
              roughness={0.15}
              clearcoat={0.9}
              emissive={cube.color}
              emissiveIntensity={1.1}
            />
          </mesh>
        ))}
      </group>

      {/* Sombra de contacto suave para asentar el objeto */}
      <ContactShadows position={[0, -2.2, 0]} opacity={0.35} scale={8} blur={2.5} far={4} color="#00C2FF" />
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
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.35}>
        <AIScene />
      </Float>
      <Environment preset="city" />
    </View>
  );
}
