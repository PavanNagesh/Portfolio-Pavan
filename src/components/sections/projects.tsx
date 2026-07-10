import { useState, type KeyboardEvent, type MouseEvent } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Layout,
  Play,
  Presentation,
  X,
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { projects } from "@/data/projects";
import type { Project, ProjectLink, ProjectLinkType } from "@/types/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { ProjectHighlights } from "@/components/projects/project-highlight-badge";
import { ProjectMarquee } from "@/components/ui/project-marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const LINK_ICONS: Record<ProjectLinkType, typeof Github> = {
  github: Github,
  live: Globe,
  paper: FileText,
  docs: BookOpen,
  video: Play,
  presentation: Presentation,
  figma: Layout,
  website: ExternalLink,
};

const CARD_CLASS =
  "w-[300px] min-w-[300px] h-[292px] sm:w-[320px] sm:min-w-[320px] sm:h-[304px]";

function getValidLinks(links?: ProjectLink[]): ProjectLink[] {
  return (links ?? []).filter((link) => link.href.trim().length > 0);
}

function ProjectExternalLinks({
  links,
  onLinkClick,
}: {
  links: ProjectLink[];
  onLinkClick: (event: MouseEvent) => void;
}) {
  const validLinks = getValidLinks(links);
  if (validLinks.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {validLinks.map((link) => {
        const Icon = LINK_ICONS[link.type];

        return (
          <Tooltip key={`${link.type}-${link.href}`}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className={cn(
                  "glass-icon-btn flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">{link.label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const links = getValidLinks(project.links);

  const stopPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(CARD_CLASS, "group relative shrink-0 cursor-pointer focus-visible:outline-none")}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-300",
          "bg-gradient-to-br from-brand/30 via-transparent to-brand/10",
          "group-hover:opacity-100"
        )}
        aria-hidden
      />

      <div
        className={cn(
          "glass-card relative flex h-full flex-col rounded-2xl p-5 sm:p-6",
          "focus-visible:ring-2 focus-visible:ring-brand/40"
        )}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/85">
          {project.subtitle}
        </p>

        <h3 className="mt-2 line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-auto">
          <ProjectHighlights
            highlights={project.highlights}
            maxVisible={5}
            compact
          />

          {links.length > 0 && (
            <div className="mt-2.5 pt-0.5" onClick={stopPropagation}>
              <ProjectExternalLinks links={links} onLinkClick={stopPropagation} />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  const paragraphs = project.description.split("\n\n").filter(Boolean);
  const links = getValidLinks(project.links);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[var(--overlay)] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[min(640px,92vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border/50 bg-card p-6 shadow-xl sm:p-8",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          )}
        >
          <DialogPrimitive.Title className="sr-only">
            {project.title}
          </DialogPrimitive.Title>

          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
            {project.subtitle}
          </p>
          <h2 className="mt-2 pr-8 text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h2>

          <div className="mt-4">
            <ProjectHighlights
              highlights={project.highlights}
              maxVisible={project.highlights.length}
              showLabel
            />
          </div>

          <div className="my-6 h-px bg-border/50" />

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="my-6 h-px bg-border/50" />

          <div>
            <h3 className="text-sm font-medium text-foreground">Key Features</h3>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/80" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {links.length > 0 && (
            <div className="mt-8 border-t border-border/50 pt-6">
              <TooltipProvider delayDuration={200}>
                <ProjectExternalLinks links={links} onLinkClick={() => {}} />
              </TooltipProvider>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function ProjectsMarqueeShowcase({
  onOpenProject,
}: {
  onOpenProject: (p: Project) => void;
}) {
  return (
    <div className="relative min-w-0">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,var(--background)_25%,transparent)] sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,var(--background)_25%,transparent)] sm:w-24"
        aria-hidden
      />

      <ProjectMarquee className="px-1">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => onOpenProject(project)}
          />
        ))}
      </ProjectMarquee>
    </div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelected(project);
    setModalOpen(true);
  };

  return (
    <SectionWrapper
      id="projects"
      variant="alt"
      atmosphere="light"
      atmosphereTint="violet"
      className="!bg-transparent"
      bleed={
        <FadeIn>
          <TooltipProvider delayDuration={200}>
            <ProjectsMarqueeShowcase onOpenProject={openProject} />
          </TooltipProvider>
        </FadeIn>
      }
    >
      <SectionHeading
        label="Projects"
        title="Projects I've Built"
        description="Things I've built, broken, and fixed. Web, AI, data, networking."
      />

      <ProjectDetailModal
        project={selected}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </SectionWrapper>
  );
}
