import React, { useEffect, useState } from "react";

export const AnimatedLogo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ANIMATION VARIABLES - Adjust these to customize the bounce
  const outerRadius = 31; // Distance from center at furthest point
  const bounceRange = 2; // Total bounce distance
  const innerRadius = outerRadius - bounceRange; // Calculated closest point

  // Define pill positions - 9 pills evenly spaced from 135° to 225°
  const startAngle = 135;
  const endAngle = 225;
  const totalAngle = 360 - (endAngle - startAngle);
  const numPills = 9;
  const angleStep = totalAngle / (numPills - 1);

  const pillPositions = Array.from({ length: numPills }, (_, i) => {
    let angle = startAngle + angleStep * i;
    if (angle >= 360) angle -= 360;

    // Alternate color pattern
    const isBottomPill = i === 0 || i === numPills - 1;
    const isBlueFirst = isBottomPill ? false : i % 2 === 1;

    // Alternate animation phase - every other pill starts at opposite phase
    const animationPhase = i % 2 === 0 ? 0 : 1; // 0s or 1s (full cycle offset)

    return {
      angle,
      id: i + 1,
      isBlueFirst,
      animationPhase,
    };
  });

  return (
    <div className="flex items-end">
      <div className="relative w-20 h-20">
        {/* Pills */}
        {pillPositions.map(({ angle, id, isBlueFirst, animationPhase }) => {
          const radian = (angle * Math.PI) / 180;

          // Calculate outer position (furthest from center)
          const xOuter = Math.cos(radian) * outerRadius;
          const yOuter = Math.sin(radian) * outerRadius;

          // Calculate inner position (closest to center)
          const xInner = Math.cos(radian) * innerRadius;
          const yInner = Math.sin(radian) * innerRadius;

          // Gradient direction based on color pattern
          const gradient = !isBlueFirst
            ? "linear-gradient(90deg, #1e3a5f 50%, #e63946 50%)"
            : "linear-gradient(90deg, #e63946 50%, #1e3a5f 50%)";

          return (
            <div
              key={id}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%)`,
                animation: mounted
                  ? `bounce-${id} 2s ease-in-out infinite`
                  : "none",
                animationDelay: `${animationPhase}s`,
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "9px",
                  borderRadius: "10px",
                  background: gradient,
                  transform: `rotate(${angle}deg)`,
                }}
              />
              <style>{`
                @keyframes bounce-${id} {
                  0%, 100% {
                    transform: translate(
                      calc(-50% + ${xOuter}px),
                      calc(-50% + ${yOuter}px)
                    );
                  }
                  50% {
                    transform: translate(
                      calc(-50% + ${xInner}px),
                      calc(-50% + ${yInner}px)
                    );
                  }
                }
              `}</style>
            </div>
          );
        })}

        {/* Center image */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: "53%",
            top: "65%",
            transform: "translate(-50%, -50%)",
            width: "50px",
            height: "50px",
            zIndex: 10,
          }}
        >
          <img
            src="/assets/logos/logo-center.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Text logo aligned to bottom */}
      <div className="flex items-end pt-10">
        <img
          src="/assets/logos/logo-text.png"
          alt="Logo Text"
          className="h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
