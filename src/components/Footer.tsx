export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-gray-800 text-gray-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-sm">
        
        {/* Brand Column */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Tile-It-3D</h2>
          <p>Futuristic 3D Tile Showrooms for the Caribbean & LATAM.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about">About</a></li>
            <li><a href="/distributors">Distributors</a></li>
            <li><a href="/customers/apply-card">Customers</a></li>
            <li><a href="/showroom">Showroom</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p>📍 Mayfield Blvd, Southfield, St. Elizabeth, Jamaica</p>
          <p>👤 Founder: Ashandie Powell</p>
          <p>📞 +1 (876) 594-7320 (Phone & WhatsApp)</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Tile-It-3D. All Rights Reserved.
      </div>
    </footer>
  );
}