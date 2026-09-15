import { createFileRoute, Link } from "@tanstack/react-router";
import { casinos } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAAnchor } from "@/components/site/CTAButton";
import { PremiumCard } from "@/components/site/PremiumCard";
import { MapPin, Sparkles } from "lucide-react";
import heroCasino from "@/assets/casino/casino pride.png";

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

function CasinoPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center gradient-hero">
        <div className="absolute inset-0">
          <img
            src={heroCasino}
            alt="The Elite Club Casino Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D] via-[#0C0C0D]/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-medium text-[var(--gold)] tracking-wider uppercase">
                Our Venues
              </span>
            </div>
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
                />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.3} className="text-center mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Experience the{" "}
              <span className="gold-text">Luxury?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book your visit and discover why The Elite Club is among the
              best casinos in Goa.
            </p>
            <CTAAnchor
              href="/contact"
              id="casino-contact-btn"
            >
              CONTACT US
            </CTAAnchor>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
