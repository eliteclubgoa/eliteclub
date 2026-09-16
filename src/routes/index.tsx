import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { site, stats } from "@/lib/site";
import { casinos, games as gamesData } from "@/lib/data";
import { GameAnimation } from "@/components/site/GameAnimation";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAAnchor } from "@/components/site/CTAButton";
import { PremiumCard } from "@/components/site/PremiumCard";
import logoImg from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Luxurious Offshore Casino in Goa | Cruise Casino in Goa - The Elite Club",
      },
    ],
  }),
});

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Plan = {
  name: string;
  amount: number;
  proditems: string[];
  descriptions: string[];
};

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                    */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      className="text-center"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display gold-text mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Homepage                                                            */
/* ------------------------------------------------------------------ */
function Index() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    enquiry: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<"" | "success" | "error">("");

  /* Fetch pricing plans */
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    fetch(`${site.packagesApi}?date=${today}`)
      .then((r) => r.json())
      .then((data: Plan[]) => setPlans(data))
      .catch(() => { });
  }, []);

  /* Form validation */
  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};
    if (!formData.full_name || formData.full_name.length < 3)
      errors.full_name = "Enter at least 3 characters.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Enter a valid email.";
    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, "")))
      errors.phone = "Enter a valid phone number.";
    if (!formData.enquiry || formData.enquiry.length < 10)
      errors.enquiry = "Message must be at least 10 characters.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus("success");
      const msg = `Hi The Elite Club Casino,\n\nName: ${formData.full_name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEnquiry: ${formData.enquiry}`;
      const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");
      setFormData({ full_name: "", email: "", phone: "", enquiry: "" });
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  // Show first 6 games on homepage
  const homeGames = gamesData.slice(0, 6);

  return (
    <div className="overflow-x-hidden">
      {/* ============================================================ */}
      {/*  HERO BANNER                                                  */}
      {/* ============================================================ */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden pt-36 gradient-hero sm:pt-40 lg:pt-44"
        id="hero-section"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[var(--gold)]/5 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-center xl:text-left order-2 xl:order-1"
            >

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Goa&apos;s Best &amp;{" "}
                <span className="gold-text">Most Iconic</span> Offshore Casino
                Experience
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto xl:mx-0 leading-relaxed mb-8">
                {site.description}
              </p>

              <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4">
                <CTAAnchor
                  href="/contact"
                  id="hero-contact-us"
                >
                  CONTACT US
                </CTAAnchor>
                <CTAAnchor
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  id="hero-whatsapp-us"
                >
                  WHATSAPP US
                </CTAAnchor>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[var(--border)]">
                {stats.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT OUR CASINO                                             */}
      {/* ============================================================ */}
      <section className="section-py gradient-section" id="about-section">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Venues"
            title="About Our Casino"
            subtitle="Step aboard and explore our signature casino floors — each with its own character, atmosphere, and promise of an extraordinary evening."
            as="h2"
          />

          <RevealGroup className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casinos.map((casino) => (
              <RevealItem key={casino.slug}>
                <PremiumCard
                  image={casino.image}
                  alt={casino.name}
                  title={casino.name}
                  text={casino.short}
                  footer={
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground min-w-0 flex-1">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                        <span className="truncate">{casino.location}</span>
                      </div>
                      <a
                        href={casino.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10"
                      >
                        Map
                      </a>
                    </div>
                  }
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  GAMES SHOWCASE                                               */}
      {/* ============================================================ */}
      <section className="section-py" id="games-section">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Games"
            title="Goa's Premier Offshore Gaming Destination"
            subtitle="Discover a curated selection of Indian and international table games designed to deliver thrill, strategy, and unforgettable moments on the gaming floor."
          />

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {homeGames.map((game) => (
              <RevealItem key={game.name}>
                <div className="game-card game-card--live aspect-[4/3]">
                  <GameAnimation name={game.name} full />
                  <div className="game-overlay">
                    <span className="text-[0.65rem] font-medium text-[var(--gold)] tracking-widest uppercase mb-1">
                      {game.category}
                    </span>
                    <h3 className="text-lg font-bold font-display text-foreground mb-1">
                      {game.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {game.tagline}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.3} className="flex justify-end mt-8">
            <CTAAnchor href="/games" variant="outline">
              VIEW MORE <ChevronRight size={14} />
            </CTAAnchor>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING PLANS                                                */}
      {/* ============================================================ */}
      <section className="section-py gradient-section" id="plans-section">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="The Best Plans"
            subtitle="Choose from our carefully curated packages for an unforgettable casino experience."
          />

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const lowerName = plan.name?.toLowerCase() || "";
              const isYouth = lowerName.includes("youth");
              const isKids = lowerName.includes("kids");
              let tagClass = "plan-tag";
              if (isYouth) tagClass += " youth";
              else if (isKids) tagClass += " kids";

              let ageText = "";
              if (isYouth) ageText = "18 years - 21 years";
              else if (isKids) ageText = "Above 4 years - Below 18 years";

              return (
                <RevealItem key={`${plan.name}-${index}`}>
                  <div className="plan-card">
                    <span className={tagClass}>{plan.name}</span>

                    <div className="flex items-end gap-1 mt-4 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                        ₹{plan.amount || 0}
                      </span>
                    </div>

                    <div className="flex-1 space-y-3">
                      {(plan.proditems || []).map(
                        (item: string, i: number) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {item}
                              </p>
                              {plan.descriptions?.[i]?.trim() && (
                                <p className="text-xs text-muted-foreground/60 mt-0.5">
                                  ({plan.descriptions[i].trim()})
                                </p>
                              )}
                            </div>
                          </div>
                        ),
                      )}
                    </div>

                    {ageText && (
                      <p className="mt-4 text-xs text-muted-foreground italic">
                        ({ageText})
                      </p>
                    )}
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Fallback if API fails */}
          {plans.length === 0 && (
            <Reveal>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Loading packages...
                </p>
                <CTAAnchor
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ENQUIRE ON WHATSAPP
                </CTAAnchor>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2} className="flex justify-center mt-8">
            <CTAAnchor
              href="/contact"
            >
              CONTACT US
            </CTAAnchor>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTACT US                                                   */}
      {/* ============================================================ */}
      <section className="section-py gradient-dark" id="contact-section">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left: Contact Info */}
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-3">
                    Do you have any question?
                  </h2>
                  <h3 className="text-lg font-semibold text-[var(--gold)] mb-8">
                    Contact Us
                  </h3>

                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <MapPin size={22} className="text-[var(--gold)]" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">
                          The Elite Club Jetty
                        </strong>{" "}
                        at River Mandovi
                        <br />
                        Near District And Sessions Court,
                        <br />
                        Panaji, Goa 403001
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <Phone size={22} className="text-[var(--gold)]" />
                      </div>
                      <a
                        href={site.phoneHref}
                        className="text-lg font-bold text-foreground hover:text-[var(--gold)] transition-colors"
                      >
                        {site.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <Mail size={22} className="text-[var(--gold)]" />
                      </div>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-muted-foreground underline underline-offset-2 hover:text-[var(--gold)] transition-colors"
                      >
                        {site.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Right: Contact Form */}
              <Reveal delay={0.15}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                      Say Hi to the team
                    </p>
                    <h3 className="text-xl font-bold font-display text-foreground">
                      Get In Touch!
                    </h3>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="contact-form"
                  >
                    <div>
                      <label htmlFor="full_name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            full_name: e.target.value,
                          })
                        }
                        className={`form-input ${formErrors.full_name ? "error" : ""}`}
                      />
                      {formErrors.full_name && (
                        <p className="text-xs text-red-400 mt-1">
                          {formErrors.full_name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`form-input ${formErrors.email ? "error" : ""}`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="form-label">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Contact Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`form-input ${formErrors.phone ? "error" : ""}`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-400 mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="enquiry" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="enquiry"
                        rows={4}
                        placeholder="Your message..."
                        value={formData.enquiry}
                        onChange={(e) =>
                          setFormData({ ...formData, enquiry: e.target.value })
                        }
                        className={`form-input resize-none ${formErrors.enquiry ? "error" : ""}`}
                      />
                      {formErrors.enquiry && (
                        <p className="text-xs text-red-400 mt-1">
                          {formErrors.enquiry}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[var(--gold)] text-[#0C0C0D] text-sm font-semibold tracking-wider uppercase hover:bg-[var(--gold-light)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                      id="contact-submit-btn"
                    >
                      SEND
                    </button>

                    {formStatus === "success" && (
                      <p className="text-sm text-emerald-400 bg-emerald-500/10 rounded-lg px-4 py-3 text-center">
                        ✓ Message sent successfully!
                      </p>
                    )}
                    {formStatus === "error" && (
                      <p className="text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-3 text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Google Map */}
            <Reveal delay={0.2}>
              <div className="map-container">
                <iframe
                  src={site.mapEmbed}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Elite Club Casino Location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
