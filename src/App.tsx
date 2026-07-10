import { ThemeProvider } from "@/components/shared/theme-provider";
import { AppParticlesProvider } from "@/components/shared/particles-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ScrollProgressBar } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { CommandPalette } from "@/components/shared/command-palette";
import { SocialDock } from "@/components/shared/social-dock";
import { HomePage } from "@/pages/Home";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <AppParticlesProvider>
        <TooltipProvider delayDuration={200}>
        <LoadingScreen />
        <ScrollProgressBar />
        <Navbar />
        <main>
          <HomePage />
        </main>
        <Footer />
        <BackToTop />
        <SocialDock />
        <CommandPalette />
        </TooltipProvider>
      </AppParticlesProvider>
    </ThemeProvider>
  );
}
