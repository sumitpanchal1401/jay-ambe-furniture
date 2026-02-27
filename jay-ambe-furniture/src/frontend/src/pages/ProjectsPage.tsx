import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    id: 1,
    image: "/assets/generated/gallery-sofa.dim_800x600.jpg",
    name: "Contemporary Living Room Suite",
    category: "Sofa & Living",
    description: "A full living room transformation with custom L-shaped sofa, center table, and matching side tables.",
    location: "Ahmedabad, Gujarat",
  },
  {
    id: 2,
    image: "/assets/generated/gallery-kitchen.dim_800x600.jpg",
    name: "Modern Modular Kitchen",
    category: "Modular Kitchen",
    description: "Complete modular kitchen with island countertop, premium hardware, and under-cabinet lighting.",
    location: "Surat, Gujarat",
  },
  {
    id: 3,
    image: "/assets/generated/gallery-bedroom.dim_800x600.jpg",
    name: "Master Bedroom Setup",
    category: "Bedroom",
    description: "Luxurious master bedroom with king-size platform bed, side tables, and dresser in teak finish.",
    location: "Vadodara, Gujarat",
  },
  {
    id: 4,
    image: "/assets/generated/gallery-wardrobe.dim_800x600.jpg",
    name: "Walk-in Wardrobe",
    category: "Wardrobe",
    description: "Custom walk-in wardrobe with floor-to-ceiling storage, mirror panels, and soft-close drawers.",
    location: "Rajkot, Gujarat",
  },
  {
    id: 5,
    image: "/assets/generated/gallery-ceiling.dim_800x600.jpg",
    name: "Teak Wood Ceiling",
    category: "Wooden Ceiling",
    description: "Premium teak wood panel ceiling installation in a luxury villa's living and dining area.",
    location: "Gandhinagar, Gujarat",
  },
  {
    id: 6,
    image: "/assets/generated/gallery-tvunit.dim_800x600.jpg",
    name: "Entertainment Wall Unit",
    category: "TV Unit",
    description: "Floor-to-ceiling entertainment unit with custom shelving, LED backlighting, and concealed storage.",
    location: "Surat, Gujarat",
  },
  {
    id: 7,
    image: "/assets/generated/gallery-flooring.dim_800x600.jpg",
    name: "Hardwood Flooring Project",
    category: "Wooden Flooring",
    description: "Full villa wooden flooring installation — 2400 sq ft of premium teak parquet flooring.",
    location: "Anand, Gujarat",
  },
  {
    id: 8,
    image: "/assets/generated/gallery-dining.dim_800x600.jpg",
    name: "Formal Dining Room",
    category: "Dining Table",
    description: "8-seater solid teak dining table with custom upholstered chairs and matching sideboard.",
    location: "Ahmedabad, Gujarat",
  },
  {
    id: 9,
    image: "/assets/generated/gallery-study.dim_800x600.jpg",
    name: "Home Office Study",
    category: "Study Table",
    description: "Complete home office solution with custom L-desk, bookshelf wall unit, and ergonomic chair.",
    location: "Vadodara, Gujarat",
  },
];

export function ProjectsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/generated/gallery-bedroom.dim_800x600.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20))' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block text-white/80 text-sm font-medium tracking-widest uppercase mb-3">Our Portfolio</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Projects</h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-white/60 rounded-full" />
          <p className="text-white/80 mt-5 max-w-xl mx-auto">
            A showcase of our finest completed projects — each one a testament to our craftsmanship.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <article
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-[#374151]/90 text-white text-xs backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-base mb-2 leading-snug">{project.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                   <p className="text-[#374151] text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#374151] inline-block" />
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Completed Projects" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Cities in Gujarat" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-[#374151]">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
