import { ArrowLeft, BookOpen, MessageSquare, Volume2, Flame, PenLine, ExternalLink } from "lucide-react";
import GlassCard from "./GlassCard";

export default function PathwayGuide({ pathway, onBack }) {
  if (!pathway) return null;

  const sections = [
    { icon: BookOpen, title: "Scripture Focus", content: pathway.scripture, sub: pathway.scriptureText },
    { icon: MessageSquare, title: "Spirit-Filled Teaching", content: null, paragraphs: pathway.teaching },
    { icon: Volume2, title: "Prayer", content: pathway.prayer },
    { icon: Flame, title: "Declaration", content: pathway.declaration },
    { icon: Flame, title: "Fire Step", content: pathway.fireStep },
    { icon: PenLine, title: "Journal Prompt", content: pathway.journalPrompt },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-heading text-sm transition-colors">
        <ArrowLeft size={16} /> Back to Pathways
      </button>

      <h2 className="font-heading text-3xl md:text-4xl text-primary mb-2">{pathway.title}</h2>
      <p className="text-muted-foreground mb-8">{pathway.description}</p>

      <div className="space-y-5">
        {sections.map((s, i) => (
          <GlassCard key={i}>
            <div className="flex items-center gap-2 mb-3">
              <s.icon size={18} className="text-primary" />
              <h3 className="font-heading text-primary text-lg">{s.title}</h3>
            </div>
            {s.paragraphs ? (
              <div className="space-y-3">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-foreground/80 leading-relaxed text-sm">{p}</p>
                ))}
              </div>
            ) : (
              <>
                <p className="text-foreground/80 leading-relaxed text-sm">{s.content}</p>
                {s.sub && <p className="text-primary/70 italic mt-2 text-sm leading-relaxed">{s.sub}</p>}
              </>
            )}
          </GlassCard>
        ))}

        {/* Recommended Resource */}
        {pathway.resource && (
          <GlassCard className="border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink size={18} className="text-primary" />
              <h3 className="font-heading text-primary text-lg">Recommended Next Resource</h3>
            </div>
            <a href={pathway.resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-primary text-primary-foreground font-heading text-sm rounded-lg hover:bg-primary/90 transition-colors">
              {pathway.resource.name} <ExternalLink size={14} />
            </a>
          </GlassCard>
        )}
      </div>
    </div>
  );
}