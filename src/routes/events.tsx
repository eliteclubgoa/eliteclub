import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAAnchor } from "@/components/site/CTAButton";
import { site } from "@/lib/site";
import { Sparkles, Calendar, Music, PartyPopper } from "lucide-react";
import entertainment1 from "@/assets/entertainment-1.jpg";
import events1 from "@/assets/events-1.jpg";
import casino4 from "@/assets/casino-4.jpg";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      {
        title: "Events | The Elite Club Casino - Entertainment in Goa",
      },
      {
        name: "description",
        content:
          "Discover exciting events and live entertainment at The Elite Club Casino — from music performances to exclusive celebrations on the Mandovi River.",
      },
    ],
  }),
});

const events = [
  {
    title: "Live Music Nights",
    description:
      "Experience electrifying live performances by renowned artists and local musicians every weekend on our entertainment deck.",
    image: entertainment1,
    icon: <Music size={20} />,
    schedule: "Every Friday & Saturday",
  },
  {
    title: "Grand Celebrations",
    description:
      "Host your special occasions — anniversaries, corporate events, or private parties — in the most luxurious setting on the Mandovi River.",
    image: events1,
    icon: <PartyPopper size={20} />,
    schedule: "Available for booking",
  },
  {
    title: "Themed Casino Nights",
    description:
      "Join our specially curated themed evenings featuring unique gaming tournaments, cocktail sessions, and premium entertainment.",
    image: casino4,
    icon: <Calendar size={20} />,
    schedule: "Monthly special events",
  },
];

function EventsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-medium text-[var(--gold)] tracking-wider uppercase">
                Events & Entertainment
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4">
              <span className="gold-text">Events</span> & Entertainment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From pulsating live performances to exclusive celebrations,
              every night at The Elite Club is designed to be unforgettable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-py">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border)]">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                        {event.icon}
                      </div>
                      <span className="text-xs font-medium text-[var(--gold)] tracking-widest uppercase">
                        {event.schedule}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
                      {event.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <CTAAnchor
                      href="/contact"
                      variant="outline"
                    >
                      ENQUIRE NOW
                    </CTAAnchor>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py gradient-section">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Plan Your{" "}
              <span className="gold-text">Unforgettable Evening</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Contact us for private events, corporate bookings, or special
              celebrations aboard The Elite Club.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAAnchor
                href="/contact"
              >
                CONTACT US
              </CTAAnchor>
              <CTAAnchor
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                WHATSAPP US
              </CTAAnchor>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
