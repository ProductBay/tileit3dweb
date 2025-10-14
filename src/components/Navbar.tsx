"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDistributorMenu, setShowDistributorMenu] = useState(false);
  let hideMenuTimer: ReturnType<typeof setTimeout>;

  return (
    <nav className="fixed top-0 w-full bg-[#0B0C10]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand with Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/tile-it-logo.png"
              alt="Tile-It-3D logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-teal-400 tracking-wide">
            Tile-It-3D
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link href="/">Home</Link>

          {/* Distributor Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(hideMenuTimer);
              setShowDistributorMenu(true);
            }}
            onMouseLeave={() => {
              hideMenuTimer = setTimeout(() => setShowDistributorMenu(false), 120);
            }}
          >
            <button className="flex items-center gap-1 hover:text-teal-400">
              Distributors
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  showDistributorMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDistributorMenu && (
              <div
                className="absolute top-full left-0 bg-[#111] border border-gray-800 mt-2 rounded shadow-lg py-2 min-w-[200px]"
                onMouseEnter={() => clearTimeout(hideMenuTimer)}
                onMouseLeave={() => {
                  hideMenuTimer = setTimeout(() => setShowDistributorMenu(false), 120);
                }}
              >
                <Link
                  href="/distributors/features"
                  className="block px-4 py-2 hover:bg-teal-500/20 rounded-t"
                >
                  Features & Pricing
                </Link>
                <Link
                  href="/distributors/demo"
                  className="block px-4 py-2 hover:bg-teal-500/20"
                >
                  Request Demo
                </Link>
              </div>
            )}
          </div>

          <Link href="/customers/apply-card">Customers</Link>
          <Link href="/showroom">Showroom</Link>
          <Link href="/financing">Financing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/distributors/demo"
          className="hidden md:inline-block ml-4 bg-teal-400 px-4 py-2 rounded-lg font-semibold text-black hover:shadow-[0_0_20px_#00F5FF] transition"
        >
          Request Demo
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0C10] border-t border-gray-800">
          <ul className="flex flex-col py-4 px-6 space-y-3 text-white">
            <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

            {/* Mobile Distributors Dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setShowDistributorMenu(!showDistributorMenu)}
              >
                <span>Distributors</span>
                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    showDistributorMenu ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDistributorMenu && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link
                      href="/distributors/features"
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      Features & Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/distributors/demo"
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      Request Demo
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link href="/customers/apply-card" onClick={() => setMobileOpen(false)}>Customers</Link></li>
            <li><Link href="/showroom" onClick={() => setMobileOpen(false)}>Showroom</Link></li>
            <li><Link href="/financing" onClick={() => setMobileOpen(false)}>Financing</Link></li>
            <li><Link href="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            <li>
              <Link
                href="/distributors/demo"
                onClick={() => setMobileOpen(false)}
                className="bg-teal-400 text-black px-4 py-2 rounded-lg font-semibold text-center hover:shadow-[0_0_20px_#00F5FF] transition"
              >
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
