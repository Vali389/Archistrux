import { motion } from "framer-motion";
import { Building2, Paintbrush, Ruler, HardHat, Home, Warehouse, Wrench, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import heroServices from "@/assets/hero-services.jpg";
import bedroom from "@/assets/bedroom.jpg";
import livingroom from "@/assets/livingroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import dining from "@/assets/dining.jpg";

const mainServices = [
  { icon: Building2, title: "Commercial Construction", desc: "From office complexes to retail spaces, we deliver commercial projects that combine functionality with modern aesthetics. Our team ensures compliance with all building codes while creating spaces that drive business success.", features: ["Office Buildings", "Retail Spaces", "Industrial Units", "Warehouses"] },
  { icon: Home, title: "Residential Construction", desc: "We build dream homes that reflect your lifestyle. From luxury villas to modern apartments, our residential construction services cover design, planning, and execution with meticulous attention to detail.", features: ["Luxury Villas", "Apartments", "Independent Houses", "Farmhouses"] },
  { icon: Paintbrush, title: "Interior Design", desc: "Our interior design team creates stunning spaces that blend beauty with functionality. We specialize in bedrooms, living rooms, kitchens, bathrooms, and dining areas with bespoke designs.", features: ["Residential Interiors", "Commercial Interiors", "Modular Kitchens", "Custom Furniture"] },
  { icon: Ruler, title: "Architectural Design", desc: "Innovative architectural solutions that balance aesthetics, functionality, and sustainability. Our architects create designs that stand out while meeting all structural requirements.", features: ["3D Visualization", "Floor Plans", "Elevation Design", "Landscape Architecture"] },
  { icon: Wrench, title: "Renovation & Remodeling", desc: "Transform your existing space with our comprehensive renovation services. Whether it's a single room refresh or a complete home makeover, we deliver results that exceed expectations.", features: ["Home Renovation", "Office Remodeling", "Kitchen Upgrades", "Bathroom Refit"] },
  { icon: Lightbulb, title: "MEP Engineering", desc: "Complete mechanical, electrical, and plumbing engineering services that ensure your building operates efficiently and safely with modern systems integration.", features: ["Electrical Systems", "Plumbing", "HVAC Solutions", "Fire Safety"] },
];

const interiorShowcase = [
  { img: bedroom, title: "Bedroom Design", desc: "Create your personal sanctuary with our luxury bedroom designs featuring premium materials, custom wardrobes, ambient lighting, and ergonomic layouts." },
  { img: livingroom, title: "Living Room Design", desc: "Make a lasting impression with sophisticated living rooms that feature contemporary furniture, smart entertainment systems, and elegant decor." },
  { img: kitchen, title: "Kitchen Design", desc: "Modern modular kitchens with premium finishes, smart storage solutions, marble countertops, and state-of-the-art appliances." },
  { img: bathroom, title: "Bathroom Design", desc: "Spa-inspired bathrooms with luxury fittings, premium tiles, rain showers, freestanding bathtubs, and mood lighting." },
  { img: dining, title: "Dining Room Design", desc: "Elegant dining spaces designed for memorable gatherings, featuring custom tables, statement chandeliers, and refined aesthetics." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroServices}
        title="Construction, design & interiors—under one roof"
        subtitle="From civil works and architecture to turnkey interiors and MEP, we deliver end-to-end execution with clear scope, documented milestones, and quality you can walk through at every site visit."
        highlight="Services"
      />

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Services"
            title="What We Offer"
            description="End-to-end solutions for all your construction and design needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs text-primary border border-primary/30 rounded-full px-3 py-1">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Showcase */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Interior Design"
            title="Spaces We Design"
            description="Every room is an opportunity to create something extraordinary."
          />
          <div className="space-y-16">
            {interiorShowcase.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="flex-1 overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    <span className="text-gold-gradient">{item.title}</span>
                  </h3>
                  <p className="text-foreground/70 font-body leading-relaxed">{item.desc}</p>
                  <div className="w-16 h-0.5 bg-gold-gradient mt-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle label="How We Work" title="Our Process" description="A streamlined approach that ensures quality and satisfaction at every step." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Consultation", "Design & Planning", "Execution", "Handover"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-display text-xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="font-display text-foreground font-semibold mb-2">{step}</h4>
                <p className="text-muted-foreground text-sm">Professional and systematic approach ensuring quality results.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
