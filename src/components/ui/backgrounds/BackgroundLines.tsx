interface BackgroundLinesProps {
  className?: string;
}

export const BackgroundLines = ({ className = "" }: BackgroundLinesProps) => {
  // Line positions (percentage from left)
  const linePositions = {
    desktop: [
      { left: '5%', isPair: false },      // Single left
      { left: '20%', isPair: true },      // Pair 1
      { left: '35%', isPair: true },      // Pair 2
      { left: '50%', isPair: true },      // Pair 3 (center)
      { left: '65%', isPair: true },      // Pair 4
      { left: '80%', isPair: true },      // Pair 5
      { left: '95%', isPair: false },     // Single right
    ],
    mobile: [
      { left: '8%', isPair: false },      // Single left
      { left: '24%', isPair: true },      // Pair 1
      { left: '40%', isPair: true },      // Pair 2
      { left: '56%', isPair: true },      // Pair 3
      { left: '72%', isPair: true },      // Pair 4
      { left: '88%', isPair: true },      // Pair 5
      { left: '92%', isPair: false },     // Single right
    ],
  };

  // Shared line styling
  const lineClass = "absolute top-0 bottom-0 w-[1px] bg-[rgb(var(--text-tertiary))] opacity-10";

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Desktop lines */}
      <div className="hidden md:block absolute inset-0">
        {linePositions.desktop.map((line, i) => (
          <div key={`desktop-${i}`}>
            {/* Main line */}
            <div
              className={lineClass}
              style={{ left: line.left }}
            />
            {/* Pair second line (if applicable) */}
            {line.isPair && (
              <div
                className={lineClass}
                style={{ left: `calc(${line.left} + 8px)` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile lines (closer together) */}
      <div className="md:hidden absolute inset-0">
        {linePositions.mobile.map((line, i) => (
          <div key={`mobile-${i}`}>
            {/* Main line */}
            <div
              className={lineClass}
              style={{ left: line.left }}
            />
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
