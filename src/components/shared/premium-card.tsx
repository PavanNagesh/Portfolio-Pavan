import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { transition } from "@/constants/motion";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function PremiumCard({
  children,
  className,
  glow = true,
  ...props
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={transition.base}
      className={cn(
        "group relative rounded-2xl border border-border/50 bg-card/85 p-5 backdrop-blur-md",
        "shadow-[var(--card-elevation)] transition-shadow duration-300",
        "hover:border-brand/30 hover:shadow-[var(--card-elevation-hover)]",
        glow && "premium-border",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
