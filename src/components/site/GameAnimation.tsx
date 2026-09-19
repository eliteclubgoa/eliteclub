import type { CSSProperties, ReactNode } from "react";
import "../../game-animations.css";

/* ------------------------------------------------------------------
   Realistic casino card / chip / wheel primitives.
   Every scene is drawn once and scales through container-query
   units (cqw/cqh) — the same markup fills a whole card on the
   games page and the small badge on the homepage cards.
------------------------------------------------------------------- */

type Vars = CSSProperties & Record<string, string | number>;

const cyc = (v: string) => ({ "--cyc": v }) as Vars;

function PlayingCard({
  rank,
  suit,
  className = "",
  vars,
}: {
  rank: string;
  suit: string;
  className?: string;
  vars?: Vars;
}) {
  const red = suit === "♥" || suit === "♦";
  return (
    <div className={`ga-card ${className}`} style={vars}>
      <div className="ga-card-inner">
        <div className={`ga-card-face${red ? " is-red" : ""}`}>
          <span className="ga-pip ga-pip-tl">
            {rank}
            <i>{suit}</i>
          </span>
          <span className="ga-center-suit">{suit}</span>
          <span className="ga-pip ga-pip-br">
            {rank}
            <i>{suit}</i>
          </span>
        </div>
        <div className="ga-card-back">
          <span>♛</span>
        </div>
      </div>
    </div>
  );
}

function Chip({
  className = "",
  style,
}: {
  className?: string;
  style?: Vars;
}) {
  return <span className={`ga-chip ${className}`} style={style} />;
}

/* -------------------- American Roulette -------------------- */

// Real American wheel order — 38 pockets: 0, 00 and 1–36
const AMERICAN_WHEEL = [
  "0", "28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22",
  "34", "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29",
  "12", "8", "19", "31", "18", "6", "21", "33", "16", "4", "23", "35",
  "14", "2",
];

const RED_NUMBERS = new Set([
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]);

const POCKET_SEGMENT = 360 / AMERICAN_WHEEL.length;

function pocketGradient() {
  const stops = AMERICAN_WHEEL.map((n, i) => {
    const color =
      n === "0" || n === "00"
        ? "#0a6b3c"
        : RED_NUMBERS.has(Number(n))
          ? "#9c2727"
          : "#15100a";
    const from = (i * POCKET_SEGMENT).toFixed(2);
    const to = ((i + 1) * POCKET_SEGMENT).toFixed(2);
    return `${color} ${from}deg ${to}deg`;
  }).join(", ");
  return `conic-gradient(${stops})`;
}

function RouletteScene() {
  return (
    <div className="ga-stage" style={cyc("7s")}>
      <div className="rl-wheel">
        <div className="rl-inner">
          <div className="rl-ring">
            <div
              className="rl-pockets"
              style={{
                background: `${pocketGradient()}, repeating-conic-gradient(rgba(240, 205, 105, 0.9) 0 0.4deg, transparent 0.4deg ${POCKET_SEGMENT}deg)`,
              }}
            />
            {AMERICAN_WHEEL.map((n, i) => (
              <span
                key={n}
                className={`rl-num${n === "0" || n === "00" ? " zero" : ""}`}
                style={{
                  transform: `rotate(${i * POCKET_SEGMENT}deg) translateY(-22cqh)`,
                }}
              >
                {n}
              </span>
            ))}
          </div>
          <div className="rl-cone" />
          <div className="rl-hub" />
          <div className="rl-ball-orbit">
            <span className="rl-ball" />
          </div>
        </div>
      </div>
      <div className="rl-chips">
        <Chip className="c-red" style={{ left: "12%", bottom: "6%" }} />
        <Chip className="c-blue" style={{ left: "22%", bottom: "10%" }} />
        <Chip className="c-gold" style={{ left: "32%", bottom: "4%" }} />
        <Chip
          className="c-white"
          style={{ left: "70%", bottom: "8%", ["--d" as string]: "1.1s" }}
        />
      </div>
    </div>
  );
}

/* -------------------- Baccarat -------------------- */

function BaccaratScene() {
  return (
    <div className="ga-stage" style={cyc("6.5s")}>
      <div className="ga-shoe" />
      <span className="ga-spot-label" style={{ left: "24%", top: "30%" }}>
        PLAYER
      </span>
      <span className="ga-spot-label" style={{ left: "76%", top: "30%" }}>
        BANKER
      </span>

      <PlayingCard
        rank="3"
        suit="♠"
        className="bc-p1"
        vars={{
          ["--deal" as string]: "0s",
          ["--flip" as string]: "0.5s",
          ["--dx0" as string]: "260%",
          ["--dy0" as string]: "-160%",
          ["--rot" as string]: "-7deg",
        }}
      />
      <PlayingCard
        rank="6"
        suit="♥"
        className="bc-p2"
        vars={{
          ["--deal" as string]: "0.45s",
          ["--flip" as string]: "0.95s",
          ["--dx0" as string]: "220%",
          ["--dy0" as string]: "-190%",
          ["--rot" as string]: "6deg",
        }}
      />
      <PlayingCard
        rank="K"
        suit="♦"
        className="bc-b1"
        vars={{
          ["--deal" as string]: "0.9s",
          ["--flip" as string]: "1.4s",
          ["--dx0" as string]: "-240%",
          ["--dy0" as string]: "-160%",
          ["--rot" as string]: "-6deg",
        }}
      />
      <PlayingCard
        rank="8"
        suit="♣"
        className="bc-b2"
        vars={{
          ["--deal" as string]: "1.35s",
          ["--flip" as string]: "1.85s",
          ["--dx0" as string]: "-200%",
          ["--dy0" as string]: "-190%",
          ["--rot" as string]: "7deg",
        }}
      />

      <span className="ga-win-label" style={{ ["--d" as string]: "2.6s", left: "24%", top: "14%" }}>
        PLAYER 9
      </span>
    </div>
  );
}

/* -------------------- Blackjack -------------------- */

function BlackjackScene() {
  return (
    <div className="ga-stage" style={cyc("6s")}>
      <div className="ga-shoe" style={{ left: "72%", top: "2%" }} />
      <div className="bj-chips">
        <Chip className="c-gold" style={{ ["--d" as string]: "1.9s" }} />
        <Chip className="c-red" style={{ ["--d" as string]: "2.05s" }} />
        <Chip className="c-blue" style={{ ["--d" as string]: "2.2s" }} />
      </div>

      <PlayingCard
        rank="A"
        suit="♠"
        className="bj-c1"
        vars={{
          ["--deal" as string]: "0s",
          ["--flip" as string]: "0.55s",
          ["--dx0" as string]: "190%",
          ["--dy0" as string]: "-140%",
          ["--rot" as string]: "-11deg",
        }}
      />
      <PlayingCard
        rank="K"
        suit="♥"
        className="bj-c2"
        vars={{
          ["--deal" as string]: "0.4s",
          ["--flip" as string]: "0.95s",
          ["--dx0" as string]: "150%",
          ["--dy0" as string]: "-170%",
          ["--rot" as string]: "9deg",
        }}
      />

      <div className="ga-badge" style={{ ["--d" as string]: "1.55s" }}>
        <span className="ga-badge-rays" />
        <span className="ga-badge-text">
          BLACKJACK <b>21</b>
        </span>
      </div>
    </div>
  );
}

/* -------------------- Teen Patti (Trail of Aces) -------------------- */

function TeenPattiScene() {
  return (
    <div className="ga-stage" style={cyc("5.5s")}>
      <PlayingCard
        rank="A"
        suit="♠"
        className="tp-c1"
        vars={{
          ["--deal" as string]: "0s",
          ["--flip" as string]: "1s",
          ["--dx0" as string]: "-40%",
          ["--dy0" as string]: "220%",
          ["--rot" as string]: "-13deg",
        }}
      />
      <PlayingCard
        rank="A"
        suit="♥"
        className="tp-c2"
        vars={{
          ["--deal" as string]: "0.2s",
          ["--flip" as string]: "1.25s",
          ["--dx0" as string]: "0%",
          ["--dy0" as string]: "240%",
          ["--rot" as string]: "0deg",
        }}
      />
      <PlayingCard
        rank="A"
        suit="♦"
        className="tp-c3"
        vars={{
          ["--deal" as string]: "0.4s",
          ["--flip" as string]: "1.5s",
          ["--dx0" as string]: "40%",
          ["--dy0" as string]: "220%",
          ["--rot" as string]: "13deg",
        }}
      />
      <span className="ga-win-label" style={{ ["--d" as string]: "2.2s", left: "50%", top: "12%" }}>
        TRAIL
      </span>
    </div>
  );
}

/* -------------------- Poker (Royal Flush) -------------------- */

function PokerScene() {
  const cards: Array<[string, string, string]> = [
    ["A", "♦", "8%"],
    ["K", "♦", "24%"],
    ["Q", "♦", "40%"],
    ["J", "♦", "56%"],
    ["10", "♦", "72%"],
  ];
  const deals = ["0.8s", "1s", "1.2s", "1.8s", "2.4s"];
  const flips = ["1s", "1.2s", "1.4s", "2s", "2.6s"];
  const rots = ["-8deg", "-4deg", "0deg", "4deg", "8deg"];

  return (
    <div className="ga-stage" style={cyc("7.5s")}>
      {cards.map(([rank, suit, left], i) => (
        <PlayingCard
          key={rank}
          rank={rank}
          suit={suit}
          className="pk-card"
          vars={{
            left,
            ["--deal" as string]: deals[i],
            ["--flip" as string]: flips[i],
            ["--dx0" as string]: "0%",
            ["--dy0" as string]: "-260%",
            ["--rot" as string]: rots[i],
          }}
        />
      ))}

      <div className="pk-pot">
        <Chip className="c-gold" style={{ ["--d" as string]: "3s" }} />
        <Chip className="c-red" style={{ ["--d" as string]: "3.15s" }} />
        <Chip className="c-white" style={{ ["--d" as string]: "3.3s" }} />
      </div>

      <span className="ga-win-label" style={{ ["--d" as string]: "3.8s", left: "50%", top: "8%" }}>
        ROYAL FLUSH
      </span>
    </div>
  );
}

/* -------------------- Andar Bahar -------------------- */

function AndarBaharScene() {
  return (
    <div className="ga-stage" style={cyc("7s")}>
      <PlayingCard
        rank="9"
        suit="♦"
        className="ab-joker"
        vars={{
          ["--deal" as string]: "0.1s",
          ["--flip" as string]: "0.45s",
          ["--dx0" as string]: "0%",
          ["--dy0" as string]: "-200%",
          ["--rot" as string]: "0deg",
        }}
      />
      <span className="ga-spot-label ab-andar" style={{ left: "20%", top: "26%" }}>
        ANDAR
      </span>
      <span className="ga-spot-label ab-bahar" style={{ left: "80%", top: "26%" }}>
        BAHAR
      </span>

      <PlayingCard
        rank="K"
        suit="♠"
        className="ab-card ab-l1"
        vars={{
          ["--deal" as string]: "1s",
          ["--flip" as string]: "1.35s",
          ["--dx0" as string]: "300%",
          ["--dy0" as string]: "-120%",
          ["--rot" as string]: "-6deg",
        }}
      />
      <PlayingCard
        rank="3"
        suit="♥"
        className="ab-card ab-r1"
        vars={{
          ["--deal" as string]: "1.35s",
          ["--flip" as string]: "1.7s",
          ["--dx0" as string]: "-300%",
          ["--dy0" as string]: "-120%",
          ["--rot" as string]: "6deg",
        }}
      />
      <PlayingCard
        rank="5"
        suit="♦"
        className="ab-card ab-l2"
        vars={{
          ["--deal" as string]: "1.7s",
          ["--flip" as string]: "2.05s",
          ["--dx0" as string]: "260%",
          ["--dy0" as string]: "-100%",
          ["--rot" as string]: "-4deg",
        }}
      />
      <PlayingCard
        rank="J"
        suit="♠"
        className="ab-card ab-r2"
        vars={{
          ["--deal" as string]: "2.05s",
          ["--flip" as string]: "2.4s",
          ["--dx0" as string]: "-260%",
          ["--dy0" as string]: "-100%",
          ["--rot" as string]: "4deg",
        }}
      />
      <PlayingCard
        rank="9"
        suit="♠"
        className="ab-card ab-r3 ab-winner"
        vars={{
          ["--deal" as string]: "2.4s",
          ["--flip" as string]: "2.75s",
          ["--dx0" as string]: "-280%",
          ["--dy0" as string]: "-60%",
          ["--rot" as string]: "8deg",
        }}
      />
      <span className="ga-win-label" style={{ ["--d" as string]: "3.3s", left: "80%", top: "10%" }}>
        BAHAR
      </span>
    </div>
  );
}

/* -------------------- Electronic Gaming / Slots -------------------- */

const SL_REELS: string[][] = [
  ["7", "♦", "★", "BAR", "♠", "♣"],
  ["7", "♠", "BAR", "♦", "♣", "★"],
  ["7", "BAR", "♣", "★", "♠", "♦"],
];

const SL_CLASS: Record<string, string> = {
  "7": "sl-seven",
  "♦": "sl-diamond",
  "♥": "sl-heart",
  "★": "sl-star",
  "♠": "sl-spade",
  "♣": "sl-club",
};

function SlotSymbol({ s }: { s: string }) {
  if (s === "BAR")
    return (
      <span className="sl-cell">
        <b className="sl-bar">BAR</b>
      </span>
    );
  return <span className={`sl-cell ${SL_CLASS[s] ?? ""}`}>{s}</span>;
}

function SlotsScene() {
  return (
    <div className="ga-stage ga-stage-slots" style={cyc("5.6s")}>
      <div className="sl-lever">
        <span className="sl-lever-knob" />
      </div>
      <div className="sl-cabinet">
        <div className="sl-marquee">
          <span className="sl-title">JACKPOT</span>
          <div className="sl-bulbs">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} style={{ ["--d" as string]: `${i * 0.16}s` }} />
            ))}
          </div>
        </div>
        <div className="sl-screen">
          {SL_REELS.map((reel, r) => (
            <div className="sl-reel" key={r}>
              <div className={`sl-strip sl-spin-${r + 1}`}>
                {[...reel, ...reel, ...reel, ...reel].map((s, i) => (
                  <SlotSymbol key={i} s={s} />
                ))}
              </div>
            </div>
          ))}
          <span className="sl-payline" />
          <span className="sl-win" />
        </div>
        <div className="sl-deck">
          <span className="sl-tray" />
        </div>
      </div>
    </div>
  );
}

/* -------------------- Registry -------------------- */

const GAME_SCENES: Record<string, () => ReactNode> = {
  "American Roulette": RouletteScene,
  Baccarat: BaccaratScene,
  Blackjack: BlackjackScene,
  "Flush (Teen Patti)": TeenPattiScene,
  Poker: PokerScene,
  "Andar Bahar": AndarBaharScene,
  "Electronic Gaming": SlotsScene,
};

const FELT: Record<string, string> = {
  "American Roulette": "green",
  Baccarat: "green",
  Blackjack: "green",
  "Flush (Teen Patti)": "green",
  Poker: "green",
  "Andar Bahar": "green",
  "Electronic Gaming": "purple",
};

export function GameAnimation({
  name,
  full = false,
}: {
  name: string;
  full?: boolean;
}) {
  const Scene = GAME_SCENES[name];
  if (!Scene) return null;

  if (full) {
    return (
      <div className="ga-fill" data-felt={FELT[name]} aria-hidden="true">
        <div className="ga-felt-texture" />
        <div className="ga-light-sweep" />
        <span className="ga-amb-suit" style={{ top: "6%", left: "8%" }}>♠</span>
        <span className="ga-amb-suit is-red" style={{ top: "10%", right: "10%" }}>♥</span>
        <span className="ga-amb-suit is-red" style={{ bottom: "26%", left: "12%" }}>♦</span>
        <span className="ga-amb-suit" style={{ bottom: "30%", right: "8%" }}>♣</span>
        <Scene />
        <div className="ga-vignette" />
      </div>
    );
  }

  return (
    <div className="ga-scene" aria-hidden="true">
      <Scene />
    </div>
  );
}
