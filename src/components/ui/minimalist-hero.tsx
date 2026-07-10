import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  eyebrow?: string;
  readMoreLink: string;
  readMoreLabel?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
  showHeader?: boolean;
  onNavClick?: (href: string) => void;
  children?: ReactNode;
  actions?: ReactNode;
}

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: (href: string) => void;
}) => (
  <a
    href={href}
    onClick={(e) => {
      if (onClick && href.startsWith("#")) {
        e.preventDefault();
        onClick(href);
      }
    }}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-brand"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-brand"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export function MinimalistHero({
  logoText,
  navLinks,
  mainText,
  eyebrow,
  readMoreLink,
  readMoreLabel = "Read More",
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
  showHeader = true,
  onNavClick,
  children,
  actions,
}: MinimalistHeroProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-6 font-sans md:p-10 lg:p-12",
        className
      )}
    >
      {children}

      {showHeader && (
        <header className="z-30 flex w-full max-w-7xl items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-wider text-foreground"
          >
            {logoText}
          </motion.div>
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} onClick={onNavClick}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label="Open menu"
            type="button"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </motion.button>
        </header>
      )}

      <div className="relative z-10 grid w-full max-w-7xl flex-grow grid-cols-1 items-center py-8 md:grid-cols-3 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {eyebrow}
            </p>
          )}
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground md:mx-0 md:max-w-sm">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            onClick={(e) => {
              if (onNavClick && readMoreLink.startsWith("#")) {
                e.preventDefault();
                onNavClick(readMoreLink);
              }
            }}
            className="link-underline mt-4 inline-block text-sm font-medium text-brand"
          >
            {readMoreLabel}
          </a>
          {actions && <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">{actions}</div>}
        </motion.div>

        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full bg-brand/20 ring-1 ring-brand/25 md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="absolute z-0 h-[260px] w-[260px] rounded-full bg-brand/10 blur-2xl md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px]"
          />
          <div className="relative z-10">
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="portfolio-photo-cutout h-auto w-52 md:w-60 lg:w-72"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces";
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-end md:text-right"
        >
          <h1 className="text-6xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-brand-gradient">{overlayText.part1}</span>
            <br />
            <span className="text-foreground">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.href} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm font-medium text-muted-foreground"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
}
