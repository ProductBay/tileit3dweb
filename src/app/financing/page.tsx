"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";

export default function FinancingPage() {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <Reveal>
          <h1 className="text-5xl font-extrabold text-teal-400 text-center mb-6">
            Tile‑It‑3D Financing, Powered by Bank X
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16">
            Upgrade your home, complete larger projects, and close sales faster with the 
            <span className="text-orange-400"> Tile‑It‑3D Card by Bank X</span>.  
            Apply now and get <span className="text-teal-400 font-semibold">instant pre‑approval</span>.
          </p>
        </Reveal>

        {/* HOW IT WORKS TIMELINE */}
        <Reveal>
          <h2 className="text-3xl text-orange-400 font-bold text-center mb-10">How It Works</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { step: "1", title: "Apply Online", desc: "Fill out the Tile‑It‑3D pre‑approval form with your TRN + income info." },
            { step: "2", title: "Bank Approval", desc: "Bank X verifies your TRN and runs a credit bureau check instantly." },
            { step: "3", title: "Collect Card", desc: "If pre‑approved → Visit your nearest Bank X branch to collect your Tile‑It‑3D prepaid card." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow text-center"
            >
              <div className="text-5xl font-extrabold text-teal-400 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* REQUIREMENTS */}
        <Reveal>
          <h2 className="text-3xl font-bold text-teal-400 text-center mb-8">Requirements</h2>
        </Reveal>
        <div className="bg-[#111] p-10 rounded-xl border border-gray-800 mb-20">
          <ul className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto text-gray-300">
            <li>✅ Government‑issued TRN (Tax Registration Number)</li>
            <li>✅ Steady income proof (salary slip, contract, or bank statement)</li>
            <li>✅ Valid government ID</li>
            <li>✅ Mobile number (WhatsApp recommended) + email address</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <Reveal>
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">Why Choose Tile‑It‑3D Financing?</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} className="bg-[#111] p-8 rounded-xl shadow border border-gray-800">
            <h3 className="text-xl font-bold text-teal-400 mb-3">🏠 Customers</h3>
            <p className="text-gray-400 text-sm">Buy more confidently. Spread payments over time while securing tiles immediately.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} className="bg-[#111] p-8 rounded-xl shadow border border-gray-800">
            <h3 className="text-xl font-bold text-teal-400 mb-3">🏗️ Contractors</h3>
            <p className="text-gray-400 text-sm">Secure a line of credit for projects. Start jobs right away without upfront capital stress.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} className="bg-[#111] p-8 rounded-xl shadow border border-gray-800">
            <h3 className="text-xl font-bold text-teal-400 mb-3">🏢 Distributors</h3>
            <p className="text-gray-400 text-sm">Receive payment in full immediately. Bank X collects installments — you carry zero credit risk.</p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            Get Pre‑Approved Instantly
          </h2>
          <p className="text-gray-400 mb-8">
            Submit your info and unlock the Tile‑It‑3D+Bank X financing option today. 
            Faster projects, larger sales, smarter buying decisions.
          </p>
          <Link
            href="/customers/apply-card"
            className="bg-gradient-to-r from-teal-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-110 shadow-[0_0_30px_#00F5FF] transition"
          >
            Apply Now for Pre‑Approval
          </Link>
        </div>
      </div>
    </div>
  );
}