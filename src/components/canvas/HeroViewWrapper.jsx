"use client";

import dynamic from "next/dynamic";

// Client Component wrapper — único lugar válido para ssr: false en Next.js 15+
const HeroView = dynamic(
  () => import("@/components/canvas/HeroView"),
  { ssr: false }
);

export default function HeroViewWrapper() {
  return <HeroView />;
}
