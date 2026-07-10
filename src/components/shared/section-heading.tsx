import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { transition } from "@/constants/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  compact?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  compact = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={transition.slow}
      className={cn(compact ? "mb-6" : "mb-8 md:mb-10", "max-w-2xl", className)}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      )}
      <div className="mt-4 h-px w-12 bg-gradient-to-r from-brand/80 to-transparent" />
    </motion.div>
  );
}
