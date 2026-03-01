import React from "react";

interface ThumbnailProps {
  isDark: boolean;
}

// Variant 0: Portfolio Evolution — three browser windows showing progression
const PortfolioEvolutionThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0c1220 0%, #111827 60%, #0f1419 100%)"
          : "linear-gradient(145deg, #eef2ff 0%, #f3f4f6 60%, #f0f4ff 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Fine grid */}
      {[...Array(14)].map((_, i) => (
        <line
          key={`vg-${i}`}
          x1={i * 30}
          y1="0"
          x2={i * 30}
          y2="280"
          stroke={isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)"}
          strokeWidth="0.5"
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <line
          key={`hg-${i}`}
          x1="0"
          y1={i * 30}
          x2="420"
          y2={i * 30}
          stroke={isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)"}
          strokeWidth="0.5"
        />
      ))}

      {/* Three browser windows staggered diagonally */}
      {[
        { x: 20, y: 30, w: 130, h: 90, opacity: 0.35 },
        { x: 145, y: 65, w: 130, h: 90, opacity: 0.55 },
        { x: 270, y: 100, w: 130, h: 90, opacity: 0.75 },
      ].map((win, i) => (
        <g key={i}>
          {/* Window shadow */}
          <rect
            x={win.x + 3}
            y={win.y + 3}
            width={win.w}
            height={win.h}
            rx="5"
            fill={isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.06)"}
          />
          {/* Window frame */}
          <rect
            x={win.x}
            y={win.y}
            width={win.w}
            height={win.h}
            rx="5"
            fill={
              isDark
                ? `rgba(255,255,255,${0.03 + i * 0.02})`
                : `rgba(255,255,255,${0.7 + i * 0.1})`
            }
            stroke={
              isDark
                ? `rgba(255,255,255,${win.opacity * 0.25})`
                : `rgba(0,0,0,${win.opacity * 0.15})`
            }
            strokeWidth="1"
          />
          {/* Title bar */}
          <rect
            x={win.x}
            y={win.y}
            width={win.w}
            height="16"
            rx="5"
            fill={
              isDark
                ? `rgba(255,255,255,${win.opacity * 0.12})`
                : `rgba(0,0,0,${win.opacity * 0.07})`
            }
          />
          <rect
            x={win.x}
            y={win.y + 11}
            width={win.w}
            height="5"
            fill={
              isDark
                ? `rgba(255,255,255,${win.opacity * 0.12})`
                : `rgba(0,0,0,${win.opacity * 0.07})`
            }
          />
          {/* Traffic lights */}
          {[0, 1, 2].map((dot) => (
            <circle
              key={dot}
              cx={win.x + 8 + dot * 9}
              cy={win.y + 8}
              r="2.5"
              fill={
                isDark
                  ? `rgba(255,255,255,${win.opacity * 0.4})`
                  : `rgba(0,0,0,${win.opacity * 0.25})`
              }
            />
          ))}
          {/* Content lines */}
          {[0, 1, 2, 3].map((line) => (
            <rect
              key={line}
              x={win.x + 8}
              y={win.y + 24 + line * 14}
              width={
                line === 0 ? win.w - 40 : line === 2 ? win.w - 20 : win.w - 55
              }
              height={line === 0 ? 5 : 3}
              rx="2"
              fill={
                isDark
                  ? `rgba(255,255,255,${win.opacity * 0.18})`
                  : `rgba(0,0,0,${win.opacity * 0.12})`
              }
            />
          ))}
          {/* Version label */}
          <text
            x={win.x + win.w - 12}
            y={win.y + win.h - 8}
            fontSize="8"
            fontWeight="700"
            fontFamily="monospace"
            fill={
              isDark
                ? `rgba(255,255,255,${win.opacity * 0.5})`
                : `rgba(0,0,0,${win.opacity * 0.4})`
            }
            textAnchor="end"
          >
            v{i + 1}
          </text>
        </g>
      ))}

      {/* Connecting dashed arrow */}
      <path
        d="M 154 115 Q 200 200 265 150"
        fill="none"
        stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.07)"}
        strokeWidth="1"
        strokeDasharray="4 5"
      />
    </svg>

    {/* Version pills at bottom */}
    <div className="absolute bottom-4 left-4 flex gap-2">
      {["v1 · 2022", "v2 · 2023", "v3 · 2025"].map((label, i) => (
        <span
          key={label}
          className="text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full"
          style={{
            color: isDark
              ? `rgba(255,255,255,${0.3 + i * 0.2})`
              : `rgba(0,0,0,${0.25 + i * 0.15})`,
            border: `1px solid ${
              isDark
                ? `rgba(255,255,255,${0.08 + i * 0.07})`
                : `rgba(0,0,0,${0.07 + i * 0.05})`
            }`,
            background: isDark
              ? `rgba(255,255,255,${0.02 + i * 0.02})`
              : `rgba(0,0,0,${0.01 + i * 0.015})`,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  </div>
);

// Variant 1: GetMore Systems — dashboard grid with data bars
const DashboardThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0d1117 0%, #111827 100%)"
          : "linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Dashboard card grid */}
      {[
        { x: 20, y: 20, w: 100, h: 55 },
        { x: 132, y: 20, w: 100, h: 55 },
        { x: 244, y: 20, w: 155, h: 115 },
        { x: 20, y: 87, w: 212, h: 80 },
        { x: 244, y: 147, w: 155, h: 55 },
        { x: 20, y: 180, w: 100, h: 80 },
        { x: 132, y: 180, w: 100, h: 80 },
      ].map((card, i) => (
        <g key={i}>
          <rect
            x={card.x + 2}
            y={card.y + 2}
            width={card.w}
            height={card.h}
            rx="4"
            fill={isDark ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.04)"}
          />
          <rect
            x={card.x}
            y={card.y}
            width={card.w}
            height={card.h}
            rx="4"
            fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)"}
            stroke={isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}
            strokeWidth="0.8"
          />
          {/* Stat line */}
          <rect
            x={card.x + 8}
            y={card.y + 10}
            width={card.w * 0.5}
            height="3"
            rx="1.5"
            fill={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}
          />
          <rect
            x={card.x + 8}
            y={card.y + 18}
            width={card.w * 0.3}
            height="2"
            rx="1"
            fill={isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}
          />
        </g>
      ))}

      {/* Bar chart in the wide top-right card */}
      {[55, 40, 70, 48, 82, 35, 60].map((h, i) => (
        <rect
          key={i}
          x={252 + i * 19}
          y={108 - h * 0.55}
          width="13"
          height={h * 0.55}
          rx="2"
          fill={
            isDark
              ? `rgba(255,255,255,${0.08 + i * 0.025})`
              : `rgba(0,0,0,${0.07 + i * 0.02})`
          }
        />
      ))}

      {/* Mini line graph in bottom-left area card */}
      <polyline
        points="28,244 50,230 72,238 94,218 116,225 138,210 160,220 182,205 204,215 226,200"
        fill="none"
        stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// Variant 2: Stichting Accessibility — rings + human figure
const AccessibilityThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0f1419 0%, #131e2a 100%)"
          : "linear-gradient(145deg, #f9fafb 0%, #f0f4f8 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Dot grid */}
      {[...Array(7)].map((_, row) =>
        [...Array(11)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 38}
            cy={20 + row * 40}
            r="1"
            fill={isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}
          />
        )),
      )}

      {/* Concentric ripple rings */}
      {[120, 95, 70, 48, 28].map((r, i) => (
        <circle
          key={i}
          cx="210"
          cy="140"
          r={r}
          fill="none"
          stroke={
            isDark
              ? `rgba(255,255,255,${0.04 + i * 0.025})`
              : `rgba(0,0,0,${0.035 + i * 0.02})`
          }
          strokeWidth={i === 4 ? 1.5 : 1}
        />
      ))}

      {/* Accessibility person figure */}
      <g
        transform="translate(210, 140)"
        opacity={isDark ? 0.45 : 0.35}
        fill={isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)"}
      >
        {/* Head */}
        <circle cx="0" cy="-42" r="10" />
        {/* Body */}
        <path d="M-14,-22 Q0,-15 14,-22 L16,18 Q0,22 -16,18 Z" />
        {/* Arms outstretched (accessibility icon style) */}
        <line
          x1="-32"
          y1="-5"
          x2="32"
          y2="-5"
          stroke={isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)"}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Legs */}
        <line
          x1="-6"
          y1="18"
          x2="-14"
          y2="52"
          stroke={isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)"}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="18"
          x2="14"
          y2="52"
          stroke={isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)"}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* WCAG compliance badge hint */}
      <g transform="translate(310, 40)">
        <rect
          x="0"
          y="0"
          width="80"
          height="26"
          rx="4"
          fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"}
          stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
          strokeWidth="0.8"
        />
        <text
          x="40"
          y="17"
          fontSize="9"
          fontWeight="700"
          fontFamily="monospace"
          fill={isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)"}
          textAnchor="middle"
        >
          WCAG 2.1
        </text>
      </g>
    </svg>
  </div>
);

// Variant 3: Oak — design tool layers, brand shapes
const DesignThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0f1419 0%, #1a1a14 100%)"
          : "linear-gradient(145deg, #fafaf8 0%, #f5f3ef 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Design grid dots */}
      {[...Array(8)].map((_, row) =>
        [...Array(12)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={18 + col * 35}
            cy={18 + row * 35}
            r="1"
            fill={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}
          />
        )),
      )}

      {/* Abstract brand shapes */}
      <ellipse
        cx="200"
        cy="140"
        rx="95"
        ry="75"
        fill="none"
        stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
        strokeWidth="1.5"
      />
      <ellipse
        cx="200"
        cy="140"
        rx="60"
        ry="95"
        fill="none"
        stroke={isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}
        strokeWidth="1"
      />
      <circle
        cx="200"
        cy="140"
        r="38"
        fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.035)"}
        stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}
        strokeWidth="1.5"
      />

      {/* Figma-style layers panel */}
      <g transform="translate(18, 30)" opacity="0.55">
        <rect
          x="0"
          y="0"
          width="95"
          height="130"
          rx="5"
          fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)"}
          stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}
          strokeWidth="0.8"
        />
        <text
          x="8"
          y="14"
          fontSize="7"
          fontWeight="700"
          fontFamily="monospace"
          fill={isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)"}
        >
          Layers
        </text>
        <line
          x1="0"
          y1="19"
          x2="95"
          y2="19"
          stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}
          strokeWidth="0.5"
        />
        {["Frame", "Logo", "Typography", "Colours", "Grid"].map((layer, i) => (
          <g key={layer} transform={`translate(0, ${24 + i * 20})`}>
            <rect
              x="4"
              y="0"
              width="87"
              height="14"
              rx="2"
              fill={
                i === 1
                  ? isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.06)"
                  : "transparent"
              }
            />
            <rect
              x="8"
              y="4"
              width="5"
              height="5"
              rx="1"
              fill={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}
            />
            <text
              x="18"
              y="11"
              fontSize="7"
              fontFamily="sans-serif"
              fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)"}
            >
              {layer}
            </text>
          </g>
        ))}
      </g>

      {/* Color palette swatches bottom right */}
      <g transform="translate(305, 210)">
        {[0.15, 0.3, 0.5, 0.7, 0.9].map((op, i) => (
          <circle
            key={i}
            cx={i * 18}
            cy="0"
            r="7"
            fill={
              isDark ? `rgba(255,255,255,${op})` : `rgba(0,0,0,${op * 0.7})`
            }
          />
        ))}
      </g>
    </svg>
  </div>
);

const thumbnailComponents = [
  PortfolioEvolutionThumbnail,
  DashboardThumbnail,
  AccessibilityThumbnail,
  DesignThumbnail,
];

interface ProjectThumbnailProps {
  variant: number;
  isDark: boolean;
  className?: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  variant,
  isDark,
  className = "",
}) => {
  const ThumbnailContent =
    thumbnailComponents[variant % thumbnailComponents.length];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <ThumbnailContent isDark={isDark} />
    </div>
  );
};
