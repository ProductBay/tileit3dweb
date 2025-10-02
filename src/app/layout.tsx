import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Global Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated Metadata for SEO and Credibility
export const metadata: Metadata = {
  title: "Tile‑It‑3D | Futuristic Showrooms | Jamaica • Caribbean • LATAM",
  description:
    "Tile‑It‑3D, founded by Ashandie Powell in St. Elizabeth, Jamaica, builds futuristic 3D tile showrooms with white‑label branding, financing integration, and photography services across the Caribbean & LATAM.",
  keywords: [
    "Tile‑It‑3D",
    "3D Tile Showroom",
    "Tile Financing Jamaica",
    "Caribbean Showroom Software",
    "Ashandie Powell",
    "Virtual Tile Distributor Tool",
    "White‑Label Showroom LATAM"
  ],
  authors: [{ name: "Ashandie Powell", url: "https://tileit3d.com" }],
  openGraph: {
    title: "Tile‑It‑3D | Futuristic 3D Tile Showrooms",
    description:
      "Futuristic white‑label 3D tile showroom software with financing integration (Tile‑It‑3D Card). Built in Jamaica, scaling to the Caribbean & LATAM.",
    url: "https://tileit3d.com",
    siteName: "Tile‑It‑3D",
    locale: "en_JM",
    type: "website",
  },
  metadataBase: new URL("https://tileit3d.com"),
  alternates: {
    canonical: "https://tileit3d.com",
  },
};

// ✅ Global Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0C10] text-white`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />

        {/* Embedded Global Contact Info (SEO/Accessibility) */}
        <footer className="hidden">
          {/* Hidden meta content for crawlers */}
          Tile‑It‑3D HQ: Mayfield Blvd, Southfield, St. Elizabeth, Jamaica. 
          Founder: Ashandie Powell. 
          Contact / WhatsApp: +1 (876) 594‑7320.
        </footer>
      </body>
    </html>
  );
}