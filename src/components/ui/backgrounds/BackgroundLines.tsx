interface BackgroundLinesProps {
  className?: string;
}

export const BackgroundLines = ({ className = "" }: BackgroundLinesProps) => {
  // Line positions (percentage from left)
  const linePositions = {
    desktop: [
      { left: "3%", isPair: false }, // Verder naar links
      { left: "18%", isPair: true },
      { left: "33%", isPair: true },
      { left: "50%", isPair: true }, // Centrum
      { left: "67%", isPair: true },
      { left: "82%", isPair: true },
      { left: "97%", isPair: false }, // Verder naar rechts
    ],
    mobile: [
      { left: "8%", isPair: false }, // Single left
      { left: "23%", isPair: true }, // Pair 1
      { left: "38%", isPair: true }, // Pair 2
      { left: "53%", isPair: true }, // Pair 3
      { left: "68%", isPair: true }, // Pair 4
      { left: "83%", isPair: true }, // Pair 5
      { left: "90%", isPair: false }, // Single right
    ],
  };

  // Shared line styling
  const lineClass =
    "absolute top-0 bottom-0 w-[2px] bg-[rgb(var(--text-tertiary))] opacity-10";

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Desktop lines */}
      <div className="hidden md:block absolute inset-0">
        {linePositions.desktop.map((line) => (
          <div key={`desktop-${line.left}`}>
            {/* Main line */}
            <div className={lineClass} style={{ left: line.left }} />
            {/* Pair second line (if applicable) */}
            {line.isPair && (
              <div
                className={lineClass}
                style={{ left: `calc(${line.left} + 24px)` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile lines (closer together) */}
      <div className="md:hidden absolute inset-0">
        {linePositions.mobile.map((line) => (
          <div key={`mobile-${line.left}`}>
            {/* Main line */}
            <div className={lineClass} style={{ left: line.left }} />
            {/* Pair second line (if applicable) */}
            {line.isPair && (
              <div
                className={lineClass}
                style={{ left: `calc(${line.left} + 6px)` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
