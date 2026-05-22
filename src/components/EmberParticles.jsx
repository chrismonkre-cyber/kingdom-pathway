import { useEffect, useState } from "react";

export default function EmberParticles({ count = 12 }) {
  const [embers, setEmbers] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 2 + Math.random() * 4,
    }));
    setEmbers(arr);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {embers.map((e) => (
        <div
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: "0%",
            width: e.size,
            height: e.size,
            background: `radial-gradient(circle, hsl(45,100%,75%), hsl(25,100%,50%))`,
            animation: `ember-rise ${e.duration}s ease-out ${e.delay}s infinite`,
            opacity: 0.85,
            boxShadow: `0 0 ${e.size * 2}px hsl(35,100%,60%)`,
          }}
        />
      ))}
    </div>
  );
}