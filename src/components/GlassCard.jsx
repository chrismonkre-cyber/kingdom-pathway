export default function GlassCard({ children, className = "", onClick, hover = false }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-4 md:p-5 ${hover ? "cursor-pointer transition-all duration-300" : ""} ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(72,10,20,0.76) 0%, rgba(36,5,12,0.82) 100%)",
        border: "1px solid rgba(205,132,28,0.35)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 0 22px rgba(120,28,8,0.18), 0 6px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(225,162,36,0.12)",
      }}
      onMouseEnter={hover ? e => {
        e.currentTarget.style.border = "1px solid rgba(238,165,35,0.58)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(185,88,10,0.28), 0 8px 36px rgba(0,0,0,0.75), inset 0 1px 0 rgba(225,162,36,0.18)";
        e.currentTarget.style.transform = "translateY(-2px)";
      } : undefined}
      onMouseLeave={hover ? e => {
        e.currentTarget.style.border = "1px solid rgba(205,132,28,0.35)";
        e.currentTarget.style.boxShadow = "0 0 22px rgba(120,28,8,0.18), 0 6px 32px rgba(0,0,0,0.70), inset 0 1px 0 rgba(225,162,36,0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      } : undefined}
    >
      {children}
    </div>
  );
}
