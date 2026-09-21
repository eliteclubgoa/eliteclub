import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState, useEffect, type ComponentType } from "react";
import { useInView } from "@/hooks/use-in-view";
import { site, stats } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTAAnchor } from "@/components/site/CTAButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { HeroVideo } from "@/components/site/HeroVideo";

const CasinoPage = lazy(() =>
  import("./casino").then((module) => ({ default: module.CasinoPage })),
);
const GamesPage = lazy(() =>
  import("./games").then((module) => ({ default: module.GamesPage })),
);
const PlansPage = lazy(() =>
  import("./plans").then((module) => ({ default: module.PlansPage })),
);
const GalleryPage = lazy(() =>
  import("./gallery").then((module) => ({ default: module.GalleryPage })),
);
const ContactPage = lazy(() =>
  import("./contact").then((module) => ({ default: module.ContactPage })),
);

function BelowFold({ Page }: { Page: ComponentType }) {
  return (
    <Suspense fallback={<div className="min-h-[32vh]" aria-hidden="true" />}>
      <Page />
    </Suspense>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Luxurious Offshore Casino in Goa | Cruise Casino in Goa - The Elite Club",
      },
    ],
  }),
});

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                    */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="text-center transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display gold-text mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
        {label}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Homepage                                                            */
/* ------------------------------------------------------------------ */
function Index() {
  return (
    <div className="overflow-x-hidden">
      {/* ============================================================ */}
      {/*  HERO BANNER                                                  */}
      {/* ============================================================ */}
      <section className="gradient-hero relative isolate overflow-hidden border-b border-[var(--border)] pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14" id="hero-section">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal delay={0} y={24} className="mx-auto max-w-4xl text-center">
            <h1 className="hero-title page-title mb-4 font-display font-bold text-foreground">
              Goa&apos;s Best &amp; <span className="gold-text">Most Iconic</span>
              <br className="hidden sm:block" /> Casino's Experience
            </h1>

            {site.description && (
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {site.description}
              </p>
            )}

            <div className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <CTAAnchor href="/contact" id="hero-contact-us">
                CONTACT US
              </CTAAnchor>
              <CTAAnchor
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                id="hero-whatsapp-us"
                aria-label="Contact us on WhatsApp"
                title="Contact us on WhatsApp"
                className="!px-5"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                WHATSAPP US
              </CTAAnchor>
            </div>
          </Reveal>

          <div className="hero-stats mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 border-t border-[var(--border)] pt-8 sm:mt-12 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-[var(--border)] bg-background/80 py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="page-title mb-6 font-bold font-display text-foreground">
              THE <span className="gold-text">ELITE STORY</span>
            </h1>
          </Reveal>

          <div className="mx-auto flex aspect-[4/3] w-full max-w-7xl items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-black/40 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:aspect-[16/9] sm:rounded-[28px] sm:p-3">
            <HeroVideo />
          </div>
        </div>
      </section>

      <BelowFold Page={CasinoPage} />
      <BelowFold Page={GamesPage} />
      <BelowFold Page={PlansPage} />
      <BelowFold Page={GalleryPage} />
      <BelowFold Page={ContactPage} />
    </div>
  );
}
