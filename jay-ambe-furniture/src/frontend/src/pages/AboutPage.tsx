import {
  Armchair,
  UtensilsCrossed,
  Bed,
  ChefHat,
  Tv,
  DoorOpen,
  BookOpen,
  Layers,
  Home,
} from "lucide-react";

const CATEGORIES = [
  { icon: Armchair, label: "Sofa" },
  { icon: UtensilsCrossed, label: "Dining Table" },
  { icon: Bed, label: "Bedroom" },
  { icon: ChefHat, label: "Modular Kitchen" },
  { icon: Tv, label: "TV Unit" },
  { icon: DoorOpen, label: "Wardrobe" },
  { icon: BookOpen, label: "Study Table" },
  { icon: Layers, label: "Wooden Flooring" },
  { icon: Home, label: "Wooden Ceiling" },
];

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "1000+", label: "Happy Customers" },
  { value: "Gujarat", label: "Coverage" },
];

export function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-furniture.dim_1400x700.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20))' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block text-white/80 text-sm font-medium tracking-widest uppercase mb-3">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-white/60 rounded-full" />
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-[#374151] text-sm font-medium tracking-widest uppercase">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Crafting Excellence for{" "}
                <span className="text-[#111827]">15+ Years</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jay Ambe Furniture is a premier custom furniture workshop based in Gujarat, India.
                  Founded with a passion for woodworking and an eye for design, we have been creating
                  beautiful, functional, and durable furniture for homes and offices across Gujarat.
                </p>
                <p>
                  Our team of skilled craftsmen combines traditional woodworking techniques with
                  modern design sensibilities to deliver furniture that is not only aesthetically
                  stunning but built to last generations. Each piece is made with carefully selected
                  premium materials.
                </p>
                <p>
                  From a single sofa to a complete home furnishing project — we handle it all with
                  the same care and craftsmanship. Our customers trust us to turn their vision into
                  reality, and we take that responsibility seriously.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-warm-lg">
                <img
                  src="/assets/generated/gallery-sofa.dim_800x600.jpg"
                  alt="Our craftsmanship"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#374151] text-white rounded-2xl p-5 shadow-warm-lg">
                <div className="font-display text-4xl font-bold">15+</div>
                <div className="text-white/80 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#374151] text-sm font-medium tracking-widest uppercase">Specializations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What We Create
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-[#374151] rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              From living rooms to kitchens, we craft every piece of furniture with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {CATEGORIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group bg-background rounded-xl p-5 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 text-center cursor-default"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#F3F4F6] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E5E7EB] transition-colors">
                    <Icon size={28} className="text-[#374151]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">{item.label}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#374151] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#374151] text-sm font-medium tracking-widest uppercase">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Drives Us
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-[#374151] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Precision Craftsmanship",
                desc: "Every joint, finish, and detail is handled with professional-grade precision by our expert artisans.",
              },
              {
                title: "Premium Materials",
                desc: "We source only the finest wood, fabric, and hardware to ensure your furniture stands the test of time.",
              },
              {
                title: "Customer First",
                desc: "Your satisfaction is our priority. We collaborate with you every step of the way to deliver your dream piece.",
              },
            ].map((val) => (
              <div key={val.title} className="bg-card rounded-xl p-6 shadow-warm">
                <h3 className="font-semibold text-foreground text-lg mb-2">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
