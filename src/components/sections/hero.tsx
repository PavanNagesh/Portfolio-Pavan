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
import { HeroAtmosphere } from "@/components/shared/hero-atmosphere";
import { useTheme } from "@/components/shared/theme-provider";
import { ShimmerButton } from "@/components/ui/shimmer-button";
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
        fillOpacity={theme === "dark" ? 0.21 : 0.14}
      />

      <HeroAtmosphere scrollYProgress={scrollYProgress} />

      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute h-80 w-80 rounded-full blur-3xl will-change-transform dark:opacity-40"
          style={{
            x: glowX,
            y: glowY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, oklch(0.52 0.22 275 / 0.22) 0%, oklch(0.62 0.16 240 / 0.08) 45%, transparent 70%)",
            opacity: 0.55,
          }}
        />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-max relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10 xl:gap-14"
      >
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

        <div className="relative order-1 flex flex-col items-center gap-4 lg:order-2">
          <div className="ambient-bloom relative h-[min(72vw,300px)] w-[min(72vw,300px)] overflow-hidden rounded-full md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]">
            <motion.div
              style={{ scale: orbScale }}
              className="pointer-events-none absolute inset-0 z-0"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.2_275/0.35),oklch(0.52_0.22_275/0.14)_55%,transparent_72%)] ring-1 ring-brand/30 dark:ring-brand/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-[conic-gradient(from_180deg,oklch(0.62_0.2_275/0.2),transparent_35%,oklch(0.62_0.16_240/0.12)_70%,transparent)] blur-2xl"
              />
              <div className="absolute inset-8 rounded-full bg-brand/12 blur-3xl dark:bg-brand/10" />
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
              className="h-11 gap-2 rounded-full px-6 text-sm font-medium text-white shadow-md shadow-brand/25"
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
