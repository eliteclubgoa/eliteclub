# The Elite Club — Casino & Lifestyle Website

A premium black-and-white members' club site with muted gold accents, inspired in structure by majesticpride.in (packages, game showcase, ticket/enquiry CTAs) but styled to the cinematic luxury brief.

## Look and feel

- Near-black backgrounds, greyscale surfaces with hairline borders, champagne gold (#C9A85C) reserved for buttons, active states and dividers. A single theme variable lets us switch to strict monochrome later.
- Display serif headings with wide-tracked uppercase eyebrow labels; clean sans body text.
- Full-bleed dark imagery with gradient overlays, generous space, optional film grain, custom scrollbar.
- Motion: fade-up reveals on scroll, slow hero zoom, hover lift and image zoom on cards, animated stat counters, slow marquee strip, page fade transitions. All respect reduced-motion settings.

## Pages

1. **Home** — full-screen hero with headline and two CTAs; scrolling marquee; about + animated stats; video showcase with thumbnail switcher; six membership/package tiers (Silver through Kids, priced like the reference) with a highlighted featured tier; membership enquiry form; "Let's Plan Your Events" section with event enquiry form and WhatsApp button.
2. **Casino** — page hero, then six casino cards in a premium VIP-pass frame; "View Details" opens a modal with full description, location and mini gallery.
3. **Games** — hero, filter chips (Table / Card / Slots), game card grid (Roulette, Baccarat, Blackjack, Teen Patti/Flush, Poker, Slots, Andar Bahar), each with a "View Rules" modal of short bullet rules.
4. **Gallery** — category tabs (Games, Entertainment, Events, Dining), filtered masonry grid, full-screen lightbox with next/prev and lazy blur-up loading.
5. **Hotel** — alternating editorial image/text feature blocks per hotel, amenity icons, "View Photos" lightbox and enquiry CTA.
6. **Contact** — clickable contact details with animated icons, contact form, WhatsApp quick button, dark-styled embedded map, social links.

## Shared pieces

Sticky navbar (transparent over hero, blurred black on scroll, active-link indicator, full-screen mobile drawer), footer with newsletter and socials, section heading, premium card, button variants, dark form inputs with floating labels, modal/lightbox, back-to-top button, sticky mobile "Enquire on WhatsApp" bar.

## Forms

All three forms validate inline, show a loading then animated success state, and route the enquiry to WhatsApp with a prefilled message (plus a mailto fallback). Nothing is stored — no backend needed for now.

## Content and images

Elegant placeholder copy in five-star hospitality tone, plus a placeholder phone number, address and social links clearly marked so you can swap in the real ones. All photography is AI-generated dark cinematic imagery (casino floors, gaming tables, hotel suites, dining, events) saved into the project and easy to replace.

## Technical notes

- TanStack Router file routes (`/`, `/casino`, `/games`, `/gallery`, `/hotel`, `/contact`), each with its own SEO title, description and OG/Twitter tags; single H1 per page; alt text and lazy loading throughout.
- Design tokens (colors, radii, fonts, grain) defined in `src/styles.css`; no hardcoded color utilities in components.
- Framer Motion (`motion`) for reveals, transitions and marquee; fonts loaded via a `<link>` in the root route.
- Mobile-first: single column under 640px, 2 columns to 1024px, 3–4 above; swipeable carousels where grids get cramped; 44px minimum tap targets.
