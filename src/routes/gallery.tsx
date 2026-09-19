import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { X } from "lucide-react";
import casino from "@/assets/gallery/casino.webp";
import casino10 from "@/assets/gallery/casino_10.webp";
import casino2 from "@/assets/gallery/casino_2.webp";
import casino4 from "@/assets/gallery/casino_4.webp";
import casino5Webp from "@/assets/gallery/casino_5.webp";
import casino6 from "@/assets/gallery/casino_6.webp";
import casino7 from "@/assets/gallery/casino_7.webp";
import casino9 from "@/assets/gallery/casino_9.webp";
import enterJpeg from "@/assets/gallery/enter.webp";
import enterPng from "@/assets/gallery/enter-stage.webp";
import food from "@/assets/gallery/food.webp";
import food2 from "@/assets/gallery/food_2.webp";
import food3 from "@/assets/gallery/food_3.webp";

const galleryItems = [
  { src: casino, alt: "Casino floor", category: "Games" },
  { src: casino10, alt: "Casino floor with warm lighting", category: "Games" },
  { src: casino2, alt: "Casino interior", category: "Games" },
  { src: casino4, alt: "Luxury casino lounge", category: "Games" },
  { src: casino5Webp, alt: "Premium casino atmosphere", category: "Games" },
  { src: casino6, alt: "Casino gaming floor", category: "Games" },
  { src: casino7, alt: "Casino gaming tables", category: "Games" },
  { src: casino9, alt: "Casino interior with premium styling", category: "Games" },
  { src: enterJpeg, alt: "Live entertainment", category: "Entertainment" },
  { src: enterPng, alt: "Entertainment atmosphere", category: "Entertainment" },
  { src: food, alt: "Premium dining experience", category: "Dining" },
  { src: food2, alt: "Luxury dining presentation", category: "Dining" },
  { src: food3, alt: "Gourmet food presentation", category: "Dining" },
] as const;

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery | The Elite Club Casino - Photo Gallery" },
      {
        name: "description",
        content:
          "Browse our gallery of stunning casino interiors, gaming floors, dining experiences, and entertainment at The Elite Club Casino in Goa.",
      },
    ],
  }),
});

export function GalleryPage() {
  const categories = [
    "All",
    ...new Set(galleryItems.map((g) => g.category)),
  ];
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setLightbox(null);
      setIsClosing(false);
    }, 300);
  };

  const filtered = galleryItems.filter((item) => {
    const matchesCategory = active === "All" || item.category === active;
    return matchesCategory;
  });

  return (
    <div className="overflow-x-hidden">
      <section className="page-section gradient-hero">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="page-title mb-6 font-bold font-display text-foreground">
              THE <span className="gold-text">EXPERIENCE</span>
            </h1>
          </Reveal>
          <Reveal className="mb-6 flex flex-wrap justify-center gap-3">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActive(cat);
                    setLightbox(null);
                  }}
                  className={`gallery-filter-btn ${active === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Gallery Grid */}
          {filtered.length > 0 ? (
            <RevealGroup
              key={active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((item, i) => (
                <RevealItem key={`${item.alt}-${i}`}>
                  <button
                    onClick={() => setLightbox(i)}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] group cursor-pointer w-full"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/80 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-0 opacity-100 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[0.65rem] text-[var(--gold)] tracking-widest uppercase">
                        {item.category}
                      </span>
                      <p className="text-sm text-foreground mt-1">{item.alt}</p>
                    </div>
                  </button>
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <div className="py-16 text-center text-muted-foreground">
              No gallery items match your search. Try another keyword.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors sm:top-6 sm:right-6 sm:w-10 sm:h-10"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className={`max-w-full max-h-[85vh] object-contain rounded-lg transition-all duration-300 ${
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
