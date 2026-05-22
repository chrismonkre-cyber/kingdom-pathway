import { ExternalLink, BookOpen, Clock, Heart } from "lucide-react";
import PageHero from "../components/PageHero";

const RESOURCES_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/ed9c62524_5resources-kingdom-books.png";
const PAYPAL_URL = "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com&currency_code=USD";

const RESOURCES = [
  { name: "The Bible Companion", desc: "A free Scripture companion for daily encouragement and Bible engagement.", url: "https://thebiblecompanion.online" },
  { name: "Kingdom Prayer Wall", desc: "Submit a prayer request, stand with others, and celebrate answered prayer.", url: "https://prayer.kingdommandateministry.com" },
  { name: "Kingdom Fire Companion", desc: "Scripture, prayer, declarations, and daily breakthrough.", url: "https://fire.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", desc: "Visit the ministry home base for updates, resources, giving, and contact.", url: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch daily encouragement and Spirit-filled Scripture videos.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
];

const WORKBOOKS = [
  "7-Day Peace Pathway",
  "7-Day Healing Pathway",
  "7-Day Breakthrough Pathway",
  "30-Day Kingdom Growth Journey",
];

const cardStyle = {
  background: "linear-gradient(135deg, rgba(52,8,16,0.92) 0%, rgba(28,4,10,0.96) 100%)",
  border: "1px solid rgba(205,132,28,0.35)",
  backdropFilter: "blur(18px)",
  boxShadow: "0 0 22px rgba(120,28,8,0.18), 0 6px 32px rgba(0,0,0,0.70), inset 0 1px 0 rgba(225,162,36,0.12)",
};

export default function Resources() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${RESOURCES_BG})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,2,1,0.28) 0%, rgba(5,2,1,0.55) 35%, rgba(5,2,1,0.72) 100%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero title="Continue the Journey" subtitle="Connect with the Kingdom Mandate Ministry ecosystem and deepen your walk." compact showBg={false} />

        <section className="px-4 pb-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                className="block rounded-xl p-5 transition-all duration-300 no-underline" style={cardStyle}
                onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(238,165,35,0.58)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(205,132,28,0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div className="flex items-start gap-3">
                  <BookOpen size={20} style={{ color: "#ffe44a", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1" style={{ color: "#ffe44a" }}>{r.name}</h3>
                    <p className="text-amber-100/78 text-xs leading-relaxed mb-2">{r.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-heading" style={{ color: "#d09848" }}>
                      Visit <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Partner / Sow */}
        <section className="px-4 pb-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl p-6 text-center" style={{ ...cardStyle, border: "1px solid rgba(228,152,30,0.45)", boxShadow: "0 0 36px rgba(185,82,10,0.24), 0 6px 28px rgba(0,0,0,0.72)" }}>
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: "#ffe44a" }}>Partner With the Ministry</h3>
              <p className="text-amber-100/78 text-sm mb-5 max-w-md mx-auto">Support the work of advancing the Kingdom through The Holy Spirit, Healing, and Power.</p>
              <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 font-heading rounded-lg transition-all"
                style={{ background: "linear-gradient(135deg, #c97a10, #f7cc45, #c97a10)", color: "#160800", fontWeight: 700, boxShadow: "0 0 22px rgba(210,145,10,0.44), 0 4px 15px rgba(0,0,0,0.5)" }}>
                <Heart size={16} /> Partner / Sow
              </a>
            </div>
          </div>
        </section>

        {/* Workbooks Coming Soon */}
        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-center mb-2" style={{ color: "#ffe44a", textShadow: "0 0 30px rgba(255,210,30,0.70), 0 2px 10px rgba(0,0,0,0.95)" }}>Pathway Workbooks Coming Soon</h2>
            <p className="text-amber-100/65 text-center mb-8 text-sm">Premium guided workbooks to take your spiritual journey deeper.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WORKBOOKS.map((w) => (
                <div key={w} className="rounded-xl p-5 text-center" style={cardStyle}>
                  <Clock size={20} style={{ color: "rgba(210,138,22,0.60)", margin: "0 auto 8px" }} />
                  <h3 className="font-heading text-sm font-bold mb-3" style={{ color: "#ffe44a" }}>{w}</h3>
                  <span className="inline-block px-4 py-1.5 font-heading text-xs rounded-lg" style={{ border: "1px solid rgba(192,118,22,0.30)", color: "rgba(210,148,55,0.75)" }}>
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}