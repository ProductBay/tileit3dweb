"use client";

import { motion } from "framer-motion";
import ExpansionMap from "../components/ExpansionMap";
export default function AboutPage() {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6 overflow-hidden relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* ===== HEADING ===== */}
        <h1 className="text-5xl font-bold text-teal-400 mb-6">
          About Tile‑It‑3D
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
          Born in St Elizabeth, Jamaica 🇯🇲, Tile‑It‑3D is revolutionizing tile and
          home‑design retail across the Caribbean and LATAM. Our mission is simple:
          empower distributors with future‑ready tools and give customers
          the clarity and confidence to build their dream spaces.
        </p>

        {/* ===== VISION / MISSION ===== */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#111] p-6 rounded-xl shadow border border-gray-800">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">🌍 Our Vision</h2>
            <p>
              To become the leading 3D‑design platform for tiles and surfaces
              across the Caribbean and LATAM, giving every customer access to
              cutting‑edge visualization and flexible financing.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl shadow border border-gray-800">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">🚀 Our Mission</h2>
            <p>
              To empower distributors with white‑labeled 3D showroom technology,
              ensuring they can deliver premium digital experiences, close sales
              faster, and grow customer satisfaction.
            </p>
          </div>
        </div>
      </div>
{/* ===== EXPANSION ROADMAP ===== */}
<section className="relative py-28 text-center z-10">
  {/* background glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/5 to-orange-500/10 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400 mb-12"
    >
      Expansion Roadmap
    </motion.h2>

    <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
      Starting from 
      <span className="text-teal-400 font-semibold">Jamaica</span> — then scaling
      across the <span className="text-orange-400 font-semibold">Caribbean</span> — and expanding into
      <span className="text-teal-400 font-semibold"> LATAM markets</span> such as Mexico, Panama, Colombia, and Brazil.
    </p>

    {/* Interactive Expansion Map */}
    <ExpansionMap />

    {/* Timeline Phases */}
    <div className="mt-16 grid md:grid-cols-4 gap-10">
      {[
        {
          header: "Phase 1",
          location: "🇯🇲 Jamaica",
          color: "text-teal-400",
          desc: "Pilot launch with core distributors and early showroom integrations.",
        },
        {
          header: "Phase 2",
          location: "🏝️ Caribbean",
          color: "text-orange-400",
          desc: "Expansion to Trinidad & Tobago, Barbados, and Dominican Republic through regional partnerships.",
        },
        {
          header: "Phase 3",
          location: "🌎 LATAM Entry",
          color: "text-teal-300",
          desc: "Deployments across Mexico City, Panama City, Bogotá, and São Paulo.",
        },
        {
          header: "Phase 4",
          location: "🚀 Future Growth",
          color: "text-orange-300",
          desc: "Localized AI showroom analytics and region‑wide financing integration.",
        },
      ].map((phase, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative p-6 bg-[#111]/70 border border-gray-800 rounded-xl hover:border-teal-400/40 hover:shadow-[0_0_25px_#00F5FF33] transition"
        >
          <h3 className={`${phase.color} text-xl font-semibold mb-2`}>
            {phase.header}
          </h3>
          <h4 className="text-white font-bold mb-3">{phase.location}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* gentle glow accent */}
  <div className="absolute -bottom-32 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
</section>
      {/* simple pulse animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}