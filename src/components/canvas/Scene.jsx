"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00F0FF" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#FF0055" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Model />
      </Float>

      <Environment preset="city" />
      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00F0FF" />
    </Canvas>
  );
}
