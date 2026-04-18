import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";
import founderPortrait from "@/assets/Profile Pic_ceo_founder.png";
import { COMPANY, whatsappHref } from "@/data/company";
import AnimatedCounter from "@/components/AnimatedCounter";

const strengths = [
  "Integrated Engineering & Design Expertise",
  "Client-Focused Approach",
  "Strong Project Execution",
  "Attention to Detail",
  "Quality Assurance",
  "Timely Delivery",
];

const whyWorkWithUs = [
  "Direct involvement from the Director",
  "Balanced design + technical expertise",
  "Transparent communication",
  "Customized solutions for every client",
  "Focus on long-term value and quality",
];

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Commitment to Quality" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroAbout}
        title="About ArchiStrux"
        subtitle="Engineering Precision. Creative Design. Reliable Solutions."
      />

      {/* Company intro */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/40 via-background to-background border-b border-border/50 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.12) 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm shadow-xl shadow-black/20 px-6 py-10 md:px-12 md:py-12 text-center ring-1 ring-primary/10"
          >
            <div className="inline-flex flex-col items-center gap-3 mb-8">
              <span className="h-1 w-16 rounded-full bg-gold-gradient" aria-hidden />
              <p className="text-primary text-xs font-bold uppercase tracking-[0.28em]">Who we are</p>
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-[1.65rem] font-bold text-foreground tracking-tight leading-snug mb-8 max-w-2xl mx-auto">
              A multidisciplinary practice built on engineering rigor and refined design
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto text-center">
              <p className="text-base md:text-[17px] leading-[1.85] text-foreground/90">
                <span className="font-semibold text-foreground">{COMPANY.legalName}</span> is a multidisciplinary firm
                specializing in interior design, engineering services, and property solutions. We are committed to delivering
                high-quality, functional, and aesthetically refined spaces tailored to modern requirements.
              </p>
              <div className="flex justify-center py-1" aria-hidden>
                <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
              <p className="text-base md:text-[17px] leading-[1.85] text-foreground/82">
                With a strong foundation in both engineering and design, we ensure every project is executed with precision,
                innovation, and professionalism.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder & Director */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-card aspect-[4/5] max-w-md mx-auto lg:max-w-none shadow-lg"
            >
              <img
                src={founderPortrait}
                alt="Shaik Irfan, Founder & Director"
                className="h-full w-full object-cover object-top"
                width={800}
                height={1000}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Shaik Irfan
                </h2>
                <p className="text-primary font-semibold mt-1">Founder & Director</p>
                <p className="text-muted-foreground text-sm md:text-base mt-1">{COMPANY.legalName}</p>
              </div>

              <p className="text-base md:text-[17px] leading-[1.75] text-foreground/90">
                A results-driven professional specializing in interior design, engineering solutions, and project execution,
                focused on delivering high-quality, functional, and value-driven spaces.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Experience</h3>
                  <ul className="space-y-2.5 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      Experience in residential and commercial projects
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      Hands-on involvement in planning and execution
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      Strong coordination with clients and vendors
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Core expertise</h3>
                  <ul className="space-y-2.5 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                    {[
                      "Interior Designing & Space Planning",
                      "Project Management",
                      "Design & Drafting",
                      "Revit & BIM Modeling",
                      "Material Testing",
                      "Property Valuation",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Professional approach</h3>
                <p className="text-base md:text-[17px] leading-[1.75] text-foreground/90">
                  I believe in combining creativity with engineering precision to deliver solutions that are both aesthetically
                  refined and practically efficient. Every project is handled with attention to detail, transparency, and a
                  strong commitment to quality.
                </p>
              </div>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/80 bg-secondary/40 p-8 md:p-10"
            >
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight mb-4">Vision</h2>
              <p className="text-muted-foreground text-base md:text-[17px] leading-[1.7]">
                To become a trusted and recognized name in engineering and interior solutions by consistently delivering
                innovative and high-quality services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="rounded-2xl border border-border/80 bg-secondary/40 p-8 md:p-10"
            >
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight mb-4">Mission</h2>
              <ul className="space-y-3 text-muted-foreground text-base md:text-[17px] leading-[1.65]">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">·</span>
                  Deliver functional and aesthetically superior solutions
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">·</span>
                  Maintain transparency and professionalism
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">·</span>
                  Ensure timely execution with uncompromised quality
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">·</span>
                  Build long-term client relationships
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our strengths */}
      <section className="py-16 md:py-24 bg-secondary/25 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10 md:mb-12">
            Our Strengths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {strengths.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-border/70 bg-background/80 px-5 py-4 text-sm md:text-[15px] font-medium text-foreground/90"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight text-center mb-10 md:mb-12">
            Why Work With ArchiStrux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyWorkWithUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border/80 bg-secondary/30 p-6 md:p-7 hover:border-primary/25 transition-colors"
              >
                <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 md:py-20 bg-secondary/35 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.18em] mb-8">At a glance</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-24">
            {stats.map((s) => (
              <div key={s.label} className="text-center min-w-[140px]">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold-gradient tabular-nums mb-2">
                  <AnimatedCounter value={s.value} />
                </div>
                <p className="text-sm md:text-[15px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">Figures indicative — update with final numbers anytime.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/10 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-5">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-base md:text-[17px] leading-[1.75] text-foreground/85 mb-10">
            Partner with {COMPANY.legalName} to bring your ideas to life with expertise, precision, and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Get Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
