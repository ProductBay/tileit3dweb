"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0B0C10]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-teal-400">
          Tile‑It‑3D
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/">Home</Link>

          {/* Distributor Dropdown */}
          <div className="relative group">
            <button className="hover:text-teal-400">Distributors ▾</button>
            <div className="absolute hidden group-hover:block bg-[#111] border border-gray-800 mt-2 rounded shadow-lg">
              <Link
                href="/distributors/features"
                className="block px-4 py-2 hover:bg-teal-500/20"
              >
                Features
              </Link>
              <Link
                href="/distributors/demo"
                className="block px-4 py-2 hover:bg-teal-500/20"
              >
                Request Demo
              </Link>
            </div>
          </div>

          <Link href="/customers/apply-card">Customers</Link>
          <Link href="/showroom">Showroom</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* CTA */}
        <Link
          href="/distributors/demo"
          className="ml-4 bg-teal-400 px-4 py-2 rounded-lg font-semibold text-black hover:shadow-[0_0_20px_#00F5FF] transition"
        >
          Request Demo
        </Link>
      </div>
    </nav>
  );
}