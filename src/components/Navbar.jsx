import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../lib/images";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Pathways", path: "/pathways" },
  { label: "Daily Step", path: "/daily-step" },
  { label: "Journal", path: "/journal" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={IMAGES.logo}
              alt="Kingdom Mandate Ministry"
              className="h-10 w-10 rounded-full object-cover border border-primary/40 shadow-lg shadow-primary/10"
            />
            <span className="font-heading text-lg font-bold text-primary tracking-wide hidden sm:block">
              Kingdom Pathway
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium tracking-wide transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground/90 hover:text-primary transition-colors p-2"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-primary/20">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-body font-medium transition-all ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}