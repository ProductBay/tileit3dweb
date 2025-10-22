"use client";

import { motion } from "framer-motion";
import Reveal from "../../components/Reveal"; // adjust if necessary

export default function ShowroomPage() {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 text-center mb-6">
            Explore the Tile-It-3D Showroom
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
            Step into the future of tile shopping — interact with our live 3D showroom 
            below and experience how our partners are transforming the way customers 
            visualize tiles in real spaces.
          </p>
        </Reveal>

        {/* Embedded Showroom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full h-[80vh] rounded-xl overflow-hidden shadow-2xl border-2 border-[#222]"
        >
          <iframe
            src="https://tiles-r-us.vercel.app/"
            className="w-full h-full"
            title="Tile-It-3D Showroom"
            allow="fullscreen; vr; xr-spatial-tracking"
          />
        </motion.div>

      </div>
    </div>
  );
}
