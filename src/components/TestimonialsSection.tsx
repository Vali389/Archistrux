import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Villa Owner, Hyderabad",
    quote:
      "ArchiStrux delivered our home on schedule with complete transparency at every stage. The team felt like a true partner—from structural work through interiors.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Commercial Client, Bangalore",
    quote:
      "Archistrux transformed our office space beyond expectations—disciplined coordination, crisp documentation, and finishing that holds up in daily use.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Interior Renovation, Mumbai",
    quote:
      "They understood our lifestyle and translated it into spaces that feel both luxurious and practical. Attention to detail in carpentry and lighting was outstanding.",
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 28 },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle
          label="Client stories"
          title="Client testimonials"
          description="Trusted by homeowners and businesses for interiors, project management, and technical services."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-xl border border-border/80 bg-card/80 backdrop-blur-sm p-8 shadow-lg shadow-black/20"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Quote className="h-10 w-10 text-primary/30 mb-4" aria-hidden />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />
                ))}
              </div>
              <p className="text-foreground/90 text-base md:text-[17px] leading-[1.6] font-normal mb-8">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-border/60">
                <p className="text-base font-semibold text-foreground tracking-tight">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
