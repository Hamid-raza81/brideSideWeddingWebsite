"use client";

import React from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "snow" | "petal" | "sparkle";
  isReverse: boolean;
}

const particles: Particle[] = Array.from({ length: 16 }, (_, i) => {
  const type = i % 3 === 0 ? "snow" : i % 3 === 1 ? "petal" : "sparkle";
  return {
    id: i,
    left: (i * 3.1 + (i % 7) * 4) % 98,
    size: type === "snow" ? 4 + (i % 5) : type === "petal" ? 8 + (i % 6) : 5 + (i % 4),
    duration: 7 + (i % 8) * 1.2,
    delay: (i * 0.45) % 9,
    opacity: 0.4 + ((i % 5) * 0.1),
    type,
    isReverse: i % 2 === 0,
  };
});

export function FallingRainParticles() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-[25] select-none"
    >
      {particles.map((p) => {
        const animationName = p.isReverse ? "fallDownSwayReverse" : "fallDownSway";

        if (p.type === "snow") {
          return (
            <span
              key={p.id}
              className="wedding-particle absolute rounded-full pointer-events-none"
              style={{
                left: `${p.left}%`,
                top: "-20px",
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 14px rgba(201, 135, 149, 0.35)",
                opacity: p.opacity,
                animation: `${animationName} ${p.duration}s linear infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          );
        }

        if (p.type === "petal") {
          return (
            <span
              key={p.id}
              className="wedding-particle absolute pointer-events-none"
              style={{
                left: `${p.left}%`,
                top: "-20px",
                width: `${p.size}px`,
                height: `${p.size * 1.4}px`,
                backgroundColor: (p.id % 2 === 0 ? "#D6BC8D" : "#C98795"),
                borderRadius: "50% 10% 50% 10%",
                opacity: p.opacity * 0.75,
                boxShadow: "0 0 8px rgba(198, 164, 106, 0.35), 0 0 10px rgba(201, 135, 149, 0.2)",
                animation: `${animationName} ${p.duration + 2}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          );
        }

        // Golden Stardust Sparkle
        return (
          <span
            key={p.id}
            className="wedding-particle absolute rounded-full pointer-events-none"
            style={{
              left: `${p.left}%`,
              top: "-20px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: "#D6BC8D",
              boxShadow: "0 0 10px #D6BC8D, 0 0 4px #FFFFFF",
              opacity: p.opacity,
              animation: `${animationName} ${p.duration - 1}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
