import { useState } from "react";
import { BookOpen, MessageSquare, Volume2, Flame, PenLine, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import DAILY_STEPS from "../lib/dailyStepData";

const DAILY_STEP_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/f1ead123e_3daily-step-fire-steps.png";

export default function DailyStep() {
  const steps = Array.isArray(DAILY_STEPS) ? DAILY_STEPS : [];
  const todayIndex = new Date().getDay() % (steps.length || 1);
  const [index, setIndex] = useState(todayIndex);
  const step = steps[index];

  if (!step) return <PageHero title="Today's Kingdom Step" subtitle="Content loading..." />;

  const prev = () => setIndex((index - 1 + steps.length) % steps.length);
  const next = () => setIndex((index + 1) % steps.length);

  const sections = [
    { icon: BookOpen, title: "Scripture", content: step.scripture },
    { icon: MessageSquare, title: "Encouragement", content: step.encouragement },
    { icon: Volume2, title: "Prayer", content: step.prayer },
    { icon: Flame, title: "Declaration", content: step.declaration, featured: true },
    { icon: Flame, title: "Action Step", content: step.actionStep },
    { icon: PenLine, title: "Journal Prompt", content: step.journalPrompt },
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${DAILY_STEP_BG})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,2,1,0.28) 0%, rgba(5,2,1,0.55) 35%, rgba(5,2,1,0.72) 100%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero title="Today's Kingdom Step" subtitle="One step at a time. One day at a time. Walk in the power of God." compact showBg={false} />
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(210,140,10,0.55), rgba(248,175,20,0.75), rgba(210,140,10,0.55), transparent)" }} />

        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8 pt-8">
              <button onClick={prev} className="p-2 rounded-lg transition-colors" style={{ border: "1px solid rgba(210,138,22,0.34)", color: "#f7cc45" }}>
                <ChevronLeft size={20} />
              </button>
              <h2 className="font-heading text-2xl text-center" style={{ color: "#ffe44a", fontWeight: 900, textShadow: "0 0 30px rgba(255,210,30,0.80), 0 2px 10px rgba(0,0,0,0.95)" }}>
                {step.title}
              </h2>
              <button onClick={next} className="p-2 rounded-lg transition-colors" style={{ border: "1px solid rgba(210,138,22,0.34)", color: "#f7cc45" }}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex justify-center gap-1.5 mb-8">
              {steps.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === index ? "#f7cc45" : "rgba(210,138,22,0.28)" }} />
              ))}
            </div>

            <div className="space-y-4">
              {sections.map((s, i) => (
                <div key={i} className="rounded-xl p-5" style={{
                  background: s.featured
                    ? "linear-gradient(135deg, rgba(72,12,20,0.94) 0%, rgba(42,6,14,0.97) 100%)"
                    : "linear-gradient(135deg, rgba(52,8,16,0.92) 0%, rgba(28,4,10,0.96) 100%)",
                  border: s.featured ? "1px solid rgba(228,158,30,0.52)" : "1px solid rgba(205,132,28,0.32)",
                  boxShadow: s.featured ? "0 0 28px rgba(185,88,10,0.25), 0 6px 32px rgba(0,0,0,0.72)" : "0 4px 24px rgba(0,0,0,0.65)",
                  backdropFilter: "blur(16px)",
                }}>
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon size={16} style={{ color: "#ffe44a" }} />
                    <h3 className="font-heading text-sm font-bold" style={{ color: "#ffe44a" }}>{s.title}</h3>
                  </div>
                  <p className="text-amber-100/90 leading-relaxed text-sm">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}