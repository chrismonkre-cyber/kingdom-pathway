import { IMAGES } from "../lib/images";
import { RESOURCE_LINKS } from "../lib/resourceData";
import { ExternalLink } from "lucide-react";

const QUICK_LINKS = [
  "Kingdom Mandate Ministry",
  "The Bible Companion",
  "Kingdom Prayer Wall",
  "Kingdom Fire Companion",
  "Kingdom Declarations",
  "YouTube Channel",
  "Partner / Sow",
];

export default function About() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={IMAGES.resources} alt="" className="hidden md:block w-full h-full object-cover object-center" />
        <img src={IMAGES.resourcesMobile} alt="" className="md:hidden w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <img
              src={IMAGES.logo}
              alt="Kingdom Mandate Ministry"
              className="h-20 w-20 rounded-full object-cover border-2 border-primary/50 shadow-xl shadow-primary/20 mx-auto mb-6"
            />
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-3 drop-shadow-lg">
              About Kingdom Pathway
            </h1>
            <p className="font-body text-lg text-foreground/85 drop-shadow-md">
              A guided next-step companion from Kingdom Mandate Ministry.
            </p>
          </div>

          {/* About copy */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <p className="font-body text-foreground/90 leading-relaxed text-lg mb-4">
              Kingdom Pathway was created to help people take their next step with God through
              Scripture, prayer, journaling, encouragement, and Spirit-filled direction.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              Whether someone is new to faith, walking through a difficult season, seeking peace,
              or needing healing, this app is designed to meet them where they are and point them
              toward the power and promises of God.
            </p>
          </div>

          {/* Ministry mission */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">
              Our Mission
            </h2>
            <p className="font-body text-foreground/85 leading-relaxed">
              Kingdom Mandate Ministry exists to equip, empower, and release believers into their
              God-given purpose. Through Scripture-based tools, Spirit-filled teaching, and practical
              kingdom resources, we help people discover who they are in Christ and walk boldly in
              the fire of His calling.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">
              Get In Touch
            </h2>
            <p className="font-body text-foreground/80 mb-3">
              We'd love to hear from you. Whether you have a prayer request, a testimony, or a question,
              reach out anytime.
            </p>
            <a
              href="mailto:kingdommm.chris@gmail.com"
              className="inline-block text-primary hover:underline font-body font-medium"
            >
              kingdommm.chris@gmail.com
            </a>
          </div>

          {/* Partner / Sow */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6 text-center">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">
              Partner / Sow
            </h2>
            <p className="font-body text-foreground/80 mb-4">
              Your generosity helps us continue building free Kingdom tools for the body of Christ.
            </p>
            <a
              href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg shadow-lg shadow-primary/30 hover:brightness-110 transition-all"
            >
              Give / Partner
            </a>
          </div>

          {/* Quick links */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-primary mb-4">
              Explore the Ministry
            </h2>
            <div className="flex flex-wrap gap-3">
              {QUICK_LINKS.map((name) => {
                const link = RESOURCE_LINKS.find((r) => r.name === name);
                if (!link) return null;
                return (
                  <a
                    key={name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-lg text-foreground/80 hover:text-primary hover:border-primary/50 text-sm font-body transition-all"
                  >
                    {name} <ExternalLink className="h-3 w-3" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}