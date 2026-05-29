import { Link } from "react-router-dom";
import { IMAGES } from "../lib/images";
import { PATHWAY_LIST } from "../lib/pathwayData";

export default function Pathways() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={IMAGES.pathways} alt="" className="hidden md:block w-full h-full object-cover object-center" />
        <img src={IMAGES.pathwaysMobile} alt="" className="md:hidden w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 drop-shadow-lg">
            Choose Where You Are
          </h1>
          <p className="font-body text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Select the pathway that best describes your season, and step into Scripture,
            prayer, and Kingdom direction.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATHWAY_LIST.map((p) => (
            <Link
              key={p.slug}
              to={`/pathways/${p.slug}`}
              className="group bg-black/50 backdrop-blur-md border border-primary/25 rounded-xl p-8 text-center hover:border-primary/60 hover:bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="font-body text-sm text-foreground/50 mt-2">
                Tap to begin this pathway →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}