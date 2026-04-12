/**
 * Loads every project photo from `src/assets` (*.jpeg), sorted by filename.
 * Images are split into themed groups (interiors, kitchens, bedrooms, baths, execution).
 * Re-run the app after adding new files—no manual import list required.
 */

export type GalleryImage = { src: string; id: string };

export type GalleryGroup = {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

const GROUP_DEFS: Omit<GalleryGroup, "images">[] = [
  {
    id: "living",
    title: "Living & family spaces",
    description: "Living rooms, lounges, and open-plan areas—layout, lighting, and finishes.",
  },
  {
    id: "kitchen",
    title: "Kitchens & dining",
    description: "Modular kitchens, counters, storage, and dining zones tailored to daily use.",
  },
  {
    id: "bedroom",
    title: "Bedrooms & wardrobes",
    description: "Bedrooms, wardrobes, and interior storage crafted for comfort and order.",
  },
  {
    id: "bath",
    title: "Bathrooms & details",
    description: "Bath spaces, fixtures, tiling, and finishing details.",
  },
  {
    id: "execution",
    title: "Site execution & exteriors",
    description: "On-site progress, civil and interior execution, façades, and handover-ready spaces.",
  },
];

function extractSortKey(filename: string): number {
  const m = filename.match(/-(\d+)\.jpe?g$/i);
  if (m) return parseInt(m[1], 10);
  const w = filename.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (w) return 100000 + parseInt(w[2], 10) * 100 + parseInt(w[3], 10);
  let h = 0;
  for (let i = 0; i < filename.length; i++) h = (h * 31 + filename.charCodeAt(i)) | 0;
  return 200000 + (h >>> 0);
}

function loadSortedImages(): GalleryImage[] {
  const modules = import.meta.glob("../assets/*.jpeg", { eager: true }) as Record<string, { default: string }>;
  const list: GalleryImage[] = [];

  for (const [path, mod] of Object.entries(modules)) {
    const filename = path.split("/").pop() ?? path;
    if (filename.toLowerCase().includes("logo")) continue;
    list.push({
      src: mod.default,
      id: filename.replace(/\.jpe?g$/i, ""),
    });
  }

  list.sort((a, b) => {
    const fa = a.id.includes("/") ? a.id.split("/").pop()! : a.id;
    const fb = b.id.includes("/") ? b.id.split("/").pop()! : b.id;
    return extractSortKey(fa) - extractSortKey(fb) || fa.localeCompare(fb);
  });

  return list;
}

function chunkIntoGroups<T>(items: T[], groupCount: number): T[][] {
  if (items.length === 0) return Array.from({ length: groupCount }, () => []);
  const size = Math.ceil(items.length / groupCount);
  const out: T[][] = [];
  for (let i = 0; i < groupCount; i++) {
    out.push(items.slice(i * size, (i + 1) * size));
  }
  return out;
}

const sortedImages = loadSortedImages();

export const allProjectImages: GalleryImage[] = sortedImages;

/** First N images for home “recent projects” strip */
export function getProjectPreviewImages(count: number): GalleryImage[] {
  return sortedImages.slice(0, Math.min(count, sortedImages.length));
}

/** Themed groups: sequential batches of your photos (even split) */
export const projectGalleryGroups: GalleryGroup[] = GROUP_DEFS.map((def, i) => {
  const chunks = chunkIntoGroups(sortedImages, GROUP_DEFS.length);
  return {
    ...def,
    images: chunks[i] ?? [],
  };
}).filter((g) => g.images.length > 0);

/** Flat list for lightbox navigation across the whole portfolio */
export const allImagesFlat: GalleryImage[] = sortedImages;
