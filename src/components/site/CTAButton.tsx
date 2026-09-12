import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.24em] transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-foreground hover:text-background",
  outline:
    "border border-hairline text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted-foreground hover:text-accent",
};

export function ctaClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function CTAButton({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={ctaClass(variant, className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

export function CTALink({
  to,
  variant = "primary",
  className,
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={ctaClass(variant, className)}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function CTAAnchor({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant; children: ReactNode }) {
  return (
    <a href={href} className={ctaClass(variant, className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
