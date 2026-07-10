import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento premium-border row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-border/50 bg-card/80 p-5 shadow-[var(--card-elevation)] transition duration-300 hover:border-brand/25 hover:shadow-[var(--card-elevation-hover)]",
        className,
      )}
    >
      {header}
      <div className="transition duration-300 group-hover/bento:translate-x-1">
        {icon}
        <div className="mt-2 mb-2 font-semibold text-foreground">
          {title}
        </div>
        {description ? (
          <div className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
};
