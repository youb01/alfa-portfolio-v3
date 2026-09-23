const STYLE = `
  @keyframes grain-shift {
    0%,100% { transform: translate(0,0) }
    10%     { transform: translate(-2%,-3%) }
    20%     { transform: translate(3%,2%) }
    30%     { transform: translate(-1%,4%) }
    40%     { transform: translate(4%,-2%) }
    50%     { transform: translate(-3%,3%) }
    60%     { transform: translate(2%,-4%) }
    70%     { transform: translate(-4%,2%) }
    80%     { transform: translate(1%,-2%) }
    90%     { transform: translate(-2%,4%) }
  }
`;

const svgNoise = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>`;

export const GrainOverlay = () => (
  <>
    <style>{STYLE}</style>
    <div
      aria-hidden="true"
      style={{
        position:        "fixed",
        inset:           "-20%",
        zIndex:          9990,
        pointerEvents:   "none",
        opacity:         0.035,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgNoise)}")`,
        backgroundSize:  "256px 256px",
        animation:       "grain-shift 0.45s steps(1) infinite",
      }}
    />
  </>
);
