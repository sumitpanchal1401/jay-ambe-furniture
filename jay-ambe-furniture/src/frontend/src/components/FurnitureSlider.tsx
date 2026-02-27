import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/assets/generated/furniture-living-room.dim_1400x600.jpg",
    label: "Modern Living Room",
    id: "living-room",
  },
  {
    src: "/assets/generated/furniture-bedroom.dim_1400x600.jpg",
    label: "Luxury Bedroom",
    id: "bedroom",
  },
  {
    src: "/assets/generated/furniture-kitchen.dim_1400x600.jpg",
    label: "Modular Kitchen",
    id: "kitchen",
  },
  {
    src: "/assets/generated/furniture-tv-unit.dim_1400x600.jpg",
    label: "TV Unit Design",
    id: "tv-unit",
  },
  {
    src: "/assets/generated/furniture-dining.dim_1400x600.jpg",
    label: "Dining Area",
    id: "dining",
  },
];

const INTERVAL_MS = 5000;

export function FurnitureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartXRef = useRef<number>(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, INTERVAL_MS);
  }, [goNext]);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startInterval();
    } else {
      stopInterval();
    }
    return stopInterval;
  }, [isPaused, startInterval, stopInterval]);

  const handlePrev = () => {
    goPrev();
    if (!isPaused) startInterval();
  };

  const handleNext = () => {
    goNext();
    if (!isPaused) startInterval();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (!isPaused) startInterval();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Heading */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <span
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "#374151" }}
        >
          Our Portfolio
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
          Our Recent Furniture Work
        </h2>
        <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
          Explore our latest furniture and interior projects
        </p>
        <div
          className="mt-4 mx-auto w-16 h-1 rounded-full"
          style={{ backgroundColor: "#374151" }}
        />
      </div>

      {/* Slider Wrapper */}
      <section
        aria-label="Furniture project image slider"
        aria-roledescription="carousel"
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Track */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative shrink-0"
              style={{ width: "100%", minWidth: "100%" }}
            >
              <img
                src={slide.src}
                alt={slide.label}
                className="w-full object-cover"
                style={{ height: "clamp(220px, 42vw, 600px)" }}
                loading="lazy"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
              {/* Slide label — bottom-right, no overlay */}
              <div
                className="absolute bottom-3 right-3 text-sm px-3 py-1 rounded-tl font-medium shadow-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  color: "#111827",
                }}
              >
                {slide.label}
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white shadow-md w-10 h-10 md:w-12 md:h-12 transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2"
          style={
            {
              "--ring-color": "#374151",
            } as React.CSSProperties
          }
        >
          <ChevronLeft
            size={22}
            style={{ color: "#374151" }}
            aria-hidden="true"
          />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white shadow-md w-10 h-10 md:w-12 md:h-12 transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2"
        >
          <ChevronRight
            size={22}
            style={{ color: "#374151" }}
            aria-hidden="true"
          />
        </button>
      </section>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to ${slide.label}`}
            onClick={() => handleDotClick(i)}
            className="h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2"
            style={{
              width: i === currentIndex ? "24px" : "8px",
              backgroundColor: i === currentIndex ? "#374151" : "transparent",
              border: "2px solid #374151",
            }}
          />
        ))}
      </div>
    </section>
  );
}
