import { Github, Linkedin } from "lucide-react";
import { FloatingDockVertical } from "@/components/ui/floating-dock";
import { socialLinks } from "@/constants/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
} as const;

export function SocialDock() {
  const items = socialLinks.map((link) => {
    const Icon = iconMap[link.id as keyof typeof iconMap];
    return {
      title: link.label,
      href: link.href,
      icon: <Icon className="h-full w-full" />,
    };
  });

  return (
    <>
      {/* Desktop & tablet — fixed left center */}
      <div
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 sm:block md:left-6"
        aria-label="Social links"
      >
        <FloatingDockVertical items={items} />
      </div>

      {/* Mobile — compact fixed left center */}
      <div
        className="fixed left-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 sm:hidden"
        aria-label="Social links"
      >
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            title={item.title}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-card/90 text-foreground shadow-md backdrop-blur-xl transition-transform hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="h-4 w-4">{item.icon}</span>
          </a>
        ))}
      </div>
    </>
  );
}
