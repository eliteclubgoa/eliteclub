import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconPng from "../assets/favicon.png";
import logoImg from "../assets/logo.webp";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppIcon } from "../components/site/WhatsAppIcon";
import { site } from "../lib/site";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-[calc(var(--header-height)+2rem)]">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold gold-text font-display">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[#0C0C0D] transition-colors hover:bg-[var(--gold-light)]"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[#0C0C0D] transition-colors hover:bg-[var(--gold-light)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      {
        title: "Elite Club Goa | Offshore Casino Experience in Goa",
      },
      {
        name: "description",
        content:
          "Experience The Elite Club Casino in Goa with offshore gaming, live entertainment, dining, premium packages, and booking support on the Mandovi River.",
      },
      { name: "author", content: "The Elite Club" },
      {
        name: "keywords",
        content:
          "the elite club casino, casino cruise goa, cruise casino in goa, casino ship in goa, offshore casino in goa, Casinos in Goa, Best casinos in Goa, The Elite Club Casino, casino the elite club",
      },
      {
        property: "og:title",
        content: "Elite Club Goa | Offshore Casino Experience in Goa",
      },
      {
        property: "og:description",
        content:
          "Discover The Elite Club's offshore casino experience on the Mandovi River in Panaji, Goa, with casino games, entertainment, dining, and premium packages.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Elite Club" },
      { property: "og:url", content: "https://www.eliteclubgoa.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Elite Club Goa | Offshore Casino Experience in Goa",
      },
      {
        name: "twitter:description",
        content:
          "Discover The Elite Club's offshore casino experience on the Mandovi River in Panaji, Goa, with casino games, entertainment, dining, and premium packages.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: faviconPng, type: "image/png", sizes: "32x32" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap",
        // @ts-expect-error - Valid HTML but missing from TanStack Router types
        media: "print",
        onLoad: "this.media='all'",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: "https://www.eliteclubgoa.com/",
          email: site.email,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "The Elite Club Jetty, River Mandovi",
            addressLocality: "Panaji",
            addressRegion: "Goa",
            postalCode: "403001",
            addressCountry: "IN",
          },
          sameAs: [site.instagram, site.facebook, site.youtube, site.twitter],
        }),
      },
      {
        type: "text/javascript",
        children: `
          // Fallback for fonts if JS is disabled
          document.documentElement.className += " js";
        `,
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-w-0 overflow-x-hidden pt-[var(--header-height)]">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-[#25D366]/40 transition-transform duration-300 hover:scale-110 sm:right-6"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      >
        <WhatsAppIcon size={30} />
      </a>
    </QueryClientProvider>
  );
}
