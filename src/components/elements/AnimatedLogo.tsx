import { useEffect, useState } from "react";

export const AnimatedLogo = () => {
  const [mounted, setMounted] = useState(false);

  // --- PHASE GROUPING -------------------------------------------------
  // (1,9), (2,8), (3,7), (4,6), (5)
  const phaseGroups: Record<number, number> = {
    1: 0,
    9: 0,
    2: 0.4,
    8: 0.4,
    3: 0.8,
    7: 0.8,
    4: 1.2,
    6: 1.2,
    5: 1.6,
  };

  // Store final per-pill delays in state so they NEVER reset on rerender
  const [phaseMap] = useState(() => {
    const map: Record<number, number> = {};
    for (let i = 1; i <= 9; i++) map[i] = phaseGroups[i];
    return map;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // ANIMATION VARIABLES
  const outerRadius = 33;
  const bounceRange = 2;
  const innerRadius = outerRadius - bounceRange;

  // Define pill positions
  const startAngle = 135;
  const endAngle = 225;
  const totalAngle = 360 - (endAngle - startAngle);
  const numPills = 9;
  const angleStep = totalAngle / (numPills - 1);

  const pillPositions = Array.from({ length: numPills }, (_, i) => {
    let angle = startAngle + angleStep * i;
    if (angle >= 360) angle -= 360;

    const isBottomPill = i === 0 || i === numPills - 1;
    const isBlueFirst = isBottomPill ? false : i % 2 === 1;
    const id = i + 1;

    return {
      angle,
      id,
      isBlueFirst,
      animationPhase: phaseMap[id], // stable on every render
    };
  });

  return (
    <div className="flex items-end w-40 sm:w-58">
      <div className="relative" style={{ width: "40%", aspectRatio: "1/1" }}>
        {pillPositions.map(({ angle, id, isBlueFirst, animationPhase }) => {
          const r = (angle * Math.PI) / 180;

          const xOuter = Math.cos(r) * outerRadius;
          const yOuter = Math.sin(r) * outerRadius;
          const xInner = Math.cos(r) * innerRadius;
          const yInner = Math.sin(r) * innerRadius;

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
                width: "100%",
                height: "100%",
                animation: mounted
                  ? `bounce-${id} 2s ease-in-out infinite`
                  : "none",
                animationDelay: `-${animationPhase}s`,
                animationFillMode: "both",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "20%",
                  height: "10%",
                  borderRadius: "10px",
                  background: gradient,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              />
              <style>{`
                @keyframes bounce-${id} {
                  0%, 100% {
                    transform: translate(
                      calc(-50% + ${xOuter}%),
                      calc(-50% + ${yOuter}%)
                    );
                  }
                  50% {
                    transform: translate(
                      calc(-50% + ${xInner}%),
                      calc(-50% + ${yInner}%)
                    );
                  }
                }
              `}</style>
            </div>
          );
        })}

        <div
          className="absolute flex items-center justify-center"
          style={{
            left: "52%",
            top: "65%",
            transform: "translate(-50%, -50%)",
            width: "55%",
            height: "55%",
            zIndex: 10,
          }}
        >
          <img
            src="/assets/logos/logo-center.png"
            alt="Center Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div
        className="flex items-end -ml-1 "
        style={{ width: "65%", height: "100%" }}
      >
        <img
          src="/assets/logos/logo-text.png"
          alt="Brighton Rx Pharmacy Text"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
