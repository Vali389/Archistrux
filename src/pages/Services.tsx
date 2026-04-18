import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, FileText, MessageCircle, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { cn } from "@/lib/utils";
import heroServices from "@/assets/hero-services.jpg";
import { COMPANY, whatsappHref } from "@/data/company";
import { servicesList } from "@/data/servicesContent";
import { getServiceAssetImages } from "@/data/serviceAssetImages";

const processIcons = [MessageCircle, FileText, Wrench, ClipboardList];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroServices}
        title="Our services"
        subtitle="At ArchiStrux Engineering & Interiors Pvt. Ltd., we combine design creativity with engineering precision. From concept to completion—functional, reliable, and value-driven delivery across Hyderabad and beyond."
        highlight="What we do"
      />

      {/* Intro strip */}
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-14 text-center">
          <p className="text-base md:text-[17px] leading-[1.7] text-foreground/85">
            Explore each line of service below—interiors, project management, drafting, testing, and valuation. Select any card to
            open the full scope, imagery, and methodology.
          </p>
        </div>
      </section>

      {/* Alternating feature rows */}
      <section className="py-4 md:py-6">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          const imageLeft = index % 2 === 0;
          const heroSrc = getServiceAssetImages(service.slug).hero;
          return (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className={cn("border-b border-border/50", index === 0 ? "pt-10 md:pt-14" : "py-14 md:py-20")}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border/80 bg-card/40 shadow-xl shadow-black/15">
                  <div className={cn("relative min-h-[260px] lg:min-h-[380px]", !imageLeft && "lg:order-2")}>
                    <img
                      src={heroSrc}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/30 lg:to-background/85" />
                    <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                        <Icon className="h-4 w-4" />
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className={cn("flex flex-col justify-center p-8 md:p-12 lg:p-14", !imageLeft && "lg:order-1")}>
                    <div className="hidden lg:flex items-center gap-3 mb-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Service</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-[1.85rem] font-bold text-foreground tracking-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="text-primary font-medium italic text-base md:text-lg mb-5 border-l-2 border-primary/50 pl-4">
                      {service.tagline}
                    </p>
                    <p className="text-muted-foreground text-base md:text-[17px] leading-[1.7] mb-8">{service.summary}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex w-fit items-center gap-2 rounded-lg bg-gold-gradient px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg hover:opacity-92 transition-opacity"
                    >
                      View full details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Process — horizontal */}
      <section className="py-16 md:py-20 bg-secondary/35 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3">How we work</p>
            <h2 className="text-2xl md:text-[1.85rem] font-bold text-foreground tracking-tight mb-3">From first call to handover</h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              One accountable team—clear milestones, documented approvals, and transparent communication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["Consultation", "Design & planning", "Execution", "Handover"].map((label, i) => {
              const PIcon = processIcons[i] ?? ClipboardList;
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative rounded-2xl border border-border/90 bg-card/70 p-6 text-center hover:border-primary/35 transition-colors"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <PIcon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-bold text-primary mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-bold text-foreground text-[15px] md:text-base mb-2">{label}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {i === 0 && "Scope, budget band, and success criteria—aligned before we commit dates."}
                    {i === 1 && "Drawings, BOQ, and sign-off packs so site starts without ambiguity."}
                    {i === 2 && "Supervision, QA checks, and snag closure against the approved baseline."}
                    {i === 3 && "Documentation, training if needed, and warranty handover with clarity."}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_white,_transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-2xl md:text-[1.9rem] font-bold tracking-tight mb-4">Looking for expert solutions?</h2>
          <p className="text-primary-foreground/90 text-base md:text-[17px] leading-[1.65] mb-10">
            Whether you need design, execution, or technical evaluation, {COMPANY.shortName} is your partner for reliable,
            professional delivery.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground shadow-lg hover:opacity-95 transition-opacity"
            >
              Get free consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary-foreground/35 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Contact us
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary-foreground/35 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
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

export default Services;
