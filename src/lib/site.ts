// The Elite Club Casino — real brand details
export const site = {
  name: "The Elite Club Casino",
  tagline: "Goa's Largest & Most Iconic Offshore Casino Experience",
  description:
    "Sail into refined luxury on the Mandovi River and discover why The Elite Club Casino is among the best casinos in Goa, where premium gaming, fine dining, and exceptional hospitality come together effortlessly.",
  phone: "+91 81608 08737",
  phoneHref: "https://wa.me/918160808737",
  whatsapp: "918160808737",
  email: "info@theeliteclub.in",
  address:
    "The Elite Club Jetty, River Mandovi, Near District And Sessions Court, Panaji, Goa 403001",
  addressShort: "The Elite Club Jetty, River Mandovi, Panaji, Goa 403001",
  bookingUrl: "https://bookings.majesticpride.in/app/booking",
  agentPortalUrl: "https://agentportal.majesticpride.in/agent",
  hotelUrl: "https://www.neomajestic.com/",
  noticeUrl: "https://mpnotice.majesticpride.in/notice.pdf",
  packagesApi: "https://bookings.majesticpride.in/api/v1/MPRIDE/packages",
  instagram: "https://www.instagram.com/majesticpridegroup/",
  facebook: "https://www.facebook.com/Majesticpridegroup/",
  youtube: "https://www.youtube.com/channel/UCA-uRWcgPS2HkLokj_A9vng",
  twitter:
    "https://twitter.com/majestic_pride?t=e7FixMK2QfRWf-N9yxjvZQ&s=09",
  mapEmbed:
    "https://maps.google.com/maps?q=The+Elite+Club+Jetty%2C+River+Mandovi%2C+Near+District+And+Sessions+Court%2C+Panaji%2C+Goa+403001&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/casino", label: "Casino" },
  { to: "/games", label: "Games" },
  { to: "/plans", label: "Our Plans" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const externalLinks: Array<{
  href: string;
  label: string;
  target?: string;
}> = [];

export const footerUseful = [
  { to: "/", label: "Home Page" },
  { to: "/casino", label: "Casino" },
  { to: "/games", label: "Games" },
  { to: "/plans", label: "Our Plans" },
  { to: "/gallery", label: "Gallery" },
] as const;

export const footerLegal = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/community-guidelines", label: "Community Guidelines" },
] as const;

export const stats = [
  { value: 100, suffix: "+", label: "Casino games" },
  { value: 3, suffix: "", label: "Decks of gaming" },
  { value: 24, suffix: "/7", label: "Open for guests" },
  { value: 10, suffix: "+", label: "Years of excellence" },
] as const;
