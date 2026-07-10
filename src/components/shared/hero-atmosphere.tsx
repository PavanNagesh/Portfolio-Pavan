import { memo } from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SparklesCore } from "@/components/ui/sparkles";
import { useInViewport } from "@/hooks/use-in-viewport";
import { cn } from "@/lib/utils";

const HERO_SPARKLE_COLORS = {
  dark: ["#ffffff", "#e8e4ff", "#c4b5fd"],
  light: ["#94a3b8", "#a5b4fc", "#c4b5fd", "#818cf8", "#cbd5e1", "#64748b"],
};

interface HeroAtmosphereProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export const HeroAtmosphere = memo(function HeroAtmosphere({
  scrollYProgress,
  className,
}: HeroAtmosphereProps) {
  const { ref, isVisible } = useInViewport(0.05, "80px");

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  return (
    <motion.div
      ref={ref}
      style={{ y: parallaxY, opacity: parallaxOpacity }}
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="hero-static-mesh absolute inset-0" />

      <div className="hero-blob hero-blob-a absolute left-[5%] top-[8%] h-72 w-72 md:h-96 md:w-96" />
      <div className="hero-blob hero-blob-b absolute right-[2%] top-[22%] h-64 w-64 md:h-80 md:w-80" />
      <div className="hero-blob hero-blob-c absolute bottom-[5%] left-[30%] h-56 w-56 md:h-72 md:w-72" />

      <DotPattern
        width={20}
        height={20}
        cr={0.75}
        className="hero-dots text-brand [mask-image:radial-gradient(ellipse_at_center,white,transparent_76%)]"
      />

      <SparklesCore
        id="hero-sparkles"
        background="transparent"
        minSize={0.15}
        maxSize={1.6}
        particleDensity={85}
        speed={0.55}
        particleColors={HERO_SPARKLE_COLORS}
        active={isVisible}
        className="absolute inset-0 h-full w-full"
      />

      <div className="atmosphere-grain absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_84%)]" />
    </motion.div>
  );
});
