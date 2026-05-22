import { ExternalLink, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import GlassCard from "../components/GlassCard";

const ABOUT_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/f1a9fc783_6about-throne-glory.png";

const LINKS = [
  { label: "Main Ministry Site", url: "https://kingdommandateministry.com" },
  { label: "The Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" },
  { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
];

export default function About() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${ABOUT_BG})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,2,1,0.28) 0%, rgba(5,2,1,0.55) 35%, rgba(5,2,1,0.72) 100%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero title="About Kingdom Pathway" subtitle="Advancing the Kingdom through The Holy Spirit, Healing and Power." compact showBg={false} />

        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <GlassCard>
              <p className="text-amber-100/88 leading-relaxed text-sm mb-4">
                Kingdom Pathway is a Kingdom Mandate Ministry resource created to help people take their next step with God through Scripture, prayer, declarations, journaling, and Spirit-filled direction.
              </p>
              <p className="text-amber-100/88 leading-relaxed text-sm">
                Whether you are new to faith, walking through a difficult season, seeking purpose, or believing for breakthrough — this app is designed to meet you where you are and point you toward the power and promises of God.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-heading font-bold text-lg mb-3" style={{ color: "#ffe44a" }}>Our Mission</h3>
              <p className="text-amber-100/88 leading-relaxed text-sm italic">
                {"Kingdom Mandate Ministry exists to advance the Kingdom through The Holy Spirit, Healing & Power."}
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-heading font-bold text-lg mb-4" style={{ color: "#ffe44a" }}>Connect With Us</h3>
              <div className="space-y-2">
                {LINKS.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-amber-100/72 hover:text-primary transition-colors">
                    <ExternalLink size={14} style={{ color: "rgba(247,204,69,0.55)" }} /> {l.label}
                  </a>
                ))}
                <a href="mailto:kingdommm.chris@gmail.com" className="flex items-center gap-2 text-sm text-amber-100/72 hover:text-primary transition-colors">
                  <Mail size={14} style={{ color: "rgba(247,204,69,0.55)" }} /> kingdommm.chris@gmail.com
                </a>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
}