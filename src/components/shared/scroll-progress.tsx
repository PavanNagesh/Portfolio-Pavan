import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] bg-gradient-to-r from-foreground/40 via-foreground/70 to-foreground transition-[width] duration-150 ease-out"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
