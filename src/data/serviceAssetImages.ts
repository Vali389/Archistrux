/**
 * Local project photos from `src/assets` — mapped per service for hero + gallery.
 */
import type { ServiceSlug } from "./servicesContent";

import interiorHero from "@/assets/-1.jpeg";
import interiorG1 from "@/assets/-2.jpeg";
import interiorG2 from "@/assets/-4.jpeg";
import interiorG3 from "@/assets/-5.jpeg";

import pmHero from "@/assets/project-mangement-1.jpeg";
import pmG1 from "@/assets/project-mangement-2.jpeg";
import pmG2 from "@/assets/project-mangement-3.jpeg";
import pmG3 from "@/assets/project-mangement-4.jpeg";

import draftHero from "@/assets/DESIGN AND DRAFTING-1.jpeg";
import draftG1 from "@/assets/DESIGN AND DRAFTING-2.jpeg";
import draftG2 from "@/assets/DESIGN AND DRAFTING-3.jpeg";
import draftG3 from "@/assets/DESIGN AND DRAFTING-4.jpeg";

import revitHero from "@/assets/revit-1.jpeg";
import revitG1 from "@/assets/revit-2.jpeg";
import revitG2 from "@/assets/revit-3.jpeg";
import revitG3 from "@/assets/revit-4.jpeg";

import testHero from "@/assets/materil-testing-1.jpeg";
import testG1 from "@/assets/materuil-testing-2.jpeg";
import testG2 from "@/assets/materuil-testing-3.jpeg";
import testG3 from "@/assets/materuil-testing-4.jpeg";

import valHero from "@/assets/property-evalution-1.jpeg";
import valG1 from "@/assets/property-evalution-2.jpeg";
import valG2 from "@/assets/property-evalution-3.jpeg";
import valG3 from "@/assets/property-evalution-4.jpeg";

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
  revit: {
    hero: revitHero,
    gallery: [revitG1, revitG2, revitG3],
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
