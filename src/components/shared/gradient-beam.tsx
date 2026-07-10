import { cn } from "@/lib/utils";

interface GradientBeamProps {
  className?: string;
}

export function GradientBeam({ className }: GradientBeamProps) {
  return (
    <div
      className={cn("relative h-px w-full overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-60" />
    </div>
  );

}
