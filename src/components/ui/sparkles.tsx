import { memo, useEffect, useId, useMemo, useRef } from "react";
import Particles, { useParticlesProvider } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/shared/theme-provider";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleColors?: { dark: string[]; light: string[] };
  particleDensity?: number;
  /** When false, particles are not rendered. */
  active?: boolean;
};

export const SparklesCore = memo(function SparklesCore({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleColors,
  particleDensity = 120,
  active = true,
}: ParticlesProps) {
  const { theme } = useTheme();
  const { loaded } = useParticlesProvider();
  const generatedId = useId();
  const containerRef = useRef<Container | undefined>(undefined);

  const colors = particleColors ? particleColors[theme] : [particleColor];

  const options = useMemo(
    () =>
      ({
        background: { color: { value: background } },
        fullScreen: { enable: false, zIndex: 1 },
        fpsLimit: 60,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: { enable: true },
          },
        },
        particles: {
          color: { value: colors },
          move: {
            enable: true,
            direction: "none",
            speed: { min: 0.04, max: 0.35 },
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, width: 800, height: 800 },
            value: particleDensity,
          },
          opacity: {
            value: { min: theme === "dark" ? 0.12 : 0.2, max: theme === "dark" ? 0.95 : 0.7 },
            animation: {
              enable: true,
              speed,
              sync: false,
              mode: "auto",
              startValue: "random",
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: minSize, max: maxSize },
          },
        },
        detectRetina: true,
      }) satisfies ISourceOptions,
    [background, colors, maxSize, minSize, particleDensity, speed, theme]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (active) void container.play();
    else container.pause();
  }, [active]);

  const particlesLoaded = async (container?: Container) => {
    containerRef.current = container;
    if (!container) return;
    if (active) await container.play();
    else container.pause();
  };

  if (!active || !loaded) {
    return <div className={cn(className)} aria-hidden />;
  }

  return (
    <div className={cn(className)}>
      <Particles
        key={`${id || generatedId}-${theme}`}
        id={id || generatedId}
        className="h-full w-full"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
});
