import casinoGold from "@/assets/casino/casino gold.webp";
import casinoPride from "@/assets/casino/casino pride.png";
import casinoRivers from "@/assets/casino/casino rivers.webp";
import ocean7Casino from "@/assets/casino/Ocean7.webp";
import bigDaddy from "@/assets/casino/big-daddy.webp";
import strikeCasino from "@/assets/casino/strike.jpeg";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";
import gameRoulette from "@/assets/gallery/casino_6.jpeg";
import gameBaccarat from "@/assets/gallery/casino_7.webp";
import gameBlackjack from "@/assets/gallery/casino_9.webp";
import gameTeenPatti from "@/assets/gallery/casino_5.jpeg";
import gamePoker from "@/assets/gallery/food.webp";
import gameSlots from "@/assets/gallery/food_2.webp";
import gameAndarBahar from "@/assets/gallery/enter.jpeg";
import dining1 from "@/assets/gallery/food_3.webp";
import entertainment1 from "@/assets/gallery/enter.png";
import galleryAmericanRoulette from "@/assets/gallery/casino_6.jpeg";
import galleryCasino10 from "@/assets/gallery/casino_2.webp";
import galleryCasino2 from "@/assets/gallery/casino_2.webp";
import galleryCasino4 from "@/assets/gallery/casino_4.avif";
import galleryCasino5Jpeg from "@/assets/gallery/casino_5.jpeg";
import galleryCasino5Webp from "@/assets/gallery/casino_5.webp";
import galleryCasino6 from "@/assets/gallery/casino_6.jpeg";
import galleryCasino7 from "@/assets/gallery/casino_7.webp";
import galleryCasino9 from "@/assets/gallery/casino_9.webp";
import galleryEnterJpeg from "@/assets/gallery/enter.jpeg";
import galleryEnterPng from "@/assets/gallery/enter.png";
import galleryFood from "@/assets/gallery/food.webp";
import galleryFood2 from "@/assets/gallery/food_2.webp";
import galleryFood3 from "@/assets/gallery/food_3.webp";

export const images = {
  heroCasino: casinoPride,
  mandoviRoom: casinoGold,
  vessel: casinoPride,
  atrium: casinoRivers,
  terrace: ocean7Casino,
  salon: bigDaddy,
  strike: strikeCasino,
  galleryFloor: casinoGold,
  hotel1,
  hotel2,
  hotel3,
  dining1,
  entertainment1,
};

export type Casino = {
  slug: string;
  name: string;
  location: string;
  mapUrl: string;
  short: string;
  full: string;
  image: string;
  gallery: string[];
};

// Placeholder venues — names, locations and photography are all easy to swap.
export const casinos: Casino[] = [
  {
    slug: "casino-gold",
    name: "Casino Gold",
    location: "Candolim, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casino+Gold+Candolim+Goa",
    short: "A premium offshore casino in Goa offering a lively gaming experience with a variety of casino games, entertainment, dining, and nightlife.",
    full: "A premium offshore casino in Goa offering a lively gaming experience with a variety of casino games, entertainment, dining, and nightlife.",
    image: casinoGold,
    gallery: [casinoGold, casinoRivers, dining1],
  },
  {
    slug: "casino-pride",
    name: "Casino Pride",
    location: "Panaji, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casino+Pride+Panaji+Goa",
    short: "A popular offshore casino in Goa known for its vibrant atmosphere, wide range of gaming options, live entertainment, and dining facilities.",
    full: "A popular offshore casino in Goa known for its vibrant atmosphere, wide range of gaming options, live entertainment, and dining facilities.",
    image: casinoPride,
    gallery: [casinoPride, ocean7Casino, entertainment1],
  },
  {
    slug: "casino-rivers",
    name: "Casino Rivers",
    location: "Patto, Panaji, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casino+Rivers+Patto+Panaji+Goa",
    short: "A modern offshore casino in Goa offering an exciting gaming environment along with entertainment, dining, and a premium casino experience.",
    full: "A modern offshore casino in Goa offering an exciting gaming environment along with entertainment, dining, and a premium casino experience.",
    image: casinoRivers,
    gallery: [casinoRivers, casinoGold, entertainment1],
  },
  {
    slug: "ocean-7",
    name: "Ocean 7",
    location: "Candolim, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ocean+7+Candolim+Goa",
    short: "A well-known offshore casino in Goa that provides a stylish gaming experience with multiple casino games, entertainment, and onboard dining.",
    full: "A well-known offshore casino in Goa that provides a stylish gaming experience with multiple casino games, entertainment, and onboard dining.",
    image: ocean7Casino,
    gallery: [ocean7Casino, entertainment1, dining1],
  },
  {
    slug: "big-daddy",
    name: "Big Daddy Casino",
    location: "Patto, Panaji, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Big+Daddy+Casino+Patto+Panaji+Goa",
    short: "One of Goa’s prominent offshore casinos, offering a luxurious casino experience with various games, entertainment, dining, and nightlife.",
    full: "One of Goa’s prominent offshore casinos, offering a luxurious casino experience with various games, entertainment, dining, and nightlife.",
    image: bigDaddy,
    gallery: [bigDaddy, dining1, casinoGold],
  },
  {
    slug: "strike",
    name: "Strike",
    location: "Bambolim, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Block+No.+4,+North+Wing,+Grand+Hyatt+Goa,+P.O.+Goa+University,+Bambolim,+Goa+403206,+India",
    short: "A premium casino destination at Grand Hyatt Goa with an elevated gaming experience, luxury ambience, and a memorable night out in Bambolim.",
    full: "A premium casino destination at Grand Hyatt Goa with an elevated gaming experience, luxury ambience, and a memorable night out in Bambolim.",
    image: strikeCasino,
    gallery: [strikeCasino, casinoGold, entertainment1],
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
  { src: galleryAmericanRoulette, alt: "Roulette wheel mid-spin under low light", category: "Games" },
  { src: galleryCasino10, alt: "Casino floor under warm gold lights", category: "Games" },
  { src: galleryCasino4, alt: "Luxury casino lounge and gaming ambience", category: "Games" },
  { src: galleryCasino5Jpeg, alt: "Premium casino table setting with a rich atmosphere", category: "Games" },
  { src: galleryEnterJpeg, alt: "Live entertainment and stage ambience", category: "Entertainment" },
  { src: galleryEnterPng, alt: "Nightlife atmosphere with a vibrant entertainment mood", category: "Entertainment" },
  { src: galleryFood, alt: "Plated dining experience with premium presentation", category: "Dining" },
  { src: galleryFood2, alt: "Luxury dining and gourmet table styling", category: "Dining" },
  { src: galleryFood3, alt: "Premium food presentation in a stylish setting", category: "Dining" },
  { src: galleryCasino2, alt: "Casino interior with glowing ambiance and premium styling", category: "Games" },
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
    image: casinoRivers,
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
    image: casinoGold,
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
    image: ocean7Casino,
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
    image: casinoPride,
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
    image: bigDaddy,
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
    image: casinoGold,
  },
];
