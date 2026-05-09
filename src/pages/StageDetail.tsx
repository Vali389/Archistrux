import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { interiorStages } from "@/data/interiorStages";
import { COMPANY, whatsappHref } from "@/data/company";

const StageDetail = () => {
  const { stageSlug } = useParams();
  const stageIndex = interiorStages.findIndex(s => s.slug === stageSlug);
  const stage = interiorStages[stageIndex];
  
  if (!stage) {
    return <Navigate to="/services/interior-designing/stages" replace />;
  }

  const prevStage = stageIndex > 0 ? interiorStages[stageIndex - 1] : null;
  const nextStage = stageIndex < interiorStages.length - 1 ? interiorStages[stageIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <nav
        className="pt-[4.25rem] border-t border-primary/35 bg-zinc-950 text-zinc-400"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center gap-2 text-sm">
          <Link to="/" className="hover:text-zinc-200 transition-colors">Home</Link>
          <span className="text-zinc-600" aria-hidden>&gt;</span>
          <Link to="/services" className="hover:text-zinc-200 transition-colors">Services</Link>
          <span className="text-zinc-600" aria-hidden>&gt;</span>
          <Link to="/services/interior-designing/stages" className="hover:text-zinc-200 transition-colors">Interior Stages</Link>
          <span className="text-zinc-600" aria-hidden>&gt;</span>
          <span className="text-zinc-100 font-semibold line-clamp-1">{stage.title}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[min(50vh,500px)] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ transformOrigin: "center center" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={stage.heroImage}
              alt={stage.title}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex min-h-[min(50vh,500px)] flex-col items-center justify-center px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
              Stage {stage.id} of 15
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 max-w-4xl">
              {stage.title}
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-snug">
              {stage.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                What happens during this stage?
              </h2>
              <div className="w-16 h-0.5 bg-gold-gradient mb-8" />
              
              <div className="space-y-6">
                {stage.detailedExplanation.map((para, i) => (
                  <p key={i} className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-secondary/50 border border-border/80">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Outcomes
                </h3>
                <p className="text-foreground/90 text-[15px] leading-relaxed">
                  Upon completion of {stage.title.toLowerCase()}, the project is thoroughly inspected and verified against our strict quality checklists before moving forward to the next stage.
                </p>
              </div>
            </motion.div>

            {/* Right Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="sm:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-border/40">
                <img src={stage.galleryImages[0]} alt="Process visual 1" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-border/40">
                <img src={stage.galleryImages[1]} alt="Process visual 2" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-border/40">
                <img src={stage.galleryImages[2]} alt="Process visual 3" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-14 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 relative">
            
            {/* Previous Button */}
            <div className="w-full sm:w-auto z-10">
              {prevStage ? (
                <Link 
                  to={`/services/interior-designing/stages/${prevStage.slug}`}
                  className="group flex items-center gap-4 py-3 px-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors w-full sm:w-auto"
                >
                  <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-zinc-700 group-hover:text-white transition-colors shrink-0">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">Previous Stage</p>
                    <p className="text-sm font-semibold text-zinc-100">{prevStage.id}. {prevStage.title}</p>
                  </div>
                </Link>
              ) : <div className="hidden sm:block sm:w-[200px]" />}
            </div>

            {/* Center Back Link */}
            <div className="order-last sm:order-none sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-0">
              <Link to="/services/interior-designing/stages" className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to all 15 stages
              </Link>
            </div>

            {/* Next Button */}
            <div className="w-full sm:w-auto z-10 flex justify-end">
              {nextStage ? (
                <Link 
                  to={`/services/interior-designing/stages/${nextStage.slug}`}
                  className="group flex items-center justify-end gap-4 py-3 px-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors w-full sm:w-auto text-right"
                >
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">Next Stage</p>
                    <p className="text-sm font-semibold text-zinc-100">{nextStage.id}. {nextStage.title}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-zinc-700 group-hover:text-white transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ) : (
                <Link 
                  to="/contact"
                  className="group flex items-center justify-end gap-4 py-3 px-4 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500 hover:text-zinc-950 transition-colors w-full sm:w-auto text-right"
                >
                  <div className="text-right">
                    <p className="text-[10px] text-amber-500/80 group-hover:text-zinc-800 font-bold uppercase tracking-widest mb-0.5">Ready to build?</p>
                    <p className="text-sm font-semibold text-amber-500 group-hover:text-zinc-950">Book Consultation</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-amber-500 group-hover:bg-zinc-950 flex items-center justify-center text-zinc-950 group-hover:text-amber-500 transition-colors shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </Link>
              )}
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StageDetail;
