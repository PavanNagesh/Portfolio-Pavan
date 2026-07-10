import { skillGroups } from "@/data/skills";
import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      variant="alt"
      className="relative overflow-hidden !bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,oklch(0.52_0.22_275/0.1),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.52 0.22 275 / 0.14) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,oklch(0.11_0.012_260/0.35)_100%)]" />
      </div>

      <SectionHeading
        label="Skills"
        title="What I'm Good At"
        description="Tools I actually reach for. Not every technology I've ever touched."
      />

      <TooltipProvider delayDuration={200}>
        <div
          className={cn(
            "relative grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4",
            "lg:grid-cols-3 lg:gap-4"
          )}
        >
          {skillGroups.map((group, index) => (
            <SkillCategoryCard
              key={group.id}
              group={group}
              index={index}
              className={group.span}
            />
          ))}
        </div>
      </TooltipProvider>
    </SectionWrapper>
  );
}
