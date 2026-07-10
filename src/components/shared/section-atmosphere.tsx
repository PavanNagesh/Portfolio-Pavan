import { memo } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export type AtmosphereIntensity = "none" | "light" | "medium";
export type AtmosphereTint = "brand" | "neutral" | "warm" | "cool" | "violet";

const TINT_MESH: Record<AtmosphereTint, string> = {
  brand: "section-tint-brand",
  neutral: "section-tint-neutral",
  warm: "section-tint-warm",
  cool: "section-tint-cool",
  violet: "section-tint-violet",
};

interface SectionAtmosphereProps {
  intensity?: AtmosphereIntensity;
  tint?: AtmosphereTint;
  className?: string;
}

/** Static, CSS-only section backgrounds — no canvas particles. */
export const SectionAtmosphere = memo(function SectionAtmosphere({
  intensity = "light",
  tint = "brand",
  className,
}: SectionAtmosphereProps) {
  if (intensity === "none") return null;

  const showGrain = intensity === "medium";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className={cn("section-static-mesh absolute inset-0", TINT_MESH[tint])} />
      <div className="section-mesh-radial absolute inset-0" />

      <DotPattern
        width={26}
        height={26}
        cr={0.55}
        className="section-static-dots text-brand [mask-image:radial-gradient(ellipse_at_center,white,transparent_82%)]"
      />

      {showGrain && <div className="atmosphere-grain absolute inset-0 opacity-60" />}

      <div className="section-mesh-fade absolute inset-0" />
    </div>
  );
});
