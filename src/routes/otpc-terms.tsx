import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/otpc-terms")({
  component: OtpcTermsPage,
  head: () => ({
    meta: [{ title: "OTPC Terms & Conditions | The Elite Club Casino Goa" }],
  }),
});

function OtpcTermsPage() {
  const points = [
    "OTPCs are non-cashable, for one-time use only, and issued in denominations of 1000. They cannot be broken into lower denominations.",
    "OTPCs may be played only once and are collected by the dealer regardless of the outcome, except in a tie or push where applicable.",
    "Roulette: only even-chance bets (Red, Black, Even, Odd, High, Low), restricted to the last three even-chance boxes on the dealer's left side. On the right-hand-side wheel, this means High, Odd, or Black.",
    "Mini Baccarat: Player bet only. Blackjack: initial bet only, not Pairs or Insurance. Andar Bahar: Andar bet only.",
    "Casino War: initial bet only. A tie requires a cash chip to continue, and optional bets are excluded. Money Wheel: No. 1 option only.",
    "7 Up and Down: Up or Down, but not both. Dragon Tiger: Dragon or Tiger, but not both. Sic Bo: Big option only.",
    "OTPCs cannot be played on opposite betting areas simultaneously and are not valid for Poker, Teen Patti, or machine-based games.",
    "Guests should confirm usage limitations with gaming staff before placing an OTPC. Management may cancel or amend these terms without prior notice.",
  ];

  return <LegalPage title="OTPC Terms & Conditions" points={points} />;
}

function LegalPage({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="overflow-x-hidden pt-10 pb-16 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="page-title mb-6 font-bold font-display text-foreground">{title}</h1>
          <ul className="list-none space-y-3 border-t border-[var(--border)] pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {points.map((point) => (
              <li
                key={point}
                className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']"
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
