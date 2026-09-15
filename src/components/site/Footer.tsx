import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { site, footerUseful, footerLegal } from "@/lib/site";
import { Reveal } from "./Reveal";

import logoImg from "@/assets/logo.png";

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="relative border-t border-[var(--border)] bg-[#0a0a0c]" id="site-footer">
        <Reveal>
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
              {/* Brand Column */}

              {/* Useful Links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide uppercase">
                  Useful
                </h4>
                <ul className="space-y-3">
                  {footerUseful.map((link) =>
                    "external" in link && link.external ? (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link
                          to={"to" in link ? link.to : "/"}
                          className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide uppercase">
                  Legal
                </h4>
                <ul className="space-y-3">
                  {footerLegal.map((link) =>
                    "external" in link && link.external ? (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link
                          to={"to" in link ? link.to : "/"}
                          className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide uppercase">
                  Contact Us
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-muted-foreground hover:text-[var(--gold)] underline underline-offset-2 transition-colors duration-300"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    {site.addressShort}
                  </li>
                  <li>
                    <a
                      href={site.phoneHref}
                      className="text-lg font-bold text-[var(--gold)] font-display"
                    >
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="hairline mb-8" />

            {/* Copyright */}
            <p className="text-center text-xs text-muted-foreground">
              Copyright © 2026{" "}
              <Link to="/" className="text-[var(--gold)] hover:underline">
                Golden Peace Infrastructure Private Limited.
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
        </Reveal>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`scroll-top-btn ${showTop ? "visible" : ""}`}
        aria-label="Scroll to top"
        id="scroll-to-top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
