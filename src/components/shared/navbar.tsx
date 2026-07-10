import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
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
      <nav className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20">
        <button
          onClick={() => handleNavClick("#hero")}
          className="text-lg font-semibold tracking-tight transition-colors hover:text-brand"
          aria-label="Go to home"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-brand">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "link-underline relative px-3 py-2 text-sm transition-colors duration-300",
                isActive(link.href)
                  ? "font-medium text-brand"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-0.5 left-3 right-3 h-px bg-brand"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden gap-2 rounded-full text-muted-foreground sm:flex"
            onClick={() => {
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
              );
            }}
          >
            <Command className="h-3.5 w-3.5" />
            <span className="text-xs">Ctrl K</span>
          </Button>
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
