import { useState, useEffect } from "react";
import { Save, Trash2, Info } from "lucide-react";
import PageHero from "../components/PageHero";

const JOURNAL_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/caca97a19_4journal-fire-glory.png";

const PROMPTS = [
  "What is God speaking to me?",
  "What pathway am I walking through?",
  "What am I praying for?",
  "What step of obedience will I take?",
  "What breakthrough am I believing for?",
  "What has God already done?",
];

const STORAGE_KEY = "kingdom-pathway-journal";

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const update = (key, val) => setEntries((prev) => ({ ...prev, [key]: val }));

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm("Clear all journal entries? This cannot be undone.")) {
      setEntries({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${JOURNAL_BG})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,2,1,0.28) 0%, rgba(5,2,1,0.55) 35%, rgba(5,2,1,0.72) 100%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero title="Journey Journal" subtitle="A private space to reflect, pray, and record what God is doing in your life." compact showBg={false} />

        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6 text-xs rounded-lg px-4 py-2.5"
              style={{ background: "rgba(52,8,16,0.88)", border: "1px solid rgba(192,112,22,0.28)", color: "rgba(215,162,82,0.90)", backdropFilter: "blur(10px)" }}>
              <Info size={14} className="flex-shrink-0" />
              <span>Your journal is stored privately in your browser. It is not uploaded or shared.</span>
            </div>

            <div className="space-y-5">
              {PROMPTS.map((prompt) => (
                <div key={prompt} className="rounded-xl p-5" style={{
                  background: "linear-gradient(135deg, rgba(52,8,16,0.92) 0%, rgba(28,4,10,0.96) 100%)",
                  border: "1px solid rgba(205,132,28,0.32)",
                  boxShadow: "0 0 22px rgba(120,28,8,0.18), 0 6px 32px rgba(0,0,0,0.70)",
                  backdropFilter: "blur(16px)",
                }}>
                  <label className="font-heading text-sm font-bold block mb-2" style={{ color: "#ffe44a" }}>{prompt}</label>
                  <textarea rows={4} value={entries[prompt] || ""} onChange={(e) => update(prompt, e.target.value)}
                    placeholder="Write here..." className="w-full rounded-lg px-4 py-3 text-sm leading-relaxed resize-none focus:outline-none"
                    style={{ background: "rgba(0,0,0,0.42)", border: "1px solid rgba(192,112,22,0.22)", color: "rgba(255,232,185,0.95)" }} />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 font-heading text-sm rounded-lg transition-all"
                style={{ background: "linear-gradient(135deg, #c97a10, #f7cc45, #c97a10)", color: "#160800", fontWeight: 700, boxShadow: "0 0 22px rgba(210,145,10,0.44)" }}>
                <Save size={16} /> {saved ? "Saved!" : "Save Journal"}
              </button>
              <button onClick={handleClear} className="flex items-center gap-2 px-5 py-2.5 font-heading text-sm rounded-lg transition-all"
                style={{ border: "1px solid rgba(200,60,60,0.32)", color: "rgba(200,80,80,0.82)" }}>
                <Trash2 size={16} /> Clear
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}