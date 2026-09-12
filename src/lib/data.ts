import heroCasino from "@/assets/hero-casino.jpg";
import casino1 from "@/assets/casino-1.jpg";
import casino2 from "@/assets/casino-2.jpg";
import casino3 from "@/assets/casino-3.jpg";
import casino4 from "@/assets/casino-4.jpg";
import casino5 from "@/assets/casino-5.jpg";
import casino6 from "@/assets/casino-6.jpg";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";
import gameRoulette from "@/assets/game-roulette.jpg";
import gameBaccarat from "@/assets/game-baccarat.jpg";
import gameBlackjack from "@/assets/game-blackjack.jpg";
import gameTeenPatti from "@/assets/game-teenpatti.jpg";
import gamePoker from "@/assets/game-poker.jpg";
import gameSlots from "@/assets/game-slots.jpg";
import gameAndarBahar from "@/assets/game-andarbahar.jpg";
import dining1 from "@/assets/dining-1.jpg";
import entertainment1 from "@/assets/entertainment-1.jpg";
import events1 from "@/assets/events-1.jpg";

export const images = {
  heroCasino,
  casino1,
  casino2,
  casino3,
  casino4,
  casino5,
  casino6,
  hotel1,
  hotel2,
  hotel3,
  dining1,
  entertainment1,
  events1,
};

export type Casino = {
  slug: string;
  name: string;
  location: string;
  short: string;
  full: string;
  image: string;
  gallery: string[];
};

// Placeholder venues — names, locations and photography are all easy to swap.
export const casinos: Casino[] = [
  {
    slug: "the-mandovi-room",
    name: "The Mandovi Room",
    location: "Panaji Riverfront, Goa",
    short: "Our founding floor, where the river light meets black marble.",
    full: "The room that started the club. Eleven tables under hand-cut crystal, a marble bar poured in a single slab, and a service ratio no other floor in the city can match. Reserved seating is released to members first.",
    image: casino1,
    gallery: [casino1, casino3, dining1],
  },
  {
    slug: "the-vessel",
    name: "The Vessel",
    location: "Offshore, Mandovi River",
    short: "A private gaming deck that sails at dusk and returns after midnight.",
    full: "Three decks of quiet leather and brass, cast off nightly. Table games below, a cigar terrace above, and a chef's counter between. Capacity is deliberately small — sixty guests, never more.",
    image: casino2,
    gallery: [casino2, casino4, entertainment1],
  },
  {
    slug: "the-atrium",
    name: "The Atrium",
    location: "Dona Paula, Goa",
    short: "Our grandest arrival: a marble staircase and a chandelier of 4,000 drops.",
    full: "Built for occasion. The staircase is the club's signature photograph and the mezzanine holds four private salons, each bookable for an evening with its own dealer and host.",
    image: casino3,
    gallery: [casino3, casino1, events1],
  },
  {
    slug: "the-terrace",
    name: "The Terrace",
    location: "Rooftop, Miramar",
    short: "Open-air play above the city, from sundown until the last hand.",
    full: "Six tables under the sky with the skyline as the only decoration. A dedicated cocktail programme, a resident saxophonist on weekends, and heaters for the short winter.",
    image: casino4,
    gallery: [casino4, entertainment1, dining1],
  },
  {
    slug: "the-salon",
    name: "The Salon",
    location: "By invitation, Panaji",
    short: "One table. One dealer. Whoever you choose to bring.",
    full: "Our most private room, released by invitation only. A single baize table, drapes drawn, a host who never leaves the door. Stakes, hours and menu are set by the party.",
    image: casino5,
    gallery: [casino5, dining1, casino1],
  },
  {
    slug: "the-gallery-floor",
    name: "The Gallery Floor",
    location: "Vasco, Goa",
    short: "A mirrored deco promenade of slots and quick-play tables.",
    full: "Lighter in mood and faster in pace. Mirrored walls, gold hairline trim, a long promenade of machines, and a bar that stays open as long as the floor does.",
    image: casino6,
    gallery: [casino6, gameSlots, casino4],
  },
];

export type Game = {
  name: string;
  category: "Table Games" | "Card Games" | "Slots";
  tagline: string;
  image: string;
  rules: string[];
};

export const games: Game[] = [
  {
    name: "American Roulette",
    category: "Table Games",
    tagline: "Predict where the ball comes to rest.",
    image: gameRoulette,
    rules: [
      "Each guest plays with their own colour of chips.",
      "Place bets on a single number, a group, red or black, odd or even.",
      "The dealer spins; no bets once the call of 'no more bets'.",
      "Single numbers pay 35 to 1; even-money bets pay 1 to 1.",
    ],
  },
  {
    name: "Baccarat",
    category: "Card Games",
    tagline: "Banker or Player — closest to nine takes it.",
    image: gameBaccarat,
    rules: [
      "Played with eight decks; you bet Banker, Player or Tie.",
      "Tens and face cards count zero; only the last digit of a total counts.",
      "A third card is drawn automatically by fixed house rules.",
      "The hand nearest nine wins.",
    ],
  },
  {
    name: "Blackjack",
    category: "Card Games",
    tagline: "Reach twenty-one without going past it.",
    image: gameBlackjack,
    rules: [
      "Six to eight decks; face cards count ten, the Ace one or eleven.",
      "Hit for another card, stand to keep your total.",
      "Split pairs or double your bet on a promising hand.",
      "Beat the dealer without exceeding twenty-one.",
    ],
  },
  {
    name: "Flush (Teen Patti)",
    category: "Card Games",
    tagline: "Played against the table, not the house.",
    image: gameTeenPatti,
    rules: [
      "Three cards each, dealt face down after the boot is placed.",
      "Play blind or seen; stakes rise as the round continues.",
      "Trail beats pure sequence, which beats sequence, then colour.",
      "The last player standing, or the best hand at show, takes the pot.",
    ],
  },
  {
    name: "Poker",
    category: "Card Games",
    tagline: "Position, patience, and the courage to raise.",
    image: gamePoker,
    rules: [
      "Two hole cards each, five community cards dealt in three stages.",
      "Bet, call, raise or fold at every stage.",
      "Best five-card hand from any seven cards wins.",
      "Table stakes apply — only chips on the table are in play.",
    ],
  },
  {
    name: "Andar Bahar",
    category: "Table Games",
    tagline: "One card, two sides, a decision in seconds.",
    image: gameAndarBahar,
    rules: [
      "The dealer exposes the joker card face up.",
      "Back either Andar (inside) or Bahar (outside).",
      "Cards are dealt alternately to each side.",
      "The side that matches the joker's rank first wins.",
    ],
  },
  {
    name: "Electronic Gaming",
    category: "Slots",
    tagline: "A promenade of reels, from classic to jackpot.",
    image: gameSlots,
    rules: [
      "Insert your play card and set your stake per line.",
      "Choose the number of lines before you spin.",
      "Matching symbols on an active line pay per the machine's table.",
      "Jackpot machines are linked across the floor.",
    ],
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Games" | "Entertainment" | "Events" | "Dining";
};

export const galleryItems: GalleryItem[] = [
  { src: gameRoulette, alt: "Roulette wheel mid-spin under low light", category: "Games" },
  { src: gameBlackjack, alt: "Blackjack table with cards fanned out", category: "Games" },
  { src: gamePoker, alt: "Private poker room lit by a single lamp", category: "Games" },
  { src: gameTeenPatti, alt: "Three playing cards held above green baize", category: "Games" },
  { src: entertainment1, alt: "Saxophonist performing in a spotlight", category: "Entertainment" },
  { src: casino4, alt: "Rooftop lounge overlooking the city at night", category: "Entertainment" },
  { src: events1, alt: "Champagne tower at a black-tie celebration", category: "Events" },
  { src: casino3, alt: "Marble staircase beneath a crystal chandelier", category: "Events" },
  { src: dining1, alt: "Plated tasting course in a dark dining room", category: "Dining" },
  { src: casino1, alt: "Marble bar in a low-lit club salon", category: "Dining" },
  { src: casino6, alt: "Mirrored deco promenade of gaming machines", category: "Games" },
  { src: gameBaccarat, alt: "Baccarat table set with chips and champagne", category: "Games" },
];

export type Hotel = {
  id: string;
  name: string;
  location: string;
  stars: string;
  rating: number;
  pricePerNight: string;
  description: string;
  amenities: string[];
  image: string;
};

export const hotels: Hotel[] = [
  {
    id: "neo-majestic",
    name: "Neo Majestic Luxury Resort",
    location: "Porvorim, Panaji, Goa",
    stars: "5 Star Luxury",
    rating: 4.9,
    pricePerNight: "₹8,500",
    description:
      "Our premier partner hotel situated 5 minutes from the casino jetty. Features opulent suites, 3 specialty restaurants, a steam spa, and complimentary casino transfer.",
    amenities: ["Spa & Wellness", "Swimming Pool", "3 Restaurants", "Casino Transfer", "Free High-Speed Wi-Fi", "Valet Parking"],
    image: hotel1,
  },
  {
    id: "goa-marriott",
    name: "Goa Marriott Resort & Spa",
    location: "Miramar Beach, Panaji",
    stars: "5 Star Deluxe",
    rating: 4.8,
    pricePerNight: "₹14,000",
    description:
      "Sweeping views of the Arabian Sea and Mandovi River. Waterfront dining, a infinity pool, Quan Spa, and quick access to Panaji's nightlife.",
    amenities: ["Oceanfront Pool", "Quan Spa", "Bayview Dining", "Fitness Center", "Concierge Service"],
    image: hotel2,
  },
  {
    id: "vivanta-panaji",
    name: "Vivanta Goa, Panaji",
    location: "St. Inez, Panaji",
    stars: "5 Star",
    rating: 4.7,
    pricePerNight: "₹11,500",
    description:
      "Contemporary luxury in the heart of the capital city. Rooftop pool overlooking the Altinho hills, vibrant lounge bar, and 24-hour in-room dining.",
    amenities: ["Rooftop Pool", "Tease Bar", "24/7 Dining", "Express Check-in", "Executive Lounge"],
    image: hotel3,
  },
  {
    id: "grand-hyatt",
    name: "Grand Hyatt Goa",
    location: "Bambolim Bay",
    stars: "5 Star Luxury",
    rating: 4.9,
    pricePerNight: "₹18,000",
    description:
      "Set amidst 28 acres of tropical gardens overlooking Bambolim Bay. Indo-Portuguese architecture, Shamana Spa, and 7 dining venues.",
    amenities: ["Private Beach Access", "Indo-Portuguese Architecture", "Shamana Spa", "7 Restaurants", "Kids Club"],
    image: casino3,
  },
  {
    id: "taj-fort-aguada",
    name: "Taj Fort Aguada Resort",
    location: "Sinquerim Beach, Candolim",
    stars: "5 Star Heritage",
    rating: 4.9,
    pricePerNight: "₹22,000",
    description:
      "Goa's legendary sea-facing resort built into the ramparts of a 16th-century Portuguese fortress. Horizon pool and Jiva Spa.",
    amenities: ["Heritage Ramparts", "Jiva Spa", "Horizon Pool", "Water Sports", "Fine Dining"],
    image: casino1,
  },
  {
    id: "w-goa",
    name: "W Goa Resort",
    location: "Vagator Beach",
    stars: "5 Star Boutique",
    rating: 4.8,
    pricePerNight: "₹24,000",
    description:
      "Vibrant beachfront luxury where Portuguese heritage meets modern party vibe. Rock Pool cliffside bar and AWAY Spa.",
    amenities: ["Rock Pool Cliffside Bar", "AWAY Spa", "Sunset Deck", "Pet Friendly", "DJ Performances"],
    image: casino4,
  },
  {
    id: "alila-diwa",
    name: "Alila Diwa Goa",
    location: "Majorda Beach, South Goa",
    stars: "5 Star Sanctuary",
    rating: 4.8,
    pricePerNight: "₹15,000",
    description:
      "Serene sanctuary amidst lush paddy fields and Majorda beach. Double-height infinity pool, Spa Alila, and organic farm-to-table cuisine.",
    amenities: ["Paddy View Infinity Pool", "Spa Alila", "Spice Studio", "Cinema Theatre", "Beach Shuttle"],
    image: hotel1,
  },
  {
    id: "the-leela",
    name: "The Leela Goa",
    location: "Cavelossim Beach, South Goa",
    stars: "5 Star Deluxe",
    rating: 4.9,
    pricePerNight: "₹26,000",
    description:
      "75 acres of pristine lagoons, private beach, and a 12-hole golf course. Unrivaled royal Goan hospitality.",
    amenities: ["12-Hole Golf Course", "Private Lagoon & Beach", "Royal Villas", "Ayurvedic Spa", "Yacht Rentals"],
    image: hotel2,
  },
  {
    id: "st-regis",
    name: "The St. Regis Goa Resort",
    location: "Mobor Beach, Cavelossim",
    stars: "5 Star Ultra-Luxury",
    rating: 4.9,
    pricePerNight: "₹28,000",
    description:
      "Nestled between the Arabian Sea and Sal River. Signature St. Regis Butler service, executive golf green, and private cabanas.",
    amenities: ["24/7 Butler Service", "Sal River Cruise", "Private Cabanas", "Golf Green", "Senses Spa"],
    image: hotel3,
  },
  {
    id: "itc-grand",
    name: "ITC Grand Goa Resort & Spa",
    location: "Arossim Beach",
    stars: "5 Star Luxury",
    rating: 4.8,
    pricePerNight: "₹17,500",
    description:
      "Village-style resort featuring multi-level swimming pools, direct access to Arossim beach, and Kaya Kalp spa.",
    amenities: ["Multi-Level Pools", "Direct Beach Access", "Kaya Kalp Spa", "Kebab & Kurry", "Royal Suites"],
    image: casino2,
  },
  {
    id: "hilton-goa",
    name: "Hilton Goa Resort",
    location: "Saipem Hills, Candolim",
    stars: "5 Star Hilltop",
    rating: 4.7,
    pricePerNight: "₹12,000",
    description:
      "Perched on the scenic Saipem Hills overlooking Nerul River. 4 outdoor pools, private balcony plunge pools, and Mediterranean lounge.",
    amenities: ["Hilltop Views", "4 Outdoor Pools", "Plunge Pool Suites", "Kid's Play Zone", "24hr Fitness"],
    image: casino5,
  },
  {
    id: "novotel-candolim",
    name: "Novotel Goa Resort & Spa",
    location: "Candolim, North Goa",
    stars: "5 Star Premium",
    rating: 4.6,
    pricePerNight: "₹9,500",
    description:
      "Family-friendly resort near Candolim beach with vitality pool, Warren Tricomi Spa, and swim-up pool bar.",
    amenities: ["Swim-Up Pool Bar", "Vitality Pool", "Warren Tricomi Spa", "Chy Restaurant", "Free Beach Shuttle"],
    image: casino6,
  },
];
