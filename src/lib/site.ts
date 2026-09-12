// Placeholder brand details — replace with the real ones when available.
export const site = {
  name: "The Elite Club",
  tagline: "Where luxury, gaming, and unforgettable moments meet.",
  phone: "+91 90000 00000", // placeholder
  phoneHref: "tel:+919000000000",
  whatsapp: "919000000000", // placeholder
  email: "concierge@theeliteclub.example",
  address: "Elite House, Mandovi Riverfront, Panaji, Goa 403001", // placeholder
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  mapEmbed:
    "https://www.google.com/maps?q=Panaji,+Goa&hl=en&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/casino", label: "Casino" },
  { to: "/games", label: "Games" },
  { to: "/gallery", label: "Gallery" },
  { to: "/hotel", label: "Hotel" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const packages = [
  {
    name: "Silver",
    price: "₹3,000",
    featured: false,
    benefits: ["Buffet dining", "OTP 500 gaming credit", "Club floor access"],
  },
  {
    name: "Golden",
    price: "₹3,500",
    featured: false,
    benefits: [
      "Buffet dining",
      "5 house-brand beverage coupons",
      "OTP 500 gaming credit",
    ],
  },
  {
    name: "Platinum",
    price: "₹4,000",
    featured: true,
    benefits: [
      "Buffet dining",
      "5 premium-brand beverage coupons",
      "OTP 1,000 gaming credit",
      "Priority table seating",
    ],
  },
  {
    name: "Platinum Plus",
    price: "₹5,000",
    featured: false,
    benefits: [
      "Buffet dining",
      "5 platinum-brand beverage coupons",
      "OTP 1,500 gaming credit",
      "Reserved lounge seating",
    ],
  },
  {
    name: "Elite Circle",
    price: "₹6,000",
    featured: false,
    benefits: [
      "Buffet dining",
      "OTP 6,500 gaming credit",
      "Private host on arrival",
    ],
  },
  {
    name: "Junior Guest",
    price: "₹1,500",
    featured: false,
    benefits: ["Buffet dining", "Ages 4 to 17", "Supervised play lounge"],
  },
] as const;

export const stats = [
  { value: 6, suffix: "", label: "Signature destinations" },
  { value: 500, suffix: "+", label: "Members in the circle" },
  { value: 24, suffix: "/7", label: "Concierge service" },
  { value: 18, suffix: "", label: "Years of hospitality" },
] as const;
