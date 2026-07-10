import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { AchievementsSection } from "@/components/sections/achievements";
import { SkillsSection } from "@/components/sections/skills";
import { TimelineSection } from "@/components/sections/timeline";
import { PlaceholdersSection } from "@/components/sections/placeholders";
import { ContactSection } from "@/components/sections/contact";
import { GradientBeam } from "@/components/shared/gradient-beam";
import { PageTransition } from "@/components/shared/page-transition";

export function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <GradientBeam className="container-max" />
      <AboutSection />
      <GradientBeam className="container-max" />
      <TechStackSection />
      <ExperienceSection />
      <GradientBeam className="container-max" />
      <ProjectsSection />
      <AchievementsSection />
      <SkillsSection />
      <TimelineSection />
      <PlaceholdersSection />
      <GradientBeam className="container-max" />
      <ContactSection />
    </PageTransition>
  );
}
