"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { View, Float, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

// ── Núcleo 3D de Corenius: Isotipo 'C' + Cyber Core Energético (Colores Oficiales) ──
function CoreniusCyberCore() {
  const groupRef = useRef();
  const cArcRef = useRef();
  const innerCoreRef = useRef();
  const coreMeshRef = useRef();
  const dataCubesGroupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  // Matriz de cubos de dispersión oficial (Datos / IA del isotipo)
  const dataCubes = [
    { pos: [-1.25, 0.18, 0.15], size: 0.14, color: "#00C8F2" },
    { pos: [-1.05, 0.52, -0.15], size: 0.11, color: "#0057FF" },
    { pos: [-1.15, -0.42, 0.2], size: 0.12, color: "#00C8F2" },
    { pos: [-1.45, -0.18, -0.08], size: 0.09, color: "#007CFF" },
    { pos: [-0.9, 0.72, 0.08], size: 0.08, color: "#00C8F2" },
    { pos: [-0.85, -0.62, -0.15], size: 0.10, color: "#0057FF" },
    { pos: [-1.6, 0.25, 0.02], size: 0.07, color: "#00C8F2" },
  ];

  // Rotación e interacción continua con el cursor
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      const targetRotY = t * 0.4 + state.pointer.x * 0.5;
      const targetRotX = state.pointer.y * 0.35 + Math.sin(t * 0.7) * 0.05;
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        2.5,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        2.5,
        delta
      );
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -t * 0.6;
      innerCoreRef.current.rotation.x = t * 0.3;
    }

    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y = t * 0.8;
      coreMeshRef.current.rotation.z = -t * 0.4;
      const scale = 0.38 + Math.sin(t * 2) * 0.03;
      coreMeshRef.current.scale.set(scale, scale, scale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = -t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = t * 0.22;
    }
    if (dataCubesGroupRef.current) {
      dataCubesGroupRef.current.children.forEach((cube, i) => {
        cube.rotation.x = t * (0.4 + i * 0.06);
        cube.rotation.y = t * (0.35 + i * 0.08);
      });
    }
  });

  return (
    <group ref={groupRef} scale={[0.85, 0.85, 0.85]} position={[0, 0, 0]}>
      {/* ── Iluminación Studio ── */}
      <Environment preset="city" environmentIntensity={0.65} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[8, 10, 8]} intensity={3.0} color="#00C8F2" />
      <directionalLight position={[-8, -8, -6]} intensity={2.8} color="#0057FF" />
      <pointLight position={[0, 0, 3.5]} intensity={2.2} color="#00C8F2" distance={8} />

      {/* ── Isotipo 3D: Arco 'C' Principal en Colores Oficiales (Azul Eléctrico & Cian) ── */}
      <group ref={cArcRef} rotation={[0, 0, Math.PI * 0.2]}>
        {/* Arco exterior principal (Azul Eléctrico Vibrante #0057FF) */}
        <mesh rotation={[0, 0, Math.PI * 0.1]}>
          <torusGeometry args={[1.4, 0.24, 128, 256, Math.PI * 1.55]} />
          <meshPhysicalMaterial
            color="#0057FF"
            metalness={0.9}
            roughness={0.12}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            reflectivity={0.95}
            emissive="#071A45"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Cinta interna luminosa (Cian Brillante #00C8F2) */}
        <mesh rotation={[0, 0, Math.PI * 0.25]} scale={[0.88, 0.88, 0.88]}>
          <torusGeometry args={[1.4, 0.12, 96, 200, Math.PI * 1.45]} />
          <meshPhysicalMaterial
            color="#00C8F2"
            metalness={0.92}
            roughness={0.08}
            clearcoat={1.0}
            clearcoatRoughness={0.04}
            emissive="#00C8F2"
            emissiveIntensity={0.85}
          />
        </mesh>
      </group>

      {/* ── Núcleo Cuántico Central (Core Energético de Cristal + Icosaedro Wireframe) ── */}
      <group ref={innerCoreRef}>
        {/* Cúpula de Cristal Exterior Transparente */}
        <mesh>
          <sphereGeometry args={[0.58, 96, 96]} />
          <meshPhysicalMaterial
            color="#00C8F2"
            metalness={0.15}
            roughness={0.05}
            transmission={0.88}
            thickness={0.8}
            ior={1.52}
            clearcoat={1.0}
            clearcoatRoughness={0.04}
            emissive="#0057FF"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Core Energético Wireframe Interno (Pulsante) */}
        <mesh ref={coreMeshRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#00F0FF"
            wireframe={true}
            emissive="#00F0FF"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Esfera de Plasma Central */}
        <mesh scale={[0.3, 0.3, 0.3]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#00C8F2" />
        </mesh>
      </group>

      {/* ── Anillos de Circuitos Orbitales ── */}
      <mesh ref={ring1Ref} rotation-x={Math.PI / 2.3}>
        <torusGeometry args={[1.75, 0.015, 32, 200]} />
        <meshPhysicalMaterial
          color="#00C8F2"
          metalness={1.0}
          roughness={0.1}
          emissive="#00C8F2"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation-x={Math.PI / 3.2} rotation-y={Math.PI / 5}>
        <torusGeometry args={[2.05, 0.01, 32, 200]} />
        <meshPhysicalMaterial
          color="#0057FF"
          transparent
          opacity={0.55}
          metalness={0.85}
          emissive="#0057FF"
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
              emissiveIntensity={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Sombra de contacto suave */}
      <ContactShadows
        position={[0, -1.95, 0]}
        opacity={0.35}
        scale={6.5}
        blur={2.2}
        far={3.8}
        color="#0057FF"
      />
    </group>
  );
}

// ── View Portal acoplado directamente al contenedor HTML del Hero ────
export default function HeroView() {
  return (
    <View className="w-full h-full pointer-events-none">
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.35}>
        <CoreniusCyberCore />
      </Float>
    </View>
  );
}
