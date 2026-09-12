import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { hotels, type Hotel } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { CTAAnchor } from "@/components/site/CTAButton";
import { Sparkles, Star, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/hotels")({
  component: HotelsPage,
  head: () => ({
    meta: [
      { title: "Hotels | The Elite Club - 12 Luxury Hotels & Resorts in Goa" },
      {
        name: "description",
        content:
          "Discover 12 handpicked 5-star luxury hotels and resorts in Goa partnered with The Elite Club Casino. Enjoy premier stays, infinity pools, fine dining, and casino transfers.",
      },
    ],
  }),
});

function HotelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "5 Star Luxury", "5 Star Deluxe", "5 Star Heritage", "5 Star Sanctuary"];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesCat =
      selectedCategory === "All" || hotel.stars.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
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
                Luxury Accommodations
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4">
              Partner <span className="gold-text">Hotels &amp; Resorts</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Elevate your Goan gaming getaway with stays at 12 handpicked 5-star luxury resorts offering bespoke hospitality, oceanfront views, and seamless casino transfers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="section-py border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-[var(--gold)] text-[#0C0C0D] font-semibold shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                      : "bg-[var(--surface)] text-muted-foreground border border-[var(--border)] hover:border-[var(--gold)]/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72">
              <input
                type="text"
                placeholder="Search hotel or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--gold)]"
              />
            </div>
          </Reveal>

          {/* Hotels Grid */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel: Hotel) => {
              const waText = encodeURIComponent(
                `Hi The Elite Club Casino,\nI would like to enquire about booking at *${hotel.name}* (${hotel.location}).\nPlease share packages and room availability.`
              );
              const waLink = `https://wa.me/${site.whatsapp}?text=${waText}`;

              return (
                <RevealItem key={hotel.id}>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden group flex flex-col h-full hover:border-[var(--gold)]/30 transition-all duration-300">
                    {/* Hotel Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/70 via-transparent to-transparent" />
                      
                      {/* Star Badge */}
                      <span className="absolute top-4 left-4 text-[0.65rem] font-bold text-[#0C0C0D] bg-[var(--gold)] px-3 py-1 rounded-full uppercase tracking-wider">
                        {hotel.stars}
                      </span>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#0C0C0D]/80 backdrop-blur-sm border border-[var(--gold)]/20 px-2.5 py-1 rounded-full text-xs text-[var(--gold)] font-semibold">
                        <Star size={12} fill="currentColor" />
                        {hotel.rating}
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-4 left-4 text-sm font-bold font-display text-white">
                        From <span className="text-[var(--gold)] text-lg">{hotel.pricePerNight}</span> / night
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                          <MapPin size={13} className="text-[var(--gold)] shrink-0" />
                          <span>{hotel.location}</span>
                        </div>

                        <h3 className="text-xl font-bold font-display text-foreground mb-3 group-hover:text-[var(--gold)] transition-colors">
                          {hotel.name}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {hotel.description}
                        </p>

                        {/* Amenities Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {hotel.amenities.map((amenity, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 text-[0.7rem] text-muted-foreground bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                            >
                              <CheckCircle2 size={10} className="text-[var(--gold)]" />
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <CTAAnchor
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center flex items-center justify-center gap-2 !py-3"
                      >
                        <MessageCircle size={15} />
                        ENQUIRE ON WHATSAPP
                      </CTAAnchor>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {filteredHotels.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              No hotels match your search criteria. Try a different keyword.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
