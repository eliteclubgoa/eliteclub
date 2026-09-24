import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/refund-cancellation")({
  component: RefundCancellationPage,
  head: () => ({
    meta: [{ title: "Refund & Cancellation Policy | The Elite Club Casino Goa" }],
  }),
});

function RefundCancellationPage() {
  const points = [
    "Bookings made through the call centre or website are non-refundable.",
    "Rescheduling or cancellation is prohibited within 24 hours of the scheduled visit date.",
    "One date change is permitted for a future date when requested at least 24 hours before the visit. Any price difference is payable. If the revised price is lower, the difference is not payable to the guest.",
    "Cancellations for valid medical emergencies may qualify for a full refund after document verification. No cancellation or refund is allowed for blackout dates or special rates.",
    "No cancellations, refunds, or ticket transfers are allowed for no-shows or unutilized bookings. Approved refunds are returned to the original payment method and processed within ten working days after the request is generated.",
    "This refund and cancellation policy may change without notice. Management's decision is final.",
  ];

  return <LegalPage title="Refund & Cancellation Policy" points={points} />;
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
