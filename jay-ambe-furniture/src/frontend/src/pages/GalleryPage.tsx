import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAllGalleryItems, GalleryCategory } from "../hooks/useQueries";

const STATIC_IMAGES: {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
}[] = [
  { id: "s1", title: "Premium Sofa", category: GalleryCategory.sofa, src: "/assets/generated/gallery-sofa.dim_800x600.jpg" },
  { id: "s2", title: "Elegant Dining Table", category: GalleryCategory.diningTable, src: "/assets/generated/gallery-dining.dim_800x600.jpg" },
  { id: "s3", title: "Luxury Bedroom", category: GalleryCategory.bedroom, src: "/assets/generated/gallery-bedroom.dim_800x600.jpg" },
  { id: "s4", title: "Modular Kitchen", category: GalleryCategory.modularKitchen, src: "/assets/generated/gallery-kitchen.dim_800x600.jpg" },
  { id: "s5", title: "Modern TV Unit", category: GalleryCategory.tvUnit, src: "/assets/generated/gallery-tvunit.dim_800x600.jpg" },
  { id: "s6", title: "Custom Wardrobe", category: GalleryCategory.wardrobe, src: "/assets/generated/gallery-wardrobe.dim_800x600.jpg" },
  { id: "s7", title: "Study Table", category: GalleryCategory.studyTable, src: "/assets/generated/gallery-study.dim_800x600.jpg" },
  { id: "s8", title: "Wooden Flooring", category: GalleryCategory.woodenFlooring, src: "/assets/generated/gallery-flooring.dim_800x600.jpg" },
  { id: "s9", title: "Wooden Ceiling", category: GalleryCategory.woodenCeiling, src: "/assets/generated/gallery-ceiling.dim_800x600.jpg" },
];

const FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "Sofa", value: GalleryCategory.sofa },
  { label: "Dining Table", value: GalleryCategory.diningTable },
  { label: "Bedroom", value: GalleryCategory.bedroom },
  { label: "Modular Kitchen", value: GalleryCategory.modularKitchen },
  { label: "TV Unit", value: GalleryCategory.tvUnit },
  { label: "Wardrobe", value: GalleryCategory.wardrobe },
  { label: "Study Table", value: GalleryCategory.studyTable },
  { label: "Wooden Flooring", value: GalleryCategory.woodenFlooring },
  { label: "Wooden Ceiling", value: GalleryCategory.woodenCeiling },
];

type GalleryItemUnified = {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
};

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { data: backendItems = [] } = useAllGalleryItems();

  const allItems: GalleryItemUnified[] = useMemo(() => {
    const backendUnified: GalleryItemUnified[] = backendItems.map((item) => ({
      id: String(item.id),
      title: item.title,
      category: item.category,
      src: item.blob.getDirectURL(),
    }));
    return [...STATIC_IMAGES, ...backendUnified];
  }, [backendItems]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return allItems;
    return allItems.filter((item) => item.category === activeFilter);
  }, [allItems, activeFilter]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/generated/gallery-wardrobe.dim_800x600.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20))' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block text-white/80 text-sm font-medium tracking-widest uppercase mb-3">Our Portfolio</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Gallery</h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-white/60 rounded-full" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tab.value
                    ? "bg-[#374151] text-white shadow-warm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p>No images found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="group relative overflow-hidden rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 cursor-zoom-in w-full text-left"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-background font-semibold text-sm">{item.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} className="text-foreground" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
        <DialogContent className="max-w-5xl w-full p-0 bg-foreground/95 border-none backdrop-blur-xl">
          <div className="relative flex items-center justify-center min-h-[60vh]">
            {currentItem && (
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-3 right-3 w-9 h-9 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center text-background transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center text-background transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center text-background transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            {/* Caption */}
            {currentItem && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p className="text-background/80 text-sm">{currentItem.title}</p>
                {lightboxIndex !== null && (
                  <p className="text-background/50 text-xs mt-1">
                    {lightboxIndex + 1} / {filtered.length}
                  </p>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
