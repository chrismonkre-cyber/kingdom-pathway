import { useState, useEffect } from "react";
import { IMAGES } from "../lib/images";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

const PROMPTS = [
  "What is God saying to me today?",
  "What step is He asking me to take?",
  "What prayer is on my heart?",
  "What breakthrough am I believing for?",
];

function getEntries() {
  const saved = localStorage.getItem("kingdom-journal");
  return saved ? JSON.parse(saved) : [];
}

function saveEntries(entries) {
  localStorage.setItem("kingdom-journal", JSON.stringify(entries));
}

export default function Journal() {
  const [entries, setEntries] = useState(getEntries);
  const [writing, setWriting] = useState(false);
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => { saveEntries(entries); }, [entries]);

  const handleSave = () => {
    if (answers.every((a) => !a.trim())) return;
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
      answers: [...answers],
    };
    setEntries([entry, ...entries]);
    setAnswers(["", "", "", ""]);
    setWriting(false);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={IMAGES.journal} alt="" className="hidden md:block w-full h-full object-cover object-center" />
        <img src={IMAGES.journalMobile} alt="" className="md:hidden w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-3 drop-shadow-lg">
            Journal the Journey
          </h1>
          <p className="font-body text-lg text-foreground/85 drop-shadow-md">
            Record what God is showing you along the way.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!writing ? (
            <button
              onClick={() => setWriting(true)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl shadow-lg shadow-primary/30 hover:brightness-110 transition-all mb-8 text-lg"
            >
              <Plus className="h-5 w-5" /> New Journal Entry
            </button>
          ) : (
            <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="font-heading text-xl font-semibold text-primary mb-6">
                Today's Reflection
              </h2>
              {PROMPTS.map((prompt, i) => (
                <div key={i} className="mb-5">
                  <label className="font-body text-sm text-foreground/80 block mb-2 font-medium">
                    {prompt}
                  </label>
                  <textarea
                    value={answers[i]}
                    onChange={(e) => {
                      const next = [...answers];
                      next[i] = e.target.value;
                      setAnswers(next);
                    }}
                    rows={3}
                    className="w-full bg-black/40 border border-primary/20 rounded-lg p-3 text-foreground/90 font-body text-sm placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none resize-none"
                    placeholder="Write your thoughts here..."
                  />
                </div>
              ))}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => { setWriting(false); setAnswers(["", "", "", ""]); }}
                  className="px-5 py-2 bg-white/10 border border-primary/30 text-foreground/80 rounded-lg font-body text-sm hover:bg-white/15 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Save Entry
                </button>
              </div>
            </div>
          )}

          {/* Past entries */}
          {entries.length === 0 && !writing && (
            <div className="bg-black/40 backdrop-blur-md border border-primary/15 rounded-xl p-10 text-center">
              <p className="font-body text-foreground/60 text-lg mb-2">Your journal is waiting.</p>
              <p className="font-body text-foreground/40 text-sm">
                Start writing what God is placing on your heart.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading text-lg text-foreground/90">{entry.date}</span>
                  {expanded === entry.id ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-foreground/40" />
                  )}
                </button>
                {expanded === entry.id && (
                  <div className="px-5 pb-5 space-y-4">
                    {PROMPTS.map((prompt, i) =>
                      entry.answers[i] ? (
                        <div key={i}>
                          <p className="font-body text-xs text-primary/80 mb-1 font-medium">{prompt}</p>
                          <p className="font-body text-sm text-foreground/80 leading-relaxed">{entry.answers[i]}</p>
                        </div>
                      ) : null
                    )}
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="flex items-center gap-2 text-destructive/70 hover:text-destructive text-xs font-body transition-colors mt-2"
                    >
                      <Trash2 className="h-3 w-3" /> Delete entry
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}