import EmberParticles from "./EmberParticles";

const KMM_LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/55003ad81_logopng.png";
const DEFAULT_BG = "https://media.base44.com/images/public/6a0fab654128653e03e43d46/7e3c143b2_ChatGPTImageMay21202610_41_41PM6.png";

export default function PageHero({ title, subtitle, children, showLogo = true, compact = false, bgImage, showBg = true }) {
  const bg = bgImage || DEFAULT_BG;

  return (
    <section className={`relative overflow-hidden ${compact ? "py-12" : "pt-14 pb-10 md:pt-24 md:pb-20"}`}>
      {showBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(5,2,1,0.18) 0%, rgba(8,3,1,0.08) 40%, rgba(5,2,1,0.35) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(5,2,1,0.20) 100%)" }} />
      <EmberParticles count={10} />
      {showBg && (
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(5,2,1,0.35) 60%, rgba(5,2,1,0.65) 100%)" }} />
      )}

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        {showLogo && (
          <img
            src={KMM_LOGO}
            alt="KMM"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-5"
            style={{ boxShadow: "0 0 55px rgba(225,140,10,0.60), 0 0 20px rgba(200,110,10,0.35)", border: "2px solid rgba(235,172,38,0.65)" }}
          />
        )}
        <h1
          className="font-heading text-3xl md:text-5xl mb-3 tracking-wide"
          style={{ color: "#ffe44a", fontWeight: 900, textShadow: "0 0 70px rgba(255,210,30,0.90), 0 0 35px rgba(248,158,10,0.70), 0 4px 20px rgba(0,0,0,1), 0 2px 6px rgba(0,0,0,1)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-medium" style={{ textShadow: "0 1px 12px rgba(0,0,0,1), 0 2px 6px rgba(0,0,0,0.9)" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
