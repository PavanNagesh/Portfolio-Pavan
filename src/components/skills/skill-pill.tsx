import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { transition } from "@/constants/motion";
import { cn } from "@/lib/utils";
import type { SkillItem } from "@/types/portfolio";

interface SkillPillProps {
  skill: SkillItem;
}

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.span
          whileHover={{ scale: 1.05, y: -2 }}
          transition={transition.fast}
          className={cn(
            "inline-flex cursor-default items-center rounded-full px-3 py-1.5",
            "border border-brand/20 bg-gradient-to-br from-brand/[0.08] to-white/[0.03]",
            "text-[12px] font-medium text-foreground/90",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]",
            "transition-all duration-300",
            "hover:border-brand/45 hover:from-brand/15 hover:text-brand",
            "hover:shadow-[0_0_16px_oklch(0.52_0.22_275/0.18),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
          )}
        >
          {skill.name}
        </motion.span>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs">
        {skill.tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
