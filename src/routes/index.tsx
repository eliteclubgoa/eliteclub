import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
  Dice5,
  Star,
} from "lucide-react";
import { site, stats } from "@/lib/site";
import { games as gamesData } from "@/lib/data";
import { GameAnimation } from "@/components/site/GameAnimation";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAAnchor } from "@/components/site/CTAButton";
import heroCasino from "@/assets/hero-casino.jpg";
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
      .catch(() => {});
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
        className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
        id="hero-section"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[var(--gold)]/5 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-center xl:text-left order-2 xl:order-1"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
                <img
                  src={logoImg}
                  alt="The Elite Club Crown Logo"
                  className="w-6 h-6 rounded-full object-cover border border-[var(--gold)]/40"
                />
                <span className="text-xs font-semibold text-[var(--gold)] tracking-wider uppercase">
                  Welcome to The Elite Club
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Goa&apos;s Largest &amp;{" "}
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

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 xl:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[var(--gold)]/10 shadow-2xl">
                <img
                  src={heroCasino}
                  alt="The Elite Club Casino - Luxury offshore casino on the Mandovi River"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/60 via-transparent to-transparent" />

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C0C0D]/80 backdrop-blur-md border border-[var(--gold)]/20"
                >
                  <Dice5 size={16} className="text-[var(--gold)]" />
                  <span className="text-sm font-medium text-foreground">
                    100+ Casino Games
                  </span>
                </motion.div>
              </div>

              {/* Decorative floating element */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden xl:block absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[var(--gold)]/10 backdrop-blur-sm border border-[var(--gold)]/20 flex items-center justify-center"
              >
                <Star
                  size={28}
                  className="text-[var(--gold)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>
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
            eyebrow="About Us"
            title="About Our Casino"
            subtitle="Exciting games. Captivating performances. Exquisite dining. At The Elite Club Casino, every visit becomes an unforgettable offshore casino experience in Goa where thrilling gaming, vibrant entertainment, and fine cuisine come together seamlessly."
            as="h2"
          />

          <Reveal delay={0.2}>
            <div className="mt-12 video-wrapper max-w-4xl mx-auto">
              <video
                src="https://www.majesticpride.in/media/casino-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            </div>
          </Reveal>
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
