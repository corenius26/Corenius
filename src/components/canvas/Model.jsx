"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const groupRef = useRef();
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useGSAP(() => {
    if (!groupRef.current) return;

    // We make sure to find the scroll container that is definitely in the DOM
    const scrollContainer = document.getElementById("scroll-container") || document.body;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
      },
    });

    // Section 1 to 2: "Birth" & Move Right
    tl.to(groupRef.current.position, { x: 2, duration: 1 }, 0);
    tl.to(groupRef.current.rotation, { y: Math.PI, duration: 1 }, 0);

    // Section 2 to 3: "Exploded View" & Move Left
    tl.to(groupRef.current.position, { x: -2, duration: 1 }, 1);
    tl.to(ring1Ref.current.position, { y: 1.5, duration: 1 }, 1);
    tl.to(ring2Ref.current.position, { y: -1.5, duration: 1 }, 1);
    tl.to(coreRef.current.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 }, 1);

    // Section 3 to 4: "X-Ray" & Move to Center
    tl.to(groupRef.current.position, { x: 0, y: 1, duration: 1 }, 2);
    tl.to(groupRef.current.rotation, { y: Math.PI * 2, x: Math.PI / 4, duration: 1 }, 2);
  }, []);

  // Idle animation (spinning)
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.5;
      coreRef.current.rotation.x = time * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core Component */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#00F0FF" wireframe={true} emissive="#00F0FF" emissiveIntensity={1} />
      </mesh>
      
      {/* Ring 1 */}
      <mesh ref={ring1Ref} rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.5, 0.05, 32, 100]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} rotation-x={Math.PI / 2} rotation-y={Math.PI / 4}>
        <torusGeometry args={[2, 0.02, 32, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} metalness={1} />
      </mesh>
    </group>
  );
}
