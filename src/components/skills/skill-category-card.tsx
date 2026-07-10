import { motion } from "framer-motion";
import {
  BarChart3,
  Blocks,
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SkillPill } from "@/components/skills/skill-pill";
import { transition } from "@/constants/motion";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types/portfolio";

const SKILL_ICONS: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Brain,
  Blocks,
  Database,
  Cloud,
  Wrench,
  Shield,
  BarChart3,
};

interface SkillCategoryCardProps {
  group: SkillGroup;
  index: number;
  className?: string;
}

export function SkillCategoryCard({
  group,
  index,
  className,
}: SkillCategoryCardProps) {
  const Icon = SKILL_ICONS[group.icon] ?? Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...transition.slow, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-[1px]",
        "bg-gradient-to-br from-brand/25 via-white/[0.06] to-brand/10",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-[15px] p-4 sm:p-5",
          "border border-white/[0.06] bg-white/[0.025] backdrop-blur-xl",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.18)]",
          "transition-shadow duration-300",
          "group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_40px_oklch(0.52_0.22_275/0.1)]"
        )}
      >
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
          aria-hidden
        />

        <div className="relative flex items-start gap-3">
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
              "border border-brand/20 bg-brand/10 text-brand",
              "shadow-[0_0_20px_oklch(0.52_0.22_275/0.12)]"
            )}
          >
            <Icon className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-[15px]">
              {group.title}
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              {group.description}
            </p>
          </div>
        </div>

        <div className="relative mt-4 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
