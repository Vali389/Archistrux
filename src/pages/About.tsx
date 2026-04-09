import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import heroAbout from "@/assets/hero-about.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver innovative construction and design solutions that exceed client expectations, creating spaces that inspire and endure for generations." },
  { icon: Eye, title: "Our Vision", desc: "To become India's most trusted name in construction and interior design, recognized for quality, innovation, and client-centric approach." },
  { icon: Heart, title: "Our Values", desc: "Integrity, excellence, innovation, and sustainability guide everything we do. We believe in building not just structures, but lasting relationships." },
  { icon: Award, title: "Our Promise", desc: "Every project receives our complete dedication. We promise quality craftsmanship, transparent communication, and timely delivery on every engagement." },
];

const timeline = [
  { year: "2010", title: "Company Founded", desc: "ArchiStrux was established with a vision to redefine construction quality in India." },
  { year: "2013", title: "100th Project", desc: "Reached a milestone of 100 completed residential and commercial projects." },
  { year: "2016", title: "Interior Division", desc: "Launched our dedicated interior design division to offer end-to-end solutions." },
  { year: "2019", title: "Corporate Expansion", desc: "Expanded into corporate office design and large-scale commercial construction." },
  { year: "2022", title: "500+ Projects", desc: "Crossed 500 successfully delivered projects across India." },
  { year: "2026", title: "Industry Leader", desc: "Recognized as one of the top construction and interior firms in the region." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroAbout}
        title="About ArchiStrux"
        subtitle="With over 15 years of experience, we've built a reputation for excellence in construction, architecture, and interior design."
        highlight="Our Story"
      />

      {/* About Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                <span className="text-gold-gradient">Crafting Excellence Since 2010</span>
              </h2>
              <p className="text-foreground/70 font-body leading-relaxed mb-4">
                ArchiStrux Engineering & Interiors Pvt. Ltd. is a premier construction and interior design company based in India. We specialize in delivering high-quality construction, architectural design, and interior solutions for residential, commercial, and corporate spaces.
              </p>
              <p className="text-foreground/70 font-body leading-relaxed mb-4">
                Our focus is on modern design, durability, and client satisfaction — turning your vision into reality with precision and professionalism. Every project we undertake reflects our commitment to excellence and innovation.
              </p>
              <p className="text-foreground/70 font-body leading-relaxed">
                With a team of 50+ skilled architects, engineers, and designers, we bring together diverse expertise to deliver projects that set new benchmarks in quality and design.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <value.icon className="text-primary mb-3" size={24} />
                  <h4 className="font-display text-foreground text-sm font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            label="Our Journey"
            title="Milestones"
            description="A look at the key moments that shaped ArchiStrux into what it is today."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-display text-foreground font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                  <span className="text-primary text-[10px] font-bold">{item.year.slice(2)}</span>
                </div>
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="bg-card border border-border rounded-lg p-6 md:hidden">
                    <span className="text-primary text-xs font-bold">{item.year}</span>
                    <h4 className="font-display text-foreground font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                  <span className="text-primary text-xs font-bold hidden md:block">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
