import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | The Elite Club Casino Goa" },
    ],
  }),
});

function PrivacyPage() {
  return (
    <div className="overflow-x-hidden pt-10 pb-16 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
            Privacy <span className="gold-text">Policy</span>
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-[var(--border)] pt-8">
            <p>
              Golden Peace Infrastructure Private Limited (&quot;The Elite Club Casino&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting the privacy and personal data of our guests and website visitors.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">Information Collection</h2>
            <p>
              We collect information provided directly by you during ticket booking, registration, or online contact forms, including name, email address, phone number, and government ID details required by regulatory authorities.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">Use of Information</h2>
            <p>
              Your data is used to process bookings, verify eligibility at boarding, communicate updates regarding your visit, improve our services, and comply with legal requirements in the State of Goa.
            </p>

            <h2 className="text-lg font-bold text-foreground font-display">Data Security</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect your personal data against unauthorized access, loss, or alteration.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
