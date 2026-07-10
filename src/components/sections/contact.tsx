import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { CopyButton } from "@/components/shared/copy-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { transition } from "@/constants/motion";
const contactLinks = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    value: personalInfo.email,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    value: "linkedin.com/in/pavan-nagesh-66b561297",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    value: "github.com/PavanNagesh",
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" variant="glow">
      <FadeIn>
        <div className="premium-border relative overflow-hidden rounded-3xl border border-brand/20 bg-card/70 p-6 md:p-10">
          <DotPattern
            width={18}
            height={18}
            cr={0.7}
            className="opacity-20 text-brand/30 [mask-image:radial-gradient(ellipse_at_bottom_left,white,transparent_65%)]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--brand-muted)_0%,transparent_50%)]" />
          <div className="relative max-w-2xl">
            <SectionHeading
              label="Contact"
              title="Get in Touch"
              description="Open to software engineering roles. Happy to talk internships, projects, or whatever you're working on."
              className="mb-8"
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -3 }}
                  transition={transition.base}
                  className="group premium-border rounded-2xl border border-border/50 bg-background/40 p-5 transition-colors hover:border-brand/30"
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <link.icon className="mb-3 h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm break-all text-muted-foreground group-hover:text-foreground">
                      {link.value}
                    </p>
                  </a>
                  {link.label === "Email" && (
                    <div className="mt-2">
                      <CopyButton value={personalInfo.email} label="Copy email" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <ShimmerButton
                  className="h-12 gap-2 rounded-full px-7 text-sm font-medium shadow-md shadow-brand/20"
                  background="oklch(0.52 0.22 275)"
                  shimmerColor="oklch(0.85 0.1 275)"
                  borderRadius="9999px"
                  onClick={() => window.open(`mailto:${personalInfo.email}`)}
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                  <ArrowRight className="h-4 w-4" />
                </ShimmerButton>
              </MagneticButton>
              <MagneticButton>
                <ShimmerButton
                  className="h-12 gap-2 rounded-full px-7 text-sm font-medium"
                  background="oklch(0.15 0.014 260 / 0.6)"
                  shimmerColor="oklch(0.62 0.2 275 / 0.5)"
                  borderRadius="9999px"
                  onClick={() => window.open(personalInfo.resumePath, "_blank")}
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </ShimmerButton>
              </MagneticButton>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
