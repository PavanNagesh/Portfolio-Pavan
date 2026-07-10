import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, FileText, FolderOpen, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { useTheme } from "@/components/shared/theme-provider";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { transition } from "@/constants/motion";

export function HeroSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.35]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const nameParts = personalInfo.name.split(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-visible section-padding pt-24 md:pt-28"
    >
      <Spotlight
        className="pointer-events-none absolute -top-24 left-0 z-0 md:-top-20 md:left-16"
        fill="oklch(0.62 0.2 275)"
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        <DotPattern
          width={20}
          height={20}
          cr={0.8}
          className="opacity-30 text-brand/20 dark:text-brand/25 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        />

        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1.2}
          particleDensity={100}
          className="h-full w-full"
          particleColor={theme === "dark" ? "#FFFFFF" : "#7C5CFC"}
          speed={0.8}
        />

        <motion.div
          className="absolute h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            x: glowX,
            y: glowY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              theme === "dark"
                ? "radial-gradient(circle, oklch(0.62 0.2 275 / 0.25) 0%, transparent 70%)"
                : "radial-gradient(circle, oklch(0.52 0.22 275 / 0.18) 0%, transparent 70%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_88%)]" />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-max relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10 xl:gap-14"
      >
        {/* Left — role + copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition.slow, delay: 0.35 }}
          className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {personalInfo.title}
          </p>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground lg:mx-0 md:text-base">
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* Center — orb, portrait, resume */}
        <div className="relative order-1 flex flex-col items-center gap-4 lg:order-2">
          <div className="relative h-[min(72vw,300px)] w-[min(72vw,300px)] overflow-hidden rounded-full md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]">
            <motion.div
              style={{ scale: orbScale }}
              className="pointer-events-none absolute inset-0 z-0"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.2_275/0.35),oklch(0.52_0.22_275/0.12)_55%,transparent_72%)] ring-1 ring-brand/25 dark:ring-brand/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-[conic-gradient(from_180deg,oklch(0.62_0.2_275/0.18),transparent_35%,oklch(0.62_0.2_275/0.1)_70%,transparent)] blur-2xl"
              />
              <div className="absolute inset-8 rounded-full bg-brand/10 blur-3xl" />
            </motion.div>

            <motion.div
              style={{ y: imageY }}
              className="absolute inset-[6%] z-10 flex items-end justify-center"
            >
              <motion.img
                src={`${personalInfo.heroPhotoPath}?v=9`}
                alt={personalInfo.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  },
                }}
                className="hero-cutout h-full w-full object-contain object-bottom"
                loading="eager"
              />
            </motion.div>
          </div>

          <MagneticButton>
            <ShimmerButton
              className="h-11 gap-2 rounded-full px-6 text-sm font-medium text-white shadow-md shadow-brand/20"
              background="oklch(0.52 0.22 275)"
              shimmerColor="oklch(0.85 0.1 275)"
              borderRadius="9999px"
              onClick={() => window.open(personalInfo.resumePath, "_blank")}
            >
              <FileText className="h-4 w-4" />
              Resume
            </ShimmerButton>
          </MagneticButton>
        </div>

        {/* Right — name + actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition.slow, delay: 0.5 }}
          className="order-3 flex flex-col items-center lg:items-end lg:pl-[calc(2.5rem+1cm)] xl:pl-[calc(3.5rem+1cm)]"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-left text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem]">
              <span className="block text-brand-gradient">{nameParts[0]}</span>
              <span className="block text-foreground">{nameParts.slice(1).join(" ")}.</span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
            <MagneticButton>
              <ShimmerButton
                className="h-11 gap-2 rounded-full px-5 text-sm font-medium text-foreground shadow-sm"
                background="var(--shimmer-secondary-bg)"
                shimmerColor="oklch(0.62 0.2 275 / 0.5)"
                borderRadius="9999px"
                onClick={() => scrollTo("#projects")}
              >
                <FolderOpen className="h-4 w-4" />
                Projects
              </ShimmerButton>
            </MagneticButton>
            <MagneticButton>
              <ShimmerButton
                className="h-11 gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground hover:text-foreground"
                background="transparent"
                shimmerColor="oklch(0.62 0.2 275 / 0.35)"
                borderRadius="9999px"
                onClick={() => scrollTo("#contact")}
              >
                <Mail className="h-4 w-4" />
                Contact
              </ShimmerButton>
            </MagneticButton>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="container-max relative z-10 mt-2 hidden text-sm text-muted-foreground lg:block"
      >
        {personalInfo.location}
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-muted-foreground transition-colors hover:text-brand"
        aria-label="Scroll to about section"
        type="button"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
