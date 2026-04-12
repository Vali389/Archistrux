import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/data/company";

const shell = (title: string, children: React.ReactNode) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-foreground mb-8 tracking-tight">{title}</h1>
      <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        <Link to="/" className="text-primary hover:underline">
          Back to home
        </Link>
      </p>
    </main>
    <Footer />
  </div>
);

export const PrivacyPolicy = () =>
  shell(
    "Privacy policy",
    <>
      <p>
        {COMPANY.legalName} (“we”, “us”) respects your privacy. This policy explains what information we may collect when
        you use our website or contact us, how we use it, and your choices.
      </p>
      <p>
        <strong className="text-foreground">Information we collect:</strong> details you submit through forms (name, email,
        phone, project notes), technical logs required to operate the site, and communication records needed to respond
        to enquiries.
      </p>
      <p>
        <strong className="text-foreground">How we use information:</strong> to respond to requests, schedule
        consultations, improve our services, and meet legal obligations. We do not sell your personal data.
      </p>
      <p>
        <strong className="text-foreground">Retention:</strong> we retain enquiry data only as long as needed for project
        discussions or as required by law.
      </p>
      <p>
        <strong className="text-foreground">Contact:</strong> for privacy questions, email {COMPANY.email} or call{" "}
        {COMPANY.phoneDisplay}.
      </p>
    </>,
  );

export const TermsOfService = () =>
  shell(
    "Terms of service",
    <>
      <p>
        By using this website, you agree to these terms. Content is provided for general information and does not constitute
        a binding quotation unless confirmed in writing by {COMPANY.legalName}.
      </p>
      <p>
        <strong className="text-foreground">Intellectual property:</strong> text, visuals, and branding on this site are
        owned by or licensed to us and may not be copied without permission.
      </p>
      <p>
        <strong className="text-foreground">Limitation:</strong> we are not liable for indirect losses arising from use of
        the site. Project-specific liability is governed by executed contracts.
      </p>
      <p>
        <strong className="text-foreground">Governing law:</strong> India. Disputes subject to courts at Hyderabad,
        Telangana, unless otherwise agreed in a signed agreement.
      </p>
    </>,
  );

export const FAQ = () =>
  shell(
    "Frequently asked questions",
    <>
      <p>
        <strong className="text-foreground">What services do you provide?</strong> Interior designing, project management,
        design & drafting, material testing, and property valuation—plus integrated coordination across these workstreams.
      </p>
      <p>
        <strong className="text-foreground">Do you work outside Hyderabad?</strong> Yes, depending on scope and resource
        availability. Discuss your location during consultation.
      </p>
      <p>
        <strong className="text-foreground">How do you price projects?</strong> We prepare transparent estimates and BOQs
        aligned to drawings and specifications—no surprise “ballpark” commitments without scope clarity.
      </p>
      <p>
        <strong className="text-foreground">How fast can you start?</strong> Timelines depend on scope, approvals, and
        current pipeline. We’ll share a realistic schedule after understanding your requirements.
      </p>
    </>,
  );

export const SiteMapPage = () =>
  shell(
    "Sitemap",
    <>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>
          <Link className="text-primary hover:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/services">
            Services
          </Link>
          <ul className="list-circle pl-5 mt-2 space-y-1">
            <li>
              <Link className="text-primary hover:underline" to="/services/interior-designing">
                Interior designing
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/services/project-management">
                Project management
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/services/design-drafting">
                Design & drafting
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/services/material-testing">
                Material testing
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/services/property-valuation">
                Property valuation
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/careers">
            Careers
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/privacy-policy">
            Privacy policy
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/terms">
            Terms of service
          </Link>
        </li>
        <li>
          <Link className="text-primary hover:underline" to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
    </>,
  );
