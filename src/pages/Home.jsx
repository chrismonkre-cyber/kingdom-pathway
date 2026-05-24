import { Link } from "react-router-dom";
import { BookOpen, Flame, PenLine, ArrowRight, Heart } from "lucide-react";
import EmberParticles from "../components/EmberParticles";
import GlassCard from "../components/GlassCard";

const KMM_LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/55003ad81_logopng.png";
// Uploaded: majestic lion walking on golden fire pathway
const HERO_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/c3cd68717_1home-lion-fire.png";

const HOW_IT_WORKS = [
  { step: "1", title: "Choose where you are", desc: "Select the pathway that matches your season." },
  { step: "2", title: "Receive Scripture & prayer", desc: "Let God's Word speak directly to your situation." },
  { step: "3", title: "Speak a declaration", desc: "Align your mouth with the promises of God." },
  { step: "4", title: "Take one step of obedience", desc: "Move forward with a practical action step." },
  { step: "5", title: "Journal what God is doing", desc: "Record your journey and watch God move." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Uploaded lion/fire image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%", backgroundRepeat: "no-repeat" }}
        />
        {/* Light overlay — keep the fire visible */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(5,2,1,0.12) 0%, rgba(8,3,1,0.10) 38%, rgba(5,2,1,0.30) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, rgba(5,2,1,0.18) 100%)" }} />
        {/* Edge vignette only */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 55% at 50% 100%, rgba(140,55,3,0.10) 0%, transparent 55%)" }} />
        <EmberParticles count={20} />

        <div className="relative max-w-3xl mx-auto px-4 text-center py-24 z-10">
          {/* Strong dark radial halo — keeps lion/fire visible, halos the text group for readability */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ background: "radial-gradient(ellipse 80% 85% at 50% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)", filter: "blur(18px)" }} />
          <img
            src={KMM_LOGO}
            alt="Kingdom Mandate Ministry"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-8"
            style={{ boxShadow: "0 0 70px rgba(220,130,10,0.65), 0 0 30px rgba(200,105,10,0.40), 0 6px 30px rgba(0,0,0,0.9)", border: "2px solid rgba(235,172,38,0.70)" }}
          />

          <h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wide leading-tight"
            style={{ color: "#ffe44a", fontWeight: 900, textShadow: "0 0 80px rgba(255,215,30,0.95), 0 0 40px rgba(250,165,15,0.75), 0 0 18px rgba(240,130,8,0.50), 0 4px 22px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,1)" }}
          >
            Kingdom Pathway
          </h1>

          <p
            className="text-lg md:text-xl font-heading mb-6 tracking-wider"
            style={{ color: "#eca832", textShadow: "0 2px 14px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1)" }}
          >
            Find your next step. Follow the fire. Walk in the power of God.
          </p>

          <p className="text-amber-100/90 max-w-xl mx-auto mb-10 leading-relaxed font-medium" style={{ textShadow: "0 1px 12px rgba(0,0,0,1), 0 2px 6px rgba(0,0,0,0.95)" }}>
            Wherever you are right now, God has a next step. Choose your pathway and receive Scripture, prayer, declaration, and Spirit-filled direction for the journey ahead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/pathways"
              className="w-full sm:w-auto px-7 py-3 font-heading rounded-lg transition-all flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #c97a10, #f7cc45, #c97a10)", color: "#160800", fontWeight: 700, boxShadow: "0 0 32px rgba(210,145,10,0.65), 0 4px 18px rgba(0,0,0,0.80)" }}
            >
              <Flame size={18} /> Start Your Pathway
            </Link>
            <Link
              to="/pathways"
              className="w-full sm:w-auto px-7 py-3 font-heading rounded-lg transition-all flex items-center justify-center gap-2"
              style={{ border: "1px solid rgba(235,175,42,0.65)", color: "#f7cc45", background: "rgba(0,0,0,0.50)", backdropFilter: "blur(10px)" }}
            >
              <BookOpen size={18} /> Choose Where You Are
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
            <Link
              to="/daily-step"
              className="w-full sm:w-auto px-7 py-3 font-heading rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
              style={{ border: "1px solid rgba(195,115,22,0.42)", color: "#d09848", background: "rgba(0,0,0,0.42)", backdropFilter: "blur(8px)" }}
            >
              <ArrowRight size={16} /> Take Today's Step
            </Link>
            <Link
              to="/journal"
              className="w-full sm:w-auto px-7 py-3 font-heading rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
              style={{ border: "1px solid rgba(195,115,22,0.42)", color: "#d09848", background: "rgba(0,0,0,0.42)", backdropFilter: "blur(8px)" }}
            >
              <PenLine size={16} /> Journal the Journey
            </Link>
          </div>

          <div className="mt-6">
 <a
  href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-2.5 font-heading text-sm rounded-lg transition-all"
  style={{ border: "1px solid rgba(200,120,30,0.50)", color: "#d4944a", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
>
              <Heart size={15} /> Partner / Sow
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, hsl(20,15%,5%))" }} />
      </section>

      {/* How it works */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(110,38,5,0.14) 0%, transparent 70%)" }} />
        <div className="relative max-w-5xl mx-auto">
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-3"
            style={{ color: "#f7cc45", textShadow: "0 0 32px rgba(250,190,20,0.40), 0 2px 8px rgba(0,0,0,0.85)" }}
          >
            How Kingdom Pathway Works
          </h2>
          <p className="text-amber-100/62 text-center mb-12 max-w-xl mx-auto">Five simple steps to receive direction, prayer, and power for the journey ahead.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS.map((item) => (
              <GlassCard key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(185,105,10,0.24)", border: "1px solid rgba(210,148,30,0.44)" }}>
                  <span className="font-heading text-sm" style={{ color: "#f7cc45" }}>{item.step}</span>
                </div>
                <h3 className="font-heading text-sm mb-1" style={{ color: "#f7cc45" }}>{item.title}</h3>
                <p className="text-xs text-amber-100/62 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 80% at 50% 50%, rgba(150,55,5,0.20) 0%, transparent 65%)" }} />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2
            className="font-heading text-2xl md:text-3xl mb-4"
            style={{ color: "#f7cc45", textShadow: "0 0 32px rgba(250,190,20,0.40), 0 2px 8px rgba(0,0,0,0.85)" }}
          >
            Your next step matters.
          </h2>
          <p className="text-amber-100/68 mb-8">God is not asking for perfection — He is asking for one step of faith. Take yours today.</p>
          <Link
            to="/pathways"
            className="inline-flex items-center gap-2 px-8 py-3 font-heading rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg, #c97a10, #f7cc45, #c97a10)", color: "#160800", fontWeight: 700, boxShadow: "0 0 28px rgba(210,145,10,0.50), 0 4px 16px rgba(0,0,0,0.60)" }}
          >
            Begin the Journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
