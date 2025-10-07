import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";

export async function GET() {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Tile‑It‑3D Pricing Guide 2024", 20, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Simple. Transparent. Scalable.", 20, 30);

  doc.text("Starter Plan – $1 500 setup / $199 month", 20, 45);
  doc.text("Professional Plan – $3 000 setup / $499 month", 20, 55);
  doc.text("Enterprise White‑Label – $5 000 + setup / $799–999 month", 20, 65);

  doc.text("All plans include 3‑D Visualizer, QR Orders, Training, and Support.", 20, 80);

  const pdf = doc.output("arraybuffer");
  return new NextResponse(pdf, {
    headers: {
      "Content‑Type": "application/pdf",
      "Content‑Disposition": "attachment; filename=TileIt3D‑PricingGuide.pdf",
    },
  });
}