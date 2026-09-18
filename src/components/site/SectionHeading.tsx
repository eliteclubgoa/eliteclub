import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4 sm:mb-5">{eyebrow}</p> : null}
      <Tag className="fluid-title text-foreground">{title}</Tag>
      {subtitle ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-8 h-px w-24 bg-accent/60",
          align === "center" && "mx-auto",
        )}
      />
    </Reveal>
  );
}
