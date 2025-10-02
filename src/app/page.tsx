"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
// optional: if you add a Lottie animation later, uncomment this
// import Lottie from "lottie-react";
// import tileAnim from "../../public/tile-animation.json";

export default function Home() {
  return (
    <div className="bg-[#0B0C10] text-white relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[90vh] px-6 pt-10 relative z-10">
        
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-orange-500 to-teal-400 mb-6">
            The Future of Tile Showrooms,<br /> Delivered Today
          </h1>

          <Reveal delay={0.3}>
            <p className="max-w-2xl text-gray-300 text-lg md:text-xl mb-8">
              Experience stunning 3D tile visualizations, seamless distributor tools, 
              and instant financing integration. Transform the way your customers 
              design with <span className="text-teal-400 font-semibold">Tile‑It‑3D</span>.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/distributors/demo" 
                className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_25px_#00F5FF] transition transform text-center"
              >
                Request Demo
              </Link>
              <Link 
                href="/customers/apply-card" 
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_25px_#FF6B35] transition transform text-center"
              >
                Apply for Tile‑It Card
              </Link>
            </div>
          </Reveal>
        </motion.div>

        {/* Hero Animation / Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          {/* Replace this with your future Lottie or image illustration */}
          <div className="w-full h-[350px] bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-xl border border-teal-400/20 flex items-center justify-center">
            <span className="text-gray-500">[ Hero Animation / Illustration goes here ]</span>
          </div>
          {/* Example for Lottie animation:
          <Lottie animationData={tileAnim} loop={true} />
          */}
        </motion.div>
      </section>

      {/* VALUE PROPS */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8 relative z-10">
        {[
          { title: "Distributor-First", desc: "Close sales faster with seamless POS integration and white‑label 3D showrooms." },
          { title: "Customer Confidence", desc: "See every tile in stunning 3D before you buy. No more guesswork." },
          { title: "Instant Financing", desc: "Get pre-approved instantly with the Tile‑It Card powered by Bank X." },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#111] rounded-xl p-8 shadow-lg border border-gray-800 hover:scale-105 hover:border-teal-400/50 transition transform relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-teal-500 to-orange-500 blur-xl transition"></div>
            
            <h3 className="text-2xl font-bold text-teal-400 mb-4">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CALLOUT */}
      <section className="py-24 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Build The Future of Tile Retail With Us
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Partner with Tile‑It‑3D to give your distributors, designers, and customers
            the most advanced showroom technology in the Caribbean and LATAM.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Link 
            href="/distributors/demo" 
            className="bg-gradient-to-r from-teal-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold tracking-wide hover:scale-110 hover:shadow-[0_0_40px_#00F5FF] transition transform"
          >
            Become a Distributor
          </Link>
        </Reveal>
      </section>
    </div>
  );
}