import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timeline";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";
import { transition } from "@/constants/motion";

const typeStyles = {
  education: "border-brand/30 bg-brand/5 text-brand",
  work: "border-brand/40 bg-brand/10 text-brand",
  achievement: "border-brand/50 bg-brand/15 text-brand",
  focus: "border-foreground/30 bg-foreground/5",
};

export function TimelineSection() {
  return (
    <SectionWrapper id="journey" atmosphere="light" atmosphereTint="neutral">
      <SectionHeading
        label="Journey"
        title="My Journey"
        description="Roughly how I got here. Diploma, university, work, projects."
      />

      <div className="relative">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block" />

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {timelineEvents.map((event, i) => (
            <FadeIn key={event.id} delay={i * 0.05} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                transition={transition.base}
                className="group relative flex flex-col items-start md:items-center md:text-center"
              >
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold transition-shadow group-hover:shadow-[var(--card-elevation-hover)]",
                    typeStyles[event.type]
                  )}
                >
                  {event.year}
                </div>
                <h3 className="font-semibold leading-tight">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
