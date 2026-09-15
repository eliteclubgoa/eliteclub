import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { site, navLinks, externalLinks } from "@/lib/site";
import { CTAAnchor } from "./CTAButton";
import { MobileMenu } from "./MobileMenu";

import logoImg from "@/assets/logo.png";

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
            ? "bg-[#0C0C0D]/95 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.5)] py-2"
            : "bg-[#0C0C0D]/80 backdrop-blur-sm py-3"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-3 md:gap-5"
              id="header-logo"
            >
              <div className="relative flex-shrink-0">
                <span className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.5),_rgba(255,215,0,0.2)_50%,_transparent_75%)] blur-[28px]" />
                <img
                  src={logoImg}
                  alt="The Elite Club Logo"
                  className="relative h-20 w-20 rounded-full border-[3px] border-[var(--gold)] object-cover shadow-[0_0_35px_rgba(255,215,0,0.42)] transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                />
              </div>
              <div className="hidden sm:flex flex-col justify-center leading-none">
                <span className="font-display text-xl font-extrabold uppercase tracking-[0.18em] text-[var(--gold)] drop-shadow-[0_3px_10px_rgba(255,215,0,0.35)] sm:text-2xl lg:text-[2.2rem]">
                  THE ELITE CLUB
                </span>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-2 lg:gap-4" id="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-2.5 py-2 text-[0.82rem] font-medium tracking-wide transition-colors duration-300 hover:text-[var(--gold)] ${
                    currentPath === link.to
                      ? "text-[var(--gold)]"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                  {currentPath === link.to && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[var(--gold)]" />
                  )}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 text-[0.82rem] font-medium tracking-wide text-foreground/80 transition-colors duration-300 hover:text-[var(--gold)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <CTAAnchor
                href="/contact"
                className="hidden md:inline-flex !bg-[var(--gold)] !px-6 !py-3 !text-[0.7rem] !font-bold !tracking-[0.08em]"
                id="header-contact-btn"
              >
                CONTACT US
              </CTAAnchor>
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-foreground/80 transition-all hover:border-[var(--gold)]/30 hover:text-[var(--gold)]"
                aria-label="Open menu"
                id="mobile-menu-toggle"
              >
                <Menu size={20} />
              </button>
            </div>
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
