import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionTitle = ({ label, title, description }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {label && (
        <span className="text-primary font-body text-sm tracking-[0.22em] uppercase font-medium">
          {label}
        </span>
      )}
      <h2 className="font-display text-2xl md:text-[1.75rem] font-bold mt-3 mb-4 tracking-tight">
        <span className="text-gold-gradient">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-base md:text-[17px] leading-[1.6]">
          {description}
        </p>
      )}
      <div className="w-16 h-0.5 bg-gold-gradient mx-auto mt-6" />
    </motion.div>
  );
};

export default SectionTitle;
