import { useId, useEffect } from "react";
import Particles, { useParticlesProvider } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export function SparklesCore({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 120,
}: ParticlesProps) {
  const { loaded } = useParticlesProvider();
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    if (loaded) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  }, [loaded, controls]);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  const options = {
    background: { color: { value: background } },
    fullScreen: { enable: false, zIndex: 1 },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
        resize: { enable: true },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      move: {
        enable: true,
        direction: "none",
        speed: { min: 0.1, max: 1 },
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, width: 400, height: 400 },
        value: particleDensity,
      },
      opacity: {
        value: { min: 0.1, max: 1 },
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
  } satisfies ISourceOptions;

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {loaded && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </motion.div>
  );
}
