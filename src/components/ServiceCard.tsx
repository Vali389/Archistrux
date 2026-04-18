import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ServiceDefinition } from "@/data/servicesContent";
import { getServiceAssetImages } from "@/data/serviceAssetImages";

type ServiceCardProps = {
  service: ServiceDefinition;
  index?: number;
};

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const Icon = service.icon;
  const serviceImages = getServiceAssetImages(service.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Link to={`/services/${service.slug}`} className="group block h-full">
        <motion.div
          whileHover={{ y: -12 }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className="relative h-full overflow-hidden rounded-xl border border-border/90 bg-secondary/80 p-8 shadow-lg shadow-black/25 ring-1 ring-white/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:border-primary/40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-5 w-full overflow-hidden rounded-lg border border-border/80 aspect-[4/3]">
              <img
                src={serviceImages.hero}
                alt={`${service.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/25">
              <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="font-display text-lg md:text-[20px] font-bold tracking-tight text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-[1.55] mb-5 flex-1">{service.summary}</p>
            <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold tracking-wide">
              View details
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
