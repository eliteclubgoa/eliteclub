import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SmartImage } from "./SmartImage";

export function PremiumCard({
  image,
  alt,
  eyebrow,
  title,
  text,
  footer,
  ratio = "aspect-4/3",
  className,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text?: string;
  footer?: ReactNode;
  ratio?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-hairline bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift",
        className,
      )}
    >
      <span className="pointer-events-none absolute top-0 left-0 h-5 w-5 border-t border-l border-accent/0 transition-colors duration-500 group-hover:border-accent/70" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-5 w-5 border-r border-b border-accent/0 transition-colors duration-500 group-hover:border-accent/70" />

      <div className={cn("relative overflow-hidden bg-[#0C0C0D]", ratio)}>
        <SmartImage
          src={image}
          alt={alt}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-contain p-2 opacity-90 transition-transform duration-[900ms] ease-out group-hover:scale-[1.02] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-7">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3 className="text-xl text-foreground sm:text-2xl">{title}</h3>
        {text ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
        ) : null}
        {footer ? <div className="mt-auto pt-4">{footer}</div> : null}
      </div>
    </article>
  );
}
