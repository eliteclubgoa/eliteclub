import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTAAnchor } from "@/components/site/CTAButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  Check,
  Users,
  Coins,
  Wine,
  UtensilsCrossed,
  Music4,
  CarFront,
  BedDouble,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/plans")({
  component: PlansPage,
  head: () => ({
    meta: [
      { title: "Plans | The Elite Club - Premium Membership Offers" },
      {
        name: "description",
        content:
          "Explore premium plans and membership options from The Elite Club Casino with tailored experiences, exclusive offers, and luxury benefits.",
      },
    ],
  }),
});

// --- Data --------------------------------------------------------------

type Package = {
  name: string;
  tag: string;
  price: string;
  entries: string;
  chips: string;
  hotel: string;
  highlight?: boolean;
};

const packages: Package[] = [
  {
    name: "Classic",
    tag: "Essential",
    price: " 50,000",
    entries: "2 Persons",
    chips: " 50,000",
    hotel: "Not Included",
  },
  {
    name: "Premium",
    tag: "Most Popular",
    price: " 1,00,000",
    entries: "3 Persons",
    chips: " 1,00,000",
    hotel: "3 Star",
  },
  {
    name: "Elite",
    tag: "Signature",
    price: " 2,00,000",
    entries: "6 Persons",
    chips: " 2,00,000",
    hotel: "3 Star",
    highlight: true,
  },
];

const rows: { label: string; icon: LucideIcon; values: (string | boolean)[] }[] = [
  { label: "Price", icon: Coins, values: packages.map((p) => p.price) },
  { label: "Entries", icon: Users, values: packages.map((p) => p.entries) },
  { label: "Playing Chips", icon: Coins, values: packages.map((p) => p.chips) },
  { label: "Unlimited Drinks", icon: Wine, values: packages.map(() => "Package-specific brands") },
  { label: "Unlimited Food", icon: UtensilsCrossed, values: packages.map(() => true) },
  { label: "Live Entertainment", icon: Music4, values: packages.map(() => true) },
  { label: "Pickup & Drop", icon: CarFront, values: packages.map(() => true) },
  { label: "Hotel Stay", icon: BedDouble, values: packages.map((p) => p.hotel) },
];
// --- Helpers -------------------------------------------------------------

/** Builds a wa.me link with a prefilled message. Keeps every CTA in sync. */
function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

const DEFAULT_ENQUIRY = "Hi The Elite Club Casino, I want to enquire about your premium packages.";

/** Reusable "chat on WhatsApp" button so every CTA looks and behaves the same. */
function WhatsAppCTA({
  message = DEFAULT_ENQUIRY,
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  return (
    <CTAAnchor
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      title="Enquire on WhatsApp"
      className={`mx-auto w-full max-w-none gap-2 !border-black !bg-black !bg-none !px-3 !text-white hover:!border-black hover:!bg-black sm:w-fit sm:max-w-[240px] ${className}`}
    >
      <WhatsAppIcon size={20} className="shrink-0" />
      WHATSAPP US
    </CTAAnchor>
  );
}

// --- Page ------------------------------------------------------------------

export function PlansPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="page-section gradient-hero">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="page-title mb-6 font-bold font-display text-foreground">
              THE <span className="gold-text">ELITE PLANS</span>
            </h1>
          </Reveal>
          <Reveal>
            <div className="hidden overflow-x-auto rounded-[1.25rem] border border-[var(--gold)]/20 bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:block">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Classic, Premium, and Elite packages
                </caption>
                <thead>
                  <tr className="border-b border-[var(--gold)]/25 bg-[var(--gold)]/[0.04]">
                    <th
                      scope="col"
                      className="w-[28%] px-5 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:px-8"
                    >
                      Inclusions
                    </th>
                    {packages.map((plan) => (
                      <th
                        key={plan.name}
                        scope="col"
                        className={`relative px-5 py-6 sm:px-8 ${plan.highlight ? "bg-[var(--gold)]/[0.08]" : ""}`}
                      >
                        {plan.highlight && (
                          <span className="absolute inset-x-0 top-0 h-0.5 bg-[var(--gold)]" />
                        )}
                        <span className="block text-sm font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
                          {plan.tag}
                        </span>
                        <span className="mt-2 block font-display text-3xl font-semibold text-foreground sm:text-4xl">
                          {plan.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={row.label} className="border-b border-[var(--border)] last:border-b-0">
                      <th
                        scope="row"
                        className="px-5 py-5 text-base font-semibold text-foreground sm:px-8"
                      >
                        <span className="flex items-center gap-2.5">
                          <row.icon size={16} className="text-[var(--gold)]" />
                          {row.label}
                        </span>
                      </th>
                      {row.values.map((value, index) => {
                        const plan = packages[index];
                        return (
                          <td
                            key={`${row.label}-${index}`}
                            className={`px-5 py-5 text-base text-foreground/75 sm:px-8 ${plan?.highlight ? "bg-[var(--gold)]/[0.04]" : ""} ${rowIndex === 0 ? "font-display text-xl font-semibold text-[var(--gold)]" : ""}`}
                          >
                            {value === true ? (
                              <span
                                className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--gold)]/45 bg-[var(--gold)]/10 text-[var(--gold)]"
                                aria-label="Included"
                              >
                                <Check size={14} strokeWidth={2.5} />
                              </span>
                            ) : (
                              value
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    {packages.map((plan) => (
                      <td
                        key={plan.name}
                        className={`px-5 py-6 sm:px-8 ${plan.highlight ? "bg-[var(--gold)]/[0.04]" : ""}`}
                      >
                        <WhatsAppCTA
                          message={`Hi The Elite Club Casino, I want to enquire about the ${plan.name} package.`}
                          className="justify-center"
                        />
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="grid gap-4 md:hidden">
              {packages.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative overflow-hidden rounded-2xl border bg-[var(--surface)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-5 ${
                    plan.highlight ? "border-[var(--gold)]/55" : "border-[var(--border)]"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute inset-x-0 top-0 h-1 bg-[var(--gold)]" />
                  )}
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="eyebrow mb-2">{plan.tag}</p>
                      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                        {plan.name}
                      </h2>
                    </div>
                    <p className="shrink-0 text-right font-display text-lg font-semibold text-[var(--gold)] sm:text-xl">
                      {plan.price}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 border-y border-[var(--border)] py-4 sm:grid-cols-2 sm:gap-x-4">
                    {rows.slice(1).map((row) => {
                      const value = row.values[packages.indexOf(plan)];
                      return (
                        <div key={row.label} className="min-w-0">
                          <p className="mb-1 flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                            <row.icon size={13} className="shrink-0 text-[var(--gold)]" />
                            {row.label}
                          </p>
                          <p className="break-words text-sm leading-snug text-foreground/85">
                            {value === true ? "Included" : value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex justify-center">
                    <WhatsAppCTA
                      message={`Hi The Elite Club Casino, I want to enquire about the ${plan.name} package.`}
                      className="justify-center"
                    />
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
