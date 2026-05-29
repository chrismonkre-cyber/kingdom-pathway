import { IMAGES } from "../lib/images";
import { RESOURCE_LINKS } from "../lib/resourceData";
import { ExternalLink } from "lucide-react";

export default function Resources() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={IMAGES.resources} alt="" className="hidden md:block w-full h-full object-cover object-center" />
        <img src={IMAGES.resourcesMobile} alt="" className="md:hidden w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 drop-shadow-lg">
            Continue the Journey
          </h1>
          <p className="font-body text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Connect with the Kingdom Mandate Ministry ecosystem and deepen your walk.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESOURCE_LINKS.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target={r.url.startsWith("/") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {r.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-primary/60 transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="font-body text-sm text-foreground/55 leading-relaxed">
                {r.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}