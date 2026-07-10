import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/site";
import { personalInfo } from "@/data/personal";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";
import { transition } from "@/constants/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const firstName = personalInfo.name.split(" ")[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...transition.slow, delay: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container-max flex items-center justify-between gap-8 px-6 md:gap-10 md:px-12 lg:px-16">
        <button
          onClick={() => handleNavClick("#hero")}
          className="shrink-0 text-xl font-bold tracking-tight transition-opacity hover:opacity-90"
          aria-label="Go to home"
        >
          <span className="nav-brand-logo">{firstName}</span>
          <span className="text-brand">.</span>
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "link-underline relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 lg:px-4",
                  isActive(link.href)
                    ? "font-medium text-brand"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-3.5 right-3.5 h-px bg-brand lg:left-4 lg:right-4"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 md:gap-3.5">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden rounded-full border-brand/30 md:inline-flex"
            asChild
          >
            <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.base}
          className="glass-nav border-t border-border/40 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  isActive(link.href)
                    ? "bg-brand/10 font-medium text-brand"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
