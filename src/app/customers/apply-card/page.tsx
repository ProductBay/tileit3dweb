"use client"; 

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../../../components/Reveal"; // reusable scroll reveal

export default function ApplyCardPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Title with Reveal */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 text-center mb-6">
            Apply for the Tile-It Card
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Powered by <span className="text-orange-500 font-semibold">Bank X</span>, 
            the Tile‑It Card gives you instant access to flexible financing and the power 
            to bring your dream home renovations to life. Apply below and get{" "}
            <span className="text-teal-400 font-semibold">pre‑approved in seconds</span>.
          </p>
        </Reveal>

        {/* Animated Card Visual */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: 45 }}
          whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-r from-teal-500 to-orange-500 p-[2px] rounded-xl mb-12 shadow-lg"
        >
          <div className="bg-[#111] rounded-xl p-10 text-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <h2 className="text-3xl font-bold mb-2 tracking-wide">Tile-It Card</h2>
            <p className="text-gray-400">Fast, flexible monthly payments</p>
          </div>
        </motion.div>

        {/* Application Form */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-6">
              Application Form
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="input-field"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="input-field"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="input-field"
              />
            </div>

            {/* Basic Income Range */}
            <div className="mt-4">
              <label className="block mb-2 text-gray-300">Income Range</label>
              <select required className="input-field">
                <option value="">Select</option>
                <option value="under-1000">Under $1,000/mo</option>
                <option value="1000-3000">$1,000 - $3,000/mo</option>
                <option value="3000-5000">$3,000 - $5,000/mo</option>
                <option value="5000-plus">$5,000+/mo</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-teal-400 text-black p-3 rounded-lg font-semibold 
                         hover:scale-105 hover:shadow-[0_0_25px_#00F5FF] transition transform"
            >
              Apply Now
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-green-500/20 border border-green-500 text-green-400 p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-2">✅ Application Received!</h3>
            <p>
              Thank you for applying. You’ll receive your{" "}
              <span className="font-semibold">instant pre‑approval</span>{" "}
              status via email/WhatsApp from our Bank X partner shortly.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}