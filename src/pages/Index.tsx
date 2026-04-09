import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Paintbrush, Ruler, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EditorialCommitment from "@/components/EditorialCommitment";
import VisualShowcaseBand from "@/components/VisualShowcaseBand";
import heroHome from "@/assets/hero-home.jpg";
import bedroom from "@/assets/bedroom.jpg";
import livingroom from "@/assets/livingroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import dining from "@/assets/dining.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Happy Clients" },
  { number: "50+", label: "Expert Team" },
];

const services = [
  { icon: Building2, title: "Construction", desc: "Residential & commercial construction with cutting-edge techniques and premium materials." },
  { icon: Paintbrush, title: "Interior Design", desc: "Bespoke interior solutions that blend aesthetics with functionality for every space." },
  { icon: Ruler, title: "Architecture", desc: "Innovative architectural designs that stand the test of time and inspire awe." },
];

const interiors = [
  { img: bedroom, title: "Bedroom", desc: "Luxurious bedrooms designed for comfort and elegance" },
  { img: livingroom, title: "Living Room", desc: "Sophisticated living spaces that make a statement" },
  { img: kitchen, title: "Kitchen", desc: "Modern kitchens with premium finishes and smart layouts" },
  { img: bathroom, title: "Bathroom", desc: "Spa-inspired bathrooms with exquisite detailing" },
  { img: dining, title: "Dining", desc: "Elegant dining rooms for memorable gatherings" },
];

const projects = [
  { img: project1, title: "Commercial Tower", location: "Hyderabad" },
  { img: project2, title: "Luxury Villa", location: "Bangalore" },
  { img: project3, title: "Corporate Office", location: "Mumbai" },
];

const whyUs = [
  "Premium quality materials and craftsmanship",
  "On-time project delivery guaranteed",
  "Transparent pricing with no hidden costs",
  "Dedicated project manager for every client",
  "10-year structural warranty on all projects",
  "Eco-friendly and sustainable building practices",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroHome}
        title="Building Dreams Into Reality"
        subtitle="We specialize in delivering high-quality construction, architectural design, and interior solutions for residential, commercial, and corporate spaces."
        highlight="ArchiStrux Engineering & Interiors"
      />

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-gold-gradient font-display text-4xl md:text-5xl font-bold">{stat.number}</span>
              <p className="text-muted-foreground font-body text-xs md:text-sm mt-2 tracking-wider uppercase font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="What We Do"
            title="Our Core Services"
            description="From concept to completion, we deliver excellence in every project we undertake."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl md:text-[22px] font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-[17px] leading-[1.6] font-normal">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors font-body text-sm tracking-wider uppercase"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Interior Design Showcase */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Interior Solutions"
            title="Spaces We Transform"
            description="Every room tells a story. We design interiors that reflect your personality and lifestyle."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiors.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 h-80" : "h-72"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl md:text-[22px] font-bold text-foreground mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-[1.5] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Portfolio"
            title="Featured Projects"
            description="A glimpse into our portfolio of landmark constructions and stunning interiors."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg h-96"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs tracking-widest uppercase">{project.location}</span>
                  <h3 className="font-display text-xl md:text-[22px] font-bold text-foreground mt-1 tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <EditorialCommitment />

      <VisualShowcaseBand />

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Why ArchiStrux"
                title="Why Choose Us"
              />
              <div className="grid grid-cols-1 gap-4 mt-8">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-foreground/85 font-body text-base md:text-[17px] leading-[1.6]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Award className="text-primary mx-auto mb-3" size={32} />
                <span className="text-gold-gradient font-display text-2xl font-bold block">ISO</span>
                <span className="text-muted-foreground text-xs">Certified Company</span>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <span className="text-gold-gradient font-display text-2xl font-bold block">200+</span>
                <span className="text-muted-foreground text-xs">Happy Clients</span>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center col-span-2">
                <Building2 className="text-primary mx-auto mb-3" size={32} />
                <span className="text-gold-gradient font-display text-2xl font-bold block">500+</span>
                <span className="text-muted-foreground text-xs">Projects Delivered</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(43_72%_55%)_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-[1.75rem] font-bold mb-5 tracking-tight">
              <span className="text-gold-gradient">Ready to build your dream?</span>
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-[17px] leading-[1.6] mb-8 max-w-xl mx-auto">
              Let's discuss your project. Our team of experts is ready to turn your vision into reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
