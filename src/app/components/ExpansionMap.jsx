"use client";

import { motion } from "framer-motion";

/**
 * A lightweight, stylized roadmap "map infographic"
 * (placeholder for future real map integration)
 * Shows expansion flow from Jamaica → Caribbean → LATAM
 */
export default function ExpansionMap() {
  const regions = [
    {
      name: "Jamaica",
      emoji: "🇯🇲",
      x: "38%",
      y: "55%",
      color: "rgb(45,255,222)",
      delay: 0.2,
    },
    {
      name: "Caribbean",
      emoji: "🏝️",
      x: "45%",
      y: "50%",
      color: "rgb(255,140,66)",
      delay: 0.7,
    },
    {
      name: "Panama",
      emoji: "🇵🇦",
      x: "50%",
      y: "60%",
      color: "rgb(255,165,90)",
      delay: 1.2,
    },
    {
      name: "Colombia",
      emoji: "🇨🇴",
      x: "55%",
      y: "68%",
      color: "rgb(80,230,255)",
      delay: 1.7,
    },
    {
      name: "Brazil",
      emoji: "🇧🇷",
      x: "65%",
      y: "75%",
      color: "rgb(255,210,90)",
      delay: 2.2,
    },
    {
      name: "Mexico",
      emoji: "🇲🇽",
      x: "25%",
      y: "45%",
      color: "rgb(255,130,50)",
      delay: 2.8,
    },
  ];

  return (
    <div className="relative w-full h-[400px] bg-[#111]/80 rounded-3xl border border-teal-400/20 overflow-hidden flex items-center justify-center">
      {/* Base world silhouette (stylized shape) */}
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="absolute w-full h-full opacity-10 text-teal-300"
      >
        <path
          d="M10 220 q100 -160 400 -180 t380 180 q0 120 -380 150 t-400 -150z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Connecting motion path */}
      <motion.svg
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: true }}
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="absolute w-full h-full opacity-30 text-orange-400"
      >
        <motion.path
          d="M300 210 Q360 190 400 200 T480 230 T520 270 T580 300 T640 340"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          strokeDasharray="10 6"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Region pins */}
      {regions.map((r, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: r.delay }}
          viewport={{ once: true }}
          className="absolute flex flex-col items-center"
          style={{
            left: r.x,
            top: r.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="w-4 h-4 rounded-full mb-2"
            style={{
              background: r.color,
              boxShadow: `0 0 10px ${r.color}, 0 0 20px ${r.color}`,
            }}
          ></div>
          <span className="text-xs text-gray-200 whitespace-nowrap">
            {r.emoji} {r.name}
          </span>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 text-left text-xs text-gray-400">
        <p>🌐 Expansion Path Visualization</p>
        <p className="opacity-60">Developed with Framer Motion / SVG</p>
      </div>
    </div>
  );
}