import type { LucideIcon } from "lucide-react";
import { ClipboardList, FlaskConical, Home, Layers, Palette, Ruler } from "lucide-react";

export type ServiceSlug =
  | "interior-designing"
  | "project-management"
  | "design-drafting"
  | "revit"
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
  /** Optional lead under “Scope & deliverables” heading (e.g. accreditation summary). */
  scopeDeliverablesIntro?: string;
  /** Optional heading override for the scope section. */
  scopeSectionTitle?: string;
  /** Optional subtitle override for the scope section. */
  scopeSectionSubtitle?: string;
  /**
   * Optional cards shown only in “Scope & deliverables” (About / key features still use `whatWeOffer`).
   */
  scopeDeliverablesCards?: OfferCard[];
  /** Hide the fixed “Scope & deliverables” h2 + rule (still show optional scope titles/cards below). */
  hideScopeDeliverablesLabel?: boolean;
  /** When true, Scope & deliverables renders checklist-style rows (primary check icon). */
  scopeOffersChecklist?: boolean;
  whyItMatters: string;
  heroImage: string;
  /** Extra visuals for the detail page (full-width strip + cards) */
  galleryImages: [string, string, string];
  icon: LucideIcon;
  /** Five steps for the “Our process” timeline on service detail */
  processSteps: [string, string, string, string, string];
  /**
   * When set, detail page shows stacked cards with subtitles (fade-up) instead of the horizontal timeline.
   * Strings align 1:1 with `processSteps`.
   */
  processStepDescriptions?: readonly [string, string, string, string, string];
  /** Quick highlights shown on the detail page */
  atAGlance: [string, string, string];
  /** Omit the “About this service” + gallery split — lead straight into Scope (e.g. lab page). */
  hideAboutSplit?: boolean;
}

/** Shown on home — 4 most requested services */
export const POPULAR_SERVICE_SLUGS: ServiceSlug[] = [
  "interior-designing",
  "project-management",
  "design-drafting",
  "revit",
];

export const servicesList: ServiceDefinition[] = [
  {
    slug: "interior-designing",
    title: "Interior Designing",
    summary: "Aesthetic, functional interiors tailored to your lifestyle and budget.",
    tagline: "Designing Spaces That Reflect Your Lifestyle",
    description:
      "We create interiors that are appealing, practical, and aligned to how you live or work — balancing aesthetics, ergonomics, and budget with a clear deliverables roadmap.",
    additionalContent: [
      "Across residential and commercial projects we align zoning, circulation, lighting, materials, and services interfaces early — so approvals, procurement, and site execution stay coordinated and rework stays minimal.",
      "You receive documented milestones — concepts, finalized drawings, selections, and site sign-offs — so decisions are traceable from design intent through handover.",
    ],
    whatWeOffer: [
      {
        title: "Discovery & spatial planning",
        description: "Site assessment, zoning, circulation, storage, and layouts tuned to occupancy and ergonomics.",
      },
      {
        title: "Concepts & material direction",
        description: "Mood, palette, finishes, and hardware coordination aligned with maintenance expectations.",
      },
      {
        title: "Detailed drawings & documentation",
        description: "Joinery elevations, specs, schedules, and GFC-aligned packages for approvals and quoting.",
      },
      {
        title: "Visualization & stakeholder sign-off",
        description: "3D views where needed so approvals happen before buys and fabrication.",
      },
      {
        title: "Procurement coordination",
        description: "BOQ-aligned selections, comparisons, vendor alignment, and sample validation.",
      },
      {
        title: "Supervision until handover",
        description: "Site visits, snag lists, quality checkpoints, documentation, and final finish close-out.",
      },
    ],
    whyItMatters:
      "A coherent interior lifts daily comfort, reinforces brand for commercial spaces, and protects asset value.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: Palette,
    processSteps: ["Consultation & brief", "Concept design", "Drawings & materials", "Execution support", "Handover"],
    processStepDescriptions: [
      "We align goals, budgets, timelines, constraints, approvals path, stakeholder roles — and baseline measurements for planning.",
      "Narrow to decision-ready palettes, furnishings, layering of light — with samples and reviews before detailing.",
      "GFC-aligned plans, elevations, joinery details, specs, schedules, and coordination inputs for quotations and approvals.",
      "Structured site rhythm: mock-ups, snag tracking, substitutions documentation, QA checkpoints aligned to drawings.",
      "Documentation pack, snag closure walkthroughs, warranties, and training so the space is ready to operate.",
    ],
    atAGlance: ["Deliverables mapped to milestones", "Selections before buys", "Documented approvals"],
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
    slug: "revit",
    title: "Revit & BIM Modeling",
    summary: "Parametric Revit models, sheets, and coordinated BIM deliverables for design and site teams.",
    tagline: "Coordinated Models from Concept to Construction",
    description:
      "We build and maintain intelligent Revit models that align architecture, interiors, and coordination needs. Deliverables are structured for clarity—views, sheets, and schedules that contractors and consultants can rely on during execution.",
    additionalContent: [
      "BIM is most valuable when the model stays disciplined: shared coordinates, consistent families, and revision history that everyone can trace. We organize templates, view templates, and sheet sets so approvals and site queries move faster—with fewer ambiguous redraws.",
      "Where projects require interior-heavy scopes, we model finishes, ceilings, and joinery with LOD appropriate to procurement and site marking—keeping 2D exports and 3D coordination traceable to the same source of truth.",
    ],
    whatWeOffer: [
      {
        title: "Architectural & interior Revit modeling",
        description: "Walls, levels, rooms, ceilings, and interior build-ups modeled for coordination.",
      },
      {
        title: "Working drawings from the model",
        description: "Plans, elevations, sections, and details issued from consistent views and revision control.",
      },
      {
        title: "Schedules & quantification support",
        description: "Door/window/finish schedules and tagged elements to support BOQ alignment.",
      },
      {
        title: "Coordination-ready exports",
        description: "Navis-friendly handoffs or PDF/DWG packages aligned to your project workflow.",
      },
    ],
    whyItMatters:
      "A coordinated Revit model reduces clashes, speeds up approvals, and gives your site team a single reliable reference through construction.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1487958449943-2427e8be8625?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581092160607-ee22621ddc91?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    ],
    icon: Layers,
    processSteps: ["Template & standards", "Model build", "Documentation", "Review & issue", "Site support"],
    atAGlance: ["Disciplined Revit standards", "Model-led sheets & schedules", "Coordination-ready outputs"],
  },
  {
    slug: "material-testing",
    title: "Laboratory (NABL)",
    hideAboutSplit: true,
    scopeSectionTitle: "Laboratory (NABL)",
    scopeSectionSubtitle: "NABL-accredited material & environmental testing",
    summary: "NABL-accredited material & environmental testing backed by calibrated instrumentation and disciplined procedures.",
    tagline: "NABL-accredited material & environmental testing",
    description:
      "Our NABL-accredited lab supports infrastructure and real-estate projects with reliable material, geotechnical and environmental testing — backed by trained chemists and calibrated instrumentation.",
    additionalContent: [
      "Sampling and testing programmes are referenced to recognised standards where applicable — so findings are repeatable, comparable across lots, and defensible during audits or dispute resolution.",
      "When deviations occur we provide practical interpretation plus options for corrective action, re-test, substitution, or conditional use — with transparency on assumptions and uncertainty.",
    ],
    scopeOffersChecklist: true,
    scopeDeliverablesIntro:
      "Our NABL-accredited laboratory supports infrastructure and real-estate projects with reliable material, geotechnical, and environmental testing — backed by trained chemists and calibrated instrumentation. Deliverables follow ISO/IEC 17025–aligned quality systems, traceable calibration, documented methods, and reports you can rely on for compliance, tenders, and audit trails.",
    whatWeOffer: [
      {
        title: "Material Testing (Concrete, Steel, Soil)",
        description: "Strength, conformity, and quality checks for structural and pavement inputs aligned to prescribed codes and specifications.",
      },
      {
        title: "Geotechnical Investigations",
        description: "Field and lab studies to characterize subsurface behaviour and support safe foundation recommendations.",
      },
      {
        title: "Environmental Testing (Water, Soil)",
        description: "Chemical and physical parameters assessed for occupational, environmental, compliance, and risk mitigation needs.",
      },
      {
        title: "Quality Control & Compliance",
        description: "Documented QA/QC checkpoints, calibration traceability hooks, audit-friendly records, milestone reporting.",
      },
      {
        title: "Non-Destructive Testing (NDT)",
        description: "In-situ evaluations of concrete and steel continuity without sacrificing structural continuity during inspection cycles.",
      },
      {
        title: "Mix Design & Cube Testing",
        description: "Performance-oriented mix optimisation plus cube strength regimes for predictable durability envelopes.",
      },
    ],
    whyItMatters:
      "Testing gives you repeatable evidence for compliance, lowers rework risk, and protects structural performance over the asset lifecycle.",
    heroImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621ddc91?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: FlaskConical,
    processSteps: ["Test programme", "Sampling", "Lab testing", "Reporting", "Advisory"],
    processStepDescriptions: [
      "Scope, frequencies, specimen matrix, specimen conditioning windows, witnessing requirements, liaison with site QC — locked before sampling begins.",
      "Field sampling per IS / ASTM and project supplemental specifications.",
      "Calibrated instrumentation, disciplined chain-of-custody, repeatable analyst protocols.",
      "NABL-aligned test certificates with clear conformance statements tied to contractual limits.",
      "Interpretive commentary plus corrective sequencing guidance when outliers appear.",
    ],
    atAGlance: ["NABL-aligned reporting", "Calibrated instrumentation", "Audit-friendly records"],
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
