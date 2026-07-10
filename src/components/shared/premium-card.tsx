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
        "group relative rounded-2xl border border-border/50 bg-card/60 p-5 shadow-sm backdrop-blur-sm",
        "transition-shadow duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5",
        glow && "premium-border",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
