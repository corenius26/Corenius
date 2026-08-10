"use client";

import dynamic from "next/dynamic";

// Usamos dynamic import dentro de un Client Component
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

export default function SceneWrapper() {
  return <Scene />;
}
