"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Showroom3DGallery({ images, label, color }) {
  const [active, setActive] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative group perspective">
      {/* === Rotating Cube === */}
      <div className="scene group-hover:[animation-play-state:paused]">
        {images.map((src, i) => (
          <div key={i} className={`face face-${i + 1}`}>
            <img
              src={src}
              alt={`${label} view ${i + 1}`}
              onClick={() => setActive(src)}
              className="w-full h-full object-cover rounded-xl cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Caption Overlay */}
      <div className="absolute bottom-4 left-4 bg-[#0b0c10bb] p-3 rounded-lg">
        <h3 className={`text-lg font-semibold text-${color}-400`}>{label}</h3>
        <p className="text-gray-300 text-sm">Click image to enlarge</p>
      </div>

      {/* === Modal === */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              alt="Expanded view"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-[0_0_40px_#00F5FF55]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Styles === */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .scene {
          width: 100%;
          height: 400px;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 20s infinite linear;
          cursor: pointer;
        }
        .scene > .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
        }
        .face-1 { transform: rotateY(0deg) translateZ(200px); }
        .face-2 { transform: rotateY(90deg) translateZ(200px); }
        .face-3 { transform: rotateY(180deg) translateZ(200px); }
        .face-4 { transform: rotateY(-90deg) translateZ(200px); }

        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}