import casinoGold from "@/assets/casino/casino gold.webp";
import casinoPride from "@/assets/casino/casino pride.webp";
import casinoRivers from "@/assets/casino/casino rivers.webp";
import ocean7Casino from "@/assets/casino/Ocean7.webp";
import bigDaddy from "@/assets/casino/big-daddy.webp";
import strikeCasino from "@/assets/casino/strike.webp";
import dining1 from "@/assets/gallery/food_3.webp";
import entertainment1 from "@/assets/gallery/enter-stage.webp";
import gameRoulette from "@/assets/gallery/casino_6.webp";
import gameBaccarat from "@/assets/gallery/casino_7.webp";
import gameBlackjack from "@/assets/gallery/casino_9.webp";
import gameTeenPatti from "@/assets/gallery/casino_5.webp";
import gamePoker from "@/assets/gallery/food.webp";
import gameSlots from "@/assets/gallery/food_2.webp";
import gameAndarBahar from "@/assets/gallery/enter.webp";

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

export const casinos: Casino[] = [
  {
    slug: "casino-gold",
    name: "Casino Gold",
    location: "Candolim, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casino+Gold+Candolim+Goa",
    short:
      "A premium offshore casino in Goa offering a lively gaming experience with a variety of casino games, entertainment, dining, and nightlife.",
    full: "A premium offshore casino in Goa offering a lively gaming experience with a variety of casino games, entertainment, dining, and nightlife.",
    image: casinoGold,
    gallery: [casinoGold, casinoRivers, dining1],
  },
  {
    slug: "casino-pride",
    name: "Casino Pride",
    location: "Panaji, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casino+Pride+Panaji+Goa",
    short:
      "A popular offshore casino in Goa known for its vibrant atmosphere, wide range of gaming options, live entertainment, and dining facilities.",
    full: "A popular offshore casino in Goa known for its vibrant atmosphere, wide range of gaming options, live entertainment, and dining facilities.",
    image: casinoPride,
    gallery: [casinoPride, ocean7Casino, entertainment1],
  },
  {
    slug: "casino-rivers",
    name: "Casino Rivers",
    location: "Patto, Panaji, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casino+Rivers+Patto+Panaji+Goa",
    short:
      "A modern offshore casino in Goa offering an exciting gaming environment along with entertainment, dining, and a premium casino experience.",
    full: "A modern offshore casino in Goa offering an exciting gaming environment along with entertainment, dining, and a premium casino experience.",
    image: casinoRivers,
    gallery: [casinoRivers, casinoGold, entertainment1],
  },
  {
    slug: "ocean-7",
    name: "Ocean 7",
    location: "Candolim, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ocean+7+Candolim+Goa",
    short:
      "A well-known offshore casino in Goa that provides a stylish gaming experience with multiple casino games, entertainment, and onboard dining.",
    full: "A well-known offshore casino in Goa that provides a stylish gaming experience with multiple casino games, entertainment, and onboard dining.",
    image: ocean7Casino,
    gallery: [ocean7Casino, entertainment1, dining1],
  },
  {
    slug: "big-daddy",
    name: "Big Daddy Casino",
    location: "Patto, Panaji, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Big+Daddy+Casino+Patto+Panaji+Goa",
    short:
      "One of Goa’s prominent offshore casinos, offering a luxurious casino experience with various games, entertainment, dining, and nightlife.",
    full: "One of Goa’s prominent offshore casinos, offering a luxurious casino experience with various games, entertainment, dining, and nightlife.",
    image: bigDaddy,
    gallery: [bigDaddy, dining1, casinoGold],
  },
  {
    slug: "big-daddy-candolim",
    name: "Big Daddy Casino",
    location: "Candolim, Goa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Big+Daddy+Casino+Candolim+Goa",
    short:
      "A premium offshore casino in Candolim, Goa, offering an exciting gaming experience, live entertainment, dining, and nightlife.",
    full: "A premium offshore casino in Candolim, Goa, offering an exciting gaming experience, live entertainment, dining, and nightlife.",
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
