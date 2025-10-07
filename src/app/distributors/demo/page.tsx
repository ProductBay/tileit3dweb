"use client";

import { useState } from "react";
import Reveal from "../../../components/Reveal";
import { motion } from "framer-motion";

export default function DistributorDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6 overflow-hidden relative">
      {/* background burst */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/10 to-orange-400/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== HERO ===== */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400 mb-6">
            Request Your Distributor Demo
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience how <span className="text-teal-400 font-semibold">Tile‑It‑3D </span>  
             turns ordinary showrooms into sleek digital storefronts.  
            Share your details below — and your branded 3‑D dashboard could be live in just a week.
          </p>
        </Reveal>

        {/* ===== EXPERIENCE SHOWCASE ===== */}
        <section className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          {[
            {
              icon: "🧱",
              title: "3‑D Showroom",
              desc: "Interact with lifelike tiles inside virtual rooms — embedded directly on your site.",
            },
            {
              icon: "💳",
              title: "Instant Orders",
              desc: "Customers build, calculate, and pay in minutes via QR Ticket checkout.",
            },
            {
              icon: "📈",
              title: "Analytics Dashboard",
              desc: "View top products, peak hours, and sales‑rep performance in real time.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111]/70 p-8 rounded-xl border border-gray-800 hover:border-teal-400/40 hover:shadow-[0_0_30px_#00F5FF33] transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* ===== ONBOARDING STEPS ===== */}
        <section className="my-20">
          <Reveal>
            <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">
              Onboarding in 5 – 7 Business Days
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            {[
              {
                step: "Step 1 – Brand & Domain",
                desc: "Launch your showroom under your domain with custom branding.",
              },
              {
                step: "Step 2 – Catalog Prep",
                desc: "Send product images + details or book our Photography Service.",
              },
              {
                step: "Step 3 – Showroom Config",
                desc: "Organize floor/wall/premium tiles, grout presets, and scaling.",
              },
              {
                step: "Step 4 – Live Orders",
                desc: "Setup WhatsApp + QR order workflow and cash‑desk integration.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111]/60 border border-gray-800 p-6 rounded-lg hover:border-teal-400/40 transition"
              >
                <h3 className="font-semibold text-teal-400 mb-2">{item.step}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== DEMO REQUEST FORM ===== */}
        <Reveal delay={0.3}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-[#111]/80 p-10 rounded-lg border border-gray-800 shadow max-w-2xl mx-auto mb-24 relative"
            >
              <h2 className="text-2xl font-bold text-teal-400 mb-6 text-center">
                Distributor Demo Request Form
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Contact Person"
                  required
                  className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  required
                  className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Country"
                  required
                  className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none"
                />
              </div>

              <div className="flex items-center mt-4 text-sm">
                <input type="checkbox" required className="mr-2 accent-teal-400" />
                <label>
                  I confirm that I am a 
                  <span className="text-teal-400 font-semibold">
                    registered distributor
                  </span>.
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-gradient-to-r from-teal-400 to-orange-500 text-black p-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_25px_#00F5FF] transition"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border border-green-500 text-green-400 p-8 rounded-lg text-center max-w-2xl mx-auto mb-24"
            >
              <h3 className="text-2xl font-bold mb-2">✅ Request Submitted!</h3>
              <p>
                A Tile‑It‑3D rep will reach out within{" "}
                <span className="font-semibold">24 hours</span> via WhatsApp or email.
              </p>
            </motion.div>
          )}
        </Reveal>

        {/* ===== FINAL CTA ===== */}
        <section className="text-center pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400 mb-6"
          >
            Ready to Build the Future of Tile Sales?
          </motion.h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let’s bring your showroom to life — digitally. From Jamaica to LATAM,  
            distributors are transforming their flow with Tile‑It‑3D.
          </p>
          <a
            href="/distributors/features"
            className="bg-gradient-to-r from-teal-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-110 shadow-[0_0_30px_#00F5FF] transition inline-block"
          >
            Explore Features & Pricing
          </a>
        </section>
      </div>
    </div>
  );
}