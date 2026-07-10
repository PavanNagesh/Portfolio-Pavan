import { motion } from "framer-motion";
import { statistics } from "@/data/statistics";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { NumberTicker } from "@/components/ui/number-ticker";
import { transition } from "@/constants/motion";

function StatCard({
  label,
  value,
  suffix,
  prefix,
  delay,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={transition.base}
        className="premium-border rounded-2xl border border-border/50 bg-card/60 p-5 text-center shadow-sm transition-shadow hover:border-brand/25 hover:shadow-md hover:shadow-brand/5"
      >
        <p className="text-3xl font-semibold tracking-tight text-brand md:text-4xl">
          {prefix}
          <NumberTicker
            value={value}
            delay={delay}
            className="text-brand"
          />
          {suffix}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      </motion.div>
    </FadeIn>
  );
}

export function StatsSection() {
  return (
    <SectionWrapper compact className="!py-10 md:!py-12">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat, i) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            delay={i * 0.12}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
