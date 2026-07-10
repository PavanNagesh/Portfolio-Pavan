import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alt" | "glow";
  compact?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  variant = "default",
  compact = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "section-padding-compact" : "section-padding",
        "relative",
        variant === "alt" && "bg-[var(--section-alt-bg)]",
        variant === "glow" && "section-glow",
        className
      )}
    >
      {variant === "glow" && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-muted)_0%,transparent_50%)]"
          aria-hidden
        />
      )}
      <div className="container-max relative">{children}</div>
    </section>
  );
}
