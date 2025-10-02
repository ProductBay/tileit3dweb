import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-gray-800 text-gray-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Tile-It-3D</h2>
          <p className="text-sm text-gray-400">
            Revolutionizing tile retail across the Caribbean & LATAM with 
            immersive 3D showrooms and flexible financing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/distributors">Distributors</Link></li>
              <li><Link href="/showroom">Showroom</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">For Customers</h3>
            <ul className="space-y-2">
              <li><Link href="/customers/apply-card">Apply Card</Link></li>
              <li><Link href="/showroom">Try Showroom</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-2">Get in Touch</h3>
          <p>Email: support@tileit3d.com</p>
          <p>WhatsApp: +1 (876) 555‑1234</p>
          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Tile-It-3D • All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}