import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [{ title: "Terms & Conditions | The Elite Club Casino Goa" }],
  }),
});

function TermsPage() {
  return (
    <div className="overflow-x-hidden pt-10 pb-16 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="page-title mb-6 font-bold font-display text-foreground">
            Terms &amp; <span className="gold-text">Conditions</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-[var(--border)] pt-8">
            <section
              id="terms-and-conditions"
              className="space-y-4 border-b border-[var(--border)] pb-8 last:border-b-0"
            >
              <h2 className="text-lg font-bold text-foreground font-display">
                Terms &amp; Conditions
              </h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  A valid and original government photo ID must be carried for verification before
                  boarding. A passport is mandatory for all international guests and must be
                  presented on request.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  The legal age for alcohol service and access to the casino floor is 21 and above.
                  Children aged 12 and above may access the Bar.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Men must wear formal or smart-casual clothing. Shorts, sleeveless T-shirts,
                  flip-flops, track pants, and chappals are not permitted. Women may wear
                  appropriate evening wear.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Guests will not be permitted onboard or into the casino in an inebriated state.
                  Management may remove guests for unruly or disruptive behaviour, and the right of
                  admission is reserved.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Kirpans, backpacks, laptop bags, and larger bags are not permitted onboard.
                  Lockers are available at the security desk for a charge. Weapons, knives, guns,
                  fireworks, helmets, laser devices, bottles, musical instruments, and other
                  dangerous or potentially hazardous objects are prohibited.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Feeder-boat availability is subject to weather and sea conditions. Management may
                  delay service without prior notice for guest safety and comfort.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  THE ELITE CLUB provides nonstop feeder-boat service. Guests using private boats
                  must register for marine clearance seven days in advance. Clearance depends on
                  marine regulations, weather, and other factors.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  The children&apos;s room is open from 3:30 p.m. to 5:00 a.m. A female guardian
                  must be present with children under five. Access is first-come, first-served and
                  subject to availability; management&apos;s decision is final.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Restaurant live counters and refreshments start at 7:00 p.m., followed by a buffet
                  until 1:00 a.m. Monday to Thursday and until 2:00 a.m. Friday to Sunday.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Restaurant seating is limited to 90 minutes. Tables cannot be reserved and are
                  available on a first-come, first-served basis.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Package drinks may be collected from the restaurant bar from 7:00 p.m. to midnight
                  Monday to Thursday and until 1:00 a.m. Friday to Sunday. Drinks and munchies at
                  gaming tables are served around the clock; direct bar orders on gaming floors are
                  not permitted.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Management may stop alcohol service to an inebriated guest. Guests asked to leave
                  for intoxication may be charged ₹1,500 for damage and cleaning.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Alcohol service is not permitted on Gandhi Jayanti, election days, or other
                  government-designated dry days. Smoking is permitted only in designated areas.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  The Sky Bar or other areas may close because of weather or private bookings. The
                  Sky Bar/Sundeck remains closed during monsoon. No refund is issued for an
                  unavailable open deck caused by a private function, weather, or another untoward
                  situation.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  Photography and videography are prohibited in restricted areas and remain subject
                  to management&apos;s decision.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  The name on every debit or credit card used must match the guest&apos;s authentic
                  government-issued ID. Joint-account and company cards will not be accepted.
                  International cards are not accepted.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:text-[var(--gold)] before:content-['➢']">
                  These terms and conditions may be changed at management&apos;s discretion.
                </li>
              </ul>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
