// src/data/projectGallery.ts

export type GalleryImage = { 
  src: string; 
  id: string; 
  category: string; 
  title?: string;
};

export type ProjectCaseStudy = {
  id: string;
  name: string;
  location: string;
  type: string;
  description: string;
  images: GalleryImage[];
  /** When true, the bento grid shows images starting from index 0 as a normal tile (no featured large tile) */
  noFeatured?: boolean;
};

// Real uploaded assets
import wapp1 from "@/assets/WhatsApp Image 2026-04-05 at 5.12.38 PM (1).jpeg";
import boutiqueShowroom from "@/assets/boutique-retail-showroom.jpg";
import wapp3 from "@/assets/WhatsApp Image 2026-04-05 at 5.12.40 PM.jpeg";
import wapp4 from "@/assets/WhatsApp Image 2026-04-05 at 5.12.49 PM.jpeg";
import wapp5 from "@/assets/WhatsApp Image 2026-04-05 at 5.12.50 PM.jpeg";
import wapp6 from "@/assets/WhatsApp Image 2026-04-05 at 5.12.51 PM.jpeg";

// Room assets
import bathroom from "@/assets/bathroom.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import livingroom from "@/assets/livingroom.jpg";
import dining from "@/assets/dining.jpg";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";

// Premium AI construction & interior assets
import bengaluruVilla from "@/assets/bengaluru-villa.png";
import noidaOffice from "@/assets/noida-office.png";
import premiumCarpentry from "@/assets/premium-carpentry.png";
import stagesHero from "@/assets/interior-stages-hero.png";
import chipping from "@/assets/chipping-plastering.png";
import elec2 from "@/assets/electrical-gallery2.png";
import elec3 from "@/assets/electrical-gallery3.png";
import elec1 from "@/assets/electrical-looping.png";
import lights from "@/assets/lights-profiles.png";
import plumbing from "@/assets/plumbing-works.png";
import primer from "@/assets/primer-work.png";
import putty from "@/assets/putty-work.png";
import tiles from "@/assets/tiles-hero.png";

export const allProjects: ProjectCaseStudy[] = [
  {
    id: "hyderabad-banjara-hills",
    name: "Luxury Residence Execution",
    location: "Hyderabad, Banjara Hills",
    type: "Residential",
    description: "A complete turnkey interior execution. We handled everything from custom woodwork to premium modular kitchen installations, delivering a sophisticated, highly functional living space tailored exactly to the client's vision.",
    images: [
      { id: "h1", src: premiumCarpentry, category: "Residential · Carpentry", title: "Custom Wardrobe Integration" },
      { id: "h2", src: wapp1, category: "Residential · Living Room", title: "Main Living Area" },
      { id: "h3", src: kitchen, category: "Residential · Kitchen Work", title: "Modular Kitchen Layout" },
      { id: "h4", src: wapp3, category: "Residential · Kitchen Work", title: "Countertop Details" },
    ]
  },
  {
    id: "hyderabad-suncity",
    name: "Modern Villa Upgrades",
    location: "Hyderabad, Sun City",
    type: "Residential",
    description: "A breathtaking residential villa project encompassing structural exterior modifications and high-end interior styling. We executed intricate cove lighting profiles and exquisite bathroom fittings to create a true luxury experience.",
    images: [
      { id: "sc1", src: bengaluruVilla, category: "Residential · Facade", title: "Villa Exterior Facade" },
      { id: "sc2", src: livingroom, category: "Residential · Living Area", title: "Open Plan Lounge" },
      { id: "sc3", src: lights, category: "Residential · Lighting Details", title: "Cove & Profile Lighting" },
    ]
  },
  {
    id: "hyderabad-madhapur",
    name: "Corporate Tech Hub",
    location: "Hyderabad, Madhapur",
    type: "Commercial",
    description: "A fast-paced commercial office build in Madhapur's tech corridor. Our team was responsible for the full electrical layout, seamless workstation integration, and creating a dynamic, productive environment with an ultra-modern corporate aesthetic.",
    images: [
      { id: "mp1", src: noidaOffice, category: "Commercial · Office", title: "Main Workspace Area" },
      { id: "mp2", src: p3, category: "Commercial · Workstation", title: "Manager & Executive Cabin" },
      { id: "mp3", src: elec3, category: "Commercial · Electrical", title: "Main Distribution Board Setup" },
    ]
  },
  {
    id: "hyderabad-masabtank",
    name: "High-Rise Apartment",
    location: "Hyderabad, Masab Tank",
    type: "Residential",
    description: "An elegant high-rise apartment focusing heavily on living and dining flows. We successfully executed extensive civil works to open up the floor plan and laid exquisite marble tiling throughout the residence.",
    images: [
      { id: "mt1", src: wapp4, category: "Residential · Living Room", title: "Lounge Seating" },
      { id: "mt2", src: dining, category: "Residential · Dining", title: "Dining Setup" },
      { id: "mt3", src: tiles, category: "Residential · Tile Work", title: "Premium Marble Floor Laying" },
    ]
  },
  {
    id: "hyderabad-ameerpet",
    name: "Heritage Home Renovation",
    location: "Hyderabad, Ameerpet",
    type: "Residential",
    description: "We renovated a classic home to modern standards without losing its charm. This project required intensive backend plumbing works and meticulous putty finishing to achieve flawless, smooth walls.",
    images: [
      { id: "ap1", src: plumbing, category: "Residential · Plumbing Works", title: "Concealed Pipe Routing" },
      { id: "ap2", src: bathroom, category: "Residential · Bathroom", title: "Luxury Bath Fittings" },
      { id: "ap3", src: putty, category: "Residential · Putty Work", title: "Wall Smoothing & Preparation" },
    ]
  },
  {
    id: "hyderabad-rayadurg",
    name: "Smart Home Implementation",
    location: "Hyderabad, Rayadurg",
    type: "Residential",
    description: "A highly technical interior project where the core focus was integrating smart home automation. We laid down extensive concealed electrical looping and created stunning interior focal points.",
    images: [
      { id: "ry1", src: elec1, category: "Residential · Electrical Looping", title: "Concealed Conduit Routing" },
      { id: "ry2", src: elec2, category: "Residential · Electrical Details", title: "Wall Chase Wiring" },
      { id: "ry3", src: p1, category: "Residential · Interior Designing", title: "Overall Aesthetic" },
    ]
  },
  {
    id: "hyderabad-pk-boutique",
    name: "Boutique Retail Store",
    location: "Hyderabad, SR Nagar",
    type: "Commercial",
    description: "A retail showroom designed for luxury items. We focused heavily on the visual impact using custom carpentry for display units and flawless interior styling to attract high-end clientele.",
    images: [
      { id: "pk1", src: boutiqueShowroom, category: "Commercial · Showroom Details", title: "Display Accents" },
      { id: "pk2", src: wapp6, category: "Commercial · Lighting", title: "Showroom Ceiling Lights" },
      { id: "pk3", src: p2, category: "Commercial · Interior Designing", title: "Store Layout Flow" },
    ]
  },
  {
    id: "hyderabad-turnkey-duplex",
    name: "Turnkey Duplex Finish",
    location: "Hyderabad, Banjara Hills",
    type: "Residential",
    description: "A bare-shell duplex transformed into a masterpiece. Our scope covered everything from the initial chipping and structural plastering to the final coats of primer and premium paint.",
    images: [
      { id: "td1", src: chipping, category: "Residential · Civil Works", title: "Chipping & Plastering Phase" },
      { id: "td2", src: primer, category: "Residential · Painting", title: "Primer Application" },
      { id: "td3", src: bedroom, category: "Residential · Bedroom", title: "Finished Master Bedroom" },
    ]
  },
  {
    id: "hyderabad-lbnagar-penthouse",
    name: "Penthouse Interiors",
    location: "Hyderabad, LB Nagar",
    type: "Residential",
    description: "An ultra-luxurious penthouse execution. We transformed the raw structural space into a stunning living environment featuring rich wood paneling, elegant dining flows, and impeccable finishing.",
    images: [
      { id: "ph1", src: stagesHero, category: "Residential · Raw to Finish", title: "Project Overview" },
      { id: "ph2", src: wapp5, category: "Residential · Carpentry", title: "Wood Finishing Details" },
    ]
  },
  {
    id: "hyderabad-miyapur-suite",
    name: "Executive Suite Buildout",
    location: "Hyderabad, Miyapur",
    type: "Commercial",
    description: "A high-end commercial executive suite designed for privacy and luxury. Our team managed the intricate civil modifications and delivered a pristine, quiet workspace with premium aesthetics.",
    images: [
      { id: "es1", src: p3, category: "Commercial · Office", title: "Executive Workspace" },
      { id: "es2", src: elec3, category: "Commercial · Electrical", title: "Data & Power Integration" },
    ]
  }
];

// Flat list for preview strips
export const allProjectImagesFlat: GalleryImage[] = allProjects.flatMap(p => p.images);

export function getProjectPreviewImages(count: number): GalleryImage[] {
  return allProjectImagesFlat.slice(0, Math.min(count, allProjectImagesFlat.length));
}
