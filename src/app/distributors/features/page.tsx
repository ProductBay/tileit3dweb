"use client";

import Link from "next/link";
import Reveal from "../../../components/Reveal";
import { motion } from "framer-motion";

export default function DistributorFeaturesPage() {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <Reveal>
          <h1 className="text-5xl font-extrabold text-teal-400 text-center mb-6">
            Why Distributors Choose Tile‑It‑3D
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16">
            A fully <span className="text-orange-400">white‑label 3D showroom solution</span> designed 
            to empower distributors. Sell faster, boost ticket sizes, and give customers 
            an immersive buying experience — all under your brand.
          </p>
        </Reveal>

        {/* PROBLEM → SOLUTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Reveal>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow">
              <h2 className="text-2xl text-orange-400 font-bold mb-4">The Challenge</h2>
              <ul className="space-y-3 text-gray-300">
                <li>❌ Customers can’t visualize tiles → indecision delays sales.</li>
                <li>❌ Reps spend hours in back‑and‑forth consultations.</li>
                <li>❌ Abandoned orders when customers “need to think.”</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow">
              <h2 className="text-2xl text-teal-400 font-bold mb-4">Our Solution</h2>
              <ul className="space-y-3 text-gray-300">
                <li>✅ Instant 3D visualization makes tile choices effortless.</li>
                <li>✅ Sales reps close 2× faster with live showroom tools.</li>
                <li>✅ Customers buy confidently = higher conversion rates.</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* SALES REP VS CUSTOMER FACING */}
        <Reveal>
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
            Two Powerful Tools for Distributors
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">🧑‍💼 Sales Rep Showroom</h3>
            <p className="text-gray-300 mb-4">
              Empower reps with an interactive 3D showroom at their fingertips. 
              Customers visualize, choose, and orders feed directly to cashier workflow.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>⚡ Close deals in minutes instead of hours.</li>
              <li>⚡ Eliminate indecision with immersive visuals.</li>
              <li>⚡ Orders flow straight into the ticket system.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">🌐 Customer‑Facing Showroom</h3>
            <p className="text-gray-300 mb-4">
              Embed a 3D showroom directly on your website so customers can 
              explore your catalogue, design rooms, and arrive ready to purchase.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>⚡ 100 % white‑label: your domain, your brand.</li>
              <li>⚡ Embed within minutes — no dev needed.</li>
              <li>⚡ Catalogue auto‑syncs with your updates.</li>
            </ul>
          </motion.div>
        </div>

        {/* FEATURE HIGHLIGHTS */}
        <Reveal>
          <h2 className="text-4xl font-bold text-teal-400 text-center mb-10">
            Feature Highlights
          </h2>
        </Reveal>
        <div className="overflow-x-auto mb-16">
          <table className="w-full min-w-[600px] text-left text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-teal-400">
                <th className="py-3 px-4 font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["3‑D Showroom Viewer", "Turn your product catalogue into interactive rooms."],
                ["Ticket + QR System", "Eliminates paper quotes and manual entry errors."],
                ["Offline Operation", "Keep selling even in weak wifi areas."],
                ["Analytics Dashboard", "Track top‑selling tiles & sales rep performance."],
                ["White‑Label Branding", "Your logo, colours, and catalogue — our technology."],
                ["Secure Architecture", "Data encrypted & backed daily on cloud servers."],
              ].map(([f, b], i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-800 hover:bg-[#111] transition"
                >
                  <td className="py-3 px-4 font-semibold text-teal-400 whitespace-nowrap">
                    {f}
                  </td>
                  <td className="py-3 px-4">{b}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PLANS & PRICING */}
        <Reveal>
          <h2 className="text-4xl font-bold text-orange-400 text-center mb-10">
            Plans & Pricing
          </h2>
        </Reveal>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left text-gray-300 border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-700 text-teal-400">
                <th className="py-3 px-4 font-semibold">Plan</th>
                <th className="py-3 px-4 font-semibold">Setup Fee</th>
                <th className="py-3 px-4 font-semibold">Monthly</th>
                <th className="py-3 px-4 font-semibold">Ideal For</th>
                <th className="py-3 px-4 font-semibold">Highlights</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  plan: "Starter",
                  setup: "$1 500 USD",
                  monthly: "$199 USD",
                  ideal: "Single storefront",
                  highlights:
                    "3‑D viewer • 200 SKUs • QR orders • basic analytics",
                },
                {
                  plan: "Professional",
                  setup: "$3 000 USD",
                  monthly: "$499 USD",
                  ideal: "Multi‑rep teams & branches",
                  highlights:
                    "Offline mode • advanced analytics • catalog 2 000 SKUs",
                },
                {
                  plan: "Enterprise White‑Label",
                  setup: "$5 000 + USD",
                  monthly: "$799 – 999 USD",
                  ideal: "Large chains or regional distributors",
                  highlights:
                    "Full branding • unlimited catalog • dedicated support",
                },
              ].map((p, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-800 hover:bg-[#111] transition"
                >
                  <td className="py-3 px-4 font-semibold text-teal-400">{p.plan}</td>
                  <td className="py-3 px-4">{p.setup}</td>
                  <td className="py-3 px-4">{p.monthly}</td>
                  <td className="py-3 px-4">{p.ideal}</td>
                  <td className="py-3 px-4">{p.highlights}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Included features */}
        <div className="bg-[#111]/70 border border-gray-800 rounded-xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-teal-400 mb-4">All Plans Include</h3>
          <p className="text-gray-300 text-left">
            ✅ 3‑D Tile Visualizer    ✅ QR Ticket & Order System    ✅ Training & Software Updates   
            ✅ Secure Cloud Backup
          </p>
        </div>

        {/* Add‑ons */}
        <div className="bg-[#111]/70 border border-gray-800 rounded-xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-teal-400 mb-4">Optional Add‑Ons</h3>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>– Branch Licences ($100 / month)</li>
            <li>– Advanced Analytics ($200 / month)</li>
            <li>– On‑site Staff Training ($500 / session)</li>
            <li>– Dedicated Support Manager ($250 / month)</li>
          </ul>
          <p className="text-gray-400 text-sm mt-4">
            💡 Pay yearly and save 10 %. Cancel any time with 30 days’ notice.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            The Future of Tile Sales Is Here.
          </h2>
          <p className="text-gray-400 mb-8">
            Empower your salespeople, impress your customers, and modernize your showroom.
          </p>
          <Link
            href="/distributors/demo"
            className="bg-gradient-to-r from-teal-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-110 shadow-[0_0_30px_#00F5FF] transition inline-block"
          >
            🔹 Schedule Your Demo
          </Link>
          <p className="text-gray-400 text-sm mt-6">
            Setup from USD <span className="text-teal-400 font-semibold">1 500</span> • Plans starting at 
            <span className="text-orange-400 font-semibold">199 / month</span> • Includes training and support
          </p>
        </div>
      </div>
    </div>
  );
}