import type { LucideIcon } from "lucide-react";
import { ClipboardList, FlaskConical, Home, Palette, Ruler } from "lucide-react";

export type ServiceSlug =
  | "interior-designing"
  | "project-management"
  | "design-drafting"
  | "material-testing"
  | "property-valuation";

export interface OfferCard {
  title: string;
  description: string;
}

export interface ServiceDefinition {
  slug: ServiceSlug;
  title: string;
  summary: string;
  tagline: string;
  description: string;
  /** Deeper editorial copy for detail pages (methodology, outcomes, industry context) */
  additionalContent: [string, string];
  whatWeOffer: OfferCard[];
  whyItMatters: string;
  heroImage: string;
  /** Extra visuals for the detail page (full-width strip + cards) */
  galleryImages: [string, string, string];
  icon: LucideIcon;
  /** Five steps for the “Our process” timeline on service detail */
  processSteps: [string, string, string, string, string];
  /** Quick highlights shown on the detail page */
  atAGlance: [string, string, string];
}

/** Shown on home — 4 most requested services */
export const POPULAR_SERVICE_SLUGS: ServiceSlug[] = [
  "interior-designing",
  "project-management",
  "design-drafting",
  "material-testing",
];

export const servicesList: ServiceDefinition[] = [
  {
    slug: "interior-designing",
    title: "Interior Designing",
    summary: "Aesthetic, functional interiors tailored to your lifestyle and budget.",
    tagline: "Designing Spaces That Reflect Your Lifestyle",
    description:
      "We create interiors that are both aesthetically appealing and highly functional. Our designs are tailored to your preferences, space, and budget while ensuring comfort, efficiency, and modern appeal.",
    additionalContent: [
      "Across residential and commercial projects, we align interior architecture with services routing, storage demand, and future flexibility—so spaces stay relevant as families and businesses evolve. Our process blends mood boards, material schedules, and site measurements to reduce rework during execution.",
      "We coordinate with civil, electrical, and HVAC interfaces early, avoiding clashes that typically surface only after false ceilings or flooring are fixed. The outcome is a cohesive interior language—finishes, hardware, and lighting working together—delivered with documented sign-offs at every milestone.",
    ],
    whatWeOffer: [
      {
        title: "Space planning & layout optimization",
        description: "Zoning, circulation, and furniture layouts that make everyday movement effortless.",
      },
      {
        title: "Furniture and decor selection",
        description: "Curated pieces, finishes, and palettes aligned to your taste and maintenance needs.",
      },
      {
        title: "Lighting and color concepts",
        description: "Layered lighting plans and color direction for mood, productivity, and longevity.",
      },
      {
        title: "3D design visualization",
        description: "Realistic views so you can approve details before procurement and execution.",
      },
    ],
    whyItMatters:
      "A well-designed space enhances your lifestyle, improves functionality, and increases the overall value of your property.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: Palette,
    processSteps: [
      "Consultation",
      "Concept design",
      "3D visualization",
      "Execution",
      "Handover",
    ],
    atAGlance: ["Lifestyle-led mood & materials", "3D sign-off before buy", "Site-aligned execution"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary: "Structured planning, coordination, and site supervision from start to finish.",
    tagline: "Seamless Execution from Start to Finish",
    description:
      "We take complete responsibility for managing your project efficiently. Our structured approach ensures that your project is delivered on time, within budget, and with the highest quality standards.",
    additionalContent: [
      "Modern project management for interiors and small-to-mid civil scopes depends on a single source of truth for schedule, cost, and risk. We maintain rolling lookahead plans, dependency maps, and escalation paths so decisions are made before they become delays or disputes on site.",
      "Clients receive visibility into progress versus baseline—milestone burn-down, snag closure, and variation logs—so approvals stay fast and budgets stay explainable. This discipline is what separates ad-hoc supervision from a professional delivery model you can rely on for handover.",
    ],
    whatWeOffer: [
      {
        title: "Project planning & scheduling",
        description: "Milestones, dependencies, and lookahead plans that keep trades aligned.",
      },
      {
        title: "Vendor and contractor coordination",
        description: "Single point of contact for site teams, specialists, and supply chain.",
      },
      {
        title: "Site supervision",
        description: "Regular visits, snag lists, and quality checks tied to approved drawings.",
      },
      {
        title: "Cost and budget control",
        description: "Tracked spends, variation control, and transparent reporting at every stage.",
      },
    ],
    whyItMatters:
      "Professional project management reduces delays, avoids cost overruns, and ensures smooth execution without stress.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590644360187-5693b8e6c7bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: ClipboardList,
    processSteps: [
      "Kickoff & baseline",
      "Planning & BOQ",
      "Site execution",
      "QA & snags",
      "Handover",
    ],
    atAGlance: ["Single point of contact", "Budget & milestone tracking", "Snag-to-close discipline"],
  },
  {
    slug: "design-drafting",
    title: "Design & Drafting",
    summary: "Accurate drawings and models that align design intent with site execution.",
    tagline: "Precision in Every Detail",
    description:
      "We provide accurate and detailed design and drafting services that serve as the foundation for successful project execution. Our technical drawings ensure clarity, precision, and efficiency.",
    additionalContent: [
      "Accurate drafting is the bridge between design intent and site reality. We standardize layers, naming, and revision history so consultants, contractors, and approvals authorities all work from the same coordinated set—reducing RFIs and costly rework.",
      "Our deliverables typically include GFC-level plans, elevations, sections, and detailed joinery—aligned to applicable codes and your project specifications. Where 3D is required, we keep models traceable back to 2D so site teams can implement without ambiguity.",
    ],
    whatWeOffer: [
      {
        title: "AutoCAD drawings",
        description: "Clean, layered CAD files ready for site marking and approvals.",
      },
      {
        title: "2D layouts and plans",
        description: "Furniture, services, and demolition plans with clear dimensions and legends.",
      },
      {
        title: "3D models and visualizations",
        description: "Massing and interior views to validate proportions before build.",
      },
      {
        title: "Detailed working drawings",
        description: "Joinery, elevations, and details that reduce ambiguity on site.",
      },
    ],
    whyItMatters:
      "Clear and precise drawings eliminate errors, improve communication, and ensure flawless execution on-site.",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-ecc28e0b37b2?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1487958449943-2427e8be8625?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581092160607-ee22621ddc91?auto=format&fit=crop&w=1200&q=85",
    ],
    icon: Ruler,
    processSteps: ["Survey & brief", "Drafting", "Review & coordination", "Issue GFC", "As-built support"],
    atAGlance: ["AutoCAD / GFC-ready sets", "Layered, revision-tracked files", "2D–3D coordination"],
  },
  {
    slug: "material-testing",
    title: "Material Testing",
    summary: "Verification of strength, safety, and compliance for construction materials.",
    tagline: "Ensuring Strength, Safety & Quality",
    description:
      "We conduct thorough material testing to ensure that all construction materials meet required standards for strength, durability, and safety.",
    additionalContent: [
      "Material quality directly impacts structural safety, durability, and maintenance cost. We follow structured sampling plans and reference lab/field standards so that results are comparable, repeatable, and defensible in audits or dispute scenarios.",
      "When results deviate, we help you interpret implications—whether acceptance, conditional use, rejection, or re-test—and document the decision trail. That transparency protects your timeline and your liability profile on the project.",
    ],
    whatWeOffer: [
      {
        title: "Material strength testing",
        description: "Structured sampling and lab-aligned checks for critical structural inputs.",
      },
      {
        title: "Quality analysis",
        description: "Documentation of results with clear pass/fail against specified limits.",
      },
      {
        title: "Compliance with standards",
        description: "Alignment to relevant codes and project specifications you can file with confidence.",
      },
      {
        title: "Performance evaluation",
        description: "Recommendations when substitutions or re-tests are required.",
      },
    ],
    whyItMatters:
      "Using tested and verified materials ensures long-term durability and protects your investment.",
    heroImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621ddc91?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: FlaskConical,
    processSteps: ["Test plan", "Sampling", "Lab testing & records", "Report & recommendations", "Close-out"],
    atAGlance: ["Sampling as per spec", "Lab-aligned reporting", "Pass / fail documentation"],
  },
  {
    slug: "property-valuation",
    title: "Property Valuation",
    summary: "Technical and market-informed valuations for smarter property decisions.",
    tagline: "Accurate Valuation for Smart Decisions",
    description:
      "We provide professional property valuation services based on technical analysis, market trends, and property condition to help you make informed decisions.",
    additionalContent: [
      "Sound valuation combines physical inspection, comparable evidence, and clear assumptions about highest-and-best-use. We document methodology so you can use outputs for negotiations, financing, or portfolio decisions—not just a single headline number.",
      "For commercial assets, we consider income potential, obsolescence, and micro-market liquidity. For residential, we stress test micro-location and product segment. The goal is defensible advice you can act on with confidence.",
    ],
    whatWeOffer: [
      {
        title: "Residential property valuation",
        description: "Methodical assessment for apartments, villas, and plotted homes.",
      },
      {
        title: "Commercial property valuation",
        description: "Income- and cost-based lenses where applicable for offices and retail.",
      },
      {
        title: "Market trend analysis",
        description: "Context on micro-market movement to support negotiation and timing.",
      },
      {
        title: "Investment guidance",
        description: "Clear assumptions and scenarios so decisions are not guesswork.",
      },
    ],
    whyItMatters:
      "Accurate valuation helps in buying, selling, or investing in property with confidence and clarity.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: Home,
    processSteps: ["Brief & inspection", "Data & comparables", "Analysis", "Report", "Discussion & next steps"],
    atAGlance: ["Market + asset context", "Transparent assumptions", "Decision-ready numbers"],
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return servicesList.find((s) => s.slug === slug);
}

export function getPopularServices(): ServiceDefinition[] {
  return POPULAR_SERVICE_SLUGS.map((slug) => servicesList.find((s) => s.slug === slug)).filter(
    (s): s is ServiceDefinition => Boolean(s),
  );
}
