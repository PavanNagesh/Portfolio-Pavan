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
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-70 dark:via-brand/50 dark:opacity-60" />
      <div className="absolute inset-0 -top-px h-[3px] bg-gradient-to-r from-transparent via-brand/15 to-transparent blur-sm dark:via-brand/20" />
    </div>
  );
}
