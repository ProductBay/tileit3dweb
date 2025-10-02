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
            Why Distributors Choose Tile‑It‑3D
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16">
            A fully <span className="text-orange-400">white‑label 3D showroom solution</span> designed 
            to empower distributors. Sell faster, boost ticket sizes, and give customers 
            an immersive buying experience they can’t forget — all under your brand.
          </p>
        </Reveal>

        {/* PROBLEM → SOLUTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Reveal>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow">
              <h2 className="text-2xl text-orange-400 font-bold mb-4">The Challenge</h2>
              <ul className="space-y-3 text-gray-300">
                <li>❌ Customers can’t visualize tiles → indecision delays sales.</li>
                <li>❌ Reps spend hours in back-and-forth consultations.</li>
                <li>❌ Abandoned orders when customers “need to think.”</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow">
              <h2 className="text-2xl text-teal-400 font-bold mb-4">Our Solution</h2>
              <ul className="space-y-3 text-gray-300">
                <li>✅ Instant 3D visualization makes tile choices easy and compelling.</li>
                <li>✅ Sales reps close 2× faster with live showroom tools.</li>
                <li>✅ Customers walk in more confident = higher conversion rates.</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* SALES REP VS CUSTOMER FACING */}
        <Reveal>
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
            Two Powerful Tools for Distributors
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Sales Rep Mode */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">🧑‍💼 Sales Rep Showroom</h3>
            <p className="text-gray-300 mb-4">
              Empower your reps with an interactive 3D showroom at their fingertips. Customers 
              visualize tiles, choose instantly, and orders are sent directly to cashier workflow.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>⚡ Close deals in minutes, not hours.</li>
              <li>⚡ Eliminate indecision with immersive visuals.</li>
              <li>⚡ Orders go directly into ticket/cashier system.</li>
            </ul>
          </motion.div>

          {/* Customer Facing Showroom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">🌐 Customer‑Facing Showroom</h3>
            <p className="text-gray-300 mb-4">
              Embed a 3D showroom directly on your website where customers can 
              explore your tile catalog on their own, building confidence before 
              walking through your door.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>⚡ 100% white‑label: always under your brand/domain.</li>
              <li>⚡ Embed in minutes — no dev required.</li>
              <li>⚡ Catalog stays in sync with your updates.</li>
            </ul>
          </motion.div>
        </div>

        {/* FEATURE HIGHLIGHTS */}
        <Reveal>
          <h2 className="text-4xl font-bold text-teal-400 text-center mb-10">
            Key Features That Drive Sales
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
            <h3 className="text-xl font-bold text-orange-500 mb-3">White‑Label Branding</h3>
            <p className="text-gray-300 text-sm">Your name, your domain, always YOUR brand front and center.</p>
          </div>
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
            <h3 className="text-xl font-bold text-orange-500 mb-3">Instant Orders</h3>
            <p className="text-gray-300 text-sm">Orders go from showroom → cashier in minutes with QR code workflow.</p>
          </div>
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
            <h3 className="text-xl font-bold text-orange-500 mb-3">Financing Integration</h3>
            <p className="text-gray-300 text-sm">Bank‑powered Tile‑It‑3D Card helps customers buy confidently NOW.</p>
          </div>
        </div>

        {/* FLEXIBLE PRICING SECTION */}
        <Reveal>
          <h2 className="text-4xl font-bold text-orange-400 text-center mb-6">
            White‑Label Software. Clear Value.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="bg-[#111] max-w-3xl mx-auto p-10 rounded-xl border border-gray-800 shadow text-center mb-20">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Tile‑It‑3D White‑Label Showroom</h3>
            <p className="text-gray-400 mb-6">
              Every distributor gets a fully branded showroom — tailored to their catalog, 
              order flow, and brand — with optional customizations as needed.
            </p>
            <div className="mb-8">
              <p className="text-3xl font-extrabold text-white mb-2">$1,500 – $5,000 USD</p>
              <p className="text-lg text-gray-400 mb-4">One‑Time Setup Fee</p>
              <p className="text-xl font-bold text-teal-400">$200 – $500 USD/month</p>
              <p className="text-gray-400 text-sm">Recurring SaaS fee (depends on customization & level of support).</p>
            </div>
            <ul className="space-y-3 text-gray-300 text-left max-w-lg mx-auto mb-8">
              <li>⚡ White‑Label under your name, domain & branding</li>
              <li>⚡ Hosting, updates & dedicated support always included</li>
              <li>⚡ Both Sales Rep & Customer‑Facing modes included</li>
              <li>⚡ Catalog management + seamless order workflow</li>
              <li>⚡ Optional add‑ons: AR Viewer, Analytics Dashboard, Catalog Refresh</li>
            </ul>
            <Link 
              href="/distributors/demo" 
              className="bg-gradient-to-r from-teal-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-110 shadow-[0_0_30px_#00F5FF] transition"
            >
              Request a Custom Quote & Demo
            </Link>
          </div>
        </Reveal>

        {/* CTA */}
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            Ready to Transform Your Tile Business?
          </h2>
          <p className="text-gray-400 mb-8">
            Distributors across Jamaica, the Caribbean & LATAM are joining Tile‑It‑3D. 
            Don’t get left behind — lead the future of tile retail today.
          </p>
          <Link 
            href="/distributors/demo" 
            className="bg-gradient-to-r from-teal-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-110 shadow-[0_0_30px_#00F5FF] transition"
          >
            Request Your Demo
          </Link>
        </div>
      </div>
    </div>
  );
}