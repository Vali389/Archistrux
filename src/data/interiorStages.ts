import {
  Ruler,
  Palette,
  FileText,
  Hammer,
  Zap,
  Grid,
  Brush,
  MonitorUp,
  PaintBucket,
  PaintRoller,
  Wrench,
  Droplet,
  Lightbulb,
  BoxSelect,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import electricalImg from "@/assets/electrical-looping.png";
import plumbingImg from "@/assets/plumbing-works.png";
import chippingImg from "@/assets/chipping-plastering.png";
import puttyImg from "@/assets/putty-work.png";
import primerImg from "@/assets/primer-work.png";
import lightsImg from "@/assets/lights-profiles.png";

import electricalGallery2Img from "@/assets/electrical-gallery2.png";
import electricalGallery3Img from "@/assets/electrical-gallery3.png";
import tilesHeroImg from "@/assets/tiles-hero.png";

export interface InteriorStage {
  id: number;
  slug: string;
  title: string;
  description: string;
  detailedExplanation: string[];
  icon: LucideIcon;
  heroImage: string;
  galleryImages: string[];
}

export const interiorStages: InteriorStage[] = [
  {
    id: 1,
    slug: "measurements",
    title: "Measurements",
    description: "Precise on-site measurements to ensure every millimeter is accounted for in our planning.",
    detailedExplanation: [
      "The first and most critical step in any successful interior project is taking highly accurate on-site measurements. Our team visits the raw site armed with laser distance meters and precise tools.",
      "We document every structural element, including existing columns, beams, window sills, and ceiling heights. This guarantees that all subsequent 2D planning and 3D modeling are perfectly aligned with reality, eliminating costly rework down the line."
    ],
    icon: Ruler,
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 2,
    slug: "design-selection",
    title: "Design Selection",
    description: "Curating themes, materials, and layouts that perfectly align with your vision and lifestyle.",
    detailedExplanation: [
      "During the design selection phase, we collaborate closely with you to finalize the aesthetic and functional blueprint of your space.",
      "We present mood boards, material samples (from laminates to stone finishes), and color palettes. Once the overarching theme is approved, we translate these choices into detailed 3D renders so you can visualize exactly how your future space will look before execution begins."
    ],
    icon: Palette,
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 3,
    slug: "quotation",
    title: "Quotation",
    description: "Transparent, detailed cost estimates and BOQ for all approved designs and scopes.",
    detailedExplanation: [
      "Transparency is a core value. Once the design is locked in, we generate a comprehensive Bill of Quantities (BOQ).",
      "This document breaks down the costs of every single material, labor requirement, and finishing touch. By aligning the quotation precisely with the approved design, we ensure there are no hidden surprises during the execution phase."
    ],
    icon: FileText,
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 4,
    slug: "civil-works",
    title: "Civil Works",
    description: "Safe demolition, wall modifications, and structural adjustments to fit the new design.",
    detailedExplanation: [
      "The physical transformation begins here. If the design requires expanding rooms or altering the kitchen layout, we safely execute the necessary demolition.",
      "This stage also includes building new partition walls, brickwork, and making sure the raw canvas is perfectly configured to accept the new spatial arrangement."
    ],
    icon: Hammer,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 5,
    slug: "electrical-looping",
    title: "Electrical Looping",
    description: "Laying out internal wiring, conduits, and circuits to support modern power needs.",
    detailedExplanation: [
      "Before walls are finished, our certified electricians lay out the entire nervous system of your home.",
      "We install fire-retardant conduits and loop the wiring to ensure that every switch, socket, and smart home feature has robust, safe, and hidden power delivery exactly where it is needed."
    ],
    icon: Zap,
    heroImage: electricalImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      electricalGallery2Img,
      electricalGallery3Img,
    ]
  },
  {
    id: 6,
    slug: "plumbing-works",
    title: "Plumbing Works",
    description: "Setting up provisions for plumbing early on to ensure seamless integration.",
    detailedExplanation: [
      "Parallel to electrical work, plumbing provisions are made. This involves laying out the concealed piping for bathrooms, kitchens, and utility areas.",
      "We use high-pressure tested UPVC and CPVC pipes to guarantee leak-free performance, carefully positioning inlets and outlets to align with your chosen sanitaryware and fixtures."
    ],
    icon: Droplet,
    heroImage: plumbingImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 7,
    slug: "tiles",
    title: "Tiles",
    description: "Precision laying of flooring and wall tiles with flawless grouting and alignment.",
    detailedExplanation: [
      "With the core services concealed, we begin the tiling process. Whether it's large-format Italian marble, vitrified tiles, or intricate backsplashes, precision is key.",
      "Our masons ensure perfect leveling, seamless joints, and epoxy grouting, providing a durable and visually stunning foundation for your rooms."
    ],
    icon: Grid,
    heroImage: tilesHeroImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 8,
    slug: "chipping-plastering",
    title: "Chipping & Plastering",
    description: "Concealing electrical points and plumbing provisions followed by smooth plastering.",
    detailedExplanation: [
      "After the conduits and pipes are laid, the chases carved into the walls must be sealed.",
      "We meticulously fill and plaster over all the chipped areas. We ensure the plaster cures correctly, restoring the structural integrity and providing a completely level surface across all walls."
    ],
    icon: Brush,
    heroImage: chippingImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 9,
    slug: "ceiling",
    title: "Ceiling",
    description: "Erecting false ceilings, bulkheads, and coves to define spaces and conceal services.",
    detailedExplanation: [
      "A well-designed ceiling elevates the entire room. We construct sturdy metal framing to support gypsum or POP false ceilings.",
      "This stage not only defines architectural features like coves and drops but also intelligently hides ceiling-mounted AC ducting and ambient lighting fixtures."
    ],
    icon: MonitorUp,
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 10,
    slug: "putty-work",
    title: "Putty Work",
    description: "Applying multiple coats of putty to achieve an impeccably smooth base.",
    detailedExplanation: [
      "To prepare for painting, our team applies 2-3 layers of high-grade wall putty. This crucial step eliminates any minor undulations or micro-cracks in the plaster.",
      "The walls are subsequently sanded down using mechanised sanders to achieve a glass-like finish, ensuring the final paint application is utterly flawless."
    ],
    icon: PaintBucket,
    heroImage: puttyImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 11,
    slug: "primer",
    title: "Primer",
    description: "Sealing the putty with high-quality primer to ensure final paint adheres perfectly.",
    detailedExplanation: [
      "Before the final color coats are applied, the smoothened walls receive a coat of premium primer.",
      "The primer seals the porous putty, enhances the adhesion of the paint, and ensures that the true color of the final coats shines through with vibrancy and longevity."
    ],
    icon: PaintRoller,
    heroImage: primerImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 12,
    slug: "carpentry-works",
    title: "Carpentry Works",
    description: "Crafting bespoke wardrobes, modular kitchens, and custom joinery.",
    detailedExplanation: [
      "This is where the interiors truly start taking shape. Our master carpenters begin assembling modular units and custom joinery on-site.",
      "From sleek kitchen cabinets to built-in wardrobes and feature wall paneling, we use premium plywood, robust hardware, and exquisite laminates or veneers to match your approved 3D design."
    ],
    icon: Wrench,
    heroImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 13,
    slug: "lights-profiles",
    title: "Lights Profiles",
    description: "Fixing LED profiles, fixtures, and ambient lighting once carpentry is done.",
    detailedExplanation: [
      "With carpentry nearing completion, we install the decorative and functional lighting elements.",
      "LED strip profiles are embedded into wardrobes and ceiling coves, pendant lights are hung over dining areas, and spotlights are directed to highlight architectural features, bringing dramatic life to the space."
    ],
    icon: Lightbulb,
    heroImage: lightsImg,
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 14,
    slug: "glass-works",
    title: "Glass Works & Panels",
    description: "Installing shower enclosures, partitions, mirrors, and decorative glass.",
    detailedExplanation: [
      "Glass brings transparency and modern elegance. In this stage, we precisely fit toughened glass for shower cubicles, balcony railings, and office partitions.",
      "We also install custom-cut mirrors, fluted glass cabinet doors, and any decorative glass paneling, ensuring absolute safety and pristine finishing."
    ],
    icon: BoxSelect,
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    id: 15,
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    description: "A thorough, professional deep clean of the entire site before final handover.",
    detailedExplanation: [
      "The final hurdle before you move in. Construction and carpentry inevitably generate dust. Our professional cleaning crew takes over to perform a deep, rigorous clean of the entire property.",
      "We remove all protective films, polish the glass and mirrors, sanitize the bathrooms, and ensure every surface is sparkling so your new space is pristine and ready to enjoy from minute one."
    ],
    icon: Sparkles,
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    ]
  }
];
