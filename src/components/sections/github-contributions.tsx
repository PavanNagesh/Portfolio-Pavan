import { useLayoutEffect, useRef, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";
import { motion } from "framer-motion";
import { ExternalLink, Github, RefreshCw } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useGithubContributions } from "@/hooks/use-github-contributions";
import { useTheme } from "@/components/shared/theme-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { transition } from "@/constants/motion";

const GRAPH_WIDTH_RATIO = 0.875;
const BLOCK_SIZE = 11;
const BLOCK_MARGIN = 3;

function ScaledContributionCalendar({
  data,
  colorScheme,
}: {
  data: { date: string; count: number; level: number }[];
  colorScheme: "light" | "dark";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLElement>(null);
  const [layout, setLayout] = useState<{
    scale: number;
    width: number;
    height: number;
  } | null>(null);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const container = containerRef.current;
      const calendar = calendarRef.current;
      if (!container || !calendar) return;

      const naturalWidth = calendar.scrollWidth;
      const naturalHeight = calendar.scrollHeight;
      if (!naturalWidth || !naturalHeight) return;

      const targetWidth = container.clientWidth * GRAPH_WIDTH_RATIO;
      const scale = targetWidth / naturalWidth;

      setLayout({
        scale,
        width: naturalWidth * scale,
        height: naturalHeight * scale,
      });
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [data]);

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="overflow-hidden"
        style={
          layout
            ? { width: layout.width, height: layout.height }
            : undefined
        }
      >
        <div
          style={
            layout
              ? {
                  transform: `scale(${layout.scale})`,
                  transformOrigin: "top left",
                }
              : undefined
          }
        >
          <ActivityCalendar
            ref={calendarRef}
            data={data}
            colorScheme={colorScheme}
            blockSize={BLOCK_SIZE}
            blockMargin={BLOCK_MARGIN}
            fontSize={13}
            theme={{
              dark: [
                "oklch(0.2 0.015 260)",
                "oklch(0.35 0.08 275)",
                "oklch(0.45 0.14 275)",
                "oklch(0.55 0.18 275)",
                "oklch(0.62 0.2 275)",
              ],
              light: [
                "oklch(0.97 0 0)",
                "oklch(0.88 0.04 275)",
                "oklch(0.72 0.1 275)",
                "oklch(0.58 0.16 275)",
                "oklch(0.52 0.22 275)",
              ],
            }}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function GithubContributionsContent() {
  const { theme } = useTheme();
  const { data, total, loading, error, username, retry } = useGithubContributions();

  return (
    <>
      <SectionHeading
        label="GitHub"
        title="GitHub Activity"
        description="Public repos. Side projects, coursework, and half-finished experiments."
      />

      <FadeIn>
        <motion.div
          whileHover={{ y: -2 }}
          transition={transition.base}
          className="premium-border overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-5 shadow-sm transition-shadow hover:border-brand/25 hover:shadow-lg hover:shadow-brand/5 md:p-6"
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-brand"
                >
                  @{username}
                  <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                {!loading && !error && (
                  <p className="text-xs text-muted-foreground">
                    {total.toLocaleString()} contributions last year
                  </p>
                )}
              </div>
            </div>

            <Button variant="outline" size="sm" className="rounded-full border-brand/30" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                View Profile
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {loading && (
            <div className="flex h-28 items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-brand" />
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <p className="text-sm text-muted-foreground">{error}</p>
              <Button variant="outline" size="sm" onClick={retry} className="rounded-full">
                <RefreshCw className="h-4 w-4" />
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            <ScaledContributionCalendar data={data} colorScheme={theme} />
          )}
        </motion.div>
      </FadeIn>
    </>
  );
}
