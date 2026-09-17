import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import casino from "@/assets/gallery/casino.jpeg";
import casino10 from "@/assets/gallery/casino_10.jpeg";
import casino2 from "@/assets/gallery/casino_2.webp";
import casino4 from "@/assets/gallery/casino_4.avif";
import casino5Jpeg from "@/assets/gallery/casino_5.jpeg";
import casino5Webp from "@/assets/gallery/casino_5.webp";
import casino6 from "@/assets/gallery/casino_6.jpeg";
import casino7 from "@/assets/gallery/casino_7.webp";
import casino9 from "@/assets/gallery/casino_9.webp";
import enterJpeg from "@/assets/gallery/enter.jpeg";
import enterPng from "@/assets/gallery/enter.png";
import food from "@/assets/gallery/food.webp";
import food2 from "@/assets/gallery/food_2.webp";
import food3 from "@/assets/gallery/food_3.webp";

const galleryItems = [
  { src: casino, alt: "Casino floor", category: "Games" },
  { src: casino10, alt: "Casino floor with warm lighting", category: "Games" },
  { src: casino2, alt: "Casino interior", category: "Games" },
  { src: casino4, alt: "Luxury casino lounge", category: "Games" },
  { src: casino5Jpeg, alt: "Casino table setting", category: "Games" },
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

  const filtered = galleryItems.filter((item) => {
    const matchesCategory = active === "All" || item.category === active;
    return matchesCategory;
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-8 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4">
              Our <span className="gold-text">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A visual journey through our casino floors, dining spaces,
              entertainment, and special events.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + Gallery Grid */}
      <section className="section-py">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <Reveal className="flex flex-wrap gap-3 mb-12 justify-center">
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
