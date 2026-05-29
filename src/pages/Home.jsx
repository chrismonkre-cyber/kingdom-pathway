import { Link } from "react-router-dom";
import { IMAGES } from "../lib/images";
import { BookOpen, Flame, Compass, Sun } from "lucide-react";

const FEATURES = [
  { icon: BookOpen, title: "Scripture for the Journey", desc: "God's Word to light your path, whatever season you're in." },
  { icon: Flame, title: "Prayer for Your Season", desc: "Spirit-filled prayers to guide your heart and strengthen your faith." },
  { icon: Compass, title: "Kingdom Direction", desc: "Clear, practical next steps rooted in biblical truth." },
  { icon: Sun, title: "Daily Next Steps", desc: "Fresh encouragement every day to keep you moving forward." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={IMAGES.home} alt="" className="hidden md:block w-full h-full object-cover object-center" />
          <img src={IMAGES.homeMobile} alt="" className="md:hidden w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center pt-20 pb-16">
          <img
            src={IMAGES.logo}
            alt="Kingdom Mandate Ministry"
            className="h-20 w-20 rounded-full object-cover border-2 border-primary/50 shadow-xl shadow-primary/20 mx-auto mb-6"
          />
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4 drop-shadow-lg">
            Kingdom Pathway
          </h1>
          <p className="font-heading text-xl sm:text-2xl text-foreground/90 mb-6 italic drop-shadow-md">
            Find your next step. Follow the fire. Walk in the power of God.
          </p>
          <p className="font-body text-base sm:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Wherever you are right now, God has a next step. Choose your pathway and receive
            Scripture, prayer, declaration, and Spirit-filled direction for the journey ahead.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link to="/pathways" className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg shadow-lg shadow-primary/30 hover:brightness-110 transition-all">
              Start Your Pathway
            </Link>
            <Link to="/pathways" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-primary/40 text-foreground font-body font-semibold rounded-lg hover:bg-primary/20 transition-all">
              Choose Where You Are
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/daily-step" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-primary/40 text-foreground font-body font-semibold rounded-lg hover:bg-primary/20 transition-all">
              Take Today's Step
            </Link>
            <Link to="/journal" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-primary/40 text-foreground font-body font-semibold rounded-lg hover:bg-primary/20 transition-all">
              Journal The Journey
            </Link>
            <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-primary/40 text-foreground font-body font-semibold rounded-lg hover:bg-primary/20 transition-all">
              Partner / Sow
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-4">
            Your Journey Awaits
          </h2>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Every pathway is built to meet you where you are and move you forward in faith.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-card/80 backdrop-blur-sm border border-primary/15 rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}