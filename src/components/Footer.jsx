import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../lib/resourceData";
import { IMAGES } from "../lib/images";

export default function Footer() {
  return (
    <footer className="relative bg-black/80 backdrop-blur-lg border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={IMAGES.logo}
            alt="Kingdom Mandate Ministry"
            className="h-14 w-14 rounded-full object-cover border border-primary/40 mb-3"
          />
          <h3 className="font-heading text-xl font-bold text-primary mb-1">
            Kingdom Pathway
          </h3>
          <p className="text-foreground/60 font-body text-sm text-center">
            Find your next step. Follow the fire. Walk in the power of God.
          </p>
        </div>

        {/* Links grid */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10">
          {FOOTER_LINKS.map((link) =>
            link.url.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.url}
                className="text-foreground/70 hover:text-primary text-sm font-body transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary text-sm font-body transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/15 pt-6">
          <p className="text-center text-foreground/50 text-xs font-body">
            © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
          </p>
        </div>
      </div>
    </footer>
  );
}