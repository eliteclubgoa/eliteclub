import { createFileRoute, Link } from "@tanstack/react-router";
import { casinos } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAAnchor } from "@/components/site/CTAButton";
import { PremiumCard } from "@/components/site/PremiumCard";
import { MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/casino")({
  component: CasinoPage,
  head: () => ({
    meta: [
      { title: "Casino | The Elite Club - Offshore Casino in Goa" },
      {
        name: "description",
        content:
          "Explore The Elite Club Casino venues — from intimate private rooms to grand gaming floors, each offering a unique experience on the Mandovi River.",
      },
    ],
  }),
});

export function CasinoPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[20vh] flex items-center gradient-hero pt-28 sm:pt-30 lg:pt-32">
        <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 pb-6">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4">
              The <span className="gold-text">Casino</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Step aboard and explore our signature casino floors — each with
              its own character, atmosphere, and promise of an extraordinary
              evening.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Casino Venues Grid */}
      <section className="section-py">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casinos.map((casino) => (
              <RevealItem key={casino.slug}>
                <PremiumCard
                  image={casino.image}
                  alt={casino.name}
                  title={casino.name}
                  text={casino.short}
                  footer={
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground min-w-0 flex-1">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                        <span className="truncate">{casino.location}</span>
                      </div>
                      <a
                        href={casino.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10"
                      >
                        Map
                      </a>
                    </div>
                  }
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
