import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-gray-800 text-gray-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Tile-It-3D</h2>
          <p className="text-sm text-gray-400">
            Revolutionizing tile retail across the Caribbean & LATAM with 
            immersive 3D showrooms and flexible financing.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-sm">
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/distributors">Distributors</Link></li>
            <li><Link href="/showroom">Showroom</Link></li>
          </ul>
        </div>

        {/* Customer Links */}
        <div className="text-sm">
          <h3 className="text-white font-semibold mb-2">For Customers</h3>
          <ul className="space-y-2">
            <li><Link href="/customers/apply-card">Apply Card</Link></li>
            <li><Link href="/showroom">Try Showroom</Link></li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div className="text-sm">
          <h3 className="text-white font-semibold mb-2">Legal & Policies</h3>
          <ul className="space-y-2">
            <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms-of-use">Terms of Use</Link></li>
            <li><Link href="/legal/demo-policy">Demo Showroom Disclaimer</Link></li>
            <li><Link href="/legal/3d-expectations">Our 3D Expectations</Link></li>
            <li><Link href="/legal/distributor-terms">Distributor Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Note */}
      <div className="text-center mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Tile-It-3D • All Rights Reserved.
      </div>
    </footer>
  );
}
