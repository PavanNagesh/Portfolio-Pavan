import { motion } from "framer-motion";
import {
  Layers,
  Package,
  Stethoscope,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { transition } from "@/constants/motion";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/types/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Rocket: Package,
  Stethoscope,
  Layers,
};

const MILESTONE_ICON_OVERRIDE: Record<string, LucideIcon> = {
  "production-saas": Package,
};

type MilestoneAccent = "hackathon" | "production" | "internship" | "research";

interface MilestoneVisual {
  category: string;
  categoryEmoji: string;
  accent: MilestoneAccent;
  learnMoreHref: string;
}

const MILESTONE_VISUALS: Record<string, MilestoneVisual> = {
  "samved-hackathon": {
    category: "Hackathon",
    categoryEmoji: "🏆",
    accent: "hackathon",
    learnMoreHref: "#projects",
  },
  "production-saas": {
    category: "Applications",
    categoryEmoji: "📦",
    accent: "production",
    learnMoreHref: "#projects",
  },
  "clinical-ai": {
    category: "AI Research",
    categoryEmoji: "🧠",
    accent: "research",
    learnMoreHref: "#experience",
  },
  "beckn-protocol": {
    category: "Internship",
    categoryEmoji: "💼",
    accent: "internship",
    learnMoreHref: "#experience",
  },
};

const ACCENT_STYLES: Record<
  MilestoneAccent,
  {
    ring: string;
    category: string;
    icon: string;
    hover: string;
  }
> = {
  hackathon: {
    ring: "from-amber-500/30 via-amber-400/10 to-brand/10",
    category:
      "border-amber-400/30 bg-gradient-to-r from-amber-500/15 to-amber-400/5 text-amber-100/90",
    icon: "border-amber-400/25 bg-amber-500/10 text-amber-200 shadow-[0_0_24px_oklch(0.75_0.15_85/0.15)]",
    hover:
      "hover:border-amber-400/30 hover:shadow-[0_12px_40px_oklch(0.75_0.15_85/0.08)]",
  },
  production: {
    ring: "from-sky-500/30 via-sky-400/10 to-brand/10",
    category:
      "border-sky-400/30 bg-gradient-to-r from-sky-500/15 to-sky-400/5 text-sky-100/90",
    icon: "border-sky-400/25 bg-sky-500/10 text-sky-200 shadow-[0_0_24px_oklch(0.62_0.16_240/0.15)]",
    hover:
      "hover:border-sky-400/30 hover:shadow-[0_12px_40px_oklch(0.62_0.16_240/0.08)]",
  },
  internship: {
    ring: "from-violet-500/30 via-violet-400/10 to-brand/10",
    category:
      "border-violet-400/30 bg-gradient-to-r from-violet-500/15 to-violet-400/5 text-violet-100/90",
    icon: "border-violet-400/25 bg-violet-500/10 text-violet-200 shadow-[0_0_24px_oklch(0.52_0.22_275/0.15)]",
    hover:
      "hover:border-violet-400/30 hover:shadow-[0_12px_40px_oklch(0.52_0.22_275/0.08)]",
  },
  research: {
    ring: "from-emerald-500/30 via-emerald-400/10 to-brand/10",
    category:
      "border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 to-emerald-400/5 text-emerald-100/90",
    icon: "border-emerald-400/25 bg-emerald-500/10 text-emerald-200 shadow-[0_0_24px_oklch(0.62_0.16_160/0.15)]",
    hover:
      "hover:border-emerald-400/30 hover:shadow-[0_12px_40px_oklch(0.62_0.16_160/0.08)]",
  },
};

function getImpactEmoji(text: string): string {
  const lower = text.toLowerCase();

  if (lower.includes("prize") || lower.includes("inr")) return "🏆";
  if (lower.includes("top 3")) return "🥉";
  if (lower.includes("iot") || lower.includes("mqtt") || lower.includes("zone")) return "📡";
  if (lower.includes("rag")) return "🤖";
  if (lower.includes("ci/cd") || lower.includes("vercel")) return "☁";
  if (
    lower.includes("faster") ||
    lower.includes("catalog") ||
    lower.includes("product")
  ) {
    return "📦";
  }
  if (lower.includes("beckn") || lower.includes("gateway") || lower.includes("bpp")) {
    return "🔗";
  }
  if (
    lower.includes("soap") ||
    lower.includes("clinical") ||
    lower.includes("privacy") ||
    lower.includes("audio")
  ) {
    return "🩺";
  }
  if (lower.includes("async") || lower.includes("service")) return "⚙";
  if (lower.includes("accuracy") || lower.includes("%")) return "📊";
  if (lower.includes("infosys") || lower.includes("completion")) return "💼";

  return "⚙";
}

interface MilestoneCardProps {
  achievement: Achievement;
  index: number;
}

export function MilestoneCard({ achievement, index }: MilestoneCardProps) {
  const Icon = MILESTONE_ICON_OVERRIDE[achievement.id] ?? iconMap[achievement.icon] ?? Trophy;
  const visual =
    MILESTONE_VISUALS[achievement.id] ?? MILESTONE_VISUALS["beckn-protocol"];
  const accent = ACCENT_STYLES[visual.accent];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ ...transition.slow, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative h-full rounded-2xl p-[1px]",
        "bg-gradient-to-br",
        accent.ring
      )}
    >
      <div
        className={cn(
          "relative flex h-full min-h-[280px] flex-col rounded-[15px] border border-white/[0.07]",
          "bg-white/[0.025] p-5 backdrop-blur-xl md:p-6",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.18)]",
          "transition-all duration-300",
          accent.hover
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
              "text-[11px] font-medium",
              accent.category
            )}
          >
            <span aria-hidden>{visual.categoryEmoji}</span>
            {visual.category}
          </span>

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={transition.fast}
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border",
              accent.icon
            )}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        </div>

        <div className="mt-4 flex flex-wrap items-start gap-2">
          <h3 className="flex-1 text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
            {achievement.title}
          </h3>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            {achievement.year}
          </span>
        </div>

        <p className="mt-1.5 text-sm text-brand/85">{achievement.subtitle}</p>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {achievement.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {achievement.impact.map((item) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.05, y: -1 }}
              transition={transition.fast}
              className={cn(
                "inline-flex items-center gap-1 rounded-lg border border-white/10",
                "bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-foreground/85",
                "shadow-[0_0_12px_oklch(0.52_0.22_275/0.06)]",
                "transition-shadow duration-300 hover:border-brand/30 hover:shadow-[0_0_16px_oklch(0.52_0.22_275/0.14)]"
              )}
            >
              <span className="text-[10px]" aria-hidden>
                {getImpactEmoji(item)}
              </span>
              {item}
            </motion.span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollTo(visual.learnMoreHref)}
          className="mt-auto pt-5 text-left text-xs font-medium text-brand/80 transition-colors hover:text-brand"
        >
          Learn more →
        </button>
      </div>
    </motion.article>
  );
}
