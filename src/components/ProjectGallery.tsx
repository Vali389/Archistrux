import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/projectGallery";
import { allProjectImagesFlat, allProjects } from "@/data/projectGallery";

type ProjectGalleryProps = {
  className?: string;
};

export const GroupedProjectGallery = ({ className }: ProjectGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = useCallback((img: GalleryImage) => {
    const i = allProjectImagesFlat.findIndex((x) => x.src === img.src);
    setLightboxIndex(i >= 0 ? i : 0);
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      setLightboxIndex((cur) => {
        if (cur === null || allProjectImagesFlat.length === 0) return null;
        const n = allProjectImagesFlat.length;
        return (cur + dir + n) % n;
      });
    },
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, go]);

  const current = lightboxIndex !== null ? allProjectImagesFlat[lightboxIndex] : null;

  return (
    <div id="portfolio-gallery-start" className={cn("space-y-32 md:space-y-48 mt-16", className)}>
      {allProjects.map((project, projectIndex) => {
        const isEven = projectIndex % 2 === 0;
        const projectNum = (projectIndex + 1).toString().padStart(2, "0");

        return (
          <section key={project.id} id={`project-${project.id}`} className="scroll-mt-36 relative">
            
            {/* Huge Watermark Number */}
            <div className={`absolute top-0 pointer-events-none select-none z-0 ${isEven ? "-left-10" : "-right-10"} opacity-5`}>
              <span className="font-display font-black text-[12rem] md:text-[20rem] leading-none text-foreground">
                {projectNum}
              </span>
            </div>

            <div className={`relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"}`}>
              
              {/* Sticky Project Details Sidebar */}
              <div className="lg:w-1/3 lg:shrink-0">
                <div className="sticky top-40">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px] mb-4 ${isEven ? "" : "lg:justify-end"}`}>
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                    
                    <h2 className={`text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-5 leading-[1.1] ${isEven ? "" : "lg:text-right"}`}>
                      {project.name}
                    </h2>
                    
                    <p className={`text-muted-foreground text-base md:text-lg leading-relaxed mb-8 ${isEven ? "" : "lg:text-right"}`}>
                      {project.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${isEven ? "" : "lg:justify-end"}`}>
                      <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                        {project.type}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bento Grid Gallery */}
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
                {project.images.map((img, i) => {
                  // Make the first image span 2 columns and 2 rows for that ultra-premium look
                  // Unless noFeatured is set (e.g. Boutique Retail Store has no main hero image)
                  const isFeatured = i === 0 && !project.noFeatured;
                  return (
                    <div 
                      key={img.id} 
                      className={cn(
                        "relative h-full w-full",
                        isFeatured ? "sm:col-span-2 row-span-2" : "col-span-1 row-span-1"
                      )}
                    >
                      <GalleryTile 
                        image={img} 
                        index={projectIndex * 10 + i} 
                        onOpen={() => openAt(img)} 
                        isFeatured={isFeatured}
                      />
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        );
      })}

      {/* Lightbox Dialog */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(o) => !o && setLightboxIndex(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 gap-0 border-border bg-background/95 overflow-hidden [&>button]:hidden">
          <DialogTitle className="sr-only">Project photo preview</DialogTitle>
          <AnimatePresence mode="wait">
            {current && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-3 top-3 z-20 rounded-full bg-background/80 p-2 text-foreground hover:bg-background border border-border"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 p-2 border border-border hover:bg-background hidden sm:block"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 p-2 border border-border hover:bg-background hidden sm:block"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                <div className="flex flex-col">
                  <motion.img
                    key={current.src}
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: 1 }}
                    src={current.src}
                    alt={current.title}
                    className="w-full h-[75vh] object-contain bg-black/60"
                  />
                  <div className="py-4 px-6 border-t border-border bg-card/50 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary uppercase tracking-widest">{current.category}</p>
                      <p className="text-lg font-bold text-foreground mt-1">{current.title}</p>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {allProjectImagesFlat.length}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
};

function GalleryTile({
  image,
  index,
  onOpen,
  isFeatured
}: {
  image: GalleryImage;
  index: number;
  onOpen: () => void;
  isFeatured?: boolean;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
      onClick={onOpen}
      className={cn(
        "group relative w-full h-full overflow-hidden rounded-2xl bg-card border border-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg block"
      )}
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
      />
      
      {/* Dark overlay that fades in slightly on hover */}
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/60 transition-colors duration-500" />
      
      {/* Slide-in details overlay */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-left pointer-events-none">
        <span className="inline-block px-3 py-1.5 mb-3 text-[10px] uppercase tracking-widest font-black bg-primary text-primary-foreground rounded-sm max-w-fit shadow-xl">
          {image.category}
        </span>
        <h3 className={cn(
          "text-white font-bold leading-tight drop-shadow-md",
          isFeatured ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {image.title}
        </h3>
      </div>
    </motion.button>
  );
}

export const PortfolioSectionNav = () => {
  const items = useMemo(
    () => [
      { id: "top", title: "All Projects" },
      ...allProjects.map((p) => ({
        id: p.id,
        // Show neighbourhood (second part after comma) if available, else city
        title: p.location.includes(',') ? p.location.split(',')[1].trim() : p.location.split(',')[0].trim(),
      })),
    ],
    [],
  );

  const scrollTo = (id: string) => {
    if (id === "top") {
      document.getElementById("portfolio-gallery-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const el = document.getElementById(`project-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-20 z-30 -mx-4 px-4 py-3 bg-background/85 backdrop-blur-md border-b border-border/60 mb-12">
      {/* Changed to flex-wrap and justify-center to remove horizontal scrollbar */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className="shrink-0 rounded-full border border-border/80 bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:bg-secondary"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};
