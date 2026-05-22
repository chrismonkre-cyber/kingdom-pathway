import { useState } from "react";
import { Cross, Heart, Shield, Compass, Flame, BookOpen, Users, Target, Zap, CloudRain, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PathwayGuide from "../components/PathwayGuide";
import PATHWAYS from "../lib/pathwayData";

const ICON_MAP = { Cross, Heart, Shield, Compass, Flame, BookOpen, Users, Target, Zap, CloudRain };
const PATHWAYS_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/3baf7c9f8_2pathways-golden-road.png";

function PathwayCard({ p, onClick }) {
  const Icon = ICON_MAP[p.icon] || Flame;
  return (
    <div
      onClick={onClick}
      className="rounded-xl p-5 cursor-pointer transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(52,8,16,0.92) 0%, rgba(28,4,10,0.96) 100%)",
        border: "1px solid rgba(205,132,28,0.35)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 0 22px rgba(120,28,8,0.18), 0 6px 32px rgba(0,0,0,0.70), inset 0 1px 0 rgba(225,162,36,0.12)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.border = "1px solid rgba(238,165,35,0.60)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(185,88,10,0.30), 0 8px 36px rgba(0,0,0,0.75)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = "1px solid rgba(205,132,28,0.35)";
        e.currentTarget.style.boxShadow = "0 0 22px rgba(120,28,8,0.18), 0 6px 32px rgba(0,0,0,0.70), inset 0 1px 0 rgba(225,162,36,0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg, rgba(185,85,8,0.40), rgba(105,32,5,0.58))", border: "1px solid rgba(230,158,30,0.45)", boxShadow: "0 0 18px rgba(185,100,10,0.30)" }}>
          <Icon size={22} style={{ color: "#f7cc45", filter: "drop-shadow(0 0 7px rgba(245,170,20,0.68))" }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-base mb-1.5" style={{ color: "#ffe44a", fontWeight: 800 }}>{p.title}</h3>
          <p className="text-amber-100/80 text-sm leading-relaxed mb-3">{p.description}</p>
          <span className="inline-flex items-center gap-1.5 text-xs font-heading" style={{ color: "#d09848" }}>
            Open Pathway <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Pathways() {
  const [selected, setSelected] = useState(null);
  const data = Array.isArray(PATHWAYS) ? PATHWAYS : [];

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${PATHWAYS_BG})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
      {/* Single continuous overlay for the whole page */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,2,1,0.30) 0%, rgba(5,2,1,0.58) 40%, rgba(5,2,1,0.72) 100%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        {selected ? (
          <>
            <PageHero title={selected.title} subtitle={selected.description} compact showBg={false} />
            <div className="px-4 pb-20">
              <PathwayGuide pathway={selected} onBack={() => setSelected(null)} />
            </div>
          </>
        ) : (
          <>
            <PageHero
              title="Choose Where You Are"
              subtitle="Select the pathway that best describes your season, and step into Scripture, prayer, and Kingdom direction."
              showBg={false}
            />
            <section className="px-4 pb-20">
              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.map((p) => (
                  <PathwayCard key={p.id} p={p} onClick={() => setSelected(p)} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}