import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { navLinks, externalLinks } from "@/lib/site";
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

  useEffect(() => {
    const el = document.getElementById("site-header");
    if (!el) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${el.offsetHeight}px`,
      );
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(el);
    window.addEventListener("resize", syncHeaderHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/60 transition-[background-color,box-shadow] duration-500 ${
          scrolled
            ? "bg-[#0C0C0D]/95 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.5)]"
            : "bg-[#0C0C0D]/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[5.25rem] items-center justify-between gap-4 sm:h-[5.75rem] lg:h-[6.5rem]">
            <Link
              to="/"
              className="group flex min-w-0 shrink items-center gap-2 sm:gap-3 md:gap-5"
              id="header-logo"
            >
              <div className="relative z-10 flex-shrink-0">
                <img
                  src={logoImg}
                  alt="The Elite Club Logo"
                  className="relative h-16 w-[4.5rem] rounded-[16px] bg-transparent object-contain ring-1 ring-inset ring-[var(--gold)]/40 shadow-[inset_0_0_7px_rgba(255,215,0,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem] sm:w-[5.25rem] lg:h-[5.25rem] lg:w-[6.25rem]"
                />
              </div>

            </Link>

            <nav className="hidden xl:flex items-center gap-3 2xl:gap-5" id="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2.5 text-[0.95rem] font-medium tracking-wide transition-colors duration-300 hover:text-[var(--gold)] ${
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
                  className="px-3 py-2.5 text-[0.95rem] font-medium tracking-wide text-foreground/80 transition-colors duration-300 hover:text-[var(--gold)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <CTAAnchor
                href="/contact"
                className="hidden md:inline-flex !bg-[var(--gold)] !px-6 !py-3 !text-[0.7rem] !font-bold !tracking-[0.08em] xl:!px-7 xl:!py-3.5 xl:!text-[0.82rem]"
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
