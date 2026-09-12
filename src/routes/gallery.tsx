import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { galleryItems } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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

function GalleryPage() {
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
      <section className="gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-medium text-[var(--gold)] tracking-wider uppercase">
                Photo Gallery
              </span>
            </div>
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
