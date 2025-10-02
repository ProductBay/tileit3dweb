export default function AboutPage() {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-teal-400 mb-6">
          About Tile-It-3D
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
          Born in Kingston, Jamaica 🇯🇲, Tile-It-3D is revolutionizing tile and
          home design retail in the Caribbean and LATAM. Our mission is simple:
          empower distributors with future-ready tools and give customers 
          the clarity and confidence to build their dream spaces.
        </p>

        {/* Vision/Mission Sections */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#111] p-6 rounded-xl shadow border border-gray-800">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">
              🌍 Our Vision
            </h2>
            <p>
              To become the leading 3D design platform for tiles and surfaces 
              across the Caribbean and LATAM, giving every customer access to 
              cutting-edge visualization and flexible financing.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl shadow border border-gray-800">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">
              🚀 Our Mission
            </h2>
            <p>
              To empower distributors with white-labeled 3D showroom technology, 
              ensuring they can deliver premium digital experiences, close sales 
              faster, and grow customer satisfaction.
            </p>
          </div>
        </div>

        {/* Expansion Map Placeholder */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Expansion Roadmap
          </h2>
          <p className="text-gray-400 mb-6">
            Starting from Jamaica → then scaling across the Caribbean → and expanding 
            into LATAM markets like Mexico, Panama, Colombia, and Brazil.
          </p>
          <div className="bg-[#111] p-8 rounded-lg border border-gray-800">
            <p className="text-teal-400 italic">🚧 Map infographic placeholder (later we can add interactive map)</p>
          </div>
        </div>
      </div>
    </div>
  );
}