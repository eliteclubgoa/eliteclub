import { createFileRoute } from "@tanstack/react-router";
import { games } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/games")({
  component: GamesPage,
  head: () => ({
    meta: [
      { title: "Games | The Elite Club Casino - Casino Games in Goa" },
      {
        name: "description",
        content:
          "Discover our curated selection of Indian and international casino games — Roulette, Baccarat, Blackjack, Teen Patti, Poker, Andar Bahar and more.",
      },
    ],
  }),
});

function GamesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-medium text-[var(--gold)] tracking-wider uppercase">
                Casino Games
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4">
              Our <span className="gold-text">Games</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From classic table games to cutting-edge electronic gaming, find
              your perfect play on our floors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Games Grid */}
      <section className="section-py">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <RevealItem key={game.name}>
                <div className="game-card group">
                  <div className="aspect-[4/3]">
                    <img
                      src={game.image}
                      alt={game.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="game-overlay">
                    <span className="text-[0.65rem] font-medium text-[var(--gold)] tracking-widest uppercase mb-1">
                      {game.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-foreground mb-1">
                      {game.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {game.tagline}
                    </p>
                  </div>
                </div>

                {/* Rules */}
                <div className="mt-4 space-y-2 px-1">
                  {game.rules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                      <p className="text-sm text-muted-foreground">{rule}</p>
                    </div>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
