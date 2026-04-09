import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import project2 from "@/assets/project2.jpg";

const VisualShowcaseBand = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.5, 1, 1, 0.85]);

  return (
    <section ref={ref} className="relative h-[min(72vh,640px)] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={project2}
          alt="Premium construction and interior craftsmanship"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-background/25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      <div className="relative z-10 flex h-full max-w-7xl mx-auto items-end px-4 pb-16 md:pb-20 md:items-center md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-xl"
        >
          <p className="text-primary text-sm font-medium tracking-[0.22em] uppercase mb-3">Craft & detail</p>
          <h2 className="text-2xl md:text-[26px] font-bold text-foreground tracking-tight leading-snug mb-4">
            Structures engineered for longevity. Interiors finished to feel bespoke.
          </h2>
          <p className="text-base md:text-[17px] leading-[1.6] text-foreground/80 font-normal">
            We combine disciplined civil execution with refined interior layering—lighting, materials, and
            joinery—so the result feels cohesive from façade to furniture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualShowcaseBand;
