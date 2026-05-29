import { useParams, Link } from "react-router-dom";
import { PATHWAY_DETAILS } from "../lib/pathwayData";
import { ArrowLeft } from "lucide-react";

export default function PathwayDetail() {
  const { slug } = useParams();
  const pathway = PATHWAY_DETAILS[slug];

  if (!pathway) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-primary mb-4">Pathway Not Found</h1>
          <Link to="/pathways" className="text-foreground/70 hover:text-primary font-body">
            ← Back to Pathways
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={pathway.image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/pathways"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Pathways
          </Link>

          {/* Title */}
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-8 drop-shadow-lg">
            {pathway.title}
          </h1>

          {/* Encouragement */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <p className="font-body text-foreground/90 text-lg leading-relaxed italic">
              {pathway.encouragement}
            </p>
          </div>

          {/* Scripture */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">📖 Key Scripture</h2>
            <p className="font-body text-foreground/90 text-lg leading-relaxed">
              {pathway.scripture}
            </p>
          </div>

          {/* Prayer */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">🙏 Prayer</h2>
            <p className="font-body text-foreground/90 leading-relaxed">
              {pathway.prayer}
            </p>
          </div>

          {/* Declaration */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">🔥 Declaration</h2>
            <p className="font-body text-foreground/90 leading-relaxed font-semibold">
              {pathway.declaration}
            </p>
          </div>

          {/* Next Step */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">👣 Your Next Step</h2>
            <p className="font-body text-foreground/90 leading-relaxed">
              {pathway.nextStep}
            </p>
          </div>

          {/* Back to pathways */}
          <div className="text-center">
            <Link
              to="/pathways"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg shadow-lg shadow-primary/30 hover:brightness-110 transition-all"
            >
              Explore More Pathways
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}