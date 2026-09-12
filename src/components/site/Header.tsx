import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { site, navLinks, externalLinks } from "@/lib/site";
import { CTAAnchor } from "./CTAButton";
import { MobileMenu } from "./MobileMenu";

import logoImg from "@/assets/logo.jpg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0C0C0D]/95 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" id="header-logo">
            <img
              src={logoImg}
              alt="The Elite Club Logo"
              className="w-10 h-10 rounded-full object-cover border border-[var(--gold)]/40 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-wider gold-text font-display">
                THE ELITE CLUB
              </span>
              <span className="text-[0.55rem] tracking-[0.35em] uppercase text-muted-foreground">
                Casino
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" id="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-[0.8rem] font-medium tracking-wide transition-colors duration-300 hover:text-[var(--gold)] ${
                  currentPath === link.to
                    ? "text-[var(--gold)]"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
                {currentPath === link.to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-[var(--gold)] rounded-full" />
                )}
              </Link>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="px-3 py-2 text-[0.8rem] font-medium tracking-wide text-foreground/80 transition-colors duration-300 hover:text-[var(--gold)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Book Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <CTAAnchor
              href="/contact"
              className="hidden sm:inline-flex !text-[0.65rem] !px-5 !py-2.5"
              id="header-contact-btn"
            >
              CONTACT US
            </CTAAnchor>
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border)] text-foreground/80 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all"
              aria-label="Open menu"
              id="mobile-menu-toggle"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}
