import { motion } from "framer-motion";
import { FileText, Github } from "lucide-react";
import { achievements } from "@/data/achievements";
import { personalInfo } from "@/data/personal";
import { MilestoneCard } from "@/components/milestones/milestone-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { transition } from "@/constants/motion";

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" variant="glow">
      <SectionHeading
        label="Milestones"
        title="A few milestones"
        description="A few things that went well. Hackathons, shipped apps, internships."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
        {achievements.map((achievement, index) => (
          <MilestoneCard
            key={achievement.id}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={transition.slow}
        className="mt-12 text-center"
      >
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
          There's more in my resume and on GitHub if you want the details.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton>
            <ShimmerButton
              className="h-11 gap-2 rounded-full px-6 text-sm font-medium text-white shadow-md shadow-brand/20"
              background="oklch(0.52 0.22 275)"
              shimmerColor="oklch(0.85 0.1 275)"
              borderRadius="9999px"
              onClick={() => window.open(personalInfo.resumePath, "_blank")}
            >
              <FileText className="h-4 w-4" />
              Resume
            </ShimmerButton>
          </MagneticButton>
          <MagneticButton>
            <ShimmerButton
              className="h-11 gap-2 rounded-full px-6 text-sm font-medium text-foreground shadow-sm"
              background="var(--shimmer-secondary-bg)"
              shimmerColor="oklch(0.62 0.2 275 / 0.5)"
              borderRadius="9999px"
              onClick={() => window.open(personalInfo.github, "_blank")}
            >
              <Github className="h-4 w-4" />
              GitHub
            </ShimmerButton>
          </MagneticButton>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
