import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | The Elite Club Casino Goa" },
      {
        name: "description",
        content:
          "Get in touch with The Elite Club Casino in Panaji, Goa. Call our toll-free line 1800 1200 444 or send an inquiry for bookings, group packages, and VIP services.",
      },
    ],
  }),
});

export function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    enquiry: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<"" | "success" | "error">("");

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};
    if (!formData.full_name || formData.full_name.length < 3)
      errors.full_name = "Enter at least 3 characters.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Enter a valid email address.";
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

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="gradient-hero pt-40 pb-16 sm:pt-44 lg:pt-48">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-medium text-[var(--gold)] tracking-wider uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4">
              Contact <span className="gold-text">The Elite Club</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We are available 24/7 to assist with your bookings, group reservations, VIP lounge access, and general inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="section-py">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Info */}
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-display text-foreground mb-3">
                    Headquarters &amp; Jetty Location
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our feeder boats board continuously from The Elite Club Jetty, River Mandovi, Near District And Sessions Court, Panaji, Goa 403001.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[var(--gold)]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1 uppercase tracking-wider">
                        Address
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {site.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[var(--gold)]">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1 uppercase tracking-wider">
                        Toll-Free Phone
                      </h4>
                      <a
                        href={site.phoneHref}
                        className="text-lg font-bold text-[var(--gold)] hover:underline"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[var(--gold)]">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1 uppercase tracking-wider">
                        Email Support
                      </h4>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-muted-foreground hover:text-[var(--gold)] underline underline-offset-2"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[var(--gold)]">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1 uppercase tracking-wider">
                        Operating Hours
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Open 24 Hours / 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Form */}
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                <h3 className="text-xl font-bold font-display text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact_name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      placeholder="Full Name"
                      value={formData.full_name}
                      onChange={(e) =>
                        setFormData({ ...formData, full_name: e.target.value })
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
                    <label htmlFor="contact_email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="contact_email"
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
                    <label htmlFor="contact_phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="contact_phone"
                      placeholder="Phone Number"
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
                    <label htmlFor="contact_enquiry" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      id="contact_enquiry"
                      rows={5}
                      placeholder="How can we help you?"
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
                    className="w-full py-3.5 rounded-lg bg-[var(--gold)] text-[#0C0C0D] text-sm font-semibold tracking-wider uppercase hover:bg-[var(--gold-light)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                  >
                    SEND ENQUIRY
                  </button>

                  {formStatus === "success" && (
                    <p className="text-sm text-emerald-400 bg-emerald-500/10 rounded-lg px-4 py-3 text-center">
                      ✓ Thank you! Your message has been sent. Our team will contact you shortly.
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
