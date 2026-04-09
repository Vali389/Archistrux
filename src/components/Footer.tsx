import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ArchiStrux Logo" className="h-10 w-auto" />
              <div>
                <span className="text-gold-gradient font-display text-lg font-bold block">ArchiStrux</span>
                <span className="text-muted-foreground text-xs tracking-widest uppercase">Engineering & Interiors</span>
              </div>
            </div>
            <p className="text-muted-foreground text-base leading-[1.6]">
              Delivering high-quality construction, architectural design, and interior solutions with precision and professionalism.
            </p>
          </div>

          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-bold mb-6 tracking-tight">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-bold mb-6 tracking-tight">Services</h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <span>Residential Construction</span>
              <span>Commercial Buildings</span>
              <span>Interior Design</span>
              <span>Architectural Planning</span>
              <span>Renovation & Remodeling</span>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-display text-base md:text-[17px] font-bold mb-6 tracking-tight">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <span>info@archistrux.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 ArchiStrux Engineering & Interiors Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
