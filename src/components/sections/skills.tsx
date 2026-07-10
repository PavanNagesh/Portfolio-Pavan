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
      atmosphere="light"
      atmosphereTint="brand"
      className="!bg-transparent"
    >
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
