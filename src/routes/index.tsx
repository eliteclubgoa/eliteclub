import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import casinoVideo from "@/assets/video/casino.MP4";
import { site, stats } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTAAnchor } from "@/components/site/CTAButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CasinoPage } from "./casino";
import { GamesPage } from "./games";
import { PlansPage } from "./plans";
import { GalleryPage } from "./gallery";
import { ContactPage } from "./contact";

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
  const [inView, setInView] = useState(false);

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
    <motion.div
      className="text-center"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display gold-text mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
        {label}
      </p>
    </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="hero-title mb-4 font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl">
              Goa&apos;s Best &amp; <span className="gold-text">Most Iconic</span>
              <br className="hidden sm:block" /> Offshore Casino Experience
            </h1>

            {site.description && (
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                {site.description}
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-4">
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
          </motion.div>

          <div className="hero-stats mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-4">
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
            <h1 className="mb-6 text-4xl font-bold font-display text-foreground sm:text-5xl lg:text-6xl">
              About <span className="gold-text">THE ELITE CLUB</span>
            </h1>
          </Reveal>

          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-2 sm:p-3">
            <video
              src={casinoVideo}
              className="block w-full rounded-[20px] object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      <CasinoPage />
      <GamesPage />
      <PlansPage />
      <GalleryPage />
      <ContactPage />
    </div>
  );
}
