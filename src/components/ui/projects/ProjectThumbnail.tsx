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

// Variant 4: Minecraft Portfolio — blocky voxel grid
const MinecraftThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0a1008 0%, #0f1a0c 100%)"
          : "linear-gradient(145deg, #f0f7ee 0%, #e8f5e4 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Pixel/block grid */}
      {[...Array(10)].map((_, row) =>
        [...Array(15)].map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 28}
            y={row * 28}
            width="27"
            height="27"
            fill="none"
            stroke={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
            strokeWidth="0.5"
          />
        )),
      )}

      {/* Voxel blocks — isometric-style stacked cubes */}
      {[
        { x: 120, y: 160, s: 40 },
        { x: 160, y: 140, s: 40 },
        { x: 200, y: 120, s: 40 },
        { x: 160, y: 180, s: 40 },
        { x: 200, y: 160, s: 40 },
        { x: 240, y: 140, s: 40 },
        { x: 200, y: 200, s: 40 },
        { x: 240, y: 180, s: 40 },
        { x: 280, y: 160, s: 40 },
      ].map(({ x, y, s }, i) => {
        const top = isDark ? `rgba(255,255,255,${0.08 + i * 0.01})` : `rgba(0,0,0,${0.07 + i * 0.008})`;
        const left = isDark ? `rgba(255,255,255,${0.04 + i * 0.005})` : `rgba(0,0,0,${0.04 + i * 0.004})`;
        const right = isDark ? `rgba(255,255,255,${0.06 + i * 0.008})` : `rgba(0,0,0,${0.055 + i * 0.006})`;
        const hs = s / 2;
        return (
          <g key={i}>
            {/* Top face */}
            <polygon
              points={`${x},${y - hs} ${x + s},${y} ${x},${y + hs} ${x - s},${y}`}
              fill={top}
              stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
              strokeWidth="0.5"
            />
            {/* Left face */}
            <polygon
              points={`${x - s},${y} ${x},${y + hs} ${x},${y + hs + s * 0.6} ${x - s},${y + s * 0.6}`}
              fill={left}
              stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}
              strokeWidth="0.5"
            />
            {/* Right face */}
            <polygon
              points={`${x},${y + hs} ${x + s},${y} ${x + s},${y + s * 0.6} ${x},${y + hs + s * 0.6}`}
              fill={right}
              stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}
              strokeWidth="0.5"
            />
          </g>
        );
      })}

      {/* Label */}
      <g transform="translate(20, 230)">
        <rect x="0" y="0" width="110" height="22" rx="3"
          fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
          stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
          strokeWidth="0.8"
        />
        <text x="55" y="15" fontSize="8" fontWeight="700" fontFamily="monospace"
          fill={isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)"}
          textAnchor="middle"
        >
          React Three Fiber
        </text>
      </g>
    </svg>
  </div>
);

// Variant 5: Social Supermarket — event-driven message flow
const EventDrivenThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0d0f1a 0%, #111827 100%)"
          : "linear-gradient(145deg, #f5f5ff 0%, #f0f2ff 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background node grid */}
      {[...Array(6)].map((_, row) =>
        [...Array(9)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={25 + col * 46}
            cy={25 + row * 46}
            r="1.5"
            fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
          />
        )),
      )}

      {/* Service nodes */}
      {[
        { x: 80,  y: 140, label: "Producer" },
        { x: 210, y: 80,  label: "Kafka" },
        { x: 210, y: 200, label: "Axon" },
        { x: 340, y: 140, label: "Consumer" },
      ].map(({ x, y, label }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="28"
            fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"}
            stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}
            strokeWidth="1"
          />
          <text x={x} y={y + 4} fontSize="8" fontWeight="700" fontFamily="monospace"
            fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)"}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Flow arrows */}
      {[
        { x1: 108, y1: 132, x2: 182, y2: 96 },
        { x1: 108, y1: 148, x2: 182, y2: 184 },
        { x1: 238, y1: 96,  x2: 312, y2: 132 },
        { x1: 238, y1: 184, x2: 312, y2: 148 },
      ].map((line, i) => (
        <line key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          markerEnd="url(#arrow)"
        />
      ))}

      {/* Event packets on lines */}
      {[
        { x: 148, y: 112 },
        { x: 148, y: 168 },
        { x: 274, y: 112 },
        { x: 274, y: 168 },
      ].map(({ x, y }, i) => (
        <rect key={i} x={x - 12} y={y - 7} width="24" height="14" rx="3"
          fill={isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}
          stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}
          strokeWidth="0.8"
        />
      ))}

      {/* CQRS label */}
      <g transform="translate(310, 30)">
        <rect x="0" y="0" width="88" height="22" rx="3"
          fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
          stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
          strokeWidth="0.8"
        />
        <text x="44" y="15" fontSize="8" fontWeight="700" fontFamily="monospace"
          fill={isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)"}
          textAnchor="middle"
        >
          CQRS / Kafka
        </text>
      </g>
    </svg>
  </div>
);

// Variant 6: Gatekeeper — security auth grid with lock motif
const SecurityThumbnail: React.FC<ThumbnailProps> = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0f0d14 0%, #120f1e 100%)"
          : "linear-gradient(145deg, #faf8ff 0%, #f4f0ff 100%)",
      }}
    />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 420 280"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Hexagonal grid background */}
      {[...Array(5)].map((_, row) =>
        [...Array(7)].map((_, col) => {
          const hx = 30 + col * 60 + (row % 2 === 0 ? 0 : 30);
          const hy = 30 + row * 52;
          const pts = Array.from({ length: 6 }, (_, k) => {
            const a = (Math.PI / 180) * (60 * k - 30);
            return `${hx + 22 * Math.cos(a)},${hy + 22 * Math.sin(a)}`;
          }).join(" ");
          return (
            <polygon key={`${row}-${col}`} points={pts}
              fill="none"
              stroke={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
              strokeWidth="0.6"
            />
          );
        }),
      )}

      {/* Central shield */}
      <path
        d="M210,60 L270,90 L270,155 Q210,195 210,195 Q150,195 150,155 L150,90 Z"
        fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}
        stroke={isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)"}
        strokeWidth="1.5"
      />

      {/* Lock body */}
      <rect x="193" y="128" width="34" height="28" rx="4"
        fill={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}
        stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}
        strokeWidth="1.2"
      />
      {/* Lock shackle */}
      <path d="M200,128 L200,118 Q210,108 220,118 L220,128"
        fill="none"
        stroke={isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Keyhole */}
      <circle cx="210" cy="140" r="4"
        fill={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}
      />
      <rect x="208" y="140" width="4" height="8" rx="1"
        fill={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}
      />

      {/* JWT / token badges */}
      {[
        { x: 20,  y: 40,  label: "JWT" },
        { x: 320, y: 40,  label: "OAuth" },
        { x: 20,  y: 210, label: "RBAC" },
        { x: 320, y: 210, label: "Axon" },
      ].map(({ x, y, label }, i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="60" height="22" rx="4"
            fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"}
            stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
            strokeWidth="0.8"
          />
          <text x="30" y="15" fontSize="8" fontWeight="700" fontFamily="monospace"
            fill={isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)"}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Connection lines from badges to shield */}
      {[
        { x1: 80, y1: 51, x2: 155, y2: 110 },
        { x1: 320, y1: 51, x2: 265, y2: 110 },
        { x1: 80, y1: 221, x2: 155, y2: 175 },
        { x1: 320, y1: 221, x2: 265, y2: 175 },
      ].map((l, i) => (
        <line key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}
          strokeWidth="1"
          strokeDasharray="5 4"
        />
      ))}
    </svg>
  </div>
);

const thumbnailComponents: React.FC<ThumbnailProps>[] = [
  PortfolioEvolutionThumbnail, // 0
  DashboardThumbnail,          // 1
  AccessibilityThumbnail,      // 2
  DesignThumbnail,             // 3
  MinecraftThumbnail,          // 4
  EventDrivenThumbnail,        // 5
  SecurityThumbnail,           // 6
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
    thumbnailComponents[variant] ?? thumbnailComponents[0];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <ThumbnailContent isDark={isDark} />
    </div>
  );
};
