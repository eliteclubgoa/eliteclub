import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { site, navLinks, externalLinks } from "@/lib/site";
import { CTAAnchor } from "./CTAButton";

import logoImg from "@/assets/logo.png";

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
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] h-full w-[min(100%,360px)] bg-[#111113] border-l border-[var(--border)] shadow-2xl overflow-y-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
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
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
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
                </motion.div>
              ))}
              {externalLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * (navLinks.length + i),
                    duration: 0.3,
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
                </motion.div>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
