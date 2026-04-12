import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import heroAbout from "@/assets/hero-about.jpg";
import { COMPANY } from "@/data/company";

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "Deliver engineering-led interiors and project delivery that exceed expectations on quality, transparency, and schedule—without compromising safety or compliance.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "Be a trusted partner for homeowners and businesses across Hyderabad and beyond—known for disciplined execution, refined detailing, and accountable communication.",
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Integrity in estimates, clarity in documentation, and respect for your time and investment. We build relationships as carefully as we build spaces.",
  },
  {
    icon: Award,
    title: "Promise",
    desc: "Dedicated oversight on every engagement: structured milestones, visible progress, and a handover you can verify—not guess.",
  },
];

const timeline = [
  { year: "2010", title: "Founded", desc: "ArchiStrux established with a focus on build quality and client-first delivery." },
  { year: "2013", title: "100 projects", desc: "Milestone across residential and commercial work—repeat clients and referrals." },
  { year: "2016", title: "Interiors division", desc: "End-to-end interiors aligned with civil and MEP coordination." },
  { year: "2019", title: "Corporate scale", desc: "Larger office and commercial interiors with documented QA processes." },
  { year: "2022", title: "500+ deliveries", desc: "Portfolio growth across Telangana and neighbouring markets." },
  { year: "2026", title: "Today", desc: "Full stack: interiors, PM, drafting, testing, and valuation under one roof." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroAbout}
        title="About ArchiStrux"
        subtitle={`${COMPANY.legalName} — engineering precision and interior craft, based in ${COMPANY.address}.`}
        highlight="Our story"
      />

      <section className="py-16 md:py-24 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-14 md:mb-16">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.22em] mb-4">Who we are</p>
            <h2 className="font-display text-2xl md:text-[1.85rem] font-bold text-foreground tracking-tight mb-6 leading-tight">
              Crafting spaces with clarity and rigor
            </h2>
            <div className="space-y-5 text-base md:text-[17px] leading-[1.7] text-foreground/85">
              <p>
                {COMPANY.legalName} provides construction-adjacent engineering support, interior design, project management,
                technical drafting, material testing insight, and property valuation—so clients can move from idea to occupancy
                with fewer surprises.
              </p>
              <p>
                Our team brings together site discipline, design sensitivity, and documentation habits that matter when budgets
                are tight and timelines are real. Whether it is a home refresh, a workplace rollout, or a technical assessment,
                we anchor decisions in scope you can see and approve.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/80 bg-secondary/40 p-7 md:p-8 hover:border-primary/25 transition-colors"
              >
                <value.icon className="text-primary mb-4" size={26} strokeWidth={1.75} />
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground tracking-tight mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-[15px] leading-[1.65]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle
            label="Timeline"
            title="Milestones"
            description="Key moments in our journey—consistency in delivery matters more than headlines."
          />
          <ul className="relative mt-12 md:mt-14 space-y-0 border-l-2 border-border pl-8 md:pl-10 ml-2 md:ml-3">
            {timeline.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[25px] md:-left-[29px] top-1.5 flex h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <span className="text-primary text-sm font-bold tabular-nums">{item.year}</span>
                <h4 className="font-display text-base md:text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
