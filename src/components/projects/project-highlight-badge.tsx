import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ProjectHighlight, ProjectHighlightVariant } from "@/types/portfolio";

const VARIANT_ICONS: Record<ProjectHighlightVariant, string> = {
  research: "📄",
  award: "🏆",
  cloud: "☁",
  ai: "🧠",
  blockchain: "🔗",
  data: "📊",
  network: "🌐",
  iot: "📡",
  default: "⚙",
};

function inferVariant(label: string): ProjectHighlightVariant {
  const lower = label.toLowerCase();

  if (
    lower.includes("research") ||
    lower.includes("published") ||
    lower.includes("novel")
  ) {
    return "research";
  }
  if (
    lower.includes("top 3") ||
    lower.includes("hackathon") ||
    lower.includes("winner") ||
    lower.includes("india")
  ) {
    return "award";
  }
  if (
    lower.includes("docker") ||
    lower.includes("kubernetes") ||
    lower.includes("cloud") ||
    lower.includes("vercel") ||
    lower.includes("ci/cd")
  ) {
    return "cloud";
  }
  if (
    lower.includes("rag") ||
    lower.includes("llm") ||
    lower.includes("ai") ||
    lower.includes("ml") ||
    lower.includes("nlp") ||
    lower.includes("whisper") ||
    lower.includes("bart") ||
    lower.includes("gru") ||
    lower.includes("ocr") ||
    lower.includes("multimodal") ||
    lower.includes("speech")
  ) {
    return "ai";
  }
  if (
    lower.includes("blockchain") ||
    lower.includes("ethereum") ||
    lower.includes("solidity") ||
    lower.includes("web3") ||
    lower.includes("ipfs") ||
    lower.includes("metamask") ||
    lower.includes("smart contract") ||
    lower.includes("beckn") ||
    lower.includes("decentral")
  ) {
    return "blockchain";
  }
  if (
    lower.includes("power bi") ||
    lower.includes("etl") ||
    lower.includes("iidmc") ||
    lower.includes("informatica") ||
    lower.includes("data") ||
    lower.includes("bi") ||
    lower.includes("analytics") ||
    lower.includes("warehousing") ||
    lower.includes("sql")
  ) {
    return "data";
  }
  if (
    lower.includes("5g") ||
    lower.includes("open5gs") ||
    lower.includes("ueransim") ||
    lower.includes("edge") ||
    lower.includes("network") ||
    lower.includes("security") ||
    lower.includes("nginx") ||
    lower.includes("cyber")
  ) {
    return "network";
  }
  if (
    lower.includes("iot") ||
    lower.includes("mqtt") ||
    lower.includes("esp") ||
    lower.includes("water") ||
    lower.includes("municipal")
  ) {
    return "iot";
  }

  return "default";
}

const VARIANT_STYLES: Record<ProjectHighlightVariant, string> = {
  research:
    "from-amber-500/20 via-amber-400/5 to-brand/10 border-amber-400/35 text-amber-800 dark:text-amber-100/90",
  award:
    "from-yellow-500/20 via-amber-400/5 to-orange-500/10 border-amber-400/40 text-amber-900 dark:text-amber-50/90",
  cloud:
    "from-sky-500/15 via-brand/5 to-cyan-500/10 border-sky-400/30 text-sky-800 dark:text-sky-100/90",
  ai: "from-violet-500/20 via-brand/10 to-fuchsia-500/10 border-violet-400/35 text-violet-800 dark:text-violet-100/90",
  blockchain:
    "from-indigo-500/15 via-brand/10 to-purple-500/10 border-indigo-400/30 text-indigo-800 dark:text-indigo-100/90",
  data:
    "from-emerald-500/15 via-brand/5 to-teal-500/10 border-emerald-400/30 text-emerald-800 dark:text-emerald-100/90",
  network:
    "from-blue-500/15 via-brand/5 to-sky-500/10 border-blue-400/30 text-blue-800 dark:text-blue-100/90",
  iot: "from-cyan-500/15 via-brand/5 to-teal-500/10 border-cyan-400/30 text-cyan-800 dark:text-cyan-100/90",
  default:
    "from-brand/15 via-brand/5 to-brand/5 border-brand/25 text-foreground/90",
};

interface ProjectHighlightBadgeProps {
  highlight: ProjectHighlight;
  compact?: boolean;
}

export function ProjectHighlightBadge({
  highlight,
  compact = false,
}: ProjectHighlightBadgeProps) {
  const variant = highlight.variant ?? inferVariant(highlight.label);
  const icon = VARIANT_ICONS[variant];

  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -1 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border bg-gradient-to-br",
        "shadow-[0_1px_3px_oklch(0.22_0.02_260/0.06)] dark:shadow-[0_0_12px_oklch(0.52_0.22_275/0.08)]",
        "transition-shadow duration-300 hover:shadow-[0_2px_8px_oklch(0.52_0.22_275/0.12)] dark:hover:shadow-[0_0_18px_oklch(0.52_0.22_275/0.18)]",
        VARIANT_STYLES[variant],
        compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]",
        highlight.emphasized &&
          "ring-1 ring-brand/40 shadow-[0_2px_10px_oklch(0.52_0.22_275/0.14)] dark:shadow-[0_0_20px_oklch(0.52_0.22_275/0.22)] font-semibold"
      )}
    >
      <span className="text-[10px] leading-none" aria-hidden>
        {icon}
      </span>
      <span className="font-medium leading-tight">{highlight.label}</span>
    </motion.span>
  );
}

interface ProjectHighlightsProps {
  highlights: ProjectHighlight[];
  maxVisible?: number;
  showLabel?: boolean;
  compact?: boolean;
}

export function ProjectHighlights({
  highlights,
  maxVisible = 5,
  showLabel = true,
  compact = false,
}: ProjectHighlightsProps) {
  if (highlights.length === 0) return null;

  const visible = highlights.slice(0, maxVisible);
  const overflow = highlights.length - maxVisible;

  return (
    <div className={cn(compact ? "mt-2" : "mt-2.5")}>
      {showLabel && (
        <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand/75">
          Highlights
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {visible.map((highlight) => (
          <ProjectHighlightBadge
            key={highlight.label}
            highlight={highlight}
            compact={compact}
          />
        ))}
        {overflow > 0 && (
          <span
            className={cn(
              "glass-pill inline-flex items-center rounded-full font-medium text-muted-foreground",
              compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
            )}
          >
            +{overflow}
          </span>
        )}
      </div>
    </div>
  );
}
