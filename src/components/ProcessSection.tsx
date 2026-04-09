import { motion } from "framer-motion";
import { ClipboardList, PenTool, HardHat, KeyRound } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  {
    icon: ClipboardList,
    title: "Discovery & scope",
    description:
      "We align on your goals, budget, and timeline—then define a clear roadmap for design, approvals, and construction milestones.",
  },
  {
    icon: PenTool,
    title: "Design & estimation",
    description:
      "Detailed drawings, material specifications, and transparent BOQs so you can make confident decisions before we break ground.",
  },
  {
    icon: HardHat,
    title: "Build & quality control",
    description:
      "Structured site execution with regular inspections, safety protocols, and progress updates—so quality never depends on guesswork.",
  },
  {
    icon: KeyRound,
    title: "Handover & support",
    description:
      "Snag-free completion, documentation, and warranty-backed support—delivering a space that is ready to live or work in.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-24 md:py-28 bg-secondary overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle
          label="How we work"
          title="From blueprint to keys"
          description="A disciplined process inspired by best-in-class contractors—transparent milestones, clear ownership, and predictable delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/50 to-border"
                  aria-hidden
                />
              )}
              <div className="h-full rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 pt-8 hover:border-primary/35 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <step.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-foreground tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-[17px] leading-[1.6] text-muted-foreground font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
