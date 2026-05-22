import { Heart } from "lucide-react";

const KMM_LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/55003ad81_logopng.png";
const PAYPAL_URL = "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com&currency_code=USD";

const LINKS = [
  { label: "Main Site", url: "https://kingdommandateministry.com" },
  { label: "Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire", url: "https://fire.kingdommandateministry.com" },
  { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-background/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <img src={KMM_LOGO} alt="KMM" className="w-12 h-12 rounded-full mx-auto mb-4 ring-1 ring-primary/30" />
        <a
          href={PAYPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 font-heading text-sm rounded-lg mb-6 transition-all"
          style={{ border: "1px solid rgba(180,100,20,0.40)", color: "#d4944a", background: "rgba(80,20,5,0.25)" }}
        >
          <Heart size={14} /> Partner / Sow
        </a>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6">
          {LINKS.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          © 2026 Kingdom Mandate Ministry | Built by the Glory of GOD, for the Grace of GOD
        </p>
      </div>
    </footer>
  );
}