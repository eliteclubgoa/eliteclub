import { createFileRoute } from "@tanstack/react-router";
import { casinos } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { PremiumCard } from "@/components/site/PremiumCard";
import { MapPin } from "lucide-react";

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
      <section className="page-section gradient-hero">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="page-title mb-6 font-bold font-display text-foreground">
              The <span className="gold-text">HOUSE</span>
            </h1>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
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
                        <span className="break-words">{casino.location}</span>
                      </div>
                      <a
                        href={casino.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10"
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
