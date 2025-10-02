"use client";

import { motion } from "framer-motion";

export default function TileGridBackground() {
  const rows = 10; // number of tile rows
  const cols = 12; // number of columns

  return (
    <div className="absolute inset-0 -z-10 grid grid-cols-12 gap-3 p-10">
      {Array.from({ length: rows * cols }).map((_, i) => (
        <motion.div
          key={i}
          className="w-16 h-16 bg-teal-500/30 border border-teal-400/40 rounded-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}