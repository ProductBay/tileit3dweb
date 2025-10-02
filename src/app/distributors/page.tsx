"use client";

import Link from "next/link";
import Reveal from "../../components/Reveal";  // 👈 Import Reveal animation

type Distributor = {
  name: string;
  parish: string;
  logo: string;
  showroomLink: string;
};

const distributors: Distributor[] = [
  { name: "Kingston Tile Co.", parish: "Kingston", logo: "/logos/kingston.png", showroomLink: "https://3dshowroom.netlify.app/kingston-tileco" },
  { name: "Montego Bay Surfaces", parish: "St. James", logo: "/logos/mobay.png", showroomLink: "https://3dshowroom.netlify.app/mobay-surfaces" },
  { name: "Ocho Rios Tiles", parish: "St. Ann", logo: "/logos/ochorios.png", showroomLink: "https://3dshowroom.netlify.app/ocho-rios" },
  { name: "Spanish Town Ceramics", parish: "St. Catherine", logo: "/logos/spaintown.png", showroomLink: "https://3dshowroom.netlify.app/spanish-town" },
  { name: "Portmore Tile & Décor", parish: "St. Catherine", logo: "/logos/portmore.png", showroomLink: "https://3dshowroom.netlify.app/portmore" },
  { name: "Mandeville Tile Depot", parish: "Manchester", logo: "/logos/mandeville.png", showroomLink: "https://3dshowroom.netlify.app/mandeville" },
  { name: "Savanna-la-Mar Home Tiles", parish: "Westmoreland", logo: "/logos/sav.png", showroomLink: "https://3dshowroom.netlify.app/savanna" },
];

export default function DistributorsPage() {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen pt-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <Reveal>
          <h1 className="text-5xl font-bold text-teal-400 text-center mb-6">
            Our Distributor Network
          </h1>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Proudly serving Jamaica, Tile‑It‑3D is empowering leading tile distributors 
            across the island to provide fully interactive 3D showrooms for customers.
          </p>
        </Reveal>

        {/* Distributor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {distributors.map((dist, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="bg-[#111] rounded-xl p-6 border border-gray-800 text-center shadow hover:shadow-lg hover:scale-105 transition transform">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Logo</span>
                </div>
                <h2 className="text-xl font-semibold mb-1">{dist.name}</h2>
                <p className="text-gray-400 mb-4">{dist.parish}, Jamaica</p>
                <Link 
                  href={dist.showroomLink} 
                  target="_blank"
                  className="bg-teal-400 text-black px-4 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_#00F5FF] transition"
                >
                  Visit Showroom
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Reveal>
            <h3 className="text-2xl font-bold mb-4">Want to join the network?</h3>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              href="/distributors/demo"
              className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_#FF6B35] transition"
            >
              Become a Distributor
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}