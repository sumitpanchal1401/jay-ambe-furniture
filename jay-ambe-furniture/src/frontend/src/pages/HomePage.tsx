import { Link } from "@tanstack/react-router";
import { Award, Hammer, Sparkles, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FurnitureSlider } from "@/components/FurnitureSlider";

const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: "15+ Years Experience",
    desc: "Over a decade and a half of mastering the craft of custom furniture making.",
  },
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    desc: "Every piece is handcrafted with premium materials and meticulous attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    desc: "We bring your vision to life — tailor-made furniture that perfectly fits your space.",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    desc: "Hundreds of happy customers across Gujarat trust us for their dream homes.",
  },
];

const CATEGORY_PREVIEWS = [
  {
    image: "/assets/generated/gallery-sofa.dim_800x600.jpg",
    label: "Living Room",
    to: "/gallery" as const,
  },
  {
    image: "/assets/generated/gallery-bedroom.dim_800x600.jpg",
    label: "Bedroom",
    to: "/gallery" as const,
  },
  {
    image: "/assets/generated/gallery-kitchen.dim_800x600.jpg",
    label: "Modular Kitchen",
    to: "/gallery" as const,
  },
];

export function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-luxury-interior.dim_1920x900.jpg"
            alt="Jay Ambe Furniture showcase"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block text-[#374151] font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up delay-100">
              Gujarat, India
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 animate-fade-in-up delay-200">
              Jay Ambe Furniture –{" "}
              <span className="text-[#111827]">15+ Years</span> of Experience in
              Custom Furniture
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up delay-300">
              Premium custom furniture crafted with care in Gujarat, India.
              Every piece tells a story of skill, passion, and enduring quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-400">
              <Button
                asChild
                size="lg"
                className="bg-[#374151] text-white hover:bg-[#111827] shadow-warm-lg font-semibold px-8"
              >
                <Link to="/gallery">
                  View Gallery <ChevronRight size={18} className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 font-semibold px-8"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recent Furniture Work Slider */}
      <FurnitureSlider />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#374151] text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              The Jay Ambe Difference
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-[#374151] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#F3F4F6] flex items-center justify-center mb-4 group-hover:bg-[#E5E7EB] transition-colors">
                    <Icon size={24} className="text-[#374151]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#374151] text-sm font-medium tracking-widest uppercase">Our Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Explore Our Creations
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-[#374151] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORY_PREVIEWS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group relative overflow-hidden rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-background font-display font-semibold text-xl">{item.label}</h3>
                  <span className="text-background/70 text-sm flex items-center gap-1 mt-1">
                    View collection <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
                className="bg-[#374151] text-white hover:bg-[#111827] font-semibold px-8"
            >
              <Link to="/gallery">
                View Full Gallery <ChevronRight size={18} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 bg-[#374151] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "1000+", label: "Happy Customers" },
              { value: "Gujarat", label: "Coverage Area" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Get in touch and let's discuss your dream furniture. We'll plan, design, and craft it just for you.
          </p>
          <Button
            asChild
            size="lg"
                className="bg-[#374151] text-white hover:bg-[#111827] shadow-warm-lg font-semibold px-10"
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
