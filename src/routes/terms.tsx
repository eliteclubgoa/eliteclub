import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | The Elite Club Casino Goa" },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="overflow-x-hidden pt-20 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
            Terms &amp; <span className="gold-text">Conditions</span>
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-[var(--border)] pt-8">
            <h2 className="text-lg font-bold text-foreground font-display">1. Entry &amp; Age Eligibility</h2>
            <p>
              Entry into the gaming floor of The Elite Club Casino is strictly restricted to individuals aged 21 years and above. Guests aged between 18 and 21 years (Youth package) and children under 18 years (Kids package) are permitted in designated non-gaming restaurant and lounge decks only.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">2. Mandatory Identification</h2>
            <p>
              All guests must present original government-issued photo identification (Aadhaar Card, Passport, Driving Licence, or Voter ID) at the registration desk prior to boarding. Foreign nationals must present a valid passport and Indian visa.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">3. Dress Code Policy</h2>
            <p>
              Smart casual attire or formal wear is required. Short pants, flip-flops, sleeveless t-shirts (for gentlemen), and beachwear are not permitted inside the main gaming decks.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">4. Packages &amp; Cancellation</h2>
            <p>
              All entry tickets and package purchases are non-refundable and non-transferable once issued. Re-entry privileges depend on the specific package purchased.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">5. Responsible Gaming &amp; Conduct</h2>
            <p>
              The Elite Club Casino promotes responsible gaming. Management reserves the right to deny entry or request any guest to leave the vessel in case of misconduct, intoxication, or violation of house rules.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
