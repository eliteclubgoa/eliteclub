import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/community-guidelines")({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: "Community Guidelines | The Elite Club Casino Goa" },
    ],
  }),
});

function CommunityPage() {
  return (
    <div className="overflow-x-hidden pt-10 pb-16 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
            Community <span className="gold-text">Guidelines</span>
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-[var(--border)] pt-8">
            <p>
              The Elite Club Casino strives to provide a sophisticated, welcoming, and safe atmosphere for all guests. We ask all patrons to observe the following guidelines.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">Respectful Behavior</h2>
            <p>
              Treat fellow guests, dealers, hospitality staff, and security personnel with courtesy and respect at all times. Abusive language or disruptive behavior will lead to immediate removal.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">Photography &amp; Recording</h2>
            <p>
              Photography and videography are strictly prohibited on gaming floors to protect guest privacy and game integrity. Media capture is allowed in designated lounge and deck areas only.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">Fair Play &amp; Ethics</h2>
            <p>
              Collusion, electronic device usage at gaming tables, or any form of cheating will result in immediate confiscation of chips, vessel ejection, and legal prosecution under applicable Goa state laws.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
