"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Showroom3DGallery from "../components/Showroom3DGallery";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className="bg-[#0B0C10] text-white relative overflow-hidden">

      {/* ===== Floating Tiles Background ===== */}
      <div className="absolute inset-0 overflow-hidden z-0">
  {[...Array(60)].map((_, i) => (
    <div
      key={i}
      className={`${styles.tile} ${styles[`tile${i % 5}`]}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 12}s`,
      }}
    />
  ))}
</div>

     {/* ===== HERO SECTION ===== */}
<section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[90vh] px-6 pt-10 relative z-10">
  
  {/* HERO TEXT */}
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
        design with <span className="text-teal-400 font-semibold">Tile-It-3D</span>.
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
          Apply for Tile-It Card
        </Link>
      </div>
    </Reveal>
  </motion.div>

  {/* HERO VOXDECK 3D SHOWROOM EMBED */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="hidden md:block"
  >
    <div className="w-full h-[400px] rounded-xl border border-teal-400/30 shadow-[0_0_25px_#00F5FF33] overflow-hidden backdrop-blur-sm">
      <iframe
        src="https://www.voxdeck.ai/slides/3fo4k4tqv772"
        title="Tile-It-3D VoxDeck Showroom"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  </motion.div>
</section>


{/* ===== SHOWROOM VIEWS SECTION ===== */}
<section className="relative py-28 z-10 overflow-hidden">
  {/* background glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-orange-500/5 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400 mb-12"
    >
      Experience Both Sides of the <span className="text-white">Showroom</span>
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Sales Rep 3D Gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 0.7 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Showroom3DGallery
          label="Sales Rep View"
          color="teal"
          images={[
            "/images/showroom-salesrep.png",
            "/images/showroom-salesrep-2.png",
            "/images/showroom-salesrep-3.png",
            "/images/showroom-salesrep-4.png",
          ]}
        />
      </motion.div>

      {/* Customer 3D Gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 0.7 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Showroom3DGallery
          label="Customer View"
          color="orange"
          images={[
            "/images/showroom-customer.png",
            "/images/showroom-customer-2.png",
            "/images/showroom-customer-3.png",
            "/images/showroom-customer-4.png",
          ]}
        />
      </motion.div>
    </div>
  </div>

  {/* animated glow ring */}
  <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
</section>
{/* ===== HOW IT WORKS ===== */}
<section className="relative py-28 bg-[#0B0C10] text-center overflow-hidden z-10">
  {/* background shimmer */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/5 to-orange-400/10 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400"
    >
      How It Works
    </motion.h2>

    <div className="grid md:grid-cols-4 gap-8 text-left mt-16">
      {[
        {
          step: "1️⃣ Visualize",
          desc: "Customers pick tiles, colours, and layout with our interactive 3D tool.",
          color: "from-teal-400 to-orange-400",
          delay: 0.1,
        },
        {
          step: "2️⃣ Calculate",
          desc: "The app computes exact quantities and cost instantly — no manual math.",
          color: "from-orange-400 to-yellow-400",
          delay: 0.3,
        },
        {
          step: "3️⃣ Generate",
          desc: "A unique ticket & QR code are created automatically for checkout or sharing.",
          color: "from-cyan-400 to-teal-400",
          delay: 0.5,
        },
        {
          step: "4️⃣ Scan",
          desc: "Cashier scans the QR → order appears instantly → ready to pay — done!",
          color: "from-pink-500 to-orange-400",
          delay: 0.7,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: item.delay }}
          viewport={{ once: true }}
          className="relative p-8 bg-[#111]/70 border border-gray-800 rounded-xl 
                     hover:border-teal-400/40 hover:shadow-[0_0_25px_#00F5FF44] transition group"
        >
          <div
            className={`absolute top-0 left-0 w-1 h-full rounded-l-xl bg-gradient-to-b ${item.color}`}
          ></div>
          <h3 className="text-xl font-semibold mb-3 text-teal-400">{item.step}</h3>
          <p className="text-gray-300 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Summary line */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      viewport={{ once: true }}
      className="text-gray-400 text-lg max-w-3xl mx-auto mt-16"
    >
      Result: A smooth, five‑minute digital sale — fewer returns, faster transactions,
      happier customers.
    </motion.p>
  </div>
</section>

{/* ===== VALUE PROPS ===== */}
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
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-teal-500 to-orange-500 blur-xl transition"></div>
      <h3 className="text-2xl font-bold text-teal-400 mb-4">{item.title}</h3>
      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
    </motion.div>
  ))}
</section>


{/* ===== WHY CHOOSE TILE-IT-3D ===== */}
<section className="relative py-28 bg-gradient-to-b from-[#0B0C10] via-[#0F1014] to-[#0B0C10] z-10 overflow-hidden">
  {/* subtle glowing background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.06),transparent_50%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,165,64,0.05),transparent_50%)]"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400 mb-12"
    >
      Why Distributors Choose <span className="text-white">Tile‑It‑3D</span>
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Seamless Sales Pipeline",
          desc: "From 3D room views to instant credit pre‑approvals — close deals in minutes, not days.",
          icon: "🧩",
        },
        {
          title: "Brand Customization",
          desc: "White‑label your entire 3D showroom, maintaining your unique visual identity across every store.",
          icon: "🎨",
        },
        {
          title: "Distributor Dashboard",
          desc: "Manage products, promotions, and real‑time customer interactions with one futuristic control hub.",
          icon: "🛰️",
        },
        {
          title: "Smart Financing",
          desc: "Offer tailored loan options directly in‑app with our integrated Tile‑It Card system.",
          icon: "💳",
        },
        {
          title: "Visual Accuracy",
          desc: "Tiles and textures are rendered with precision lighting, so buyers see exactly what they’ll install.",
          icon: "🪩",
        },
        {
          title: "LATAM + Caribbean Ready",
          desc: "Built for multilingual markets, local currencies, and cross‑border sales — we grow where you do.",
          icon: "🌎",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111]/70 border border-gray-800 rounded-2xl p-8 text-left relative group hover:border-teal-400/30 hover:shadow-[0_0_30px_#00F5FF33] transition"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-teal-500 via-orange-500 to-transparent blur-3xl transition"></div>
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-2xl font-bold text-teal-400 mb-3">{item.title}</h3>
          <p className="text-gray-300 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* gentle gradient divider + subtext */}
    <div className="mt-16 text-gray-400 max-w-3xl mx-auto">
      <p className="text-lg">
        With <span className="text-teal-400 font-semibold">Tile‑It‑3D</span>, your distributors evolve into digital showrooms 
        — bridging imagination and installation through immersive visuals, instant purchasing, 
        and complete brand control.  
      </p>
    </div>
  </div>
</section>

{/* ===== FEATURE HIGHLIGHTS ===== */}
<section className="relative py-28 bg-[#0B0C10] text-center overflow-hidden z-10">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/5 to-orange-400/10 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400"
    >
      Feature Highlights
    </motion.h2>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-gray-300 min-w-[600px]">
        <thead>
          <tr className="border-b border-gray-700 text-teal-400">
            <th className="py-3 px-4 font-semibold">Feature</th>
            <th className="py-3 px-4 font-semibold">Benefit</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["3‑D Showroom Viewer", "Turn your product catalogue into interactive rooms."],
            ["Ticket + QR System", "Eliminates paper quotes and manual entry errors."],
            ["Offline Operation", "Keep selling even with weak Wi‑Fi."],
            ["Analytics Dashboard", "Track top‑selling tiles & sales rep performance."],
            ["White‑Label Branding", "Your logo, colours, and catalogue — our technology."],
            ["Secure Architecture", "Data encrypted & backed daily on cloud servers."],
          ].map(([feature, benefit], i) => (
            <motion.tr
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-800 hover:bg-[#111] transition"
            >
              <td className="py-3 px-4 font-semibold text-teal-400">{feature}</td>
              <td className="py-3 px-4">{benefit}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* ===== FAQ ===== */}
<section className="relative py-24 bg-[#0B0C10] text-left z-10">
  <div className="max-w-5xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400"
    >
      FAQ
    </motion.h2>

    <div className="space-y-8">
      {[
        {
          q: "Do we need a special POS?",
          a: "No — Tile‑It‑3D generates its own QR order ticket; the cashier simply scans it.",
        },
        {
          q: "How long is setup?",
          a: "About 10 business days after your catalog upload and branding review.",
        },
        {
          q: "Can it work offline?",
          a: "Yes — the system caches data and syncs once online.",
        },
        {
          q: "Can we add other products?",
          a: "Absolutely. Create a full catalog of adhesives, tools, and grout directly in the platform.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111]/70 p-6 rounded-xl border border-gray-800 hover:border-teal-400/40 transition"
        >
          <h3 className="text-teal-400 font-semibold mb-2">{item.q}</h3>
          <p className="text-gray-300 leading-relaxed">{item.a}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ===== READY TO GET STARTED ===== */}
<section className="relative py-32 text-center bg-gradient-to-b from-[#0B0C10] via-[#101214] to-[#0B0C10] overflow-hidden z-10">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"
  >
    The Future of Tile Sales Is Here
  </motion.h2>

  <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
    Empower your salespeople, impress your customers, and modernize your showroom.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
    <a
      href="/distributors/demo"
      className="bg-teal-400 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_#00F5FF66] transition"
    >
      🔹 Book Your Free Demo →
    </a>
    <a
      href="/api/pricing-guide"
      className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_#FF6B3566] transition"
    >
      🔹 Download Pricing Guide (PDF)
    </a>
  </div>

  <p className="text-gray-400 text-sm max-w-md mx-auto">
    Setup from USD <span className="text-teal-400 font-semibold">1 500</span> • Plans starting at 
    <span className="text-orange-400 font-semibold">199 / month</span> • Includes training and support
  </p>
</section>

{/* ===== REAL-WORLD IMPACT SECTION ===== */}
<section className="relative py-28 bg-[#0B0C10] overflow-hidden z-10">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/5 to-orange-400/10 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-orange-400 mb-8"
    >
      Real‑World Impact — Powered by Digital Showrooms
    </motion.h2>

    <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
      Independent regional market reports¹ show that distributors in the Caribbean who adopt
      immersive sales and visualization platforms experience measurable performance growth
      compared with traditional showroom models.
    </p>

    {/* STAT BARS */}
    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
      {[
        { label: "Higher Conversion Rates", value: 24, color: "from-teal-400 to-orange-400", desc: "+18‑25 % average increase"},
        { label: "Longer Customer Engagement", value: 40, color: "from-orange-400 to-yellow-400", desc: "≈ 40 % longer dwell time"},
        { label: "Faster Closing Cycle", value: 35, color: "from-cyan-400 to-teal-400", desc: "~ 35 % quicker decision‑making"},
        { label: "Fewer Returns", value: 25, color: "from-pink-500 to-orange-400", desc: "‑20‑30 % product returns"},
        { label: "Customer Satisfaction", value: 28, color: "from-teal-300 to-orange-300", desc: "+28 % NPS improvement"},
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-end h-[280px] w-[70px] md:w-[90px]"
        >
          {/* bar container */}
          <div className="absolute bottom-0 w-full h-full bg-[#111]/60 rounded-xl border border-gray-800"></div>

          {/* animated value bar */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${stat.value * 2.5}px` }}
            transition={{ duration: 1.3, delay: 0.3 + i * 0.2 }}
            viewport={{ once: true }}
            className={`absolute bottom-0 w-full rounded-t-xl bg-gradient-to-t ${stat.color} shadow-[0_0_25px_#00F5FF55]`}
          ></motion.div>

          {/* number + label */}
          <div className="absolute -top-10 text-3xl font-bold text-white">{stat.value}%</div>
          <p className="absolute -bottom-14 w-[120px] text-sm text-gray-200 font-medium leading-tight">
            {stat.label}
          </p>
          <p className="absolute -bottom-4 text-xs text-gray-500">{stat.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Interpretive note */}
    <div className="mt-20 max-w-3xl mx-auto text-gray-400 text-base leading-relaxed">
      <p>
        These results reflect digital commerce adoption patterns observed across Jamaica,
        Trinidad & Tobago, Barbados, and the broader Caribbean between 2021–2023,
        driven by rising customer expectations for immersive buying experiences
        (sources: Inter‑American Development Bank Digital Retail Survey 2022, Statista LATAM E‑Commerce Report 2023).
      </p>
    </div>
  </div>
</section>

      {/* ===== CALLOUT ===== */}
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
