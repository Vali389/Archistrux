import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import heroHome from "@/assets/hero-home.jpg";
import { COMPANY, whatsappHref } from "@/data/company";
import { getPopularServices } from "@/data/servicesContent";
import { getProjectPreviewImages } from "@/data/projectGallery";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "50+", label: "Team Members" },
];

const whyUs = [
  "Integrated design + execution with one accountable team",
  "Transparent BOQs, schedules, and documented approvals",
  "Rigorous quality checks at every milestone",
  "Responsive communication and site discipline",
];

const previewProjects = getProjectPreviewImages(6);
const popularServices = getPopularServices();

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroHome}
        title="Building dreams into reality"
        subtitle={`Prepared for ${COMPANY.legalName}. We combine design creativity with engineering precision—serving ${COMPANY.address} and beyond.`}
        highlight="ArchiStrux"
        tagline={COMPANY.tagline}
      />

      <section className="py-20 md:py-24 bg-secondary/40 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="What we offer"
            title="Popular services"
            description="Most requested engagements—tap through for scope, deliverables, and how we protect quality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {popularServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors font-body text-sm tracking-wider uppercase font-semibold"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Contact:{" "}
            <a className="text-primary hover:underline" href={`tel:${COMPANY.phoneTel}`}>
              {COMPANY.phoneDisplay}
            </a>{" "}
            ·{" "}
            <a className="text-primary hover:underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Why choose us"
            title="Experience you can measure"
            description="Disciplined engineering, refined interiors, and transparent delivery—built for homeowners and businesses."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatedCounter
                  value={stat.number}
                  className="text-gold-gradient font-display text-4xl md:text-5xl font-bold tabular-nums"
                />
                <p className="text-muted-foreground font-body text-xs md:text-sm mt-2 tracking-wider uppercase font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Portfolio"
            title="Recent projects"
            description="A snapshot of recent execution across interiors, coordination, and delivery."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {previewProjects.map((project, i) => (
              <Link
                key={project.src}
                to="/projects"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-border/80 block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="h-full w-full"
                >
                  <img
                    src={project.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View gallery
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors font-body text-sm tracking-wider uppercase font-medium"
            >
              View portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-20 md:py-24 bg-background border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionTitle
                label="Why ArchiStrux"
                title="Built for clarity & craft"
                description=""
              />
              <div className="grid grid-cols-1 gap-4 mt-4 max-w-xl mx-auto lg:mx-0 lg:max-w-none">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/85 font-body text-base md:text-[17px] leading-[1.6]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Award className="text-primary mx-auto mb-3" size={32} />
                <span className="text-gold-gradient font-display text-2xl font-bold block">ISO</span>
                <span className="text-muted-foreground text-xs">Quality systems</span>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <span className="text-gold-gradient font-display text-2xl font-bold block">100+</span>
                <span className="text-muted-foreground text-xs">Happy clients</span>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center col-span-2">
                <Building2 className="text-primary mx-auto mb-3" size={32} />
                <span className="text-gold-gradient font-display text-2xl font-bold block">500+</span>
                <span className="text-muted-foreground text-xs">Projects delivered</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,white,transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="font-display text-2xl md:text-[1.85rem] font-bold tracking-tight mb-4">
            Ready to start your project?
          </h2>
          <p className="text-primary-foreground/90 text-base md:text-[17px] leading-[1.6] mb-10 max-w-2xl mx-auto">
            Book a consultation, call us directly, or message on WhatsApp—we’ll respond with clear next steps.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground shadow-lg hover:opacity-95 transition-opacity"
            >
              Get a free consultation
            </Link>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/35 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Call: {COMPANY.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/35 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              WhatsApp now
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
