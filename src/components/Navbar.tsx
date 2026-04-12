import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const isPathActive = (pathname: string, path: string) => {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ArchiStrux Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="text-gold-gradient font-display text-base md:text-lg font-bold leading-tight block tracking-tight">
                ArchiStrux
              </span>
              <span className="text-muted-foreground text-xs tracking-widest uppercase">Engineering & Interiors</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
                  isPathActive(location.pathname, link.path) ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.name}
                {isPathActive(location.pathname, link.path) && (
                  <motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-gradient" />
                )}
              </Link>
            ))}
          </div>

          <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary p-2" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-sm tracking-wider uppercase py-2 ${
                    isPathActive(location.pathname, link.path) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
