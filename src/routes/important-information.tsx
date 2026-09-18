import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/important-information")({
  component: ImportantInformationPage,
  head: () => ({
    meta: [{ title: "Important Information | The Elite Club Casino Goa" }],
  }),
});

function ImportantInformationPage() {
  const points = [
    "THE ELITE CLUB is open 24 hours a day, 7 days a week. For pre-purchased bookings made through the call centre or website, check-in at the boarding point is available from 9:00 a.m. to 11:59 p.m.",
    "The casino is a stationed vessel. Feeder boats transport guests from the boarding point at Fisheries Jetty, Panjim, which is open 24 hours a day, 7 days a week.",
    "When you play and win with an OTPC, the coupon is converted into cash chips. These cash chips can be used across all casino games and are encashable. Please refer to the OTPC terms below for complete details.",
    "All packages offer the same inclusions and differ only in the brands of drinks available. Guests may choose a package according to their preferred alcohol brands.",
    "The casino operates 24/7. Drinks and light munchies are available exclusively at gaming tables and must be ordered through the tables. Live food counters and the bar operate from 7:00 p.m. to midnight. The buffet operates from 8:30 p.m. to 1:00 a.m. Both services are extended by one hour on weekends. Ambient music followed by live entertainment is available from 9:00 p.m. to midnight.",
    "Valet parking is available at the Panjim boarding point from 6:30 p.m. to 6:30 a.m., subject to driver and parking-space availability. Only private four-wheeler vehicles with permanent registration are accepted. Commercial vehicles, soft-top vehicles, vehicles with tinted windows, temporary registration, or yellow number plates are not accepted. Valet parking is offered at the vehicle owner's risk and is available only to guests with confirmed bookings.",
  ];

  return (
    <LegalPage title="Important Information">
      <LegalList points={points} />
    </LegalPage>
  );
}

function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-x-hidden pt-10 pb-16 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="mb-6 text-3xl font-bold font-display text-foreground sm:text-4xl">
            {title}
          </h1>
          <div className="border-t border-[var(--border)] pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {children}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function LegalList({ points }: { points: string[] }) {
  return (
    <ul className="list-none space-y-3 pl-0">
      {points.map((point) => (
        <li key={point} className="before:mr-2 before:text-[var(--gold)] before:content-['➢']">{point}</li>
      ))}
    </ul>
  );
}
