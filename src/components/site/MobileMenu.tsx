import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { site, navLinks, externalLinks } from "@/lib/site";
import { CTAAnchor } from "./CTAButton";

export function MobileMenu({
  open,
  onClose,
  currentPath,
}: {
  open: boolean;
  onClose: () => void;
  currentPath: string;
}) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 pointer-events-none ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute top-0 right-0 z-[70] h-full w-[min(100%,360px)] bg-[#111113] border-l border-[var(--border)] shadow-2xl overflow-y-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) ${
          open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Close Button */}
        <div className="flex items-center justify-end px-6 py-5">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] text-muted-foreground hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all"
            aria-label="Close menu"
            id="mobile-menu-close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="hairline" />

        {/* Nav Links */}
        <nav className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <div
              key={link.to}
              className="transition-all duration-300"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transitionDelay: open ? `${0.05 * i + 0.1}s` : "0s",
              }}
            >
              <Link
                to={link.to}
                onClick={onClose}
                className={`block py-3 px-4 rounded-lg text-[0.9rem] font-medium transition-all duration-300 ${
                  currentPath === link.to
                    ? "text-[var(--gold)] bg-[var(--accent-soft)]"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          {externalLinks.map((link, i) => (
            <div
              key={link.href}
              className="transition-all duration-300"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transitionDelay: open ? `${0.05 * (navLinks.length + i) + 0.1}s` : "0s",
              }}
            >
              <a
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="block py-3 px-4 rounded-lg text-[0.9rem] font-medium text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all duration-300"
              >
                {link.label} ↗
              </a>
            </div>
          ))}
        </nav>

        <div className="hairline" />

        {/* Contact Button */}
        <div className="px-6 py-6">
          <CTAAnchor
            href="/contact"
            onClick={onClose}
            className="w-full text-center"
            id="mobile-contact-btn"
          >
            CONTACT US
          </CTAAnchor>
        </div>

        {/* Contact Info */}
        <div className="px-6 pb-8" />
      </div>
    </div>
  );
}
