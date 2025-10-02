import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0B0C10]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-teal-400">
          Tile-It-3D
        </Link>
        
        {/* Nav Items */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/distributors">Distributors</Link>
          <Link href="/customers/apply-card">Customers</Link>
          <Link href="/showroom">Showroom</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Highlight CTA */}
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