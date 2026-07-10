import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ReactNode } from "react";

async function initParticles(engine: Parameters<typeof loadSlim>[0]) {
  await loadSlim(engine);
}

export function AppParticlesProvider({ children }: { children: ReactNode }) {
  return <ParticlesProvider init={initParticles}>{children}</ParticlesProvider>;
}
