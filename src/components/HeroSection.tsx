import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
  highlight?: string;
}

const HeroSection = ({ image, title, subtitle, highlight }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl px-4">
          {highlight && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 border border-primary/30 px-4 py-1.5 rounded-full"
            >
              {highlight}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-6"
          >
            <span className="text-gold-gradient">{title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground/75 font-body text-base md:text-lg max-w-2xl mx-auto leading-[1.6]"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
