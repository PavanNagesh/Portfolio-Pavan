import { aboutContent } from "@/data/about";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PremiumCard } from "@/components/shared/premium-card";
import { FadeIn } from "@/components/shared/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";

export function AboutSection() {
  return (
    <SectionWrapper id="about" variant="glow">
      <DotPattern
        width={22}
        height={22}
        cr={0.6}
        className="opacity-15 text-brand/20 [mask-image:radial-gradient(ellipse_at_left,white,transparent_70%)]"
      />      <SectionHeading
        label="About"
        title="About Me"
        description="CS student. Internships, freelance work, and probably too many side projects."
      />

      <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
        <FadeIn direction="left">
          <div className="premium-border relative mx-auto h-72 w-72 overflow-hidden rounded-2xl border border-border/50 bg-card/30 lg:mx-0 lg:h-80 lg:w-80">
            <img
              src={personalInfo.photoPath}
              alt={personalInfo.name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <div className="space-y-4">
          {aboutContent.story.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.08} direction={i % 2 === 0 ? "right" : "up"}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                {paragraph}
              </p>
            </FadeIn>
          ))}

          <FadeIn delay={0.35}>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Engineering Philosophy", text: aboutContent.philosophy },
                { label: "Current Focus", text: aboutContent.currentFocus },
                { label: "Goals", text: aboutContent.futureGoals },
              ].map((item) => (
                <PremiumCard key={item.label} className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
                </PremiumCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
