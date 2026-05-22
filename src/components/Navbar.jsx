import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const KMM_LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/55003ad81_logopng.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/pathways", label: "Pathways" },
  { to: "/daily-step", label: "Daily Step" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: "rgba(12,4,6,0.88)", borderBottom: "1px solid rgba(180,120,20,0.25)" }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={KMM_LOGO} alt="KMM" className="w-9 h-9 rounded-full ring-1 ring-primary/40" />
          <span className="font-heading text-lg text-primary tracking-wide">Kingdom Pathway</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-all"
              style={location.pathname === l.to
              ? { color: "#f7cc45", background: "rgba(195,115,10,0.22)", border: "1px solid rgba(210,140,20,0.42)", boxShadow: "0 0 12px rgba(210,140,10,0.28)", fontWeight: 700 }
              : { color: "rgba(210,175,100,0.65)", border: "1px solid transparent" }
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 pb-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium transition-all"
              style={location.pathname === l.to
                ? { color: "#f7cc45", background: "rgba(195,115,10,0.20)", fontWeight: 700, borderLeft: "3px solid rgba(240,160,20,0.70)" }
                : { color: "rgba(210,175,100,0.65)" }
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}