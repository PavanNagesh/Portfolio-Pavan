import { certifications } from "@/data/placeholders";
import { GithubContributionsContent } from "@/components/sections/github-contributions";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PremiumCard } from "@/components/shared/premium-card";
import { FadeIn } from "@/components/shared/fade-in";
import { Award } from "lucide-react";
import type { PlaceholderItem } from "@/types/portfolio";

function CredentialGrid({ items }: { items: PlaceholderItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <FadeIn key={item.id} delay={i * 0.04}>
          <PremiumCard className="p-5 opacity-90">
            <Award className="mb-2 h-5 w-5 text-brand" />
            <h3 className="font-semibold">{item.title}</h3>
            {item.date && (
              <p className="mt-1 text-xs text-brand/80">{item.date}</p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </PremiumCard>
        </FadeIn>
      ))}
    </div>
  );
}

export function PlaceholdersSection() {
  return (
    <SectionWrapper variant="alt" atmosphere="light" atmosphereTint="brand">
      <div className="section-stack">
        <GithubContributionsContent />

        <div>
          <SectionHeading
            label="Credentials"
            title="Credentials"
            description="Internships and certs I've picked up along the way."
            compact
          />
          <CredentialGrid items={certifications} />
        </div>
      </div>
    </SectionWrapper>
  );
}
