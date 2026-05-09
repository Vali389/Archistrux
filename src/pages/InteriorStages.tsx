import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { interiorStages } from "@/data/interiorStages";
import heroImg from "@/assets/interior-stages-hero.png";
import { COMPANY, whatsappHref } from "@/data/company";

const InteriorStages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumbs */}
      <nav
        className="pt-[4.25rem] border-t border-primary/35 bg-zinc-950 text-zinc-400 relative z-20"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center gap-2 text-sm">
          <Link to="/" className="hover:text-zinc-200 transition-colors">
            Home
          </Link>
          <span className="text-zinc-600" aria-hidden>
            &gt;
          </span>
          <Link to="/services" className="hover:text-zinc-200 transition-colors">
            Services
          </Link>
          <span className="text-zinc-600" aria-hidden>
            &gt;
          </span>
          <Link to="/services/interior-designing" className="hover:text-zinc-200 transition-colors">
            Interior Designing
          </Link>
          <span className="text-zinc-600" aria-hidden>
            &gt;
          </span>
          <span className="text-zinc-100 font-semibold line-clamp-1">15 Stages of Work</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[min(55vh,550px)] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ transformOrigin: "center center" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={heroImg}
              alt="Interior design stages"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
        <div className="relative z-10 flex min-h-[min(55vh,550px)] flex-col items-center justify-center px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
              Interior Designing
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl">
              The 15 Stages of Work
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From the first site measurement to the final deep clean, we follow a meticulous 15-step process to ensure flawless execution and stunning results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/40 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="space-y-12 lg:space-y-0">
            {interiorStages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const Icon = stage.icon;
              return (
                <div key={stage.id} className="relative lg:flex lg:items-center lg:justify-between lg:mb-20">
                  {/* Timeline Center Dot (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-background bg-card shadow-lg items-center justify-center z-20">
                    <span className="text-sm font-bold text-primary">{stage.id}</span>
                  </div>

                  {/* Mobile Timeline Number */}
                  <div className="lg:hidden flex items-center gap-4 mb-4">
                    <div className="flex w-10 h-10 rounded-full border-2 border-primary/30 bg-primary/10 items-center justify-center text-primary font-bold">
                      {stage.id}
                    </div>
                    <div className="h-0.5 flex-1 bg-border/60" />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`lg:w-[45%] ${isEven ? "lg:text-right lg:pr-8" : "lg:ml-auto lg:text-left lg:pl-8"}`}
                  >
                    <Link to={`/services/interior-designing/stages/${stage.slug}`} className="block focus:outline-none">
                      <div className={`p-6 md:p-8 rounded-2xl border border-border/80 bg-card shadow-xl shadow-black/5 hover:border-primary/40 transition-all hover:-translate-y-1 relative overflow-hidden group cursor-pointer`}>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className={`flex items-center gap-4 mb-5 ${isEven ? "lg:flex-row-reverse" : "flex-row"}`}>
                          <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                            <Icon className="h-7 w-7" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                            {stage.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4">
                          {stage.description}
                        </p>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary ${isEven ? "lg:flex-row-reverse" : ""}`}>
                          View Stage Details
                          <ArrowRight className={`w-4 h-4 ${isEven ? "lg:rotate-180" : ""}`} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden border-t border-primary-foreground/10">
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_white,_transparent_65%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to start your interior journey?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Experience our proven 15-stage process firsthand. Let us transform your space with precision, elegance, and uncompromised quality.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/services/interior-designing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/40 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Service
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground shadow-lg hover:opacity-95 transition-opacity"
            >
              Book Consultation
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#20bd5a] transition-colors gap-2"
            >
              WhatsApp Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default InteriorStages;
