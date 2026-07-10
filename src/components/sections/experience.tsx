import { motion } from "framer-motion";
import { MapPin, Github, ExternalLink, FileText } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PremiumCard } from "@/components/shared/premium-card";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { transition } from "@/constants/motion";
export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="Where I've worked"
        description="Internships and freelance work. The day jobs so far."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand/40 via-brand/20 to-transparent md:left-8" />

        <div className="space-y-7">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.08} direction="left">
              <div className="relative pl-12 md:pl-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-2.5 top-3 md:left-6.5"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-brand bg-background" />
                  </span>
                </motion.div>

                <PremiumCard className="p-5 md:p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-brand/90">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{exp.duration}</p>
                      <p className="mt-1 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.impact.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} className="border-brand/20 hover:border-brand/40">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.metrics.map((metric) => (
                      <motion.span
                        key={metric}
                        whileHover={{ scale: 1.03 }}
                        transition={transition.fast}
                        className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-medium text-brand"
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>

                  {(exp.githubUrl || exp.liveUrl || exp.paperUrl) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.githubUrl && (
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a
                            href={exp.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {exp.paperUrl && (
                        <TooltipProvider delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" className="rounded-full" asChild>
                                <a
                                  href={exp.paperUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FileText className="h-4 w-4" />
                                  Research Paper
                                </a>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Research Paper</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      {exp.liveUrl && (
                        <Button size="sm" className="rounded-full bg-brand hover:bg-brand/90" asChild>
                          <a
                            href={exp.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </PremiumCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
