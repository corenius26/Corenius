"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ← MÓDULO SCOPE: registrar plugins una sola vez
gsap.registerPlugin(useGSAP, ScrollTrigger);

// ── Escena 3D interna ──────────────────────────────────────────────
function AIScene() {
  const groupRef = useRef();
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useGSAP(() => {
    // Guard: asegurar que los refs existan
    if (!groupRef.current || !coreRef.current || !ring1Ref.current || !ring2Ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",   // ← apunta a clase CSS de la sección HTML
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // sin 'scroller' → el body scrollea naturalmente
      },
    });

    // Section 1→2: rotar y mover a la derecha
    tl.to(groupRef.current.position, { x: 2.5, duration: 1 }, 0);
    tl.to(groupRef.current.rotation, { y: Math.PI, duration: 1 }, 0);

    // Section 2→3: explosión de anillos
    tl.to(groupRef.current.position, { x: -2.5, duration: 1 }, 1);
    tl.to(ring1Ref.current.position, { y: 1.6, duration: 1 }, 1);
    tl.to(ring2Ref.current.position, { y: -1.6, duration: 1 }, 1);
    tl.to(coreRef.current.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 }, 1);

    // Section 3→4: vista de rayos X
    tl.to(groupRef.current.position, { x: 0, y: 0.8, duration: 1 }, 2);
    tl.to(groupRef.current.rotation, { y: Math.PI * 2, x: Math.PI / 5, duration: 1 }, 2);
  });
  // ← useGSAP limpia automáticamente, no se necesita return

  // Animación idle (giro continuo)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.x = t * 0.2;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Luces con la paleta de Corenius */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={3.5} color="#00FFFF" />
      <directionalLight position={[-10, -10, -5]} intensity={2.5} color="#0F52BA" />
      <pointLight position={[0, 0, 3]} intensity={2.5} color="#00FFFF" distance={8} />

      {/* Núcleo IA (Cyan Eléctrico #00FFFF) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#00FFFF"
          wireframe
          emissive="#00FFFF"
          emissiveIntensity={1.4}
        />
      </mesh>

      {/* Anillo 1 — orbital interior (Cerulean #0090BC / Sapphire #0F52BA) */}
      <mesh ref={ring1Ref} rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.6, 0.045, 32, 120]} />
        <meshStandardMaterial
          color="#0090BC"
          metalness={0.9}
          roughness={0.15}
          emissive="#0090BC"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Anillo 2 — orbital exterior (Deep Blue #0047AB con brillo #00FFFF) */}
      <mesh ref={ring2Ref} rotation-x={Math.PI / 3} rotation-y={Math.PI / 5}>
        <torusGeometry args={[2.2, 0.03, 32, 120]} />
        <meshStandardMaterial
          color="#0047AB"
          transparent
          opacity={0.7}
          metalness={0.8}
          roughness={0.2}
          emissive="#0F52BA"
          emissiveIntensity={0.6}
        />
      </mesh>
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
