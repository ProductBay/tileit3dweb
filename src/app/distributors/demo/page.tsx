"use client";

import { useState } from "react";
import Reveal from "../../../components/Reveal"; // make sure this path is correct

export default function DistributorDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 text-center mb-6">
            Request Your Distributor Demo
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Watch the video below, then request your personalized demo.  
            <span className="text-teal-400 font-semibold">
              Available only to registered distributors.
            </span>
          </p>
        </Reveal>

        {/* Demo Video */}
        <Reveal delay={0.4}>
          <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg border border-gray-800">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=0"
              className="w-full h-full"
              title="Tile-It-3D Showroom Demo"
              allowFullScreen
            />
          </div>
        </Reveal>
<section className="max-w-5xl mx-auto my-20">
  <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Onboarding in 5–7 Business Days</h2>
  <div className="grid md:grid-cols-2 gap-6 text-gray-300">
    <div>
      <h3 className="font-semibold text-teal-400 mb-2">Step 1 – Branding & Domain</h3>
      <p>Your showroom launched under your brand + custom domain.</p>
    </div>
    <div>
      <h3 className="font-semibold text-teal-400 mb-2">Step 2 – Tile Catalog Prep</h3>
      <p>Provide photos + metadata, or use our Photography Service.</p>
    </div>
    <div>
      <h3 className="font-semibold text-teal-400 mb-2">Step 3 – Showroom Config</h3>
      <p>Organize floor/wall/premium catalog, grout presets, scaling.</p>
    </div>
    <div>
      <h3 className="font-semibold text-teal-400 mb-2">Step 4 – Orders & Workflow</h3>
      <p>WhatsApp + QR ticket ordering system setup.</p>
    </div>
  </div>
</section>
        {/* Request Form */}
        <Reveal delay={0.6}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] p-8 rounded-lg shadow-md max-w-2xl mx-auto"
            >
              <h2 className="text-2xl text-teal-400 font-bold mb-6 text-center">
                Distributor Demo Request Form
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name" required className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none" />
                <input type="text" placeholder="Contact Person" required className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none" />
                <input type="email" placeholder="Email Address" required className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none" />
                <input type="tel" placeholder="WhatsApp Number" required className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none" />
                <input type="text" placeholder="Country" required className="p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-teal-400 outline-none" />
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" required className="mr-2" />
                <label>
                  I am a <span className="text-teal-400 font-semibold">registered distributor</span>.
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-teal-400 text-black p-3 rounded-lg font-semibold hover:shadow-[0_0_20px_#00F5FF] transition"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500 text-green-400 p-6 rounded-lg text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">✅ Request Submitted!</h3>
              <p>
                A rep will contact you within{" "}
                <span className="font-semibold">24 hours</span> via WhatsApp or email.
              </p>
            </div>
          )}
        </Reveal>

      </div>
    </div>
  );
}