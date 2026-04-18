import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY } from "@/data/company";
import { servicesList } from "@/data/servicesContent";
import { useToast } from "@/hooks/use-toast";

const footerLinkClass =
  "group inline-flex w-fit items-center text-sm font-semibold text-zinc-300 transition-all duration-200 hover:text-amber-400 hover:translate-x-0.5 focus:outline-none focus-visible:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({ title: "Thanks for subscribing", description: "We’ll share updates and project insights soon." });
    setEmail("");
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/90 text-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-zinc-800/90">
          <div className="max-w-md">
            <div className="flex flex-nowrap items-center gap-3 mb-5 min-w-0">
              <img src={logo} alt="ArchiStrux Logo" className="h-10 w-auto shrink-0" />
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0 sm:flex-nowrap sm:items-center">
                <span className="text-gold-gradient font-display text-lg font-bold tracking-tight whitespace-nowrap">
                  {COMPANY.shortName}
                </span>
                <span className="text-zinc-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
                  Engineering & Interiors
                </span>
              </div>
            </div>
            <p className="text-zinc-300 text-base font-medium leading-[1.65] mb-3">
              {COMPANY.legalName}. {COMPANY.servicesLine}.
            </p>
            <p className="text-zinc-100 text-base md:text-[17px] font-semibold italic text-primary">{COMPANY.tagline}</p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full max-w-sm">
            <p className="text-sm font-bold text-zinc-100 mb-2 tracking-tight">Newsletter</p>
            <p className="text-zinc-400 text-sm font-medium mb-3">Occasional updates on projects and standards—no spam.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-3 py-2.5 text-sm font-medium text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-xl bg-gold-gradient px-4 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-extrabold mb-5 tracking-tight">Quick links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
                ["Careers", "/careers"],
              ].map(([label, path]) => (
                <Link key={path} to={path} className={footerLinkClass}>
                  <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-amber-400/80">
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">Follow</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 ring-1 ring-zinc-600/80 shadow-sm transition-all duration-300 hover:ring-transparent hover:bg-[#1877F2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 ring-1 ring-zinc-600/80 shadow-sm transition-all duration-300 hover:ring-transparent hover:bg-[#0077B5] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 ring-1 ring-zinc-600/80 shadow-sm transition-all duration-300 hover:ring-transparent hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-extrabold mb-5 tracking-tight">Services</h4>
            <div className="flex flex-col gap-2.5">
              {servicesList.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className={footerLinkClass}>
                  <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-amber-400/80">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-extrabold mb-5 tracking-tight">Contact</h4>
            <div className="flex flex-col gap-4 text-zinc-200 text-sm font-semibold">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="text-zinc-100 transition-colors duration-200 hover:text-amber-400 focus:outline-none focus-visible:text-amber-400"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-zinc-100 transition-colors duration-200 hover:text-amber-400 break-all focus:outline-none focus-visible:text-amber-400"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-zinc-200">{COMPANY.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-extrabold mb-5 tracking-tight">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy-policy" className={footerLinkClass}>
                <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-amber-400/80">
                  Privacy policy
                </span>
              </Link>
              <Link to="/terms" className={footerLinkClass}>
                <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-amber-400/80">
                  Terms of service
                </span>
              </Link>
              <Link to="/faq" className={footerLinkClass}>
                <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-amber-400/80">
                  FAQ
                </span>
              </Link>
              <Link to="/sitemap" className={footerLinkClass}>
                <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-amber-400/80">
                  Sitemap
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/90 mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-zinc-400 text-sm font-medium">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm font-semibold">
            <Link to="/privacy-policy" className="text-zinc-300 hover:text-amber-400 transition-colors">
              Privacy
            </Link>
            <span className="mx-2 text-zinc-600">|</span>
            <Link to="/terms" className="text-zinc-300 hover:text-amber-400 transition-colors">
              Terms
            </Link>
            <span className="mx-2 text-zinc-600">|</span>
            <Link to="/faq" className="text-zinc-300 hover:text-amber-400 transition-colors">
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
