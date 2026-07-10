import { memo } from "react";
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
}

export const SectionWrapper = memo(function SectionWrapper({
  id,
  children,
  className,
  variant = "default",
  compact = false,
  atmosphere = "light",
  atmosphereTint = "brand",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "section-padding-compact" : "section-padding",
        "relative overflow-hidden",
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
    </section>
  );
});
