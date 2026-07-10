import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Network,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { techCategories } from "@/data/tech-stack";
import { marqueeTechnologies } from "@/data/tech-marquee";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { Marquee } from "@/components/ui/marquee";
import { transition } from "@/constants/motion";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  Wrench,
  Network,
};

export function TechStackSection() {
  return (
    <SectionWrapper id="stack" variant="alt" atmosphere="light" atmosphereTint="cool">
      <SectionHeading
        label="Stack"
        title="Technologies I build with"
        description="What I use a lot. Definitely not a complete list."
      />

      <FadeIn>
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-border/40 bg-card/50 py-3 shadow-[var(--card-elevation)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card/80 to-transparent" />
          <Marquee pauseOnHover className="[--duration:45s] [--gap:2rem]">
            {marqueeTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/30 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techCategories.map((category, i) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <FadeIn key={category.id} delay={i * 0.04} direction={i % 2 === 0 ? "up" : "left"}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={transition.base}
                className="group premium-border h-full rounded-2xl border border-border/50 bg-card/80 p-6 shadow-[var(--card-elevation)] transition-shadow hover:border-brand/25 hover:shadow-[var(--card-elevation-hover)]"
              >
                <motion.div
                  whileHover={{ rotate: 6 }}
                  transition={transition.fast}
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="mb-3 font-semibold">{category.title}</h3>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground transition-colors group-hover:text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
