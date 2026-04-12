/**
 * Local project photos from `src/assets` — mapped per service for hero + gallery.
 */
import type { ServiceSlug } from "./servicesContent";

import interiorHero from "@/assets/-1.jpeg";
import interiorG1 from "@/assets/-2.jpeg";
import interiorG2 from "@/assets/-4.jpeg";
import interiorG3 from "@/assets/-5.jpeg";

import pmHero from "@/assets/-10.jpeg";
import pmG1 from "@/assets/-11.jpeg";
import pmG2 from "@/assets/-12.jpeg";
import pmG3 from "@/assets/-13.jpeg";

import draftHero from "@/assets/-17.jpeg";
import draftG1 from "@/assets/-18.jpeg";
import draftG2 from "@/assets/-19.jpeg";
import draftG3 from "@/assets/-20.jpeg";

import testHero from "@/assets/-29.jpeg";
import testG1 from "@/assets/-30.jpeg";
import testG2 from "@/assets/-31.jpeg";
import testG3 from "@/assets/-32.jpeg";

import valHero from "@/assets/-35.jpeg";
import valG1 from "@/assets/-36.jpeg";
import valG2 from "@/assets/-37.jpeg";
import valG3 from "@/assets/-38.jpeg";

export const SERVICE_ASSET_IMAGES: Record<ServiceSlug, { hero: string; gallery: [string, string, string] }> = {
  "interior-designing": {
    hero: interiorHero,
    gallery: [interiorG1, interiorG2, interiorG3],
  },
  "project-management": {
    hero: pmHero,
    gallery: [pmG1, pmG2, pmG3],
  },
  "design-drafting": {
    hero: draftHero,
    gallery: [draftG1, draftG2, draftG3],
  },
  "material-testing": {
    hero: testHero,
    gallery: [testG1, testG2, testG3],
  },
  "property-valuation": {
    hero: valHero,
    gallery: [valG1, valG2, valG3],
  },
};

export function getServiceAssetImages(slug: ServiceSlug) {
  return SERVICE_ASSET_IMAGES[slug];
}
