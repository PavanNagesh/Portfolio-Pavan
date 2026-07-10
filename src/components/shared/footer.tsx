import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { siteConfig, navLinks } from "@/constants/site";
import { transition } from "@/constants/motion";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const social = [
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: personalInfo.github, icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="section-glow section-padding-compact pb-8">
      <div className="container-max">
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <blockquote className="mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground italic md:text-base">
          &ldquo;{siteConfig.footerQuote}&rdquo;
        </blockquote>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{personalInfo.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{personalInfo.location}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
              Navigate
            </p>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
              Connect
            </p>
            <div className="flex gap-2.5">
              {social.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={transition.fast}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground shadow-sm transition-colors hover:border-brand/40 hover:text-brand hover:shadow-[var(--card-elevation-hover)]"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/30 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {personalInfo.name}</p>
          <p>Built with React, Vite, and Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
