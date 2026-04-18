import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/projectGallery";
import { allImagesFlat, projectGalleryGroups } from "@/data/projectGallery";

type ProjectGalleryProps = {
  className?: string;
};

export const GroupedProjectGallery = ({ className }: ProjectGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = useCallback((img: GalleryImage) => {
    const i = allImagesFlat.findIndex((x) => x.src === img.src);
    setLightboxIndex(i >= 0 ? i : 0);
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      setLightboxIndex((cur) => {
        if (cur === null || allImagesFlat.length === 0) return null;
        const n = allImagesFlat.length;
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

  const current = lightboxIndex !== null ? allImagesFlat[lightboxIndex] : null;

  return (
    <div id="portfolio-gallery-start" className={cn("space-y-20 md:space-y-24", className)}>
      {projectGalleryGroups.map((group, gi) => (
        <section key={group.id} id={`portfolio-${group.id}`} className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mb-8 md:mb-10"
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2">{group.title}</h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-[1.55] max-w-3xl">{group.description}</p>
            <div className="w-16 h-0.5 bg-gold-gradient mt-5" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.images.map((img, ii) => (
              <GalleryTile key={`${group.id}-${img.id}-${ii}`} image={img} index={gi * 100 + ii} onOpen={() => openAt(img)} />
            ))}
          </div>
        </section>
      ))}

      <Dialog open={lightboxIndex !== null} onOpenChange={(o) => !o && setLightboxIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 gap-0 border-border bg-background/95 overflow-hidden [&>button]:hidden">
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
                <motion.img
                  key={current.src}
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: 1 }}
                  src={current.src}
                  alt="ArchiStrux project"
                  className="w-full max-h-[85vh] object-contain bg-black/40"
                />
                <p className="text-center text-xs text-muted-foreground py-3 px-4 border-t border-border">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {allImagesFlat.length}
                </p>
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
}: {
  image: GalleryImage;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 12) * 0.02 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      onClick={onOpen}
      className="group relative w-full aspect-square overflow-hidden rounded-xl border border-border/80 bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <img
        src={image.src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        View
      </span>
    </motion.button>
  );
}

/** Sticky category jump links */
const NAV_SHORT: Record<string, string> = {
  top: "All",
  living: "Living",
  kitchen: "Kitchens",
  bedroom: "Bedrooms",
  bath: "Baths",
  execution: "Site & execution",
};

export const PortfolioSectionNav = () => {
  const items = useMemo(
    () => [{ id: "top", title: NAV_SHORT.top }, ...projectGalleryGroups.map((g) => ({ id: g.id, title: NAV_SHORT[g.id] ?? g.title }))],
    [],
  );

  const scrollTo = (id: string) => {
    if (id === "top") {
      document.getElementById("portfolio-gallery-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const el = document.getElementById(`portfolio-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-20 z-30 -mx-4 px-4 py-3 bg-background/85 backdrop-blur-md border-b border-border/60 mb-10">
      <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};
