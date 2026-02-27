import { Link } from "@tanstack/react-router";
import {
  Hammer,
  ChefHat,
  Bed,
  Briefcase,
  DoorOpen,
  Tv,
  Layers,
  Home,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Hammer,
    title: "Custom Furniture",
    desc: "We craft bespoke furniture tailored to your space and taste. Every piece is made to order, reflecting your unique style and requirements.",
    image: "/assets/generated/gallery-sofa.dim_800x600.jpg",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    desc: "Modern modular kitchens with premium finishes. Designed for maximum functionality and elegance, crafted to last for decades.",
    image: "/assets/generated/gallery-kitchen.dim_800x600.jpg",
  },
  {
    icon: Bed,
    title: "Bedroom",
    desc: "Complete bedroom furniture sets with elegant design — beds, side tables, dressers, and more, all crafted to perfection.",
    image: "/assets/generated/gallery-bedroom.dim_800x600.jpg",
  },
  {
    icon: Briefcase,
    title: "Office Furniture",
    desc: "Professional office furniture for productive workspaces. Ergonomic designs that combine comfort with a sophisticated aesthetic.",
    image: "/assets/generated/gallery-study.dim_800x600.jpg",
  },
  {
    icon: DoorOpen,
    title: "Wardrobe",
    desc: "Custom wardrobes with optimal storage solutions. Sliding doors, walk-in designs, and fitted wardrobes built to your specifications.",
    image: "/assets/generated/gallery-wardrobe.dim_800x600.jpg",
  },
  {
    icon: Tv,
    title: "TV Unit",
    desc: "Stylish TV units with wooden accents. Transform your living room into an entertainment haven with our custom media units.",
    image: "/assets/generated/gallery-tvunit.dim_800x600.jpg",
  },
  {
    icon: Layers,
    title: "Wooden Flooring",
    desc: "Premium hardwood flooring installation. We source and install the finest teak and oak flooring for a warm, luxurious feel.",
    image: "/assets/generated/gallery-flooring.dim_800x600.jpg",
  },
  {
    icon: Home,
    title: "Wooden Ceiling",
    desc: "Luxurious teak wood ceiling panels that add warmth, character, and sophistication to any room in your home.",
    image: "/assets/generated/gallery-ceiling.dim_800x600.jpg",
  },
];

export function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/generated/gallery-kitchen.dim_800x600.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20))' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block text-white/80 text-sm font-medium tracking-widest uppercase mb-3">What We Offer</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Services</h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-white/60 rounded-full" />
          <p className="text-white/80 mt-5 max-w-xl mx-auto">
            From complete home furnishing to individual pieces — we deliver premium quality for every space.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#E5E7EB] transition-colors">
                        <Icon size={20} className="text-[#374151]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#374151] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Contact us today and let's discuss how we can bring your furniture vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#374151] hover:bg-[#F3F4F6] font-semibold px-8 shadow-warm-lg"
          >
            <Link to="/contact">
              Contact Us Today <ChevronRight size={18} className="ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
