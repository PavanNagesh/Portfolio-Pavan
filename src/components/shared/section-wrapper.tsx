import { memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  SectionAtmosphere,
  type AtmosphereIntensity,
  type AtmosphereTint,
} from "@/components/shared/section-atmosphere";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alt" | "glow";
  compact?: boolean;
  atmosphere?: AtmosphereIntensity;
  atmosphereTint?: AtmosphereTint;
  /** Full-width content that bleeds to section edges (no 100vw). */
  bleed?: ReactNode;
}

export const SectionWrapper = memo(function SectionWrapper({
  id,
  children,
  className,
  variant = "default",
  compact = false,
  atmosphere = "light",
  atmosphereTint = "brand",
  bleed,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "section-padding-compact" : "section-padding",
        "relative overflow-x-clip",
        variant === "alt" && "bg-[var(--section-alt-bg)]",
        variant === "glow" && "section-glow",
        className
      )}
    >
      <SectionAtmosphere intensity={atmosphere} tint={atmosphereTint} />

      {variant === "glow" && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-muted)_0%,transparent_55%)]"
          aria-hidden
        />
      )}

      <div className="container-max relative z-[1]">{children}</div>

      {bleed ? (
        <div className="relative z-[1] -mx-6 mt-10 md:-mx-12 lg:-mx-16">{bleed}</div>
      ) : null}
    </section>
  );
});
