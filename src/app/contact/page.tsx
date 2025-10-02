"use client";

import { useState } from "react";
import Reveal from "../../components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <Reveal>
          <h1 className="text-5xl font-bold text-teal-400 text-center mb-6">
            Contact Us
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Whether you are a distributor ready to onboard or a customer applying for financing, we’re here to help.
          </p>
        </Reveal>

        {/* Contact Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-[#111] p-8 rounded-lg shadow-md"
          >
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
            </div>

            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 mt-4 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none"
            />

            <button
              type="submit"
              className="mt-6 w-full bg-teal-400 text-black p-3 rounded-lg font-semibold 
                         hover:shadow-[0_0_20px_#00F5FF] transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500 text-green-400 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">✅ Message Sent!</h3>
            <p>Thank you, we’ve received your inquiry. Our team will contact you within 24 hours.</p>
          </div>
        )}

        {/* Static Contact Info */}
        <div className="text-center mt-12 text-gray-300 leading-7">
          <p><span className="font-semibold text-white">📍 Address: </span>Mayfield Blvd, Southfield, St. Elizabeth, Jamaica</p>
          <p><span className="font-semibold text-white">👤 Founder: </span>Ashandie Powell</p>
          <p><span className="font-semibold text-white">📞 Phone / WhatsApp: </span>+1 (876) 594-7320</p>
        </div>
      </div>
    </div>
  );
}